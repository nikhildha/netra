"use client";

import { AlertTriangle, ChevronRight, User, ShieldAlert, Zap, Lock, Eye, Activity, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

// Extensive list of realistic surveillance scenarios
const RAW_ALERTS = [
    { type: "Spoofing", symbol: "ADANIENT", severity: "high", user: "Algo_HFT_07" },
    { type: "Wash Trading", symbol: "PENNY_STK", severity: "critical", user: "Client_X99" },
    { type: "Layering", symbol: "RELIANCE", severity: "medium", user: "Prop_Desk_A" },
    { type: "Momentum Ignition", symbol: "BANKNIFTY", severity: "high", user: "Unknown_FII" },
    { type: "Stub Quote", symbol: "ILLIQUID_OPT", severity: "low", user: "Retail_Bot" },
    { type: "Marking the Close", symbol: "INFY", severity: "medium", user: "DII_Fund_B" },
    { type: "Circular Trading", symbol: "SME_STK_01", severity: "critical", user: "Ring_Op_12" },
    { type: "Front Running", symbol: "L&T", severity: "high", user: "Dealer_42" },
    { type: "SMP Bypass", symbol: "NIFTY_FUT", severity: "medium", user: "HFT_Sigma" },
    { type: "Quote Stuffing", symbol: "TCS", severity: "low", user: "Algo_Relay_2" },
    { type: "Insider Trading", symbol: "MERGER_CO", severity: "critical", user: "Insider_X" },
    { type: "Dark Pool Leak", symbol: "BLOCK_DEAL", severity: "high", user: "Inst_Desk" },
    { type: "P-Note Partition", symbol: "OFFSHORE", severity: "medium", user: "FPI_Route" },
    { type: "Gamma Squeeze", symbol: "CE_OPTION", severity: "high", user: "Retail_Herd" },
    { type: "Bear Raid", symbol: "MIDCAP_IT", severity: "critical", user: "Short_Cartel" },
    { type: "Ping Warning", symbol: "NSE_COLO", severity: "low", user: "HFT_Alpha" },
    { type: "Order Book Imbalance", symbol: "SBIN", severity: "medium", user: "Mkt_Maker" },
    { type: "Cross Market Arb", symbol: "GIFT_NIFTY", severity: "low", user: "Arb_Bot_01" },
    { type: "Pump & Dump", symbol: "SADHNA", severity: "critical", user: "Telegram_Grp" },
    { type: "Synchro-Trading", symbol: "Z_CAT_STK", severity: "high", user: "Operator_Z" },
    { type: "Fat Finger", symbol: "CRUDEOIL", severity: "medium", user: "Manual_Trader" },
    { type: "Stop Hunting", symbol: "GOLD_FUT", severity: "high", user: "Algo_Predator" },
    { type: "Pre-Arrange Trade", symbol: "BLOCK_WIN", severity: "critical", user: "Desk_XY" },
    { type: "Structuring", symbol: "CASH_EQ", severity: "medium", user: "Client_Split" },
    { type: "Ghost Prints", symbol: "DARK_LIT", severity: "high", user: "System_Err" }
];

const generateInitialAlerts = () => {
    return Array.from({ length: 15 }).map((_, i) => {
        const template = RAW_ALERTS[i % RAW_ALERTS.length];
        return {
            id: `AL-8${900 - i}`,
            time: new Date(Date.now() - i * 5000).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            ...template,
            confidence: Math.floor(Math.random() * 20) + 80
        };
    });
};

export function LiveAlertsFeed() {
    const [alerts, setAlerts] = useState(generateInitialAlerts());
    const scrollRef = useRef<HTMLDivElement>(null);

    // Simulate incoming alerts
    useEffect(() => {
        const interval = setInterval(() => {
            const template = RAW_ALERTS[Math.floor(Math.random() * RAW_ALERTS.length)];

            const newAlert = {
                id: `AL-${Math.floor(Math.random() * 9000) + 1000}`,
                time: new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                type: template.type,
                symbol: template.symbol,
                severity: template.severity,
                user: template.user,
                confidence: Math.floor(Math.random() * 20) + 80,
            };

            setAlerts(prev => [newAlert, ...prev.slice(0, 49)]); // Keep last 50
        }, 2000); // New alert every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-sidebar border border-border rounded-xl h-full flex flex-col overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-border flex justify-between items-center bg-sidebar/50 backdrop-blur-sm z-10">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <ShieldAlert size={18} className="text-destructive animate-pulse" />
                    Live Surveillance Feed
                </h3>
                <div className="flex gap-2">
                    <span className="text-[10px] bg-background border border-border px-2 py-1 rounded-full text-sidebar-foreground font-mono flex items-center gap-1">
                        <Globe size={10} /> NSE/BSE
                    </span>
                    <span className="text-[10px] bg-destructive/10 text-destructive px-2 py-1 rounded-full border border-destructive/20 font-mono font-bold">
                        {alerts.length} Active
                    </span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent" ref={scrollRef}>
                <div className="divide-y divide-border/50">
                    {alerts.map((alert, i) => (
                        <div
                            key={`${alert.id}-${i}`}
                            className={cn(
                                "p-3 hover:bg-sidebar-active/30 transition-all duration-300 flex items-center justify-between group cursor-pointer border-l-[3px]",
                                // Animation for new items
                                i === 0 ? "animate-in slide-in-from-left-2 bg-sidebar-active/10" : "",
                                alert.severity === 'critical' ? 'border-l-destructive bg-destructive/5' :
                                    alert.severity === 'high' ? 'border-l-warning' :
                                        alert.severity === 'medium' ? 'border-l-accent' : 'border-l-sidebar-foreground/30'
                            )}
                        >
                            <div className="flex items-start gap-3">
                                <div className={cn("mt-1 p-1.5 rounded bg-sidebar border border-border shrink-0",
                                    alert.severity === 'critical' ? 'text-destructive shadow-[0_0_10px_rgba(239,68,68,0.2)]' : 'text-sidebar-foreground'
                                )}>
                                    {alert.severity === 'critical' ? <Zap size={14} /> : <Eye size={14} />}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <span className="text-sm font-bold text-foreground">{alert.type}</span>
                                        <span className="text-[10px] bg-sidebar border border-border px-1.5 py-0.5 rounded text-sidebar-foreground font-mono font-bold tracking-tight">{alert.symbol}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[10px] text-sidebar-foreground mt-1.5 font-mono">
                                        <span className="text-foreground/50">{alert.id}</span>
                                        <span>•</span>
                                        <span>{alert.time}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1 text-accent bg-accent/5 px-1 rounded">
                                            <Lock size={8} /> {alert.user}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="text-right pl-2">
                                <div className={cn("text-lg font-bold font-mono leading-none tracking-tighter",
                                    alert.confidence > 90 ? "text-destructive" : "text-warning"
                                )}>
                                    {alert.confidence}%
                                </div>
                                <div className="text-[8px] text-sidebar-foreground uppercase tracking-wider mt-1 font-bold opacity-70">Conf.</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
