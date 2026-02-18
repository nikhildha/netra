"use client";

import { StrategyExplorer } from "@/components/strategies/StrategyExplorer";

export default function StrategiesPage() {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8 p-6 bg-gradient-to-r from-accent/10 to-transparent rounded-2xl border border-accent/20">
                <h1 className="text-3xl font-bold text-foreground mb-2">Surveillance Engine</h1>
                <p className="text-lg text-sidebar-foreground">
                    Defining the "Pattern Plus Effect" Logic for Market Integrity
                </p>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
                <p className="text-sm text-sidebar-foreground/80">
                    The INCMSF (Integrated National Capital Markets Surveillance Framework) utilizes a hybrid approach of deterministic rule-based alerts for known patterns and probabilistic AI models for detecting novel manipulative behaviors. Below is the catalog of primary manipulation strategies targeted by Project NETRA.
                </p>
            </div>

            <StrategyExplorer />
        </div>
    );
}
