import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Pagehero from "@/components/pagehero";

export default function Privacybeleid() {
  useEffect(() => {
  });

  return (
    <>
      <Head>
          <title>Kapper Dede - Privacybeleid</title>
          <meta name="description" content="Lees het privacybeleid van Kapper Dede. Wij beschermen uw persoonsgegevens en leggen uit hoe wij uw gegevens verzamelen, gebruiken en beveiligen."/>
          <meta name="og:description" content="Lees het privacybeleid van Kapper Dede. Wij beschermen uw persoonsgegevens en leggen uit hoe wij uw gegevens verzamelen, gebruiken en beveiligen."/>
          <meta name="keywords" content="privacybeleid, persoonsgegevens, gegevensbescherming, Kapper Dede, privacy"/>
          <meta property="og:url" content="https://www.kapperdede.com/privacybeleid"/>
          <meta property="og:title" content="Kapper Dede - Privacybeleid"/>
      </Head>

      <Pagehero pagetitle="Privacybeleid"/>


      <div className="pagelayout">
        <div>

          <div>
            <section>
                <p><b>Ingangsdatum: 16 november 2024</b></p>
                <p>Bij Kapper Dede hechten wij veel waarde aan de bescherming van uw persoonsgegevens. Dit privacybeleid legt uit welke gegevens wij verzamelen, hoe wij deze gebruiken, en hoe wij uw privacy waarborgen.</p>
                
                <h2>1. Welke gegevens verzamelen wij?</h2>
                <p>Wij verzamelen de volgende persoonsgegevens:</p>
                <h3>Via het contactformulier:</h3>
                <ul>
                    <li>Naam</li>
                    <li>E-mailadres</li>
                    <li>Telefoonnummer (indien verstrekt)</li>
                    <li>Berichtinhoud, inclusief eventuele persoonlijke informatie die u verstrekt in uw bericht</li>
                </ul>
                <h3>Via Google Analytics:</h3>
                <ul>
                    <li>Anonieme gegevens over uw websitegebruik, zoals bezochte pagina's, duur van de sessie, en interacties op de website. Deze gegevens zijn niet herleidbaar tot een individueel persoon.</li>
                </ul>

                <h2>2. Hoe gebruiken wij uw gegevens?</h2>
                <h3>Contactformulier:</h3>
                <p>De gegevens die u via het contactformulier verstrekt, worden naar ons e-mailadres gestuurd. Wij gebruiken deze gegevens uitsluitend om uw aanvraag te verwerken, contact met u op te nemen, en u van de gevraagde informatie te voorzien.</p>
                <h3>Google Analytics:</h3>
                <p>Wij gebruiken Google Analytics om inzicht te krijgen in het gebruik van onze website en om deze te verbeteren. De gegevens die via Google Analytics worden verzameld, zijn anoniem en worden gebruikt voor statistische analyses.</p>

                <h2>3. Bewaartermijn van uw gegevens</h2>
                <p>E-mailcorrespondentie:</p>
                <p>De gegevens die via het contactformulier naar ons worden gestuurd, worden bewaard in onze e-mailinbox zolang als nodig is om uw aanvraag te verwerken en om aan onze wettelijke verplichtingen te voldoen.</p><br/>
                <p>Google Analytics:</p>
                <p>De gegevens die via Google Analytics worden verzameld, worden bewaard volgens de standaard bewaartermijnen van Google Analytics, die momenteel maximaal 26 maanden bedragen.</p>

                <h2>4. Delen van uw gegevens</h2>
                <p>Wij delen uw persoonsgegevens niet met derden, tenzij dit noodzakelijk is voor het verlenen van onze diensten of wettelijk verplicht is. In alle gevallen zorgen wij ervoor dat de nodige maatregelen worden getroffen om uw gegevens te beschermen.</p>

                <h2>5. Beveiliging van uw gegevens</h2>
                <p>Wij nemen de bescherming van uw gegevens serieus en hebben passende technische en organisatorische maatregelen getroffen om uw persoonsgegevens te beveiligen tegen verlies, diefstal, en ongeautoriseerde toegang. Wij maken gebruik van beveiligde e-mailservers en hebben interne procedures om de toegang tot en het gebruik van uw gegevens te beperken.</p>

                <h2>6. Uw rechten</h2>
                <p>U heeft het recht om:</p>
                <ul>
                    <li>Inzage te krijgen in uw persoonsgegevens: U kunt ons vragen welke persoonsgegevens wij van u hebben en hoe wij deze gebruiken.</li>
                    <li>Correctie van uw persoonsgegevens te vragen: Als u denkt dat de persoonsgegevens die wij van u hebben onjuist of onvolledig zijn, kunt u ons vragen deze te corrigeren of aan te vullen.</li>
                    <li>Verwijdering van uw persoonsgegevens te verzoeken: U kunt ons vragen uw persoonsgegevens te verwijderen als deze niet langer nodig zijn voor de doeleinden waarvoor ze zijn verzameld of verwerkt.</li>
                    <li>Beperking van de verwerking van uw persoonsgegevens te vragen: U kunt ons verzoeken de verwerking van uw persoonsgegevens te beperken onder bepaalde omstandigheden.</li>
                    <li>Bezwaar te maken tegen de verwerking van uw persoonsgegevens: U kunt bezwaar maken tegen de verwerking van uw persoonsgegevens voor direct marketing doeleinden of op basis van uw specifieke situatie.</li>
                </ul>

                <h2>7. Contactinformatie</h2>
                <p>Als u vragen heeft over dit privacybeleid of uw rechten wilt uitoefenen, kunt u contact met ons opnemen via:</p>
                <ul>
                  <li>Kapper Dede</li>
                  <li>E-mailadres: <Link href="mailto:info@kapperdede.com">info@kapperdede.com</Link></li>
                  <li>Telefoonnummer: 06 28 85 00 78</li>
                  <li>Adres: Neptunuslaan 2A 1562XL Krommenie</li>
                </ul>

                <h2>8. Wijzigingen in het privacybeleid</h2>
                <p>Wij kunnen dit privacybeleid van tijd tot tijd bijwerken om wijzigingen in onze verwerkingen of juridische verplichtingen weer te geven. Wij raden u aan dit privacybeleid regelmatig te raadplegen om op de hoogte te blijven van hoe wij uw gegevens beschermen.</p>
            </section>
            </div>
    
          </div>
      </div>


    </>
  );
}
