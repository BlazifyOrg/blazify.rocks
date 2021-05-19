<template>
  <div>
    <Header title="Projects" />
    <v-container>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.title"
          class="d-flex justify-center"
        >
          <v-card height="500" width="350" class="pa-2">
            <v-img :src="project.image" height="200" />
            <v-card-title>{{ project.name }}</v-card-title>
            <v-card-subtitle>{{ project.lang }}</v-card-subtitle>
            <v-divider />
            <v-card-text>{{ project.content }}</v-card-text>
            <v-card-actions>
              <v-btn @click="redirect(project.name)" block color="red"
                >More</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "projects",
  components: { Header },
  methods: {
    redirect(lang) {
      this.$router.push(`/projects/${lang.toLowerCase()}`);
    },
  },
  data: () => ({
    projects: [
      {
        name: "BlazeScript",
        lang: "Rust",
        image:
          "https://media.discordapp.net/attachments/713410105928056856/837727145060597810/bzs.png?width=915&height=458",
        content:
          "A dynamic interpreted scripting language made in rust to be blazingly fast and optimised. The language consists the necessity features of any modern object oriented programming languages such as classes, objects, etc.",
      },
    ],
  }),
};
</script>

<style scoped></style>
