<!-- <template>
  <div id="app" class="bg-black">
    <VueAutosuggest
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
          label: 'Destination',
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
        const photosPromise = this.$axios.$get(this.photosUrl);
        const usersPromise = this.$axios.$get(this.usersUrl);

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
        .filter(item => {
          if (item[field].toLowerCase().includes(text.toLowerCase())) {
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
}
</script> -->

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

/* input {
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
} */
</style>
