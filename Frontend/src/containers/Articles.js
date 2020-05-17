import React, { useEffect, useState, useRef } from "react";
import Article from "../components/Article";
import axios from "axios";
import CustomForm from "../components/Form";
import { connect } from "react-redux";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Aritcles = (props) => {
  // state stuff
  const [data, setData] = useState([]);

  const myRef = useRef();
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: props.token,
    };
    // effect
    axios.get("http://127.0.0.1:8000/api/").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div
        class="jumbotron p-4 p-md-5 text-dark rounded"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1536060316316-2466bda904f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
          backgroundSize: "cover",
        }}
      >
        <div class="col-md-6 px-0">
          <h1
            class="display-4 font-weight-bold"
            style={{ color: "rgb(90, 94, 176)" }}
          >
            Life of an Awesome Blogger
          </h1>
          <p class="lead my-3 text-italic" style={{ color: "#0c15dc" }}>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what’s most interesting in this post’s
            contents.
          </p>
        </div>
      </div>

      <button class=" btn bg-success text-white mb-3 " onClick={executeScroll}>
        <i class="fa fa-plus mr-3  fa-2x ">New Post</i>
      </button>
      <div className="row mb-2">
        {data.map((article) => {
          return <Article key={data.id} data={article} />;
        })}
      </div>
      <div className="col-md-6 offset-md-3" ref={myRef}>
        <div class="card mt-4">
          <div class="card-header font-weight-bold text-center">
            <h3> Create New Post...</h3>
          </div>
          <div class="card-body">
            <CustomForm requestType="post" btnText="Create Post" />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Aritcles);
