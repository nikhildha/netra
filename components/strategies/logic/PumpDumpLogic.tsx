"use client";

import { motion } from "framer-motion";
import { Users, RefreshCw, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

export function PumpDumpLogic() {
    const [activeNode, setActiveNode] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNode((prev) => (prev + 1) % 4);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    const nodes = [
        { id: 0, x: 50, y: 10, label: "Operator A" },
        { id: 1, x: 90, y: 50, label: "Entity B" },
        { id: 2, x: 50, y: 90, label: "Entity C" },
        { id: 3, x: 10, y: 50, label: "Operator D" },
    ];

    return (
        <div className="p-4 bg-sidebar rounded-lg border border-border">
            <h4 className="text-sm font-bold mb-4 text-foreground">Logic Simulator: Circular Trading Ring</h4>

            <div className="flex gap-4">
                {/* Network Graph */}
                <div className="relative w-48 h-48 mx-auto bg-sidebar-active/20 rounded-full border border-dashed border-border">
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.circle cx="50%" cy="50%" r="35%" stroke="currentColor" strokeWidth="1" className="text-border" fill="none" />
                        {/* Active Flow Line */}
                        <motion.path
                            d={`M ${nodes[activeNode].x}% ${nodes[activeNode].y}% L ${nodes[(activeNode + 1) % 4].x}% ${nodes[(activeNode + 1) % 4].y}%`}
                            stroke="#ef4444"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </svg>

                    {nodes.map((node, i) => (
                        <motion.div
                            key={node.id}
                            className={`absolute w-8 h-8 -ml-4 -mt-4 rounded-full flex items-center justify-center border-2 text-[10px] font-bold z-10 transition-colors duration-300
                    ${activeNode === i ? "bg-destructive border-destructive text-white scale-110" : "bg-sidebar border-border text-sidebar-foreground"}`}
                            style={{ left: `${node.x}%`, top: `${node.y}%` }}
                        >
                            {i + 1}
                        </motion.div>
                    ))}

                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <RefreshCw className="text-destructive animate-spin-slow" size={24} />
                        <span className="text-[10px] text-destructive mt-1 font-bold">WASH TRADE</span>
                    </div>
                </div>

                {/* Stats Panel */}
                <div className="flex-1 space-y-3 pt-4">
                    <div className="p-2 bg-background/50 rounded border border-border">
                        <div className="text-[10px] text-sidebar-foreground uppercase">Traded Volume</div>
                        <div className="text-xl font-mono font-bold text-foreground flex items-end gap-1">
                            {(activeNode * 25000 + 10000).toLocaleString()} <span className="text-[10px] text-success mb-1">▲</span>
                        </div>
                        <motion.div className="h-1 bg-border mt-1 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-success"
                                animate={{ width: `${(activeNode + 1) * 25}%` }}
                            />
                        </motion.div>
                    </div>

                    <div className="p-2 bg-background/50 rounded border border-border">
                        <div className="text-[10px] text-sidebar-foreground uppercase">Net Ownership Change</div>
                        <div className="text-xl font-mono font-bold text-foreground">0</div>
                        <div className="text-[9px] text-destructive italic mt-1">Beneficial Owner Unchanged</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
