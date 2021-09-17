import React, { Component } from "react";
import List from "./List";
import store from "../Store.js";

class KeywordList extends Component {
  constructor() {
    super();
    this.state = { keywordList: [] };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    const { onClick } = this.props;
    const { keywordList } = this.state;

    return (
      <List
        data={keywordList}
        onClick={onClick}
        renderItem={(item, index) => (
          <>
            <span className="number">{index + 1}</span>
            <span>{item.keyword}</span>
          </>
        )}
      ></List>
    );
  }
}

export default KeywordList;
