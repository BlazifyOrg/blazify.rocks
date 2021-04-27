<template>
  <v-app>
    <v-main>
      <Navbar />
      <RouterView />
      <v-footer padless fixed>
        <v-col
            class="text-center"
            cols="12"
        >
          {{ new Date().getFullYear() }} - <strong class="red--text">Blazify</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>
<script lang="ts">
export default {
  components: {
    Navbar: () => import("./components/Navbar")
  }
}
</script>
<style lang="scss">
</style>
