import "./index.css";
import ReactDOM from "react-dom";

// setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg",
    title: "The Vanish Half: A Novel",
    author: "Brit Bennett",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book, index) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
