export const useMediaUrl = (path) => {
    const { apiUrl } = useConfigs();
    
    if (!path) return ''
    if (path.startsWith('http')) return path
    return `${apiUrl}${path}`
  }