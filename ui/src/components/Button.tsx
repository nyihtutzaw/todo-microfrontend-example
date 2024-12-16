import React from 'react'


function Button({ props, children }) {
    return (
        <button {...props} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full">{children}</button>
    )
}

export default Button