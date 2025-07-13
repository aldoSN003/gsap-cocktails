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
        <div className="">
            <a href="#home" className="flex items-center gap-2 ">
                <img src="/images/palm-tree.svg" alt="logo" className="w-8"/>
                <p>Coco Lounge</p>
            </a>
            <ul className="">
                {navLinks.map((link) => (<li key={link.id} className="text-[var(--color-robin-egg-blue)]">
                    <a href={`#${link.id}`}>{link.title} </a>
                </li>))}
            </ul>
        </div>
    </nav>)
}
export default Navbar
