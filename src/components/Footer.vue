<template>
  <footer class="app-footer">
    <a :href="$t('commons.site')" v-message="'commons.title'"></a> &copy; 2017.
    <span class="float-right">Powered by 
        <a :href="$t('commons.site')" v-message="'commons.title'"></a>
    </span>
  </footer>
</template>
<script>
export default {
  name: 'footer'
}
</script>
