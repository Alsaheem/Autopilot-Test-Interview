import React, { useState } from "react";

import { Link } from "react-router-dom";

const Article = ({ data }) => {
  let article_date = new Date(data.created)
  return (
    <div class="col-md-6 ">
      <div class="row border-danger border-left shadow no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col  p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Design</strong>
          <Link to={`/${data.id}`}><h3 class="mb-0 text-dark">{data.title}</h3></Link>
          <div class="mb-1 text-muted">{article_date.toDateString()}</div>
          <p class="mb-auto">{data.content.slice(0, 65)}...</p>
          <div className="row">
            <div className="col-6">
              <Link to={`/${data.id}`}>Read More...</Link>
            </div>
            <div className="col-6">
              {data.id} likes
              <i className=" ml-3 fa fa-heart  text-danger text-right"></i>
            </div>
          </div>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img
            className="zoom"
            src={data.image}
            alt=""
            width="200"
            height="250"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
