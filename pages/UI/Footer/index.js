import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Text } from '@geist-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../../styles/Home.module.css';

export default function index(props) {
    const [link0Pos, setLink0Pos] = useState('0%');
    const [link1Pos, setLink1Pos] = useState('0%');
    const [link2Pos, setLink2Pos] = useState('0%');
    const [link3Pos, setLink3Pos] = useState('0%');
    const [link0Weight, setLink0Weight] = useState('200');
    const [link1Weight, setLink1Weight] = useState('200');
    const [link2Weight, setLink2Weight] = useState('200');
    const [link3Weight, setLink3Weight] = useState('200');
    const [socialLinkPos, setSocialLinkPos] = useState(0);
    const [initLoad, setInitLoad] = useState(true);

    const footerRef = useRef();
    const router = useRouter();
    const isOpen = useSelector(state => state.isOpen);

    const handleClick = (path) => {
        router.push(path, undefined, { shallow: true });
    };

    useEffect(() => {
        const footerRect = footerRef.current.getBoundingClientRect();

        if(router.asPath === "/") {
            const pos = (props.subtitleBottom.top - footerRect.top) + (props.subtitleBottom.height / 2);
            setSocialLinkPos(pos);

            setLink0Weight('300');
            setLink1Weight('200');
            setLink2Weight('200');
            setLink3Weight('200');

            setLink0Pos("-50%");
            setLink1Pos("0%");
            setLink2Pos("0%");
            setLink3Pos("0%");
        } else if(router.asPath === "/?about") {
            setSocialLinkPos(0);

            setLink0Weight('200');
            setLink1Weight('300');
            setLink2Weight('200');
            setLink3Weight('200');

            setLink0Pos("0%");
            setLink1Pos("-50%");
            setLink2Pos("0%");
            setLink3Pos("0%");
        } else if(router.asPath === "/?portfolio") {
            setSocialLinkPos(0);

            setLink0Weight('200');
            setLink1Weight('200');
            setLink2Weight('300');
            setLink3Weight('200');

            setLink0Pos("0%");
            setLink1Pos("0%");
            setLink2Pos("-50%");
            setLink3Pos("0%");
        } else if(router.asPath === "/?skills") {
            setSocialLinkPos(0);

            setLink0Weight('200');
            setLink1Weight('200');
            setLink2Weight('200');
            setLink3Weight('300');

            setLink0Pos("0%");
            setLink1Pos("0%");
            setLink2Pos("0%");
            setLink3Pos("-50%");
        };
    },[router]);

    useEffect(() => {
        if(initLoad) {
            setTimeout(() => {
                const footerRect = footerRef.current.getBoundingClientRect();
                const pos = (props.subtitleBottom.top - footerRect.top) + (props.subtitleBottom.height / 2);
                console.log(pos)
                setSocialLinkPos(pos);
            }, 300);
        };
    }, [props.subtitleBottom]);

    useEffect(() => {
        if(socialLinkPos > 0) {
            setInitLoad(false);
        };
    }, [socialLinkPos]);

    return (
        <footer ref={footerRef} className={styles.footer} style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? 'none' : 'auto' }}>
            <div className={styles.navContainer}>
                <Text 
                    onClick={() => handleClick("/")} 
                    px={1.2}
                    className={styles.footerLink} 
                    style={{ transform: `translateY(${link0Pos})`, transitionDuration: '0.6s', fontWeight: link0Weight }} 
                >Home</Text>
                <Text className={styles.footerDivider} style={{ fontWeight: '200' }}>-</Text>
                <Text 
                    onClick={() => handleClick("/?about")} 
                    px={1.2}
                    className={styles.footerLink} 
                    style={{ transform: `translateY(${link1Pos})`, transitionDuration: '0.6s', fontWeight: link1Weight }} 
                >About</Text>
                <Text className={styles.footerDivider} style={{ fontWeight: '200' }}>-</Text>
                <Text 
                    onClick={() => handleClick("/?portfolio")} 
                    px={1.2}
                    className={styles.footerLink}
                    style={{ transform: `translateY(${link2Pos})`, transitionDuration: '0.6s', fontWeight: link2Weight }}
                >Portfolio</Text>
                <Text className={styles.footerDivider} style={{ fontWeight: '200' }}>-</Text>
                <Text 
                    onClick={() => handleClick("/?skills")} 
                    px={1.2} 
                    className={styles.footerLink}
                    style={{ transform: `translateY(${link3Pos})`, transitionDuration: '0.6s', fontWeight: link3Weight }}
                >Skills</Text>

            </div>
            <div className={styles.socialContainer} style={{ transform: `translateY(${socialLinkPos}px)`, transitionDuration: '1s', transitionDelay: router.asPath === "/" ? '0.8s' : '0s' }}>
                <a href="https://github.com/aldjonz" target="_blank" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faGithub} className={styles.socialIcon} />
                </a>
                <a href="https://www.linkedin.com/in/aled-jones-60843920a/" target="_blank" className={styles.socialLink}>
                    <FontAwesomeIcon icon={faLinkedin} className={styles.socialIcon} />
                </a>
            </div>
        </footer>
    )
}
