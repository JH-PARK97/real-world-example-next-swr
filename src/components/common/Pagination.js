import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";
import React, { useState } from "react";
import useSWR from "swr";

const Pagination = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data } = useSWR(`${API}${API_ENDPOINTS.ARTICLE.ROOT}/?offset=${pageIndex}`);

  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
