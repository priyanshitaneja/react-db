import React from "react";
import Card from "./Card";
import { ReactComponent as TotalLikes } from "../../assets/total_likes.svg";
import { ReactComponent as TotalTransactions } from "../../assets/total_transactions.svg";
import { ReactComponent as TotalUsers } from "../../assets/total_users.svg";
import { ReactComponent as TotalRevenue } from "../../assets/total_revenue.svg";

const CardRow = () => {
    return (
        <div className="flex justify-between mb-[40px] gap-x-9">
            <Card
                name={"Total Revenues"}
                quantity={"$2,129,430"}
                icon={<TotalRevenue />}
                bg={"#DDEFE0"}
            />
            <Card
                name={"Total Transactions"}
                quantity={"1,520"}
                icon={<TotalTransactions />}
                bg={"#F4ECDD"}
            />
            <Card
                name={"Total Likes"}
                quantity={"9,721"}
                icon={<TotalLikes />}
                bg={"#EFDADA"}
            />
            <Card
                name={"Total Users"}
                quantity={"892"}
                icon={<TotalUsers />}
                bg={"#DEE0EF"}
            />
        </div>
    )
}

export default CardRow;