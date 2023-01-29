const { transformSchemaAST } = require('@graphql-codegen/schema-ast')
const { oldVisit } = require('@graphql-codegen/plugin-helpers')
const {
  includeIntrospectionTypesDefinitions,
} = require('@graphql-codegen/typescript')
const SCVisitor = require('./visitor')

module.exports = {
  plugin(schema, documents, config) {
    const { schema: _schema, ast } = transformSchemaAST(schema, config)

    const visitor = new SCVisitor(_schema, config)
    const visitorResult = oldVisit(ast, { leave: visitor })

    return {
      prepend: [
        ...visitor.getEnumsImports(),
        ...visitor.getDirectiveArgumentAndInputFieldMappingsImports(),
        ...visitor.getScalarsImports(),
        ...visitor.getWrapperDefinitions(),
      ],
      content: [
        visitor.scalarsDefinition,
        visitor.directiveArgumentAndInputFieldMappingsDefinition,
        ...visitorResult.definitions,
        ...includeIntrospectionTypesDefinitions(_schema, documents, config),
      ]
        .filter(Boolean)
        .join('\n'),
    }
  },
}
