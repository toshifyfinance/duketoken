/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

import { useStickyState } from '../contexts/app/app.provider';

var data_en = [
  {
    id: 1,
    imgSrc: Performance,
    altText: '500 billion 50%',
    title: '500 billion 50%',
    text:
      'Will be used to add liquidity on pancakeswap and fastswap 25% each.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: '40 billion 4%',
    title: '40 billion 4%',
    text:
      'For marketing and exchange listings. 1 billion to VB.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: '100 billion 10%',
    title: '100 billion 10%',
    text:
      'Incentivize for Fastswap.finance  bsc Lps pools for 5 years.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: '100 billion 10%',
    title: '100 billion 10%',
    text:
      'Incentivizes for fastswap eth incentivizes.',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: '100 billion 10%',
    title: '100 billion 10%',
    text:
      'Incentivizes to our ecosystem products.',
  },
  {
    id: 6,
    imgSrc: Support,
    altText: '100 billion 10%',
    title: '100 billion 10%',
    text:
      'Incentivizes for Lps on pancakeswap, uniswap and all the dexs across Chains.',
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: '50 billions 5%',
    title: '50 billions 5%',
    text:
      'Incentivizes for dapps across chains.',
  },
  {
    id: 8,
    imgSrc: Partnership,
    altText: '1 billion 0.1%',
    title: '1 billion 0.1%',
    text:
      'Indians Covid19 relief.',
  },
  {
    id: 9,
    imgSrc: Partnership,
    altText: 'Bug bounty 0.9%',
    title: 'Bug bounty 0.9%',
    text:
      '',
  },
];

var data_cn = [
  {
    id: 1,
    imgSrc: Performance,
    altText: '500 ?????? 50%',
    title: '500 ?????? 50%',
    text:
      '???????????? pancakeswap ??? fastswap ????????? 25% ???????????????',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: '40 ?????? 4%',
    title: '40 ?????? 4%',
    text:
      '????????????????????????????????? 10 ?????? VB??? ',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: '100 ?????? 10%',
    title: '100 ?????? 10%',
    text:
      'Incentivize for Fastswap.finance  bsc Lps pools for 5 years.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: '100 ?????? 10%',
    title: '100 ?????? 10%',
    text:
      '?????? Fastswap.finance bsc Lps ??? 5 ?????? ',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: '100 ?????? 10%',
    title: '100 ?????? 10%',
    text:
      '???????????????????????????????????? ',
  },
  {
    id: 6,
    imgSrc: Support,
    altText: '100 ?????? 10%',
    title: '100 ?????? 10%',
    text:
      '??? pancakeswap???uniswap ?????????????????? dex ????????? Lps??? ',
  },
  {
    id: 7,
    imgSrc: Subscription,
    altText: '50 ?????? 5%',
    title: '50 ?????? 5%',
    text:
      '??????????????? dapps???',
  },
  {
    id: 8,
    imgSrc: Partnership,
    altText: '1 ?????? 0.1%',
    title: '1 ?????? 0.1%',
    text:
      '????????? Covid19 ????????? ',
  },
  {
    id: 9,
    imgSrc: Partnership,
    altText: '???????????? 0.9%',
    title: '???????????? 0.9%',
    text:
      '',
  },
];

const data_title_en = "Duke Token Tokenomics";
const data_title_cn = "Duke ???????????????";

export default function Feature() {
  const isEn = useStickyState('isEn');
  var data = [];
  var data_title = '';

  if(!isEn) {
    data = data_cn;
    data_title = data_title_cn;
  } else {
    data = data_en;
    data_title = data_title_en;
  }
  
  return (
    <section id="tokenomics" sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Duke"
          title={data_title}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
