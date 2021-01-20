<template>
  <div class="bg-white tech-stack">
    <div class="grid xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-6 gap-8 py-16 items-center max-w-7xl mx-auto tech-stack">
        <img src="img/logos/sas.png" alt="" class="h-8 mx-auto" />
        <img src="img/logos/postgresql-logo.png" alt="" class="w-20 mx-auto" />
        <img src="img/logos/mysql.png" alt="" class="w-24 mx-auto" />
        <img src="img/logos/mssql.png" alt="" class="w-16 mx-auto" />
        <img src="img/logos/oracle.png" alt="" class="h-4 mx-auto" />
        <img src="img/logos/hadoop.png" alt="" class="h-8 ml-2 mx-auto" />
        <img src="img/logos/aws.png" alt="" class="h-8 mx-auto" />
        <img src="img/logos/microsoft_azure.svg" alt="" class="h-20 mx-auto" />
        <img src="img/logos/gcp.png" alt="" class="h-12 mx-auto" />
        <img src="img/logos/kafka.png" alt="" class="h-12 mx-auto" />
        <img src="img/logos/spark.png" alt="" class="h-8 mx-auto" />
        <img src="img/logos/teradata.png" alt="" class="h-10 mx-auto" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TechStack'
  }
</script>

<style lang="scss" scoped>
.tech-stack img {
  // -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  // filter: grayscale(100%);
  -webkit-user-select: none;
  user-select: none;
  -moz-user-select: none;
}
.tech-stack img:hover {
  opacity: 1;
  transform: scale(1.05);
}
</style>