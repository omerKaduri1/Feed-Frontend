import { Form } from "./Form"
import { MailList } from "./MailList";
import { MailFilter } from "./MailFilter";
import { useEffect, useState } from "react";
import { commentService } from "../services/comment.service";

export function MailIndex() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState(commentService.getEmptyComment())
    const [filterBy, setFilterBy] = useState(commentService.getDefaultFilter())

    async function loadComments() {
        const comments = await commentService.query(filterBy)
        setComments(comments)    
    }

    useEffect(() => {
        loadComments()
    }, [])

    function onChangeFilter(filterBy) {
        setFilterBy(filterBy)
        console.log('filterBy:', filterBy)
        loadComments()
    }

    async function onSendComment(ev) {
        ev.preventDefault()
        try {
            await commentService.save(comment)
        } catch (error) {
            console.log('error:', error)
        }
    }

    if (!comments) return <div>Loading...</div>
    return (
        <>
            <Form onSendComment={onSendComment}/>
            <MailFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
            <MailList comments={comments} />
        </>
    )
}