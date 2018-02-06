/// /////////////////////////////////////////////////////////////
// Created by LUKASHENKO YEVHENII on 04.02.2018.
/// /////////////////////////////////////////////////////////////

const MapStore = ({
  state: {
    sidebarVisibility: false
  },
  mutations: {
    toogleSidebar (state) {
      state.sidebarVisibility = !state.sidebarVisibility
    }
  }
});

export default MapStore
