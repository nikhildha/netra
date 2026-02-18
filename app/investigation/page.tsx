"use client";

import { InvestigationBoard } from "@/components/investigation/InvestigationBoard";
import { Search } from "lucide-react";

export default function InvestigationPage() {
    return (
        <div className="max-w-7xl mx-auto pb-12">
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent border border-accent/20">
                        <Search size={32} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Live Investigation</h1>
                        <p className="text-sidebar-foreground">
                            Step-by-step reconstruction of an Algorithm-assisted Enforcement Action
                        </p>
                    </div>
                </div>
            </div>

            <InvestigationBoard />

            <div className="mt-12 bg-sidebar border border-border rounded-xl p-6 text-center">
                <p className="text-xs text-sidebar-foreground max-w-2xl mx-auto">
                    *This simulation represents a standard operating procedure under the new INCMSF guidelines.
                    All data names are pseudonymized for demonstration purposes.
                </p>
            </div>
        </div>
    );
}
