import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import logo from "@/assets/logo/kapper-dede-logo.png";
import ster from "@/assets/icons/goudenster.svg";
import hamburger from "@/assets/icons/hamburger.svg";
import close from "@/assets/icons/close.svg";

function Header() {

    useEffect(() => {
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
        <header className={styles.header}>  
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
                </div>
            </div>
            <div>
                <button onClick={openHamburger} id="hamburgerbtn"><Image src={hamburger} alt="Hamburger menu icoon"/></button>
                <Link href="/"><Image src={logo} alt="Logo van Kapper Dede"/></Link>
                <nav className="hamburgercontainer displaynonemobile">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/diensten">Diensten</Link></li>
                        <li><Link href="/prijzen">Prijzen</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
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