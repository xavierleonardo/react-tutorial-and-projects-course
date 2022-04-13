// CSS
import "./index.css";

import ReactDOM from "react-dom";
import SpecificBook from "./Book";
import { data } from "./books";
import { greeting } from "./testing/testing";

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book, index) => (
        <SpecificBook key={book.id} {...book} />
      ))}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
