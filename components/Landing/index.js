import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import styles from '../../styles/Home.module.css';
import { Divider, Text } from '@geist-ui/react';
import { useRouter } from 'next/router';

function useWindowSize() {
    const [width, setWidth] = useState(0);
    useLayoutEffect(() => {
      function updateSize() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return width;
  }

export default function Landing(props) {
    const [xPos, setXPos] = useState(400);
    const [textOpacity, setTextOPacity] = useState(0);
    const [textXPos, setTextXPos] = useState('0%');
    const [titleYPos, setTitleYPos] = useState(0);

    const width = useWindowSize();

    const aboutRef = useRef();
    const subtitleRef = useRef();
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            setXPos(0);
            setTextOPacity(1);
        }, 600);
    }, []);

    useEffect(() => {
        if(router.asPath !== "/") {
            setTitleYPos(0);
            props.setNextPos(0);
            setTimeout(() => {
                setTextXPos('-50%');
            }, 600);
        } else {
            const aboutRect = aboutRef.current.getBoundingClientRect();
            const subtitleRect = subtitleRef.current.getBoundingClientRect();

            const windowHeight = window.innerHeight;
            setTitleYPos(subtitleRect.top - aboutRect.top);
            props.setNextPos(subtitleRect.bottom - aboutRect.bottom);
            setTextXPos('0%');
            props.setSubtitleBottom(subtitleRect)
        };
    },[router, width]);

    return (
        <div className={styles.landingContainer}>
            <div style={{ transform: `translateY(${titleYPos}px)`, transition: '1s ease-in-out' }}>
                <Text h1 style={{ opacity: textOpacity, transition: 'ease-out, 1.4s' }} className={styles.name}>Hi, I&apos;m Aled</Text>
                <Divider h={2} mx={7}></Divider>
            </div>
            <div style={{ transform: `translateX(${textXPos})`, transitionDuration: '1s' }} className={styles.descriptionContainer}>
                <div className={styles.subtitleContainer} >
                    <div ref={subtitleRef} style={{ height: 'fit-content' }}>
                        <Text h3 className={styles.subtitle} style={{ transform: `translateX(${xPos})`, opacity: textOpacity, transition: 'ease-out, 1.4s', transitionDelay: '1.6s' }} >Front End <br /> Developer &amp; Designer</Text>
                    </div>
                </div>
                <div style={{ width: '100vw' }}>
                    <div ref={aboutRef} className={styles.aboutContainer}>
                        <Text className={styles.aboutText}>I&apos;m a front-end devloper and designer from the UK. I design, create and support websites and applications for clients and for fun. I use modern technology to create exceptional user experiences, and always strive to create high quality products.</Text>
                        <Text className={styles.aboutText}>During the Covid-19 pandemic I was aware that I may never have such an opportunity to have so much free time ever again so I made the most of my time in lockdown and learnt to code. After 9 months of learning I had my first contract and have been freelancing ever since.</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}
