"use client";

import { useState, useEffect } from "react";
import { TrendingUp, DollarSign, ShieldAlert, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ROISimulator() {
    const [savings, setSavings] = useState(14500000); // Start at ₹1.45 Cr
    const [preventionCount, setPreventionCount] = useState(128);
    const [activesimulation, setActiveSimulation] = useState<string | null>(null);

    // Simulation loop
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly trigger a "prevention event"
            if (Math.random() > 0.7) {
                const amount = Math.floor(Math.random() * 50000) + 10000;
                const type = Math.random() > 0.5 ? "Insider Trading" : "Pump & Dump";

                setSavings(prev => prev + amount);
                setPreventionCount(prev => prev + 1);
                setActiveSimulation(`Blocked ${type}: Saved ₹${amount.toLocaleString()}`);

                // Clear message after 2s
                setTimeout(() => setActiveSimulation(null), 2000);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-sidebar border border-border rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <TrendingUp size={120} />
            </div>

            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <LineChart className="text-accent" />
                Projected ROI Simulator
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Main Counter */}
                <div className="flex flex-col justify-center">
                    <div className="text-sm text-sidebar-foreground uppercase font-semibold mb-1">Total Fraud Value Prevented</div>
                    <div className="text-4xl md:text-5xl font-mono font-bold text-success tabular-nums">
                        ₹{savings.toLocaleString()}
                    </div>
                    <div className="text-xs text-sidebar-foreground mt-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                        Updating Live based on probabilistic threat models
                    </div>
                </div>

                {/* Event Log */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/50 h-32 flex flex-col justify-center items-center text-center relative">
                    <AnimatePresence mode="wait">
                        {activesimulation ? (
                            <motion.div
                                key={activesimulation}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="flex flex-col items-center gap-2"
                            >
                                <ShieldAlert className="text-accent" size={32} />
                                <span className="font-bold text-foreground">{activesimulation}</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="text-sidebar-foreground text-sm italic"
                            >
                                Scanning for financial anomalies...
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Breakdown Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border">
                <div>
                    <div className="text-xs text-sidebar-foreground">Alerts Processed</div>
                    <div className="text-xl font-bold text-foreground">{(preventionCount * 124).toLocaleString()}</div>
                </div>
                <div>
                    <div className="text-xs text-sidebar-foreground">Confirmed Frauds</div>
                    <div className="text-xl font-bold text-destructive">{preventionCount}</div>
                </div>
                <div>
                    <div className="text-xs text-sidebar-foreground">Efficiency Gain</div>
                    <div className="text-xl font-bold text-accent">+840%</div>
                </div>
            </div>
        </div>
    );
}
