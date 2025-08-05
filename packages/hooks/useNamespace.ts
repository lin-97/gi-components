const prefix = 'gi'
export function useNamespace(block: string) {
  const cls = `${prefix}-${block}`
  const b = (name: string = '') => `${cls}${name ? `${name}` : ''}`

  return { b }
}
