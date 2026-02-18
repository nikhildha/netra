"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe, Server, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function SovereignShield() {
    const [blockedCount, setBlockedCount] = useState(0);
    const [securedCount, setSecuredCount] = useState(0);

    // Simulate counters
    useEffect(() => {
        const interval = setInterval(() => {
            setBlockedCount(prev => prev + Math.floor(Math.random() * 3));
            setSecuredCount(prev => prev + Math.floor(Math.random() * 10));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] bg-sidebar border border-border rounded-3xl overflow-hidden flex flex-col items-center justify-center p-8">
            {/* Background Map Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"></div>

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    {/* The Shield */}
                    <div className="w-64 h-64 rounded-full border-4 border-accent/30 flex items-center justify-center relative shadow-[0_0_50px_rgba(139,92,246,0.2)]">
                        <div className="absolute inset-0 rounded-full border border-accent/20 animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute inset-4 rounded-full border border-accent/40 animate-[spin_8s_linear_infinite_reverse]"></div>

                        <ShieldCheck size={80} className="text-accent drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

                        {/* Shield Pulse */}
                        <motion.div
                            className="absolute inset-0 rounded-full bg-accent/5"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>

                    {/* Threat Particles (Red) */}
                    <ParticleThreat angle={0} delay={0} />
                    <ParticleThreat angle={45} delay={1.2} />
                    <ParticleThreat angle={90} delay={0.5} />
                    <ParticleThreat angle={135} delay={2.0} />
                    <ParticleThreat angle={180} delay={0.8} />
                    <ParticleThreat angle={225} delay={1.5} />
                    <ParticleThreat angle={270} delay={0.3} />
                    <ParticleThreat angle={315} delay={1.8} />

                </motion.div>

                {/* Stats Panel */}
                <div className="mt-12 grid grid-cols-2 gap-8 w-full max-w-lg">
                    <div className="bg-background/80 backdrop-blur border border-destructive/30 rounded-xl p-4 flex items-center gap-4">
                        <div className="p-3 bg-destructive/10 rounded-lg text-destructive">
                            <AlertTriangle size={24} />
                        </div>
                        <div>
                            <div className="text-xs text-sidebar-foreground uppercase font-bold">Foreign Threats Blocked</div>
                            <div className="text-2xl font-mono font-bold text-destructive">{blockedCount.toLocaleString()}</div>
                        </div>
                    </div>

                    <div className="bg-background/80 backdrop-blur border border-success/30 rounded-xl p-4 flex items-center gap-4">
                        <div className="p-3 bg-success/10 rounded-lg text-success">
                            <CheckCircle2 size={24} />
                        </div>
                        <div>
                            <div className="text-xs text-sidebar-foreground uppercase font-bold">Data Packets Secured</div>
                            <div className="text-2xl font-mono font-bold text-success">{securedCount.toLocaleString()}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex gap-2">
                    <Badge icon={Lock} text="Data Localization: Active" color="text-success" bg="bg-success/10" border="border-success/20" />
                    <Badge icon={Server} text="MeitY Cloud: Verified" color="text-accent" bg="bg-accent/10" border="border-accent/20" />
                    <Badge icon={Globe} text="Origin: India" color="text-blue-400" bg="bg-blue-400/10" border="border-blue-400/20" />
                </div>
            </div>
        </div>
    );
}

function ParticleThreat({ angle, delay }: { angle: number, delay: number }) {
    // Convert angle to radians for potential future complex calcs, 
    // but here we just rotate the container and animate "inward"
    return (
        <div
            className="absolute top-1/2 left-1/2 w-[400px] h-1 bg-transparent pointer-events-none -z-10 disabled"
            style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transformOrigin: "center"
            }}
        >
            <motion.div
                className="absolute right-0 w-3 h-3 bg-destructive rounded-full shadow-[0_0_8px_#ef4444]"
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: [200, 60], opacity: [0, 1, 0] }} // Stops at shield radius (approx 60px from center due to scaling)
                transition={{ duration: 1.5, repeat: Infinity, delay: delay, ease: "linear" }}
            />
        </div>
    );
}

function Badge({ icon: Icon, text, color, bg, border }: { icon: any, text: string, color: string, bg: string, border: string }) {
    return (
        <div className={cn("flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium", bg, border, color)}>
            <Icon size={14} />
            {text}
        </div>
    )
}
