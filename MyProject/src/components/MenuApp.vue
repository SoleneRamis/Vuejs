<template>
  <div class="menu">
    <div class="container">
      <div>
        <button value="1"  @click="setCounterState">+1</button>
      </div>
      <div>
        <router-link to="/">aller a la home</router-link>
        <router-link to="/projects">aller au projets</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'menu',
  data () {
    return {
    }
  },
  mounted: function () {
  },
  update: function () {
  },
  methods: {
    ...mapActions(['setCounterState'])
  }
}
</script>

<style  lang="scss" scoped>
.menu{
  height: 50%;
  width: 50%;
  background-color: yellow;
  .container{
    button{

    }
  }
}
</style>
