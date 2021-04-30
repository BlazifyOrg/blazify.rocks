<template>
  <v-container>
    <v-row>
      <v-col
        v-for="member in members"
        :key="member.title"
        class="d-flex justify-center"
      >
        <v-card height="750" width="450" class="pa-2 flex-column">
          <v-img :src="member.image" height="400" />
          <v-card-title>{{ member.name }}</v-card-title>
          <v-card-subtitle>{{ member.description }}</v-card-subtitle>
          <v-divider />
          <v-card-text>{{ member.content }}</v-card-text>
          <v-card-actions class="mt-auto">
            <v-btn block color="red" bottom>More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "team",
  data: () => ({
    members: [
      {
        name: "Ronit Rahaman",
        description: "Founder & Owner",
        image:
          "https://cdn.discordapp.com/attachments/713410105928056856/835597895696121866/IMG-20210111-WA0056.jpg",
        content:
          "Hi, I'm Ronit \"RoMeAh\" Rahaman, a passionate self-taught backend developer from West Bengal, India. Not to be mentioned I'm trash at front end... I am mainly a Rust Developer but I am also love JavaScript, TypeScript, Kotlin, Scala and Java. Founder and Head Developer of Blazify and currently working on it so check it out pls! I work on it from the age of 12...",
      },
      {
        name: "Aron Kylebäck",
        description: "Owner & Developer",
        image:
          "https://cdn.discordapp.com/attachments/713410105928056856/835846448939270144/image0.jpg",
        content:
          "Hi there, I am Aron! I am a fullstack web developer and enjoy anything from electronics to animals :)",
      },
      {
        name: "Ratul Saha",
        description: "Owner & Developer",
        image:
          "https://cdn.discordapp.com/attachments/693495170380857446/835847273098510336/53178362.png",
        content:
          "I love designing minimal and simple yet classy apps and websites. Simplicity and minimalism is my style and I believe that it will be the future norm too.",
      },
    ],
  }),
};
</script>

<style scoped></style>
