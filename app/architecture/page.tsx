"use client";

import { SystemMap } from "@/components/architecture/SystemMap";

export default function ArchitecturePage() {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-foreground">System Architecture</h1>
                <p className="text-sidebar-foreground">
                    End-to-End High Frequency Data Pipeline & Surveillance Logic
                </p>
            </div>

            <SystemMap />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-sidebar border border-border rounded-xl p-6">
                    <h3 className="font-bold mb-2">Low Latency Guarantee</h3>
                    <p className="text-sm text-sidebar-foreground">
                        Utilizing RDMA over Converged Ethernet (RoCE) for TBT ingestion ensures &lt;10µs packet processing time.
                    </p>
                </div>
                <div className="bg-sidebar border border-border rounded-xl p-6">
                    <h3 className="font-bold mb-2">Scalable AI Inference</h3>
                    <p className="text-sm text-sidebar-foreground">
                        Horizontally scalable TensorFlow Serving clusters on GPU instances to handle 100,000+ orders/second.
                    </p>
                </div>
                <div className="bg-sidebar border border-border rounded-xl p-6">
                    <h3 className="font-bold mb-2">Forensic Audit Trail</h3>
                    <p className="text-sm text-sidebar-foreground">
                        Immutable write-once logs stored in cold storage for 7 years as per SEBI regulations.
                    </p>
                </div>
            </div>
        </div>
    );
}
