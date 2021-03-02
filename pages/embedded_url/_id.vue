<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <div>
        <template v-if="messagesMatchVid">
          <div class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0" style="padding-top: 50%;">
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
          <h5 class="text-gray-300 text-lg pb-8 md:px-4 lg:px-4 xl:px-4 2xl:px-4">
            {{ messagesMatchVid.title.slice(0,40) }}
          </h5>
        </template>
        <template v-else-if="message === '無修正' || message === 'Uncensored' || message === 'uncensored' || message === 'PAKO' || message === 'Pako' || message === 'pako' || message === 'ぱこ' || message === 'パコ' || message === 'CARIB' || message === 'Carib' || message === 'carib' || message === 'かりぶ' || message === 'カリブ' || message === 'FC2' || message === 'Fc2' || message === 'fc2' || message === '完全素人' || message === '個人撮影' || message === 'DEEPFAKE' || message.match('DeepFake') || message === 'Deepfake' || message === 'deepfake'">
          <client-only>
            <i class="material-icons text-gray-500" style="font-size: 18px;">error</i>
            <h5 class="text-gray-500 text-lg">
              &nbsp;キーワードにあてはまる結果はありません
            </h5>
          </client-only>
        </template>
        <template v-else>
          <client-only>
            <i class="material-icons text-gray-500" style="font-size: 18px;">error</i>
            <h5 class="text-gray-500 text-lg">
              &nbsp;キーワードにあてはまる結果はありません
            </h5>
          </client-only>
        </template>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="data in getPaginationItems" :key="data.vid" class=" md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8">
          <vue-lazy-component>
            <nuxt-link :to="{ path: data.vid }" aria-label="動画埋め込みページへ遷移" no-prefetch>
              <div class="relative">
                <img
                  :src="data.preview_url"
                  alt="サムネイル"
                  width="320"
                  height="180"
                  class="z-auto relative text-white"
                  referrerpolicy="no-referrer"
                  crossorigin
                >
                <h5 class="text-white z-10 absolute right-0 bottom-0 text-xs bg-gray-800 rounded-sm px-1 m-1">
                  {{ toHms(data.duration) }}
                </h5>
              </div>
              <h5 class="text-gray-300 text-base hover:text-purple-500" style="width: 320px;">
                {{ data.title.slice(0,40) }}
              </h5>
            </nuxt-link>
            <div class="flex flex-row my-1">
              <template v-if="data.viewnumber >= 1000000">
                <h6 class="text-gray-500 mr-1 text-sm">
                  再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
                </h6>
              </template>
              <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
                <h6 class="text-gray-500 mr-1 text-sm">
                  再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
                </h6>
              </template>
              <template v-else>
                <h6 class="text-gray-500 mr-1 text-sm">
                  再生数 {{ Math.ceil(data.viewnumber) }}
                </h6>
              </template>
              <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
                <i class="material-icons text-gray-500" style="font-size: 18px;">thumb_up</i>
                <h6 class="text-gray-500 px-1 text-sm">
                  0%
                </h6>
              </template>
              <template v-else>
                <i class="material-icons text-gray-500" style="font-size: 18px;">thumb_up</i>
                <h6 class="text-gray-500 px-1 text-sm">
                  {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
                </h6>
              </template>
            </div>
            <div class="flex flex-row my-2 mb-6">
              <div v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 0" />
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 1">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
              </template>
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 2">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[1] }}
                </div>
              </template>
              <template v-else>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[1] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[2] }}
                </div>
              </template>
            </div>
            <Skeleton slot="skeleton" />
          </vue-lazy-component>
        </div>
        <Paginate
          :page-count="getPageCount"
          :page-range="3"
          :margin-pages="1"
          :click-handler="clickCallback"
          :prev-text="'前'"
          :prev-class="'page-item'"
          :prev-link-class="'page-link'"
          :next-text="'次へ'"
          :next-class="'page-item'"
          :next-link-class="'page-item'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :page-link-class="'page-link'"
          class="sm:pt-4 md:pt-6 lg:pt-8 xl:pt-8"
        />
      </div>
    </div>
    <!-- モバイル -->
    <div v-else class="pt-20">
      <div>
        <template v-if="messagesMatchVid">
          <div class="relative sm:w-full md:w-full lg:w-full xl:w-11/12 h-0" style="padding-top: 50%;">
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
          <h5 class="text-gray-300 text-lg pb-8 md:px-4 lg:px-4 xl:px-4 2xl:px-4 pl-2">
            {{ messagesMatchVid.title.slice(0,40) }}
          </h5>
        </template>
        <template v-else-if="message === '無修正' || message === 'Uncensored' || message === 'uncensored' || message === 'PAKO' || message === 'Pako' || message === 'pako' || message === 'ぱこ' || message === 'パコ' || message === 'CARIB' || message === 'Carib' || message === 'carib' || message === 'かりぶ' || message === 'カリブ' || message === 'FC2' || message === 'Fc2' || message === 'fc2' || message === '完全素人' || message === '個人撮影' || message === 'DEEPFAKE' || message.match('DeepFake') || message === 'Deepfake' || message === 'deepfake'">
          <client-only>
            <i class="material-icons text-gray-500" style="font-size: 18px;">error</i>
            <h5 class="text-gray-500 text-lg">
              &nbsp;キーワードにあてはまる結果はありません
            </h5>
          </client-only>
        </template>
        <template v-else>
          <client-only>
            <i class="material-icons text-gray-500" style="font-size: 18px;">error</i>
            <h5 class="text-gray-500 text-lg">
              &nbsp;キーワードにあてはまる結果はありません
            </h5>
          </client-only>
        </template>
      </div>
      <div class="flex flex-wrap justify-center">
        <div v-for="data in messages" :key="data.vid" class=" md:px-2 lg:px-2 xl:px-2 2xl:px-2 lg:mt-8 xl:mt-8 2xl:mt-8">
          <vue-lazy-component>
            <nuxt-link :to="{ path: data.vid }" aria-label="動画埋め込みページへ遷移">
              <div class="relative">
                <img
                  :src="data.preview_url"
                  alt="サムネイル"
                  width="370"
                  height="180"
                  class="z-auto relative text-white"
                  referrerpolicy="no-referrer"
                  crossorigin
                >
                <h5 class="text-white z-10 absolute right-0 bottom-0 text-xs bg-gray-800 rounded-sm px-1 m-1">
                  {{ toHms(data.duration) }}
                </h5>
              </div>
              <h5 class="text-gray-300 text-base hover:text-purple-500 break-all pl-2" style="width: 370px;">
                {{ data.title.slice(0,40) }}
              </h5>
            </nuxt-link>
            <div class="flex flex-row my-1">
              <template v-if="data.viewnumber >= 1000000">
                <h6 class="text-gray-500 mr-1 text-sm pl-2">
                  再生数 {{ Math.ceil(data.viewnumber / 1000000) }}M
                </h6>
              </template>
              <template v-else-if="data.viewnumber >= 1000 && data.viewnumber < 1000000">
                <h6 class="text-gray-500 mr-1 text-sm pl-2">
                  再生数 {{ Math.ceil(data.viewnumber / 1000) }}K
                </h6>
              </template>
              <template v-else>
                <h6 class="text-gray-500 mr-1 text-sm pl-2">
                  再生数 {{ Math.ceil(data.viewnumber) }}
                </h6>
              </template>
              <template v-if="Number.isNaN(data.likes / (data.likes + data.dislikes) * 100)">
                <i class="material-icons containertext-gray-500" style="font-size: 18px;">thumb_up</i>
                <h6 class="text-gray-500 px-1 text-sm">
                  0%
                </h6>
              </template>
              <template v-else>
                <i class="material-icons  text-gray-500" style="font-size: 18px;">thumb_up</i>
                <h6 class="text-gray-500 px-1 text-sm">
                  {{ Math.ceil(data.likes / (data.likes + data.dislikes) * 100) }}%
                </h6>
              </template>
            </div>
            <div class="flex flex-row my-2 mb-6">
              <div v-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 0" />
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 1">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800" style="margin-left: 8px;">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
              </template>
              <template v-else-if="data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足').length === 2">
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800" style="margin-left: 8px;">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[1] }}
                </div>
              </template>
              <template v-else>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800" style="margin-left: 8px;">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[0] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[1] }}
                </div>
                <div class="text-gray-400 mr-2 text-xs py-1 px-2 bg-gray-800 rounded-full border-gray-800 hover:text-purple-600">
                  {{ data.keyword.split(/,|\s/).filter(RegExp.prototype.test, /^[\u30A0-\u30FF\u3040-\u309F\u3005-\u3006\u30E0-\u9FCF]+$/).filter(item => item !== data.title && item !== '日本人' && item !== 'アジア' && item !== 'アジア人' && item !== '日本' && item !== '無修正' && item !== '肛門' && item !== 'アナルセックス' && item !== '兼' && item !== '油' && item !== '中出' && item !== '人' && item !== 'アジアユニフォーム' && item !== 'ユニフォーム' && item !== '女' && item !== '熟' && item !== '膣' && item !== 'フェチ' && item !== 'ハードコア' && item !== 'ハイビジョン' && item !== '足')[2] }}
                </div>
              </template>
            </div>
            <Skeleton slot="skeleton" />
          </vue-lazy-component>
        </div>
        <InfiniteLoading
          ref="infiniteLoading"
          spinner="spiral"
          @infinite="infiniteHandler"
        >
          <div slot="no-more">
            これ以上結果はありません
          </div>
        </InfiniteLoading>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// Todo キーワードが6文字以上削除
