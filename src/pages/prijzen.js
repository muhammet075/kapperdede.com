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
          <title>Prijzen</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
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
