const app = new Vue({
    el: '#app',

    data: {
        query: '',
        api_key: "5170c70f94bcc05071b2466c1ed085ea",
        movieUrl: "https://api.themoviedb.org/3/search/movie?",
        films: [],
        seriesUrl: 'https://api.themoviedb.org/3/search/tv?',
        series: [],
        flagsToShow: ['en', 'it', 'fr', 'es', 'ja', 'de', 'fi', 'hi', 'ko', 'ru', 'zh'],
        imageUrl: "https://image.tmdb.org/t/p/w342",
        stars: 5,
        message: '',
    },

    methods: {
        searchData() {
            // get movies data
            axios
                .get(this.movieUrl, {
                    params: {
                        api_key: this.api_key,
                        query: this.query
                    }
                })
                .then(resp => {
                    this.films = resp.data.results;
                })
                .catch(e => {
                    console.error(e);
                })

            // Get series data
            axios
                .get(this.seriesUrl, {
                    params: {
                        api_key: this.api_key,
                        query: this.query
                    }
                })
                .then(resp => {
                    this.series = resp.data.results
                })
                .catch(e => {
                    console.error(e)
                })

            // Show not found
            setTimeout(() => {
                if (this.films.length === 0 && this.series.length === 0 && this.query !== '') {
                    return this.message = 'No film or series was found under this name.'
                }
            }, 1500)
        },
    },
    mounted() {

    }

})