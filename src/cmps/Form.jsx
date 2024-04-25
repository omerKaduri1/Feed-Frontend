import { useForm } from "../customHooks/useForm"
import { commentService } from "../services/comment.service"
import Button from '@mui/material/Button'

export function Form({ onAddComment }) {
    const [comment, handleChange, setComment] = useForm(commentService.getEmptyComment())

    async function onSendComment(ev) {
        ev.preventDefault()
        try {
            await onAddComment(comment)
            setComment(commentService.getEmptyComment())
        } catch (error) {
            console.log('error:', error)
        }
    }

    const { to, message } = comment
    return (
        <form onSubmit={onSendComment} className="send-mail-form">
            <section>
                <input onChange={handleChange} value={to} type="email" name="to" id="to" placeholder="Email" />
            </section>
            <section>
                <textarea onChange={handleChange} value={message} type="txt" name="message" id="message" placeholder="Message" />
            </section>
            <section className="btn-container flex">
                <Button variant="contained" type="submit">Submit</Button>
            </section>
        </form>
    )
}