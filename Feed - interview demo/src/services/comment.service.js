import { utilService } from "./util.service"
import { httpService } from "./http.service"

export const commentService = {
    query,
    getById,
    remove,
    save,
    getDefaultFilter,
    getEmptyComment,
    getByUserId
}

const BASE_URL = 'comment'

async function query(filterBy) {
    return httpService.get(BASE_URL, { params: { filterBy } })
}

async function getByUserId(userId) {
    const comments = await httpService.get(BASE_URL + '/usercomments')
    return comments
}

function getById(commentId) {
    return httpService.get(`${BASE_URL}/${commentId}`)

}

async function remove(commentId) {
    return httpService.delete(`${BASE_URL}/${commentId}`)
}

async function save(comment) {
    var savedComment
    if (comment._id) {
        savedComment = await httpService.put(`${BASE_URL}/${comment._id}`, comment)
    } else {
        savedComment = await httpService.post(BASE_URL, comment)
    }
    return savedComment
}

function getDefaultFilter() {
    return { txt: '' }
}

function getEmptyComment() {
    return {
        email: '',
        message: ''
    }
}