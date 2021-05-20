<template>
  <v-app>
    <v-main>
      <Navbar />
      <RouterView />
      <div class="text-center ma-2" v-if="showSnackbar">
        <v-snackbar
          v-model="snackbar"
          :light="!$vuetify.theme.dark"
          timeout="20000"
        >
          Save theme, see more <router-link to="/theme-legal">here</router-link>
          <template v-slot:action="{ attrs }">
            <v-btn
              text
              v-bind="attrs"
              @click="
                snackbar = false;
                save();
              "
              >Agree</v-btn
            >
            <v-btn text v-bind="attrs" @click="snackbar = false"
              >Disagree</v-btn
            >
          </template>
        </v-snackbar>
      </div>
      <v-footer padless fixed>
        <v-col class="text-center" cols="12">
          {{ "2020 - " + new Date().getFullYear() }} -
          <strong class="red--text">Blazify</strong>
          <v-icon class="float-right" @click="changeTheme"
            >mdi-theme-light-dark</v-icon
          >
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>
<script lang="ts">
export default {
  created() {
    if (localStorage.getItem("theme")) this.showSnackbar = false;
  },
  data: () => ({
    snackbar: false,
    showSnackbar: true
  }),
  components: {
    Navbar: () => import("@/components/Navbar")
  },
  methods: {
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (localStorage.getItem("theme")) this.save();
      setTimeout(() => (this.snackbar = true), 1000);
    },
    save() {
      localStorage.setItem("theme", `${!this.$vuetify.theme.dark}`);
    }
  }
};
</script>
<style lang="scss"></style>
