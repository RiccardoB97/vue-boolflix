const app = new Vue({
    el: '#app',

    data: {
        query: '',
        url: "https://api.themoviedb.org/3/search/movie?api_key=5170c70f94bcc05071b2466c1ed085ea",
        films: []
    },

    methods: {
        toggleSearch() {
            axios
                .get(this.url + '&query=' + this.query)
                .then(resp => {
                    this.films = resp.data.results;
                    console.log(this.films);
                })
                .catch(e => {
                    console.error(e);
                })
        }
    },
    mounted() {

    }

})