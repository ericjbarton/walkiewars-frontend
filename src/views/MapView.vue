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
    };
  },
};
</script>

<template>
  <div>
    <img alt="Dog logo" src="../assets/DogEisenhower.png" height="175" />
    <p>General Dog D. Eisenhounder</p>
  </div>
  <h1>Mark Your Territory!</h1>
  <!-- <div id="map"></div> -->
  <GMapMap :center="center" :zoom="19" map-type-id="terrain" style="width: 100vw; height: 80vh" ;>
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
<style></style>
