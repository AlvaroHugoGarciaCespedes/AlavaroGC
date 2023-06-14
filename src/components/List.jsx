'use client';

export default function Button({ styled, children }) {
    return (
        <li className={`block mb-2 text-sm text-left font-light text-gray-900 shadow-[0px_0px_3px_0.1px_#00A582] px-5 ${styled}`}>{children}</li>
    )
}   