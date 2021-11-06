import React, { useEffect, useState } from 'react';
import { Divider, Text } from '@geist-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Layout.module.css'; 
import { useRouter } from 'next/router';

export default function Layout(props) {
    const [textOpacity, setTextOpacity] = useState(0);
    const [overlayPos, setOverlayPos] = useState(-100);
    const [prevOverlayPos, setPrevOverlayPos] = useState(-100)

    const router = useRouter();

    const toggleOverlay = () => {
        if(prevOverlayPos === -100) {
            setOverlayPos(100);
            setPrevOverlayPos(100);
        } else if(prevOverlayPos === 100) {
            setOverlayPos(-100);
            setPrevOverlayPos(-100);
        };
    };

    const handleClick = () => {
        if(router.asPath === "/") {
            router.push('/?about', undefined, { shallow: true });
        } else if(router.asPath === "/?about") {
            router.push('/?portfolio', undefined, { shallow: true });
        } else if(router.asPath === "/?portfolio") {
            router.push('/?skills', undefined, { shallow: true });
        }
    };

    useEffect(() => {
        if(router.asPath === "?about") {
            setTimeout(() => {
                setTextOpacity(1);
            }, 1000);
        } else {
            setTimeout(() => {
                setTextOpacity(1)
            }, 3800);
        };
    },[]);

    return (
        <div className={styles.layoutWrapper} >
            <Text onClick={() => setOverlayPos(0)} className={styles.contact}>contact</Text>
            {props.children}

            <div className={styles.contactInfoContainer} style={{ transform: `translateX(${overlayPos}vw)`, transition: '0.6s ease-in-out' }}>
                <FontAwesomeIcon onClick={() => toggleOverlay()} icon={faTimes} className={styles.closeBtn} />
                <div style={styles.emailAddressContainer}>
                    <Text className={styles.getInTouch}>Get In Touch</Text>
                    <Divider mx={4} />
                    <a href="mailto:support@aledjones.dev" className={styles.emailLink}>support@aledjones.dev</a>
                </div>
                <div>
                    <a href="https://github.com/aldjonz" target="_blank" className={styles.socialLink} rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/aled-jones-60843920a/" target="_blank" className={styles.socialLink} rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                    </a>
                </div>
            </div>
        </div>
    )
}
