<template>
  <div class="main">
    <div class="flex flex-wrap bg-black justify-center">
      <!-- 検索結果表示 -->
      <!-- <template v-if="messages.length === 0 && !isLoading"> -->
      <template v-if="messages.length === 0">
        <client-only>
          <i class="material-icons text-gray-500">error</i>
          <h5 class="text-gray-500 text-lg">
            &nbsp;キーワードにあてはまる結果はありません
          </h5>
        </client-only>
      </template>
      <template v-else>
        <div v-for="data in getPaginationItems" :key="data.vid" class="bg-black md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8">
          <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
            <div class="relative">
              <!-- <video
                id="video"
                :poster="data.preview_url"
                :src="data.preview_video_url"
                type="video/mp4"
                alt="サムネイル"
                playsinline=""
                onmouseover="this.play(); return false"
                onmouseout="this.pause(); this.currentTime = 0"
                class="z-auto relative"
              /> -->
              <lazy-component>
                <img
                  :src="data.preview_url"
                  alt="サムネイル"
                  class="z-auto relative text-white"
                  referrerpolicy="no-referrer"
                  crossorigin
                >
              </lazy-component>
              <h5 class="text-white z-10 absolute right-0 bottom-0 text-sm">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-base hover:text-purple-500 title">
              {{ data.title.slice(0,20) }}
              <p>
                {{ data.title.slice(20,40) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1">
            <template v-if="data.viewnumber >= 1000000">
              <h6 class="text-gray-500 mr-1 text-sm viewnumber">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h6>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h6 class="text-gray-500 mr-1 text-sm viewnumber">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h6>
            </template>
            <template v-else>
              <h6 class="text-gray-500 mr-1 text-sm viewnumber">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h6>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500">thumb_up</i>
              <h6 class="text-gray-500 px-1 text-sm">
                0%
              </h6>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500">thumb_up</i>
              <h6 class="text-gray-500 px-1 text-sm">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h6>
            </template>
          </div>
          <div class="flex flex-row my-2 mb-6">
            <div v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 0" />
            <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 1">
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
            </template>
            <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 2">
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                <!-- {{ keywords[0][1] }} -->
              </div>
            </template>
            <template v-else>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                <!-- {{ keywords[0][1] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[2] }}
                <!-- {{ keywords[0][2] }} -->
              </div>
            </template>
          </div>
        </div>
        <Paginate
          :page-count="getPageCount"
          :page-range="3"
          :margin-pages="2"
          :click-handler="clickCallback"
          :prev-text="'前'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-text="'次へ >'"
          :next-class="'page-item'"
          :next-link-class="'page-item'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          class="sm:pt-4 md:pt-6 lg:pt-8 xl:pt-8"
        />
      </template>
    </div>
    <!-- <Loading
      :active.sync="isLoading"
      color="gray"
      background-color="black"
      :height="40"
      :width="40"
      :opacity="1"
    /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Vue from 'vue'
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'

// Vue.component(Loading)

// document.addEventListener('DOMContentLoaded', function () {
// const v = document.getElementByld('video')

// if (document.addEventListener) {
//   const mouseover = (window.ontouchstart === undefined) ? 'mouseover' : 'touchstart'
//   const mouseout = (window.ontouchend === undefined) ? 'mouseout' : 'touchend'
//   v.addEventListener(mouseover, function () {
//     v.play()
//   }, false)
//   v.addEventListener(mouseout, function () {
//     v.pause()
//   }, false)
// } else if (document.attachEvent) {
//   v.attachEvent('onmouseover', function () {
//     v.play()
//   })
//   v.attachEvent('onmouseout', function () {
//     v.pause()
//   })
// }

// onmouseover="this.play(); return false"
// onmouseout="this.pause(); this.currentTime = 0"

// document.addEventListener('touchstart', function() {}, {passive: true});

// v.addEventListener('touchstart', function (event) {
//   v.play()
// }, false)

// v.addEventListener('touchend', function (event) {
//   v.pause()
// }, false)

// function playVideo () {
//   v.addEventListener('touchstart', function (event) {
//     v.play()
//   }, false)
// }

// function pauseVideo () {
//   v.addEventListener('touchend', function (event) {
//     v.pause()
//   }, false)
// }

// playVideo()
// pauseVideo()
// }, false)

export default {
  components: {
    // Loading
  },
  async fetch ({ store }) {
    if (store.getters['search/messages'].length) {
      return
    }
    await
      store.commit('search/changeMessage')
      store.dispatch('search/getSearchItems')
  },
  data () {
    return {
      // ? 1ページに表示するアイテム数
      parPage: 20,
      // ? 現在のページ番号
      currentPage: 1
    }
  },
  computed: {
    // ...mapGetters('search', ['message', 'messages', 'keywords', 'isLoading']),
    ...mapGetters('search', ['message','messages', 'keywords']),
    // ? 現在ページのアイテムを返す
    getPaginationItems () {
      const current = this.currentPage * this.parPage
      const start = current - this.parPage
      return this.messages.slice(start, current).sort(function() {return Math.random()-.5;})
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount () {
      return Math.ceil(this.messages.length / this.parPage)
    }
  },
  mounted () {
    this.$nextTick(() => {
      window.scrollTo(0,1)
    })
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener('beforeunload', this.changeForm)
    }
  },
  destory () {
    window.removeEventListener('beforeunload', this.changeForm)
  },
  methods: {
    // ? ページネーションをクリック時に、currentPage にページ番号を設定
    clickCallback (pageNum) {
      this.currentPage = Number(pageNum)
      this.$scrollTo(
        '#header',
        { duration: 1 },
        { offset: -60 }
      )
      this.$router.push({ path: `?page=${this.currentPage}` })
      this.$forceUpdate()
    },
    // search (e) {
    // if (e.keyCode !== 13) { return }
    // this.trueOrFalse = false
    // this.sendRequest()
    // ? 無修正の非表示
    // if (this.$store.state.message === '無修正') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'むしゅうせい') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'ムシュウセイ') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'PAKO') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'Pako') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'pako') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'ぱこ') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'パコ') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'CARIB') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'Carib') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'carib') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'かりぶ') {
    //     console.log('無修正は表示できません！')
    // } else if (this.$store.state.message === 'カリブ') {
    //     console.log('無修正は表示できません！')
    // } else {
    //   Promise.all([
    //     axios.get(searchUrl + this.$store.state.message + '/0'),
    //     axios.get(searchUrl + this.$store.state.message + '/1'),
    //     axios.get(searchUrl + this.$store.state.message + '/2')
    //   ]).then(([apiResult0, apiResult1, apiResult2]) => {
    //     this.searchData0 = apiResult0.data.response.videos
    //     this.searchData1 = apiResult1.data.response.videos
    //     this.searchData2 = apiResult2.data.response.videos
    //   })
    // }
    // },
    // sendRequest () {
    // this.trueOrFalse = false
    // this.$store.dispatch('getItems')
    toHms (t) {
      let hms = ''
      const h = Math.ceil(t / 3600 | 0)
      const m = Math.ceil(t % 3600 / 60 | 0)
      const s = Math.ceil(t % 60)

      if (h !== 0) {
        hms = h + ':' + padZero(m) + ':' + padZero(s)
      } else if (m !== 0) {
        hms = m + ':' + padZero(s)
      } else {
        hms = s
      }

      return hms

      function padZero (v) {
        if (v < 10) {
          return '0' + v
        } else {
          return v
        }
      }
    },
    changeForm () {
      this.$store.commit('search/changeMessage')
    }
  }
}
</script>

<style>
@media screen and (max-width: 768px) {
  img {
    width: 365px;
  }

  .title {
    padding-left: 8px;
  }

  .viewnumber {
    padding-left: 8px;
  }

  .keyword {
    margin-left: 8px;
  }

  /* .main {
    padding-bottom: 60px;
  } */
}

img {
  color: white;
}

.material-icons {
  font-size: 18px;
}

.page-item {
  color: #8763D7 !important;
  font-weight: 600 !important;
}

.pagination {
  display: inline-block;
  padding-left: 0;
  margin: 20px 0;
  border-radius: 4px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.pagination > li {
  display: inline;
}

li {
  text-align: -webkit-match-parent;
}

.pagination > li:first-child > a, .pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li:last-child > a, .pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination > .disabled > span, .pagination > .disabled > span:hover, .pagination > .disabled > span:focus, .pagination > .disabled > a, .pagination > .disabled > a:hover, .pagination > .disabled > a:focus {
  color: #ddd;
  cursor: not-allowed;
  border-color: #6b46c1;
}

.pagination > li > a, .pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #ddd;
  text-decoration: none;
  border: 1px solid #6b46c1;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #6b46c1;
  border-color: #6b46c1;
}

/* @media screen and (-webkit-min-device-pixel-ratio:0) {
  _::-webkit-full-page-media, _:future, :root
  body {
    background-color: #eee;
  }
} */

body {
  background-color: black
}
</style>

<!-- <template>
  <div class="bg-black">
    初期動画表示
    <template v-if="soaringMessages.length === 0 && famousMessages.length === 0 && actressMessages.length === 0 && genreMessages.length === 0">
      <i class="material-icons text-gray-500">error</i>
      <h5 class="text-gray-500 text-lg">
        &nbsp;No results found for your keyword.
      </h5>
    </template>
    <template v-else>
      <h1 class="text-gray-300 text-2xl font-semibold ml-6 pt-8">
        日本で急上昇
      </h1>
      <div class="flex flex-wrap p-4">
        <div v-for="data in soaringMessages" :key="data.id" class="bg-black p-4">
          <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
            <div class="relative">
              <video
                :poster="data.preview_url"
                :src="data.preview_video_url"
                alt="サムネイル"
                muted
                loop
                onmouseover="this.play(); return false"
                onmouseout="this.pause(); this.currentTime = 0"
                ontouchstart=""
                class="z-auto relative"
              />
              <h5 class="text-white z-10 absolute right-0 bottom-0">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-lg hover:text-purple-500">
              {{ data.title.slice(0,17) }} <p>
                {{ data.title.slice(17,34) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1 mb-6">
            <template v-if="data.viewnumber >= 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h5>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h5>
            </template>
            <template v-else>
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h5>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                0%
              </h5>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h5>
            </template>
          </div>
        </div>
      </div>
      <h1 class="text-gray-300 text-2xl font-semibold ml-6">
        日本で一番人気
      </h1>
      <div class="flex flex-wrap p-4">
        <div v-for="data in famousMessages" :key="data.id" class="bg-black p-4">
          <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
            <div class="relative">
              <video
                :poster="data.preview_url"
                :src="data.preview_video_url"
                alt="サムネイル"
                muted
                loop
                onmouseover="this.play(); return false"
                onmouseout="this.pause(); this.currentTime = 0"
                ontouchstart=""
                class="z-auto relative"
              />
              <h5 class="text-white z-10 absolute right-0 bottom-0">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-lg hover:text-purple-500">
              {{ data.title.slice(0,17) }} <p>
                {{ data.title.slice(17,34) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1 mb-6">
            <template v-if="data.viewnumber >= 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h5>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h5>
            </template>
            <template v-else>
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h5>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                0%
              </h5>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h5>
            </template>
          </div>
        </div>
      </div>
      <h1 class="text-gray-300 text-2xl font-semibold ml-6">
        おすすめ女優
      </h1>
      <div class="flex flex-wrap p-4">
        <div v-for="data in actressMessages" :key="data.id" class="bg-black p-4">
          <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
            <div class="relative">
              <video
                :poster="data.preview_url"
                :src="data.preview_video_url"
                alt="サムネイル"
                muted
                loop
                onmouseover="this.play(); return false"
                onmouseout="this.pause(); this.currentTime = 0"
                ontouchstart=""
                class="z-auto relative"
              />
              <h5 class="text-white z-10 absolute right-0 bottom-0">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-lg hover:text-purple-500">
              {{ data.title.slice(0,17) }} <p>
                {{ data.title.slice(17,34) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1 mb-6">
            <template v-if="data.viewnumber >= 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h5>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h5>
            </template>
            <template v-else>
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h5>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                0%
              </h5>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h5>
            </template>
          </div>
        </div>
      </div>
      <h1 class="text-gray-300 text-2xl font-semibold ml-6">
        おすすめジャンル
      </h1>
      <div class="flex flex-wrap p-4">
        <div v-for="data in genreMessages" :key="data.id" class="bg-black p-4">
          <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
            <div class="relative">
              <video
                :poster="data.preview_url"
                :src="data.preview_video_url"
                alt="サムネイル"
                muted
                loop
                onmouseover="this.play(); return false"
                onmouseout="this.pause(); this.currentTime = 0"
                ontouchstart=""
                class="z-auto relative"
              />
              <h5 class="text-white z-10 absolute right-0 bottom-0">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-lg hover:text-purple-500">
              {{ data.title.slice(0,17) }} <p>
                {{ data.title.slice(17,34) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1 mb-6">
            <template v-if="data.viewnumber >= 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h5>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h5>
            </template>
            <template v-else>
              <h5 class="text-gray-500 pr-1">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h5>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                0%
              </h5>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h5 class="text-gray-500 px-1">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h5>
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  fetch ({ store }) {
    store.dispatch('getIndexItems')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'soaringMessages', 'famousMessages', 'actressMessages', 'genreMessages'
    ])
  },
  methods: {
    toHms (t) {
      let hms = ''
      const h = Math.ceil(t / 3600 | 0)
      const m = Math.ceil(t % 3600 / 60 | 0)
      const s = Math.ceil(t % 60)

      if (h !== 0) {
        hms = h + ':' + padZero(m) + ':' + padZero(s)
      } else if (m !== 0) {
        hms = m + ':' + padZero(s)
      } else {
        hms = s
      }

      return hms

      function padZero (v) {
        if (v < 10) {
          return '0' + v
        } else {
          return v
        }
      }
    }
  }
}
</script> -->