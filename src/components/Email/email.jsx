import { SiGmail } from "react-icons/si";
import "./style.css";

export const Email = ({ link }) => {
  return (
    <li className="flex flex-row w-4/5 content-center ">
      <a
        className="flex items-center w-full justify-between "
        href="mailto:leticia.barrico@hotmail.com"
      >
        E-mail
        <SiGmail className="icon" />
      </a>
    </li>
  );
};
