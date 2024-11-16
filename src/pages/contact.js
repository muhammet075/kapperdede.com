import { useEffect } from "react";
import Head from "next/head";
import Pagehero from "@/components/pagehero";

export default function Contact() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Contact</title>
          <meta name="description" content=""/>
          <meta name="og:description" content=""/>
          <meta name="keywords" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:title" content=""/>
      </Head>

      <Pagehero pagetitle="Contact"/>


    </>
  );
}
