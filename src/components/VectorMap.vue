<template>
  <v-card class="rounded-lg" height="400px">
    <v-card-title>Countries Visited</v-card-title>
    <div class="map-container">
      <div id="map"></div>
    </div>
  </v-card>
</template>

<script>
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world";

export default {
  data() {
    return {};
  },
  methods: {
    loadMap() {
      var markers = [
        { name: "Egypt", coords: [26.8206, 30.8025] },
        { name: "Russia", coords: [61.524, 105.3188] },
        { name: "Canada", coords: [56.1304, -106.3468] },
        { name: "Greenland", coords: [71.7069, -42.6043] },
        { name: "Brazil", coords: [-14.235, -51.9253] },
      ];

      new jsVectorMap({
        selector: "#map",
        map: "world",
        zoomOnScroll: false,
        zoomButtons: false,
        regionStyle: {
          initial: {
            fill: "#d1d5db",
          },
        },

        labels: {
          markers: {
            render: (marker) => marker.name,
          },
        },

        markersSelectable: true,
        selectedMarkers: markers.map((marker, index) => {
          var name = marker.name;

          if (name === "Russia" || name === "Brazil") {
            return index;
          }
        }),
        markers: markers,
        markerStyle: {
          initial: { fill: "#5c5cff" },
          selected: { fill: "#ff5050" },
        },
        markerLabelStyle: {
          initial: {
            fontFamily: "Roboto",
            fontWeight: 400,
            fontSize: 13,
          },
        },
      });
    },
  },
  mounted() {
    this.loadMap();
  },
};
</script>

<style >
.map-container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

#map {
  margin: auto;
  width: 100%;
  height: 400px;
}
</style>
