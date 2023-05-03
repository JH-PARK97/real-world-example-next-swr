import { API_URL } from "@/constants/API";
import React from "react";
import useSWR from "swr";

const TagList = () => {
  const { data, isLoading } = useSWR(API_URL.TAG.ROOT);

  if (isLoading) {
    return <p>Loading. . </p>;
  }

  const clickTagButton = () => {
    console.log("버튼클릭");
  };

  return (
    <div className="tag-list">
      {data?.tags?.map((tag) => (
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
