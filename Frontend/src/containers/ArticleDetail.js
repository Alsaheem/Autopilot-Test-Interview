import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import CustomForm from "../components/Form";

const ArticleDetail = (props) => {
  const { articleID } = useParams();
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    // effect

    axios.get(`http://127.0.0.1:8000/api/${articleID}/`).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    history.replace("/");
  };

  let article_date = new Date(data.created);

  return (
    <div className="container">
      <div className="jumbotron ">
        <h1 className="display-4 text-center">{data.title}</h1>
        <p>created At : {article_date.toDateString()}</p>
        <img
          src={data.image}
          alt="Responsive image"
          width="100%"
          height="350px"
        ></img>
        <i className="mt-2 fa fa-2x fa-heart  text-danger text-right"></i>
        {data.id} likes
      </div>
      <div className="mb-4 text-capitalize">
        <h4>{data.content}</h4>
      </div>
      <hr />
      <hr />
      <hr />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Edit or delete the Article here</h3>

          <CustomForm
            requestType="put"
            articleID={articleID}
            btnText="Update"
          />
          <form onSubmit={handleDelete}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
