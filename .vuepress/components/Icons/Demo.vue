<template>
  <div>
    <div v-for="(icon, index) in icons" :key="`icon-${index}`">
      <br>
      <span
        :class="`sn-icon-${icon.properties.name}`"
        class="icon"
      />
      <h2 style="display: inline; vertical-align: top;">sn-icon-{{ icon.properties.name }}</h2>
      <p style="margin-left: 62px; margin-top: -32px;">{{ icon.icon.tags.join(', ') }}</p>
    </div>
  </div>
</template>

<script>
  const data = require('./selection')
  export default {
    data () {
      return {
        icons: []
      }
    },
    created () {
      let ics = data.icons.sort((a, b) => {
        if (a.properties.name.toLowerCase() < b.properties.name.toLowerCase()) {
          return -1
        }
        if (a.properties.name.toLowerCase() > b.properties.name.toLowerCase()) {
          return 1
        }
        return 0
      })
      for (let icon of ics) {
        this.icons.push(icon)
      }
    }
  }
</script>

<style scoped>
.icon {
  font-size: 50px;
  margin-right: 8px;
  line-height: 70px;
}
</style>