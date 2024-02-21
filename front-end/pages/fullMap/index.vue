<template>
    <div class="bg-gray-200 rounded-lg p-6 h-screen">
      <div class="map-container w-full h-full">
        <Map :height="mapHeight" :width="mapWidth" :zoom="mapZoom" :markers="allMarkers" />
      </div>
    </div>
  </template>
  
  <script setup>
  import Map from '~/components/Map.vue'
  
  const allMarkers = [
    // Markers for Skopje
    { latLng: [41.9842, 21.4185], tooltip: 'Skopje - Recycle Eko Start' },
    { latLng: [41.9917, 21.4254], tooltip: 'Skopje - Recycling Glass' },
    { latLng: [41.9961, 21.4551], tooltip: 'Skopje - ЕКОПРОЕКТ-КО' },
    { latLng: [42.0104, 21.3962], tooltip: 'Skopje - DS Smith AD Skopje Recycling' },
    { latLng: [42.0024, 21.4527], tooltip: 'Skopje - Vardarishte Recycling Center' },
  
    // Markers for Gevgelija
    { latLng: [41.1406, 22.5035], tooltip: 'Gevgelija - Progres Group Kompani' },
  
    // Markers for Strumica
    { latLng: [41.4397, 22.6431], tooltip: 'Strumica - Југосуровина' },
  
    // Markers for Shtip
    { latLng: [41.7447, 22.1958], tooltip: 'Shtip - Криплас' },
  
    // Markers for Negotino
    { latLng: [41.4844, 22.0935], tooltip: 'Negotino - Zoka Trade' }
  ]
  
  const mapHeight = '100%';
  const mapWidth = '100%';
  const mapZoom = 8;
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  .map-container {
    overflow: hidden;
  }
  </style>
  