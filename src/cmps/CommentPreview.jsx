import md5 from 'md5'

export function CommentPreview({ comment }) {
    const emailHash = md5(comment.to.trim().toLowerCase())
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`

    return <div className="flex justify-center comment">
        <img src={gravatarUrl} alt="Gravatar" />
        <div className="flex column justify-center comment-details">
            <div className="to-section">{comment.to}</div>
            <div className="message">{comment.message}</div>
        </div>
    </div>
}