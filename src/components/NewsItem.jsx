import React, { Component } from "react";
import logo from "../assets/logo.png";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3 h-100">
        <div className="card shadow-lg h-100">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "86%", zIndex: 1 }}
          >
            {source}
          </span>
          <img
            src={imageUrl ? imageUrl : logo}
            className="card-img-top"
            alt="Image"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                On: {date} By: {author}
              </small>
            </p>
            <div className="mt-auto">
              <a
                href={newsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-primary"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
