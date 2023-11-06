const API_KEY = '126337dd48f85d2809a3e5f34363edc2'
const BASE_URL = 'https://api.themoviedb.org/3'

const requests = {
    requestPopular: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=En-US&page=1`,
    requestTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=En-US&page=1`,
    requestTrending: `${BASE_URL}/movie/popular?api_key=${API_KEY}&languageEn-USr&page=2`,
    requestUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=En-US&page=1`,
    requestRecommend: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=En-US&page=3`,
    requestLatest: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=En-US&page=4`,
};

export default requests