import { Form } from "./Form"
import { MailList } from "./MailList"
import { MailFilter } from "./MailFilter"
import { useEffect, useState } from "react"
import { commentService } from "../services/comment.service"

export function MailIndex() {
    const [comments, setComments] = useState([])
    const [filterBy, setFilterBy] = useState(commentService.getDefaultFilter())

    console.log('comments:', comments)
    async function loadComments() {
        console.log('filterBy to service:', filterBy)
        const comments = await commentService.query(filterBy)
        setComments(comments)
    }

    async function onAddComment(comment) {
        try {
            await commentService.save(comment)
            loadComments()
        } catch (error) {
            console.log('error:', error)
        }
    }

    useEffect(() => {
        loadComments()
    }, [filterBy])

    function onChangeFilter(filterBy) {
        setFilterBy(filterBy)
        console.log('filterBy:', filterBy)
    }

    if (!comments) return <div>Loading...</div>
    return (
        <>
            <Form onAddComment={onAddComment} />
            <MailFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
            <MailList comments={comments} />
        </>
    )
}