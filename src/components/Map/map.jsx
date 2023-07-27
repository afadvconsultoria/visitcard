import { BiSolidMap } from "react-icons/bi";
import "./style.css";

export const Map = ({ link }) => {
  return (
    <li className="flex flex-row w-4/5 content-center ">
      <a
        className="flex items-center w-full justify-between text-base "
        href="https://www.google.com.br/maps/place/R.+Jos%C3%A9+da+Silva,+1485+-+Jardim+Paulistano,+Ribeir%C3%A3o+Preto+-+SP,+14090-344/@-21.1718511,-47.7939086,17z/data=!3m1!4b1!4m6!3m5!1s0x94b9bf0f051ad50d:0x62800ec3d7d155da!8m2!3d-21.1718561!4d-47.7913337!16s%2Fg%2F11c5j0dbv1?entry=ttu"
      >
        Escritorio
        <BiSolidMap className="icon map" />
      </a>
    </li>
  );
};
