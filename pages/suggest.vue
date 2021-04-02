<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <main
        class="flex flex-wrap justify-center"
        style="width: 375px"
      >
        <template v-if="filterMessage">
          <client-only>
            <div
              class="flex flex-col flex-shrink-0 items-center pt-11"
            >
              <h5 class="text-gray-200 text-base">
                &nbsp;作品が見つかりませんでした。
              </h5>
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
        <!-- <div v-else-if="$fetchState.pending">
          <client-only>
            <Skeleton />
            <Skeleton />
          </client-only>
        </div> -->
        <!-- <div v-else-if="firstSkeleton">
          <client-only>
            <Skeleton />
            <Skeleton />
          </client-only>
        </div> -->
        <template v-else-if="$fetchState.error">
          <div class="flex flex-col flex-shrink-0 items-center pt-12">
            <h5 class="text-gray-200 text-base">
              &nbsp;エラーが発生しました。
            </h5>
            <nuxt-link
              to="/"
              aria-label="ホームへ戻る"
              class="text-gray-400 text-sm hover:text-purple-500"
              @click.native="
                setJapaneseForm()
                refresh()
              "
              >&nbsp;トップページに戻る
            </nuxt-link>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(data, index) in getSuggestFirstItems"
            :key="`first-${index}`"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: 'embedded_url' + '/' + data.vid }"
                aria-label="動画埋め込みページへ遷移"
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
          <div
            v-for="(data, index) in getSuggestSecondItems"
            :key="`second-${index}`"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: 'embedded_url' + '/' + data.vid }"
                aria-label="動画埋め込みページへ遷移"
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
          <div
            v-for="(data, index) in getSuggestThirdItems"
            :key="`third-${index}`"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: 'embedded_url' + '/' + data.vid }"
                aria-label="動画埋め込みページへ遷移"
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
                      changeFormSuggestKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item !== '内射' &&
                              item !== '人妻' &&
                              item !== '痴女' &&
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
          <!-- <InfiniteLoading
            ref="infiniteLoading"
            spinner="spiral"
            @infinite="infiniteHandler"
          >
            <div slot="no-more">
              これ以上結果はありません
            </div>
          </InfiniteLoading> -->
        </template>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Meta from '~/assets/mixins/meta.js'
// import { VueLoading } from 'vue-loading-template'
// import Skeleton from '~/components/Skeleton.vue'

export type DataType = {
  parPage: number
  meta: object
}

export default Vue.extend({
  components: {
    // @ts-ignore
    // VueLoading,
    // @ts-ignore
    Skeleton: () => import('~/components/Skeleton'),
  },
  mixins: [Meta],
  scrollToTop: true,
  data(): DataType {
    return {
      // ? 1ページに表示するアイテム数
      parPage: 20,
      meta: {
        title: '探求',
        description: '探求ページです。',
        type: 'website',
        url: 'https://porngle.love/suggest',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.suggestMessagesFirst.length > 0) {
      return
    }
    this.$accessor.search.setSuggestMessage()
    this.$accessor.search.getSuggestItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'suggestMessagesFirst',
      'suggestMessagesSecond',
      'suggestMessagesThird',
      'errorMessage',
      'firstSkeleton',
    ]),
    filterMessage(): any {
      return (
        (this.suggestMessagesFirst.length === 0 &&
          this.errorMessage) ||
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
      return function (t): string {
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
    getSuggestFirstItems(): any {
      return this.suggestMessagesFirst.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
    getSuggestSecondItems(): any {
      return this.suggestMessagesSecond.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
    getSuggestThirdItems(): any {
      return this.suggestMessagesThird.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
  },
  watch: {
    '$route.query': '$fetch',
  },
  // activated(): void {
  //   // 最後の fetch から30秒以上経っていれば、fetch を呼び出す
  //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
  //     this.$fetch()
  //   }
  // },
  created(): void {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.setSuggestForm) // eslint-disable-line
    }
  },
  destroyed(): void {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.setSuggestForm)
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
    setSuggestForm(): void {
      this.$accessor.search.setSuggestMessage()
    },
    // infiniteHandler() {
    //   setTimeout(() => {
    //     // @ts-ignore
    //     if (this.parPage < this.suggestMessagesFirst.length) {
    //       // @ts-ignore
    //       this.parPage += 20
    //       // @ts-ignore
    //       this.$refs.infiniteLoading.stateChanger.loaded()
    //     } else {
    //       // @ts-ignore
    //       this.$refs.infiniteLoading.stateChanger.complete()
    //     }
    //   }, 400)
    // },
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
    changeFormSuggestKeyword(keyword: string): void {
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
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
