import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Particles from 'react-particles-js';
import { useRouter } from 'next/router';
import { toggleDisplay } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';

import projects from '../components/Portfolio/portfolioProjects/projects.json';
import Layout from '../Layout';
import Footer from '../components/UI/Footer';
import Landing from '../components/Landing';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import ProjectDetails from '../components/Portfolio/ProjectDetails/ProjectDetails';

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

export default function Home() {
  const [nextPos, setNextPos] = useState();
  const [pagePos, setPagePos] = useState('0vw');
  const [prevURL, setPrevURL] = useState(["/"]);
  const [subtitleBottom, setSubtitleBottom] = useState(0);
  
  const [width, height] = useWindowSize(); 

  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.isOpen);
  const selectedId = useSelector(state => state.selectedId);
  const router = useRouter();
  const portfolioRef = useRef();

  useEffect(() => {
    setPrevURL([...prevURL, router.asPath])
    if(router.asPath === "/?portfolio") {
      setPagePos('-200vw');
    } else if (router.asPath === "/?skills") {
      setPagePos('-300vw');
    } else setPagePos('0vw');

    if(router.asPath !== "/") {
      setNextPos(0);
    } else {
      const portfolioRect = portfolioRef.current.getBoundingClientRect();
      setNextPos(subtitleBottom - portfolioRect.bottom);
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Aled Jones - Developer &amp; Designer</title>
        <meta name="description" content="Aled Jones - Front-End Developer &amp; Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Particles 
          width="100vw"
          height="110vh"
          params={{
            "particles": {
              "twinkle": {
                "particles": true
              },
              "line_linked": {
                "color": "#353535"
              },
              "color": "#C0C0C0",
              "move": {
                "speed": 0.3,
              },
              "number": {
                  "value": width < 768 || height < 600 ? 100 : 200,
              },
              "size": {
                  "value": 3,
              },
              "repulse": {
                "duration": 2
              },
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse",
                    }
                },
                "modes": {
                  "repulse": {
                    "distance": 400,
                    "duration": 2
                  }
                }
            },
          }}
        />
        {/* {isOpen ? */}
          <ProjectDetails 
            project={projects.projects.find((project) => project.id === selectedId)}
            onClose={() => dispatch(toggleDisplay('TOGGLE'))}
            isOpen={isOpen}
          />
        {/* :
          null
        } */}
        <Layout nextPos={nextPos} prevURL={prevURL} subtitleBottom={subtitleBottom}>
          <div style={{ width: '400vw', transform: `translateX(${pagePos})`, transitionDuration: '1s', display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '200vw', display: 'flex', alignItems: 'center' }}>
              <Landing setNextPos={setNextPos} setSubtitleBottom={setSubtitleBottom} />
            </div>
            <div ref={portfolioRef} style={{ width: '100vw', height: '80vh' }}>
              <Portfolio />
            </div>
            <div style={{ width: '100vw' }}>
              <Skills />
            </div>
          </div>
        </Layout>
      </main>

      <Footer prevURL={prevURL} subtitleBottom={subtitleBottom}/>
    </div>
  )
}
