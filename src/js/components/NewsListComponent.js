import React from "react";
export const NewsListComponent = props => (
  <div
    style={props.styleDetails}
    onClick={() => props.setSelectedNews(props.newsItem.id)}
    className="my-3 p-3 mr-3 bg-white rounded box-shadow"
  >
    <h6 className="border-bottom border-gray pb-2 mb-0">
      Title - {props.newsItem.title}
    </h6>
    <h6 className="border-bottom border-gray pb-2 mb-0 mt-2">
      Description - {props.newsItem.abstract}
    </h6>
    <div className="media text-muted pt-3">
      <img
        data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
        alt=""
        className="mr-2 rounded"
      />
    </div>
  </div>
);
