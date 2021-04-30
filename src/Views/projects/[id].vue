<template>
  <div>Redirecting to {{ id }} Github</div>
</template>

<script>
export default {
  name: "Project",
  data() {
    window.location.href = `https://github.com/BlazifyOrg/${this.$route.params.id}`;
    return {
      id: this.$route.params.id,
    };
  },
};
</script>
