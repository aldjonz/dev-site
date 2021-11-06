import React, { useState, useEffect, useRef } from 'react';
import * as projects from './portfolioProjects/projects.json';
import styles from '../../styles/Portfolio.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplay, toggleSelectedId } from '../../redux/actions';
import ProjectPreview from './ProjectPreview/ProjectPreview';
import { Button } from '@geist-ui/react';

export default function index() {
    const [displayPortfolio, setDisplayPortfolio] = useState(false);
    const [initClick, setInitClick] = useState(false);
    const [btnOpacity, setBtnOpacity] = useState(1);

    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.isOpen)

    const handleSelect = (id) => {
        setDisplayPortfolio(false);
        dispatch(toggleSelectedId(id));
        setTimeout(() => {
            dispatch(toggleDisplay("TOGGLE"));
        }, 1200);
    };

    const handleBtnClick = () => {
        setDisplayPortfolio(true);
        setInitClick(true);
            setBtnOpacity(0)
    };

    useEffect(() => {
        if(initClick && !isOpen) {
            setDisplayPortfolio(true);
        }
    }, [isOpen])

    return (
        <div 
            className={styles.portfolioContainer}
        >
            <div className={styles.openBtn} style={{ opacity: btnOpacity,  }}>
                <Button onClick={() => handleBtnClick()} style={{  color: '#fff', background: 'rgba(0,0,0,0.6)', border: 'none',  boxShadow: '5px 5px 15px 4px rgba(0, 0, 0, 0.5)', outline: 'none',  transform: 'translateY(-50%) translateX(-50%)', borderRadius: 25 }}>Check It Out</Button>
            </div>
            <ProjectPreview 
                projects={projects.projects}
                display={displayPortfolio}
                handleSelect={handleSelect}
            />
        </div>
    )
}
