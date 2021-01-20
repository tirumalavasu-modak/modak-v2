<template>
  <div class="bg-gray clients">
    <div class="max-w-7xl mx-auto grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 items-center gap-4 2xl:gap-16 py-16 items-center">
      <img src="img/logos/cloudera.png" alt="" class="mx-auto">
      <img src="img/logos/azure.png" alt="" class="mx-auto">
      <img src="img/logos/streamsets.png" alt="" class="mx-auto">
      <img src="img/logos/bulk.png" alt="" class="mx-auto">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Clients'
  }
</script>

<style lang="scss" scoped>
.clients img {
  // -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  // filter: grayscale(100%);
  -webkit-user-select: none;
  user-select: none;
  -moz-user-select: none;
}
.clients img:hover {
  opacity: 1;
  transform: scale(1.05);
}
</style>