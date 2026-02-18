"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
// Import removed
import { useState } from "react";

// Mock Data representing Sectoral Integrity
const sectors = [
    {
        name: "Banking & Finance",
        stocks: [
            { symbol: "HDFCBANK", score: 98, change: "+0.5%", risk: "Low" },
            { symbol: "ICICIBANK", score: 95, change: "+1.2%", risk: "Low" },
            { symbol: "SBIN", score: 88, change: "-0.4%", risk: "Medium" },
            { symbol: "AXISBANK", score: 92, change: "+0.8%", risk: "Low" },
            { symbol: "KOTAKBANK", score: 75, change: "-2.5%", risk: "High", alert: "Volume Spike" },
        ]
    },
    {
        name: "IT Services",
        stocks: [
            { symbol: "TCS", score: 99, change: "+0.2%", risk: "Low" },
            { symbol: "INFY", score: 96, change: "-0.1%", risk: "Low" },
            { symbol: "WIPRO", score: 85, change: "-1.5%", risk: "Medium" },
            { symbol: "HCLTECH", score: 94, change: "+0.6%", risk: "Low" },
        ]
    },
    {
        name: "Energy & Infrastructure",
        stocks: [
            { symbol: "RELIANCE", score: 97, change: "+1.5%", risk: "Low" },
            { symbol: "ADANIENT", score: 45, change: "-5.4%", risk: "Critical", alert: "Shell Company Link" },
            { symbol: "ONGC", score: 90, change: "+0.9%", risk: "Low" },
            { symbol: "POWERGRID", score: 93, change: "+0.4%", risk: "Low" },
            { symbol: "NTPC", score: 91, change: "+0.3%", risk: "Low" },
        ]
    },
    {
        name: "Consumer Goods",
        stocks: [
            { symbol: "ITC", score: 96, change: "+0.1%", risk: "Low" },
            { symbol: "HUL", score: 95, change: "-0.2%", risk: "Low" },
            { symbol: "TITAN", score: 82, change: "-1.8%", risk: "Medium" },
        ]
    }
];

export function MarketHeatmap() {
    const [hoveredStock, setHoveredStock] = useState<string | null>(null);

    const getColor = (score: number) => {
        if (score >= 90) return "bg-emerald-500/20 border-emerald-500/50 text-emerald-400";
        if (score >= 70) return "bg-yellow-500/20 border-yellow-500/50 text-yellow-400";
        if (score >= 50) return "bg-orange-500/20 border-orange-500/50 text-orange-400";
        return "bg-red-500/20 border-red-500/50 text-red-500 animate-pulse";
    };

    return (
        <div className="bg-sidebar border border-border rounded-xl p-6 overflow-hidden relative">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-foreground">Market Integrity Heatmap</h3>
                    <p className="text-xs text-sidebar-foreground">Real-time Manipulation Risk Assessment (Score 0-100)</p>
                </div>
                <div className="flex gap-2 text-xs">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-emerald-500/20 border border-emerald-500/50 rounded"></div> Safe</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 bg-red-500/20 border border-red-500/50 rounded"></div> Critical</div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {sectors.map((sector) => (
                    <div key={sector.name} className="space-y-2">
                        <h4 className="text-xs font-semibold text-sidebar-foreground uppercase tracking-wider">{sector.name}</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {sector.stocks.map((stock) => (
                                <motion.div
                                    key={stock.symbol}
                                    whileHover={{ scale: 1.05 }}
                                    onHoverStart={() => setHoveredStock(stock.symbol)}
                                    onHoverEnd={() => setHoveredStock(null)}
                                    className={cn(
                                        "relative p-3 rounded-lg border flex flex-col items-center justify-center cursor-help transition-all duration-300",
                                        getColor(stock.score),
                                        hoveredStock && hoveredStock !== stock.symbol ? "opacity-50 blur-[1px]" : "opacity-100"
                                    )}
                                >
                                    <span className="text-xs font-bold">{stock.symbol}</span>
                                    <span className="text-lg font-mono font-bold">{stock.score}</span>
                                    <span className="text-[10px] opacity-80">{stock.change}</span>

                                    {stock.alert && (
                                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full animate-ping" />
                                    )}

                                    {/* Tooltip-like overlay on hover (simple implementation) */}
                                    {hoveredStock === stock.symbol && (
                                        <div className="absolute inset-0 bg-background/95 backdrop-blur flex flex-col items-center justify-center text-center p-1 rounded-lg z-10 border border-border">
                                            <span className="text-[10px] text-sidebar-foreground">Risk Level</span>
                                            <span className={cn("text-xs font-bold uppercase",
                                                stock.risk === 'Critical' ? 'text-destructive' : 'text-foreground'
                                            )}>{stock.risk}</span>
                                            {stock.alert && <span className="text-[9px] text-destructive font-mono mt-1">{stock.alert}</span>}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
