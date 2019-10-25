import React, { useState } from 'react'
import { ErrorBoundary } from './ErrorBoundary';

const Label = ({ label, value }) => <label >{label}: {value}</label>

const useInput = initialState => {
    const [value, setValue] = useState(initialState)
    const handleChange = val => setValue(val)
    return [value, handleChange]
}

const Input = ({ onChange, value = "" }) => {
    const handleChange = e => {
        e.preventDefault()
        onChange(e.target.value)
    }
    return <input onChange={handleChange} value={value} />
}

export const App = () => {
    const [displayName, handleChange] = useInput()
    return (
        <ErrorBoundary>
            <h1>Example App</h1>
            <Label label={"Display Name"} value={displayName || 'N/A'} /><br />
            <Input value={displayName} onChange={handleChange} />
        </ErrorBoundary >
    )
}

export default App