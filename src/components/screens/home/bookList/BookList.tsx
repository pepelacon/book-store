// BookList.tsx
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "../../../ui/book-card/BookCard";
import debounce from "lodash/debounce";

interface Book {
  id: number;
  volumeInfo: {
    title: string;
    imageLinks?: {
      thumbnail: string;
    };
    publishedDate?: string;
  };
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const BookList = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [activeIndex, setActiveIndex] = useState(4);
  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=programming"
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = () => {
    setActiveIndex((prev) => (prev + 1) % books.length);
    const slidesHavePassed = 1;
    carouselRef.current?.next(slidesHavePassed);
  };

  const allBooks = books.map((book, index) => (
    <BookCard
      key={book.id}
      {...book}
      active={index === activeIndex}
      onCardClick={handleCardClick}
    />
  ));

  return (
    <div className="w-11/12">
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={1000}
        focusOnSelect={false}
        arrows={false}
        customTransition="transform 1s linear"
        containerClass="bookCarousel"
        ref={carouselRef}
      >
        {allBooks}
      </Carousel>
    </div>
  );
};

export default BookList;
