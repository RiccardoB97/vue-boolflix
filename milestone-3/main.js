const app = new Vue({
    el: '#app',

    data: {
        query: '',
        apiKey: "api_key=5170c70f94bcc05071b2466c1ed085ea",
        movieUrl: "https://api.themoviedb.org/3/search/movie?",
        films: [],
        seriesUrl: 'https://api.themoviedb.org/3/search/tv?',
        series: [],
        flagUrl: "https://www.countryflags.io/",
        imageUrl: "https://image.tmdb.org/t/p/w342",
        stars: 5,
    },

    methods: {
        searchFilm() {
            axios
                .get(this.movieUrl + this.apiKey + '&query=' + this.query,
            )
                .then(resp => {
                    this.films = resp.data.results;
                })
                .catch(e => {
                    console.error(e);
                })
        },
        searchSeries() {
            axios
                .get(this.seriesUrl + this.apiKey + '&query=' + this.query)
                .then(resp => {
                    this.series = resp.data.results
                })
                .catch(e => {
                    console.error(e)
                })
        }
    },
    mounted() {

    }

})