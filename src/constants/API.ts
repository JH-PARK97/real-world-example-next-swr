import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";

export const API_URL = {
    ARTICLE_API: `${API}${API_ENDPOINTS.ARTICLE.ROOT}`,
    TAG_API: `${API}${API_ENDPOINTS.TAGS.ROOT}`

}