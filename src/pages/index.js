import { useEffect } from "react";
import Head from "next/head";
import Hero from "@/components/hero";
import Instagram from "@/components/instagram";
import Winkel from "@/components/winkel";
import Reviews from "@/components/reviews";

export default function Home() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Kapper Dede</title>
          <meta name="description" content="Welkom op de website van Kapper Dede. Bekijk onze diensten en maak direct een afspraak voor een frisse look!" />
          <meta name="og:description" content="Welkom op de website van Kapper Dede. Bekijk onze diensten en maak direct een afspraak voor een frisse look!" />
          <meta name="keywords" content="kapper, Kapper Dede, haar, styling, knippen, overloop, fade, opscheer, knipklok, wax, kapsalon, afspraak maken" />
          <meta property="og:url" content="https://www.kapperdede.com" />
          <meta property="og:title" content="Kapper Dede" />
      </Head>
      <Hero/>
      <Instagram/>
      <Winkel/>
      <Reviews/>
    </>
  );
}
