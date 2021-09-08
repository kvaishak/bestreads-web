import React from "react";

import Layout from "../Layout/Layout";
import CurrentSectionUI from "../../components/CurrentSectionUI/CurrentSectionUI";

import { useBooks, bookStatus } from "../../hooks/useBooks";
import FinishedSectionUI from "../../components/FinishedSectionUI/FinishedSectionUI";
import ToReadSectionUI from "../../components/ToReadSectionUI/ToReadSectionUI";
import Loader from "../../utils/Loader/Loader";

const Dashboard = () => {
  const { data } = useBooks();

  console.log("hello there");
  console.log(data.books);
  var currentlyReadingBooks = [],
    finishedReadingBooks = [],
    toReadBooks = [];

  data.books.forEach((book) => {
    switch (book.status) {
      case bookStatus.currentlyReading:
        currentlyReadingBooks.push(book);
        break;
      case bookStatus.finishedReading:
        finishedReadingBooks.push(book);
        break;
      case bookStatus.toRead:
        toReadBooks.push(book);
        break;
      default:
        currentlyReadingBooks.push(book);
    }
  });

  if (data.books.length === 0) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return (
    <Layout>
      <CurrentSectionUI books={currentlyReadingBooks} />
      {finishedReadingBooks.length > 0 && (
        <FinishedSectionUI books={finishedReadingBooks} />
      )}
      {toReadBooks.length > 0 && <ToReadSectionUI books={toReadBooks} />}
    </Layout>
  );
};

export default Dashboard;
