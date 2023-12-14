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

export const getAllComments = (article_id) => {
    return axios
        .get(`https://northcoderprojectwk.onrender.com/api/articles/${article_id}/comments`)
        .then((res) =>{
         return res.data.comments })
    
}

export const patchAddVote = (articles_id) => {
    const update = {
        "inc_votes": 1
    }
    
    return axios
    .patch(`https://northcoderprojectwk.onrender.com/api/articles/${articles_id}`,update)
        .then((res) => {
            return res.data.articles
        })
    
}

export const patchDeleteVote = (articles_id) => {
    const update = {
        "inc_votes": -1
    }
    
    return axios
    .patch(`https://northcoderprojectwk.onrender.com/api/articles/${articles_id}`,update)
        .then((res) => {
            return res.data.articles
        })
    
}

export const getAllUsers = () => {
    return axios
        .get(`https://northcoderprojectwk.onrender.com/api/users`)
        .then((res) => {return res.data.users })
}

export const postComment = (articles_id) => {
    const newComments = {
        username: 'tickle122',
        body: 'great'
      }
    
    return axios
    .post(`https://northcoderprojectwk.onrender.com/api/articles/${articles_id}/comments`, newComments )
        .then((res) => {
            return res.data.articles
        })
    
}