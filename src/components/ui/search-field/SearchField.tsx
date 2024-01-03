import { ChangeEvent, FC } from "react";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchField.module.scss";

interface ISearchField {
  searchTerm: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
  return (
    <div className={styles.search}>
      <SearchIcon name="MdSearch" />
      <input placeholder="Search" value={searchTerm} onChange={handleSearch} />
    </div>
  );
};

export default SearchField;
