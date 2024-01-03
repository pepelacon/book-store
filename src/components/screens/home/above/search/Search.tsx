import { ChangeEvent, FC } from "react";
// import styles from "./Search.module.scss";
import SearchField from "../../../../ui/search-field/SearchField";
const Search: FC = () => {
  return (
    <div className="flex flex-col items-center text-center ">
      <p className="w-64 font-serif text-3xl font-bold">
        Bestsellers and popular books
      </p>
      <p className="font-serif text-xl my-2">
        Explore the world of newly published works by authors
      </p>
      <SearchField
        searchTerm={""}
        handleSearch={(event: ChangeEvent<HTMLInputElement>) => {}}
      />
    </div>
  );
};

export default Search;
