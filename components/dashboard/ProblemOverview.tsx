"use client";

import { Target, Zap, Layers, RefreshCw } from "lucide-react";

const problems = [
    {
        title: "Circular Trading Rings",
        description: "Complex networks of entities washing volume to create artificial liquidity.",
        icon: RefreshCw,
        impact: "High",
    },
    {
        title: "Microsecond Layering",
        description: "HFT algorithms placing and cancelling orders to create false market depth.",
        icon: Layers,
        impact: "Critical",
    },
    {
        title: "Intro-day Pump & Dump",
        description: "Coordinated buying in small caps followed by rapid offloading on retail.",
        icon: Zap,
        impact: "High",
    },
    {
        title: "Cross-Market Manipulation",
        description: "Using F&O positions to profit from spot market manipulation (Two-Patch Playbook).",
        icon: Target,
        impact: "Critical",
    },
];

export function ProblemOverview() {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-accent rounded-full"></span>
                Targeted Market Manipulations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {problems.map((problem) => (
                    <div key={problem.title} className="bg-sidebar border border-border rounded-xl p-5 hover:border-accent/50 transition-colors group cursor-default">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2.5 rounded-lg bg-background text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                                <problem.icon size={24} />
                            </div>
                            <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border ${problem.impact === 'Critical'
                                    ? 'border-destructive/30 text-destructive bg-destructive/10'
                                    : 'border-warning/30 text-warning bg-warning/10'
                                }`}>
                                {problem.impact} Impact
                            </span>
                        </div>
                        <h3 className="font-semibold text-foreground mb-1">{problem.title}</h3>
                        <p className="text-sm text-sidebar-foreground line-clamp-2">{problem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
