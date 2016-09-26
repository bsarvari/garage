/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';
import styles from './Footer.css';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container">
        <p className={`text-muted ${styles.footerText}`} >Made with <span style={{color: '#C70505'}}>♥</span> by Balazs Sarvari</p>
      </div>
    </footer>
  );
}

export default Footer;
