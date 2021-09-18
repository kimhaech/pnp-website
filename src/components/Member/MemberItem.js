import React from 'react';

import heoseongilprofile from '../../static/images/profile/heoseongil.png';
import kimtaejoonprofile from '../../static/images/profile/kimtaejoon.png';

const MemberItem = () => {
    const items = [
        {
            name: '허성일',
            classOf: '16학번',
            profileImage: heoseongilprofile,
            blogURL: 'https://heo-seongil.tistory.com/',
        },
        {
            name: '심윤보',
            classOf: '16학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: 'https://yunbo96.tistory.com/',
        },
        {
            name: '권택윤',
            classOf: '16학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: '',
        },
        {
            name: '김태준',
            classOf: '16학번',
            profileImage: kimtaejoonprofile,
            blogURL: '',
        },
        {
            name: '정동현',
            classOf: '16학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: 'https://hyun-c.tistory.com/',
        },
        {
            name: '김대엽',
            classOf: '18학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: '',
        },
        {
            name: '김소미',
            classOf: '18학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: 'https://m.blog.naver.com/som198',
        },
        {
            name: '제서윤',
            classOf: '18학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: 'https://jeseoyun.tistory.com/',
        },
        {
            name: '오시연',
            classOf: '18학번',
            profileImage:
                'https://flyinryanhawks.org/wp-content/uploads/2016/08/profile-placeholder.png',
            blogURL: 'https://blog.naver.com/osiyun0313',
        },
    ];

    const list = items.map((item, index) => (
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <a href={item.blogURL} target="_blank" rel="noopener noreferrer">
                <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={item.profileImage}
                    />
                    <div className="flex-grow">
                        <h2
                            className="text-gray-900 title-font font-medium"
                            key={index}
                        >
                            {item.name}
                        </h2>
                        <p className="text-gray-500">{item.classOf}</p>
                    </div>
                </div>
            </a>
        </div>
    ));

    return list;
};

export default MemberItem;
