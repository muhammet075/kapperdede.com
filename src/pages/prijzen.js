import { useEffect } from "react";
import Head from "next/head";
import Pagehero from "@/components/pagehero";
import styles from "@/styles/prijzen.module.css";

export default function Prijzen() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Prijzen | Kapper Dede</title>
          <meta name="description" content="Bekijk de prijzen van onze diensten bij Kapper Dede. Van knippen tot kleuren, ontdek onze betaalbare tarieven voor haarverzorging." />
          <meta name="og:description" content="Ontdek de prijzen voor de verschillende haarbehandelingen bij Kapper Dede. Van knippen en kleuren tot styling, alles wat je moet weten over onze tarieven." />
          <meta name="keywords" content="prijzen, Kapper Dede, tarieven, knippen, kleuren, haarstyling, kapsalon, haarbehandelingen" />
          <meta property="og:url" content="https://www.kapperdede.com/prijzen" />
          <meta property="og:title" content="Prijzen | Kapper Dede" />
      </Head>

      <Pagehero pagetitle="Prijzen"/>


      <div className={styles.prijzen}>  
        <div>
        
          <section>
              <h2>Heren</h2>
              <ul>
                <li><span>Knippen / drogen</span><span>&euro; 20,00</span></li>
                <li><span>Knippen / opscheren</span><span>&euro; 22,00</span></li>
                <li><span>Knippen / milimeteren</span><span>&euro; 15,00</span></li>
                <li><span>Knippen / scheren</span><span>&euro; 30,00</span></li>
                <li><span>Baard trimmen</span><span>&euro; 12,00</span></li>
                <li><span>65+ knippen</span><span>&euro; 15,00</span></li>
              </ul>
          </section>

          <section>
              <h2>Kinderen t/m 12 jaar</h2>
              <ul>
                <li><span>Knippen</span><span>&euro; 15,00</span></li>
                <li><span>Knippen / scheren</span><span>&euro; 17,50</span></li>
              </ul>
          </section>

        </div>
      </div>


    </>
  );
}
