import React from 'react';

import achievements from './AchievementList';

const AchievementItem = () => {
    const list = achievements.map((achievement, index) => (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <a
                href={achievement.link}
                className="c-card block bg-white hover:shadow-md rounded-lg overflow-hidden border-gray-200 border"
            >
                <div className="relative pb-48 overflow-hidden border-gray-200 border-b-2">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={achievement.imageurl}
                        alt=""
                    />
                </div>
                <div className="p-4">
                    <h2 className="mt-2 mb-2 font-bold" key={index}>
                        {achievement.title}
                    </h2>
                    <p className="text-sm mb-2">{achievement.content}</p>
                </div>
            </a>
        </div>
    ));

    return list;
};

export default AchievementItem;
