<template>
  <section>
    <!-- デスクトップ -->
    <div v-if="$device.isDesktop">
      <main class="container mx-auto px-96">
        <h2>
          <div class="flex justify-center">
            <img
              src="~/assets/Porngle.jpeg"
              alt="Porngle"
              width="200"
              height="80"
              class="w-50"
              style="width: 200px; height: 80px"
            />
          </div>
        </h2>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            あなただけの性癖が見つかる無料エロ動画サイト、それが
            Porngle（ポーングル）。Porngle（ポーングル）
            は検索機能に特化したエロ動画サイトを目指しています。
          </h3>
          <p class="text-gray-400 mt-1">
            動画視聴ページに遷移したら、即座に「閉じる」ボタンをクリックしてみてください。その後、中央のアイコンをクリックすると動画が見られます。
            それでも見れない場合は、AdBlock や AdGuard
            などの広告ブロックアプリを動画視聴ページで使用してみてください。
          </p>
        </div>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            reCAPTCHA
            の画像が9つすべて表示されません。どうしたらいいですか？
          </h3>
          <p class="text-gray-400 mt-1">
            デバイスを横に傾けると9つすべてが表示されます。
          </p>
        </div>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            料金は無料ですか？
          </h3>
          <p class="text-gray-400 mt-1">
            はい。ユーザーの皆さまが動画を視聴するために支払う料金は一切かかりません。
          </p>
        </div>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            アカウント登録したらどんなことができますか？
          </h3>
          <p class="text-gray-400 mt-1">
            視聴履歴の確認やいいね、コメントの投稿をすることができます。より充実した性生活を送るためにもアカウント登録をされることをオススメいたします。
          </p>
        </div>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            なぜ Porngle を開発しようと思ったのですか？
          </h3>
          <p class="text-gray-400 mt-1">
            えちえちなことが大好きだからです。
          </p>
        </div>
        <br />
        <div class="text-sm leading-relaxed">
          <h3 class="text-gray-200 font-medium underline">
            今後の展望はなんですか？
          </h3>
          <p class="text-gray-400 mt-1">
            パートナー間での性生活の充実のために、アカウント登録して頂いたユーザー様の視聴履歴を気軽に共有する機能を実装いたします。また、視聴履歴をもとに性生活をさらに興奮したものにするためのレコメンド広告機能を実装いたします。
          </p>
        </div>
        <br />
      </main>
    </div>
    <!-- モバイル -->
    <div v-else class="pt-1 pb-20">
      <div class="flex text-gray-200">
        <nuxt-link to="/" aria-label="ホームへ戻る">
          <i class="material-icons m-2">close</i>
        </nuxt-link>
        <h1 class="text-base m-2">ヘルプ</h1>
      </div>
      <main class="container mx-auto px-8">
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          広告が邪魔で動画が見られません。どうしたらいいですか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            動画視聴ページに遷移したら、即座に「閉じる」ボタンをクリックしてみてください。その後、中央のアイコンをクリックすると動画が見られます。
            それでも見れない場合は、AdBlock や AdGuard
            などの広告ブロックアプリを動画視聴ページで使用してみてください。
          </p>
        </div>
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          reCAPTCHA
          の画像が9つすべて表示されません。どうしたらいいですか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            デバイスを横に傾けると9つすべてが表示されます。
          </p>
        </div>
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          料金は無料ですか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            はい。ユーザーの皆さまが動画を視聴するために支払う料金は一切かかりません。
          </p>
        </div>
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          アカウント登録したらどんなことができますか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            視聴履歴の確認やいいね、コメントの投稿をすることができます。より充実した性生活を送るためにもアカウント登録をされることをオススメいたします。
          </p>
        </div>
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          なぜ Porngle を開発しようと思ったのですか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            えちえちなことが大好きだからです。
          </p>
        </div>
        <br />
        <h3 class="text-gray-200 text-sm font-medium underline">
          今後の展望はなんですか？
        </h3>
        <div class="text-xs leading-relaxed">
          <p class="text-gray-400 mt-1">
            パートナー間での性生活の充実のために、アカウント登録して頂いたユーザー様の視聴履歴を気軽に共有する機能を実装いたします。また、視聴履歴をもとに性生活をさらに興奮したものにするためのレコメンド広告機能を実装いたします。
          </p>
        </div>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Meta from '~/assets/mixins/meta'

export type DataType = {
  meta: object
}

export default Vue.extend({
  mixins: [Meta],
  // @ts-ignore
  layout: (ctx) => (ctx.$device.isMobile ? 'mobile' : 'default'),
  data(): DataType {
    return {
      meta: {
        title: 'Porngle について',
        description: 'アバウトページです。',
        type: 'website',
        url: 'https://porngle.love/about',
        image: 'https://porngle.love/assets/PG.jpeg',
        robots: 'noindex',
      },
    }
  },
})
</script>

<style scoped>
ul {
  list-style: circle;
}

ol {
  list-style: lower-roman;
}
</style>
