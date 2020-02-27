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

const Layout = () => {
    const [fadeIn] = useState(true);
    const [shiftHeaders, setShiftHeaders] = useState(false);

    return (
        <>
            <div className="portfolio-container no-user-select">
                <Carousel className="full-size" axis="vertical" showThumbs={false} showArrows={false} showIndicators={false} useKeyboardArrows={true} showStatus={false}>
                    <div className="full-size">
                        <CSSTransition classNames="portfolio" in={fadeIn} appear={true} timeout={2500}>
                            <div className="full-size position-relative">
                                <div className="full-size intro-background position-absolute position-left position-top" />
                                <div className="row no-margins center-xs middle-xs full-size intro-container position-relative">
                                    <div className="position-relative intro-content">
                                        <div className="position-absolute position-left position-top">
                                            <CSSTransition classNames="header-main" in={shiftHeaders} timeout={700}>
                                                <Typist startDelay={2500} avgTypingDelay={30} stdTypingDelay={5} cursor={{ show: false }} onTypingDone={() => setShiftHeaders(true)}>
                                                    <h1 className="no-margins text-size-2 text-color-accent text-align-left">SOFTWARE ARCHITECT AND PRODUCT OWNER</h1>
                                                </Typist>
                                            </CSSTransition>
                                        </div>
                                        <h1 className="no-margins text-size-2 text-color-accent no-height hidden">SOFTWARE ARCHITECT AND PRODUCT OWNER</h1>
                                        <CSSTransition classNames="header-secondary" in={shiftHeaders} timeout={800}>
                                            <h2 className="no-margins text-color-light top-spacer-small header-secondary-enter">FOCUSED ON HIGH-POWER STARTUPS AND MASSIVE ENTERPRISE</h2>
                                        </CSSTransition>
                                        <CSSTransition classNames="header-content" in={shiftHeaders} timeout={1800}>
                                            <p className="text-color-light text-weight-bold top-spacer-large header-content-enter">I love figuring out how to build software products. Put me in a room with stakeholders, your best people, and SMEs – and I'll roadmap out a strategy to get you from where you are now to where you need to be.</p>
                                        </CSSTransition>
                                    </div>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>
                    <div className="full-size"></div>
                    <div className="full-size"></div>
                    <div className="full-size"></div>
                </Carousel>
                <footer className="row no-margins full-size bottom-xs center-xs full-size position-absolute position-left position-top no-pointer-events text-color-light">
                    <small className="bottom-spacer-small">© {new Date().getFullYear()} – Samuel Schlesinger</small>
                </footer>
            </div>
        </>
    );
};

export default Layout;
