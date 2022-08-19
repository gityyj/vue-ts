

export function showChildren(item: any) {
  return item.children && (item.children.length > 1 || (item.meta && item.meta.showAlways))
}

export function getNameOrHref (item: any, children?: Boolean) {
  return item.href ? `isTurnByHref_${item.href}` : (children ? item.children[0].name : item.name)
}