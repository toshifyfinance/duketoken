/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Button } from 'theme-ui';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import { useStickyState } from '../contexts/app/app.provider';

import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';

var data_en = {
    title: 'About Baby Duke',
    text:
      `Baby Duke Inu is a revamped version of Duke tokens with a use case in our gaming marketplace and yield farming of our ( FastSwap Token) exchange tokens. Dev is #SAFU since 2017 and has done projects that reached a $10 million market cap and most of his previous projects did more than 500x - 1000x. Tax is 3%, liquidity lock is 10 years, 50% burn, 45% for presale, and liquidity 5% is vested for marketing and development.`,
    btn_fastswap: 'Baby Duke on fastswap',
    btn_pancakeswap: 'Buy Baby Duke on pancakeswap',
    btn_dextools: 'Dextools',
    btn_contract: 'Baby Duke Contract'
};

var data_cn = {
  title: 'Baby Duke 關於',
  text:
    'Baby Duke Inu 是 Duke 代幣的改進版本，在我們的遊戲市場和我們（FastSwap 代幣）交換代幣的收益農業中有一個用例。 Dev 自 2017 年以來一直是#SAFU，他完成的項目市值達到 1000 萬美元，而他之前的大部分項目的市值都超過 500 倍至 1000 倍。 稅收為 3%，流動性鎖定為 10 年，50% 銷毀，45% 用於預售，流動性 5% 用於營銷和開發。',
  btn_fastswap: '在 fastswap 上购买杜克',
  btn_pancakeswap: '在 pancakeswap 上购买 Baby Duke',
  btn_dextools: 'Dextools',
  btn_contract: 'Baby Duke 合同'
};

export default function Banner() {
  const isEn = useStickyState('isEn');
  var data = {};

  if(!isEn) {
    data = data_cn;
  } else {
    data = data_en;
  }

  
  return (
    <section id="aboutbabyduke">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            {data.title}
          </Heading>
          <Text as="p" variant="heroSecondary">
            {data.text}
          </Text>

          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://fastswap.finance//#/swap?inputCurrency=0x4d338614fc25afe6edf3994f331b4bad32fb3c6a&outputCurrency=0x2Ed8Af8512f9F0a28D406F99861bbb03D5443Acf", '_blank')}>{data.btn_fastswap}</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://pancakeswap.finance/swap?outputCurrency=0x2Ed8Af8512f9F0a28D406F99861bbb03D5443Acf", '_blank')}>{data.btn_pancakeswap}</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://www.dextools.io/app/en/bnb/pair-explorer/0x54f6c6ac57f808e979119bdd14127af157b22b45", '_blank')}>{data.btn_dextools}</Button>
          <Button sx={styles.banner.buttonGroup} variant="primary" onClick={() => window.open("https://bscscan.com/address/0x2Ed8Af8512f9F0a28D406F99861bbb03D5443Acf", '_blank')}>{data.btn_contract}</Button>
        
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
