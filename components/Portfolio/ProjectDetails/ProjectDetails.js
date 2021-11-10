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
    const [overlayClass, setOverlayClass] = useState(styles.hideOverlay);

    const screenWidth = useWindowSize();

    useEffect(() => {
        if(props.isOpen) {
            setOverlayClass(styles.displayOverlay)
        } else {
            setOverlayClass(styles.hideOverlay);
        }
    }, [props.isOpen]);
    
    return (
        <div 
            className={overlayClass}
            style={{ transitionDuration: '0.6s' }}
        >
            <div onClick={props.onClose} className={styles.closeBtn} >
                <FontAwesomeIcon icon={faTimes} style={{ width: 16, color: '#fff' }} />
            </div>
                <div className={styles.descriptionContainer} >
                    <Text h2 className={styles.projectTitle}>{props.project.title}</Text>
                    <div className={styles.overlayContainer} >
                        <div className={styles.textContainer} style={{ width: screenWidth > 1024 && props.project.preview.length > 0 ? '50%' : '100%' }}>
                            <div className={styles.descriptionContainer} >
                                <a color="blue" className={styles.projectLink} target="_blank" rel="noreferrer" href={!Array.isArray(props.project.link) ? props.project.link : props.project.link[0] }>Check out the project here!</a>
                                <Text className={styles.projectDesc}>{props.project.desc}</Text>
                            </div>
                            <div className={styles.techContainer}>
                                {props.project.tech.map((tech, index) => {
                                    return (
                                        <div key={index} className={styles.relevantTech}>
                                            <img src={tech.logo} alt={`${tech.title} logo`} className={styles.techImg} />
                                            <Text className={styles.relevantTechTitle}>{tech.title}</Text>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {props.project.id !== 1 ?
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
