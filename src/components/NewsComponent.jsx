import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36fc7835ee6844e686cbc87632e95703&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=36fc7835ee6844e686cbc87632e95703&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  handlenextclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=36fc7835ee6844e686cbc87632e95703&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center mb-4 fw-bold" style={{ marginTop: "90px" }}>
          Today's Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h3>
        {this.state.loading && <Loading />}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col" key={element.url}>
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 45) +
                          (element.title.length > 50 ? "..." : "")
                        : ""
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 85) +
                          (element.description.length > 85 ? "..." : "")
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={
                      element.publishedAt
                        ? new Date(element.publishedAt).toLocaleString()
                        : "Unknown"
                    }
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-light"
            onClick={this.handleprevclick}
          >
            {"<"} Prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-light"
            onClick={this.handlenextclick}
          >
            Next {">"}
          </button>
        </div>
      </div>
    );
  }
}
