////////////////////////////////////////////////////////////////
//
// THIS FILE IS PART OF DELTA MONITOR
// (c) 2017 C4ISR https://delta.istar.org.ua/
// DO NOT USE, MODIFY OR DISTRIBUTE WITHOUT PERMISSION OF OWNER!
// SEE LICENSE.TXT FOR DETAILS
// Created by LUKASHENKO YEVHENII on 06.02.2018.
//
////////////////////////////////////////////////////////////////
import Vue from 'vue'
import Vuex from 'vuex'
import UIStore from "./modules/UIStore";
import MapStore from "./modules/MapStore";

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  modules: {
    UIStore,
    MapStore
  }
});
