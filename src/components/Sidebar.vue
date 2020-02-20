<template>
  <b-container fluid class="p-0 h-100 mapboxgl-ctrl-top-left map-sidebar-container">
    <b-row no-gutters class="h-100">
      <b-col sm="5" class="h-100 m-0 pt-2 mapboxgl-ctrl map-sidebar-col">
        <div id="h-100 nav">
          <h5>Emergency Evacuation Simulator</h5>
          <router-link to="/">Home</router-link>|
          <router-link to="/about">About</router-link>
        </div>
        <b-collapse visible id="collapse-side-panel" class="h-100">
          <div class="h-100 map-accordion-container">
            <!-- <b-alert show variant="danger" ></b-alert> -->
            <b-card header="Scenario" class="mb-1 p-0">
              <b-form-group
                label-cols-sm="12"
                label-cols-lg="4"
                label="Region"
                label-for="map-region"
              >
                <b-form-select id="map-region" v-model="changeDataSource">
                  <option value=nodata>No data</option>
                  <option value=melbourne>Melbourne</option>
                  <option value=sydney>Sydney</option>
                </b-form-select>
              </b-form-group>
            </b-card>
            <br>
            <br>
            <br>
          </div>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    changeDataSource: {
      get () {
        return null
      },
      set ([value]) {
        console.log(value)
        this.$store.dispatch('changeCzmlDataSource', [value])
      }
    }
  }
}
</script>

<style>
#nav {
  width: 100%;
  position: absolute;
  left: 0;
}
.map-sidebar-container {
}
.map-sidebar-container .card-body {
  padding: 1em;
}
.map-accordion-container {
  text-align: left;
  padding: 20px;
}
.map-sidebar-container .map-sidebar-col {
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
}
.helper-icons {
  position: relative;
  left: 5px;
}
.custom-select {
  width: 50%;
}
.vue-slide-bar-component[data-v-68863e48] {
  padding-left: 5% !important;
  padding-right: 5% !important;
}
</style>
