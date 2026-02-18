"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { cn } from "@/lib/utils";

const capexData = [
    { name: "Data Licensing (TBT)", value: 35, color: "#3b82f6" },
    { name: "HPC Infrastructure", value: 40, color: "#8b5cf6" },
    { name: "AI R&D", value: 15, color: "#ec4899" },
    { name: "Security (SOC)", value: 10, color: "#10b981" },
];

const opexData = [
    { year: "Year 1", maintenance: 12, staffing: 18, cloud: 10 },
    { year: "Year 2", maintenance: 15, staffing: 22, cloud: 14 },
    { year: "Year 3", maintenance: 18, staffing: 25, cloud: 18 },
];

export function BudgetCharts() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-sidebar border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">Initial CAPEX Breakdown</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={capexData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {capexData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#181b25', borderColor: '#2a2e3b', color: '#ededed' }}
                                itemStyle={{ color: '#ededed' }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-4 text-center text-sm text-sidebar-foreground">
                    Total Estimated CAPEX: <span className="text-foreground font-bold">₹30 Cr</span>
                </div>
            </div>

            <div className="bg-sidebar border border-border rounded-xl p-6">
                <h3 className="font-bold text-foreground mb-4">3-Year OPEX Projection (₹ Cr)</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={opexData}>
                            <XAxis dataKey="year" stroke="#a0aebf" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="#a0aebf" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                            <Tooltip
                                cursor={{ fill: '#2a2e3b', opacity: 0.3 }}
                                contentStyle={{ backgroundColor: '#181b25', borderColor: '#2a2e3b', color: '#ededed' }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                            <Bar dataKey="maintenance" stackId="a" fill="#3b82f6" name="Maintenance" radius={[0, 0, 4, 4]} />
                            <Bar dataKey="staffing" stackId="a" fill="#8b5cf6" name="Staffing" />
                            <Bar dataKey="cloud" stackId="a" fill="#10b981" name="Cloud Infra" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
