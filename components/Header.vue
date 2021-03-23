<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop" id="header" class="bg-black">
      <client-only>
        <header class="flex items-center justify-between flex-wrap p-6">
          <div class="flex items-center flex-shrink-0 text-white mr-6" role="banner">
            <h1>
              <a href="https://porngle.love" aria-label="ホームへ戻る" @click="setJapaneseForm">
                <img
                  src="~/assets/Porngle ロゴ.jpeg"
                  alt="Porngle"
                  class="w-40"
                  style="height: 60px;"
                >
              </a>
            </h1>
          </div>
          <div class="bg-gray-700 flex items-center rounded-full shadow-xl w-1/4 mr-20" role="search">
            <input
              v-model="computedGetState"
              class="bg-gray-700 rounded-l-full w-full py-4 px-6 text-gray-400 leading-tight focus:outline-none"
              type="search"
              autofocus
              placeholder="検索"
              @keydown.enter="search"
              @focus="focus"
            >

            <div class="p-4">
              <button class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center" @click="sendRequest">
                <i class="material-icons">search</i>
              </button>
            </div>
          </div>
        </header>
      </client-only>
    </div>
    <!-- モバイル -->
    <div v-else id="header" class="bg-black">
      <header v-show="isShow" role="banner">
        <div class="flex bg-black top-0 w-full z-20 pb-1">
          <div :class="isOpen ? 'hidden' : 'block'" class="flex items-center flex-shrink-0 text-white ml-2 py-2">
            <a href="https://porngle.love" aria-label="ホームへ戻る" @click="setJapaneseForm">
              <img
                src="~/assets/Porngle ロゴ.jpeg"
                alt="Porngle"
                class="w-24"
                style="height: 40px;"
              >
            </a>
          </div>
          <!-- <div :class="isOpen ? 'block' : 'hidden'" class="w-full pl-2">
              <input
                ref="focusInput"
                v-model="computedGetState"
                class="bg-gray-700 rounded-full w-full py-4 px-6 mt-2 ml-0 text-gray-400 leading-tight focus:outline-none"
                type="search"
                placeholder="検索"
                inputmode="search"
                @keydown.enter="search"
              >
            </div>
            <div class="flex items-center px-3 py-2">
              <div>
                <button
                  class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center"
                  @click="isOpen = !isOpen; focusSearch()"
                >
                  <i class="material-icons">search</i>
                </button>
              </div>
            </div> -->
        </div>
        <!-- <div>
          <ul class="flex justify-center self-end text-sm text-white">
            <li class="mx-1">童貞</li>
            <li class="mx-1">カップル</li>
            <li class="mx-1">ナンパ</li>
            <li class="mx-1">エロアニメ</li>
            <li class="mx-1">デビュー</li>
          </ul>
        </div> -->
      </header>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export type DataType = {
  isOpen: Boolean,
  scrollY: number,
  isShow: Boolean,
  selected: string
}

export default Vue.extend({
  data (): DataType {
    return {
      isOpen: false,
      scrollY: 0,
      isShow: true,
      selected: ''
    }
  },
  computed: {
    computedGetState: {
      get (): string {
        // @ts-ignore
        return this.$accessor.search.message
      },
      set (val): void {
        // @ts-ignore
        this.$accessor.search.commitMessage(val)
      }
    }
  },
  // watch: {
  //   // 上にスクロールした時に表示
  //   scrollY (newValue, oldValue) {
  //     this.$set(this, 'isShow', newValue < oldValue || newValue <= 1)
  //     // this.$set(this, 'isShow', newValue < oldValue || newValue <= 1 || newValue >= 5000)
  //     // console.log('新しい',newValue)
  //     // console.log('古い',oldValue)
  //   }
  // },
  // mounted () {
  //   // スクロールイベントを取得
  //   // @ts-ignore
  //   window.addEventListener('scroll', this.onScroll)
  //   window.addEventListener('load', () => {
  //     // @ts-ignore
  //     this.onScroll()
  //   })
  //   // this.$nextTick(() => this.onScroll())
  // },
  // // @ts-ignore
  // beforeDestroyed () {
  //   // @ts-ignore
  //   window.removeEventListener('scroll', this.onScroll)
  // },
  methods: {
    search (e: any): void {
      if (this.$accessor.search.message === '') {
        if (e.keyCode !== 13) { return }
        console.log('空文字です')
      } else {
        if (e.keyCode !== 13) { return }
        // @ts-ignore
        this.sendRequest()
        // @ts-ignore
        // this.isOpen = !this.isOpen
        this.$nextTick(() => {
          // e.target.blur()
          window.scrollTo(0,0)
        })
      }
    },
    sendRequest (): void {
      this.$accessor.search.getJapaneseItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      this.$router.push('/')
    },
    setJapaneseForm (): void {
      this.$accessor.search.setJapaneseMessage()
    },
    focus () {
      // this.$accessor.search.clearMessage()
    },
    // focusSearch () {
    //   this.$accessor.search.clearMessage()
    //   this.$nextTick(() => {
    //     // ? https://github.com/rigor789/vue-scrollto
    //     this.$scrollTo(
    //       '#header',
    //       { duration: 500 },
    //       { easing: 'ease-out' },
    //       // @ts-ignore
    //       { offset: -60 }
    //     )
    //     // @ts-ignore
    //     this.$refs.focusInput.focus()
    //   })
    //   // setTimeout(() => {
    //   //   this.$refs.focusInput.focus()
    //   // }, 1)
    // },
    // スクロール値の取得
    onScroll (): void {
      this.$set(this, 'scrollY', window.pageYOffset)
    },
    items (): string[] {
      return [
        'デビュー',
        '10代',
        'エロアニメ',
        '中出し',
        'ナンパ',
        'オナニー',
        '痴漢',
        'カップル',
        'SM'
      ]
    }
  }
})
</script>

<style>
input[type="search"]::-webkit-search-cancel-button {

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
