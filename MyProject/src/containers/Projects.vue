<template>
  <div class="projects">
    <div>
      <Graph></Graph>
      <menu-app></menu-app>
    </div>
  </div>
</template>

<script>
import MenuApp from '../components/MenuApp'
import Graph from '../components/Graph'

export default {
  name: 'projects',
  components: {
    MenuApp,
    Graph
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
  .projects{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    background-color: green;
  }

</style>
