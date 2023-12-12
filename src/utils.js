import axios from 'axios'

export const getAllNews = () => {
    return axios
        .get('https://northcoderprojectwk.onrender.com/api/articles')
        .then((res) => {return res.data.articles })
    
}