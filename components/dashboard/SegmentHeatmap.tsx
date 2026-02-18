"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, DollarSign, Activity, Zap } from "lucide-react";

const segments = [
    {
        id: "equity",
        name: "Equity (Cash)",
        score: 92,
        volume: "₹85,432 Cr",
        risk: "Low",
        alerts: 12,
        icon: TrendingUp
    },
    {
        id: "fno",
        name: "Derivatives (F&O)",
        score: 68,
        volume: "₹2,45,120 Cr",
        risk: "High",
        alerts: 89,
        icon: Zap
    },
    {
        id: "currency",
        name: "Currency Derivatives",
        score: 88,
        volume: "₹18,500 Cr",
        risk: "Medium",
        alerts: 24,
        icon: DollarSign
    },
    {
        id: "commodity",
        name: "Commodities",
        score: 95,
        volume: "₹12,200 Cr",
        risk: "Low",
        alerts: 5,
        icon: Activity
    },
];

export function SegmentHeatmap() {
    const getColor = (score: number) => {
        if (score >= 90) return "bg-emerald-500/10 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/20";
        if (score >= 70) return "bg-yellow-500/10 border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/20";
        return "bg-red-500/10 border-red-500/50 text-red-400 hover:bg-red-500/20 animate-pulse-slow"; // Custom slow pulse
    };

    return (
        <div className="bg-sidebar border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-bold text-foreground">Segment Risk Monitor</h3>
                    <p className="text-xs text-sidebar-foreground">Cross-market Integrity Scores</p>
                </div>
                <AlertTriangle size={16} className="text-sidebar-foreground/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
                {segments.map((segment) => (
                    <motion.div
                        key={segment.id}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "p-4 rounded-xl border flex flex-col justify-between h-32 cursor-pointer transition-colors relative overflow-hidden group",
                            getColor(segment.score)
                        )}
                    >
                        {/* Background Icon Watermark */}
                        <segment.icon className="absolute -right-2 -bottom-2 text-current opacity-10 w-24 h-24 rotate-[-15deg] group-hover:scale-110 transition-transform" />

                        <div className="flex justify-between items-start z-10">
                            <span className="text-xs font-bold uppercase tracking-wider opacity-80">{segment.name}</span>
                            {segment.risk === "High" && (
                                <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded border border-red-500/50 animate-pulse">CRITICAL</span>
                            )}
                        </div>

                        <div className="z-10">
                            <div className="flex items-end gap-2">
                                <span className="text-3xl font-mono font-bold leading-none">{segment.score}</span>
                                <span className="text-xs opacity-70 mb-1">/100</span>
                            </div>
                            <div className="mt-2 flex justify-between items-end text-[10px] opacity-80 font-mono">
                                <span>Vol: {segment.volume}</span>
                                <span>Alerts: {segment.alerts}</span>
                            </div>
                        </div>

                        {/* Progress Bar background */}
                        <div className="absolute bottom-0 left-0 h-1 bg-current opacity-30" style={{ width: `${segment.score}%` }} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
