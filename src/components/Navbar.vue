<template>
  <v-main>
    <v-card>
      <v-tabs grow color="red">
        <v-tabs-slider color="red"/>
        <v-tab v-for='title in ["Home", "About", "Projects", "Team", "Contact Us"]' :key="title.toLowerCase()" :to="title.toLowerCase()">{{title}}</v-tab>
      </v-tabs>
    </v-card>
  </v-main>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>