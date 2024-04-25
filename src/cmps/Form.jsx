import { useForm } from "../customHooks/useForm"
import { commentService } from "../services/comment.service"

export function Form({ onSendComment }) {
    


    return (
        <form {...attrs}>
            <section>
                {/* <label htmlFor="email">Email</label> */}
                <input {...register('email')} />
            </section>
            <section>
                {/* <label htmlFor="message">Message</label> */}
                <input {...register('message', 'textarea')} />
            </section>
        </form>
    )
}