<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <main
        class="flex flex-wrap justify-center"
        style="width: 375px"
      >
        <template v-if="filterMessage">
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-11"
            >
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
          <div class="flex flex-col flex-shrink-0 items-center pt-12">
            <p class="text-gray-200 text-base">
              &nbsp;エラーが発生しました。
            </p>
            <!-- prettier-ignore -->
            <nuxt-link
              to="/"
              aria-label="ホームへ戻る"
              class="text-gray-400 text-sm hover:text-purple-500"
              style="color: #9ca3af"
              @click.native="setJapaneseForm(); refresh()"
            >
              &nbsp;トップページに戻る
            </nuxt-link>
          </div>
        </template>
        <template v-else>
          <div class="flex justify-center">
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreCuteMessage"
            >
              かわいい系
            </button>
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreBeautifulMessage"
            >
              キレイ系
            </button>
          </div>
          <div class="flex justify-center">
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreLadyMessage"
            >
              お姉様系
            </button>
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreLolitaMessage"
            >
              ロリっ娘系
            </button>
          </div>
          <div class="flex justify-center">
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreTheGirlsMessage"
            >
              素人女性
            </button>
            <button
              class="text-gray-300 text-xs bg-gray-700 rounded-full border border-gray-600 hover:bg-gray-600 py-4 my-1 mx-2"
              style="width: 170px"
              @click="setExploreTheMenMessage"
            >
              一般人男性
            </button>
          </div>
          <ExploreItems />
        </template>
      </main>
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
    ExploreItems: () =>
      // @ts-ignore
      import('~/components/ExploreItems'),
  },
  mixins: [Meta],
  scrollToTop: true,
  data(): DataType {
    return {
      meta: {
        title: '探求',
        description: '探求ページです。',
        type: 'website',
        url: 'https://porngle.love/explore',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.exploreMessages.length > 100) {
      return
    }
    this.$accessor.search.setExploreMessage()
    this.$accessor.search.getExploreItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'exploreMessages',
      'errorMessage',
    ]),
    filterMessage(): any {
      return (
        (this.exploreMessages.length === 0 && this.errorMessage) ||
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
  },
  watch: {
    '$route.query': '$fetch',
  },
  created(): void {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.setExploreForm) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setExploreForm)
  },
  methods: {
    setExploreCuteMessage(): void {
      this.$accessor.search.setExploreCuteMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreBeautifulMessage(): void {
      this.$accessor.search.setExploreBeautifulMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreLadyMessage(): void {
      this.$accessor.search.setExploreLadyMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreLolitaMessage(): void {
      this.$accessor.search.setExploreLolitaMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreTheGirlsMessage(): void {
      this.$accessor.search.setExploreTheGirlsMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreTheMenMessage(): void {
      this.$accessor.search.setExploreTheMenMessage()
      this.$accessor.search.getExploreItems()
    },
    setExploreForm(): void {
      this.$accessor.search.setExploreMessage()
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
