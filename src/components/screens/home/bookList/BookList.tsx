import { useState, useEffect } from "react";
import axios from "axios";

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
  };
}

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=programming"
        );
        console.log(response.data.items);

        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.volumeInfo.title}</h3>
              {book.volumeInfo.imageLinks && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={`Cover of ${book.volumeInfo.title}`}
                />
              )}
              <p>Published Year: {book.volumeInfo.publishedDate}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;
