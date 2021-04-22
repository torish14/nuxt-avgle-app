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
          <SuggestItems />
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
    SuggestItems: () =>
      // @ts-ignore
      import('~/components/SuggestItems'),
  },
  mixins: [Meta],
  scrollToTop: true,
  data(): DataType {
    return {
      meta: {
        title: '探求',
        description: '探求ページです。',
        type: 'website',
        url: 'https://porngle.love/suggest',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.suggestMessages.length > 100) {
      return
    }
    this.$accessor.search.setSuggestMessage()
    this.$accessor.search.getSuggestItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'suggestMessages',
      'errorMessage',
    ]),
    filterMessage(): any {
      return (
        (this.suggestMessages.length === 0 && this.errorMessage) ||
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
      window.addEventListener('beforeunload', this.setSuggestForm) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setSuggestForm)
  },
  methods: {
    setSuggestForm(): void {
      this.$accessor.search.setSuggestMessage()
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
