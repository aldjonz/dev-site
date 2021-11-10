import React, { useState, useLayoutEffect } from 'react';
import Card from './Card/Card';

function useWindowSize() {
    const [size, setSize] = useState([0,0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

export default function ProjectPreview(props) {
    const [width, height] = useWindowSize();
    const isPortrait = width < height;

    const cardStyles = [
        {
            width: isPortrait ? 25 : 12.5,
            height: 20,
            bottom: 0,
            left: isPortrait ? 25 : 12.5,
            forwardDelay: 0.6,
            reverseDelay: 0.8,
            backgroundColor: '#adb5bd'
        },
        {
            width: isPortrait ? 50 : 25,
            height: 20,
            bottom: 20,
            left: 0,
            forwardDelay: 0.8,
            reverseDelay: 0.6,
            backgroundColor: '#dee2e6'
        },
        {
            width: isPortrait ? 50 : 25,
            height: 40,
            bottom: 0,
            left: isPortrait ? 50 : 25,
            forwardDelay: 1,
            reverseDelay: 0.4,
            backgroundColor: '#f8f9fa'
        },
        {
            width: 50,
            height: 39.8,
            bottom: 40,
            left: 0,
            forwardDelay: 1.2,
            reverseDelay: 0.2,
            backgroundColor: '#adb5bd'
        },
        {
            width: 50,
            height: isPortrait ? 40 : 79.8,
            bottom: isPortrait ? 40 : 0,
            left: 50,
            forwardDelay: 1.4,
            reverseDelay: 0,
            backgroundColor: '#dee2e6'
        },
    ];

    const blankCards = [
        {
            width: isPortrait ? 12.5 : 6.25,
            height: 10,
            bottom: 0,
            left: 0,
            forwardDelay: 0,
            reverseDelay: 1.4,
            backgroundColor: '#adb5bd'
        },
        {
            width: isPortrait ? 12.5 : 6.25,
            height: 10,
            bottom: 0,
            left: isPortrait ? 12.5 : 6.25,
            forwardDelay: 0.2,
            reverseDelay: 1.2,
            backgroundColor: '#dee2e6'
        },
        {
            width: isPortrait ? 25 : 12.5,
            height: 10,
            bottom: 10,
            left: 0,
            forwardDelay: 0.4,
            reverseDelay: 1,
            backgroundColor: '#f8f9fa'
        }
    ];
    
    const delays = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4];

    return (
        <>
            {blankCards.map((card, index) => {
                return (
                    <Card 
                        key={index}
                        index={index}
                        cardStyles={blankCards}
                        delay={0.1 * index}
                        isOpen={props.display}
                        isEven={index % 2 !== 0}
                        zIndex={index === 0 ? 1000 : index === 1 ? 999 : 998}
                    />
                )
            })}
            {props.projects.map((project, index) => {
                return( 
                    <Card 
                        key={index}
                        index={index} 
                        project={project}
                        cardStyles={cardStyles}
                        delay={(0.1 * 2) * index}
                        isOpen={props.display}
                        handleSelect={props.handleSelect}
                        isEven={index % 2 === 0}
                        zIndex={index === 0 ? 997 : (996 / index)}
                    />
                )
            })}
        </>
    )
}
