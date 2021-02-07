<template>
  <div class="main">
    <div class="bg-black">
      <!-- <div class="flex flex-wrap bg-black p-4"> -->
      <!-- 埋め込み検索結果 -->
      <!-- <div class="sm:h-64 sm:w-1/3 md:h-64 md:w-1/3 lg:h-64 lg:w-1/3 xl:h-64 xl:w-1/3 p-4"> -->
      <div>
        <template v-if="messagesMatchVid">
          <div class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0" style="padding-top: 50%;">
            <iframe
              id="sub"
              :src="messagesMatchVid.embedded_url"
              frameborder="0"
              scrolling="no"
              allowfullscreen
              referrerpolicy="unsafe-url"
              class="youtube absolute top-0 left-0 w-full h-full"
              width="100%"
              height="100%"
            />
          </div>
          <h5 class="text-gray-300 text-lg pb-8 md:px-4 lg:px-4 xl:px-4 2xl:px-4 title">
            {{ messagesMatchVid.title.slice(0,40) }}
            <!-- {{ messagesMatchVid.title.slice(20,40) }} -->
          </h5>
        </template>
        <!-- <template v-else-if="soaringMessagesMatchVid">
          <iframe
            id="sub"
            :data-src="soaringMessagesMatchVid.embedded_url"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            referrerpolicy="always"
            class="youtube"
            width="500"
            height="298"
          />
          <h5 class="pb-16 text-gray-300 text-lg">
            {{ soaringMessagesMatchVid.title.slice(0,17) }}
            {{ soaringMessagesMatchVid.title.slice(17,34) }}
          </h5>
        </template>
        <template v-else-if="famousMessagesMatchVid">
          <iframe
            id="sub"
            :src="famousMessagesMatchVid.embedded_url"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            referrerpolicy="always"
            class="youtube"
            width="500"
            height="298"
          />
          <h5 class="pb-16 text-gray-300 text-lg">
            {{ famousMessagesMatchVid.title.slice(0,17) }}
            {{ famousMessagesMatchVid.title.slice(17,34) }}
          </h5>
        </template>
        <template v-else-if="actressMessagesMatchVid">
          <iframe
            id="sub"
            :src="actressMessagesMatchVid.embedded_url"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            referrerpolicy="always"
            class="youtube"
            width="500"
            height="298"
          />
          <h5 class="pb-16 text-gray-300 text-lg">
            {{ actressMessagesMatchVid.title.slice(0,17) }}
            {{ actressMessagesMatchVid.title.slice(17,34) }}
          </h5>
        </template>
        <template v-else-if="genreMessagesMatchVid">
          <iframe
            id="sub"
            :src="genreMessagesMatchVid.embedded_url"
            frameborder="0"
            scrolling="no"
            allowfullscreen
            referrerpolicy="always"
            class="youtube"
            width="500"
            height="298"
          />
          <h5 class="pb-16 text-gray-300 text-lg">
            {{ genreMessagesMatchVid.title.slice(0,17) }}
            {{ genreMessagesMatchVid.title.slice(17,34) }}
          </h5>
        </template> -->
        <template v-else>
          <client-only>
            <i class="material-icons text-gray-500">error</i>
            <h5 class="text-gray-500 text-lg">
              &nbsp;キーワードにあてはまる結果はありません
            </h5>
          </client-only>
        </template>
      </div>
      <!-- 表示させる画像の順番を降順にする -->
      <div class="flex flex-wrap justify-center">
        <div v-for="data in getPaginationItems" :key="data.vid" class="bg-black md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8">
          <nuxt-link :to="{ path: data.vid }">
            <div class="relative">
              <!-- <video
                :poster="data.preview_url"
                :src="data.preview_video_url"
                type="video/mp4"
                alt="サムネイル"
                muted
                loop
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
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h6 class="text-gray-500 px-1 text-sm">
                0%
              </h6>
            </template>
            <template v-else>
              <i class="material-icons text-gray-500 text-xs">thumb_up</i>
              <h6 class="text-gray-500 px-1 text-sm">
                {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
              </h6>
            </template>
          </div>
          <div class="flex flex-row my-2 mb-6">
            <div v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 0" />
            <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 1">
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
            </template>
            <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 2">
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                <!-- {{ keywords[0][1] }} -->
              </div>
            </template>
            <template v-else>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                <!-- {{ keywords[0][0] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                <!-- {{ keywords[0][1] }} -->
              </div>
              <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

// const sub = document.getElementById('sub')
// function func1 () {
//   // ? contentWindow.document でiframe内の要素にアクセス
//   const item = sub.contentWindow.document.getElementById('player_3x2_close')
//   // ? 削除するクラス名
//   item.classList.remove('glyphicon glyphicon-remove')
//   // ? 追加するクラス名
//   item.classList.add('sample')
// }
// func1()

function youtubeDefer () {
  const iframes = document.querySelectorAll('.youtube')
  iframes.forEach(function (iframe) {
    if (iframe.getAttribute('src')) {
      iframe.setAttribute('src', iframe.getAttribute('src'))
    }
  })
}

if (process.client) {
  window.addEventListener('load', youtubeDefer)
}

export default {
  // ? layout: 'custom',
  components: {
  },
  asyncData ({ store }) {
    store.dispatch('search/getSearchItems')
  },
  data () {
    return {
      id: this.$route.params.id,
      // ? 1ページに表示するアイテム数
      parPage: 20,
      // ? 現在のページ番号
      currentPage: 1
    }
  },
  computed: {
    ...mapState('search', ['message', 'messages', 'keywords']),
    // ? 現在ページのアイテムを返す
    getPaginationItems () {
      const current = this.currentPage * this.parPage
      const start = current - this.parPage
      return this.messages.slice(start, current).sort(function() {return Math.random()-.5;})
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount () {
      return Math.ceil(this.messages.length / this.parPage)
    },
    messagesMatchVid () {
      // console.log(this.$store.getters['search/messages'])
      return this.$store.getters['search/messages'].find(value => value.vid === this.id)
    }
    // soaringMessagesMatchVid () {
    //   return this.$store.getters.soaringMessages.find(value => value.vid === this.id)
    //   console.log(this.$store.getters.soaringMessages)
    // },
    // famousMessagesMatchVid () {
    //   return this.$store.getters.famousMessages.find(value => value.vid === this.id)
    //   console.log(this.$store.getters.famousMessages)
    // },
    // actressMessagesMatchVid () {
    //   return this.$store.getters.actressMessages.find(value => value.vid === this.id)
    //   console.log(this.$store.getters.actressMessages)
    // },
    // genreMessagesMatchVid () {
    //   return this.$store.getters.genreMessages.find(value => value.vid === this.id)
    //   console.log(this.$store.getters.genreMessages)
    // }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener('beforeunload', this.changeForm)
    }
    // this.$nextTick(() => this.$refs.textInput.focus())
  },
  destroyed () {
    window.removeEventListener('beforeunload', this.changeForm)
  },
  methods: {
    // ページネーションをクリック時に、currentPage にページ番号を設定
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
#player_3x2_cotainer_inner {
  display: none;
}

/* @media screen and (max-width: 768px) {
  img {
    width: 375px;
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
}

img {
  color: white;
}

.material-icons {
  font-size: 18px;
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
} */
</style>
