'use client';

export default function Button({ styled, children }) {
    return (
        <h3 className={`w-full text-[#00A582] text-center font-bold text-[26px] p-3 ${styled}`}>{children}</h3>
    )
}
