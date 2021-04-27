<template>
  <div>
    <Header title="Contact us"/>
    <v-container>
      <v-row>
        <v-col v-for="support in supports" :key="support.name">
          <v-card class="pa-2 flex-column">
            <v-icon class="float-right ma-5" x-large>{{support.icon}}</v-icon>
            <v-card-title>{{support.name}}</v-card-title>
            <v-card-subtitle>{{support.description}}</v-card-subtitle>
            <v-divider />
            <v-card-text>{{support.content}}</v-card-text>
            <v-card-actions>
              <v-btn block color="red" :href="support.link">Proceed</v-btn>
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
  name: "contact",
  components: {Header},
  data: () => ({
    supports: [
      {
        name: "Discord",
        description: "Discord for any discussion",
        link: "https://discord.gg/ZdUYH7FaeK",
        icon: "mdi-discord"
      },{
        name: "Administration",
        description: "Got any administration problems/questions?",
        link: "mailto:romeah@blazify.rocks",
        icon: "mdi-account"
      },{
        name: "Mail",
        description: "For any non-administration problems/questions",
        link: "mailto:contact@blazify.rocks",
        icon: "mdi-email"
      },
    ]
  })
}
</script>

<style scoped>

</style>