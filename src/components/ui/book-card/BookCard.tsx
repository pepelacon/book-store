// BookCard.tsx
import { Button } from "@mui/material";
import React from "react";
import styles from "./BookCard.module.scss";

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

interface BookCardProps extends Book {
  active: boolean;
  onCardClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  volumeInfo,
  active,
  onCardClick,
}) => {
  const isTilted = active ? styles.tilted : styles.nontilted;

  // const handleCardClick = () => {
  //   onCardClick();
  // };

  return (
    <div
      className={`bookContainer ${isTilted} mx-auto text-center`}
      onClick={active ? onCardClick : undefined}
    >
      {active ? (
        <h3 className="mb-6"> </h3>
      ) : (
        <h3 className="line-clamp-1 w-52 text-sm mb-2">{volumeInfo.title}</h3>
      )}
      {volumeInfo.imageLinks && (
        <img
          className="w-40 h-52 drop-shadow-3xl mx-auto "
          src={volumeInfo.imageLinks.thumbnail}
          alt={`Cover of ${volumeInfo.title}`}
          draggable="false"
        />
      )}
      <Button />
      {/* <p>Published Year: {volumeInfo.publishedDate}</p> */}
    </div>
  );
};

export default BookCard;
