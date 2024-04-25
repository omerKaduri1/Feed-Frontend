import { useFormRegister } from "../customHooks/useFormRegister"

export function CommentFilter(props) {
    const [register] = useFormRegister(props.filterBy, props.onChangeFilter)
    const attrs = { className: 'robot-filter' }
    return (
        <form {...attrs}>
            <input {...register('txt', 'text')} />
        </form>
    )


}