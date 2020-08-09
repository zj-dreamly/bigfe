<template>
  <div>
    hello world!{{item}}
    <p></p>
    <router-link to="/hello1">hello1 link</router-link>
  </div>
</template>

<script>
export default {
  asyncData: ({ store }) => {
    return store.dispatch('getDataAction')
  },
  computed: {
    item () {
      return this.$store.state.lists
    }
  }
}
</script>

<style lang="scss" scoped>
</style>