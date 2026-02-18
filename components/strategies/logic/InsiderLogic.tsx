"use client";

import { motion } from "framer-motion";
import { User, FileText, TrendingUp, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

export function InsiderLogic() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const steps = [
        {
            label: "UPSI Event",
            desc: "Private Board Meeting: Merger Approved",
            icon: FileText,
            color: "bg-sidebar-foreground/20 text-sidebar-foreground",
            time: "T-5 Days"
        },
        {
            label: "Suspicious Trade",
            desc: "Connected Entity 'Relative X' buys 50k qty",
            icon: User,
            color: "bg-destructive/20 text-destructive border-destructive",
            time: "T-2 Days"
        },
        {
            label: "Public Info",
            desc: "Merger Announced to Exchange",
            icon: TrendingUp,
            color: "bg-success/20 text-success",
            time: "T-0 (Today)"
        },
        {
            label: "Detection Alert",
            desc: "System flags correlation: Trade precedes Info",
            icon: AlertTriangle,
            color: "bg-warning/20 text-warning animate-pulse",
            time: "T+1 Day"
        },
    ];

    return (
        <div className="p-4 bg-sidebar rounded-lg border border-border">
            <h4 className="text-sm font-bold mb-4 text-foreground">Logic Simulator: Insider Trading Pattern</h4>
            <div className="relative flex justify-between items-start mt-8 mx-4">
                {/* Connection Line */}
                <div className="absolute top-4 left-0 w-full h-0.5 bg-border -z-10">
                    <motion.div
                        className="h-full bg-accent"
                        initial={{ width: "0%" }}
                        animate={{ width: `${(step / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                {steps.map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 w-1/4 relative">
                        <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 z-10 transition-colors duration-500 ${i <= step ? s.color + " border-current" : "bg-sidebar border-border text-border"}`}
                            initial={{ scale: 0.8, opacity: 0.5 }}
                            animate={{
                                scale: i === step ? 1.2 : 1,
                                opacity: i <= step ? 1 : 0.5
                            }}
                        >
                            <s.icon size={14} />
                        </motion.div>

                        <div className={`text-center transition-opacity duration-500 ${i <= step ? "opacity-100" : "opacity-30"}`}>
                            <div className="text-[10px] font-mono text-sidebar-foreground mb-1">{s.time}</div>
                            <div className="text-xs font-bold text-foreground">{s.label}</div>
                            <div className="text-[10px] text-sidebar-foreground/80 leading-tight mt-1 px-1">{s.desc}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-3 bg-secondary/20 rounded border border-secondary/30 text-xs text-secondary-foreground font-mono">
                &gt; NETWORK SCAN: Detecting link between "Board Member A" and "Relative X"... LINK FOUND (Confidence: 98%)
            </div>
        </div>
    );
}
