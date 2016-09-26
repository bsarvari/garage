/**
 * This source code is licensed under the GNU LGPLv3 license found in the
 * LICENSE.txt file in the root directory of this source tree.
 *
 * Copyright © 2016-present Balazs Sarvari. All rights reserved.
 * https://github.com/bsarvari/garage
 */

/**
 * An interface to a persistent store backed either by localStorage or cookies if the former one is not supported.
 * TODO cookie backed storage
 */

function _setCookie(key, valueStr, expirationInDays) {
  var d = new Date();
  d.setTime(d.getTime() + (expirationInDays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = key + "=" + valueStr + "; " + expires;
}

function _clearCookie(key) {
  if(key){
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
  }
}

function _getCookie(key) {
  var name = key + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function _getLocalStorage() {
  try {
    var storage = window['localStorage'],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return storage;
  }
  catch(e) {
    return false;
  }
}

/**
 * Either localStorage if supported by the UA or a simple cookie-backed implementation
 */
let _store = _getLocalStorage();
if(!_store){
  _store = {
    getItem(key){
      let itemStr = _getCookie(key);
      if(itemStr){
        return JSON.parse(itemStr);
      }
    },

    setItem(key, valueObj){
      if(key){
        _setCookie(key, valueObj === undefined ? undefined: JSON.stringify(valueObj), 10*365);
      }
    }
  };
}

/**
 * Public interface for client-side storage
 */
let store = {
  set(key, valueObj){
    _store.setItem(key, valueObj === undefined ? undefined: JSON.stringify(valueObj));
  },

  get(key){
    let itemStr = _store.getItem(key);
    if(itemStr){
      return JSON.parse(itemStr);
    }
  }
};

const Utils = {
  scrollToTop (){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },

  getStore(){
    return store;
  }
};

export default Utils;

