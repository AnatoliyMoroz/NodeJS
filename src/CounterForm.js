import React from 'react'

export default function (props) {
    return (
            <form onSubmit={ e => e.preventDefault() }>
                <button onClick={ props.onChange }>Click</button>
            </form>
    )
}