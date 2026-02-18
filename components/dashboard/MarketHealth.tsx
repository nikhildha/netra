"use client";

import { TrendingUp, TrendingDown, Activity, AlertTriangle, Clock } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const metrics = [
    {
        label: "Active Alerts",
        value: "142",
        change: "+12%",
        trend: "up",
        icon: AlertTriangle,
        color: "text-destructive",
    },
    {
        label: "Market Volatility (VIX)",
        value: "14.5",
        change: "-2.1%",
        trend: "down",
        icon: Activity,
        color: "text-warning",
    },
    {
        label: "System Latency",
        value: "42ms",
        change: "Stable",
        trend: "neutral",
        icon: Clock,
        color: "text-success",
    },
];

export function MarketHealth() {
    const [data, setData] = useState<{ time: string; value: number }[]>([]);
    const [currentValue, setCurrentValue] = useState(0);
    const [basePrice, setBasePrice] = useState(0);
    const [trend, setTrend] = useState<"up" | "down">("up");
    const [percentChange, setPercentChange] = useState(0);
    const [loading, setLoading] = useState(true);

    // 1. Fetch real base price every 10 seconds
    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const res = await fetch('/api/market-data');
                const json = await res.json();

                if (json.price) {
                    setBasePrice(json.price);
                    setPercentChange(json.changePercent);
                    setTrend(json.change >= 0 ? "up" : "down");

                    if (data.length === 0) {
                        // Initialize history if empty
                        const initialHistory = Array(20).fill(0).map((_, i) => ({
                            time: new Date(Date.now() - (20 - i) * 1000).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                            value: json.price
                        }));
                        setData(initialHistory);
                        setCurrentValue(json.price);
                    }
                    setLoading(false);
                }
            } catch (error) {
                console.error("Failed to fetch market data", error);
            }
        };

        fetchMarketData();
        const interval = setInterval(fetchMarketData, 10000); // Sync with real market every 10s
        return () => clearInterval(interval);
    }, []);

    // 2. Micro-fluctuations engine (runs every 800ms)
    useEffect(() => {
        if (loading || basePrice === 0) return;

        const interval = setInterval(() => {
            setData(prevData => {
                // Fluctuate around the base price
                const deviation = basePrice * 0.0005; // 0.05% max deviation
                const randomFluctuation = (Math.random() - 0.5) * 2 * deviation;
                let newValue = basePrice + randomFluctuation;

                // Ensure some momentum from previous value
                const lastValue = prevData[prevData.length - 1]?.value || basePrice;
                newValue = (newValue * 0.3) + (lastValue * 0.7); // Smoothing

                setCurrentValue(newValue);

                const newEntry = {
                    time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                    value: newValue
                };

                const newData = [...prevData, newEntry];
                if (newData.length > 30) newData.shift();
                return newData;
            });
        }, 800);

        return () => clearInterval(interval);
    }, [basePrice, loading]);

    if (loading) return <div className="h-40 flex items-center justify-center text-sidebar-foreground animate-pulse">Requesting Exchange Feed...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {/* Main Index Card */}
            <div className="bg-sidebar border border-border rounded-xl p-4 flex flex-col justify-between h-40 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                    </span>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-sidebar-foreground">NIFTY 50 LIVE</h3>
                    <div className="flex items-end gap-2 mt-1">
                        <span className={cn("text-2xl font-bold font-mono transition-colors duration-300", trend === "up" ? "text-success" : "text-destructive")}>
                            {currentValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className={cn("text-xs font-medium mb-1 flex items-center transition-colors", trend === "up" ? "text-success" : "text-destructive")}>
                            {trend === 'up' ? <TrendingUp size={12} className="mr-0.5" /> : <TrendingDown size={12} className="mr-0.5" />}
                            {Math.abs(percentChange).toFixed(2)}%
                        </span>
                    </div>
                </div>
                <div className="h-16 w-full -ml-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={trend === "up" ? "#22c55e" : "#ef4444"} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={trend === "up" ? "#22c55e" : "#ef4444"} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke={trend === "up" ? "#22c55e" : "#ef4444"}
                                fillOpacity={1}
                                fill="url(#colorValue)"
                                strokeWidth={2}
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Metrics Cards */}
            {metrics.map((metric) => (
                <div key={metric.label} className="bg-sidebar border border-border rounded-xl p-4 flex flex-col justify-center h-40 relative group hover:border-accent/40 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                    <div className="flex justify-between items-start mb-2 relative z-10">
                        <div className={cn("p-2 rounded-lg bg-background", metric.color)}>
                            <metric.icon size={20} />
                        </div>
                        <span className={cn(
                            "text-xs font-medium px-2 py-1 rounded-full bg-background border border-border/50",
                            metric.trend === 'up' ? "text-destructive" : metric.trend === 'down' ? "text-success" : "text-sidebar-foreground"
                        )}>
                            {metric.change}
                        </span>
                    </div>
                    <div className="mt-2 relative z-10">
                        <h3 className="text-sm font-medium text-sidebar-foreground">{metric.label}</h3>
                        <p className="text-2xl font-bold text-foreground mt-1 tracking-tight">{metric.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
