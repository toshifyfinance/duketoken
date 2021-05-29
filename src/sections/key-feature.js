/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fastswap bsc pools',
    title: 'Fastswap bsc pools',
    text:
      'coming soon',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Fastswap eth pools',
    title: 'Fastswap eth pools',
    text:
      'coming soon',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Uniswap pools',
    title: 'Uniswap pools',
    text:
      'coming soon',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Pancake swap pools',
    title: 'Pancake swap pools',
    text:
      'coming soon',
  },
  {
    id: 5,
    imgSrc: Support,
    altText: 'Sushi swap pools',
    title: 'Sushi swap pools',
    text:
      'coming soon',
  },
];

export default function KeyFeature() {
  return (
    <section id="dukepools" sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan="Duke"
          title="Duke pools"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
      null,
      'repeat(5,1fr)',
    ],
  },
};
