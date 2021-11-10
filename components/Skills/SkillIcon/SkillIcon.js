import { Link, Text } from '@geist-ui/react';
import React, { useState } from 'react';
import styles from '../../../styles/Skills.module.css';

export default function SkillIcon(props) {
    return (
        <div className={styles.skillIcon}>
            <img 
                alt={`${props.title} logo`}
                src={props.img} 
                className={styles.img}
            />
            <Text h6 className={styles.skillText} style={{ marginTop: '1vh' }}>{props.title}</Text>
        </div>
    );
};