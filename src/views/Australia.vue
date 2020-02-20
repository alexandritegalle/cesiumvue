<template>
  <vc-viewer :animation="animation" :timeline="timeline" :camera="camera">
    <vc-datasource-czml :czml="czml"></vc-datasource-czml>
  </vc-viewer>
</template>
<script>
export default {
  data () {
    return {
      animation: true,
      timeline: true,
      camera: {
        position: {
          lng: 136.9631,
          lat: -30.8136,
          height: 5050000
        },
        heading: 0.0,
        pitch: -90,
        roll: 3
      },
      czml: [{
        id: 'document',
        name: 'CZML Point - Time Dynamic',
        version: '1.0'
      }, {
        id: 'point',
        availability: '2012-08-04T16:00:00Z/2012-08-04T16:05:00Z',
        position: {
          epoch: '2012-08-04T16:00:00Z',
          cartographicDegrees: [
            0, 136.9631, -30.8136, 150000,
            100, 136.9631, -29.8136, 150000,
            200, 136.9631, -28.8136, 150000,
            300, 136.9631, -27.8136, 150000
          ]
        },
        point: {
          color: {
            rgba: [252, 136, 3, 128]
          },
          outlineColor: {
            rgba: [252, 115, 3, 128]
          },
          outlineWidth: 3,
          pixelSize: 15
        }
      }, {
        id: 'point2',
        availability: '2012-08-04T16:00:00Z/2012-08-04T16:05:00Z',
        position: {
          epoch: '2012-08-04T16:00:00Z',
          cartographicDegrees: [
            0, 136.9631, -30.8136, 150000,
            100, 137.9631, -29.8136, 150000,
            200, 138.9631, -28.8136, 150000,
            300, 139.9631, -27.8136, 150000
          ]
        },
        point: {
          color: {
            rgba: [252, 136, 3, 128]
          },
          outlineColor: {
            rgba: [252, 115, 3, 128]
          },
          outlineWidth: 3,
          pixelSize: 15
        }
      }]
    }
  }
}
</script>
