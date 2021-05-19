<template>
  <div>Redirecting to {{ id }}</div>
</template>

<script>
export default {
  name: "Project",
  data() {
    window.location.href =
      this.$route.params.id == "blazescript"
        ? "https://blazescript.blazify.rocks/#/"
        : `https://github.com/BlazifyOrg/${this.$route.params.id}`;
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
