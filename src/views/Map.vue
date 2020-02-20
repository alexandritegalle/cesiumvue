<template>
  <div class="viewer">
    <b-button variant="outline-primary" class="toggle" @click="hide">{{message}}</b-button>
    <sidebar v-if="toggle" class="sidebar"> </sidebar>
    <vc-viewer>
    </vc-viewer>
  </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    sidebar: Sidebar
  },
  data () {
    return {
      toggle: false,
      message: this.$store.state.czmldatasource.message
    }
  },
  methods: {
    hide () {
      if (this.toggle) {
        this.toggle = false
      } else {
        this.toggle = true
      }
    }
  }
}
</script>

<style>
.viewer {
  width: 100%;
  height: 100%;
}
.sidebar {
  position: absolute;
  z-index: 100;
}
.toggle {
  position: absolute;
  z-index: 2000;
  margin-left: -50%;
}
</style>
