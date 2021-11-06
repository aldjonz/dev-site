import React from 'react';
import { Image } from '@geist-ui/react';

export default function AppPreview(props) {
    const detectOS = () => {
        if(navigator.userAgent.indexOf("Mac") !=-1) {
            return "MacOS"
        } else {
            return "Android"
        };
    };
    return (
        <a href={detectOS() !== "MacOS" ? props.link[0] : props.link[1] } target="_blank" rel="noreferrer">
            <div style={{ borderRadius: '2vw', boxShadow: '-5px 9px 25px -4px #000000', width: '100%', height: '100%', borderWidth: 12, borderColor: '#000', margin: '8vw 0' }}>
                <Image src={props.img} alt={`${props.alt} preview`} style={{ width: '100%', height: '100%', borderRadius: '2vw' }} />
            </div>
        </a>
    )
}
