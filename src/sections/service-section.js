import React, { useState } from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
} from 'theme-ui';
import { keyframes } from '@emotion/core';
import Img from 'gatsby-image';
import TextFeature from 'components/text-feature';
import ModalVideo from 'react-modal-video';
import { useStaticQuery, graphql } from 'gatsby';
import { IoIosPlay } from 'react-icons/io';

import shapePattern from 'assets/shape-pattern1.png';

import Smart from 'assets/services/smart.svg';
import Secure from 'assets/services/secure.svg';

import { useStickyState } from '../contexts/app/app.provider';

const data_en = {
  subTitle0: 'Duke',
  subTitle1: 'Duke inu the first meme Token with underlying products and instant rewards for holders.',
  subTitle2: 'This is the list of our products in development that will earn Duke token by using it or providing LPs.',
  title: 'Why Duke Token?',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: 'LaunchSpot',
      title: 'LaunchSpot',
      text:
        "Using the launchspot to participate in our IDO will earn you a Duke token even if you don't get allocations. You will also be allowed to use your Duke token to stake and participate in our IDO",
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: 'Vaults',
      title: 'Vaults',
      text:
        'While we help you to manage & optimize your funds across many numbers of protocols like AAVE, Compound etc You will earn Duke Token as a bonus on top off your yield interest.',
    },
  ],
};

const data_cn = {
  subTitle0: 'Duke',
  subTitle1: 'Duke inu 是第一个具有基础产品和即时奖励的 meme 代币。',
  subTitle2: '这是我们正在开发的产品列表，这些产品将通过使用它或提供 LP 来获得 Duke 代币。',
  title: '为什么选择 Duke 代币？',
  features: [
    {
      id: 1,
      imgSrc: Smart,
      altText: '发射点 ',
      title: '发射点 ',
      text:
        "即使您没有获得分配，使用 launchspot 参与我们的 IDO 也会为您赚取 Duke 代币。 您还将被允许使用您的 Duke 代币来抵押和参与我们的 IDO。",
    },
    {
      id: 2,
      imgSrc: Secure,
      altText: '保险库',
      title: '保险库',
      text:
        '虽然我们帮助您通过多种协议（如 AAVE、Compound 等）管理和优化您的资金，但您将获得 Duke 代币作为收益利息的额外奖励。',
    },
  ],
};

export default function ServiceSection() {

  const isEn = useStickyState('isEn');
  var data = {};

  if(!isEn) {
    data = data_cn;
  } else {
    data = data_en;
  }
  // Graphql image query
  const dataThumb = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "service-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 620) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  // modal popup video handler
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section id="whyduketoken" sx={{ variant: 'section.services' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
          {/* <Button
            sx={styles.videoBtn}
            onClick={handleClick}
            aria-label="Play Button"
          >
            <span>
              <IoIosPlay />
            </span>
          </Button> */}

          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature title={data.title} subTitle={data.subTitle0}/>
          <p>{data.subTitle1}</p>
          <p>{data.subTitle2}</p>

          <Grid sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.icon} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
      <ModalVideo
        channel="youtube"
        isOpen={videoOpen}
        videoId="ZNA9rmDsYVE"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
}

const playPluse = keyframes`
  from {
    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);
    opacity: 1;
  }

  to {
	transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);
    opacity: 0;
  }
`;

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7],
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    width: ['100%', null, 620, 375, 510, 605, null, 620],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block'],
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: `${playPluse} 1.5s ease-out infinite`,
      opacity: 0.5,
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2,
    },
    svg: {
      fontSize: [40, null, 48, null, 62],
    },
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)'],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s',
  },

  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3],
    },

    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9,
    },
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%',
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
    },
  },
};
