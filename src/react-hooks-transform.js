export default (file, { jscodeshift: j }) => {
  const root = j(file.source)

  const removeWithHooksHOC = path => {
    j(path).replaceWith(p => {
      return p.value.arguments[0]
    })
  }

  const swapImportSourceToReact = path => {
    j(path)
      .find(j.Literal, { value: 'react-with-hooks' })
      .replaceWith(p => p.value = "'react'")
  }

  const removeWithHooksDefaultImport =  path => {
    j(path)
    .find(j.ImportDefaultSpecifier, { local: { name: 'withHooks' }})
    .remove()
  }

  root.find(j.CallExpression, { callee: { name: 'withHooks' }})
    .forEach(removeWithHooksHOC)

  root.find(j.ImportDeclaration, { source: { value: 'react-with-hooks' }})
    .forEach(p => (swapImportSourceToReact(p), removeWithHooksDefaultImport(p) ))

  return root.toSource()
}