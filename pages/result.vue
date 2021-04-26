<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <client-only>
        <main class="flex flex-wrap justify-center">
          <div style="width: 375px">
            <template v-if="filterMessage">
              <client-only>
                <div class="flex flex-col flex-shrink-0 items-center">
                  <img
                    src="~/assets/No_data.jpeg"
                    alt="残念ながら、作品が見つかりませんでした。"
                    width="250"
                    height="223"
                    style="width: 250px; height: 223px"
                  />
                  <p class="text-gray-200 text-base">
                    &nbsp;作品が見つかりませんでした。
                  </p>
                  <!-- prettier-ignore -->
                  <nuxt-link
                    to="/search"
                    aria-label="検索へ進む"
                    class="text-gray-400 text-sm hover:text-purple-500"
                    style="color: #9ca3af"
                    @click.native="setJapaneseForm(); refresh()"
                  >
                    &nbsp;検索ページへ進む
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
              <SearchFirstItems />
              <SearchSecondItems />
              <SearchThirdItems />
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
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
                    ホーム
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/explore"
                aria-label="探求へ進む"
                @click.native="setExploreForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">gps_fixed</i>
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
                    探求
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/search" aria-label="検索へ進む">
                <div class="text-center align-middle">
                  <i class="material-icons">search</i>
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
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
}

export default Vue.extend({
  components: {
    SearchFirstItems: () =>
      // @ts-ignore
      import('~/components/SearchFirstItems'),
    SearchSecondItems: () =>
      // @ts-ignore
      import('~/components/SearchSecondItems'),
    SearchThirdItems: () =>
      // @ts-ignore
      import('~/components/SearchThirdItems'),
  },
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'non-footer' : 'default'),
  scrollToTop: true,
  data(): DataType {
    return {
      meta: {
        title: this.$accessor.search.message,
        description: '検索結果ページです。',
        type: 'website',
        url: 'https://porngle.love/result',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.searchMessagesFirst.length > 0) {
      return
    }
    this.$accessor.search.setSearchMessage()
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
        this.message === '金8天国' ||
        this.message === '援助交際'
      )
    },
  },
  watch: {
    '$route.query': '$fetch',
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
    setSearchForm(): void {
      if (this.$accessor.search.message !== '美少女') {
        this.$accessor.search.setSearchMessage()
      }
      window.scrollTo(0, 0)
    },
    clearForm(): void {
      this.$accessor.search.clearMessage()
    },
    // @ts-ignore
    changeFormList(list): void {
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
