

export function showChildren(item: any) {
  return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
}

export function getNameOrHref (item: any, children0: Boolean) {
  return item.href ? `isTurnByHref_${item.href}` : (children0 ? item.children[0].name : item.name)
}