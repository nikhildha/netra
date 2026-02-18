"use client";

import { motion } from "framer-motion";

const scrips = [
    { symbol: "RELIANCE", status: "OK", price: "2980.50" },
    { symbol: "TCS", status: "OK", price: "4120.10" },
    { symbol: "HDFCBANK", status: "SCANNING", price: "1450.00" },
    { symbol: "INFY", status: "OK", price: "1600.45" },
    { symbol: "ADANIENT", status: "ALERT", price: "3200.00" },
    { symbol: "ICICIBANK", status: "OK", price: "1080.20" },
    { symbol: "SBIN", status: "OK", price: "750.60" },
    { symbol: "BHARTIARTL", status: "SCANNING", price: "1120.75" },
    { symbol: "ITC", status: "OK", price: "430.20" },
    { symbol: "L&T", status: "OK", price: "3600.90" },
    { symbol: "KOTAKBANK", status: "ALERT", price: "1780.30" },
    { symbol: "AXISBANK", status: "OK", price: "1050.40" },
];

export function TickerTape() {
    return (
        <div className="w-full bg-sidebar border-b border-border overflow-hidden py-2 flex relative z-20">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

            <motion.div
                className="flex whitespace-nowrap gap-12"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
                {[...scrips, ...scrips].map((scrip, i) => ( // Duplicate for seamless loop
                    <div key={i} className="flex items-center gap-3 font-mono text-xs">
                        <span className="text-foreground font-bold">{scrip.symbol}</span>
                        <span className="text-sidebar-foreground">{scrip.price}</span>
                        <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${scrip.status === "OK" ? "bg-success/10 text-success" :
                                scrip.status === "ALERT" ? "bg-destructive/10 text-destructive animate-pulse" :
                                    "bg-accent/10 text-accent"
                            }`}>
                            {scrip.status}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
