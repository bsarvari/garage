/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

/**
 * Common methods for static and draggable cars
 * @type {{getCssClassName: (function()), getStyles: (function())}}
 */
const carMixin = {
  getCssClassName(){
    const model = this.props.model,
      x = model.posX,
      styles = this.styles, // provided by the mixin clients 
      {myCar, orientation, size} = model;
    let y = model.posY;

    if(orientation == 'horizontal'){
      y = y - size + 1;
    }

    return `${myCar ? styles.myCar : ''} 
    ${styles[orientation]} 
    ${styles.car} 
    ${styles['x' + x]} 
    ${styles['y' + y]} 
    ${styles['c' + size]}`;
  }
};

export default carMixin;