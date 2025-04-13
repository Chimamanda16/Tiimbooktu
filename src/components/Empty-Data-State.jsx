import React from "react";

export const EmptyDataState = ({img, title, description}) => {
    return (
        <div className="flex flex-col items-center">
            <img className="relative w-[312px]" src={`/assets/empty-images/${img}.svg`} alt={img} />
            <div className="flex flex-col gap-2 text-[#D9D9D9] items-center relative top-[-80px]">
                <h5 className="uppercase text-[26px] text-center font-chango">{title}</h5>
                <span className="text-sm capitalize font-cinzel text-center">{description}</span>
            </div>
        </div>
    )
}