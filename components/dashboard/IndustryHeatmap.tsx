"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Factory, Laptop, Briefcase, Pill, Zap, Car, Home, ShoppingCart } from "lucide-react";

const industries = [
    { id: "bank", name: "NIFTY BANK", score: 88, change: "-0.45%", trend: "down", icon: Briefcase },
    { id: "it", name: "NIFTY IT", score: 96, change: "+1.20%", trend: "up", icon: Laptop },
    { id: "auto", name: "NIFTY AUTO", score: 92, change: "+0.30%", trend: "up", icon: Car },
    { id: "energy", name: "NIFTY ENERGY", score: 78, change: "-1.15%", trend: "down", Alert: "High Volatility", icon: Zap },
    { id: "pharma", name: "NIFTY PHARMA", score: 94, change: "+0.15%", trend: "up", icon: Pill },
    { id: "metal", name: "NIFTY METAL", score: 85, change: "-0.80%", trend: "down", icon: Factory },
    { id: "fmcg", name: "NIFTY FMCG", score: 98, change: "+0.05%", trend: "up", icon: ShoppingCart },
    { id: "realty", name: "NIFTY REALTY", score: 65, change: "-2.40%", trend: "down", Alert: "Speculative Activity", icon: Home },
];

export function IndustryHeatmap() {
    const getColor = (score: number) => {
        if (score >= 90) return "bg-emerald-500/10 border-emerald-500/50 text-emerald-400";
        if (score >= 75) return "bg-yellow-500/10 border-yellow-500/50 text-yellow-400";
        if (score >= 60) return "bg-orange-500/10 border-orange-500/50 text-orange-400";
        return "bg-destructive/10 border-destructive/50 text-destructive animate-pulse-slow";
    };

    return (
        <div className="bg-sidebar border border-border rounded-xl p-6">
            <div className="mb-6">
                <h3 className="text-lg font-bold text-foreground">Sectoral Integrity Map</h3>
                <p className="text-xs text-sidebar-foreground">Industry-wide Surveillance Scores</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {industries.map((ind) => (
                    <motion.div
                        key={ind.id}
                        whileHover={{ scale: 1.05 }}
                        className={cn(
                            "p-4 rounded-lg border flex flex-col justify-between h-28 relative overflow-hidden group transition-all",
                            getColor(ind.score)
                        )}
                    >
                        <div className="flex justify-between items-start z-10">
                            <span className="text-[10px] font-bold uppercase tracking-wider">{ind.name}</span>
                            <ind.icon size={16} className="opacity-70" />
                        </div>

                        <div className="z-10 mt-2">
                            <div className="text-2xl font-mono font-bold">{ind.score}</div>
                            <div className="flex justify-between items-end mt-1">
                                <span className={cn("text-xs font-medium", ind.trend === 'up' ? 'text-success' : 'text-screen-red')}>
                                    {ind.change}
                                </span>
                                {ind.Alert && (
                                    <span className="text-[9px] bg-background/50 px-1 rounded border border-current">{ind.Alert}</span>
                                )}
                            </div>
                        </div>

                        {/* Background Texture */}
                        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-current to-transparent" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
