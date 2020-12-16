import React, { FC } from 'react';
import styles from './Header.module.css';
import { Header, HeaderLink } from 'hilfling-gui/lib';

// interface Props {
//   login: () => void;
//   logout: () => void;
//   authenticated: boolean | null;
// }

const HeaderComponent: FC<{}> = () => {
  return (
    <div className={styles.header}>
      <Header>
        <HeaderLink>BILDER</HeaderLink>
        <HeaderLink>OM OSS</HeaderLink>
        <HeaderLink>LOGG INN</HeaderLink>
        {/* {authenticated ? (
          <HeaderLink onClick={logout}>LOGG UT</HeaderLink>
        ) : (
          <HeaderLink onClick={login}>LOGG INN</HeaderLink>
        )} */}
      </Header>
    </div>
  );
};

export default HeaderComponent;
