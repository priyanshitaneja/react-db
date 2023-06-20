import React from "react";

const Card = ({icon, name, quantity, bg}) => {
    return (
        <div className="rounded-[20px] py-5 px-[25px] basis-0 grow" style={{backgroundColor: bg}}>
            <div className="flex justify-end">
                {icon}
            </div>
            <div>
                <span className="text-sm mb-[5px]">{name}</span>
                <br />
                <span className="text-2xl font-bold	">{quantity}</span>
            </div>
        </div>
    )
}

export default Card;