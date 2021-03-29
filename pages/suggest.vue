<template>
  <section>
    <!-- モバイル -->
    <div v-if="$device.isMobile" class="pt-1 pb-20">
      <main
        class="flex flex-wrap justify-center"
        style="width: 375px"
      >
        <template v-if="suggestMessages.length === 0 && errorMessage">
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
          <div v-for="data in getSuggestItems" :key="data.vid">
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
                          item.length < 7
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
                          item.length < 7
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
                          item.length < 7
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
                          item.length < 7
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
                  <p
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title.slice(0, 50) }}…
                  </p>
                </template>
                <template v-else>
                  <p
                    class="text-gray-200 text-sm hover:text-purple-500 break-all pt-2 px-2"
                    style="width: 375px"
                  >
                    {{ data.title }}
                  </p>
                </template>
              </nuxt-link>
              <div class="flex flex-row my-1">
                <template v-if="data.viewnumber >= 1000000">
                  <h6 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数
                    {{ Math.ceil(data.viewnumber / 1000000) }}M・
                  </h6>
                </template>
                <template
                  v-else-if="
                    data.viewnumber >= 1000 &&
                    data.viewnumber < 1000000
                  "
                >
                  <h6 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                  </h6>
                </template>
                <template v-else>
                  <h6 class="text-gray-400 mr-1 text-xs pl-2">
                    再生数 {{ Math.ceil(data.viewnumber) }}・
                  </h6>
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
                  <h6 class="text-gray-400 px-1 text-xs">0%</h6>
                </template>
                <template v-else>
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 16px"
                    >thumb_up</i
                  >
                  <h6 class="text-gray-400 px-1 text-xs">
                    {{
                      Math.ceil(
                        (data.likes / (data.likes + data.dislikes)) *
                          100
                      )
                    }}%
                  </h6>
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
                          item.length < 7
                      ).length === 0
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
                          item.length < 7
                      ).length === 1
                  "
                >
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[0]
                    }}
                  </div>
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
                          item.length < 7
                      ).length === 2
                  "
                >
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[1]
                    }}
                  </div>
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
                          item.length < 7
                      ).length === 3
                  "
                >
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[2]
                    }}
                  </div>
                </template>
                <template v-else>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[2]
                    }}
                  </div>
                  <div
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
                              item.length < 7
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
                            item.length < 7
                        )[3]
                    }}
                  </div>
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
    if (this.$accessor.search.suggestMessages.length > 0) {
      return
    }
    this.$accessor.search.setSuggestMessage()
    this.$accessor.search.getSuggestItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'suggestMessages',
      'errorMessage',
      'firstSkeleton',
    ]),
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
    getSuggestItems(): any {
      return this.suggestMessages.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
    // ? 現在ページのアイテムを返す
    getPaginationItems(): number {
      // @ts-ignore
      const current = this.$accessor.currentIndexPage * this.parPage
      // @ts-ignore
      const start = current - this.parPage
      return this.suggestMessages
        .slice(start, current)
        .sort(function () {
          return Math.random() - 0.5
        })
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount(): number {
      // @ts-ignore
      return Math.ceil(this.suggestMessages.length / this.parPage)
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
    handler(): void {
      console.log('Now loading')
    },
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
    //     if (this.parPage < this.suggestMessages.length) {
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
    getRecommendTitle(title: string): void {
      if (
        // @ts-ignore
        this.$accessor.search.messages.length > 0 &&
        // @ts-ignore
        this.$accessor.search.suggestMessages.length > 0 &&
        // @ts-ignore
        this.$accessor.search.searchMessages.length > 0
      ) {
        // @ts-ignore
        this.$accessor.search.addRecommendTitles(title)
        console.log(title)
        this.$accessor.search.concatRecommendArray(
          this.$store.state.search.recommendTitles
        )
      }
    },
    changeFormSuggestKeyword(keyword: string): void {
      // @ts-ignore
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSuggestItems()
      // @ts-ignore
      this.$accessor.changeIndexPagination()
      window.scrollTo(0, 0)
      if (
        // @ts-ignore
        this.$accessor.search.messages.length > 0 &&
        // @ts-ignore
        this.$accessor.search.suggestMessages.length > 0
      ) {
        // @ts-ignore
        this.$accessor.search.addRecommendKeywords(keyword)
        console.log(keyword)
        // @ts-ignore
        this.$accessor.search.concatRecommendArray(
          this.$store.state.search.recommendKeywords
        )
      }
    },
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
