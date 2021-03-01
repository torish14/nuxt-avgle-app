<template>
  <div class="demo">
    <div v-if="selected" style="padding-top:10px; width: 100%;">
      You have selected <code>{{ selected.name }}, the {{ selected.race }}</code>
    </div>
    <div class="autosuggest-container">
      <vue-autosuggest
        v-model="query"
        :suggestions="filteredOptions"
        :get-suggestion-value="getSuggestionValue"
        :input-props="{id:'autosuggest__input', placeholder:'Do you feel lucky, punk?'}"
        @focus="focusMe"
        @click="clickHandler"
        @input="onInputChange"
        @selected="onSelected"
      >
        <div slot-scope="{suggestion}" style="display: flex; align-items: center;">
          <img :style="{ display: 'flex', width: '25px', height: '25px', borderRadius: '15px', marginRight: '10px'}" :src="suggestion.item.avatar">
          <div style="{ display: 'flex', color: 'navyblue'}">
            {{ suggestion.item.name }}
          </div>
        </div>
      </vue-autosuggest>
    </div>
  </div>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest';

export default {
  components: {
    VueAutosuggest
  },
  data() {
    return {
      query: '',
      selected: '',
      suggestions: [
        {
          data: [
            { id: 1, name: 'Frodo', race: 'Hobbit', avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Elijah_Wood_as_Frodo_Baggins.png/220px-Elijah_Wood_as_Frodo_Baggins.png' },
            { id: 2, name: 'Samwise', race: 'Hobbit', avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Sean_Astin_as_Samwise_Gamgee.png/200px-Sean_Astin_as_Samwise_Gamgee.png' },
            { id: 3, name: 'Gandalf', race: 'Maia', avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/220px-Gandalf600ppx.jpg' },
            { id: 4, name: 'Aragorn', race: 'Human', avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Aragorn300ppx.png/150px-Aragorn300ppx.png' }
          ]
        }
      ]
    };
  },
  computed: {
    filteredOptions() {
      return [
        {
          data: this.suggestions[0].data.filter(option => {
            return option.name.toLowerCase().includes(this.query.toLowerCase());
          })
        }
      ];
    }
  },
  methods: {
    clickHandler() {
      // event fired when clicking on the input
    },
    onSelected(item) {
      this.selected = item.item;
    },
    onInputChange(text) {
      // event fired when the input changes
      console.log(text)
    },
    /**
     * This is what the <input/> value is set to when you are selecting a suggestion.
     */
    getSuggestionValue(suggestion) {
      return suggestion.item.name;
    },
    focusMe(e) {
      console.log(e) // FocusEvent
    }
  }
}
</script>

<style>
.demo {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

input {
  width: 260px;
  padding: 0.5rem;
}

ul {
  width: 100%;
  color: rgba(30, 39, 46,1.0);
  list-style: none;
  margin: 0;
  padding: 0.5rem 0 .5rem 0;
}
li {
  margin: 0 0 0 0;
  border-radius: 5px;
  padding: 0.75rem 0 0.75rem 0.75rem;
  display: flex;
  align-items: center;
}
li:hover {
  cursor: pointer;
}

.autosuggest-container {
  display: flex;
  justify-content: center;
  width: 280px;
}

#autosuggest { width: 100%; display: block;}
.autosuggest__results-item--highlighted {
  background-color: rgba(51, 217, 178,0.2);
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
