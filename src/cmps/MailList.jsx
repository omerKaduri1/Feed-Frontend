export function MailList({ comments }) {
    return (
        <section className="comments-container">
            {comments?.map(comment => (
                <div className="comment flex">
                    <img src="" alt="" />
                    <div className="comment-details">
                        <div>{comment.to}</div>
                        <div>{comment.message}</div>
                    </div>
                </div>
            ))}
        </section>
    )
}