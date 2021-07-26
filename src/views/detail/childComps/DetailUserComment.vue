<template>
  <div>
    <div class="user-comment"></div>
  </div>
</template>

<script>
export default {
  props: {
    detailUserCommit: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>