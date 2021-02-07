<template>
  <div id="header" class="bg-black">
    <nav class="flex items-center justify-between flex-wrap p-6 normal-form">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" @click="changeForm">
          <img
            src="~/assets/Porngle ロゴ.jpeg"
            alt="ロゴ"
            class="w-40"
          >
        </a>
      </div>
      <!-- <div class="block lg:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-white-200 border-teal-400 hover:text-grey hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div> -->
      <!-- ヘッダーメニュー -->
      <!-- <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
            Docs
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-purple-200 hover:text-white">
            Blog
          </a>
        </div>
      </div> -->
      <!-- 検索バー -->
      <client-only>
        <div class="bg-gray-800 flex items-center rounded-full shadow-xl w-1/4 mr-20">
          <input
            v-model="computedGetState"
            class="bg-gray-800 rounded-l-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none"
            type="search"
            autofocus
            placeholder="検索"
            @keydown.enter="search"
          >

          <div class="p-4">
            <button class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center" @click="sendRequest">
              <i class="material-icons">search</i>
            </button>
          </div>
        </div>
      </client-only>
    </nav>
    <!-- Toggle -->
    <!-- <nav class="flex justify-between toggle pb-8"> -->
    <nav class="toggle pb-20">
      <div class="flex justify-between bg-black fixed top-0 w-full z-20 pb-1">
        <div :class="isOpen ? 'hidden' : 'block'" class="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" @click="changeForm">
            <img
              src="~/assets/Porngle ロゴ.jpeg"
              alt="ロゴ"
              class="w-40"
            >
          </a>
        </div>
        <client-only>
          <div :class="isOpen ? 'block' : 'hidden'" class="w-full pl-2">
            <input
              ref="focusInput"
              v-model="computedGetState"
              class="bg-gray-800 rounded-full w-full py-4 px-6 mt-2 ml-0 text-gray-500 leading-tight focus:outline-none"
              type="search"
              autofocus
              placeholder="検索"
              inputmode="search"
              @keydown.enter="search"
            >
          </div>
          <div class="flex items-center px-4 py-3">
            <div>
              <button
                class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center"
                @click="isOpen = !isOpen; focusSearch()"
              >
                <i class="material-icons">search</i>
              </button>
            </div>
          </div>
        </client-only>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      isOpen: false,
      selected: ''
    }
  },
  computed: {
    computedGetState: {
      get () {
        return this.$store.getters['search/message']
      },
      set (val) {
        this.$store.dispatch('search/commitMessage', val)
      }
    }
  },
  methods: {
    search (e) {
      if (e.keyCode !== 13) { return }
      this.sendRequest()
      this.isOpen = !this.isOpen
      setTimeout(() => {
        e.target.blur()
      }, 1)
    },
    sendRequest () {
      this.$store.dispatch('search/getSearchItems')
      // this.$router.push('/')
      // ? 無修正の非表示
      // if (this.$store.state.message === '無修正') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'むしゅうせい') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'ムシュウセイ') {
      //   console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'Uncensored') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'PAKO') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'Pako') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'pako') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'ぱこ') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'パコ') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'CARIB') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'Carib') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'carib') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'かりぶ') {
      //     console.log('無修正は表示できません！')
      // } else if (this.$store.state.message === 'カリブ') {
      //     console.log('無修正は表示できません！')
      // }
    },
    changeForm () {
      this.$store.commit('search/changeMessage')
    },
    focusSearch () {
      this.$store.commit('search/clearMessage')
      setTimeout(() => {
        this.$refs.focusInput.focus()
      }, 1)
    },
    items () {
      return [
        '10代',
        '巨乳',
        'エロアニメ',
        '中出し',
        'ナンパ',
        '素人',
        'オナニー',
        '痴漢',
        'イチャイチャ',
        'SM'
      ]
    }
  }
}
</script>

<style>
@media screen and (max-width: 768px) {
  .normal-form {
    display: none !important;
  }
}

@media screen and (min-width: 769px) {
  .toggle {
    display: none !important;
  }
}

.w-40 {
  height: initial;
  height: 60px;
}

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
