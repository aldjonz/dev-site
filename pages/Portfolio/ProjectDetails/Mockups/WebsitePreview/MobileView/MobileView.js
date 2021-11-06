import { Image } from '@geist-ui/react';
import React from 'react';
import styles from '../../../../../../styles/Portfolio.module.css';

export default function MobileView(props) {
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
            <div className={styles.mobileView}>
                <Image alt={`${props.alt} preview`} src={props.img} style={{ borderRadius: '2vw' }} />
            </div>
        </a>
    )
}
