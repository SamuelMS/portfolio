import React, { useCallback, useEffect } from 'react';
import './slide-who-am-i.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KEY_DOWN_ARROW = 40;
const KEY_UP_ARROW = 38;

const SlideWhoAmI = (props) => {
    const { active, previousSlide, nextSlide } = props;

    const updateSlide = useCallback((event) => {
        switch (event.keyCode) {
            case KEY_UP_ARROW:
                previousSlide();
                break;
            case KEY_DOWN_ARROW:
                nextSlide();
                break;
            default:
                break;
        }
    }, [previousSlide, nextSlide]);

    useEffect(() => {
        if (active) {
            document.addEventListener('keydown', updateSlide);
        }

        return function cleanup() {
            document.removeEventListener('keydown', updateSlide);
        };
    }, [updateSlide, active]);

    return (
        <div className="row m-0 center-xs middle-xs w-full h-full p-12">
            <div className="who-am-i-content">
                <h1 className="text-4xl font-semibold text-color-accent portfolio-text-shadow">WHO AM I?</h1>
                <h2 className="text-2xl font-semibold text-color-light mt-10 portfolio-text-shadow text-left">HEY THERE.</h2>
                <p className="text-white mt-6 text-left">
                    I’m Sam, and I can build anything. I’ve been pushing code since I was ten,
                    and I’m hopelessly in love with technology and innovation. I've co-founded 3
                    tech startups in just as many industries and I've accumulated over
                    <span className="font-semibold text-color-accent">&nbsp;10,000</span> hours
                    of freelance development and consulting experience.
                </p>
                <p className="text-white mt-6 text-left">
                    These days, I spend my time designing complex, global-scale systems for
                    enterprise clients. Recent examples include a highly configurable workflow
                    orchestration engine for the
                    <a href="https://en.wikipedia.org/wiki/Big_Four_accounting_firms" className="font-semibold text-color-accent">
                        &nbsp;Big Four&nbsp;
                        <FontAwesomeIcon icon="external-link-alt" /> &nbsp;
                    </a>
                    and a comprehensive, human-in-the-loop review tool for all manner of machine
                    learning pipelines.
                </p>
                <p className="text-white mt-6 text-left">
                    I'm currently
                    <span className="font-semibold text-color-accent">&nbsp;available&nbsp;</span>
                    for new projects. I‘m looking to work with fun and driven people that
                    dream big and build awesome tech products, but also know just how important
                    it is to enjoy the journey. Balance is everything — you need to play hard to
                    work hard.
                </p>
                <p className="text-white mt-6 text-left">
                    More than anything, though – I'm a people person. I’m all about meeting
                    new people that do amazing things — to listen to them talk about who
                    they are, their journey & vision, and the challenges they’ve overcome.
                    That kind of energy is incredible and inspiring.
                </p>
                <p className="text-white mt-6 text-left">
                    Don't hesitate to reach out if you'd like to chat business, engineering,
                    or if you'd just like to say hello. I can always be reached at&nbsp;
                    <a className="font-semibold text-color-accent underline" href="mailto:hello@samuelms.io">
                        hello@samuelms.io
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SlideWhoAmI;
