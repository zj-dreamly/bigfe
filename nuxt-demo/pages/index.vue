<template>
  <div class="layui-container">
    <div class="layui-row layui-col-space15">
      <div class="layui-col-md8">
        <!-- <imooc-top></imooc-top> -->
        <nuxt-child />
      </div>
      <div class="layui-col-md4">
        <imooc-tips :lists="tips"></imooc-tips>
        <imooc-sign></imooc-sign>
        <imooc-hotlist :lists="top"></imooc-hotlist>
        <imooc-ads></imooc-ads>
        <imooc-links :lists="links"></imooc-links>
      </div>
    </div>
  </div>
</template>

<script>
import Tips from '~/components/sidebar/Tips'
import Sign from '~/components/sidebar/Sign'
import HotList from '~/components/sidebar/HotList'
import Ads from '~/components/sidebar/Ads'
import Links from '~/components/sidebar/Links'
// import Top from '~/components/contents/Top'
export default {
  name: 'Index',
  components: {
    'imooc-tips': Tips,
    'imooc-sign': Sign,
    'imooc-hotlist': HotList,
    'imooc-ads': Ads,
    'imooc-links': Links
    // 'imooc-top': Top
  },
  async asyncData({ $axios }) {
    // tips
    const tipsResult = await $axios.$get('/public/tips')
    // hotlist
    const topResult = await $axios.$get('/public/topWeek')
    // links
    const linksResult = await $axios.$get('/public/links')
    return {
      tips: tipsResult.data || [],
      top: topResult.data || [],
      links: linksResult.data || []
    }
  }
}
</script>

<style></style>
