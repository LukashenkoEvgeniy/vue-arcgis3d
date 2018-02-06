<template lang="pug">
  div(id="app")
    NavigationBar
    div(class="content")
      SideBar
      Map
</template>

<script>
  import NavigationBar from './components/navigationBar/NavigationBar.vue'
  import SideBar from './components/sideBar/SideBar.vue'
  import Map from './components/map/Map.vue'
  import store from './store/modules/UIStore'

  export default {
    name: 'App',
    components: {
      NavigationBar,
      SideBar,
      Map
    },
    store
  }
</script>

<style>
  @import "styles/app.scss";

  .content{
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
  }
</style>
