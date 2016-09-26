/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';
import Cell from './Cell';

/**
 * Common methods for static and interactive garages
 */
const garageMixin = {
  _renderCells(showExitLabel) {
    const cells = [];

    for (var x = 0; x < 6; x++) {
      for (var y = 0; y < 6; y++) {
        var exit = x == 0 && y == 2;
        cells.push(<Cell x={x} y={y} exit={exit} key={`cell-${x}${y}`} styles={this.styles} showExitLabel={showExitLabel}/>);
      }
    }
    return cells;
  }
};

export default garageMixin;