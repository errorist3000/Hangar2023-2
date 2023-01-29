const {
  getConfigValue,
  indent,
  transformComment,
  DeclarationBlock,
} = require('@graphql-codegen/visitor-plugin-common')
const { TsVisitor } = require('@graphql-codegen/typescript')

class SCVisitor extends TsVisitor {
  constructor(schema, pluginConfig, additionalConfig = {}) {
    super(schema, pluginConfig, {
      noScalars: getConfigValue(pluginConfig.noScalars, false),
      noUtility: getConfigValue(pluginConfig.noUtility, false),
      noUtilityExport: getConfigValue(pluginConfig.noUtilityExport, false),
      noScalarsExport: getConfigValue(pluginConfig.noScalarsExport, false),
      onlyEnums: getConfigValue(pluginConfig.onlyEnums, false),
      namingConvention: { enumValues: 'change-case-all#upperCaseFirst' },
      ...additionalConfig,
    })
  }

  getExportPrefix() {
    if (this.config.noExport || this.config.noUtilityExport) {
      return ''
    }

    return super.getExportPrefix()
  }

  getWrapperDefinitions() {
    if (this.config.noUtility) return []
    return super.getWrapperDefinitions()
  }

  get scalarsDefinition() {
    if (this.config.noScalars) return []

    const allScalars = Object.keys(this.config.scalars).map(scalarName => {
      const scalarValue = this.config.scalars[scalarName].type
      const scalarType = this._schema.getType(scalarName) // eslint-disable-line no-underscore-dangle
      const comment =
        scalarType && scalarType.astNode && scalarType.description
          ? transformComment(scalarType.description, 1)
          : ''
      const { scalar } = this._parsedConfig.declarationKind // eslint-disable-line no-underscore-dangle
      return (
        comment +
        indent(`${scalarName}: ${scalarValue}${this.getPunctuation(scalar)}`)
      )
    })

    return new DeclarationBlock({
      ...this._declarationBlockConfig, // eslint-disable-line no-underscore-dangle
      ignoreExport: this.config.noExport || this.config.noScalarsExport,
    })
      .export()
      .asKind(this._parsedConfig.declarationKind.scalar) // eslint-disable-line no-underscore-dangle
      .withName('Scalars')
      .withComment(
        'All built-in and custom scalars, mapped to their actual values',
      )
      .withBlock(allScalars.join('\n')).string
  }

  InputObjectTypeDefinition(node) {
    if (this.config.onlyEnums) return ''
    return super.InputObjectTypeDefinition(node)
  }

  UnionTypeDefinition(node, key, parent) {
    if (this.config.onlyEnums) return ''
    return super.UnionTypeDefinition(node, key, parent)
  }

  InterfaceTypeDefinition(node, key, parent) {
    if (this.config.onlyEnums) return ''
    return super.InterfaceTypeDefinition(node, key, parent)
  }

  ObjectTypeDefinition(node, key, parent) {
    if (this.config.onlyEnums) return ''
    return super.ObjectTypeDefinition(node, key, parent)
  }
}

module.exports = SCVisitor
