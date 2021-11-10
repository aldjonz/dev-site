import React from 'react'
import SkillIcon from './SkillIcon/SkillIcon';
import styles from '../../styles/Skills.module.css';

export default function index() {

    const skills = [
        {
            id: 0,
            img: './skills/html5.svg',
            title: "HTML5",
            link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
        },
        {
            id: 1,
            img: './skills/css3.svg',
            title: "CSS",
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        {
            id: 4,
            img: './skills/javascript.svg',
            title: "JavaScript",
            link: 'https://www.javascript.com/'
        },
        {
            id: 8,
            img: './skills/typescript.png',
            title: "TypeScript",
            link: 'https://www.typescriptlang.org/'
        },
        {
            id: 5,
            img: './skills/react.svg',
            title: "React & React Native",
            link: 'https://reactjs.org/'
        },
        {
            id: 6,
            img: './skills/next-js.svg',
            title: "Next.js",
            link: 'https://nextjs.org/'
        },
        {
            id: 6,
            img: './skills/redux.png',
            title: "Redux",
            link: 'https://redux.js.org/'
        },
        {
            id: 6,
            img: './skills/ionic.png',
            title: "Ionic",
            link: 'https://ionicframework.com/'
        },
        {
            id: 8,
            img: './skills/wordpress.png',
            title: "WordPress",
            link: 'https://wordpress.com/'
        },
        {
            id: 2,
            img: './skills/tailwind-css.svg',
            title: "Tailwind CSS",
            link: 'https://tailwindcss.com/'
        },
        {
            id: 3,
            img: './skills/bootstrap-4.svg',
            title: "Bootstrap",
            link: 'https://getbootstrap.com/'
        },
        {
            id: 6,
            img: './skills/sqlite.jpeg',
            title: "SQLite",
            link: 'https://www.sqlite.org/index.html'
        },
        {
            id: 7,
            img: './skills/git.svg',
            title: "Version Control",
            link: 'https://github.com/aldjonz'
        }
    ];

    return (
        <div className={styles.container}>
            {skills.map((skill,index) => {
                return (
                    <SkillIcon 
                        key={index}
                        img={skill.img}
                        title={skill.title}
                        href={skill.link}
                    />
                )
            })}
        </div>
    );
};