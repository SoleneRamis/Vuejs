<template>
  <div class="watchers">
    <p> Prénom : <input type="text" placeholder="Enter Firstname" v-model="firstname">
      <br><br> Nom : <input type="text" placeholder="Enter Lastname" v-model="lastname">
      <br><br> Nom complet : <span class="firstname"> {{ Fname }} </span>  <span class="lastname">  {{ Lname }} </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'watchers',
  data () {
    return {
      Fname: '',
      Lname: ''
    }
  },
  computed: {
    firstname: {
      get: function () {
        return this.Fname
      },
      set: function (value) {
        let parts = value.split(' ')
        this.Fname = parts[0]
      }
    },
    lastname: {
      get: function () {
        return this.Lname
      },
      set: function (value) {
        let parts = value.split(' ')
        this.Lname = parts[0]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
}
.firstname {
  color : green;
  text-transform: capitalize;
}
.lastname {
  text-transform: uppercase;
}
</style>
