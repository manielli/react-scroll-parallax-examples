import React from 'react';
import style from './IntroCopy.scss';
import { Parallax } from 'react-scroll-parallax';

// function modulo(a, b) {
//     return ((a % b) + b) % b;
// }
// const modulo = copy.length % 2;

const copy = 'Parallax'.split('');

const IntroCopy = () => (
    <div className={style.root}>
        <div className={style.barTop} />
        <span className={`${style.copy} h1`}>
            {copy.map((letter, i) => (
                <Parallax
                    key={`copy-${i}`}
                    offsetXMax={100 * (i - 3)}
                    className={style.letter}
                >
                    {letter}
                </Parallax>
            ))}
        </span>
        <div className={style.barBottom} />
    </div>
);

export default IntroCopy;
