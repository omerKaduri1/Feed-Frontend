import { useFormRegister } from "../customHooks/useFormRegister"

export function CommentFilter(props) {
    const [register] = useFormRegister(props.filterBy, props.onChangeFilter)
    const attrs = { className: 'comment-filter' }

    return (
        <form {...attrs}>
            <input className="filter" {...register('txt', 'text')} placeholder="Filter" />
        </form>
    )


}