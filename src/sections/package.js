/** @jsx jsx */
import { jsx, Container, Box, Flex } from 'theme-ui';
import { keyframes } from '@emotion/core';
import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import PriceCard from 'components/price-card';
import ButtonGroup from 'components/button-group';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';

import { useStickyState } from '../contexts/app/app.provider';

const packages_en = {
  monthly: [
    {
      id: 1,
      name: 'Instant rewards🏆',
      description: "For every transaction in Duke's network(Buy and Sell) 1% out of  2.5% will be distributed among token holders. Which means you earn more by holding Duke's in your wallet. 0.5% of the transaction goes to Devs for development.",
      buttonText: 'Start free trail',
      priceWithUnit: '$0',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Instant burn🔥',
      description: "1% charged on every transaction will be send to burn address Instant to reduce Duke's circulation and encourage HODL.",
      priceWithUnit: '$15',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        }
      ],
    }
  ]
};

const packages_cn = {
  monthly: [
    {
      id: 1,
      name: '即时奖励🏆',
      description: "对于杜克网络中的每笔交易（买卖），2.5% 中的 1% 将分配给代币持有者。 这意味着您通过在钱包中持有杜克大学来赚取更多收入。 交易的 0.5% 交给 Devs 进行开发。",
      buttonText: '开始免费试用',
      priceWithUnit: '$0',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCloseCircle />,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: '瞬间燃烧🔥',
      description: "每笔交易的 1% 将发送到销毁地址 Instant 以减少 Duke 的流通量并鼓励 HODL。",
      priceWithUnit: '$15',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "1,000's of Templates",
          isAvailable: true,
        }
      ],
    }
  ]
};

const data_title_en = "Duke Token stats";
const data_title_cn = "Duke 代币统计";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const isEn = useStickyState('isEn');
  var packages = [];
  var data_title = '';

  if(!isEn) {
    packages = packages_cn;
    data_title = data_title_cn;
  } else {
    packages = packages_en;
    data_title = data_title_en;
  }

  console.log(packages);

  // const { monthly, annual } = packages;
  // const [state, setState] = useState({
  //   active: 'monthly',
  //   pricingPlan: monthly,
  // });

  var wrapped_packages = {
    active: 'monthly',
    pricingPlan: packages
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 2,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

  return (
    <section id="pricing" sx={{ variant: 'section.pricing' }}>
      <Container>
        <SectionHeader
          slogan="Duke"
          title={data_title}
        />
        {/* <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === 'monthly' ? 'active' : ''}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan('monthly')}
            >
              Monthly Plan
            </button>
            <button
              className={state.active === 'annual' ? 'active' : ''}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan('annual')}
            >
              Annual Plan
            </button>
          </Box>
        </Flex> */}
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {packages.monthly.map((packageData) => (
              <Box
                sx={styles.pricingItem}
                key={`monthly-card--key${packageData.id}`}
              >
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: '-40px',
    mt: '-40px',
    mx: -3,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '&.pricing__wrapper .package__card': {
      '.package__header': {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      '.package__price': {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    '.carousel-container': {
      width: '100%',
      '> ul > li ': {
        display: 'flex',
      },
    },
    '.button__group': {
      display: ['flex', null, null, null, 'none'],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: 'flex',
    flexShrink: 0,
    flex: '1 1 auto',
  },
  buttonGroup: {
    justifyContent: 'center',
    mb: '7',
    mt: ['-15px', '-35px'],
    position: 'relative',
    zIndex: 2,
  },
  buttonGroupInner: {
    display: 'flex',
    padding: '7px',
    margin: '0 auto',
    borderRadius: '5px',
    backgroundColor: '#F7F8FB',
    button: {
      border: 0,
      padding: ['15px 20px', '15px 27px'],
      borderRadius: '5px',
      color: 'text',
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'body',
      letterSpacing: '-0.24px',
      transition: 'all 0.3s',
      '&.active': {
        color: '#0f2137',
        backgroundColor: '#ffffff',
        boxShadow: '0 3px 4px rgba(38, 78, 118, 0.1)',
      },
      '&:focus': {
        outline: 0,
      },
    },
  },
};
