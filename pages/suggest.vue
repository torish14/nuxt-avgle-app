<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20 container">
      <main class="flex flex-wrap justify-center" style="width: 375px;">
        <template v-if="suggestMessages.length === 0 && errorMessage">
          <client-only>
            <div class="flex pt-2">
              <i class="material-icons text-gray-500">search</i>
              <h5 class="text-gray-500 text-sm">
                &nbsp;一致する検索結果はありません。
              </h5>
            </div>
          </client-only>
        </template>
        <div v-else-if="$fetchState.pending">
          <client-only>
            <Skeleton />
            <Skeleton />
          </client-only>
        </div>
        <template v-else-if="$fetchState.error">
          <i class="material-icons text-gray-500">error</i>
          <h5 class="text-gray-500 text-sm">
            &nbsp;エラーが発生しました。
          </h5>
        </template>
        <template v-else>
          <div v-for="data in suggestMessages" :key="data.vid">
            <vue-lazy-component>
              <nuxt-link :to="{ path: 'embedded_url' + '/' + data.vid }" aria-label="動画埋め込みページへ遷移">
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-white"
                    referrerpolicy="no-referrer"
                    crossorigin
                  >
                  <h5 class="text-white z-10 absolute right-0 bottom-0 bg-black rounded-sm px-1 m-1" style="font-size: 10px;">
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <p class="text-white text-sm hover:text-purple-500 break-all pt-2 px-2" style="width: 375px;">
                  {{ data.title.slice(0,50) }}
                </p>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h6 class="text-gray-500 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h6>
                </template>
                <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
                  <h6 class="text-gray-500 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h6>
                </template>
                <template v-else>
                  <h6 class="text-gray-500 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h6>
                </template>
                <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
                  <i class="material-icons text-gray-500" style="font-size: 16px;">thumb_up</i>
                  <h6 class="text-gray-500 px-1 text-xs">
                    0%
                  </h6>
                </template>
                <template v-else>
                  <i class="material-icons text-gray-500" style="font-size: 16px;">thumb_up</i>
                  <h6 class="text-gray-500 px-1 text-xs">
                    {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
                  </h6>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6">
                <div v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7).length === 0" />
                <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7).length === 1">
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" style="margin-left: 8px;" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0] }}
                  </div>
                </template>
                <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7).length === 2">
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" style="margin-left: 8px;" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0] }}
                  </div>
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[1])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[1] }}
                  </div>
                </template>
                <template v-else>
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" style="margin-left: 8px;" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[0] }}
                  </div>
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[1])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[1] }}
                  </div>
                  <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:bg-gray-700 cursor-pointer" @click="changeFormSuggestKeyword(data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[2])">
                    {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足' && item !== 'マッサージ師' && item !== '素人' && item !== '巨乳' && item !== '美人' && item.length < 7)[2] }}
                  </div>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
          <!-- <InfiniteLoading
            ref="infiniteLoading"
            spinner="spiral"
            @infinite="infiniteHandler"
          >
            <div slot="no-more">
              これ以上結果はありません
            </div>
          </InfiniteLoading> -->
        </template>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Meta from '~/assets/mixins/meta.js'
// import { VueLoading } from 'vue-loading-template'
// import Skeleton from '~/components/Skeleton.vue'

export type DataType = {
  parPage: number,
  meta: object
}

export default Vue.extend({
  components: {
    // @ts-ignore
    // VueLoading,
    // @ts-ignore
    Skeleton: () => import('~/components/Skeleton')
  },
  mixins: [Meta],
  scrollToTop: true,
  data (): DataType {
    return {
      // ? 1ページに表示するアイテム数
      parPage: 20,
      meta: {
      title: 'オススメ',
      description: 'オススメページです。',
      type: 'website',
      url: 'https://porngle.love/suggest',
      image: 'https://porngle.love/assets/PG ロゴ.jpeg',
      robots: 'noindex'
    }
    }
  },
  fetch () {
    // @ts-ignore
    if(this.$accessor.search.suggestMessages.length > 0) {
      return
    }
    this.$accessor.search.setSuggestMessage()
    this.$accessor.search.getSuggestItems()
  },
  computed: {
    ...mapGetters('search', ['message', 'suggestMessages', 'errorMessage', 'firstSkeleton']),
    // @ts-ignore
    toHms () {
      // @ts-ignore
      return function(t) {
        let hms = ''
        const h = Math.ceil(t / 3600 | 0)
        const m = Math.ceil(t % 3600 / 60 | 0)
        const s = Math.ceil(t % 60)

        if (h !== 0) {
          hms = h + ':' + padZero(m) + ':' + padZero(s)
        } else if (m !== 0) {
          hms = m + ':' + padZero(s)
        } else {
          // @ts-ignore
          hms = s
        }
        // @ts-ignore
        return hms

        function padZero (v: number) {
          if (v < 10) {
            return '0' + v
          } else {
            return v
          }
        }
      }
    },
    // ? 現在ページのアイテムを返す
    getPaginationItems (): number {
      // @ts-ignore
      const current = this.$accessor.currentIndexPage * this.parPage
      // @ts-ignore
      const start = current - this.parPage
      return this.suggestMessages.slice(start, current)
      // .sort(
      //   function() { return Math.random()-.5 }
      // )
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount (): number {
      // @ts-ignore
      return Math.ceil(this.suggestMessages.length / this.parPage)
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  activated() {
    // 最後の fetch から30秒以上経っていれば、fetch を呼び出す
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  created() {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.setSuggestForm) // eslint-disable-line
    }
  },
  destroyed() {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setSuggestForm)
  },
  methods: {
    handler () {
      console.log('Now loading')
    },
    // ? ページネーションをクリック時に、currentPage にページ番号を設定
    clickCallback (pageNum: number) {
      // @ts-ignore
      this.$store.state.currentIndexPage = pageNum
      // @ts-ignore
      this.$accessor.setCurrentIndexPage(this.$store.state.currentIndexPage)
      window.scrollTo(0,0)
      this.$router.push({ path: `?page=${this.$accessor.currentIndexPage}` })
      this.$forceUpdate()
    },
    setSuggestForm () {
      this.$accessor.search.setSuggestMessage()
    },
    // infiniteHandler() {
    //   setTimeout(() => {
    //     // @ts-ignore
    //     if (this.parPage < this.suggestMessages.length) {
    //       // @ts-ignore
    //       this.parPage += 20
    //       // @ts-ignore
    //       this.$refs.infiniteLoading.stateChanger.loaded()
    //     } else {
    //       // @ts-ignore
    //       this.$refs.infiniteLoading.stateChanger.complete()
    //     }
    //   }, 400)
    // },
    changeFormSuggestKeyword (keyword: string) {
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSuggestItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0,0)
      console.log(keyword)
    }
  }
})
</script>
