<script>
/* eslint-disable no-undef */
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { useGeolocation } from "../useGeolocation";

import { Loader } from "@googlemaps/js-api-loader";

const GOOGLE_MAPS_API_KEY = "AIzaSyCZsVW_CBi7UsbMeFW2Bh7AgsbmuIe9PXw";

export default {
  name: "App",
  setup() {
    const { coords } = useGeolocation();
    let currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    let otherPos = ref(null);
    let otherPos2 = ref(null);
    let otherPos3 = ref(null);

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    let map = ref(null);
    let clickListener = null;
    onMounted(async () => {
      await loader.load();
      map.value = new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 17,
      });
      clickListener = map.value.addListener(
        "click",
        ({ latLng: { lat, lng } }) => (
          (otherPos.value = { lat: lat(), lng: lng() }), (otherPos2.value = { lat: lat(), lng: lng() })
        )
      );
    });
    onUnmounted(async () => {
      if (clickListener) clickListener.remove();
    });
    let polylineCoords = null;
    watch([map, currPos, otherPos, otherPos2], () => {
      if (polylineCoords) polylineCoords.setMap(null);
      if (currPos.value && otherPos.value != null)
        polylineCoords = new google.maps.Polyline({
          path: [currPos.value, otherPos.value],
          map: map.value,
        });
      if (otherPos.value && otherPos2.value != null)
        polylineCoords = new google.maps.Polyline({
          path: [otherPos.value, otherPos2.value],
          map: map.value,
        });
      if (otherPos2.value && otherPos3.value != null)
        polylineCoords = new google.maps.Polyline({
          path: [otherPos2.value, otherPos3.value],
          map: map.value,
        });
    });

    const distance = computed(() =>
      otherPos.value === null ? 0 : haversineDistance(currPos.value, otherPos.value, otherPos2.value)
    );
    return { currPos, otherPos, otherPos2, otherPos3, distance, mapDiv };
  },
};
</script>

<template>
  <div ref="mapDiv" style="width: 100%; height: 100vh"></div>
</template>
