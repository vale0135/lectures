<template>
  <breadcrumb tag="ol">
    <breadcrumb-item><a href="#">Home</a></breadcrumb-item>
    <breadcrumb-item><a href="#">Library</a></breadcrumb-item>
    <breadcrumb-item active>Data</breadcrumb-item>
  </breadcrumb>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb';
import BreadcrumbItem from '@/components/BreadcrumbItem';

export default {
  name: 'BreadcrumbPage',
  components: {
    Breadcrumb,
    BreadcrumbItem
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
