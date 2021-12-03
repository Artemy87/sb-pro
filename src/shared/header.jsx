import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import styles from './header.less';


function HeaderComponent() {
    console.log(styles, styles.example)
  return (
    <header>
      <h1 className={styles.example}>Hello React</h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);