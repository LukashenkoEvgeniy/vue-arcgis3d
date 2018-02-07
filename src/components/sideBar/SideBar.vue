<template lang="pug">
  transition(name="slide")
    aside(v-show="componentVisibility")
      ul(id="maps-list" class="list-group")
        li(class="list-group-item" v-for="item in mapList" v-bind:key="item")
          p {{item}}

</template>

<script>
  import store from "../../store/modules/UIStore"

  export default {
    name: "SideBar",

    data() {
        return{
            mapList: [
              'hybrid',
              'topo',
              'satellite',
              'streets-navigation-vector',
              'streets-night-vector'
            ]
        }
    },

    computed: {
      componentVisibility () {
        return store.state.sidebarVisibility
      }
    },
  }
</script>

<style lang="scss">
  aside {
    background-color: #fff;
    width: 400px;
    /*position: fixed;*/
    /*top: 55px;*/
    left: 0;
    bottom: 0px;
    /*z-index: 1;*/
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* Анимация перехода */
  .slide-enter-active, .slide-leave-active {
    transition: all .2s cubic-bezier(.65, .05, .36, 1);
  }

  .slide-enter, .slide-leave-active {
    left: -100%;
  }

</style>
