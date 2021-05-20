<template>
  <div>
    <h1 class="text-center custom--title">{{ title }}</h1>
    <h3 class="text-center custom--description" v-if="description">
      {{ description }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title", "description"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.custom--title {
  text-shadow: 7px 7px rgba(165, 9, 9, 0.19);
  color: red;
  text-transform: uppercase;
  font-size: 6em;
  font-weight: 100;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  animation: fadeIn linear 1s;
  -webkit-animation: fadeIn linear 1s;
  -moz-animation: fadeIn linear 1s;
  -o-animation: fadeIn linear 1s;
}
.custom--description {
  font-family: Montserrat, Ubuntu;
  font-weight: 100;
  font-size: xx-large;
  animation: fadeIn linear 4s;
  opacity: 0;
  -webkit-animation: fadeIn linear 1s;
  -moz-animation: fadeIn linear 1s;
  -o-animation: fadeIn linear 1s;
  animation-delay: 1s;
  -o-animation-delay: 1s;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
