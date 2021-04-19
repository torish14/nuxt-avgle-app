<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop" id="header" class="bg-gray-800">
      <client-only>
        <header
          class="flex items-center justify-between flex-wrap p-6"
        >
          <div
            class="flex items-center flex-shrink-0 text-gray-100 mr-6"
            role="banner"
          >
            <h1>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                @click.native="
                  setJapaneseForm()
                  refresh()
                "
              >
                <img
                  src="~/assets/Porngle.jpeg"
                  alt="Porngle"
                  width="160"
                  height="60"
                  class="w-40"
                  style="height: 60px"
                />
              </nuxt-link>
            </h1>
          </div>
          <!-- <div
            class="w-full block flex-grow ml-24 lg:flex lg:items-center lg:w-auto"
          >
            <div class="text-sm lg:flex-grow">
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-200 mr-10"
              >
                ホーム
              </nuxt-link>
              <nuxt-link
                to="/suggest"
                aria-label="探求へ進む"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-200 mr-10"
              >
                探求
              </nuxt-link>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-200 mr-10"
              >
                女優を探す
              </a>
              <a
                href="#responsive-header"
                class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-gray-200"
              >
                カテゴリー
              </a>
            </div>
          </div> -->
          <div
            class="bg-gray-700 flex items-center rounded-full shadow-xl w-1/4 mr-20"
            role="search"
          >
            <input
              v-model="computedGetState"
              class="bg-gray-700 rounded-l-full w-full py-4 px-6 text-gray-200 placeholder-gray-400 focus:placeholder-gray-200 leading-tight focus:outline-none"
              type="search"
              autofocus
              placeholder="Porngle を検索"
              @keydown.enter="search"
            />

            <div class="p-4">
              <button
                class="bg-purple-700 text-gray-200 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center"
                type="submit"
                @click="sendRequest"
              >
                <i class="material-icons">search</i>
              </button>
            </div>
          </div>
        </header>
      </client-only>
    </div>
    <!-- モバイル -->
    <div
      v-else
      id="header"
      class="bg-gray-800"
      style="padding-bottom: 56px"
    >
      <header v-show="isShow" role="banner">
        <div class="flex bg-gray-800 fixed top-0 w-full z-20">
          <div
            class="flex items-center flex-shrink-0 text-gray-100 ml-2 py-2"
          >
            <nuxt-link
              to="/"
              aria-label="ホームへ戻る"
              @click.native="
                setJapaneseForm()
                refresh()
              "
            >
              <img
                src="~/assets/Porngle.jpeg"
                alt="Porngle"
                width="96"
                height="40"
                class="w-24"
                style="height: 40px"
              />
            </nuxt-link>
          </div>
          <!-- <div class="w-full pl-2"></div> -->
          <!-- <div class="flex items-center px-3 py-2">
            <template v-if="getUsers.length === 0">
              <div class="text-gray-200">
                <nuxt-link to="/account" aria-label="アカウントに進む">
                  <i class="material-icons">
                    account_circle
                  </i>
                </nuxt-link>
              </div>
            </template>
            <template v-else>
              <nuxt-link to="/account" aria-label="アカウントに進む">
                <div v-for="(data, index) in getUsers" :key="index">
                  <img
                    :src="data.photoURL"
                    alt="プロフィール画像"
                    width="24"
                    height="24"
                    class="rounded-full"
                  />
                </div>
              </nuxt-link>
            </template>
          </div> -->
        </div>
      </header>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export type DataType = {
  scrollY: number
  isShow: Boolean
  selected: string
}

export default Vue.extend({
  data(): DataType {
    return {
      scrollY: 0,
      isShow: true,
      selected: '',
    }
  },
  computed: {
    ...mapGetters('auth', ['getUsers']),
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
    // 上にスクロールした時に表示
    scrollY(newValue, oldValue) {
      this.$set(this, 'isShow', newValue < oldValue || newValue <= 1)
      // this.$set(this, 'isShow', newValue < oldValue || newValue <= 1 || newValue >= 5000)
      // console.log('新しい',newValue)
      // console.log('古い',oldValue)
    },
  },
  mounted(): void {
    // スクロールイベントを取得
    // @ts-ignore
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('load', () => {
      // @ts-ignore
      this.onScroll()
    })
    this.$fire.auth.onAuthStateChanged((user): void => {
      if (user) {
        this.$accessor.auth.fetchUsers()
      }
    })
    // this.$nextTick(() => this.onScroll())
  },
  // @ts-ignore
  beforeDestroyed() {
    // @ts-ignore
    window.removeEventListener('scroll', this.onScroll)
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
        this.$nextTick(() => {
          // e.target.blur()
          window.scrollTo(0, 0)
        })
      }
    },
    sendRequest(): void {
      this.$accessor.search.getJapaneseItems()
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
      this.$router.push('/')
    },
    setJapaneseForm(): void {
      this.$accessor.search.setJapaneseMessage()
      this.$accessor.search.messages
        // @ts-ignore
        .sort(function () {
          return Math.random() - 0.5
        })
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
    // スクロール値の取得
    onScroll(): void {
      this.$set(this, 'scrollY', window.pageYOffset)
    },
    items(): string[] {
      return [
        'デビュー',
        '10代',
        'エロアニメ',
        '中出し',
        'ナンパ',
        'オナニー',
        '痴漢',
        'カップル',
        'SM',
      ]
    },
  },
})
</script>

<style>
input[type='search']::-webkit-search-cancel-button {
  /* Remove default */
  -webkit-appearance: none;

  /* Now your own custom styles */
  height: 14px;
  width: 28px;
  display: block;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
  /* setup all the background tweaks for our custom icon */
  background-repeat: no-repeat;

  /* icon size */
  background-size: 16px;
  /* margin: 0 -14px 0 0px; */
}
</style>
