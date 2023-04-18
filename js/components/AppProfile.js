app.component('app-profile',{
  props: ['result', 'isFavorite'],
  methods:{
    addFavorite(){
      this.$emit('add-favorite')
    },
    removeFavorite(){
      this.$emit('remove-favorite')
    }
  },
  template:
    /* html */`
    <div class="result">
        <a v-if="isFavorite" href="#" class="result__toggle-favorite" @click="removeFavorite">remove Favorite ⭐️</a>
        <a v-else href="#" class="result__toggle-favorite" @click="addFavorite">Add Favorite ⭐️</a>
        <h2 class="result__name">{{ result.name }}</h2>
        <img v-bind:src="result.avatar_url" :alt="result.name" class="result__avatar">
        <p class="result__bio">{{ result.bio }}</p>
            <br>
            <a :href="result.blog" class="result__blog" target="_blank">{{ result.blog }}</a>
        </p>
    </div>
  `
});