"use client";

import { BudgetCharts } from "@/components/plan/BudgetCharts";
import { RoadmapTimeline } from "@/components/plan/RoadmapTimeline";

export default function PlanPage() {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground">Budget & Execution Roadmap</h1>
                <p className="text-sidebar-foreground">
                    Strategic Investment for National Market Integrity
                </p>
            </div>

            <BudgetCharts />

            <div className="mt-12">
                <h2 className="text-xl font-bold text-foreground mb-6">Phase-wise Implementation Plan</h2>
                <RoadmapTimeline />
            </div>
        </div>
    );
}
