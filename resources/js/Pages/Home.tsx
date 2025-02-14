import { Head, Link, usePage } from "@inertiajs/react";
import Header from "../Components/Header";
import About from "./About";
import Learn from "./Learn";


export default function Home({posts}:{posts:any}) {
    return (
        <div className="flex flex-col justify-center sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
            <Head title="Kudzai Chifamba" />
            <Header name={'Goku'}/>
            <About />
            <Learn posts={posts}/>
        </div>
);
}