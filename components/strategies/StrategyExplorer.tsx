"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle, CheckCircle2, Search, Zap, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { InsiderLogic } from "./logic/InsiderLogic";
import { FrontRunningLogic } from "./logic/FrontRunningLogic";
import { PumpDumpLogic } from "./logic/PumpDumpLogic";
import { SpoofingLogic } from "./logic/SpoofingLogic";

const strategies = [
    {
        id: "circular",
        name: "Circular Trading Rings",
        severity: "High",
        description: "A group of entities trading among themselves to create artificial volume and price discovery without transfer of beneficial ownership.",
        detection: "Graph processing algorithms (Connected Components) on the transaction network to identify closed loops of volume flow within T+0.",
        technical: "NetworkX / Neo4j Graph Algorithms on daily trade logs.",
        caseStudy: "SEBI Order vs. 'Sanco Industries' (2023): Discovered a group of 14 connected entities executing synchronized reversals to hike volume by 400%.",
        Simulator: PumpDumpLogic
    },
    {
        id: "pump_dump",
        name: "Pump & Dump (SMS/Telegram)",
        severity: "Critical",
        description: "Artificially inflating a micro-cap stock price through misleading positive statements (the 'Pump') to sell the cheaply purchased stock at a higher price (the 'Dump').",
        detection: "NLP on social media feeds correlated with abnormal price volume surges. Sudden spike in ' Aggressiveness Index' of buy orders.",
        technical: "BERT-based Sentiment Analysis + Anomaly Detection on Price/Volume series.",
        caseStudy: "SEBI Order vs. 'Sadhna Broadcast' (2023): YouTube creators used misleading videos to pump stock price, offloading shares worth ₹41 Cr on retail.",
        Simulator: InsiderLogic // Using Insider Logic as proxy for identifying the "Insider/Operator" timeline
    },
    {
        id: "layering",
        name: "Layering & Spoofing",
        severity: "Medium",
        description: "Placing multiple limit orders on one side of the book to create a false impression of depth, then cancelling them before execution.",
        detection: "Order-to-Trade Ratio (OTR) analysis. Tracking 'Fleeting Orders' (orders with duration < 500ms) and their impact on the spread.",
        technical: "Complex Event Processing (CEP) on TBT data stream.",
        caseStudy: "SEBI Order in 'Illiquid Stock Options' (2022): Coordinated reversal trades to create artificial loss/profit booking for tax evasion.",
        Simulator: SpoofingLogic
    },
    {
        id: "marking_close",
        name: "Marking the Close",
        severity: "High",
        description: "Buying or selling a security near the close of the trading day to alter the closing price.",
        detection: "Volume concentration analysis in the last 30 minutes. Deviation of Last Traded Price (LTP) from VWAP in final minutes.",
        technical: "Statistical Deviation checks on 1-min aggregated candles.",
        caseStudy: "Global Reference: 'Jane Street' styled index arb where settlement prices are manipulated to benefit large option expiry positions.",
        Simulator: FrontRunningLogic // Using FrontRunning logic as proxy for "Predatory" behavior around events
    },
];

export function StrategyExplorer() {
    const [expanded, setExpanded] = useState<string | null>("circular");

    return (
        <div className="space-y-4">
            {strategies.map((strategy) => (
                <div key={strategy.id} className="bg-sidebar border border-border rounded-xl overflow-hidden transition-all duration-300">
                    <button
                        onClick={() => setExpanded(expanded === strategy.id ? null : strategy.id)}
                        className="w-full flex items-center justify-between p-4 bg-sidebar hover:bg-sidebar-active/50 transition-colors"
                    >
                        <div className="flex items-center gap-4">
                            <div className={cn(
                                "w-2 h-12 rounded-full",
                                strategy.severity === "Critical" ? "bg-destructive" : strategy.severity === "High" ? "bg-warning" : "bg-accent"
                            )} />
                            <div className="text-left">
                                <h3 className="font-bold text-lg text-foreground">{strategy.name}</h3>
                                <p className="text-xs text-sidebar-foreground uppercase tracking-wider">{strategy.severity} Severity</p>
                            </div>
                        </div>
                        {expanded === strategy.id ? <ChevronUp className="text-sidebar-foreground" /> : <ChevronDown className="text-sidebar-foreground" />}
                    </button>

                    {expanded === strategy.id && (
                        <div className="p-6 border-t border-border bg-background/50 animate-in slide-in-from-top-2 duration-200">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                                        <AlertCircle size={16} className="text-destructive" />
                                        Mechanism of Action
                                    </h4>
                                    <p className="text-sm text-sidebar-foreground leading-relaxed mb-4">
                                        {strategy.description}
                                    </p>

                                    <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-6">
                                        <h5 className="text-xs font-bold text-accent uppercase mb-1">Real-World Case Study</h5>
                                        <p className="text-xs text-foreground/80 italic">"{strategy.caseStudy}"</p>
                                    </div>

                                    {/* Render Simulator if available */}
                                    {strategy.Simulator && (
                                        <div className="mt-4">
                                            <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2 text-sm">
                                                <PlayCircle size={14} className="text-success" />
                                                Live Logic Simulation
                                            </h4>
                                            <strategy.Simulator />
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 font-semibold text-foreground mb-2">
                                        <CheckCircle2 size={16} className="text-success" />
                                        NETRA Detection Logic
                                    </h4>
                                    <div className="bg-sidebar-active/30 rounded-lg p-3 border border-border">
                                        <p className="text-sm text-foreground/90 mb-2">{strategy.detection}</p>
                                        <div className="flex items-center gap-2 text-xs text-accent mt-2 pt-2 border-t border-border/50">
                                            <Search size={12} />
                                            Technique: {strategy.technical}
                                        </div>
                                    </div>

                                    <div className="mt-4 p-4 border border-dashed border-border rounded-lg flex items-center justify-center text-xs text-sidebar-foreground bg-sidebar/50">
                                        Scan Engine Status: <span className="text-success font-bold ml-2 flex items-center gap-1"><Zap size={10} fill="currentColor" /> ACTIVE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
