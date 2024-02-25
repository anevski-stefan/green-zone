<template>
  <div :style="{ height: height, width: width }" :class="mapContainerClass">
    <LMap
        ref="map"
        :zoom="zoom"
        :center="center"
        class="w-full h-full"
    >
      <LTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
          layer-type="base"
          name="OpenStreetMap"
      />

      <LMarker v-for="(marker, index) in markers" :key="index" :lat-lng="marker.latLng">
        <LTooltip>{{ marker.tooltip }}</LTooltip>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  height: {
    type: String,
    required: true
  },
  width: {
    type: String,
    required: true
  },
  zoom: {
    type: Number,
    required: true
  },
  center: {
    type: Array,
    default: () => [41.6086, 21.7453]
  },
  markers: {
    type: Array,
    required: true
  }
})

const mapContainerClass = 'w-full h-full'
</script>

<style scoped>
</style>
  