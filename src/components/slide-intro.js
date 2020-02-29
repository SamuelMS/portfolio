import { CSSTransition } from 'react-transition-group';
import Typist from 'react-typist';
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './slide-intro.scss';

const KEY_DOWN_ARROW = 40;

const SlideIntro = (props) => {
    const { active, nextSlide } = props;

    const [shiftHeaders, setShiftHeaders] = useState(false);
    const [doneAnimating, setDoneAnimating] = useState(false);

    const updateSlide = useCallback((event) => {
        if (doneAnimating && (event.type === 'click' || event.keyCode === KEY_DOWN_ARROW)) {
            nextSlide();
        }
    }, [doneAnimating, nextSlide]);

    useEffect(() => {
        if (active) {
            document.addEventListener('keydown', updateSlide);
        }

        return function cleanup() {
            document.removeEventListener('keydown', updateSlide);
        };
    }, [updateSlide, active]);

    return (
        <div className="w-full h-full relative">
            <div className="row m-0 center-xs middle-xs w-full h-full intro-container">
                <div className="relative intro-content">
                    <div className="row w-full p-0 center-xs absolute left-0 top-0">
                        <div>
                            <CSSTransition classNames="header-main" in={shiftHeaders} timeout={700}>
                                <Typist startDelay={1000} avgTypingDelay={25} stdTypingDelay={0} cursor={{ show: false }} onTypingDone={() => setShiftHeaders(true)}>
                                    <h1 className="text-4xl text-left font-semibold text-color-accent portfolio-text-shadow">SOFTWARE ARCHITECT AND PRODUCT LEADER</h1>
                                </Typist>
                            </CSSTransition>
                            <h1 className="text-4xl font-semibold text-color-accent opacity-0">SOFTWARE ARCHITECT AND PRODUCT OWNER</h1>
                        </div>
                    </div>
                    <CSSTransition classNames="header-secondary" in={shiftHeaders} timeout={800}>
                        <h2 className="text-2xl font-semibold text-color-light mt-3 portfolio-text-shadow header-secondary-enter">FOCUSED ON HIGH-POWER STARTUPS AND MASSIVE ENTERPRISE</h2>
                    </CSSTransition>
                    <CSSTransition classNames="header-content" in={shiftHeaders} timeout={1800} onEntered={() => setDoneAnimating(true)}>
                        <p className="text-color-light font-semibold m-6 portfolio-text-shadow header-content-enter">I love figuring out how to build software products. Put me in a room with stakeholders, SMEs, and your best people – and I'll roadmap out a strategy to get you from where you are now to where you need to be.</p>
                    </CSSTransition>
                </div>
            </div>
            <div className="row m-0 center-xs bottom-xs w-full h-full absolute bottom-0 left-0 z-10 pointer-events-none">
                <CSSTransition classNames="next-slide-indicator" in={shiftHeaders} timeout={2750}>
                    <div className="text-color-accent next-slide-indicator-enter cursor-pointer pointer-events-auto" onClick={updateSlide}>
                        <div className="row m-0 center-xs">
                            <small className="text-color-accent font-semibold next-slide-indicator-label portfolio-text-shadow">WHO AM I?</small>
                        </div>
                        <div className="row m-0 center-xs">
                            <FontAwesomeIcon className="next-slide-indicator-icon" icon="caret-down" size="2x" fixedWidth />
                        </div>
                    </div>
                </CSSTransition>
            </div>
        </div>
    );
};

export default SlideIntro;
