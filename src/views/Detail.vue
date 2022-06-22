<template>
  <div class="detail">
    <TopBar :isHome="isHome"></TopBar>
    <SearchHome :isHome="isHome"></SearchHome>
  </div>
</template>

<script>
export default {
  name: 'DetailPrd',
  data () {
    return {
      isHome: false
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
