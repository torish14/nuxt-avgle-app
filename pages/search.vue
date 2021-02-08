<!-- <template>
  <div class="main">
    <nav>
      <div class="p-6">
        <div class="bg-gray-800 flex items-center rounded-full shadow-xl">
          <div class="bg-gray-800 text-gray-500 rounded-full focus:outline-none w-12 h-12 flex items-center justify-center">
            <i class="material-icons">search</i>
          </div>
          <input
            ref="textInput"
            v-model="computedGetState"
            class="bg-gray-800 rounded-r-full w-full py-4 text-gray-500 leading-tight focus:outline-none"
            type="search"
            autofocus
            placeholder="検索"
            inputmode="search"
            @keydown.enter="search"
          >
        </div>
      </div>
    </nav>
    <div class="flex flex-wrap bg-black justify-center">
      <template v-if="show">
        <template v-if="messages.length === 0 && !isLoading">
          <i class="material-icons text-gray-500">error</i>
          <h5 class="text-gray-500 text-lg">
            &nbsp;キーワードにあてはまる結果はありません
          </h5>
        </template>
        <template v-else>
          <div v-for="data in getPaginationItems" :key="data.vid" class="bg-black md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8">
            <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }">
              <div class="relative">
                <img
                  :src="data.preview_url"
                  alt="サムネイル"
                  class="z-auto relative text-white"
                  referrerpolicy="no-referrer"
                  crossorigin
                >
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
              <template v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 0" />
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 1">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                </div>
              </template>
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン').length === 2">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                </div>
              </template>
              <template v-else>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600 keyword">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[1] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== message && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン')[2] }}
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
            :next-text="'次へ'"
            :next-class="'page-item'"
            :next-link-class="'page-item'"
            :container-class="'pagination'"
            :page-class="'page-item'"
            :page-link-class="'page-link'"
            class="sm:pt-4 md:pt-6 lg:pt-8 xl:pt-8"
          />
        </template>
      </template>
    </div>
    <Loading
      :active.sync="isLoading"
      color="gray"
      background-color="black"
      :height="40"
      :width="40"
      :opacity="1"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vue from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.component(Loading)

export default {
  layout: 'custom',
  components: {
    Loading
  },
  asyncData ({ store }) {
    store.dispatch('search/getSearchItems')
  },
  data () {
    return {
      show: false,
      parPage: 20,
      currentPage: 1
    }
  },
  computed: {
    computedGetState: {
      get () {
        return this.$store.getters['search/message']
      },
      set (val) {
        this.$store.dispatch('search/commitMessage', val)
      }
    },
    ...mapGetters('search', ['message', 'messages', 'keywords', 'isLoading']),
    getPaginationItems () {
      const current = this.currentPage * this.parPage
      const start = current - this.parPage
      return this.messages.slice(start, current)
    },
    getPageCount () {
      return Math.ceil(this.messages.length / this.parPage)
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener('beforeunload', this.changeForm)
    }
    this.$nextTick(() => this.$refs.textInput.focus())
  },
  destory () {
    window.removeEventListener('beforeunload', this.changeForm)
  },
  methods: {
    search (e) {
      if (e.keyCode !== 13) { return }
      this.sendRequest()
      this.show = 'true'
      setTimeout(() => {
        e.target.blur()
      }, 1);
    },
    sendRequest () {
      this.$store.dispatch('search/getSearchItems')
    },
    changeForm () {
      this.$store.commit('search/changeMessage')
    },
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
    }
  }
}
</script> -->
