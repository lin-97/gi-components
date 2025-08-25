const prefix = 'gi'
export function useBemClass() {
  const b = (name: string = '') => `${prefix}-${name ? `${name}` : ''}`

  return { b }
}
