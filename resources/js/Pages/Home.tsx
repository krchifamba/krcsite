import { Head } from "@inertiajs/react";
import Header from "../Components/Header";
import About from "./About";
import Portfolio from "./Portfolio";
import Form from "../Components/Form";
import FadeIn from "../Components/Framer";

export default function Home() {
  return (
    <div id="root">
      <div className="flex flex-col justify-center items-center">
        <Head title="Kudzai Chifamba" />
        <FadeIn>
          <div id="top"><Header name={'Kudzai'} /></div>
        </FadeIn>
        <FadeIn>
          <div id="portfolio"><Portfolio /></div>
        </FadeIn>
        <FadeIn>
          <div id="about"><About /></div>
        </FadeIn>
        <FadeIn>
          <div id="contact"><Form /></div>
        </FadeIn>
      </div>
    </div>
  );
}
