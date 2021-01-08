<template>
  <div id="app" class="bg-black">
    <nav class="flex items-center justify-between flex-wrap p-6 normal-form">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" @click="changeForm">
          <img src="https://avgle.com/images/logo/logo.png" alt="ロゴ" class="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-32 xl:lg-32">
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
      <div class="bg-gray-800 flex items-center rounded-full shadow-xl w-1/4 mr-20 mb-12">
        <input
          v-model="computedGetState"
          class="bg-gray-800 rounded-l-full w-full py-4 px-6 text-gray-500 leading-tight focus:outline-none"
          type="search"
          autofocus
          autocomplete="on"
          list="keywords"
          placeholder="Search"
          @keydown.enter="search"
        >
        <!-- <datalist id="keywords">
        <option value="明日花キララ " />
        <option value="跡美しゅり " />
        <option value="上原亜衣" />
        <option value="小倉由菜" />
        <option value="希崎ジェシカ" />
        <option value="君島みお" />
        <option value="桐嶋りの" />
        <option value="霧島レオナ" />
        <option value="小島みなみ" />
        <option value="紗倉まな" />
        <option value="里美ゆりあ" />
        <option value="白石茉莉奈" />
        <option value="篠田ゆう" />
        <option value="高井ルナ" />
        <option value="高橋しょう子" />
        <option value="冬月かえで" />
        <option value="波多野結衣" />
        <option value="深田えいみ" />
        <option value="三上悠亜" />
        <option value="美乃すずめ" />
        <option value="桃乃木かな" />
        <option value="吉高寧々" />
        <option value="RIO" />
      </datalist> -->

        <div class="p-4">
          <button class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center" @click="sendRequest">
            <i class="material-icons">search</i>
          </button>
        </div>
      </div>
    </nav>
    <!-- Toggle -->
    <!-- <nav class="flex justify-end toggle"> -->
    <nav class="flex justify-between toggle pb-8">
      <div :class="isOpen ? 'hidden' : 'block'" class="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/" @click="changeForm">
          <img src="https://avgle.com/images/logo/logo.png" alt="ロゴ" class="sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-32 xl:lg-32">
        </a>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="w-full">
        <input
          v-model="computedGetState"
          class="bg-gray-800 rounded-full py-4 px-6 mt-2 text-gray-500 leading-tight focus:outline-none w-full"
          type="search"
          autofocus
          autocomplete="on"
          placeholder="Search"
          @keydown.enter="search"
        >
      </div>
      <div class="flex items-center px-4 py-3">
        <div>
          <button
            class="bg-purple-700 text-gray-300 rounded-full p-2 hover:bg-purple-800 focus:outline-none w-12 h-12 flex items-center justify-center"
            @click="isOpen = !isOpen"
          >
            <i class="material-icons">search</i>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      isOpen: false
      //   selected: null,
      //   items: [
      //     '明日花キララ',
      //     '跡美しゅり',
      //     '上原亜衣',
      //     '鳳かなめ',
      //     '小倉由菜',
      //     '希崎ジェシカ',
      //     '君島みお',
      //     '桐嶋りの',
      //     '霧島レオナ',
      //     '小島みなみ',
      //     '紗倉まな',
      //     '里美ゆりあ',
      //     '白石茉莉奈',
      //     '篠田ゆう',
      //     '高井ルナ',
      //     '高橋しょう子',
      //     '冬月かえで',
      //     '波多野結衣',
      //     '深田えいみ',
      //     '三上悠亜',
      //     '美乃すずめ',
      //     '桃乃木かな',
      //     '吉高寧々',
      //     'RIO'
      //   ]
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
    },
    sendRequest () {
      this.$store.dispatch('search/getSearchItems')
      // this.$router.push('/search')
      this.$router.push('/')
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
      this.$store.commit('search/clearMessage')
    }
  }
}
</script>

<style>
@media screen and (max-width: 767px) {
  .normal-form {
    display: none !important;
  }
}

@media screen and (min-width: 768px) {
  .toggle {
    display: none !important;
  }
}
</style>
