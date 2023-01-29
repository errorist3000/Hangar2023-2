const { generate } = require('@graphql-codegen/cli')
const { ESLint } = require('eslint') // eslint-disable-line  import/no-extraneous-dependencies
const path = require('path')

const ESLintConfig = require('../.eslintrc')

const DATOCMS_API_URL = `https://graphql.datocms.com`
const DATOCMS_TOKEN = `ed578a9e973ca39dad1660b1575a7c`

const SCHEMA = [
  {
    [DATOCMS_API_URL]: {
      headers: {
        Authorization: DATOCMS_TOKEN,
        'user-agent': 'JS GraphQL',
      },
    },
  },
]

const NAMESPACE_CONFIG = {
  noExport: true,
  declarationKind: 'interface',
  maybeValue: 'T | undefined', // NOTE: for components optional params compatibility
}
const CONSTANTS_CONFIG = {
  noUtility: true,
  noScalars: true,
  onlyEnums: true,
}

const plugin = path.resolve(__dirname, './codegenPlugin')

async function generateDatoNamespace() {
  const destPath = path.resolve(__dirname, '../src/Types/datoGraphQL.d.ts')

  await generate({
    schema: SCHEMA,
    overwrite: true,
    generates: {
      [destPath]: {
        config: {
          namingConvention: { enumValues: 'change-case-all#upperCaseFirst' },
        },

        plugins: [
          {
            add: {
              content: 'declare namespace DatoSchema {',
              placement: 'prepend',
            },
          },
          { add: { content: '}', placement: 'append' } },
          { [plugin]: NAMESPACE_CONFIG },
        ],
      },
    },
  })

  return {
    destPath,
  }
}

async function generateDatoOperationTypes() {
  const destPath = path.resolve(__dirname, '../src/Constants/datoGraphQL.ts')

  await generate({
    schema: SCHEMA,
    overwrite: true,
    generates: {
      [destPath]: {
        config: {
          namingConvention: { enumValues: 'change-case-all#upperCaseFirst' },
        },

        plugins: { [plugin]: CONSTANTS_CONFIG },
      },
    },
  })

  return {
    destPath,
  }
}

async function lintFiles(paths) {
  const eslint = new ESLint({ baseConfig: ESLintConfig, fix: true })
  const result = await eslint.lintFiles(paths)
  await ESLint.outputFixes(result)
}

async function main() {
  const { destPath: datoNamespaceDestPath } = await generateDatoNamespace()
  const { destPath: datoOperationTypesDestPath } =
    await generateDatoOperationTypes()

  await lintFiles([datoNamespaceDestPath, datoOperationTypesDestPath])
}

main().then()
