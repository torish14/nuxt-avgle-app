<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop" class="bg-gray-800">
      <footer class="text-gray-400" role="contentinfo">
        <div
          class="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
        >
          <a
            href="https://porngle.love"
            aria-label="ホームへ戻る"
            @click="setJapaneseForm"
          >
            <img
              src="~/assets/Porngle ロゴ.jpeg"
              alt="Porngle"
              class="w-40"
            />
          </a>
          <p
            class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            &copy; 2020 - Porngle
          </p>
          <p
            class="text-xs text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            porngle.love@gmail.com
          </p>
        </div>
      </footer>
    </div>
    <!-- モバイル -->
    <div v-else class="bg-gray-800">
      <footer class="text-gray-500">
        <nav role="navigation">
          <ul
            class="flex justify-around py-1 fixed z-10 bottom-0 bg-gray-800 w-full leading-4"
          >
            <li>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                @click.native="
                  refresh()
                  setJapaneseForm()
                "
              >
                <div class="text-center align-middle">
                  <i class="material-icons">home</i>
                  <p class="icon-text" style="font-size: 10px">
                    ホーム
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/suggest"
                aria-label="オススメへ進む"
                @click.native="
                  refresh()
                  setSuggestForm()
                "
              >
                <div class="text-center align-middle">
                  <i class="material-icons">live_tv</i>
                  <p class="icon-text" style="font-size: 10px">
                    オススメ
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/search"
                aria-label="検索へ進む"
                @click.native="
                  refresh()
                  clearForm()
                "
              >
                <div class="text-center align-middle">
                  <i class="material-icons">search</i>
                  <p class="icon-text" style="font-size: 10px">
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

export type DataType = {
  activetab: number
}

export default Vue.extend({
  data(): DataType {
    return {
      activetab: 1
    }
  },
  methods: {
    setJapaneseForm (): void {
      if (this.$accessor.search.message !== '日本人') {
        this.$accessor.search.setJapaneseMessage()
        this.$accessor.search.messages
        // @ts-ignore
        .sort(
          function() { return Math.random()-.5 }
        )
      }
    },
    setSuggestForm (): void {
      if (this.$accessor.search.message !== 'AV女優') {
        this.$accessor.search.setSuggestMessage()
        this.$accessor.search.suggestMessages
        // @ts-ignore
        .sort(
          function() { return Math.random()-.5 }
        )
      }
    },
    clearForm (): void {
      this.$accessor.search.clearMessage()
    },
    focusSearch (): void {
      // @ts-ignore
      // this.$refs.textInput.focus()
    },
    refresh (): void {
      this.$nuxt.refresh()
    }
  },
})
</script>

<style>
.nuxt-link-exact-active {
  color: white;
}
</style>
