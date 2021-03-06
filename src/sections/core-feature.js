/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { useStickyState } from '../contexts/app/app.provider';

import shapePattern from 'assets/shape-pattern2.png';

const data_en = {
  subTitle: 'Duke',
  title: 'How to earn Duke',
  description:
    'The best way to increase crypto adoption is to incentivize those who add value to it; that is the purpose of Duke tokens. You can only get Duke tokens by providing liquidity on decentralized exchange across chains like fastswap.exchange, fastswap.finance, uniswap.com, sushiswap.org, pancakeswap.finance, quickswap.exchange etc',
  btnName: 'Get Started',
  btnURL: '#',
};

const data_cn = {
  subTitle: 'Duke',
  title: '如何赚取Duke',
  description:
    '提高加密采用率的最佳方法是激励那些为其增加价值的人； 这就是杜克代币的目的。 您只能通过在跨链的去中心化交易所上提供流动性来获得 Duke 代币，例如 fastswap.exchange、fastswap.finance、uniswap.com、sushiswap.org、pancakeswap.finance、quickswap.exchange 等',
  btnName: '开始',
  btnURL: '#',
};

export default function CoreFeature() {

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
      placeholderImage: file(relativePath: { eq: "core-feature.png" }) {
        childImageSharp {
          fluid(maxWidth: 620) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section id="corefeature" sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    width: [335, '100%', 620, 380, 510, 620],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
