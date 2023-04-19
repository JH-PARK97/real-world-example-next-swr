import { API_ENDPOINTS } from "@/constants/constant";
import { API } from "@/constants/env";
import React from "react";
import useSWR from "swr";

const TAG_API = `${API}${API_ENDPOINTS.TAGS.ROOT}`;

const TagList = () => {
  const { data } = useSWR(TAG_API);

  const clickTagButton = () => {
    console.log("버튼클릭");
  };

  return (
    <div className="tag-list">
      {data.tags.map((tag) => (
        <button
          onClick={clickTagButton}
          style={{
            border: "0px",
          }}
          key={tag}
          className="tag-pill tag-default"
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagList;
