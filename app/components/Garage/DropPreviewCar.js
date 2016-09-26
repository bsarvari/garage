/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';
import styles from './styles/inBoard.css';

export default class DropPreviewCar extends React.Component {
  render(){
    var {x, y, orientation, size } = this.props;
    if(orientation == 'horizontal'){
      y = y - size + 1;
    }

    let className = `     
    ${styles[orientation]}  
    ${styles.dropPreview} 
    ${styles.car} 
    ${styles['x'+x]} 
    ${styles['y'+y]} 
    ${styles['c'+size]}`;
    return (
      <div className={className}></div>
    );
  }
}