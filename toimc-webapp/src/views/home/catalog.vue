<template>
  <div>
    <scroll
      :distance="footerHeight"
      :isEnd="isEnd"
      @on-loadTop="loadTop"
      @on-loadBottom="loadBottom"
    >
      <ul>
        <list-item
          v-for="(item,index) in lists"
          :key="'catalog' + index"
          :item="item"
          @on-show-user="goUser"
          @on-show-detail="goDetail"
        ></list-item>
      </ul>
    </scroll>
  </div>
</template>

<script>
import { getList } from '@/api/content'
export default {
  name: 'catalog',
  props: ['catalog'],
  data () {
    return {
      page: 0,
      limit: 10,
      // catalog: '',
      lists: [],
      isEnd: false,
      isRepeat: false,
      handle: {},
      footerHeight: 0
    }
  },
  watch: {
    catalog (newval, oldval) {
      this.catalog = newval
      this.page = 0
      this.init()
    }
  },
  mounted () {
    this._getList()
  },
  methods: {
    initHeight () {
      this.footerHeight = document.getElementsByClassName(
        'layout-footer'
      )[0].offsetHeight
    },
    init () {
      if (typeof this.handle === 'function') {
        this.handle()
      }
      this.isEnd = false
      this.isRepeat = false
      this.lists = []
      this._getList()
    },
    loadTop (end) {
      this.page = 0
      this.handle = end
      this.init()
    },
    loadBottom (end) {
      this.page++
      this.handle = end
      this.init()
    },
    _getList () {
      if (this.isRepeat) return
      if (this.isEnd) return
      getList({
        catalog: this.catalog,
        page: this.page,
        limit: this.limit,
        sort: 'created'
      })
        .then((res) => {
          // 加入一个请求锁，防止用户多次点击，等待数据返回后，再打开
          this.isRepeat = false
          // 对于异常的判断，res.code 非200，我们给用户一个提示
          // 判断是否lists长度为0，如果为零即可以直接赋值
          // 当Lists长度不为0，后面请求的数据，加入到Lists里面来
          if (res.code === 200) {
            // 判断res.data的长度，如果小于20条，则是最后页
            if (res.data.length < this.limit) {
              this.isEnd = true
            }
            if (this.lists.length === 0) {
              this.lists = res.data
            } else {
              this.lists = this.lists.concat(res.data)
            }
          }
          if (typeof this.handle === 'function') {
            this.handle()
          }
          this.initHeight()
        })
        .catch((err) => {
          this.isRepeat = false
          if (err) {
            this.$Toast(err.message)
          }
        })
    },
    goUser (id) {
      console.log('goUser -> id', id)
    },
    goDetail (tid) {
      console.log('goDetail -> tid', tid)
      this.$router.push({ name: 'detail', params: { tid } })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  margin: 0;
  background-color: #f3f6f8;
}
</style>
