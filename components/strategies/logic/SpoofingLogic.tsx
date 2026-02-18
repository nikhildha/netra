"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUp, X } from "lucide-react";
import { useState, useEffect } from "react";

export function SpoofingLogic() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 3);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    // Mock Order Book
    const asks = [
        { price: 215.50, qty: 500 },
        { price: 215.45, qty: 1200 },
        { price: 215.40, qty: 800 },
    ];

    const bids = [
        { price: 215.35, qty: 25000, type: "spoof" }, // The Spoof Order
        { price: 215.30, qty: 1500 },
        { price: 215.25, qty: 2000 },
    ];

    return (
        <div className="p-4 bg-sidebar rounded-lg border border-border">
            <h4 className="text-sm font-bold mb-4 text-foreground">Logic Simulator: Layering / Spoofing</h4>

            <div className="flex gap-4 items-start">
                {/* Order Book Viz */}
                <div className="flex-1 border border-border rounded overflow-hidden">
                    <div className="flex p-2 bg-sidebar-active/50 text-[10px] uppercase font-bold text-sidebar-foreground">
                        <span className="w-1/3">Price</span>
                        <span className="w-1/3 text-right">Qty</span>
                        <span className="w-1/3 text-right">Type</span>
                    </div>

                    {/* Asks */}
                    <div className="bg-red-500/5">
                        {asks.map((o, i) => (
                            <div key={i} className="flex p-1.5 text-xs text-red-400 border-b border-red-500/10">
                                <span className="w-1/3">{o.price.toFixed(2)}</span>
                                <span className="w-1/3 text-right">{o.qty}</span>
                                <span className="w-1/3 text-right opacity-50">Sell</span>
                            </div>
                        ))}
                    </div>

                    {/* Bids */}
                    <div className="bg-emerald-500/5 relative">
                        {bids.map((o, i) => (
                            <motion.div
                                key={i}
                                className={`flex p-1.5 text-xs border-b border-emerald-500/10 ${o.type === 'spoof' ? 'bg-emerald-500/20 font-bold' : 'text-emerald-400'}`}
                                animate={{
                                    opacity: o.type === 'spoof' && step === 2 ? 0 : 1,
                                    x: o.type === 'spoof' && step === 2 ? -20 : 0
                                }}
                            >
                                <span className="w-1/3">{o.price.toFixed(2)}</span>
                                <span className="w-1/3 text-right flex items-center justify-end gap-1">
                                    {o.qty}
                                    {o.type === 'spoof' && <span className="text-[8px] bg-emerald-500 text-black px-1 rounded">LARGE</span>}
                                </span>
                                <span className="w-1/3 text-right opacity-50">Buy</span>

                                {/* Cancellation X */}
                                {o.type === 'spoof' && step === 2 && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-destructive/20 backdrop-blur-[1px]">
                                        <X className="text-destructive" size={16} />
                                        <span className="text-[10px] font-bold text-destructive ml-1">CANCELLED</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Narrative Panel */}
                <div className="w-1/3 flex flex-col justify-center gap-4 text-[10px] font-mono p-2 border-l border-border">
                    <div className={`transition-opacity ${step === 0 ? "opacity-100 text-accent font-bold" : "opacity-30"}`}>
                        1. PLACE<br />
                        Large BUY order placed at Best Bid.
                    </div>
                    <div className={`transition-opacity ${step === 1 ? "opacity-100 text-foreground font-bold" : "opacity-30"}`}>
                        2. REACT<br />
                        Algos detect depth, Price ticks UP.
                    </div>
                    <div className={`transition-opacity ${step === 2 ? "opacity-100 text-destructive font-bold" : "opacity-30"}`}>
                        3. CANCEL<br />
                        Order withdrawn before execution.
                    </div>
                </div>
            </div>
        </div>
    );
}
