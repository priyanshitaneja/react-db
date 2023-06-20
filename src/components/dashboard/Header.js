import React from "react";
import { ReactComponent as BellIcon } from "../../assets/Vector.svg";
import { ReactComponent as UserImg } from "../../assets/user_img.svg";

const Header = () => {
    return (
        <div className="flex justify-between mb-10">
            <h1 className="text-2xl	font-bold">Dashboard</h1>
            <div className="flex items-center">
                <input className="mr-[10px]" />
                <BellIcon className="mr-2 ml-5" />
                <UserImg className="rounded-full ml-3" />
            </div>
        </div>
    );
}

export default Header;