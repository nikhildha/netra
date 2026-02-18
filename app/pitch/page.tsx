"use client";

import { GovtAlignment } from "@/components/pitch/GovtAlignment";
import { SovereignShield } from "@/components/pitch/SovereignShield";

export default function PitchPage() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-0">
                {/* Header is visually handled by the component's Hero section */}
            </div>

            <GovtAlignment />

            <div className="mt-12">
                <SovereignShield />
            </div>
        </div>
    );
}
