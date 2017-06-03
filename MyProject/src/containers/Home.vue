<template>
  <div class="home">
    <div>
      <menu-app></menu-app>
    </div>
  </div>
</template>

<script>
import MenuApp from '../components/MenuApp'

export default {
  name: 'home',
  components: {
    MenuApp
  },
  data () {
    return {
    }
  },
  mounted: function () {
  }
}
</script>

<style  lang="scss">
  .home {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: red;
  }

</style>
