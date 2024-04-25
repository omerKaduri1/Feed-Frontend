export function MailList({ comments }) {
    return (
        <section className="comments-container">
            {comments?.map((comment, idx) => (
                <div className="comment flex" key={idx}>
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