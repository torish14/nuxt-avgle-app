<template>
  <div>
    <div class="flex flex-wrap flex-shrink-0 bg-black justify-center">
      <!-- 検索結果表示 -->
      <template v-if="messages.length === 0">
        <i class="material-icons text-gray-500">error</i>
        <h5 class="text-gray-500 text-lg">
          &nbsp;キーワードにあてはまる結果はありません
        </h5>
      </template>
      <template v-else>
        <div v-for="data in getPaginationItems" :key="data.id" class="bg-black px-2">
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
              <img
                :src="data.preview_url"
                :alt="data.title"
                class="z-auto relative"
                referrerpolicy="no-referrer"
              >
              <h5 class="text-white z-10 absolute right-0 bottom-0 text-sm">
                {{ toHms(data.duration) }}
              </h5>
            </div>
            <h5 class="text-gray-300 text-base hover:text-purple-500">
              {{ data.title.slice(0,17) }}
              <p>
                {{ data.title.slice(17,34) }}
              </p>
            </h5>
          </nuxt-link>
          <div class="flex flex-row my-1 mb-8">
            <template v-if="data.viewnumber >= 1000000">
              <h5 class="text-gray-500 pr-1 text-sm">
                再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
              </h5>
            </template>
            <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
              <h5 class="text-gray-500 pr-1 text-sm">
                再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
              </h5>
            </template>
            <template v-else>
              <h5 class="text-gray-500 pr-1 text-sm">
                再生数 {{ Math.ceil(data.viewnumber) }}
              </h5>
            </template>
            <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
              <i class="material-icons text-gray-500">thumb_up</i>
              <h5 class="text-gray-500 px-1 text-sm">
                0%
              </h5>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500">thumb_up</i>
              <h5 class="text-gray-500 px-1 text-sm">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h5>
            </template>
          </div>
        </div>
      </template>
    </div>
    <!-- ページネーション -->
    <paginate
      :page-count="getPageCount"
      :page-range="3"
      :margin-pages="2"
      :click-handler="clickCallback"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item-li'"
      class="flex justify-center bg-black text-gray-300 sm:pt-4 md:pt-6 lg:pt-8 xl:pt-8"
    />
    <!-- container-class はレイアウトのCSSクラス名 -->
    <!-- page-class は各ページ要素のタグliのCSSクラス名 -->
    <!-- page-link-class は各ページ要素のタグaのCSSクラス名 -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

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
  fetch ({ store }) {
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
    ...mapState('search', ['messages']),
    // ? 現在ページのアイテムを返す
    getPaginationItems () {
      const current = this.currentPage * this.parPage
      const start = current - this.parPage
      return this.messages.slice(start, current)
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount () {
      return Math.ceil(this.messages.length / this.parPage)
    }
  },
  methods: {
    // ? ページネーションをクリック時に、currentPage にページ番号を設定
    clickCallback (pageNum) {
      this.currentPage = Number(pageNum)
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
    }
  }
}
</script>

<style>
.pagination {
  padding-left: 0;
  border-radius: 4px;
}

li {
  padding: 0;
}

li a {
  padding: 4px 12px;
  border: 1px solid #6b46c1;
  border-radius: 4px;
  text-decoration: none;
}

.page-item-li {
  padding: 4px;
}

.active {
  padding: 4px 1px;
  color: white;
  background-color: #6b46c1;
  border-radius: 4px;
}

/* @media screen and (-webkit-min-device-pixel-ratio:0) {
  _::-webkit-full-page-media, _:future, :root
  body {
    background-color: #eee;
  }
} */
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
          <div class="flex flex-row my-1 mb-8">
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
          <div class="flex flex-row my-1 mb-8">
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
          <div class="flex flex-row my-1 mb-8">
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
          <div class="flex flex-row my-1 mb-8">
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
import { mapState } from 'vuex'

export default {
  fetch ({ store }) {
    store.dispatch('getIndexItems')
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
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
