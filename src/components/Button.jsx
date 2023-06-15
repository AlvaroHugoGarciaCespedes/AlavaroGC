'use client';

export default function Button({ theme, styled, click, children }) {


    switch (theme) {

        case 'Transparent':
            return <button
                type="submit"
                className="text-white bg-transparent border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-5 py-3 my-2 text-center"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'MiniPrimary':
            return <button
                type="submit"
                className="text-white bg-[#00A582] border border-gray-100 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-950 font-medium rounded-xl text-[16px] w-full px-5 py-1 my-2 text-center transition ease-in-out"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Primary':
            return <button
                type="submit"
                className="text-white bg-[#00A582] border border-gray-100 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-950 font-medium rounded-xl text-[16px] w-full px-3 py-3 my-2 text-center transition ease-in-out"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Secondary':
            return <button
                type="submit"
                className="text-white bg-gray-950 hover:bg-[#00A582] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-3 py-3 my-2 text-center"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'Success':
            return <button
                type="submit"
                className="text-white bg-emerald-400 hover:bg-[#00A582] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-3 py-3 text-center"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'Danger':
            return <button
                type="submit"
                className="text-white bg-red-600 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-[16px] w-full px-3 py-3 my-2 text-center"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        default:

    }
}

