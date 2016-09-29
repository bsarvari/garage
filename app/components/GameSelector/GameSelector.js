/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GarageView from '../../components/Garage/GarageView';
import GarageStore from '../../model/GarageStore';
import Dispatcher from '../../events/Dispatcher';
import Utils from '../Utils';
import styles from './GameSelector.css';

export default class GameSelector extends React.Component {
  
  componentDidMount(){
    Utils.scrollToTop();
  }

  render () {
      let solvedGameIds = this.props.solvedGameIds;
    return (
        <div className="panel panel-info"> {/*Not using the bs-react Panel class because I can't add the close button to the header */}
          <div className="panel-heading">Select a Game to Begin
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={
        ()=>{
          Dispatcher.fire({
            eventType: 'close-game-selector-clicked',
            source: this
          });
        }}><span aria-hidden="true">×</span></button>
          </div>
          <div className="panel-body">
            <div className="row">
              <ReactCSSTransitionGroup
                transitionName={{appear: `${styles.appear}`, appearActive: `${styles.appearActive}`}}
                transitionAppear={true}
                transitionAppearTimeout={200}
                transitionEnterTimeout={200}
                transitionLeaveTimeout={200}>
              {
                GarageStore.getGarages().map((model) => {
                  return (
                    /*The transition style will make the grid animated at the bootstrap media query breakpoints. Cool and easy. */
                    <div className={`${styles.celledGarage} col-lg-3 col-md-4 col-sm-6`} key={model.gameId} >
                      <GarageView garageModel={model.clone()} solved={solvedGameIds.has(model.gameId)}/>
                    </div>
                  )
                })
              }
              </ReactCSSTransitionGroup>
            </div>
          </div>
        </div>
    );
  }
}