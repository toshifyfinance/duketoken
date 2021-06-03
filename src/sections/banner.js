/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

export default function Banner() {
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
            DeFi Decentralized Meme Tokens For Crypto Adoption!
          </Heading>
          <Text as="p" variant="heroSecondary">
          Duke Token is a decentralized meme token to incentivize the crypto space. Duke tokens is an experimental community driven project and the first with underlying utility & products.
          </Text>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://fastswap.finance//#/swap?inputCurrency=0x4d338614fc25afe6edf3994f331b4bad32fb3c6a&outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc", '_blank')}>Buy Duke on fastswap</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xaee234825dc4687fae606485c1ebd06336052bcc", '_blank')}>Buy Duke on pancakeswap</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://www.dextools.io/app/pancakeswap/pair-explorer/0xe545eabdd3b07c68b0d0df130a24b2dc4a10be61", '_blank')}>Dextools</Button>
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
