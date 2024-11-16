import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Pagehero from "@/components/pagehero";
import styles from "@/styles/contact.module.css";
import emailjs from "@emailjs/browser";
import checkIco from "@/assets/icons/greencheck.svg";
import Instagram from "@/assets/icons/instagram2.svg";
import Facebook from "@/assets/icons/facebook.svg";
import WhatsApp from "@/assets/icons/whatsapp.svg";

export default function Contact() {
  useEffect(() => {
    if (sessionStorage.getItem("berichtverstuurd") === "ja"){
        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner3").classList.remove("displaynone");
    } 
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function restrictToNumbers(event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]+/g, '');
  }

  function removeErrorState(){
    let notselected = document.querySelectorAll(".notselected");
    document.querySelector("#errorstate1").classList.add("displaynone");
    document.querySelector("#errorstate2").classList.add("displaynone");

    for (let i = 0; i < notselected.length; i++) {
        notselected[i].classList.remove("notselected");
    }
  }

  function checkContactForm(){
    let voorAchterNaam = document.querySelector("#voorachternaamform").value.trim();
    let email = document.querySelector("#emailform").value.trim();
    let numberform = document.querySelector("#numberform").value.trim();
    let subjectform = document.querySelector("#subjectform").value.trim();
    let message = document.querySelector("#messageform").value.trim();
    let antwoord = document.querySelector("#antwoordform").value.trim();

    if ( voorAchterNaam === '' || !isValidEmail(email) || numberform === '' || subjectform === '' || message === '') {

        document.querySelector("#errorstate1").classList.remove("displaynone");    

        if (voorAchterNaam === ""){
            document.querySelector("#voorachternaamform").classList.add("notselected") 
        }

        if (!isValidEmail(email)){
            document.querySelector("#emailform").classList.add("notselected") 
        }

        if (numberform === ""){
            document.querySelector("#numberform").classList.add("notselected") 
        }

        if (subjectform === "") {
            document.querySelector("#subjectform").classList.add("notselected");
        }

        if (message === "") {
            document.querySelector("#messageform").classList.add("notselected");
        }

        if (antwoord === "") {
            document.querySelector("#antwoordform").classList.add("notselected");
        }

    } else if (parseInt(antwoord) !== 6) {

        document.querySelector("#errorstate2").classList.remove("displaynone");

        if (antwoord !== 6) {
            document.querySelector("#antwoordform").classList.add("notselected");
        }
        
    } else {

        const emailData = {
            voorachternaam: voorAchterNaam,
            emailadress: email,
            telefoonnummer: numberform,
            onderwerp: subjectform,
            bericht: message,
        }

        emailjs.send("service_4g8yhea","template_s1dh9o8", emailData, "lfNKMb6bMAyzLQZ0D");

        document.querySelector(".contactforminner1").classList.add("displaynone");
        document.querySelector(".contactforminner2").classList.remove("displaynone");

        sessionStorage.setItem("berichtverstuurd", "ja");

        setTimeout(() => {
            document.querySelector(".contactforminner3").classList.remove("displaynone");
            document.querySelector(".contactforminner2").classList.add("displaynone");
        }, 1000);
    }
}

  return (
    <>
      <Head>
          <title>Contact | Kapper Dede</title>
          <meta name="description" content="Neem contact op met Kapper Dede voor afspraken, vragen of opmerkingen." />
          <meta name="og:description" content="Neem contact op met Kapper Dede voor vragen, opmerkingen of ondersteuning. Wij staan klaar om je te helpen." />
          <meta name="keywords" content="contact, Kapper Dede, afspraak, klantenservice, vragen, opmerkingen" />
          <meta property="og:url" content="https://www.kapperdede.com/contact" />
          <meta property="og:title" content="Contact | Kapper Dede" />
      </Head>

      <Pagehero pagetitle="Contact"/>

      <div className={styles.contact}>  
        <div>

          <section>
            <ul>
              <li><h2>Kapper Dede</h2></li>
              <li><b>E-Mail:</b> info@kapperdede.com</li>
              <li><b>Telefoon:</b> 06 28 85 00 78</li>
              <li><b>KVK:</b> 72874511</li>
              <li><b>Adres:</b> Neptunuslaan 2A<br/> 1562XL Krommenie</li>
              <li>
                <ul>
                  <li><Link href="https://www.instagram.com/kapperdede/" target="_blank"><Image src={Instagram} alt="Instagram Logo"/></Link></li>
                  <li><Link href="https://www.facebook.com/kapperdede/?locale=nl_NL" target="_blank"><Image src={Facebook} alt="Facebook Logo"/></Link></li>
                  <li><Link href="https://api.whatsapp.com/send/?phone=31628850078" target="_blank"><Image src={WhatsApp} alt="WhatsApp Logo"/></Link></li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
          
          <div className="contactforminner1">
                    <div>
                        <h2 id="contactfromtitle">Contact Formulier</h2>
                    </div>

                    <div>
                        <input type="text" placeholder="Voor- en achternaam" id="voorachternaamform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="email" placeholder="E-Mail" id="emailform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Telefoonnummer" id="numberform" onChange={restrictToNumbers} onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <input type="text" placeholder="Onderwerp" id="subjectform" onClick={removeErrorState}></input>
                    </div>

                    <div>
                        <textarea placeholder="Hoe kunnen wij jou helpen?" id="messageform" onClick={removeErrorState}></textarea>
                    </div>

                    <div>
                        <input placeholder="Wat is 4 + 2?" type="text" id="antwoordform" onChange={restrictToNumbers} onClick={removeErrorState} />
                    </div>

                    <p id="errorstate1" className="displaynone">Controleer of de verplichte velden zijn ingevuld en of het e-mailadres geldig is.</p>
                    <p id="errorstate2" className="displaynone">Het antwoord op de rekensom is onjuist. Probeer het nogmaals.</p>

                    <div>
                        <button onClick={checkContactForm} id="contactfrombtn">Verzenden</button>
                    </div>
                </div>

                <div className="contactforminner2 displaynone">
                  <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </div>

                <div className="contactforminner3 displaynone">
                    <p><Image src={checkIco} alt="Succes Icoon"/> <span id="contactformsuccesp1">Bericht is met succes verzonden.</span></p>
                    <p id="contactformsuccesp2">Bedankt voor uw interesse. We geven u zo snel mogelijk een reactie, houdt uw email in de gaten.</p>
                </div>


          </section>

        </div>
      </div>
    </>
  );
}
