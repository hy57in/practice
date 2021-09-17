import React, { Component } from "react";
import List from "./List";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers";

class HistoryList extends Component {
  constructor() {
    super();
    this.state = { historyList: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  handleClickRemove(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    const { onClick } = this.props;
    const { historyList } = this.state;

    return (
      <List
        data={historyList}
        onClick={onClick}
        renderItem={(item) => (
          <>
            <span>{item.keyword}</span>
            <span className="date">{formatRelativeDate(item.date)}</span>
            <button
              className="btn-remove"
              onClick={(event) => this.handleClickRemove(event, item.keyword)}
            />
          </>
        )}
      ></List>
    );
  }
}

export default HistoryList;
