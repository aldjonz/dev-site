import React from 'react';
import DesktopView from './DesktopView/DesktopView';
import MobileView from './MobileView/MobileView';
import styles from '../../../../../styles/Portfolio.module.css';
import { Text } from '@geist-ui/react';

export default function WebsitePreview(props) {
    return (
        <div className={styles.websitePreview}>
            <DesktopView alt={props.alt} img={props.mockups[0]} link={props.link} />
            {props.mockups[1] ?
                <MobileView alt={props.alt} img={props.mockups[1]} link={props.link} />
                :
                null
            }
            <Text style={{ color: 'rgba(0,0,0,0.5)', textAlign: 'right', textDecoration: 'underline' }}>Click the image(s) to learn more</Text>
        </div>
    )
}
