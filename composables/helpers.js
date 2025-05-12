export const useConfigs = () => {
    const config = useRuntimeConfig();
    return {
        apiUrl: config.public.NUXT_PUBLIC_BASE_URL,
    };
};

export const apiFetch = (path, options = {}) => {
    const { apiUrl } = useConfigs();
  
    return useFetch(path, {
      baseURL: apiUrl,
      ...options
    });
};