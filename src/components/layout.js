/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import React, { useState, useCallback } from 'react';
import { useStickyState } from '../contexts/app/app.provider';
import { useStickyDispatch } from '../contexts/app/app.provider';
import Sticky from 'react-stickynode';
import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const isEn = useStickyState('isEn');
  const dispatch = useStickyDispatch();
  const setEn = useCallback(() => dispatch({ type: 'SET_EN' }), [
    dispatch,
  ]);
  const setCn = useCallback(() => dispatch({ type: 'SET_CN' }), [
    dispatch,
  ]);

  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };

  const handleLangStateChange = () => {
    if (isEn == false) {
      setEn();
    } else if (isEn == true) {
      setCn();
    }
    console.log(isEn);
  };

  return (
    <React.Fragment>
      <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </Sticky>

      <Button
        sx={styles.translate_btn}
        variant="secondary"
        aria-label="EN/CN"
        onClick={() => handleLangStateChange()}
      >
        EN/CN
      </Button>
      <main
        id="content"
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}

const styles = {
  translate_btn: {
    position: 'fixed',
    bottom: '10px',
    left: '10px',
    padding: '10px!important',
    zIndex: '10'
  }
};
