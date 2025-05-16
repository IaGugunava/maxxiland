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

export const getSingleUrl = (path, item) => {
    const id = item?.id;
    const slug = item?.name.toLowerCase().split(" ").join("-");
    return `/${path}/${id}-${slug}`
}
