/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { useStickyState } from '../contexts/app/app.provider';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

var data_en = {
    title: 'DeFi Decentralized Meme Tokens For Crypto Adoption!',
    text:
      'Duke Token is a decentralized meme token to incentivize the crypto space. Duke tokens is an experimental community driven project and the first with underlying utility & products.',
    btn_fastswap: 'Buy Duke on fastswap',
    btn_pancakeswap: 'Buy Duke on pancakeswap',
    btn_dextools: 'Dextools'
};

var data_cn = {
  title: 'DeFi 去中心化 Meme 代币用于加密采用！',
  text:
    'Duke Token 是一种去中心化的 meme 令牌，用于激励加密空间。 Duke 代币是一个实验性社区驱动的项目，也是第一个具有基础实用程序和产品的项目。',
  btn_fastswap: '在 fastswap 上购买杜克',
  btn_pancakeswap: '在 pancakeswap 上购买 Duke',
  btn_dextools: 'Dextools'
};

export default function Banner() {
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
      placeholderImage: file(relativePath: { eq: "banner-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 1010) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            {data.title}
          </Heading>
          <Text as="p" variant="heroSecondary">
            {data.text}
          </Text>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://fastswap.finance//#/swap?inputCurrency=0x4d338614fc25afe6edf3994f331b4bad32fb3c6a&outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc", '_blank')}>{data.btn_fastswap}</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc", '_blank')}>{data.btn_pancakeswap}</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://www.dextools.io/app/pancakeswap/pair-explorer/0xe545eabdd3b07c68b0d0df130a24b2dc4a10be61", '_blank')}>{data.btn_dextools}</Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Img fluid={dataThumb.placeholderImage.childImageSharp.fluid} />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '80%', '80%', '100%', '100%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, 50],
      width: ['100%', null, null, 720, '100%', 1000],
      mx: 'auto',
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
    buttonGroup: {
      margin: '5px'
    }
  },
};
