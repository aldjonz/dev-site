import React from 'react';
import AppPreview from './AppPreview';
import styles from '../../../../../styles/Portfolio.module.css';
import { Text } from '@geist-ui/react';

export default function EntireAppPreview(props) {
    return (
        <div className={styles.appPreviewContainer}>
            {/* <div style={{ width: '26%', position: 'absolute', zIndex: 2 }}>
                <AppPreview img={props.mockups[0]} link={props.link} />
            </div> */}
            <div style={{ width: '26%', position: 'absolute', left: '16%', zIndex: 1 }}>
                <AppPreview img={props.mockups[1]} link={props.link} />
            </div>
            <div style={{ width: '26%', position: 'absolute', right: '16%', zIndex: 1 }}>
                <AppPreview img={props.mockups[2]} link={props.link} />
            </div>
            <div style={{ width: '26%', position: 'absolute', left: '4%' }}>
                <AppPreview img={props.mockups[3]} link={props.link} />
            </div>
            <div style={{ width: '26%', position: 'absolute', right: '4%' }}>
                <AppPreview img={props.mockups[4]} link={props.link} />
            </div>
        </div>
    )
}
