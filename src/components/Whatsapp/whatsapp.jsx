import { BsWhatsapp } from "react-icons/bs";
import "./style.css";
export const Whatsapp = ({ link }) => {
  return (
    <li className="flex flex-row w-4/5 content-center ">
      <a
        className="flex items-center w-full justify-between "
        href="https://wa.me/5511992989466"
      >
        Whatsapp
        <BsWhatsapp className="icon" />
      </a>
    </li>
  );
};
