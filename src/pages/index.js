import React from 'react';

import 'normalize.css/normalize.css';
import 'flexboxgrid2/flexboxgrid2.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import '../components/fonts.scss';

import SEO from '../components/seo';
import Layout from '../components/layout';


library.add(fas);

const IndexPage = () => (
    <>
        <SEO title="Portfolio – Samuel Schlesinger"/>
        <Layout />
    </>
);

export default IndexPage;
