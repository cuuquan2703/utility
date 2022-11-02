import Head from "next/head";
import Image from "next/image";
import Carousel from "../Components/Carousel/Carousel";
import styles from "../styles/Home.module.css";

export default function Home() {
  const slide = ["../public/1.jpg", "../public/2.jpg"];

  return (
    <div className="App">
      <Carousel limit={4} slide={slide} />
    </div>
  );
}
