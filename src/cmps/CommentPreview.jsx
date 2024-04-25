import md5 from 'md5'

export function CommentPreview({ comment }) {
    const emailHash = md5(comment.to.trim().toLowerCase())
    const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`
    return <div className="comment flex">
        <img src={gravatarUrl} alt="Gravatar" />
        <div className="comment-details">
            <div>{comment.to}</div>
            <div>{comment.message}</div>
        </div>
    </div>
}