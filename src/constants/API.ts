import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";

export const API_URL = {
    ARTICLE: {
        ROOT: `${API}${API_ENDPOINTS.ARTICLE.ROOT}`,
        DETAIL: (slug: string | number) => `${API}${API_ENDPOINTS.ARTICLE.DETAIL(slug)}`,

        COMMENT: {
            ROOT: (slug: string | number) => `${API}${API_ENDPOINTS.ARTICLE.COMMENT.ROOT(slug)}`,
            DELETE: (slug: string | number, id: string | number) => `${API}${API_ENDPOINTS.ARTICLE.COMMENT.DELETE(slug, id)}`
        }
    },

    TAG: {
        ROOT: `${API}${API_ENDPOINTS.TAGS.ROOT}`,
    }


}