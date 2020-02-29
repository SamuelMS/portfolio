/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Carousel } from 'react-responsive-carousel';
import { CSSTransition } from 'react-transition-group';
import Typist from 'react-typist';

import './theme.scss';
import './layout.scss';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Layout = () => {
    const [fadeIn] = useState(true);
    const [shiftHeaders, setShiftHeaders] = useState(false);

    return (
        <>
            <div className="portfolio-container select-none">
                <Carousel className="w-full h-full" axis="vertical" showThumbs={false} showArrows={false} showIndicators={false} useKeyboardArrows={true} showStatus={false}>
                    <div className="w-full h-full">
                        <CSSTransition classNames="portfolio" in={fadeIn} appear={true} timeout={1500}>
                            <div className="w-full h-full relative">
                                <div className="w-full h-full intro-background absolute left-0 top-0" />
                                <div className="row m-0 center-xs middle-xs w-full h-full intro-container relative">
                                    <div className="relative intro-content">
                                        <div className="row w-full p-0 center-xs absolute left-0 top-0">
                                            <div>
                                                <CSSTransition classNames="header-main" in={shiftHeaders} timeout={700}>
                                                    <Typist startDelay={1200} avgTypingDelay={30} stdTypingDelay={5} cursor={{ show: false }} onTypingDone={() => setShiftHeaders(true)}>
                                                        <h1 className="text-4xl text-left font-semibold text-color-accent portfolio-text-shadow">SOFTWARE ARCHITECT AND PRODUCT OWNER</h1>
                                                    </Typist>
                                                </CSSTransition>
                                                <h1 className="text-4xl font-semibold text-color-accent opacity-0">SOFTWARE ARCHITECT AND PRODUCT OWNER</h1>
                                            </div>
                                        </div>
                                        <CSSTransition classNames="header-secondary" in={shiftHeaders} timeout={800}>
                                            <h2 className="text-2xl font-semibold text-color-light mt-4 portfolio-text-shadow header-secondary-enter">FOCUSED ON HIGH-POWER STARTUPS AND MASSIVE ENTERPRISE</h2>
                                        </CSSTransition>
                                        <CSSTransition classNames="header-content" in={shiftHeaders} timeout={1800}>
                                            <p className="text-color-light font-semibold m-8 portfolio-text-shadow header-content-enter">I love figuring out how to build software products. Put me in a room with stakeholders, SMEs, and your best people – and I'll roadmap out a strategy to get you from where you are now to where you need to be.</p>
                                        </CSSTransition>
                                    </div>
                                </div>
                                <div className="row m-0 center-xs bottom-xs w-full h-full absolute bottom-0 left-0">
                                    <CSSTransition classNames="next-slide-indicator" in={shiftHeaders} timeout={2750}>
                                        <div className="text-color-accent next-slide-indicator-enter">
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
                        </CSSTransition>
                    </div>
                    <div className="w-full h-full"></div>
                    <div className="w-full h-full"></div>
                    <div className="w-full h-full"></div>
                </Carousel>
            </div>
        </>
    );
};

export default Layout;
