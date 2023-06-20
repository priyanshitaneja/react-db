import React from "react";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard_icon.svg";
import { ReactComponent as ScheduleIcon } from "../../assets/schedule_icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/setting_icon.svg";
import { ReactComponent as TransactionIcon } from "../../assets/transaction_icon.svg";
import { ReactComponent as UserIcon } from "../../assets/user_icon.svg";

const SideBar = () => {
    return (
        <div className="relative w-1/5 flex flex-col bg-black text-white rounded-[30px] px-[50px] py-[60px]">
            <h1 className="text-4xl	font-bold mb-[60px]	">Board.</h1>
            <ul>
                <li className="flex mb-10 text-lg items-center font-bold">
                    <DashboardIcon className="mr-4" />
                    Dashboard
                </li>
                <li className="flex mb-10 text-lg items-center 	font-normal	">
                    <ScheduleIcon className="mr-4" />
                    Transactions
                </li>
                <li className="flex mb-10 text-lg items-center font-normal	">
                    <SettingIcon className="mr-4" />
                    Schedules
                </li>
                <li className="flex mb-10 text-lg items-center font-normal	">
                    <TransactionIcon className="mr-4" />
                    Users
                </li>
                <li className="flex mb-10 text-lg items-center font-normal	">
                    <UserIcon className="mr-4" />
                    Settings
                </li>
            </ul>
            <ul className="absolute bottom-10">
                <li className="mb-5 font-normal	">Help</li>
                <li className="mb-5 font-normal	">Contact Us</li>
            </ul>
        </div>
    )
}

export default SideBar;