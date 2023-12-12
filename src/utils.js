import axios from 'axios'

export const getAllNews = () => {
    return axios
        .get('https://northcoderprojectwk.onrender.com/api/articles')
        .then((res) => {return res.data.articles })
    
}

export const getDetailNews = (articles_id) => {
    return axios
    .get(`https://northcoderprojectwk.onrender.com/api/articles/${articles_id}`)
    .then((res) => {return res.data.article })
}