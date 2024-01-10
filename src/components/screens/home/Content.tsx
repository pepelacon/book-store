import AboveShelf from "./above/AboveShelf";
import BookList from "./bookList/BookList";
import Shelf from "./shelf/Shelf";

const Content = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="w-11/12 mx-auto my-8 flex flex-row items-center h-1/2">
        <AboveShelf />
      </div>
      <div className="h-1/5 my-auto mt-auto">
        <Shelf />
      </div>
      <div className="w-11/12 flex flex-row mx-auto mb-8 items-center h-1/2 ">
        <div className="flex justify-center w-1/12">
          <p
            className="text-lg font-serif -rotate-90 mr-8"
            style={{ whiteSpace: "nowrap" }}
          >
            Recent bestsellers
          </p>
        </div>
        <BookList />
      </div>
    </div>
  );
};

export default Content;
