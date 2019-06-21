import React from "react";
export const NewsSelectedComponent = props => (
  <div
    style={props.styleDetails}
    className="detail-box my-3 p-3 bg-white rounded box-shadow"
  >
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Title - {props.newsItem.title}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Description - {props.newsItem.abstract}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Published Date - {props.newsItem.published_date}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Source - {props.newsItem.source}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Updated Date - {props.newsItem.updated}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Source - {props.newsItem.source}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Subsection - {props.newsItem.subsection}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Email Count - {props.newsItem.email_count}
    </span>
    <span className="border-bottom border-gray pb-2 pt-2 mb-0">
      Count Type - {props.newsItem.count_type}
    </span>
    <div className="media text-muted pt-3">
      <img
        data-src="holder.js/32x32?theme=thumb&bg=007bff&fg=007bff&size=1"
        alt=""
        className="mr-2 rounded"
      />
    </div>
  </div>
);
