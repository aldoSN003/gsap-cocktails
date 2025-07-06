import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const GsapFrom = () => {
    // TODO: Implement the gsap.from() method
    useGSAP(() => {
            gsap.from(["#green-box-1"], {
                x: -150,
                //  repeat:-1,
                //yoyo:true ,
                rotation: -90,
                duration: 2,
                ease: "power1.inOut"
            });
        gsap.from(["#green-box-2"], {
            x: 150,
            //  repeat:-1,
            //yoyo:true ,
            rotation: -90,
            duration: 2,
            ease: "power1.inOut"
        });
        }, []
    );
    return (
        <main>
            <h1>GsapFrom</h1>

            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is used to animate elements from a
                new state to their current state.
            </p>

            <p className="mt-5 text-gray-500">
                The <code>gsap.from()</code> method is similar to the{" "}
                <code>gsap.to()</code> method, but the difference is that the{" "}
                <code>gsap.from()</code> method animates elements from a new state to
                their current state, while the <code>gsap.to()</code> method animates
                elements from their current state to a new state.
            </p>

            <p className="mt-5 text-gray-500">
                Read more about the{" "}
                <a
                    href="https://greensock.com/docs/v3/GSAP/gsap.from()"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                >
                    gsap.from()
                </a>{" "}
                method.
            </p>

            <div className="mt-20 flex justify-start">
                <div id="green-box-1" className="w-20 h-20 bg-green-500 rounded-lg"/>
            </div>
            <div className="mt-20 flex justify-end">
                <div id="green-box-2" className="w-20 h-20 bg-green-500 rounded-lg"/>
            </div>
        </main>
    );
};

export default GsapFrom;