import Vue from 'vue'
import { mapGetters } from 'vuex'
import Skeleton from '~/components/Skeleton.vue'

function youtubeDefer () {
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
  id: string,
  parPage: number
}

export default Vue.extend({
  components: {
    Skeleton
  },
  scrollToTop: true,
  data (): DataType {
    return {
      id: this.$route.params.id,
      // ? 1ページに表示するアイテム数
      parPage: 20
    }
  },
  // ? layout: 'custom',
  fetch () {
    if(this.$accessor.search.messages.length > 0) {
      return
    }
    this.$accessor.search.getSearchItems()
  },
  computed: {
    ...mapGetters('search', ['message', 'messages']),
    // ? 現在ページのアイテムを返す
    getPaginationItems (): number {
      // @ts-ignore
      const current = this.$accessor.currentIdPage * this.parPage
      // @ts-ignore
      const start = current - this.parPage
      return this.messages.slice(start, current).sort(
        function() { return Math.random()-.5 }
      )
    },
    // ? ページネーションの最大ページ数を求めるためにitems をparPage で割って切り上げる
    getPageCount (): number {
      // @ts-ignore
      return Math.ceil(this.messages.length / this.parPage)
    },
    messagesMatchVid (): number {
      // @ts-ignore
      return this.$accessor.search.messages.find(value =>  value.vid === this.id)
    }
  },
  watch: {
    '$route.query': '$fetch'
  },
  activated() {
    // 最後の fetch から30秒以上経っていれば、fetch を呼び出す
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  created() {
    if (process.browser) {
      // @ts-ignore
      window.addEventListener('beforeunload', this.changeForm) // eslint-disable-line
    }
  },
  destroyed() {
    // @ts-ignore
    window.removeEventListener('beforeunload', this.changeForm)
  },
  methods: {
    changeForm () {
      this.$accessor.search.changeMessage()
    },
    // ? ページネーションをクリック時に、currentPage にページ番号を設定
    clickCallback (pageNum: number) {
      // @ts-ignore
      this.$store.state.currentIdPage = pageNum
      // @ts-ignore
      this.$accessor.setCurrentIdPage(this.$store.state.currentIdPage)
      window.scrollTo(0,0)
      this.$router.push({ path: `?page=${this.$accessor.currentIdPage}` })
      this.$forceUpdate()
    },
    toHms (t: number): number {
      let hms = '' as string | number
      const h = Math.ceil(t / 3600 | 0)
      const m = Math.ceil(t % 3600 / 60 | 0)
      const s = Math.ceil(t % 60)

      if (h !== 0) {
        hms = h + ':' + padZero(m) + ':' + padZero(s)
      } else if (m !== 0) {
        hms = m + ':' + padZero(s)
      } else {
        hms = s
      }
      // @ts-ignore
      return hms

      function padZero (v: number) {
        if (v < 10) {
          return '0' + v
        } else {
          return v
        }
      }
    },
    infiniteHandler() {
      setTimeout(() => {
        if (this.parPage < this.messages.length) {
          this.parPage += 20
          // @ts-ignore
          this.$refs.infiniteLoading.stateChanger.loaded()
        } else {
          // @ts-ignore
          this.$refs.infiniteLoading.stateChanger.complete()
        }
      }, 400)
    }
  }
})
</script>
