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
              <p class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
              </p>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="
                  setJapaneseForm()
                  refresh()
                "
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
        <template v-else-if="messagesFirstMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesFirstMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <p
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-1"
            >
              {{ messagesFirstMatchVid.title }}
            </p>
          </article>
          <main class="flex flex-wrap justify-center">
            <div
              v-for="(data, index) in getJapaneseItemsDesktop"
              :key="`first-${index}`"
              class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
            >
              <vue-lazy-component>
                <nuxt-link
                  :to="{ path: data.vid }"
                  aria-label="動画埋め込みページへ遷移"
                  no-prefetch
                  @click.native="
                    getRecommendTitle(
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    )
                  "
                >
                  <div class="relative">
                    <img
                      :src="data.preview_url"
                      alt="サムネイル"
                      width="320"
                      height="180"
                      class="z-auto relative text-gray-200"
                      referrerpolicy="no-referrer"
                      crossorigin
                    />
                    <h5
                      class="text-gray-100 z-10 absolute right-0 bottom-0 text-xs bg-gray-900 rounded-sm px-1 py-px m-1"
                    >
                      {{ toHms(data.duration) }}
                    </h5>
                  </div>
                  <template v-if="data.title.length > 44">
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title.slice(0, 44) }}…
                    </h2>
                  </template>
                  <template v-else>
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title }}
                    </h2>
                  </template>
                </nuxt-link>
                <div class="flex flex-row my-1">
                  <template v-if="data.viewnumber >= 1000000">
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000000) }}M・
                    </h3>
                  </template>
                  <template
                    v-else-if="
                      data.viewnumber >= 1000 &&
                      data.viewnumber < 1000000
                    "
                  >
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000) }}K・
                    </h3>
                  </template>
                  <template v-else>
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数 {{ Math.ceil(data.viewnumber) }}・
                    </h3>
                  </template>
                  <template
                    v-if="
                      Number.isNaN(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    "
                  >
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                  </template>
                  <template v-else>
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">
                      {{
                        Math.ceil(
                          (data.likes /
                            (data.likes + data.dislikes)) *
                            100
                        )
                      }}%
                    </h3>
                  </template>
                </div>
                <div class="flex flex-row my-2 mb-6 overflow-hidden">
                  <div
                    v-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 0
                    "
                  />
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 1
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                  </template>
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 2
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                  </template>
                  <template v-else>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[2]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      }}
                    </h4>
                  </template>
                </div>
                <Skeleton slot="skeleton" />
              </vue-lazy-component>
            </div>
          </main>
        </template>
        <template v-else-if="messagesSecondMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesSecondMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <p
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-1"
            >
              {{ messagesSecondMatchVid.title }}
            </p>
          </article>
          <main class="flex flex-wrap justify-center">
            <div
              v-for="(data, index) in getJapaneseItemsDesktop"
              :key="`second-${index}`"
              class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
            >
              <vue-lazy-component>
                <nuxt-link
                  :to="{ path: data.vid }"
                  aria-label="動画埋め込みページへ遷移"
                  no-prefetch
                  @click.native="
                    getRecommendTitle(
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    )
                  "
                >
                  <div class="relative">
                    <img
                      :src="data.preview_url"
                      alt="サムネイル"
                      width="320"
                      height="180"
                      class="z-auto relative text-gray-200"
                      referrerpolicy="no-referrer"
                      crossorigin
                    />
                    <h5
                      class="text-gray-100 z-10 absolute right-0 bottom-0 text-xs bg-gray-900 rounded-sm px-1 py-px m-1"
                    >
                      {{ toHms(data.duration) }}
                    </h5>
                  </div>
                  <template v-if="data.title.length > 44">
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title.slice(0, 44) }}…
                    </h2>
                  </template>
                  <template v-else>
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title }}
                    </h2>
                  </template>
                </nuxt-link>
                <div class="flex flex-row my-1">
                  <template v-if="data.viewnumber >= 1000000">
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000000) }}M・
                    </h3>
                  </template>
                  <template
                    v-else-if="
                      data.viewnumber >= 1000 &&
                      data.viewnumber < 1000000
                    "
                  >
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000) }}K・
                    </h3>
                  </template>
                  <template v-else>
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数 {{ Math.ceil(data.viewnumber) }}・
                    </h3>
                  </template>
                  <template
                    v-if="
                      Number.isNaN(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    "
                  >
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                  </template>
                  <template v-else>
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">
                      {{
                        Math.ceil(
                          (data.likes /
                            (data.likes + data.dislikes)) *
                            100
                        )
                      }}%
                    </h3>
                  </template>
                </div>
                <div class="flex flex-row my-2 mb-6 overflow-hidden">
                  <div
                    v-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 0
                    "
                  />
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 1
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                  </template>
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 2
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                  </template>
                  <template v-else>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[2]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      }}
                    </h4>
                  </template>
                </div>
                <Skeleton slot="skeleton" />
              </vue-lazy-component>
            </div>
          </main>
        </template>
        <template v-else-if="messagesThirdMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesThirdMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="100%"
              />
            </div>
            <p
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-1"
            >
              {{ messagesThirdMatchVid.title }}
            </p>
          </article>
          <main class="flex flex-wrap justify-center">
            <div
              v-for="(data, index) in getJapaneseItemsDesktop"
              :key="`third-${index}`"
              class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
            >
              <vue-lazy-component>
                <nuxt-link
                  :to="{ path: data.vid }"
                  aria-label="動画埋め込みページへ遷移"
                  no-prefetch
                  @click.native="
                    getRecommendTitle(
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1],
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    )
                  "
                >
                  <div class="relative">
                    <img
                      :src="data.preview_url"
                      alt="サムネイル"
                      width="320"
                      height="180"
                      class="z-auto relative text-gray-200"
                      referrerpolicy="no-referrer"
                      crossorigin
                    />
                    <h5
                      class="text-gray-100 z-10 absolute right-0 bottom-0 text-xs bg-gray-900 rounded-sm px-1 py-px m-1"
                    >
                      {{ toHms(data.duration) }}
                    </h5>
                  </div>
                  <template v-if="data.title.length > 44">
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title.slice(0, 44) }}…
                    </h2>
                  </template>
                  <template v-else>
                    <h2
                      class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                      style="width: 320px"
                    >
                      {{ data.title }}
                    </h2>
                  </template>
                </nuxt-link>
                <div class="flex flex-row my-1">
                  <template v-if="data.viewnumber >= 1000000">
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000000) }}M・
                    </h3>
                  </template>
                  <template
                    v-else-if="
                      data.viewnumber >= 1000 &&
                      data.viewnumber < 1000000
                    "
                  >
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数
                      {{ Math.ceil(data.viewnumber / 1000) }}K・
                    </h3>
                  </template>
                  <template v-else>
                    <h3 class="text-gray-400 mr-1 text-xs">
                      再生数 {{ Math.ceil(data.viewnumber) }}・
                    </h3>
                  </template>
                  <template
                    v-if="
                      Number.isNaN(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    "
                  >
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                  </template>
                  <template v-else>
                    <i
                      class="material-icons text-gray-400"
                      style="font-size: 16px"
                      >thumb_up</i
                    >
                    <h3 class="text-gray-400 px-1 text-xs">
                      {{
                        Math.ceil(
                          (data.likes /
                            (data.likes + data.dislikes)) *
                            100
                        )
                      }}%
                    </h3>
                  </template>
                </div>
                <div class="flex flex-row my-2 mb-6 overflow-hidden">
                  <div
                    v-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 0
                    "
                  />
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 1
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                  </template>
                  <template
                    v-else-if="
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter((x, i, self) => self.indexOf(x) === i)
                        .length === 2
                    "
                  >
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                  </template>
                  <template v-else>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[0]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[1]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      }}
                    </h4>
                    <h4
                      class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                      @click="
                        changeFormKeyword(
                          data.keyword
                            .split(/,|\s/)
                            .filter(
                              RegExp.prototype.test,
                              /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                            )
                            .filter(
                              (item) =>
                                item !== data.title &&
                                item !== '日本人' &&
                                item !== 'アジア' &&
                                item !== 'アジア人' &&
                                item !== '日本' &&
                                item !== '無修正' &&
                                item !== '肛門' &&
                                item !== 'アナルセックス' &&
                                item !== '兼' &&
                                item !== '油' &&
                                item !== '中出' &&
                                item !== '人' &&
                                item !== 'アジアユニフォーム' &&
                                item !== 'ユニフォーム' &&
                                item !== '女' &&
                                item !== '熟' &&
                                item !== '膣' &&
                                item !== 'フェチ' &&
                                item !== 'ハードコア' &&
                                item !== 'ハイビジョン' &&
                                item !== '足' &&
                                item !== 'マッサージ師' &&
                                item !== '素人' &&
                                item !== '巨乳' &&
                                item !== '美人' &&
                                item !== '乳首' &&
                                item !== 'オ' &&
                                item !== 'です' &&
                                item !== '内射' &&
                                item !== '人妻' &&
                                item !== '痴女' &&
                                item !== '十代' &&
                                item !== 'コ' &&
                                item !== '粗い' &&
                                item !== '熟女' &&
                                item !== '美女' &&
                                item.length < 6
                            )
                            .filter(
                              (x, i, self) => self.indexOf(x) === i
                            )[2]
                        )
                      "
                    >
                      #{{
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      }}
                    </h4>
                  </template>
                </div>
                <Skeleton slot="skeleton" />
              </vue-lazy-component>
            </div>
          </main>
        </template>
        <template v-else>
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-12"
            >
              <p class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
              </p>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="
                  setJapaneseForm()
                  refresh()
                "
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
        <template v-if="messagesFirstMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesFirstMatchVid.embedded_url"
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
              {{ messagesFirstMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  messagesFirstMatchVid.viewnumber.toLocaleString()
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
                  {{ messagesFirstMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ messagesFirstMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="messagesSecondMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesSecondMatchVid.embedded_url"
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
              {{ messagesSecondMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  messagesSecondMatchVid.viewnumber.toLocaleString()
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
                  {{ messagesSecondMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ messagesSecondMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="messagesThirdMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="messagesThirdMatchVid.embedded_url"
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
              {{ messagesThirdMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  messagesThirdMatchVid.viewnumber.toLocaleString()
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
                  {{ messagesThirdMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ messagesThirdMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="suggestMessagesFirstMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="suggestMessagesFirstMatchVid.embedded_url"
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
              {{ suggestMessagesFirstMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  suggestMessagesFirstMatchVid.viewnumber.toLocaleString()
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
                  {{ suggestMessagesFirstMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ suggestMessagesFirstMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="suggestMessagesSecondMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="suggestMessagesSecondMatchVid.embedded_url"
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
              {{ suggestMessagesSecondMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  suggestMessagesSecondMatchVid.viewnumber.toLocaleString()
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
                  {{ suggestMessagesSecondMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ suggestMessagesSecondMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="suggestMessagesThirdMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="suggestMessagesThirdMatchVid.embedded_url"
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
              {{ suggestMessagesThirdMatchVid.title }}
            </h2>
            <div>
              <h3 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  suggestMessagesThirdMatchVid.viewnumber.toLocaleString()
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
                  {{ suggestMessagesThirdMatchVid.likes }}
                </h3>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h3 class="text-gray-400 px-1 text-xs">
                  {{ suggestMessagesThirdMatchVid.dislikes }}
                </h3>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="searchMessagesFirstMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
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
              <p class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
              </p>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="
                  setJapaneseForm()
                  refresh()
                "
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
              <p class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
              </p>
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="
                  setJapaneseForm()
                  refresh()
                "
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
      </main>
      <main class="flex flex-wrap justify-center">
        <template v-if="messagesFirstMatchVid">
          <div
            v-for="(data, index) in getJapaneseFirstItems"
            :key="`first-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="messagesSecondMatchVid">
          <div
            v-for="(data, index) in getJapaneseSecondItems"
            :key="`second-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="messagesThirdMatchVid">
          <div
            v-for="(data, index) in getJapaneseThirdItems"
            :key="`third-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="suggestMessagesFirstMatchVid">
          <div
            v-for="(data, index) in getSuggestFirstItems"
            :key="`first-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="suggestMessagesSecondMatchVid">
          <div
            v-for="(data, index) in getSuggestSecondItems"
            :key="`second-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="suggestMessagesThirdMatchVid">
          <div
            v-for="(data, index) in getSuggestThirdItems"
            :key="`third-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="searchMessagesFirstMatchVid">
          <div
            v-for="(data, index) in getSearchFirstItems"
            :key="`first-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="searchMessagesSecondMatchVid">
          <div
            v-for="(data, index) in getSearchSecondItems"
            :key="`second-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-else-if="searchMessagesThirdMatchVid">
          <div
            v-for="(data, index) in getSearchThirdItems"
            :key="`third-${index}`"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                no-prefetch
                @click.native="
                  getRecommendTitle(
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[0],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[1],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[2],
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter(
                        (x, i, self) => self.indexOf(x) === i
                      )[3]
                  )
                "
              >
                <div class="relative">
                  <img
                    :src="data.preview_url"
                    alt="サムネイル"
                    width="375"
                    height="210"
                    class="z-auto relative text-gray-200"
                    referrerpolicy="no-referrer"
                    crossorigin
                  />
                  <h5
                    class="text-gray-100 z-10 absolute right-0 bottom-0 bg-gray-900 rounded-sm px-1 py-px m-1"
                    style="font-size: 10px"
                  >
                    {{ toHms(data.duration) }}
                  </h5>
                </div>
                <template v-if="data.title.length > 50">
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </h2>
                </template>
                <template v-else>
                  <h2
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </h2>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h3>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h3>
                </template>
                <template v-else>
                  <h3 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h3>
                </template>
                <template
                  v-if="
                    Number.isNaN(
                      (data.likes / (data.likes + data.dislikes)) *
                        100
                    )
                  "
                >
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">0%</h3>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h3>
                </template>
              </div>
              <div class="flex flex-row my-2 mb-6 overflow-hidden">
                <div
                  v-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 0
                  "
                />
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 1
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 2
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                </template>
                <template
                  v-else-if="
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item !== '内射' &&
                          item !== '人妻' &&
                          item !== '痴女' &&
                          item !== '十代' &&
                          item !== 'コ' &&
                          item !== '粗い' &&
                          item !== '熟女' &&
                          item !== '美女' &&
                          item.length < 6
                      )
                      .filter((x, i, self) => self.indexOf(x) === i)
                      .length === 3
                  "
                >
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                </template>
                <template v-else>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[0]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[0]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[1]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[1]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[2]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[2]
                    }}
                  </h4>
                  <h4
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
                              item !== '十代' &&
                              item !== 'コ' &&
                              item !== '粗い' &&
                              item !== '熟女' &&
                              item !== '美女' &&
                              item.length < 6
                          )
                          .filter(
                            (x, i, self) => self.indexOf(x) === i
                          )[3]
                      )
                    "
                  >
                    #{{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item !== '内射' &&
                            item !== '人妻' &&
                            item !== '痴女' &&
                            item !== '十代' &&
                            item !== 'コ' &&
                            item !== '粗い' &&
                            item !== '熟女' &&
                            item !== '美女' &&
                            item.length < 6
                        )
                        .filter(
                          (x, i, self) => self.indexOf(x) === i
                        )[3]
                    }}
                  </h4>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
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
  prevRoute: any
  meta: object
}

export default Vue.extend({
  components: {
    // @ts-ignore
    Skeleton: () => import('~/components/Skeleton'),
  },
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'non-footer' : 'default'),
  scrollToTop: true,
  data(): DataType {
    return {
      id: this.$route.params.id,
      prevRoute: null,
      meta: {
        title: '動画視聴',
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
    if (this.$accessor.search.messagesFirst.length > 0) {
      return
    }
    this.$accessor.search.getSearchItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'messagesFirst',
      'messagesSecond',
      'messagesThird',
      'suggestMessagesFirst',
      'suggestMessagesSecond',
      'suggestMessagesThird',
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
    toHms(): (t: any) => string {
      // @ts-ignore
      return function (t) {
        let hms = ''
        const h = Math.ceil((t / 3600) | 0)
        const m = Math.ceil(((t % 3600) / 60) | 0)
        const s = Math.ceil(t % 60)

        if (h !== 0) {
          hms = h + ':' + padZero(m) + ':' + padZero(s)
        } else if (m !== 0) {
          hms = m + ':' + padZero(s)
        } else {
          // @ts-ignore
          hms = s
        }
        // @ts-ignore
        return hms

        function padZero(v: number) {
          if (v < 10) {
            return '0' + v
          } else {
            return v
          }
        }
      }
    },
    messagesFirstMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.messagesFirst.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    messagesSecondMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.messagesSecond.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    messagesThirdMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.messagesThird.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    suggestMessagesFirstMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.suggestMessagesFirst.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    suggestMessagesSecondMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.suggestMessagesSecond.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    suggestMessagesThirdMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.suggestMessagesThird.find(
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
    getJapaneseItemsDesktop(): any {
      return this.messagesFirst.slice(0, 20).sort(function () {
        return Math.random() - 0.5
      })
    },
    getJapaneseFirstItems(): any {
      return this.messagesFirst.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getJapaneseSecondItems(): any {
      return this.messagesSecond.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getJapaneseThirdItems(): any {
      return this.messagesThird.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSuggestFirstItems(): any {
      return this.suggestMessagesFirst.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSuggestSecondItems(): any {
      return this.suggestMessagesSecond
        .slice(0, 50)
        .sort(function () {
          return Math.random() - 0.5
        })
    },
    getSuggestThirdItems(): any {
      return this.suggestMessagesThird.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSearchFirstItems(): any {
      return this.searchMessagesFirst.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSearchSecondItems(): any {
      return this.searchMessagesSecond.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSearchThirdItems(): any {
      return this.searchMessagesThird.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
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
    getRecommendTitle(
      titleFirst: string,
      titleSecond: string,
      titleThird: string,
      titleFourth: string
    ): void {
      // @ts-ignore
      this.$accessor.search.addRecommendTitles(titleFirst)
      console.log(titleFirst)
      this.$accessor.search.addRecommendTitles(titleSecond)
      console.log(titleSecond)
      this.$accessor.search.addRecommendTitles(titleThird)
      console.log(titleThird)
      this.$accessor.search.addRecommendTitles(titleFourth)
      console.log(titleFourth)
      this.$accessor.search.concatRecommendArray(
        this.$store.state.search.recommendTitles
      )
    },
    changeFormKeyword(keyword: string): void {
      this.$router.push('/')
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getJapaneseItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0, 0)
      // @ts-ignore
      this.$accessor.search.addRecommendKeywords(keyword)
      console.log(keyword)
      // @ts-ignore
      this.$accessor.search.concatRecommendArray(
        this.$store.state.search.recommendKeywords
      )
    },
    changeFormSuggestKeyword(keyword: string): void {
      this.$router.push('/suggest')
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSuggestItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0, 0)
      // @ts-ignore
      this.$accessor.search.addRecommendKeywords(keyword)
      console.log(keyword)
      // @ts-ignore
      this.$accessor.search.concatRecommendArray(
        this.$store.state.search.recommendKeywords
      )
    },
    changeFormSearchKeyword(keyword: string): void {
      this.$router.push('/search')
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSearchItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0, 0)
      // @ts-ignore
      this.$accessor.search.addRecommendKeywords(keyword)
      console.log(keyword)
      // @ts-ignore
      this.$accessor.search.concatRecommendArray(
        this.$store.state.search.recommendKeywords
      )
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
