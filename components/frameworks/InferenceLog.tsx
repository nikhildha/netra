"use client";

import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface LogEntry {
    id: number;
    text: string;
    type: "info" | "success" | "warning" | "error";
    timestamp: string;
}

const generateLog = (system: string): Omit<LogEntry, "id" | "timestamp"> => {
    const actions = [
        { text: "Analyzing order flow batch...", type: "info" },
        { text: "Verifying checksum...", type: "info" },
        { text: "Pattern match: None", type: "success" },
        { text: "Latency check: <1ms", type: "success" },
        { text: "Model inference complete", type: "info" },
        { text: "Updating graph nodes...", type: "info" },
        { text: "Re-indexing vector DB...", type: "info" },
    ] as const;

    const warnings = [
        { text: "Anomaly detected in Sector B", type: "warning" },
        { text: "High volume spike alert", type: "warning" },
        { text: "Spread deviation > 2σ", type: "warning" },
    ] as const;

    if (Math.random() > 0.9) {
        return warnings[Math.floor(Math.random() * warnings.length)];
    }
    return actions[Math.floor(Math.random() * actions.length)];
};

export function InferenceLog({ system, color = "text-accent" }: { system: string, color?: string }) {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial logs
        setLogs([
            { id: 1, text: `${system} Kernel Initialized`, type: "success", timestamp: new Date().toISOString().split("T")[1].slice(0, 8) },
            { id: 2, text: "Loading weights...", type: "info", timestamp: new Date().toISOString().split("T")[1].slice(0, 8) },
        ]);

        const interval = setInterval(() => {
            const newLog = generateLog(system);
            setLogs(prev => {
                const next = [...prev, {
                    id: Date.now(),
                    text: newLog.text,
                    type: newLog.type,
                    timestamp: new Date().toISOString().split("T")[1].slice(0, 8) // HH:mm:ss
                }];
                if (next.length > 8) next.shift(); // Keep logs short
                return next;
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [system]);

    // Auto-scroll
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="bg-black/80 border border-border/50 rounded-lg p-3 font-mono text-[10px] h-32 overflow-hidden flex flex-col relative shadow-inner">
            <div className="absolute top-0 right-0 px-2 py-1 bg-border/20 rounded-bl-lg text-sidebar-foreground uppercase font-bold tracking-wider text-[8px]">
                Live Terminal
            </div>
            <div className="flex-1 overflow-y-auto space-y-1 scrollbar-hide" ref={scrollRef}>
                {logs.map(log => (
                    <div key={log.id} className="flex gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <span className="text-sidebar-foreground/50 select-none">[{log.timestamp}]</span>
                        <span className={cn(
                            log.type === "warning" ? "text-warning" :
                                log.type === "success" ? "text-success" :
                                    log.type === "error" ? "text-destructive" : "text-sidebar-foreground"
                        )}>
                            {log.type === "warning" && "⚠️ "}
                            {log.text}
                        </span>
                    </div>
                ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-sidebar-foreground/50">
                <div className="flex items-center gap-1">
                    <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", color.replace("text-", "bg-"))}></div>
                    <span>Online</span>
                </div>
                <span>{system}_V4.2</span>
            </div>
        </div>
    );
}
