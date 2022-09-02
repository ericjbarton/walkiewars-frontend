<script>
// /* global google */
// /* global initMap */

export default {
  name: "App",
  data() {
    return {
      center: { lat: 41.607756, lng: -83.698416 },
      germanCities: [
        {
          id: "mark 1",
          population: 10,
          position: {
            lat: 41.607756,
            lng: -83.698416,
          },
        },
        {
          id: "mark 2",
          position: {
            lat: 41.608014,
            lng: -83.69778,
          },
          population: 15,
        },
        {
          id: "mark 3",
          position: {
            lat: 41.607804,
            lng: -83.697934,
          },
          population: 5,
        },
      ],
      options: {
        style: [
          [
            {
              elementType: "geometry",
              stylers: [
                {
                  color: "#ebe3cd",
                },
              ],
            },
            {
              elementType: "labels",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#523735",
                },
              ],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#f5f1e6",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#c9b2a6",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#dcd2be",
                },
              ],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#ae9e90",
                },
              ],
            },
            {
              featureType: "administrative.neighborhood",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "poi",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "poi",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#93817c",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#a5b076",
                },
              ],
            },
            {
              featureType: "poi.park",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#447530",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f5f1e6",
                },
              ],
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "road.arterial",
              elementType: "geometry",
              stylers: [
                {
                  color: "#fdfcf8",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                {
                  color: "#f8c967",
                },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#e9bc62",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry",
              stylers: [
                {
                  color: "#e98d58",
                },
              ],
            },
            {
              featureType: "road.highway.controlled_access",
              elementType: "geometry.stroke",
              stylers: [
                {
                  color: "#db8555",
                },
              ],
            },
            {
              featureType: "road.local",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#806b63",
                },
              ],
            },
            {
              featureType: "transit",
              stylers: [
                {
                  visibility: "off",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#8f7d77",
                },
              ],
            },
            {
              featureType: "transit.line",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  color: "#ebe3cd",
                },
              ],
            },
            {
              featureType: "transit.station",
              elementType: "geometry",
              stylers: [
                {
                  color: "#dfd2ae",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry.fill",
              stylers: [
                {
                  color: "#b9d3c2",
                },
              ],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [
                {
                  color: "#92998d",
                },
              ],
            },
          ],
        ],
      },
    };
  },
};
</script>

<template>
  <div>
    <img alt="Dog logo" src="../assets/DogEisenhower.png" height="175" padding="0" style="border: transparent" />
  </div>
  <p>General Dog D. Eisenhounder</p>

  <h1>Mark Your Territory!</h1>

  <!-- <div id="map"></div> -->
  <GMapMap
    :center="center"
    :zoom="19"
    :options="options"
    :theme="dark"
    map-type-id="terrain"
    style="width: 100vw; height: 50vh"
    padding="0"
    :background="transparent"
    ;
    ,
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
    <GMapCircle
      :key="city.id"
      v-for="city in germanCities"
      :radius="city.population"
      :center="{ lat: city.position.lat, lng: city.position.lng }"
    />
  </GMapMap>
</template>
<style>
body {
  background-color: black;
  border: 1px solid rgb(225, 5, 16);
  padding: 0;
}
</style>
