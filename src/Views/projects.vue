<template>
  <v-container>
    <v-row>
      <v-col v-for="project in projects" :key="project.title" class="d-flex justify-center">
        <v-card height="650" width="400" class="pa-2 ">
          <v-img :src="project.image" height="400"/>
          <v-card-title>{{project.name}}</v-card-title>
          <v-card-subtitle>{{project.lang}}</v-card-subtitle>
          <v-divider />
          <v-card-text>{{project.content}}</v-card-text>
          <v-card-actions>
            <v-btn block color="red">More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "projects",
  data: () => ({
    projects: [
      {
        name: "BlazeScript",
        lang: "Rust",
        content: "A basic scripting language"
      }
    ]
  })
}
</script>

<style scoped>

</style>