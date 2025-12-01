"use client"

import { BiHome } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { PiProjectorScreen } from "react-icons/pi";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SidebarNavigation() {


    const sidebar = useRef(null);

    return(
        <aside ref={sidebar} className="sidebar">
           
            <button className="sidebar-button" onClick={() => sidebar.current.classList.toggle("sidebar--open")}><GiHamburgerMenu className="sidebar-burgermenu"/></button>
            <Image role="heading" aria-level="1" src="/mylogo.png" alt="logo" width={40} height={40} className="sidebar__logo"/>

            <nav className="sidebar-menu">
                <ul>

                    <li className="sidebar__list">
                        <Link href="/" className="sidebar__link">
                            <BiHome className="sidebar-icons"/><span className="sidebar__link-text">Home</span>
                        </Link>
                    </li>

                    <li className="sidebar__list">
                        <Link href="/aboutme" className="sidebar__link">
                            <BsFillPersonVcardFill className="sidebar-icons"/><span className="sidebar__link-text">About Me</span>
                        </Link>
                    </li>

                    <li className="sidebar__list">
                        <Link href="/projects" className="sidebar__link">
                            <PiProjectorScreen className="sidebar-icons" /> <span className="sidebar__link-text">Projects</span> 
                        </Link>
                    </li>

                    <li className="sidebar__list">
                        <Link href="/cv" className="sidebar__link">
                            <img src="/cvicon.png" className="sidebar-icons"/><span className="sidebar__link-text">CV</span>
                        </Link>
                    </li>

                </ul>
           </nav>
        </aside>
    )
}