import React from "react";
import { forwardRef } from "react";

import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const url =
  "https://cors-anywhere.herokuapp.com/" +
  "https://www.goodreads.com/review/list/108291935.xml?key=" +
  GR_KEY +
  "&v=2&shelf=read&sort=date_read&per_page=200";

export default class Booklist extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch(url)
      .then((response) => response.text())
      .then(
        (bookData) => this.setState({ loading: false, bookData }),
        (error) => this.setState({ loading: false, error })
      );
  }

  renderLoading() {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  renderError() {
    return <div>I'm sorry! Please try again.</div>;
  }

  renderBookData() {
    var parser = new DOMParser(),
      xmlDocument = parser.parseFromString(this.state.bookData, "text/xml");
    let length = xmlDocument.getElementsByTagName("review").length - 1;
    let bookReviews = [];
    for (let i = 0; i <= length; i++) {
      bookReviews[i] = {
        title: xmlDocument.getElementsByTagName("title")[i].innerHTML,
        author: xmlDocument.getElementsByTagName("name")[i].innerHTML,
        date: new Date(
          Date.parse(xmlDocument.getElementsByTagName("read_at")[i].innerHTML)
        ).toLocaleDateString(),
        rating: xmlDocument.getElementsByTagName("rating")[i].innerHTML,
        review: xmlDocument.getElementsByTagName("body")[i].innerHTML,
      };
    }

    return (
      <div>
        <MaterialTable
          icons={tableIcons}
          title="Book Reviews "
          columns={[
            {
              title: "Title",
              field: "title",
              width: 20,
            },
            {
              title: "Author",
              field: "author",
              width: 15,
              padding: "2px",
            },
            { title: "Date", field: "date", width: 6 },
            { title: "Stars", field: "rating", width: 1 },
          ]}
          data={bookReviews}
          options={{
            headerStyle: {
              backgroundColor: "#DEDEDF",
              color: "#000000",
            },
            padding: "dense",
          }}
          detailPanel={(bookReviews) => {
            return (
              <div>
                <h1>Review</h1>
                <div>
                  {
                    //Check if message failed
                    bookReviews.review.length > 4 ? (
                      <div>
                        {" "}
                        <p>{bookReviews.review}</p>{" "}
                      </div>
                    ) : (
                      <div>
                        {" "}
                        <p>
                          Sorry, I haven't written a review for this one yet.
                        </p>{" "}
                      </div>
                    )
                  }
                </div>
              </div>
            );
          }}
          onRowClick={(event, bookReviews, togglePanel) => togglePanel()}
        />
      </div>
    );
  }

  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.bookData) {
      return this.renderBookData();
    } else {
      return this.renderError();
    }
  }
}
