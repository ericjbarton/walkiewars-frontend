<!-- <template>
  <GoogleMap
    api-key="AIzaSyCZsVW_CBi7UsbMeFW2Bh7AgsbmuIe9PXw"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="5"
  >
    <Polygon :options="walkie1" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Polygon, google } from "vue3-google-map";

export default defineComponent({
  name: "App",
  components: { GoogleMap, Polygon },
  setup() {
    const center = { lat: 41.61, lng: -83.7 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: center,
    });
    // map.addListener("click", (mapsMouseEvent) => {});

    const polygonCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    const walkie1 = {
      paths: polygonCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    };

    return { center, walkie1 };
  },
});
</script> -->
