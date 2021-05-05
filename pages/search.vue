<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <div class="bg-gray-800 fixed top-0 z-20" role="search">
        <div
          class="bg-gray-700 flex items-center shadow-xl rounded-lg m-2"
        >
          <div
            class="bg-gray-700 text-gray-400 focus:outline-one w-12 h-12 flex items-center justify-center"
          >
            <i class="material-icons">search</i>
          </div>
          <input
            ref="focusInput"
            v-model="computedGetState"
            class="bg-gray-700 py-2 text-gray-200 placeholder-gray-400 leading-tight focus:outline-none rounded-lg"
            style="width: 311px"
            type="search"
            placeholder="Porngle を検索"
            inputmode="search"
            role="search"
            @keydown.enter="search"
          />
        </div>
      </div>
      <client-only>
        <div class="flex flex-wrap justify-center">
          <div class="pt-10" style="width: 375px">
            <div class="text-gray-200 text-sm mt-3">
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('ナンパ')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">ナンパ</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('お姉さん')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">お姉さん</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('ハーフ')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">ハーフ</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('女子高生')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">女子高生</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('10代')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">10代</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('カップル')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">カップル</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('デビュー')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">デビュー</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('美熟女')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">美熟女</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('オナニー')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">オナニー</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('潮吹き')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">潮吹き</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('盗撮')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">盗撮</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('アニメ')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">アニメ</p>
              </div>
              <div
                class="flex flex-row hover:bg-gray-700 border-t border-gray-700 py-2"
                @click="changeFormList('SM')"
              >
                <i class="material-icons pl-4">search</i>
                <p class="pl-4">SM</p>
              </div>
            </div>
          </div>
        </div>
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
            <li>
              <nuxt-link
                to="/mypage"
                aria-label="マイページへ進む"
                @click.native="setExploreForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">account_circle</i>
                  <p class="icon-text" style="font-size: 10px">
                    マイページ
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
import Meta from '~/assets/mixins/meta'

export type DataType = {
  meta: object
}

export default Vue.extend({
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
    }
  },
  computed: {
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
  mounted(): void {
    this.$nextTick((): void => {
      this.clearForm()
    })
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
          window.scrollTo(0, 0)
        })
      }
    },
    sendRequest(): void {
      this.$router.push(
        `/result?search_query=${this.$accessor.search.message}`
      )
      this.$accessor.search.getSearchFirstItems()
      this.$accessor.search.getSearchSecondItems()
      this.$accessor.search.getSearchThirdItems()
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
    setExploreForm(): void {
      if (this.$accessor.search.message !== 'AV女優') {
        this.$accessor.search.setExploreMessage()
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
    // @ts-ignore
    changeFormList(list): void {
      this.$router.push(`/result?search_query=${list}`)
      this.$accessor.search.changeKeyword(list)
      this.$accessor.search.getSearchFirstItems()
      this.$accessor.search.getSearchSecondItems()
      this.$accessor.search.getSearchThirdItems()
      console.log(list)
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
