import React, { Component } from "react";
import logo from "../assets/logo.png";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        <div className="card shadow-lg">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '86%', zIndex: 1 }}>
            {source}
          </span>
          <img
            src={imageUrl ? imageUrl : logo}
            className="card-img-top"
            alt="Image"
          ></img>
          <div className="card-body">
            <h5 className="card-title">
              {title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                On: {date} By: {author}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
