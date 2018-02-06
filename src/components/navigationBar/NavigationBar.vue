<template lang="pug">
  header
    button(@click="toogleSideBar()" v-bind:class="{ activeBtn: isActive }")
      i(class="ion-navicon")

</template>

<script>
  import store from "../../store/modules/UIStore"
  export default {
    name: "NavigationBar",


    computed: {
      isActive () {
        return store.state.sidebarVisibility
      }
    },

    methods: {
      toogleSideBar(){
        store.commit('toogleSidebar')
      }
    },

  }
</script>

<style lang="scss">
  header {
    width: 100%;
    height: 56px;
    /*position: fixed;*/
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 80;*/
    background-color: #fff;
    box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.095);
    padding: 8px 16px;
    overflow: hidden;
    box-sizing: border-box;

    button {
      background: transparent;
      border: 0;
      width: 40px;
      height: 40px;
      font-size: 30px;
      outline: none;
      color: #9f9f9f;
      cursor: pointer;
      border-radius: 50%;
      transition: all .3s ease-in-out;
    }

    button:active {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .activeBtn{
      background-color: rgba(0, 0, 0, 0.1);
    }

  }

</style>
