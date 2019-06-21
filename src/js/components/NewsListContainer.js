// src/js/components/Form.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { NewsListComponent } from "./NewsListComponent";
import { NewsSelectedComponent } from "./NewsSelectedComponent";
import { SearchComponent } from "./SearchComponent";
import { getData, setSelectedNews } from "../actions/index";
import getNewsById from "../selector/NewsSelector";
import "./style.css";

function mapDispatchToProps(dispatch) {
  return {
    getNewsList: () => dispatch(getData()),
    setSelectedNews: id => dispatch(setSelectedNews(id))
  };
}
function mapStateToProps(state) {
  return {
    newsList: state.newsList,
    selectedNews: getNewsById(state)
  };
}

class NewsList extends Component {
  constructor() {
    super();
    this.state = {
      newsList: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getNewsList();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newsList !== this.props.newsList) {
      this.setState({ newsList: nextProps.newsList });
    }
  }

  handleChange(event) {
    const value = event.target.value;
    let { newsList } = this.props;

    if (value !== "") {
      newsList = newsList.filter(list => list.title.indexOf(value) > -1);
    } else {
      newsList = this.props.newsList;
    }

    this.setState({ newsList });
  }
  renderNewsList() {
    let leftPanelWidth = 500;
    let newsItem = this.state.newsList.map((newsItem, index) => {
      const border =
        this.props.selectedNews && newsItem.id === this.props.selectedNews.id
          ? "1px solid orange"
          : "1px solid black";
      return (
        <NewsListComponent
          key={index}
          styleDetails={{ width: leftPanelWidth, border }}
          newsItem={newsItem}
          setSelectedNews={this.props.setSelectedNews}
        />
      );
    });
    return newsItem;
  }
  render() {
    return (
      <div>
        <SearchComponent handleChange={this.handleChange} />
        <div className="news-items-wrapper">
          {this.props.newsList.length ? (
            <div>
              <div className="heading">
                <hr /> Most Popular Viewed News <hr />
              </div>
              <div className="news-container">
                <div className="left-side-panel">{this.renderNewsList()}</div>
                {this.props.selectedNews ? (
                  <NewsSelectedComponent
                    newsItem={this.props.selectedNews}
                    styleDetails={{ border: "1px solid black" }}
                  />
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsList);

export default NewsContainer;
