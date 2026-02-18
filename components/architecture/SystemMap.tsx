"use client";

import { useState } from "react";
import { Server, Database, Globe, Cpu, ShieldAlert, ArrowRight, Zap, Network, Lock, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const nodes = [
    {
        id: "source",
        title: "Exchange Feeds",
        icon: Globe,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
        description: "NSE/BSE Tick-by-Tick (TBT) feeds via multicast.",
        specs: {
            protocol: "Multicast (UDP)",
            throughput: "40 Gbps",
            format: "Native Binary"
        },
        status: "active",
    },
    {
        id: "ingest",
        title: "RoCE Ingest",
        icon: Network,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        description: "Zero-copy packet capture using RDMA over Converged Ethernet.",
        specs: {
            latency: "< 5µs",
            tech: "DPDK + FPGA",
            buffer: "Ring Buffer"
        },
        status: "processing",
    },
    {
        id: "stream",
        title: "Stream Proc.",
        icon: Zap,
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/20",
        description: "Stateful stream processing for windowed aggregations.",
        specs: {
            engine: "Apache Flink",
            state: "RocksDB",
            scale: "100 Nodes"
        },
        status: "processing",
    },
    {
        id: "ai",
        title: "AI Inference",
        icon: Cpu,
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
        description: "Real-time anomaly detection using A.E.G.I.S. & N.E.X.U.S.",
        specs: {
            models: "Transformer / GAN",
            runtime: "TensorRT",
            hardware: "NVIDIA A100"
        },
        status: "analyzing",
    },
    {
        id: "datalake",
        title: "Data Lake",
        icon: Database,
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
        description: "Immutable ledger for forensic audit trails.",
        specs: {
            hot: "ClickHouse",
            cold: "S3 / Glacier",
            compliance: "WORM Storage"
        },
        status: "storing",
    },
    {
        id: "alert",
        title: "Enforcement",
        icon: ShieldAlert,
        color: "text-destructive",
        bgColor: "bg-destructive/10",
        borderColor: "border-destructive/20",
        description: "Case management dashboard for surveillance officers.",
        specs: {
            ui: "Next.js / React",
            push: "WebSockets",
            auth: "SSO / MFA"
        },
        status: "ready",
    },
];

export function SystemMap() {
    const [activeNode, setActiveNode] = useState<string | null>("ai");

    return (
        <div className="flex flex-col xl:flex-row gap-8 min-h-[600px]">
            {/* Interactive Map Area */}
            <div className="flex-1 bg-sidebar border border-border rounded-xl p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[500px]">
                {/* Background Grid */}
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Connecting Lines - Animated */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    {/* Main Pipeline Path */}
                    <path d="M 100 250 L 300 250 L 500 250 L 700 250" stroke="url(#line-gradient)" strokeWidth="2" fill="none" />

                    {/* Branch to Storage (Vertical) */}
                    <path d="M 500 250 L 500 400" stroke="#06b6d4" strokeWidth="2" strokeOpacity="0.2" fill="none" strokeDasharray="4 4" />
                </svg>

                {/* Animated Particles */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    {/* Particle 1: Source to Ingest */}
                    <motion.div
                        className="absolute top-[246px] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]"
                        animate={{ x: [100, 300], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Particle 2: Ingest to Stream */}
                    <motion.div
                        className="absolute top-[246px] w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]"
                        animate={{ x: [300, 500], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                    />
                    {/* Particle 3: Stream to AI */}
                    <motion.div
                        className="absolute top-[246px] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]"
                        animate={{ x: [500, 700], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                    {/* Particle 4: Stream to DataLake (Down) */}
                    <motion.div
                        className="absolute left-[496px] w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"
                        animate={{ y: [250, 400], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    />
                </div>

                <div className="relative z-10 w-full max-w-4xl grid grid-cols-4 gap-8 items-center">

                    {/* Row 1: Main Pipeline */}
                    <div className="col-span-4 flex justify-between items-center gap-4 px-12">
                        {/* Source */}
                        <NodeButton node={nodes[0]} activeNode={activeNode} setActiveNode={setActiveNode} />
                        {/* Ingest */}
                        <NodeButton node={nodes[1]} activeNode={activeNode} setActiveNode={setActiveNode} />
                        {/* Stream */}
                        <NodeButton node={nodes[2]} activeNode={activeNode} setActiveNode={setActiveNode} />
                        {/* AI */}
                        <NodeButton node={nodes[3]} activeNode={activeNode} setActiveNode={setActiveNode} />
                    </div>

                    {/* Row 2: Storage & Alert */}
                    <div className="col-span-4 grid grid-cols-4 gap-4 px-12 mt-12">
                        <div className="col-start-3 flex justify-center">
                            {/* Data Lake */}
                            <NodeButton node={nodes[4]} activeNode={activeNode} setActiveNode={setActiveNode} />
                        </div>
                        <div className="col-start-4 flex justify-center -mt-12">
                            {/* Alert - positioned near AI */}
                            <div className="relative left-8">
                                <NodeButton node={nodes[5]} activeNode={activeNode} setActiveNode={setActiveNode} />
                                {/* Red Connector Line from AI to Alert */}
                                <svg className="absolute top-1/2 -left-16 w-16 h-0.5 pointer-events-none -z-10 overflow-visible">
                                    <path d="M 0 0 L 64 0" stroke="#f87171" strokeWidth="2" strokeDasharray="2 2" />
                                    <motion.circle
                                        r="3" fill="#f87171"
                                        animate={{ cx: [0, 64] }}
                                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Details Panel - Animated */}
            <div className="w-full xl:w-96 bg-sidebar border border-border rounded-xl p-6 flex flex-col h-full min-h-[500px]">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2 border-b border-border pb-4">
                    <Server size={18} className="text-accent" />
                    System Specifications
                </h3>

                <AnimatePresence mode="wait">
                    {activeNode ? (
                        <motion.div
                            key={activeNode}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.2 }}
                            className="flex-1 flex flex-col"
                        >
                            {(() => {
                                const node = nodes.find(n => n.id === activeNode);
                                if (!node) return null;
                                return (
                                    <>
                                        <div className="flex items-start gap-4 mb-6">
                                            <div className={cn("p-3 rounded-xl", node.bgColor, node.color)}>
                                                <node.icon size={32} />
                                            </div>
                                            <div>
                                                <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{node.title}</h4>
                                                <span className={cn("text-xs px-2 py-0.5 rounded-full border", node.bgColor, node.borderColor, node.color)}>
                                                    {node.status}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div>
                                                <h5 className="text-xs uppercase text-sidebar-foreground font-bold mb-2">Functionality</h5>
                                                <p className="text-sm text-foreground leading-relaxed">
                                                    {node.description}
                                                </p>
                                            </div>

                                            <div>
                                                <h5 className="text-xs uppercase text-sidebar-foreground font-bold mb-2">Technical Implementation</h5>
                                                <div className="grid grid-cols-1 gap-2">
                                                    {Object.entries(node.specs).map(([key, value]) => (
                                                        <div key={key} className="flex justify-between items-center p-3 bg-background rounded-lg border border-border/50">
                                                            <span className="text-xs text-sidebar-foreground capitalize">{key}</span>
                                                            <span className="text-sm font-mono font-medium text-accent">{value}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="mt-auto pt-6">
                                                <div className="h-1 w-full bg-border rounded-full overflow-hidden">
                                                    <motion.div
                                                        className={cn("h-full", node.color.replace('text-', 'bg-'))}
                                                        initial={{ width: "0%" }}
                                                        animate={{ width: "100%" }}
                                                        transition={{ duration: 1, ease: "easeOut" }}
                                                    />
                                                </div>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-[10px] text-sidebar-foreground">Load</span>
                                                    <span className="text-[10px] font-mono">Running</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>
                    ) : (
                        <div className="flex-1 flex flex-col items-center justify-center text-sidebar-foreground text-center opacity-40">
                            <ArrowRight size={48} className="mb-4" />
                            <p>Select a node to view specs</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function NodeButton({ node, activeNode, setActiveNode }: { node: any, activeNode: string | null, setActiveNode: (id: string) => void }) {
    const isActive = activeNode === node.id;
    return (
        <button
            onClick={() => setActiveNode(node.id)}
            className={cn(
                "relative flex flex-col items-center gap-3 transition-all duration-300 group z-10",
                isActive ? "scale-110" : "hover:scale-105 opacity-70 hover:opacity-100"
            )}
        >
            <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 border",
                isActive
                    ? cn(node.bgColor, node.borderColor, "shadow-[0_0_20px_rgba(0,0,0,0.2)] ring-2", node.color.replace('text-', 'ring-'))
                    : "bg-sidebar border-border hover:border-sidebar-foreground/50"
            )}>
                <node.icon size={28} className={cn("transition-colors duration-300", isActive ? node.color : "text-sidebar-foreground")} />
            </div>
            <span className={cn(
                "text-xs font-bold transition-colors duration-300 bg-background/80 px-2 py-0.5 rounded backdrop-blur-sm border border-transparent",
                isActive ? "text-foreground border-border" : "text-sidebar-foreground group-hover:text-foreground"
            )}>
                {node.title}
            </span>

            {/* Pulse Effect for Active Node */}
            {isActive && (
                <span className={cn("absolute inset-0 rounded-2xl animate-ping opacity-20", node.bgColor)} />
            )}
        </button>
    );
}
