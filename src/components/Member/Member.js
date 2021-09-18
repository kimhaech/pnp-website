import React from 'react';

import MemberItem from './MemberItem';

function Member() {
    return (
        <section
            id="member"
            className="text-gray-700 body-font border-t border-b border-gray-200"
        >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                        MEMBERS
                    </h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        구성원
                    </h1>
                </div>
                <div className="flex flex-wrap -m-2">
                    <MemberItem />
                </div>
                <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    더보기
                    <svg
                        class="w-6 h-6 mt-0.5 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                    </svg>
                </button>
            </div>
        </section>
    );
}

export default Member;
