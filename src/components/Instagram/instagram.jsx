import { BsInstagram } from "react-icons/bs";
import "./style.css";

export const Instagram = ({ link }) => {
  return (
    <li className="flex flex-row w-4/5 content-center ">
      <a
        className="flex items-center w-full justify-between "
        href="https://www.instagram.com/dra.thaisn/"
      >
        Instagram
        <BsInstagram className="icon" />
      </a>
    </li>
  );
};
