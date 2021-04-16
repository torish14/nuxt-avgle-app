<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop" class="bg-gray-800">
      <footer class="text-gray-400" role="contentinfo">
        <div
          class="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
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
              width="160"
              height="60"
              class="w-40"
            />
          </nuxt-link>
          <p
            class="text-gray-400 text-sm sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            &copy; 2020 - Porngle
          </p>
          <p
            class="text-gray-400 text-xs hover:text-gray-200 cursor-pointer sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            <nuxt-link to="/terms">利用規約</nuxt-link>
          </p>
          <p
            class="text-gray-400 text-xs hover:text-gray-200 cursor-pointer sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            <nuxt-link to="/privacy">プライバシーポリシー</nuxt-link>
          </p>
          <p
            class="text-gray-400 text-xs hover:text-gray-200 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4"
          >
            <a
              href="mailto:porngle.love@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              >porngle.love@gmail.com</a
            >
          </p>
        </div>
      </footer>
    </div>
    <!-- モバイル -->
    <div v-else class="bg-gray-800">
      <footer class="text-gray-500">
        <nav role="navigation">
          <ul
            class="flex justify-around py-1 fixed z-10 bottom-0 bg-gray-800 w-full leading-4 border-t border-gray-600"
          >
            <li>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                @click.native="setJapaneseForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">home</i>
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
                    ホーム
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/suggest"
                aria-label="探求へ進む"
                @click.native="setSuggestForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">gps_fixed</i>
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
                    探求
                  </p>
                </div>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/search"
                aria-label="検索へ進む"
                @click.native="clearForm()"
              >
                <div class="text-center align-middle">
                  <i class="material-icons">search</i>
                  <p
                    class="icon-text underline"
                    style="font-size: 10px"
                  >
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
      activetab: 1,
    }
  },
  methods: {
    setJapaneseForm(): void {
      // if (this.$accessor.search.message !== '日本人') {
      //   this.$accessor.search.setJapaneseMessage()
      // }
      // @ts-ignore
      if (this.$accessor.search.concatRecommend.length > 0) {
        // @ts-ignore
        this.$accessor.search.setConcatMessage()
      } else {
        this.$accessor.search.setJapaneseMessage()
      }
      // this.$accessor.search.getJapaneseItems()
      window.scrollTo(0, 0)
      // this.$accessor.search.messages
      //   // @ts-ignore
      //   .sort(function () {
      //     return Math.random() - 0.5
      //   })
    },
    setSuggestForm(): void {
      if (this.$accessor.search.message !== 'AV女優') {
        this.$accessor.search.setSuggestMessage()
      }
      window.scrollTo(0, 0)
      // this.$accessor.search.suggestMessages
      //   // @ts-ignore
      //   .sort(function () {
      //     return Math.random() - 0.5
      //   })
    },
    clearForm(): void {
      this.$accessor.search.clearMessage()
    },
    focusSearch(): void {
      // @ts-ignore
      // this.$refs.textInput.focus()
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>

<style>
.nuxt-link-exact-active {
  color: #e5e7eb;
}
</style>
