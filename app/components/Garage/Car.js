/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';
import carMixin from './carMixin';
import styles from './styles/inGameSelector.css';

/**
 * Static Car for static garages rendered in the game selector
 */
class Car extends React.Component {
  constructor() {
    super();
    Object.assign(this, carMixin);
    this.styles = styles;
  }

  render(){
    const className = this.getCssClassName();

    return (
      <div className={className}>
        {/*<span className="carId">{id}</span>*/}
      </div>
    );
  }
}

export default Car;