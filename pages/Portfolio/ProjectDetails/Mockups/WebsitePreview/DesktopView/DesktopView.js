import { Image } from '@geist-ui/react';
import React from 'react';
import styles from '../../../../../../styles/Portfolio.module.css';

export default function DesktopView(props) {
    return (
        <a href={props.link} target="_blank">
            <div className={styles.desktopView}>
                <Image alt={`${props.alt} preview`} src={props.img} style={{ borderRadius: '1vw' }} />
            </div>
        </a>
    )
}
