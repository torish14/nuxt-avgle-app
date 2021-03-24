<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <main role="main">
        <template v-if="messagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
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
            <p
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-1"
            >
              {{ messagesMatchVid.title }}
            </p>
          </article>
        </template>
        <template
          v-else-if="
            message === '無修正' ||
            message === 'Uncensored' ||
            message === 'uncensored' ||
            message === 'PAKO' ||
            message === 'Pako' ||
            message === 'pako' ||
            message === 'ぱこ' ||
            message === 'パコ' ||
            message === 'CARIB' ||
            message === 'Carib' ||
            message === 'carib' ||
            message === 'かりぶ' ||
            message === 'カリブ' ||
            message === 'FC2' ||
            message === 'Fc2' ||
            message === 'fc2' ||
            message === '完全素人' ||
            message === '個人撮影' ||
            message === 'DEEPFAKE' ||
            message.match('DeepFake') ||
            message === 'Deepfake' ||
            message === 'deepfake' ||
            message === 'カリビアンコム' ||
            message === '一本道' ||
            message === 'HEYZO' ||
            message === 'Heyzo' ||
            message === 'heyzo' ||
            message === '東京熱' ||
            message === 'TOKYO-HOT' ||
            message === 'Toyo-Hot' ||
            message === 'Tokyo-hot' ||
            message === 'tokyo-hot' ||
            message === 'AV9898' ||
            message === 'Av9898' ||
            message === 'av9898' ||
            message === 'PORNHUB' ||
            message === 'PornHub' ||
            message === 'Pornhub' ||
            message === 'pornhub' ||
            message === 'エッチな4610' ||
            message === 'エッチな0930' ||
            message === '人妻斬り' ||
            message === 'SM-MIRACLE' ||
            message === 'SM-Miracle' ||
            message === 'SM-miracle' ||
            message === 'sm-miracle' ||
            message === 'のぞきザムライ' ||
            message === '金8天国'
          "
        >
          <client-only>
            <div class="flex justify-center">
              <i class="material-icons text-gray-400">search</i>
              <h5 class="text-gray-400 text-lg">
                &nbsp;一致する検索結果はありません。
              </h5>
            </div>
          </client-only>
        </template>
        <template v-else>
          <client-only>
            <div class="flex justify-center">
              <i class="material-icons text-gray-400">search</i>
              <h5 class="text-gray-400 text-lg">
                &nbsp;一致する検索結果はありません。
              </h5>
            </div>
          </client-only>
        </template>
      </main>
      <main class="flex flex-wrap justify-center">
        <div
          v-for="data in getJapaneseItemsDesktop"
          :key="data.vid"
          class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
        >
          <vue-lazy-component>
            <nuxt-link
              :to="{ path: data.vid }"
              aria-label="動画埋め込みページへ遷移"
              no-prefetch
              @click.native="getRecommendTitle(data.title)"
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
                <p
                  class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                  style="width: 320px"
                >
                  {{ data.title.slice(0, 44) }}…
                </p>
              </template>
              <template v-else>
                <p
                  class="text-gray-200 text-sm hover:text-purple-500 break-all pt-1"
                  style="width: 320px"
                >
                  {{ data.title }}
                </p>
              </template>
            </nuxt-link>
            <div class="flex flex-row my-1">
              <template v-if="data.viewnumber >= 1000000">
                <h6 class="text-gray-400 mr-1 text-xs">
                  再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M・
                </h6>
              </template>
              <template
                v-else-if="
                  data.viewnumber >= 1000 && data.viewnumber < 1000000
                "
              >
                <h6 class="text-gray-400 mr-1 text-xs">
                  再生数 {{ Math.ceil(data.viewnumber / 1000) }}K・
                </h6>
              </template>
              <template v-else>
                <h6 class="text-gray-400 mr-1 text-xs">
                  再生数 {{ Math.ceil(data.viewnumber) }}・
                </h6>
              </template>
              <template
                v-if="
                  Number.isNaN(
                    (data.likes / (data.likes + data.dislikes)) * 100
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
                        item.length < 7
                    ).length === 1
                "
              >
                <div
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
                            item.length < 7
                        )[0]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
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
                        item.length < 7
                    ).length === 2
                "
              >
                <div
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
                            item.length < 7
                        )[0]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[0]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[1]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
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
                        item.length < 7
                    ).length === 3
                "
              >
                <div
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
                            item.length < 7
                        )[0]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[0]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[1]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[1]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[2]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[2]
                  }}
                </div>
              </template>
              <template v-else>
                <div
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
                            item.length < 7
                        )[0]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[0]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[1]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[1]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[2]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[2]
                  }}
                </div>
                <div
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
                            item.length < 7
                        )[3]
                    )
                  "
                >
                  {{
                    data.keyword
                      .split(/,|\s/)
                      .filter(
                        RegExp.prototype.test,
                        /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                      )
                      .filter(
                        (item) =>
                          item !== data.title &&
                          item !== '日本人' &&
                          item !== 'アジア' &&
                          item !== 'アジア人' &&
                          item !== '日本' &&
                          item !== '無修正' &&
                          item !== '肛門' &&
                          item !== 'アナルセックス' &&
                          item !== '兼' &&
                          item !== '油' &&
                          item !== '中出' &&
                          item !== '人' &&
                          item !== 'アジアユニフォーム' &&
                          item !== 'ユニフォーム' &&
                          item !== '女' &&
                          item !== '熟' &&
                          item !== '膣' &&
                          item !== 'フェチ' &&
                          item !== 'ハードコア' &&
                          item !== 'ハイビジョン' &&
                          item !== '足' &&
                          item !== 'マッサージ師' &&
                          item !== '素人' &&
                          item !== '巨乳' &&
                          item !== '美人' &&
                          item !== '乳首' &&
                          item !== 'オ' &&
                          item !== 'です' &&
                          item.length < 7
                      )[3]
                  }}
                </div>
              </template>
            </div>
            <Skeleton slot="skeleton" />
          </vue-lazy-component>
        </div>
      </main>
    </div>
    <!-- モバイル -->
    <div v-else class="pt-1 pb-20">
      <main role="main">
        <template v-if="messagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
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
            <p
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ messagesMatchVid.title }}
            </p>
            <div>
              <h6 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{ messagesMatchVid.viewnumber.toLocaleString() }}
                回視聴
              </h6>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ messagesMatchVid.likes }}
                </h6>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ messagesMatchVid.dislikes }}
                </h6>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="suggestMessagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="suggestMessagesMatchVid.embedded_url"
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
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ suggestMessagesMatchVid.title }}
            </p>
            <div>
              <h6 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  suggestMessagesMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h6>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ suggestMessagesMatchVid.likes }}
                </h6>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ suggestMessagesMatchVid.dislikes }}
                </h6>
              </div>
            </div>
          </article>
        </template>
        <template v-else-if="searchMessagesMatchVid">
          <article>
            <div
              class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0"
              style="padding-top: 50%"
            >
              <iframe
                id="sub"
                :src="searchMessagesMatchVid.embedded_url"
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
              class="text-gray-200 text-sm md:px-4 lg:px-4 xl:px-4 2xl:px-4 pt-2 px-2"
            >
              {{ searchMessagesMatchVid.title }}
            </p>
            <div>
              <h6 class="text-gray-400 mt-1 mr-1 text-xs pl-2">
                {{
                  searchMessagesMatchVid.viewnumber.toLocaleString()
                }}
                回視聴
              </h6>
            </div>
            <div class="flex">
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_up</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesMatchVid.likes }}
                </h6>
              </div>
              <div class="text-center mx-6 my-4">
                <i
                  class="material-icons text-gray-400"
                  style="font-size: 16px"
                  >thumb_down</i
                >
                <h6 class="text-gray-400 px-1 text-xs">
                  {{ searchMessagesMatchVid.dislikes }}
                </h6>
              </div>
            </div>
          </article>
        </template>
        <template
          v-else-if="
            message === '無修正' ||
            message === 'Uncensored' ||
            message === 'uncensored' ||
            message === 'PAKO' ||
            message === 'Pako' ||
            message === 'pako' ||
            message === 'ぱこ' ||
            message === 'パコ' ||
            message === 'CARIB' ||
            message === 'Carib' ||
            message === 'carib' ||
            message === 'かりぶ' ||
            message === 'カリブ' ||
            message === 'FC2' ||
            message === 'Fc2' ||
            message === 'fc2' ||
            message === '完全素人' ||
            message === '個人撮影' ||
            message === 'DEEPFAKE' ||
            message.match('DeepFake') ||
            message === 'Deepfake' ||
            message === 'deepfake' ||
            message === 'カリビアンコム' ||
            message === '一本道' ||
            message === 'HEYZO' ||
            message === 'Heyzo' ||
            message === 'heyzo' ||
            message === '東京熱' ||
            message === 'TOKYO-HOT' ||
            message === 'Toyo-Hot' ||
            message === 'Tokyo-hot' ||
            message === 'tokyo-hot' ||
            message === 'AV9898' ||
            message === 'Av9898' ||
            message === 'av9898' ||
            message === 'PORNHUB' ||
            message === 'PornHub' ||
            message === 'Pornhub' ||
            message === 'pornhub' ||
            message === 'エッチな4610' ||
            message === 'エッチな0930' ||
            message === '人妻斬り' ||
            message === 'SM-MIRACLE' ||
            message === 'SM-Miracle' ||
            message === 'SM-miracle' ||
            message === 'sm-miracle' ||
            message === 'のぞきザムライ' ||
            message === '金8天国'
          "
        >
          <client-only>
            <div class="flex justify-center">
              <i class="material-icons text-gray-400">search</i>
              <h5 class="text-gray-400 text-sm pt-2">
                &nbsp;一致する検索結果はありません。
              </h5>
            </div>
          </client-only>
        </template>
        <template v-else>
          <client-only>
            <div class="flex justify-center">
              <i class="material-icons text-gray-400">search</i>
              <h5 class="text-gray-400 text-sm pt-2">
                &nbsp;一致する検索結果はありません。
              </h5>
            </div>
          </client-only>
        </template>
      </main>
      <main class="flex flex-wrap justify-center">
        <template v-if="messagesMatchVid">
          <div
            v-for="data in getJapaneseItems"
            :key="data.vid"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                @click.native="getRecommendTitle(data.title)"
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
                          item.length < 7
                      ).length === 1
                  "
                >
                  <div
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                          item.length < 7
                      ).length === 2
                  "
                >
                  <div
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                          item.length < 7
                      ).length === 3
                  "
                >
                  <div
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[2]
                    }}
                  </div>
                  <div
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
                              item.length < 7
                          )[3]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[3]
                    }}
                  </div>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-if="suggestMessagesMatchVid">
          <div
            v-for="data in getSuggestItems"
            :key="data.vid"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                @click.native="getRecommendTitle(data.title)"
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                              item.length < 7
                          )[3]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[3]
                    }}
                  </div>
                </template>
              </div>
              <Skeleton slot="skeleton" />
            </vue-lazy-component>
          </div>
        </template>
        <template v-if="searchMessagesMatchVid">
          <div
            v-for="data in getSearchItems"
            :key="data.vid"
            class="md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8"
          >
            <vue-lazy-component>
              <nuxt-link
                :to="{ path: data.vid }"
                aria-label="動画埋め込みページへ遷移"
                @click.native="getRecommendTitle(data.title)"
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
                          item.length < 7
                      ).length === 1
                  "
                >
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                          item.length < 7
                      ).length === 2
                  "
                >
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                          item.length < 7
                      ).length === 3
                  "
                >
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    style="margin-left: 8px"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
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
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[0]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[0]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[1]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[1]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[2]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[2]
                    }}
                  </div>
                  <div
                    class="text-gray-300 mr-2 text-xs py-1 px-2 bg-gray-700 rounded-full border-gray-700 hover:bg-gray-600 cursor-pointer"
                    @click="
                      changeFormSearchKeyword(
                        data.keyword
                          .split(/,|\s/)
                          .filter(
                            RegExp.prototype.test,
                            /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                          )
                          .filter(
                            (item) =>
                              item !== data.title &&
                              item !== '日本人' &&
                              item !== 'アジア' &&
                              item !== 'アジア人' &&
                              item !== '日本' &&
                              item !== '無修正' &&
                              item !== '肛門' &&
                              item !== 'アナルセックス' &&
                              item !== '兼' &&
                              item !== '油' &&
                              item !== '中出' &&
                              item !== '人' &&
                              item !== 'アジアユニフォーム' &&
                              item !== 'ユニフォーム' &&
                              item !== '女' &&
                              item !== '熟' &&
                              item !== '膣' &&
                              item !== 'フェチ' &&
                              item !== 'ハードコア' &&
                              item !== 'ハイビジョン' &&
                              item !== '足' &&
                              item !== 'マッサージ師' &&
                              item !== '素人' &&
                              item !== '巨乳' &&
                              item !== '美人' &&
                              item !== '乳首' &&
                              item !== 'オ' &&
                              item !== 'です' &&
                              item.length < 7
                          )[3]
                      )
                    "
                  >
                    {{
                      data.keyword
                        .split(/,|\s/)
                        .filter(
                          RegExp.prototype.test,
                          /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                        )
                        .filter(
                          (item) =>
                            item !== data.title &&
                            item !== '日本人' &&
                            item !== 'アジア' &&
                            item !== 'アジア人' &&
                            item !== '日本' &&
                            item !== '無修正' &&
                            item !== '肛門' &&
                            item !== 'アナルセックス' &&
                            item !== '兼' &&
                            item !== '油' &&
                            item !== '中出' &&
                            item !== '人' &&
                            item !== 'アジアユニフォーム' &&
                            item !== 'ユニフォーム' &&
                            item !== '女' &&
                            item !== '熟' &&
                            item !== '膣' &&
                            item !== 'フェチ' &&
                            item !== 'ハードコア' &&
                            item !== 'ハイビジョン' &&
                            item !== '足' &&
                            item !== 'マッサージ師' &&
                            item !== '素人' &&
                            item !== '巨乳' &&
                            item !== '美人' &&
                            item !== '乳首' &&
                            item !== 'オ' &&
                            item !== 'です' &&
                            item.length < 7
                        )[3]
                    }}
                  </div>
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
import Meta from '~/assets/mixins/meta.js'
// import Skeleton from '~/components/Skeleton.vue'

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
  // beforeRouteEnter(from, next) {
  //   this.$accessor.setPrevRoute(from)
  //   // @ts-ignore
  //   next(vm => {
  //     // @ts-ignore
  //     vm.prevRoute = from
  //   })
  // },
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
        image: 'https://porngle.love/assets/PG ロゴ.jpeg',
        robots: 'noindex',
      },
    }
  },
  fetch(): void {
    // @ts-ignore
    if (this.$accessor.search.messages.length > 0) {
      return
    }
    this.$accessor.search.getSearchItems()
  },
  computed: {
    ...mapGetters('search', [
      'message',
      'messages',
      'suggestMessages',
      'searchMessages',
    ]),
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
    messagesMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.messages.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    suggestMessagesMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.suggestMessages.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    searchMessagesMatchVid(): number {
      // @ts-ignore
      return this.$accessor.search.searchMessages.find(
        // @ts-ignore
        (value) => value.vid === this.id
      )
    },
    getJapaneseItemsDesktop(): any {
      return this.messages.slice(0, 20).sort(function () {
        return Math.random() - 0.5
      })
    },
    getJapaneseItems(): any {
      return this.messages.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSuggestItems(): any {
      return this.suggestMessages.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    getSearchItems(): any {
      return this.searchMessages.slice(0, 50).sort(function () {
        return Math.random() - 0.5
      })
    },
    // prevRouteChild() {
    //   return this.$accessor.prevRoute
    // }
  },
  watch: {
    '$route.query': '$fetch',
  },
  activated(): void {
    // 最後の fetch から30秒以上経っていれば、fetch を呼び出す
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
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
    getRecommendTitle(title: string): void {
      // @ts-ignore
      this.$accessor.search.addRecommendTitles(title)
      console.log(title)
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
  },
})
</script>
