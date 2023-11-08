import React, { useRef, useEffect } from 'react'

import { portText } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1
            }
        });

        return () => {
            scrollTween.kill();
        }
    }, []);

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em>포폴 작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((port, key) => (

                        <div className={`port__item p${key + 1}`} key={key} ref={(el) => sectionRef.current[key] = el}>
                            <span className="num">{port.num}.</span>
                            <a href={port.code}>
                                <img src={port.img} alt="" rel="noreferrer noopener" />
                            </a>
                            <h3 className="title">{port.title}</h3>
                            <p className="desc">{port.desc}</p>
                            <a href={port.view} className="view">사이트 보기</a>
                        </div>

                    ))}

                </div>
            </div>
        </section>
    )
}

export default Port