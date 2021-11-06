import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text } from '@geist-ui/react';
import styles from '../../../styles/Portfolio.module.css';
import EntireAppPreview from './Mockups/AppPreviews/EntireAppPreview';
import WebsitePreview from './Mockups/WebsitePreview/WebsitePreview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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

export default function ProjectDetails(props) {
    const [scale, setScale] = useState("0%");

    const screenWidth = useWindowSize();

    const detectOS = () => {
        if(navigator.userAgent.indexOf("Mac") !=-1) {
            return "MacOS"
        } else {
            return "Android"
        };
    };

    useEffect(() => {
        if(props.isOpen) {
                setScale("100%");
        } else {
            setScale("0%");
        }
    }, [props.isOpen]);
    
    return (
        <div className={styles.outerContainer} style={{ transform: `scale(${scale})`, transformOrigin: 'bottom left', transitionDuration: '0.6s', position: 'absolute', zIndex: 4000, overflowY: 'scroll', backgroundColor: 'white', height: '100vh', pointerEvents: props.isOpen ? 'auto' : 'none', width: '100vw', overflowX: 'hidden' }} >
            <div onClick={props.onClose} className={styles.closeBtn} >
                <FontAwesomeIcon icon={faTimes} style={{ width: 16, color: '#fff' }} />
            </div>
                <div className={styles.descriptionContainer} >
                    <Text h2 className={styles.projectTitle}>{props.project.title}</Text>
                    <div className={styles.overlayContainer} >
                        <div className={styles.textContainer} style={{ width: screenWidth > 1024 && props.project.preview.length > 0 ? '50%' : '100%' }}>
                            <div className={styles.descriptionContainer} >
                                <a color="blue" className={styles.projectLink} target="_blank" href={!Array.isArray(props.project.link) ? props.project.link : detectOS() !== "MacOS" ? props.project.link[0] : props.project.link[1]}>Check out the project here!</a>
                                <Text className={styles.projectDesc}>{props.project.desc}</Text>
                            </div>
                            <div className={styles.techContainer}>
                                {props.project.tech.map((tech) => {
                                    return (
                                        <div className={styles.relevantTech}>
                                            <img src={tech.logo} alt={`${tech.title} logo`} className={styles.techImg} />
                                            <Text className={styles.relevantTechTitle}>{tech.title}</Text>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {props.project.preview.length > 0 ?
                            props.project.type === "app" ?
                            <EntireAppPreview alt={props.project.title} mockups={props.project.preview} link={props.project.link} />
                            :
                            <WebsitePreview alt={props.project.title} mockups={props.project.preview} link={props.project.link} />
                        :
                            null
                        }
                    </div>
                </div>
        </div>
    )
}
