import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/Portfolio.module.css';

export default function Card(props) {
    return (
        <div 
            onClick={() => props.handleSelect(props.project.id)}
            className={styles.card}
            style={{ 
                width: `${props.cardStyles[props.index].width}vw`, 
                height: `${props.cardStyles[props.index].height}vh`, 
                backgroundColor: props.cardStyles[props.index].backgroundColor, 
                bottom: props.isEven ? `${props.cardStyles[props.index].bottom}vh` : props.isOpen ? `${props.cardStyles[props.index].bottom}vh` : `-${props.cardStyles[props.index].height + 0.5}vh`, 
                left: !props.isEven ? `${props.cardStyles[props.index].left}vw` : props.isOpen ? `${props.cardStyles[props.index].left}vw` : `-${props.cardStyles[props.index].width * 2}vw`, 
                transitionDelay: props.isOpen ? `${props.cardStyles[props.index].forwardDelay}s` : `${props.cardStyles[props.index].reverseDelay}s`, 
                pointerEvents: props.isOpen ? 'auto' : 'none',
                zIndex: Math.floor(props.zIndex)
            }}
        >
            {props.project ? 
                <img alt={`${props.project.title} logo`} src={props.project.img} className={styles.cardImg} />
            :
                null
            }
        </div>
    )
}
