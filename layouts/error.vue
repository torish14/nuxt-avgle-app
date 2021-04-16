<template>
  <section>
    <div v-if="$device.isDesktop">
      <div class="flex flex-col flex-shrink-0 items-center pt-12">
        <template v-if="error.statusCode === 404">
          <img
            src="~/assets/Page_not_found.jpeg"
            alt="残念ながら、お探しのページが見つかりませんでした。"
            width="400"
            height="393"
          />
          <p class="text-gray-200 text-base">
            &nbsp;お探しのページが見つかりませんでした。
          </p>
        </template>
        <template v-else>
          <img
            src="~/assets/Error.jpeg"
            alt="申し訳ございません。エラーが発生しました。"
            width="400"
            height="393"
          />
          <p class="text-gray-200 text-sm">
            <!-- {{ error.statusCode }} -->
            <!-- {{ error.message }} -->
            &nbsp;エラーが発生しました。
          </p>
        </template>
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
    </div>
    <div v-else>
      <div class="flex flex-col flex-shrink-0 items-center pt-12">
        <template v-if="error.statusCode === 404">
          <img
            src="~/assets/Page_not_found.jpeg"
            alt="残念ながら、お探しのページが見つかりませんでした。"
            width="250"
            height="223"
          />
          <p class="text-gray-200 text-base">
            &nbsp;お探しのページが見つかりませんでした。
          </p>
        </template>
        <template v-else>
          <img
            src="~/assets/Error.jpeg"
            alt="申し訳ございません。エラーが発生しました。"
            width="250"
            height="223"
          />
          <p class="text-gray-200 text-sm">
            <!-- {{ error.statusCode }} -->
            <!-- {{ error.message }} -->
            &nbsp;エラーが発生しました。
          </p>
        </template>
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
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Meta from '~/assets/mixins/meta'

export type DataType = {
  meta: string
}

export default Vue.extend({
  mixins: [Meta],
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      meta: {
        title: 'エラー',
        description: 'エラーページです。',
        type: 'website',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  methods: {
    setJapaneseForm(): void {
      this.$accessor.search.setJapaneseMessage()
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>

<style></style>
