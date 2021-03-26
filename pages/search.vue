<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <div class="bg-gray-800 fixed top-0 z-20" role="search">
        <div
          class="bg-gray-700 flex items-center shadow-xl rounded-lg m-2"
          style="width: 359px"
        >
          <div
            class="bg-gray-700 text-gray-400 focus:outline-one w-12 h-12 flex items-center justify-center"
          >
            <i class="material-icons">search</i>
          </div>
          <input
            ref="focusInput"
            v-model="computedGetState"
            class="bg-gray-700 w-full py-2 text-gray-400 leading-tight focus:outline-none rounded-lg"
            type="search"
            placeholder="検索"
            inputmode="search"
            role="search"
            @keydown.enter="search"
            @focus="focus"
            @blur="blur"
          />
        </div>
      </div>
      <client-only>
        <main class="flex flex-wrap justify-center">
          <div class="pt-10" style="width: 375px">
            <template
              v-if="
                (searchMessages.length === 0 && errorMessage) ||
                message === '無修正' ||
                message === 'Uncensored' ||
                message === 'uncensored' ||
                message === 'PAKO' ||
                message === 'Pako' ||
                message === 'pako' ||
                message === 'ぱこ' ||
                message === 'パコ' ||
                message === 'CARIB' ||
                message === 'Carib' ||
                message === 'carib' ||
                message === 'かりぶ' ||
                message === 'カリブ' ||
                message === 'FC2' ||
                message === 'Fc2' ||
                message === 'fc2' ||
                message === '完全素人' ||
                message === '個人撮影' ||
                message === 'DEEPFAKE' ||
                message === 'DeepFake' ||
                message === 'Deepfake' ||
                message === 'deepfake' ||
                message === 'カリビアンコム' ||
                message === '一本道' ||
                message === 'HEYZO' ||
                message === 'Heyzo' ||
                message === 'heyzo' ||
                message === '東京熱' ||
                message === 'TOKYO-HOT' ||
                message === 'Toyo-Hot' ||
                message === 'Tokyo-hot' ||
                message === 'tokyo-hot' ||
                message === 'AV9898' ||
                message === 'Av9898' ||
                message === 'av9898' ||
                message === 'PORNHUB' ||
                message === 'PornHub' ||
                message === 'Pornhub' ||
                message === 'pornhub' ||
                message === 'エッチな4610' ||
                message === 'エッチな0930' ||
                message === '人妻斬り' ||
                message === 'SM-MIRACLE' ||
                message === 'SM-Miracle' ||
                message === 'SM-miracle' ||
                message === 'sm-miracle' ||
                message === 'のぞきザムライ' ||
                message === '金8天国'
              "
            >
              <client-only>
                <div class="flex justify-center pt-8">
                  <i class="material-icons text-gray-400">search</i>
                  <h5 class="text-gray-400 text-sm">
                    &nbsp;一致する検索結果はありません。
                  </h5>
                </div>
              </client-only>
            </template>
            <!-- <div v-else-if="$fetchState.pending">
              <client-only>
                <div class="flex mt-2">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
              </client-only>
            </div> -->
            <!-- <div v-else-if="firstSkeleton">
              <client-only>
                <div class="flex mt-2">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
                <div class="flex">
                  <SearchSkeletonImg class="ml-4 my-2" />
                  <div class="flex flex-wrap">
                    <SearchSkeletonTitle />
                  </div>
                </div>
              </client-only>
            </div> -->
            <template v-else-if="$fetchState.error">
              <i class="material-icons text-gray-400">error</i>
              <h5 class="text-gray-400 text-sm">
                &nbsp;エラーが発生しました。
              </h5>
            </template>
            <template v-else>
              <div v-show="onFocus">
                <div class="text-gray-400 bg-gray-700 mt-2">
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('ナンパ')"
                  >
                    ナンパ
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('お姉さん')"
                  >
                    お姉さん
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('ハーフ')"
                  >
                    ハーフ
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('3P')"
                  >
                    3P
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('10代')"
                  >
                    10代
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('カップル')"
                  >
                    カップル
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('オナニー')"
                  >
                    オナニー
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('デビュー')"
                  >
                    デビュー
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('潮吹き')"
                  >
                    潮吹き
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('中出し')"
                  >
                    中出し
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('エロアニメ')"
                  >
                    エロアニメ
                  </p>
                  <p
                    class="pl-2 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('SM')"
                  >
                    SM
                  </p>
                </div>
              </div>
              <div v-for="data in getSearchItems" :key="data.vid">
                <div class="flex m-4">
                  <nuxt-link
                    :to="{ path: 'embedded_url' + '/' + data.vid }"
                    aria-label="動画埋め込みページへ遷移"
                    @click.native="getRecommendTitle(data.title)"
                  >
                    <div
                      class="relative"
                      style="width: 160px; height: 90px"
                    >
                      <vue-lazy-component>
                        <img
                          :src="data.preview_url"
                          alt="サムネイル"
                          width="160"
                          height="90"
                          class="z-auto relative text-gray-200"
                          referrerpolicy="no-referrer"
                          crossorigin
                        />
                        <SearchSkeletonImg slot="skeleton" />
                      </vue-lazy-component>
                      <h5
                        class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                        style="font-size: 10px"
                      >
                        {{ toHms(data.duration) }}
                      </h5>
                    </div>
                  </nuxt-link>
                  <div
                    class="ml-2"
                    style="width: 175px; height: 90px"
                  >
                    <nuxt-link
                      :to="{ path: 'embedded_url' + '/' + data.vid }"
                      aria-label="動画埋め込みページへ遷移"
                      @click.native="getRecommendTitle(data.title)"
                    >
                      <!-- <vue-lazy-component> -->
                      <template v-if="data.title.length > 36">
                        <p
                          class="text-gray-200 text-sm hover:text-purple-500"
                        >
                          {{ data.title.slice(0, 36) }}…
                        </p>
                      </template>
                      <template v-else>
                        <p
                          class="text-gray-200 text-sm hover:text-purple-500"
                        >
                          {{ data.title }}
                        </p>
                      </template>
                      <!-- <SearchSkeletonTitle slot="skeleton" /> -->
                      <!-- </vue-lazy-component> -->
                    </nuxt-link>
                    <div class="flex flex-row my-1">
                      <!-- <vue-lazy-component> -->
                      <template v-if="data.viewnumber >= 1000000">
                        <h6 class="text-gray-400 mr-1 text-xs">
                          再生数
                          {{
                            Math.ceil(data.viewnumber / 1000000)
                          }}M・
                        </h6>
                      </template>
                      <template
                        v-else-if="
                          data.viewnumber >= 1000 &&
                          data.viewnumber < 1000000
                        "
                      >
                        <h6 class="text-gray-400 mr-1 text-xs">
                          再生数
                          {{ Math.ceil(data.viewnumber / 1000) }}K・
                        </h6>
                      </template>
                      <template v-else>
                        <h6 class="text-gray-400 mr-1 text-xs">
                          再生数 {{ Math.ceil(data.viewnumber) }}・
                        </h6>
                      </template>
                      <template
                        v-if="
                          Number.isNaN(
                            (data.likes /
                              (data.likes + data.dislikes)) *
                              100
                          )
                        "
                      >
                        <i
                          class="material-icons text-gray-400"
                          style="font-size: 16px"
                          >thumb_up</i
                        >
                        <h6 class="text-gray-400 px-1 text-xs">0%</h6>
                      </template>
                      <template v-else>
                        <i
                          class="material-icons text-gray-400"
                          style="font-size: 16px"
                          >thumb_up</i
                        >
                        <h6 class="text-gray-400 px-1 text-xs">
                          {{
                            Math.ceil(
                              (data.likes /
                                (data.likes + data.dislikes)) *
                                100
                            )
                          }}%
                        </h6>
                      </template>
                      <!-- </vue-lazy-component> -->
                    </div>
                  </div>
                </div>
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
          </div>
        </main>
      </client-only>
      <!-- フッター -->
      <footer class="text-gray-500">
        <nav role="navigation">
          <ul
            class="flex justify-around py-1 fixed z-10 bottom-0 bg-gray-800 w-full leading-4"
          >
            <li>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                @click.native="setJapaneseForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">home</i>
                  <p class="icon-text" style="font-size: 10px">
                    ホーム
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/suggest"
                aria-label="探求へ進む"
                @click.native="setSuggestForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">gps_fixed</i>
                  <p class="icon-text" style="font-size: 10px">
                    探求
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/search"
                aria-label="検索へ進む"
                @click.native="focusSearch()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">search</i>
                  <p class="icon-text" style="font-size: 10px">
                    検索
                  </p>
                </div>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Meta from '~/assets/mixins/meta.js'
