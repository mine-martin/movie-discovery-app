import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import FeaturedMovies from "@/components/Featured/FeaturedMovies";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <section>
        <Navbar />
      </section>
      <section className=" pb-4">
        <Hero />
      </section>
      <section className="sm:px-[1rem] px-8 sm:py-5 py-4 ">
        <FeaturedMovies />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
