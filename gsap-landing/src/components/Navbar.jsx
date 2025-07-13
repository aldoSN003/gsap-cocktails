import React from 'react'
import {navLinks} from '../../constants/index.js'
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {

        gsap.fromTo("li", {

            scale: 0.2,
            /*
            *  Do NOT put special properties like duration, ease, delay, etc. here - those go in the toVars parameter.
            *
            */

        }, {
            duration: 0.8, scale: 1, y: 0, ease: "power1.inOut",

        })


        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav', stagger: 'bottom top'
            }
        })

        navTween.fromTo('nav', {backgroundColor: 'transparent',}, {
            backgroundColor: '#00000050', backgroundFilter: 'blur(10px)', duration: 1, ease: 'power1.inOut'

        })
    }, [])
    return (<nav>
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo"/>
                <p>Velvelt Pour</p>
            </a>
            <ul>
                {navLinks.map((link) => (<li key={link.id}>
                    <a href={`#${link.id}`}>{link.title}</a>
                </li>))}
            </ul>
        </div>
    </nav>)
}
export default Navbar
