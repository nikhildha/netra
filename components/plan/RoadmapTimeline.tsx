"use client";

import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const phases = [
    {
        id: 1,
        title: "Phase I: Regulatory Sandbox",
        duration: "Months 1-6",
        status: "current",
        items: [
            "Submit proposal to SEBI IT Dept.",
            "Deploy localized AI models in Sandbox environment.",
            "Test against 6 months of historical TBT data.",
            "Validation of 'Spoofing' detection accuracy."
        ]
    },
    {
        id: 2,
        title: "Phase II: MII Integration",
        duration: "Months 7-15",
        status: "upcoming",
        items: [
            "Establish leased lines with NSE/BSE.",
            "Provision 1.5x peak capacity infrastructure.",
            "Onboard top 50 QSBs (Qualified Stock Brokers).",
            "Live shadow-mode surveillance."
        ]
    },
    {
        id: 3,
        title: "Phase III: National Rollout",
        duration: "Month 16+",
        status: "upcoming",
        items: [
            "Full enforceability of 'Comprehensive Manipulation' doctrine.",
            "Public launch of 'Vocal for Local' investor awareness.",
            "Cross-market surveillance (Equities + Commodities).",
            "AI-driven automated show-cause notice generation."
        ]
    }
];

export function RoadmapTimeline() {
    return (
        <div className="relative border-l-2 border-border ml-3 space-y-12 py-4">
            {phases.map((phase) => (
                <div key={phase.id} className="relative pl-8">
                    <div className={cn(
                        "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 bg-background flex items-center justify-center",
                        phase.status === 'completed' ? "border-success bg-success text-white" :
                            phase.status === 'current' ? "border-accent bg-accent text-white" : "border-border"
                    )}>
                        {phase.status === 'completed' && <CheckCircle2 size={10} />}
                        {phase.status === 'current' && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className={cn("text-lg font-bold", phase.status === 'current' ? "text-accent" : "text-foreground")}>
                            {phase.title}
                        </h3>
                        <span className="flex items-center gap-1.5 text-xs font-mono bg-sidebar border border-border px-2 py-1 rounded text-sidebar-foreground">
                            <Clock size={12} /> {phase.duration}
                        </span>
                    </div>

                    <div className="bg-sidebar border border-border rounded-xl p-5">
                        <ul className="space-y-3">
                            {phase.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-sidebar-foreground">
                                    <div className="mt-1.5 w-1 h-1 rounded-full bg-sidebar-foreground/50 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
