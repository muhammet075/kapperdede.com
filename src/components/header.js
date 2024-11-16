import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import logo from "@/assets/logo/kapper-dede-logo.png";
import ster from "@/assets/icons/goudenster.svg";
import hamburger from "@/assets/icons/hamburger.svg";
import close from "@/assets/icons/close.svg";
import Instagram from "@/assets/icons/instagram2.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Tiktok from "@/assets/icons/tiktok.svg";

function Header() {

    useEffect(() => {
        function checkScroll() {
            if (window.scrollY >= 200) {
                document.querySelector("header").classList.add("smallheader");
            } else{
                document.querySelector("header").classList.remove("smallheader");
            }
        }
        window.addEventListener("scroll", checkScroll);
    }, []);

    function openHamburger(){
        let hamburgerContainer = document.querySelector(".hamburgercontainer");
        let hamburgerMenu = document.querySelector(".hamburgercontainer ul");

        hamburgerContainer.classList.remove("displaynonemobile");
        hamburgerMenu.classList.remove("closehamburger");

        setTimeout(() => {
            hamburgerMenu.classList.add("openhamburger");
        }, 150);
    }

    function closeHamburger(){
        let hamburgerContainer = document.querySelector(".hamburgercontainer");
        let hamburgerMenu = document.querySelector(".hamburgercontainer ul");

        hamburgerMenu.classList.remove("openhamburger");
        hamburgerMenu.classList.add("closehamburger");

        setTimeout(() => {
            hamburgerContainer.classList.add("displaynonemobile");
        }, 300);
    }



    return(      
        <header className={styles.header} id="kapperdedeheader">  
            <div>
                <div>
                    <Link href="https://g.co/kgs/kYnBMcg" target="_blank">
                        <p>Google Reviews 4.7 / 5.0</p>
                        <Image src={ster} alt="Gouden ster"/>
                        <Image src={ster} alt="Gouden ster"/>
                        <Image src={ster} alt="Gouden ster"/>
                        <Image src={ster} alt="Gouden ster"/>
                        <Image src={ster} alt="Gouden ster"/>
                    </Link>

                    <ul>
                        <li><Link href="https://www.instagram.com/kapperdede/" target="_blank"><Image src={Instagram} alt="Instagram logo"/></Link></li>
                        <li><Link href="https://www.facebook.com/kapperdede/" target="_blank"><Image src={Facebook} alt="Facebook logo"/></Link></li>
                        <li><Link href="https://www.tiktok.com/@kapperdede2?lang=nl-NL" target="_blank"><Image src={Tiktok} alt="TikTok logo"/></Link></li>
                    </ul>
                </div>
            </div>
            <div>
                <button onClick={openHamburger} id="hamburgerbtn"><Image src={hamburger} alt="Hamburger menu icoon"/></button>
                <Link href="/"><Image src={logo} alt="Logo van Kapper Dede"/></Link>
                <nav className="hamburgercontainer displaynonemobile">
                    <ul>
                        <li><Link href="/" onClick={closeHamburger}>Home</Link></li>
                        <li><Link href="/diensten" onClick={closeHamburger}>Diensten</Link></li>
                        <li><Link href="/prijzen" onClick={closeHamburger}>Prijzen</Link></li>
                        <li><Link href="/contact" onClick={closeHamburger}>Contact</Link></li>
                        <li><Link href="https://knipklok.nl/kapperszaak/kapperdede/afspraak" target="_blank">Afspraak</Link></li>
                    </ul>
                    <div onClick={closeHamburger}>
                        <Image src={close} alt="Sluit icoon"/>
                    </div>
                </nav>
            </div>
        </header>
    )
}
  
export default Header;