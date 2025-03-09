import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Form from "../Components/Form";

export default function Home() {
  return (
    <div id="root">
      <div className="flex flex-col justify-center items-center">
        <Head title="Kudzai Chifamba" />
        <div id="top"><Header name={'Kudzai'} /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="about"><About /></div>
        <div id="contact"><Form /></div>
      </div>
    </div>
  );
}
