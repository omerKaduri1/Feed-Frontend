import { CommentPreview } from "./CommentPreview"

export function CommentList({ comments }) {
    return (
        <section className="comments-container">
            {comments?.map(comment => (
                <CommentPreview key={comment._id} comment={comment} />
            ))}
        </section>
    )
}