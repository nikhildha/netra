"use client";

import { MarketHealth } from "@/components/dashboard/MarketHealth";
import { ProblemOverview } from "@/components/dashboard/ProblemOverview";
import { LiveAlertsFeed } from "@/components/dashboard/LiveAlertsFeed";
import { TickerTape } from "@/components/ui/TickerTape";
import { MarketHeatmap } from "@/components/dashboard/MarketHeatmap";
import { SegmentHeatmap } from "@/components/dashboard/SegmentHeatmap";
import { IndustryHeatmap } from "@/components/dashboard/IndustryHeatmap";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <TickerTape />

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Executive Dashboard</h1>
        <p className="text-sidebar-foreground text-sm">Real-time surveillance overview of Indian Capital Markets</p>
      </div>

      <MarketHealth />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProblemOverview />

          <div className="mt-8 space-y-6">
            <SegmentHeatmap />
            <IndustryHeatmap />
            <MarketHeatmap />
          </div>
        </div>

        <div className="lg:col-span-1 h-[600px] lg:h-auto">
          <LiveAlertsFeed />
        </div>
      </div>
    </div>
  );
}
