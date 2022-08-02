import { useState } from "react"

export const useForm = (initailState) => {
    const [form, setForm] = useState(initailState)

    const onChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const clean = () => {
        setForm(initailState)
    }

    return {form, onChange, clean}
}