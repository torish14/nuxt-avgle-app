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
            class="bg-gray-700 text-gray-500 focus:outline-one w-12 h-12 flex items-center justify-center"
          >
            <i class="material-icons">search</i>
          </div>
          <input
            ref="focusInput"
            v-model="computedGetState"
            class="bg-gray-700 w-full py-2 text-gray-400 placeholder-gray-500 focus:placeholder-gray-400 leading-tight focus:outline-none rounded-lg"
            type="search"
            placeholder="Porngle を検索"
            inputmode="search"
            role="search"
            @keydown.enter="search"
            @focus="focus"
          />
        </div>
      </div>
      <client-only>
        <main class="flex flex-wrap justify-center">
          <div class="pt-10" style="width: 375px">
            <template v-if="filterMessage">
              <client-only>
                <div
                  class="flex flex-col flex-shrink-0 items-center pt-11"
                >
                  <p class="text-gray-200 text-base">
                    &nbsp;作品が見つかりませんでした。
                  </p>
                  <!-- prettier-ignore -->
                  <nuxt-link
                    to="/"
                    aria-label="ホームへ戻る"
                    class="text-gray-400 text-sm hover:text-purple-500"
                    @click.native="setJapaneseForm(); refresh()"
                  >
                    &nbsp;トップページに戻る
                  </nuxt-link>
                </div>
              </client-only>
            </template>
            <template v-else-if="$fetchState.error">
              <div
                class="flex flex-col flex-shrink-0 items-center pt-12"
              >
                <p class="text-gray-200 text-base">
                  &nbsp;エラーが発生しました。
                </p>
                <!-- prettier-ignore -->
                <nuxt-link
                  to="/"
                  aria-label="ホームへ戻る"
                  class="text-gray-400 text-sm hover:text-purple-500"
                  @click.native="setJapaneseForm(); refresh()"
                >
                  &nbsp;トップページに戻る
                </nuxt-link>
              </div>
            </template>
            <template v-else>
              <div v-show="onFocus">
                <div class="text-gray-400 bg-gray-700 mt-3">
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('ナンパ')"
                  >
                    ナンパ
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('お姉さん')"
                  >
                    お姉さん
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('ハーフ')"
                  >
                    ハーフ
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('3P')"
                  >
                    3P
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('10代')"
                  >
                    10代
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('カップル')"
                  >
                    カップル
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('オナニー')"
                  >
                    オナニー
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('デビュー')"
                  >
                    デビュー
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('潮吹き')"
                  >
                    潮吹き
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('中出し')"
                  >
                    中出し
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('エロアニメ')"
                  >
                    エロアニメ
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                  <p
                    class="flex flex-row justify-between pl-4 py-2 hover:bg-gray-600 border border-gray-600"
                    @click="changeFormList('SM')"
                  >
                    SM
                    <i class="material-icons pr-4"
                      >play_circle_outline</i
                    >
                  </p>
                </div>
              </div>
              <div v-show="!onFocus">
                <SearchFirstItems />
                <SearchSecondItems />
                <SearchThirdItems />
              </div>
            </template>
          </div>
        </main>
      </client-only>
      <!-- フッター -->
      <footer class="text-gray-500">
        <nav role="navigation">
          <ul
            class="flex justify-around py-1 fixed z-10 bottom-0 bg-gray-800 w-full leading-4 border-t border-gray-600"
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
import Meta from '~/assets/mixins/meta'

export type DataType = {
  meta: object
  onFocus: boolean
}

export default Vue.extend({
  components: {
    // @ts-ignore
    SearchFirstItems: () => import('~/components/SearchFirstItems'),
    // @ts-ignore
    SearchSecondItems: () => import('~/components/SearchSecondItems'),
    // @ts-ignore
    SearchThirdItems: () => import('~/components/SearchThirdItems'),
  },
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  scrollToTop: true,
  data(): DataType {
    return {
      meta: {
        title: '検索',
        description: '検索ページです。',
        type: 'website',
        url: 'https://porngle.love/search',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
      onFocus: false,
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.searchMessagesFirst.length > 0) {
      return
    }
    this.$accessor.search.setSearchMessage()
    this.$accessor.search.getSearchItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'searchMessagesFirst',
      'errorMessage',
    ]),
    filterMessage(): any {
      return (
        (this.searchMessagesFirst.length === 0 &&
          this.errorMessage) ||
        this.message === '無修正' ||
        this.message === 'Uncensored' ||
        this.message === 'uncensored' ||
        this.message === 'PAKO' ||
        this.message === 'Pako' ||
        this.message === 'pako' ||
        this.message === 'ぱこ' ||
        this.message === 'パコ' ||
        this.message === 'CARIB' ||
        this.message === 'Carib' ||
        this.message === 'carib' ||
        this.message === 'かりぶ' ||
        this.message === 'カリブ' ||
        this.message === 'FC2' ||
        this.message === 'Fc2' ||
        this.message === 'fc2' ||
        this.message === '完全素人' ||
        this.message === '個人撮影' ||
        this.message === 'DEEPFAKE' ||
        this.message === 'DeepFake' ||
        this.message === 'Deepfake' ||
        this.message === 'deepfake' ||
        this.message === 'カリビアンコム' ||
        this.message === '一本道' ||
        this.message === 'HEYZO' ||
        this.message === 'Heyzo' ||
        this.message === 'heyzo' ||
        this.message === '東京熱' ||
        this.message === 'TOKYO-HOT' ||
        this.message === 'Toyo-Hot' ||
        this.message === 'Tokyo-hot' ||
        this.message === 'tokyo-hot' ||
        this.message === 'AV9898' ||
        this.message === 'Av9898' ||
        this.message === 'av9898' ||
        this.message === 'PORNHUB' ||
        this.message === 'PornHub' ||
        this.message === 'Pornhub' ||
        this.message === 'pornhub' ||
        this.message === 'エッチな4610' ||
        this.message === 'エッチな0930' ||
        this.message === '人妻斬り' ||
        this.message === 'SM-MIRACLE' ||
        this.message === 'SM-Miracle' ||
        this.message === 'SM-miracle' ||
        this.message === 'sm-miracle' ||
        this.message === 'のぞきザムライ' ||
        this.message === '金8天国'
      )
    },
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
    setJapaneseForm(): void {
      // @ts-ignore
      if (this.$accessor.search.concatRecommend.length > 0) {
        // @ts-ignore
        this.$accessor.search.setConcatMessage()
      } else {
        this.$accessor.search.setJapaneseMessage()
      }
      window.scrollTo(0, 0)
    },
    setSuggestForm(): void {
      if (this.$accessor.search.message !== 'AV女優') {
        this.$accessor.search.setSuggestMessage()
      }
      window.scrollTo(0, 0)
    },
    setSearchForm(): void {
      if (this.$accessor.search.message !== '美少女') {
        this.$accessor.search.setSearchMessage()
      }
      window.scrollTo(0, 0)
    },
    clearForm(): void {
      this.$accessor.search.clearMessage()
    },
    focusSearch(): void {
      this.$nextTick(() => {
        // @ts-ignore
        this.$refs.focusInput.focus()
        window.scrollTo(0, 0)
      })
    },
    focus(): void {
      this.onFocus = true
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
  },
})
</script>
