<template>
  <div class="graph">
    <div class="container">
      <p>compteur:  {{ getCounterState }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'graph',
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters(['getCounterState'])
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.graph {
  height: 50%;
  width: 50%;
  background-color: brown;
  .container{
      p{
        margin: 0px;
        padding: 0px;
      }
  }
}
</style>
