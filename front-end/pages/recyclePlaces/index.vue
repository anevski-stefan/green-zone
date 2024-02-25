<template>
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-2/5 p-4 md:pr-0">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-semibold mb-6">Places:</h2>
        <ul>
          <li v-for="marker in allMarkers" :key="marker.tooltip" class="mb-6">
            <h3 class="text-lg font-semibold mb-1">{{ marker.tooltip.split(' - ')[1] }}</h3>
            <p class="text-gray-600">{{ marker.tooltip.split(' - ')[0] }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full md:w-3/5 p-4 relative">
      <div class="bg-gray-200 rounded-lg p-6 h-full" style="overflow: hidden;">
        <div class="map-container w-full h-96 md:h-full">
          <Map :height="mapHeight" :width="mapWidth" :zoom="mapZoom" :markers="allMarkers"/>
        </div>
        <a href="/fullMap" class="absolute bottom-4 left-0 right-0 mx-auto block text-center text-blue-500 underline">Click
          here to get directions</a>
      </div>
    </div>
  </div>
</template>


<script setup>
import Map from '~/components/Map.vue'

const allMarkers = [
  // Markers for Skopje
  {latLng: [41.9842, 21.4185], tooltip: 'Skopje - Recycle Eko Start'},
  {latLng: [41.9917, 21.4254], tooltip: 'Skopje - Recycling Glass'},
  {latLng: [41.9961, 21.4551], tooltip: 'Skopje - ЕКОПРОЕКТ-КО'},
  {latLng: [42.0104, 21.3962], tooltip: 'Skopje - DS Smith AD Skopje Recycling'},
  {latLng: [42.0024, 21.4527], tooltip: 'Skopje - Vardarishte Recycling Center'},

  // Markers for Gevgelija
  {latLng: [41.1406, 22.5035], tooltip: 'Gevgelija - Progres Group Kompani'},

  // Markers for Strumica
  {latLng: [41.4397, 22.6431], tooltip: 'Strumica - Југосуровина'},

  // Markers for Shtip
  {latLng: [41.7447, 22.1958], tooltip: 'Shtip - Криплас'},

  // Markers for Negotino
  {latLng: [41.4844, 22.0935], tooltip: 'Negotino - Zoka Trade'}
]

const mapHeight = '100%';
const mapWidth = '100%';
const mapZoom = 8;
</script>

<style scoped>
.map-container {
  overflow: hidden;
}
</style>
  