/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import './theme.scss';
import './layout.scss';
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from 'react';
import * as _ from 'lodash';
import SlideIntro from './slide-intro';
import SlideWhoAmI from './slide-who-am-i';
import { CSSTransition } from 'react-transition-group';

const SLIDE_HIDDEN = -1;
const SLIDE_INTRO = 0;
const SLIDE_WHO_AM_I = 1;
const SLIDE_INTERESTS = 2;

const Layout = () => {
    const [slide, setSlide] = useState(SLIDE_HIDDEN);
    const [animateIntro, setAnimateIntro] = useState(false);

    const previousSlide = () => {
        setSlide(_.clamp(slide - 1, SLIDE_INTRO, SLIDE_INTERESTS));
    };
    const nextSlide = () => {
        setSlide(_.clamp(slide + 1, SLIDE_INTRO, SLIDE_INTERESTS));
    };

    useEffect(() => {
        setAnimateIntro(slide === SLIDE_HIDDEN || slide === SLIDE_INTRO);
    }, [slide]);

    return (
        <>
            <div className="portfolio-container select-none relative">
                <CSSTransition classNames="portfolio-background" in={animateIntro} appear={true} timeout={{ appear: 1250, exit: 500 }} onEntered={() => setSlide(SLIDE_INTRO)}>
                    <div className="w-full h-full z-0 absolute left-0 top-0 portfolio-background portfolio-background-enter" />
                </CSSTransition>
                {
                    slide > SLIDE_HIDDEN &&
                    <Carousel className="w-full h-full" axis="vertical" selectedItem={slide} showThumbs={false} showArrows={false} showIndicators={false} showStatus={false}>
                        <SlideIntro active={slide === SLIDE_INTRO} nextSlide={nextSlide} />
                        <SlideWhoAmI active={slide === SLIDE_WHO_AM_I} previousSlide={previousSlide} nextSlide={nextSlide} />
                        <div className="w-full h-full">

                        </div>
                    </Carousel>
                }
            </div>
        </>
    );
};

export default Layout;
