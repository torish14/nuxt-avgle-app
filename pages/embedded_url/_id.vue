<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <main role="main">
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
        <template v-else-if="messagesMatchVid">
          <article>
            <div class="relative w-2/3" style="padding-top: 50%">
              <iframe
                id="sub"
                :src="messagesMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="70%"
              />
              <h2
                class="text-gray-200 text-base absolute bottom-0 pl-20 pb-44"
              >
                {{ messagesMatchVid.title }}
              </h2>
              <div class="absolute bottom-0 pl-20 pb-36">
                <h3 class="text-gray-400 text-sm">
                  {{ messagesMatchVid.viewnumber.toLocaleString() }}
                  回視聴
                </h3>
              </div>
              <div class="flex absolute bottom-0 pl-20 pb-16">
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesMatchVid.likes }}
                  </h3>
                </div>
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_down</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesMatchVid.dislikes }}
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <main>
            <DesktopJapaneseItems />
          </main>
        </template>
        <template v-else>
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
      </main>
    </div>
    <!-- モバイル -->
    <div v-else class="pt-1 pb-20">
      <main role="main">
        <template v-if="messagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <h2
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ messagesMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{ messagesMatchVid.viewnumber.toLocaleString() }}
                回視聴
              </h3>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ messagesMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ messagesMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="exploreMessagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="exploreMessagesMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <h2
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ exploreMessagesMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  exploreMessagesMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h3>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ exploreMessagesMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ exploreMessagesMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="searchMessagesFirstMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="searchMessagesFirstMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <h2
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ searchMessagesFirstMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  searchMessagesFirstMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h3>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesFirstMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesFirstMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="searchMessagesSecondMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="searchMessagesSecondMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <h2
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ searchMessagesSecondMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  searchMessagesSecondMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h3>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesSecondMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesSecondMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="searchMessagesThirdMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="searchMessagesThirdMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <h2
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ searchMessagesThirdMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  searchMessagesThirdMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h3>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesThirdMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesThirdMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="filterMessage">
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-12"
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
                style="color: #9ca3af"
                @click.native="setJapaneseForm(); refresh()"
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
        <template v-else>
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-12"
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
                style="color: #9ca3af"
                @click.native="setJapaneseForm(); refresh()"
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
      </main>
      <main class="flex flex-wrap justify-center">
        <template v-if="messagesMatchVid">
          <JapaneseItems />
        </template>
        <template v-else-if="exploreMessagesMatchVid">
          <ExploreItems />
        </template>
        <template v-else-if="searchMessagesFirstMatchVid">
          <EmbeddedSearchFirstItems />
        </template>
        <template v-else-if="searchMessagesSecondMatchVid">
          <EmbeddedSearchSecondItems />
        </template>
        <template v-else-if="searchMessagesThirdMatchVid">
          <EmbeddedSearchThirdItems />
        </template>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Meta from '~/assets/mixins/meta'

function youtubeDefer() {
  const iframes = document.querySelectorAll('.youtube')
  iframes.forEach(function (iframe) {
    if (iframe.getAttribute('src')) {
      iframe.setAttribute('src', iframe.getAttribute('src') || '{}')
    }
  })
}

if (process.client) {
  window.addEventListener('load', youtubeDefer)
}

export type DataType = {
  id: string
  prevRoute: string[]
  meta: object
}

export default Vue.extend({
  components: {
    DesktopJapaneseItems: () =>
      // @ts-ignore
      import('~/components/DesktopJapaneseItems'),
    JapaneseItems: () =>
      // @ts-ignore
      import('~/components/JapaneseItems'),
    ExploreItems: () =>
      // @ts-ignore
      import('~/components/ExploreItems'),
    EmbeddedSearchFirstItems: () =>
      // @ts-ignore
      import('~/components/EmbeddedSearchFirstItems'),
    EmbeddedSearchSecondItems: () =>
      // @ts-ignore
      import('~/components/EmbeddedSearchSecondItems'),
    EmbeddedSearchThirdItems: () =>
      // @ts-ignore
      import('~/components/EmbeddedSearchThirdItems'),
  },
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'non-header' : 'default'),
  scrollToTop: true,
  data(): DataType {
    return {
      id: this.$route.params.id,
      prevRoute: [],
      meta: {
        title: this.$route.query.video_title,
        description: '動画視聴ページです。',
        type: 'website',
        url: 'https://porngle.love/embedded_url/_id',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.messages.length > 0) {
      return
    }
    this.$accessor.search.getSearchFirstItems()
    this.$accessor.search.getSearchSecondItems()
    this.$accessor.search.getSearchThirdItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'messages',
      'exploreMessages',
      'searchMessagesFirst',
      'searchMessagesSecond',
      'searchMessagesThird',
    ]),
    filterMessage(): any {
      return (
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
    messagesMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.messages.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    exploreMessagesMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.exploreMessages.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    searchMessagesFirstMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.searchMessagesFirst.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    searchMessagesSecondMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.searchMessagesSecond.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    searchMessagesThirdMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.searchMessagesThird.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  created(): void {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.setJapaneseForm) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setJapaneseForm)
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
