<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <main class="flex flex-wrap justify-center">
        <template v-if="filterMessage">
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-12"
            >
              <img
                src="~/assets/No_data.jpeg"
                alt="残念ながら、作品が見つかりませんでした。"
                width="400"
                height="393"
                style="width: 400px; height: 393px"
              />
              <p class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
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
          <PaginationItems />
          <Paginate
            v-model="computedGetState"
            :page-count="getPageCount"
            :page-range="3"
            :margin-pages="1"
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
      </main>
    </div>
    <!-- モバイル -->
    <div v-else class="pt-1 pb-20">
      <main class="flex flex-wrap justify-center">
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
          <JapaneseItems />
        </template>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export type DataType = {
  parPage: number
  breadcrumbs: object
}

export default Vue.extend({
  components: {
    PaginationItems: () =>
      // @ts-ignore
      import('~/components/PaginationItems'),
    JapaneseItems: () =>
      // @ts-ignore
      import('~/components/JapaneseItems'),
  },
  scrollToTop: true,
  data(): DataType {
    return {
      // ? 1ページに表示するアイテム数
      parPage: 20,
      breadcrumbs: [
        {
          url: 'https://porngle.love',
          text: 'ホーム',
        },
        {
          url: 'https://porngle.love/embedded/_id',
          text: '動画視聴',
        },
        {
          url: 'https://porngle.love/explore',
          text: '探求',
        },
        {
          url: 'https://porngle.love/search',
          text: '検索',
        },
      ],
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.messages.length > 0) {
      return
    }
    // @ts-ignore
    if (this.$accessor.search.concatRecommend.length > 0) {
      // @ts-ignore
      this.$accessor.search.setConcatMessage()
    } else {
      this.$accessor.search.setSearchMessage()
    }
    this.$accessor.search.getJapaneseItems()
  },
  // @ts-ignore
  head(): {
    title: string
    // @ts-ignore
    titleTemplate: null
    // eslint-disable-next-line
  } {
    return {
      title: 'Porngle',
      // @ts-ignore
      titleTemplate: null,
    }
  },
  jsonld(): {
    '@context': 'https://schema.org'
    '@type': 'BreadcrumbList'
    itemListElement: any
    // eslint-disable-next-line
  } {
    // @ts-ignore
    const items = this.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.text,
      },
    }))
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    }
  },
  computed: {
    ...mapGetters('search', ['message', 'messages', 'errorMessage']),
    computedGetState: {
      get(): number {
        // @ts-ignore
        return this.$accessor.currentIndexPage
      },
      set(val): void {
        // @ts-ignore
        this.$accessor.commitCurrentIndexPage(val)
      },
    },
    filterMessage(): any {
      return (
        (this.messages.length === 0 && this.errorMessage) ||
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
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount(): number {
      // @ts-ignore
      return Math.ceil(this.messages.length / this.parPage)
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  mounted(): void {
    // @ts-ignore
    if (this.$accessor.search.messages.length === 0) {
      this.$accessor.search.getJapaneseItems()
    }
    console.log(
      '%cWelcome To Porngle!',
      'color: #6b46c1; font-size: 24px'
    )
  },
  created(): void {
    if (process.browser) {
      // eslint-disable-next-line
      window.addEventListener(
        'beforeunload',
        // @ts-ignore
        this.setJapaneseForm
      ) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener(
      'beforeunload',
      // @ts-ignore
      this.setJapaneseForm
    )
  },
  methods: {
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
      this.$accessor.search.setSearchMessage()
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>

<style>
.page-item {
  color: #8763d7 !important;
  font-weight: 600 !important;
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

.pagination > li:first-child > a,
.pagination > li:first-child > span {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li:last-child > a,
.pagination > li:last-child > span {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.pagination > .disabled > span,
.pagination > .disabled > span:hover,
.pagination > .disabled > span:focus,
.pagination > .disabled > a,
.pagination > .disabled > a:hover,
.pagination > .disabled > a:focus {
  color: #ddd;
  cursor: not-allowed;
  border-color: #6b46c1;
}

.pagination > li > a,
.pagination > li > span {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #ddd;
  text-decoration: none;
  border: 1px solid #6b46c1;
}

.pagination > .active > a,
.pagination > .active > span,
.pagination > .active > a:hover,
.pagination > .active > span:hover,
.pagination > .active > a:focus,
.pagination > .active > span:focus {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #6b46c1;
  border-color: #6b46c1;
}

body {
  background-color: #1f2937;
}
</style>
