<template>
  <div class="viewer">
    <b-button variant="outline-primary" class="toggle" @click="hide">Settings</b-button>
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
      toggle: false
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
