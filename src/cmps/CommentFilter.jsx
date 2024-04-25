import { useFormRegister } from "../customHooks/useFormRegister"

export function CommentFilter(props) {
    const [register] = useFormRegister(props.filterBy, props.onChangeFilter)

    return (
        <form className="filter-form" >
            <input className="filter" {...register('txt', 'text')} placeholder="Filter" />
        </form>
    )


}