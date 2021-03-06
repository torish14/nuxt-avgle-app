<template>
  <div id="app">
    <div class="container">
      <vue-autosuggest
        v-model="query"
        :suggestions="suggestions"
        :input-props="inputProps"
        :render-suggestion="renderSuggestion"
        @input="fetchResults"
      />
    </div>
  </div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'

export default {
  components: {
    VueAutosuggest
  },
  data() {
    return {
      query: '',
      results: [],
      usersUrl: 'https://jsonplaceholder.typicode.com/users',
      // inputタグに属性追加
      inputProps: {
        id: 'autosuggest__input',
        placeholder: '検索'
      },
      suggestions: []
    }
  },
  methods: {
    fetchResults() {
      const usersPromise = this.$axios.get(this.usersUrl)

      Promise.all([usersPromise]).then(values => {
        this.suggestions = []

        const users = this.filterResults(values[0].data, this.query, 'name')

        users.length &&
          this.suggestions.push({ data: users })
      })
    },
    filterResults(data, text, field) {
      console.log('data', data)
      console.log('text', text)
      console.log('field', field)
      return data
      // eslint-disable-next-line
      .filter(item => {
        if (item[field].toLowerCase().includes(text.toLowerCase())) {
          return item[field];
        }
      })
      .sort()
    },
    renderSuggestion(suggestion) {
      return suggestion.item.name
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#autosuggest__input {
  outline: none;
  position: relative;
  display: block;
  border: 1px solid #616161;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  position: relative;
  width: 100%;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0px;
  max-height: 400px;
  overflow-y: scroll;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
  padding: 15px;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results-before {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 15px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results-item:active,
.autosuggest__results .autosuggest__results-item:hover,
.autosuggest__results .autosuggest__results-item:focus,
.autosuggest__results
  .autosuggest__results-item.autosuggest__results-item--highlighted {
  background-color: #f6f6f6;
}
</style>

<!-- <template>
  <div id="app">
    <div class="container">
      <vue-autosuggest
        ref="autocomplete"
        v-model="query"
        :suggestions="suggestions"
        :input-props="inputProps"
        :section-configs="sectionConfigs"
        :render-suggestion="renderSuggestion"
        :get-suggestion-value="getSuggestionValue"
        @input="fetchResults"
      />
      <div v-if="selected" style="margin-top: 10px;">
        You have selected:
        <code>
          <pre>{{ JSON.stringify(selected, null, 4) }}</pre>
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      query: '',
      results: [],
      timeout: null,
      selected: null,
      debounceMilliseconds: 250,
      usersUrl: 'https://jsonplaceholder.typicode.com/users',
      photosUrl: 'https://jsonplaceholder.typicode.com/photos',
      inputProps: {
        id: 'autosuggest__input',
        placeholder: 'Do you feel lucky, punk?',
        class: 'form-control',
        name: 'hello'
      },
      suggestions: [],
      sectionConfigs: {
        destinations: {
          limit: 6,
          label: '',
          onSelected: selected => {
            this.selected = selected.item;
          }
        },
        hotels: {
          limit: 6,
          label: 'Hotels',
          onSelected: selected => {
            this.selected = selected.item;
          }
        }
      }
    };
  },
  methods: {
    fetchResults() {
      const query = this.query;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const photosPromise = axios.get(this.photosUrl);
        const usersPromise = axios.get(this.usersUrl);

        Promise.all([photosPromise, usersPromise]).then(values => {
          this.suggestions = [];
          this.selected = null;

          const photos = this.filterResults(values[0].data, query, 'title');
          const users = this.filterResults(values[1].data, query, 'name');

          users.length &&
            this.suggestions.push({ name: 'destinations', data: users });
          photos.length &&
            this.suggestions.push({ name: 'hotels', data: photos });
        });
      }, this.debounceMilliseconds);
    },
    filterResults(data, text, field) {
      return data
      // eslint-disable-next-line
        .filter(item => {
          if (item[field].toLowerCase().includes(text.toLowerCase()) > -1) {
            return item[field];
          }
        })
        .sort();
    },
    renderSuggestion(suggestion) {
      if (suggestion.name === 'hotels') {
        const image = suggestion.item;
        console.log(image);
        return (
          <div>
            <img class={{ avatar: true }} src={image.thumbnailUrl} />
            {image.title}
          </div>
        );
      } else {
        return suggestion.item.name;
      }
    },
    getSuggestionValue(suggestion) {
      const { name, item } = suggestion;
      return name === 'hotels' ? item.title : item.name;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.avatar {
  height: 25px;
  width: 25px;
  border-radius: 20px;
  margin-right: 10px;
}
#autosuggest__input {
  outline: none;
  position: relative;
  display: block;
  border: 1px solid #616161;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

#autosuggest__input.autosuggest__input-open {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.autosuggest__results-container {
  position: relative;
  width: 100%;
}

.autosuggest__results {
  font-weight: 300;
  margin: 0;
  position: absolute;
  z-index: 10000001;
  width: 100%;
  border: 1px solid #e0e0e0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  padding: 0px;
  max-height: 400px;
  overflow-y: scroll;
}

.autosuggest__results ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.autosuggest__results .autosuggest__results-item {
  cursor: pointer;
  padding: 15px;
}

#autosuggest ul:nth-child(1) > .autosuggest__results_title {
  border-top: none;
}

.autosuggest__results .autosuggest__results-before {
  color: gray;
  font-size: 11px;
  margin-left: 0;
  padding: 15px 13px 5px;
  border-top: 1px solid lightgray;
}

.autosuggest__results .autosuggest__results-item:active,
.autosuggest__results .autosuggest__results-item:hover,
.autosuggest__results .autosuggest__results-item:focus,
.autosuggest__results
  .autosuggest__results-item.autosuggest__results-item--highlighted {
  background-color: #f6f6f6;
}
</style> -->
