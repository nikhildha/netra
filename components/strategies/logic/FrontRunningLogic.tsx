"use client";

import { motion } from "framer-motion";
import { ArrowRight, Database, Server, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

export function FrontRunningLogic() {
    const [phase, setPhase] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPhase((prev) => (prev + 1) % 4);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="p-4 bg-sidebar rounded-lg border border-border">
            <h4 className="text-sm font-bold mb-6 text-foreground">Logic Simulator: High-Frequency Front Running</h4>

            <div className="flex items-center justify-between gap-2 relative">

                {/* HNI Client */}
                <div className={`flex flex-col items-center gap-2 p-2 rounded border transition-all duration-500 ${phase === 0 ? "bg-accent/10 border-accent scale-105" : "border-border opacity-50"}`}>
                    <Smartphone size={20} className={phase === 0 ? "text-accent" : "text-sidebar-foreground"} />
                    <span className="text-xs font-bold">HNI Client</span>
                    <span className="text-[10px] text-accent">Buy 100k @ Mkt</span>
                </div>

                {/* The Front Runner */}
                <div className={`flex flex-col items-center gap-2 p-2 rounded border transition-all duration-500 ${phase === 1 ? "bg-destructive/10 border-destructive scale-110 z-10 shadow-lg shadow-destructive/20" : "border-border opacity-50"}`}>
                    <Server size={24} className={phase === 1 ? "text-destructive" : "text-sidebar-foreground"} />
                    <span className="text-xs font-bold text-destructive">HFT Predator</span>
                    {phase === 1 && <span className="text-[10px] text-destructive animate-pulse">DETECTS & JUMPS</span>}
                    {phase === 2 && <span className="text-[10px] text-success">PROFITS</span>}
                </div>

                {/* Exchange */}
                <div className={`flex flex-col items-center gap-2 p-2 rounded border transition-all duration-500 ${phase >= 2 ? "bg-success/10 border-success" : "border-border opacity-50"}`}>
                    <Database size={20} className={phase >= 2 ? "text-success" : "text-sidebar-foreground"} />
                    <span className="text-xs font-bold">Exchange</span>
                    <span className="text-[10px] text-sidebar-foreground">Price Impact</span>
                </div>

            </div>

            {/* Animation Flow */}
            <div className="mt-6 h-12 relative bg-sidebar-active/30 rounded-full overflow-hidden flex items-center px-4">
                <div className="absolute inset-x-0 h-[1px] bg-border top-1/2 -translate-y-1/2" />

                {/* HNI Order Packet */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full z-10"
                    animate={{
                        left: phase === 0 ? "10%" : phase === 1 ? "40%" : "90%",
                        opacity: phase === 3 ? 0 : 1
                    }}
                />

                {/* Predator Packet (Faster) */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-destructive rounded-sm z-20"
                    initial={{ left: "50%", opacity: 0 }}
                    animate={{
                        left: phase === 1 ? "50%" : phase === 2 ? "85%" : "50%",
                        opacity: phase === 1 || phase === 2 ? 1 : 0
                    }}
                />

                <div className="w-full text-center text-[10px] font-mono mt-8 text-sidebar-foreground">
                    {phase === 0 && "Step 1: Large HNI Order enters mempool..."}
                    {phase === 1 && "Step 2: Predator detects & inserts BUY order ahead..."}
                    {phase === 2 && "Step 3: Predator order executes first, raising price..."}
                    {phase === 3 && "Step 4: HNI order executes at higher price. Predator exits."}
                </div>
            </div>

        </div>
    );
}
