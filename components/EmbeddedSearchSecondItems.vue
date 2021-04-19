<template>
  <div class="flex flex-wrap justify-center">
    <div
      v-for="(data, index) in getSearchSecondItems"
      :key="`first-${index}`"
    >
      <vue-lazy-component>
        <nuxt-link
          :to="{
            path: 'embedded_url' + '/' + data.vid,
          }"
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
                .filter((x, i, self) => self.indexOf(x) === i)[0],
              data.keyword
                .split(/,|\s/)
                .filter(
                  RegExp.prototype.test,
                  /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                )
                .filter(
                  (item) =>
                    item !== data.title &&
                    item !== '日本人' &&
                    item !== 'アジア' &&
                    item !== 'アジア人' &&
                    item !== '日本' &&
                    item !== '無修正' &&
                    item !== '肛門' &&
                    item !== 'アナルセックス' &&
                    item !== '兼' &&
                    item !== '油' &&
                    item !== '中出' &&
                    item !== '人' &&
                    item !== 'アジアユニフォーム' &&
                    item !== 'ユニフォーム' &&
                    item !== '女' &&
                    item !== '熟' &&
                    item !== '膣' &&
                    item !== 'フェチ' &&
                    item !== 'ハードコア' &&
                    item !== 'ハイビジョン' &&
                    item !== '足' &&
                    item !== 'マッサージ師' &&
                    item !== '素人' &&
                    item !== '巨乳' &&
                    item !== '美人' &&
                    item !== '乳首' &&
                    item !== 'オ' &&
                    item !== 'です' &&
                    item !== '内射' &&
                    item !== '人妻' &&
                    item !== '痴女' &&
                    item !== '十代' &&
                    item !== 'コ' &&
                    item !== '粗い' &&
                    item !== '熟女' &&
                    item !== '美女' &&
                    item.length < 6
                )
                .filter((x, i, self) => self.indexOf(x) === i)[1],
              data.keyword
                .split(/,|\s/)
                .filter(
                  RegExp.prototype.test,
                  /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                )
                .filter(
                  (item) =>
                    item !== data.title &&
                    item !== '日本人' &&
                    item !== 'アジア' &&
                    item !== 'アジア人' &&
                    item !== '日本' &&
                    item !== '無修正' &&
                    item !== '肛門' &&
                    item !== 'アナルセックス' &&
                    item !== '兼' &&
                    item !== '油' &&
                    item !== '中出' &&
                    item !== '人' &&
                    item !== 'アジアユニフォーム' &&
                    item !== 'ユニフォーム' &&
                    item !== '女' &&
                    item !== '熟' &&
                    item !== '膣' &&
                    item !== 'フェチ' &&
                    item !== 'ハードコア' &&
                    item !== 'ハイビジョン' &&
                    item !== '足' &&
                    item !== 'マッサージ師' &&
                    item !== '素人' &&
                    item !== '巨乳' &&
                    item !== '美人' &&
                    item !== '乳首' &&
                    item !== 'オ' &&
                    item !== 'です' &&
                    item !== '内射' &&
                    item !== '人妻' &&
                    item !== '痴女' &&
                    item !== '十代' &&
                    item !== 'コ' &&
                    item !== '粗い' &&
                    item !== '熟女' &&
                    item !== '美女' &&
                    item.length < 6
                )
                .filter((x, i, self) => self.indexOf(x) === i)[2],
              data.keyword
                .split(/,|\s/)
                .filter(
                  RegExp.prototype.test,
                  /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/
                )
                .filter(
                  (item) =>
                    item !== data.title &&
                    item !== '日本人' &&
                    item !== 'アジア' &&
                    item !== 'アジア人' &&
                    item !== '日本' &&
                    item !== '無修正' &&
                    item !== '肛門' &&
                    item !== 'アナルセックス' &&
                    item !== '兼' &&
                    item !== '油' &&
                    item !== '中出' &&
                    item !== '人' &&
                    item !== 'アジアユニフォーム' &&
                    item !== 'ユニフォーム' &&
                    item !== '女' &&
                    item !== '熟' &&
                    item !== '膣' &&
                    item !== 'フェチ' &&
                    item !== 'ハードコア' &&
                    item !== 'ハイビジョン' &&
                    item !== '足' &&
                    item !== 'マッサージ師' &&
                    item !== '素人' &&
                    item !== '巨乳' &&
                    item !== '美人' &&
                    item !== '乳首' &&
                    item !== 'オ' &&
                    item !== 'です' &&
                    item !== '内射' &&
                    item !== '人妻' &&
                    item !== '痴女' &&
                    item !== '十代' &&
                    item !== 'コ' &&
                    item !== '粗い' &&
                    item !== '熟女' &&
                    item !== '美女' &&
                    item.length < 6
                )
                .filter((x, i, self) => self.indexOf(x) === i)[3]
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
              {{ Math.ceil(data.viewnumber / 1000000) }}・
            </h3>
          </template>
          <template
            v-else-if="
              data.viewnumber >= 1000 && data.viewnumber < 1000000
            "
          >
            <h3 class="text-gray-400 mr-1 text-xs pl-2">
              再生数
              {{ Math.ceil(data.viewnumber / 1000) }}K・
            </h3>
          </template>
          <template v-else>
            <h3 class="text-gray-400 mr-1 text-xs pl-2">
              再生数
              {{ Math.ceil(data.viewnumber) }}・
            </h3>
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
                  (data.likes / (data.likes + data.dislikes)) * 100
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
                    .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[2]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[2]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[0]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[1]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[2]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[2]
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
                    .filter((x, i, self) => self.indexOf(x) === i)[3]
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
                  .filter((x, i, self) => self.indexOf(x) === i)[3]
              }}
            </h4>
          </template>
        </div>
        <Skeleton slot="skeleton" />
      </vue-lazy-component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  components: {
    // @ts-ignore
    Skeleton: () => import('~/components/Skeleton'),
  },
  computed: {
    ...mapGetters('search', ['searchMessagesSecond']),
    getSearchSecondItems(): number {
      // @ts-ignore
      return this.searchMessagesSecond.slice().sort(function () {
        return Math.random() - 0.5
      })
    },
    // @ts-ignore
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
  },
  methods: {
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
      // @ts-ignorea
      this.$accessor.search.changeKeyword(keyword)
      this.$accessor.search.getSearchSecondItems()
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
