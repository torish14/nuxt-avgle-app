<template>
  <div>
    <iframe
      id="elem"
      src="https://avgle.com/embed/3b5064c12d910234909c"
      frameborder="0"
    />
    <!-- <button id="trigger" ref="submitBtn" @click="consoleHello">
      hello
    </button> -->
  </div>
</template>

<script>
export default {
  mounted() {
    // const elem = document.getElementById('elem')
    const elem = this.$el
    console.log(elem)
    // console.log(elem.contentDocument)
    // ? this.$nextTick(() => this.$refs.submitBtn.click())
  },
  methods: {
    consoleHello () {
      // ? console.log('hello')
    },
    // window:onload = () => {
    //   const elem = document.getElementById('elem')
    //   console.log(elem.contentDocument)
    // }
  }
}
</script>

<style>

</style>

<!-- <template>
  <div class="bg-black">
    <VueSimpleSuggest
      v-model="selected"
      :list="items"
      type="search"
      placeholder="Search"
    />
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
    <p class="text-white">
      aaaaaaaaaaaaaa
    </p>
  </div>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'

export default {
  components: {
    VueSimpleSuggest
  },
  data () {
    return {
      selected: ''
    }
  },
  methods: {
    items () {
      return [
        '10代',
        '巨乳',
        'エロアニメ',
        '中出し',
        'ナンパ',
        '素人',
        'オナニー',
        '痴漢',
        'イチャイチャ',
        'SM'
      ]
    }
  },
}
</script>

<style>
input {
  --tw-bg-opacity: 1;
  background-color: rgba(31, 41, 55, var(--tw-bg-opacity));
  border-top-left-radius: 9999px;
  border-bottom-left-radius: 9999px;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  --tw-text-opacity: 1;
  /* color: rgba(107, 114, 128, var(--tw-text-opacity)); */
  color: #A0AEC0;
  line-height: 1.25;
}

input:focus {
  outline: none;
}

.vue-simple-suggest.designed .suggestions {
  position: absolute;
  left: 0;
  right: 0;
  /* top: 100%; */
  /* top: calc(100% + 5px); */
  opacity: 1;
  z-index: 1000;
  background-color: black;
}

.vue-simple-suggest > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}

.vue-simple-suggest.designed .suggestions .suggest-item:hover {
  cursor: pointer;
  background-color: #6B46C1;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.vue-simple-suggest.designed .suggestions .suggest-item {
  color: #A0AEC0;
}

.vue-simple-suggest.designed .suggestions .suggest-item, .vue-simple-suggest.designed .suggestions .misc-item {
  padding: 5px 20px;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
</style> -->
