import React from 'react';

import kshieldjrimage from '../../static/images/kshieldjr.jpg';
import do11image from '../../static/images/do11.jpg';
import mlsaimage from '../../static/images/mlsa.png';
import bobimage from '../../static/images/bob.jpg';

const AchievementItem = () => {
    const items = [
        {
            title: '과학기술정보통신부 주최 K-Shield 주니어 합격',
            content:
                '18학번 이유림 학우님이 과학기술정보통신부가 주최하는 K-Shield Jr (케이쉴드 주니어) 프로그램에 합격했습니다.',
            imageurl: kshieldjrimage,
            link: 'http://kshieldjr.org/',
        },
        {
            title: '"Do11" 게임 스팀 출시 - SJR Teams',
            content:
                'PnP 학회원 성재록, 정민규, 조승현 외 2명으로 구성된 SJR Teams가 6개월 간 게임을 개발하고 Steam에 출시했습니다.',
            imageurl: do11image,
            link: 'https://store.steampowered.com/app/1697190/Do_11/?l=koreana',
        },
        {
            title: 'Microsoft Learn Student Ambassadors 합격',
            content:
                'Microsoft가 주관하는 Student Ambassadors 프로그램에 이지석 학우님이 합격했습니다.',
            imageurl: mlsaimage,
            link: 'https://studentambassadors.microsoft.com/',
        },
        {
            title: '차세대 보안리더 양성 프로그램 BEST of BEST 합격',
            content:
                '한국정보기술연구원이 주관하는 차세대 보안리더 양성 프로그램에 전승현 학우님이 합격했습니다.',
            imageurl: bobimage,
            link: 'https://www.kitribob.kr/',
        },
    ];

    const list = items.map((item, index) => (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
                href={item.link}
                className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
                <div className="relative pb-48 overflow-hidden">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={item.imageurl}
                        alt=""
                    />
                </div>
                <div className="p-4">
                    <h2 className="mt-2 mb-2 font-bold" key={index}>
                        {item.title}
                    </h2>
                    <p className="text-sm mb-2">{item.content}</p>
                </div>
            </a>
        </div>
    ));

    return list;
};

export default AchievementItem;
