import React from 'react';

const AchievementItem = ({ itemsToRender, clickItems, clickedObject }) => {
    const list = itemsToRender.map((achievement, index) => (
        <div
            className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4"
            onClick={() => {
                clickItems(true);
                clickedObject(itemsToRender[index]);
            }}
            style={{
                cursor: 'pointer',
            }}
        >
            <a
                className="c-card block bg-white hover:shadow-md rounded-lg overflow-hidden border-gray-200 border"
                key={index}
            >
                <div className="relative pb-48 overflow-hidden border-gray-200 border-b-2">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={achievement.imageurl}
                        alt="achievement image"
                        key={index}
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-gray-900 title-font font-medium" key={index}>
                        {achievement.title}
                    </h2>
                </div>
            </a>
        </div>
    ));

    return list;
};

export default AchievementItem;
