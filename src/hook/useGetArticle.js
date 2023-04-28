import { API_URL } from "@/constants/API";
import { fetcher } from "src/utills/fetcher";
import useSWR from "swr";
const useGetArticle = () => {
  const { data, error } = useSWR(API_URL.ARTICLE.ROOT, fetcher);
  return {
    article: data,
    ieError: error,
    isLoading: !error && !data,
  };
};

export default useGetArticle;
