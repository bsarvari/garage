/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

let eventListenerMap = new Map();
let Dispatcher = {
  addListener: function (eventType, eventCallback) {
    // console.log('Dispatcher adding listener', eventType, eventCallback);
    if(eventType && eventCallback){
      if(!eventListenerMap.has(eventType)){
        eventListenerMap.set(eventType, new Set());
      }
      eventListenerMap.get(eventType).add(eventCallback);
      return true;

    } else {
      return false;
    }
  },

  removeListener: function (eventType, eventCallback) {
    // console.log('Dispatcher removing listener', eventType, eventCallback);
    eventListenerMap.get(eventType).delete(eventCallback);
  },

  fire: function(event){
    // console.log('Dispatcher firing', event);
    var listeners = eventListenerMap.get(event.eventType);
    if(listeners){
      listeners.forEach((eventCallback) => { // TODO use promises to make this async
        setTimeout(()=>{
          eventCallback(event);
        },0);
      });
    }
  }
};

export default Dispatcher;