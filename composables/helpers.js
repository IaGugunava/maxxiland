import { ka } from "date-fns/locale";
import { format } from "date-fns"

export const useConfigs = () => {
    const config = useRuntimeConfig();
    return {
        apiUrl: config.public.NUXT_PUBLIC_BASE_URL,
    };
};

export const apiFetch = (path, options = {}) => {
    const { apiUrl } = useConfigs();
  
    return useFetch(path, {
        method: 'GET',
      baseURL: apiUrl,
      ...options
    });
};

export const getSingleUrl = (path, item) => {
    const id = item?.id;
    const slug = item?.slug.toLowerCase().split(" ").join("-");
    return `/${path}/${id}-${slug}`
}

export const formatDate = (date, formatValue) => {
  return format(new Date(date), formatValue, {
    locale: ka
  });
};