import { BiLogoFacebookSquare } from "react-icons/bi";
import "./style.css";

export const Facebook = ({ link }) => {
  return (
    <li className="flex flex-row w-4/5 content-center ">
      <a
        className="flex items-center w-full justify-between text-base "
        href="https://www.facebook.com/alvesferreira.advconsultoria?mibextid=LQQJ4d"
      >
        Facebook
        <BiLogoFacebookSquare className="icon map" />
      </a>
    </li>
  );
};
