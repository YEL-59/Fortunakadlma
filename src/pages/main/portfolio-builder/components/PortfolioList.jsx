import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PortfolioTile = ({ title, subtitle }) => (
    <Card className="overflow-hidden">
        <CardContent className="p-0">
            <div className="h-28 bg-gradient-to-br from-indigo-600 to-purple-600" />
            <div className="p-3">
                <div className="text-sm font-semibold text-slate-900">{title}</div>
                <div className="text-xs text-slate-500">{subtitle}</div>
            </div>
        </CardContent>
    </Card>
);

const PortfolioList = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-slate-900">My Portfolio</h3>
                <button className="text-sm text-blue-600">See all</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <PortfolioTile title="Financial Analysis Dashboard" subtitle="PowerBI • Dashboard" />
                <PortfolioTile title="Research Analysis Dashboard" subtitle="PowerBI • Dashboard" />
            </div>
        </div>
    );
};

export default PortfolioList;