// import { VueLoading } from 'vue-loading-template'
// import SearchSkeletonImg from '~/components/SearchSkeletonImg.vue'
// import SearchSkeletonTitle from '~/components/SearchSkeletonTitle.vue'

export type DataType = {
  parPage: number
  meta: object
  onFocus: boolean
}

export default Vue.extend({
  components: {
    // @ts-ignore
    // VueLoading,
    // @ts-ignore
    SearchSkeletonImg: () => import('~/components/SearchSkeletonImg'),
    // // @ts-ignore
    // SearchSkeletonTitle: () =>
    //   // @ts-ignore
    //   import('~/components/SearchSkeletonTitle'),
    // @ts-ignore
    // SearchSkeletonTitle,
    // @ts-ignore
  },
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  scrollToTop: true,
  data(): DataType {
    return {
      // ? 1ページに表示するアイテム数
      parPage: 20,
      meta: {
        title: '検索',
        description: '検索ページです。',
        type: 'website',
        url: 'https://porngle.love/search',
        image: 'https://porngle.love/assets/PG ロゴ.jpeg',
        robots: 'noindex',
      },
      onFocus: false,
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.searchMessages.length > 0) {
      return
    }
    this.$accessor.search.setSearchMessage()
    this.$accessor.search.getSearchItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'searchMessages',
      'errorMessage',
      'firstSkeleton',
    ]),
    computedGetState: {
      get(): string {
        // @ts-ignore
        return this.$accessor.search.message
      },
      set(val): void {
        // @ts-ignore
        this.$accessor.search.commitMessage(val)
      },
    },
    toHms(): (t: any) => string {
      // @ts-ignore
      return function (t) {
        let hms = ''
        const h = Math.ceil((t / 3600) | 0)
        const m = Math.ceil(((t % 3600) / 60) | 0)
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

        function padZero(v: number) {
          if (v < 10) {
            return '0' + v
          } else {
            return v
          }
        }
      }
    },
    getSearchItems(): any {
      return this.searchMessages.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
    // ? 現在ページのアイテムを返す
    getPaginationItems(): number {
      // @ts-ignore
      const current = this.$accessor.currentIndexPage * this.parPage
      // @ts-ignore
      const start = current - this.parPage
      return this.searchMessages
        .slice(start, current)
        .sort(function () {
          return Math.random() - 0.5
        })
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount(): number {
      // @ts-ignore
      return Math.ceil(this.searchMessages.length / this.parPage)
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  mounted(): void {
    this.$nextTick(() => {
      this.clearForm()
      // @ts-ignore
      this.$refs.focusInput.focus()
    })
  },
  activated(): void {
    // 最後の fetch から30秒以上経っていれば、fetch を呼び出す
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  created(): void {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.setSearchForm) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setSearchForm)
  },
  methods: {
    search(e: any): void {
      if (this.$accessor.search.message === '') {
        if (e.keyCode !== 13) {
          return
        }
        console.log('空文字です')
      } else {
        if (e.keyCode !== 13) {
          return
        }
        // @ts-ignore
        this.sendRequest()
        // @ts-ignore
        // this.show = true
        this.$nextTick(() => {
          e.target.blur()
          this.onFocus = false
          window.scrollTo(0, 0)
        })
      }
    },
    sendRequest(): void {
      this.$accessor.search.getSearchItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      // @ts-ignore
      this.$accessor.search.addRecommendMessages(
        this.$accessor.search.message
      )
      // @ts-ignore
      this.$accessor.search.concatRecommendArray(
        this.$store.state.search.recommendKeywords
      )
    },
    handler(): void {
      console.log('Now loading')
    },
    // ? ページネーションをクリック時に、currentPage にページ番号を設定
    clickCallback(pageNum: number): void {
      // @ts-ignore
      this.$store.state.currentIndexPage = pageNum
      // @ts-ignore
      this.$accessor.setCurrentIndexPage(
        this.$store.state.currentIndexPage
      )
      window.scrollTo(0, 0)
      this.$router.push({
        path: `?page=${this.$accessor.currentIndexPage}`,
      })
      this.$forceUpdate()
    },
    setJapaneseForm(): void {
      // if (this.$accessor.search.message !== '日本人') {
      //   this.$accessor.search.setJapaneseMessage()
      // }
      // @ts-ignore
      if (this.$accessor.search.dupConcatRecommend.length > 0) {
        // @ts-ignore
        this.$accessor.search.setDupConcatMessage()
        // @ts-ignore
      } else if (this.$accessor.search.concatRecommend.length > 0) {
        // @ts-ignore
        this.$accessor.search.setConcatMessage()
      } else {
        this.$accessor.search.setJapaneseMessage()
      }
      this.$accessor.search.getJapaneseItems()
      // this.$accessor.search.messages
      //   // @ts-ignore
      //   .sort(function () {
      //     return Math.random() - 0.5
      //   })
    },
    setSuggestForm(): void {
      if (this.$accessor.search.message !== 'AV女優') {
        this.$accessor.search.setSuggestMessage()
      }
      // this.$accessor.search.suggestMessages
      //   // @ts-ignore
      //   .sort(function () {
      //     return Math.random() - 0.5
      //   })
    },
    setSearchForm(): void {
      if (this.$accessor.search.message !== '美少女') {
        this.$accessor.search.setSearchMessage()
      }
      // this.$accessor.search.searchMessages
      //   // @ts-ignore
      //   .sort(function () {
      //     return Math.random() - 0.5
      //   })
    },
    clearForm(): void {
      this.$accessor.search.clearMessage()
    },
    focusSearch(): void {
      this.$nextTick(() => {
        // @ts-ignore
        this.$refs.focusInput.focus()
      })
    },
    focus(): void {
      this.onFocus = true
    },
    blur(): void {
      // this.$nextTick((): void => {
      //   this.onFocus = false
      // })
    },
    // @ts-ignore
    changeFormList(list): void {
      this.$accessor.search.changeKeyword(list)
      this.$accessor.search.getSearchItems()
      this.$nextTick((): void => {
        this.onFocus = false
      })
      console.log(list)
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
    // infiniteHandler() {
    //   setTimeout(() => {
    //     // @ts-ignore
    //     if (this.parPage < this.searchMessages.length) {
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
    getRecommendTitle(title: string): void {
      // @ts-ignore
      this.$accessor.search.addRecommendTitles(title)
      console.log(title)
    },
    changeFormSearchKeyword(keyword: string): void {
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSearchItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0, 0)
      console.log(keyword)
    },
  },
})
</script>

<style>
.nuxt-link-exact-active {
  color: #e5e7eb;
}
</style>
