import AboveShelf from "./above/AboveShelf";
import Search from "./above/search/Search";
import BookList from "./bookList/BookList";
import Shelf from "./shelf/Shelf";

const Content = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="w-11/12 mx-auto my-16 flex flex-row items-center h-1/2">
        <AboveShelf />
      </div>
      <div className="h-1/5 my-auto mt-auto">
        {" "}
        {/* Use mt-auto here */}
        <Shelf />
      </div>
      <div className="flex my-16 items-center mx-auto  h-1/2">
        <p className="text-lg">some text</p>
        {/* Uncomment the following line to include the BookList component */}
        {/* <BookList /> */}
      </div>
    </div>
  );
};

export default Content;
