import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const CustomForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");
  let id;

  let history = useHistory();

  const handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: props.token,
    };

    let data = {
      title: title,
      content: content,
      image: imageUrl,
    };

    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", data)
          .then((response) => {
            console.log(response.data);
            history.push(`/${response.data.id}`);
          })
          .catch((err) => {
            setError(err.message);
          });

      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, data)
          .then((response) => {
            console.log(response.data);
            props.history.replace("/");
          })
          .catch((err) => setError(err.message));

      default:
        break;
    }
  };

  return (
    <div>
      {error && (
        <div class="alert alert-danger" role="alert">
          You must be logged on to Create or Edit An article
        </div>
      )}

      <form
        onSubmit={(event) =>
          handleFormSubmit(event, props.requestType, props.articleID)
        }
      >
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Image Url</label>
          <input
            type="url"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Content</label>
          <textarea
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={content}
            required
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {props.btnText}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};
export default connect(mapStateToProps)(CustomForm);
