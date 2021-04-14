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
              <!-- prettier-ignore -->
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="setJapaneseForm(); refresh()"
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
        <template v-else-if="messagesFirstMatchVid">
          <article>
            <div class="relative w-2/3" style="padding-top: 50%">
              <iframe
                id="sub"
                :src="messagesFirstMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="70%"
              />
              <h2
                class="text-gray-200 text-base absolute bottom-0 pl-20 pb-44"
              >
                {{ messagesFirstMatchVid.title }}
              </h2>
              <div class="absolute bottom-0 pl-20 pb-36">
                <h3 class="text-gray-400 text-sm">
                  {{
                    messagesFirstMatchVid.viewnumber.toLocaleString()
                  }}
                  回視聴
                </h3>
              </div>
              <div class="flex absolute bottom-0 pl-20 pb-16">
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesFirstMatchVid.likes }}
                  </h3>
                </div>
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_down</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesFirstMatchVid.dislikes }}
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <main>
            <DesktopJapaneseItems />
          </main>
        </template>
        <template v-else-if="messagesSecondMatchVid">
          <article>
            <div class="relative w-2/3" style="padding-top: 50%">
              <iframe
                id="sub"
                :src="messagesSecondMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="70%"
              />
              <h2
                class="text-gray-200 text-base absolute bottom-0 pl-20 pb-44"
              >
                {{ messagesSecondMatchVid.title }}
              </h2>
              <div class="absolute bottom-0 pl-20 pb-36">
                <h3 class="text-gray-400 text-sm">
                  {{
                    messagesSecondMatchVid.viewnumber.toLocaleString()
                  }}
                  回視聴
                </h3>
              </div>
              <div class="flex absolute bottom-0 pl-20 pb-16">
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesSecondMatchVid.likes }}
                  </h3>
                </div>
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_down</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesSecondMatchVid.dislikes }}
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <main>
            <DesktopJapaneseItems />
          </main>
        </template>
        <template v-else-if="messagesThirdMatchVid">
          <article>
            <div class="relative w-2/3" style="padding-top: 50%">
              <iframe
                id="sub"
                :src="messagesThirdMatchVid.embedded_url"
                frameborder="0"
                scrolling="no"
                allow="fullscreen"
                referrerpolicy="no-referrer-down-grade"
                class="youtube absolute top-0 left-0 w-full h-full"
                width="100%"
                height="70%"
              />
              <h2
                class="text-gray-200 text-base absolute bottom-0 pl-20 pb-44"
              >
                {{ messagesThirdMatchVid.title }}
              </h2>
              <div class="absolute bottom-0 pl-20 pb-36">
                <h3 class="text-gray-400 text-sm">
                  {{
                    messagesThirdMatchVid.viewnumber.toLocaleString()
                  }}
                  回視聴
                </h3>
              </div>
              <div class="flex absolute bottom-0 pl-20 pb-16">
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_up</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesThirdMatchVid.likes }}
                  </h3>
                </div>
                <div class="text-center mx-6 my-4">
                  <i
                    class="material-icons text-gray-400"
                    style="font-size: 18px"
                    >thumb_down</i
                  >
                  <h3 class="text-gray-400 px-1 text-sm">
                    {{ messagesThirdMatchVid.dislikes }}
                  </h3>
                </div>
              </div>
            </div>
          </article>
          <main>
            <DesktopJapaneseItems />
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
              <!-- prettier-ignore -->
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="setJapaneseForm(); refresh()"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              class="relative sm:w-full md:w-full lg:w-full xl:w-2/3 h-0"
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
              <!-- prettier-ignore -->
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="setJapaneseForm(); refresh()"
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
              <!-- prettier-ignore -->
              <nuxt-link
                to="/"
                aria-label="ホームへ戻る"
                class="text-gray-400 text-sm hover:text-purple-500"
                @click.native="setJapaneseForm(); refresh()"
              >
                &nbsp;トップページに戻る
              </nuxt-link>
            </div>
          </client-only>
        </template>
      </main>
      <main class="flex flex-wrap justify-center">
        <template v-if="messagesFirstMatchVid">
          <JapaneseFirstItems />
        </template>
        <template v-else-if="messagesSecondMatchVid">
          <JapaneseSecondItems />
        </template>
        <template v-else-if="messagesThirdMatchVid">
          <JapaneseThirdItems />
        </template>
        <template v-else-if="suggestMessagesFirstMatchVid">
          <SuggestFirstItems />
        </template>
        <template v-else-if="suggestMessagesSecondMatchVid">
          <SuggestSecondItems />
        </template>
        <template v-else-if="suggestMessagesThirdMatchVid">
          <SuggestThirdItems />
        </template>
        <template v-else-if="searchMessagesFirstMatchVid">
          <SearchFirstItems />
        </template>
        <template v-else-if="searchMessagesSecondMatchVid">
          <SearchSecondItems />
        </template>
        <template v-else-if="searchMessagesThirdMatchVid">
          <SearchThirdItems />
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
    DesktopJapaneseItems: () =>
      // @ts-ignore
      import('~/components/DesktopJapaneseItems'),
    JapaneseFirstItems: () =>
      // @ts-ignore
      import('~/components/JapaneseFirstItems'),
    JapaneseSecondItems: () =>
      // @ts-ignore
      import('~/components/JapaneseSecondItems'),
    JapaneseThirdItems: () =>
      // @ts-ignore
      import('~/components/JapaneseThirdItems'),
    SuggestFirstItems: () =>
      // @ts-ignore
      import('~/components/SuggestFirstItems'),
    SuggestSecondItems: () =>
      // @ts-ignore
      import('~/components/SuggestSecondItems'),
    SuggestThirdItems: () =>
      // @ts-ignore
      import('~/components/SuggestThirdItems'),
    // @ts-ignore
    SearchFirstItems: () => import('~/components/SearchFirstItems'),
    // @ts-ignore
    SearchSecondItems: () => import('~/components/SearchSecondItems'),
    // @ts-ignore
    SearchThirdItems: () => import('~/components/SearchThirdItems'),
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
    refresh(): void {
      this.$nuxt.refresh()
    },
  },
})
</script>
