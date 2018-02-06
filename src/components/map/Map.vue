<template lang="pug">
  main
    div(id="map")
</template>

<script>
  import * as esriLoader from 'esri-loader'

  export default {

    name: "Map",
    components: {},
    data() {
      return {}
    },

    mounted () {
      if (!esriLoader.isLoaded()) {
        esriLoader.loadModules(
          [
            "esri/Map",
            "esri/views/SceneView",
            "dojo/domReady!"
          ]
        )
          .then(([Map, SceneView]) => {

            let map = new Map({
              basemap: "streets",
              ground: "world-elevation"
            });

            let view = new SceneView({
              container: "map",
              map: map,
              scale: 50000000,
              center: [-101.17, 21.78]
            });

          })
          .catch(err => {
            // handle any errors
            console.error(err);
          });
      }
    }
  }
</script>

<style lang="scss">
  main {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
    #map {
      width: 100%;
      height: 100%;
    }
  }
</style>
