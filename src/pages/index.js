import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import BaByDuke from 'sections/babyduke';
import KeyFeature from 'sections/key-feature';
import ServiceSection from 'sections/service-section';
import Feature from 'sections/feature';
import CoreFeature from 'sections/core-feature';
import WorkFlow from 'sections/workflow';
import Package from 'sections/package';
import TeamSection from 'sections/team-section';
import TestimonialCard from 'sections/testimonial';
import BlogSection from 'sections/blog-section';
import Subscribe from 'sections/subscribe';

// Load other package css file
import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';

export default function IndexPage() {
  return (
    <StickyProvider>
      <Layout>
        <SEO title="Duke Token" />
        <Banner />
        <BaByDuke />
        <CoreFeature />
        <ServiceSection />
        <Feature />
        <WorkFlow />
        <Package />
        {/* <TeamSection /> */}
        {/* <TestimonialCard /> */}
        {/* <BlogSection /> */}
        {/* <Subscribe /> */}
        {/* <KeyFeature /> */}
      </Layout>
    </StickyProvider>
  );
}
