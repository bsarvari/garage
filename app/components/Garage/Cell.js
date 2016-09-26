/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';

export default class Cell extends React.Component {
  render(){
    const { x, y, exit, showExitLabel, styles} = this.props;

    var className = `${styles.cell} 
    ${styles['x'+x]} 
    ${styles['y'+y]} 
    ${(exit ? styles.exit : '')}`;

    var exitLabel = exit && showExitLabel ? <div className={styles.exitLabel}>Exit</div> : '';
    return (
      <div className={className} >{exitLabel}</div>
    );
  }
}