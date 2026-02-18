"use client";

import { useState } from "react";
import { Server, Database, Globe, Cpu, ShieldAlert, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const nodes = [
    {
        id: "source",
        title: "Exchange Data Feeds",
        icon: Globe,
        description: "NSE/BSE Tick-by-Tick (TBT) feeds via multicast.",
        details: "Raw packet capture at microsecond resolution. 100Gbps throughput.",
        status: "active",
    },
    {
        id: "ingest",
        title: "Event Stream Processor",
        icon: Server,
        description: "Apache Flink + Kafka cluster.",
        details: "Stateful stream processing. Windowed aggregations for volume spikes.",
        status: "processing",
    },
    {
        id: "ai",
        title: "Surveillance AI Engine",
        icon: Cpu,
        description: "LSTM/Transformer Models.",
        details: "Pattern recognition for circular trading and spoofing.",
        status: "analyzing",
    },
    {
        id: "storage",
        title: "Data Lakehouse",
        icon: Database,
        description: "Historical Audit Trail.",
        details: "Google BigQuery / AWS Redshift for forensic analysis.",
        status: "storing",
    },
    {
        id: "alert",
        title: "Enforcement Dashboard",
        icon: ShieldAlert,
        description: "Analyst Workbench.",
        details: "Case management and evidence assembly.",
        status: "ready",
    },
];

export function SystemMap() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <div className="flex flex-col lg:flex-row gap-8 h-[600px]">
            {/* Interactive Map Area */}
            <div className="flex-1 bg-sidebar border border-border rounded-xl p-8 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="flex flex-col gap-12 relative z-10 w-full max-w-2xl">
                    <div className="flex justify-between items-center relative">
                        {/* Connector Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -z-10">
                            <div className="absolute top-0 left-0 h-full w-full bg-accent/20 animate-pulse"></div>
                        </div>

                        {nodes.slice(0, 3).map((node, index) => (
                            <button
                                key={node.id}
                                onClick={() => setActiveNode(node.id)}
                                className={cn(
                                    "flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 w-32 relative group bg-background",
                                    activeNode === node.id
                                        ? "border-accent ring-2 ring-accent/20 scale-105 shadow-lg shadow-accent/10"
                                        : "border-border hover:border-sidebar-foreground"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                                    activeNode === node.id ? "bg-accent text-white" : "bg-sidebar-active text-sidebar-foreground group-hover:bg-sidebar-active/80"
                                )}>
                                    <node.icon size={24} />
                                </div>
                                <span className="text-xs font-bold text-center">{node.title}</span>
                                <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] text-accent font-medium">Click for details</div>
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-center gap-24 relative">
                        {/* Branch Lines */}
                        <svg className="absolute -top-12 left-1/2 -translate-x-1/2 w-full h-24 -z-10 pointer-events-none" viewBox="0 0 400 100" fill="none">
                            <path d="M 200 0 L 200 50 L 100 50 L 100 100" stroke="#2a2e3b" strokeWidth="2" fill="none" />
                            <path d="M 200 50 L 300 50 L 300 100" stroke="#2a2e3b" strokeWidth="2" fill="none" />
                        </svg>

                        {nodes.slice(3).map((node) => (
                            <button
                                key={node.id}
                                onClick={() => setActiveNode(node.id)}
                                className={cn(
                                    "flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 w-32 relative group bg-background",
                                    activeNode === node.id
                                        ? "border-accent ring-2 ring-accent/20 scale-105 shadow-lg shadow-accent/10"
                                        : "border-border hover:border-sidebar-foreground"
                                )}
                            >
                                <div className={cn(
                                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors",
                                    activeNode === node.id ? "bg-accent text-white" : "bg-sidebar-active text-sidebar-foreground group-hover:bg-sidebar-active/80"
                                )}>
                                    <node.icon size={24} />
                                </div>
                                <span className="text-xs font-bold text-center">{node.title}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Details Panel */}
            <div className="w-full lg:w-80 bg-sidebar border border-border rounded-xl p-6 flex flex-col">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Server size={18} className="text-accent" />
                    Component Details
                </h3>

                {activeNode ? (
                    <div className="animate-in fade-in slide-in-from-right-4 duration-300">
                        {nodes.find(n => n.id === activeNode) && (
                            <>
                                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-4 mx-auto">
                                    {(() => {
                                        const NodeIcon = nodes.find(n => n.id === activeNode)?.icon || Globe;
                                        return <NodeIcon size={32} />;
                                    })()}
                                </div>
                                <h4 className="text-xl font-bold text-center mb-2">{nodes.find(n => n.id === activeNode)?.title}</h4>
                                <div className="flex justify-center mb-6">
                                    <span className="px-2 py-1 rounded bg-success/20 text-success text-xs font-bold uppercase tracking-wide">
                                        Status: {nodes.find(n => n.id === activeNode)?.status}
                                    </span>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-background rounded-lg p-3 border border-border">
                                        <p className="text-xs text-sidebar-foreground uppercase font-semibold mb-1">Function</p>
                                        <p className="text-sm font-medium">{nodes.find(n => n.id === activeNode)?.description}</p>
                                    </div>
                                    <div className="bg-background rounded-lg p-3 border border-border">
                                        <p className="text-xs text-sidebar-foreground uppercase font-semibold mb-1">Technical Specs</p>
                                        <p className="text-sm text-foreground/80">{nodes.find(n => n.id === activeNode)?.details}</p>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center text-sidebar-foreground text-center opacity-60">
                        <ArrowRight size={48} className="mb-4 animate-pulse" />
                        <p>Select a component in the diagram to view technical specifications and data flow logic.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
