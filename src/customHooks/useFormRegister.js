import { useState } from "react";
import { useEffectUpdate } from "./useEffectUpdate";

export function useFormRegister(initialState, cb) {

    const [fields, setFields] = useState(initialState)

    useEffectUpdate(() => {
        cb?.(fields)
    }, [fields])


    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = (+value || '')
                break;
            case 'checkbox':
                value = target.checked
            default:
                break;
        }

        setFields(prevFields => ({
            ...prevFields,
            [field]: value
        }))
    }


    const register = (field, type = 'text') => {
        return {
            name: field,
            id: field,
            onChange: handleChange,
            type,
            value: fields[field]
        }
    }

    return [register, setFields]
}