import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";

export const API_URL = {
    ARTICLE: {
        ROOT: `${API}${API_ENDPOINTS.ARTICLE.ROOT}`,
        DETAIL: (slug: string | number) => `${API}${API_ENDPOINTS.ARTICLE.DETAIL(slug)}`,
    },

    TAG: {
        ROOT: `${API}${API_ENDPOINTS.TAGS.ROOT}`,
    }


}