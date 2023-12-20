import { SlUser } from "react-icons/sl";
import { IoBagOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { SlEarphones } from "react-icons/sl";

import img from "/public/avatar.jpeg";
import logo from "/public/logo.png";

import styles from "./Header.module.scss";
import { SetStateAction, useState } from "react";

const Header = () => {
  const [type, setType] = useState("books");

  function handleRoleChange(newType: SetStateAction<string>) {
    setType(newType);
  }

  return (
    <header className={styles.header}>
      <div className={styles.column}>
        <div className={styles.fr}>
          <img className={styles.log} src={logo} alt="Profile" />
        </div>
      </div>

      <div className={styles.column}>
        <div className={styles.md}>
          <button
            className={`${
              type === "books" ? "bg-pickedtype text-black" : null
            } rounded-full px-4 cursor-pointer transition ease-in-out duration-1000`}
            onClick={() => handleRoleChange("books")}
          >
            <GiBookshelf size={30} className="mr-2" />
            Books
          </button>
          <button
            className={`${
              type === "audiobooks" ? "bg-pickedtype text-black" : null
            } rounded-full py-2 px-4 cursor-pointer  transition ease-in-out duration-1000`}
            onClick={() => handleRoleChange("audiobooks")}
          >
            <SlEarphones size={25} className="mr-2" />
            AudioBooks
          </button>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.ls}>
          <button className={styles.bt}>
            <SlUser color="#36454F" size={25} />
          </button>
          <button className={styles.bt}>
            <IoBagOutline color="#36454F" size={25} />
          </button>
          <img
            className="w-8 ml-2 rounded-full object-cover"
            src={img}
            alt="Profile"
          />
          <button className={styles.bt}>
            <BsThreeDotsVertical color="#36454F" size={25} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
