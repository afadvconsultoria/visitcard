import Image from "next/image";
import logo from "../../public/logothais.png";
import adornment from "../../public/adorno.png";
import { Instagram } from "@/components/Instagram/instagram";
import { Email } from "@/components/Email/email";
import { Whatsapp } from "@/components/Whatsapp/whatsapp";
import { Map } from "@/components/Map/map";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5 w-4/5  max-w-7xl">
      <nav className="flex  items-center justify-between ">
        <Image src={logo} width={300} height={200} />
      </nav>
      <Image src={adornment} width={170} className="mt-10 spanNav" />
      <section className="flex w-full mt-10  justify-center">
        <ul className="flex flex-col gap-6 w-full items-center justify-center ">
          <Instagram />
          <Email />
          <Whatsapp />
          <Map />
        </ul>
      </section>
    </main>
  );
}
