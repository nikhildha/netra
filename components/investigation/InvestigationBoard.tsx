"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Network,
    MessageSquare,
    Gavel,
    ArrowRight,
    Database,
    Cpu,
    FileText,
    AlertTriangle,
    User,
    smartphone,
    Smartphone
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type Step = {
    id: number;
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    tech: string[];
    data: string[];
};

const steps: Step[] = [
    {
        id: 1,
        title: "The Spark",
        subtitle: "Anomaly Detection",
        icon: AlertTriangle,
        color: "text-warning",
        tech: ["Apache Flink (Stream)", "LSTM Autoencoder"],
        data: ["Tick-by-Tick Orders", "Historical Volatility"]
    },
    {
        id: 2,
        title: "The Web",
        subtitle: "Entity Linkage",
        icon: Network,
        color: "text-blue-400",
        tech: ["Graph Neural Networks", "Neo4j Database"],
        data: ["KYC Records", "MCA Director Data", "CDR Logs"]
    },
    {
        id: 3,
        title: "The Smoking Gun",
        subtitle: "Intent Analysis",
        icon: MessageSquare,
        color: "text-pink-400",
        tech: ["Transformer Models (NLP)", "OCR Tesseract"],
        data: ["Seized Device Dump", "WhatsApp Metadata"]
    },
    {
        id: 4,
        title: "The Takedown",
        subtitle: "Enforcement Action",
        icon: Gavel,
        color: "text-success",
        tech: ["Generative AI (Legal)", "Auto-Drafting"],
        data: ["SEBI Precedents", "Case Law DB"]
    }
];

export function InvestigationBoard() {
    const [currentStep, setCurrentStep] = useState(1);

    const activeStepData = steps.find(s => s.id === currentStep)!;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[600px]">
            {/* Left Panel: Navigation & Context */}
            <div className="lg:col-span-1 bg-sidebar border border-border rounded-2xl p-6 flex flex-col">
                <div className="mb-8">
                    <h2 className="text-xl font-bold text-foreground">Operation Mercury</h2>
                    <p className="text-sm text-sidebar-foreground">Case ID: #NETRA-2024-8892</p>
                    <div className="mt-2 text-xs bg-destructive/10 text-destructive px-2 py-1 rounded inline-block font-bold border border-destructive/20">
                        CRITICAL PRIORITY
                    </div>
                </div>

                <div className="space-y-6 flex-1">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            onClick={() => setCurrentStep(step.id)}
                            className={cn(
                                "relative pl-6 cursor-pointer transition-all duration-300",
                                currentStep === step.id ? "opacity-100 scale-105" : "opacity-50 hover:opacity-80"
                            )}
                        >
                            {/* Step Indicator Line */}
                            <div className={cn(
                                "absolute left-0 top-1 bottom-1 w-1 rounded-full bg-border",
                                currentStep === step.id && step.id === 1 ? "bg-warning" :
                                    currentStep === step.id && step.id === 2 ? "bg-blue-400" :
                                        currentStep === step.id && step.id === 3 ? "bg-pink-400" :
                                            currentStep === step.id && step.id === 4 ? "bg-success" : ""
                            )} />

                            <div className="flex items-center gap-3">
                                <div className={cn("p-2 rounded-lg bg-sidebar border border-border", step.color)}>
                                    <step.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-foreground text-sm">{step.title}</h3>
                                    <p className="text-xs text-sidebar-foreground">{step.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tech Stack for Active Step */}
                <div className="mt-8 pt-6 border-t border-border">
                    <h4 className="text-xs uppercase font-bold text-sidebar-foreground mb-3 flex items-center gap-2">
                        <Cpu size={12} /> Technology Required
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {activeStepData.tech.map(t => (
                            <span key={t} className="text-[10px] bg-accent/10 text-accent border border-accent/20 px-2 py-1 rounded">
                                {t}
                            </span>
                        ))}
                    </div>

                    <h4 className="text-xs uppercase font-bold text-sidebar-foreground mt-4 mb-3 flex items-center gap-2">
                        <Database size={12} /> Data Sources
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {activeStepData.data.map(d => (
                            <span key={d} className="text-[10px] bg-sidebar-foreground/10 text-sidebar-foreground border border-border px-2 py-1 rounded">
                                {d}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Panel: Simulation Stage */}
            <div className="lg:col-span-2 bg-black/40 border border-border rounded-2xl p-8 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <activeStepData.icon size={200} />
                </div>

                <div className="flex-1 flex items-center justify-center relative z-10">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && <SparkSimulation key="step1" />}
                        {currentStep === 2 && <WebSimulation key="step2" />}
                        {currentStep === 3 && <SmokingGunSimulation key="step3" />}
                        {currentStep === 4 && <TakedownSimulation key="step4" />}
                    </AnimatePresence>
                </div>

                <div className="mt-8 flex justify-between items-center z-10">
                    <div className="text-sm text-sidebar-foreground italic">
                        Simulation Mode: Live Playback
                    </div>
                    <button
                        onClick={() => setCurrentStep(prev => prev < 4 ? prev + 1 : 1)}
                        className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 transition-colors"
                    >
                        {currentStep === 4 ? "Restart Case" : "Next Phase"} <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

// --- Sub-Components for Simulations ---

function SparkSimulation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-md bg-sidebar border border-border rounded-xl p-4 shadow-2xl"
        >
            <div className="flex justify-between items-center mb-4 border-b border-border pb-2">
                <span className="font-mono font-bold text-warning">⚠ ANOMALY DETEECTED</span>
                <span className="text-xs text-sidebar-foreground">10:42:15 AM</span>
            </div>
            {/* Simulated Chart */}
            <div className="h-32 flex items-end gap-1 mb-4">
                {[20, 35, 25, 30, 22, 18, 25, 30, 25, 40, 95, 100, 90, 85].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className={cn("w-full rounded-t-sm", h > 80 ? "bg-warning animate-pulse" : "bg-sidebar-foreground/20")}
                    />
                ))}
            </div>
            <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                    <span className="text-sidebar-foreground">Symbol:</span>
                    <span className="font-bold text-foreground">ASTRAL_POLY</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sidebar-foreground">Volume Sigma:</span>
                    <span className="font-bold text-destructive">+14.2σ (Extreme)</span>
                </div>
                <div className="bg-destructive/10 text-destructive p-2 rounded mt-2 text-center font-bold animate-pulse">
                    Triggering UPSI Check...
                </div>
            </div>
        </motion.div>
    )
}

function WebSimulation() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
        >
            {/* Nodes */}
            <motion.div
                initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="absolute left-10 top-1/2 -translate-y-1/2 bg-sidebar border border-accent rounded-full w-24 h-24 flex flex-col items-center justify-center z-10"
            >
                <User size={24} className="text-accent mb-1" />
                <span className="text-[10px] font-bold">Trader A</span>
                <span className="text-[8px] text-sidebar-foreground">Suspect</span>
            </motion.div>

            <motion.div
                initial={{ width: 0 }} animate={{ width: 200 }} transition={{ delay: 0.5, duration: 0.5 }}
                className="h-1 bg-accent/50 absolute left-28 top-1/2 -translate-y-1/2"
            />

            <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}
                className="absolute bg-background border border-border px-3 py-1 rounded-full text-[10px] font-mono z-20"
            >
                MATCH: Shared Address
            </motion.div>

            <motion.div
                initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="absolute right-10 top-1/2 -translate-y-1/2 bg-sidebar border border-destructive rounded-full w-24 h-24 flex flex-col items-center justify-center z-10"
            >
                <Database size={24} className="text-destructive mb-1" />
                <span className="text-[10px] font-bold">Director</span>
                <span className="text-[8px] text-sidebar-foreground">Insider</span>
            </motion.div>
        </motion.div>
    )
}

function SmokingGunSimulation() {
    return (
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="w-full max-w-sm bg-sidebar border border-border rounded-3xl p-4 flex flex-col gap-4 font-sans"
        >
            <div className="flex items-center gap-2 border-b border-border pb-2 mb-2">
                <Smartphone size={16} className="text-pink-400" />
                <span className="text-xs font-bold text-foreground">WA_EXPORT_882.txt</span>
            </div>

            <div className="bg-background/50 p-3 rounded-tl-xl rounded-tr-xl rounded-br-xl self-start max-w-[80%]">
                <p className="text-xs text-sidebar-foreground">Market is flat today. Boring.</p>
                <span className="text-[8px] opacity-50 block mt-1">10:40 AM</span>
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-accent/20 border border-accent/30 p-3 rounded-tl-xl rounded-tr-xl rounded-bl-xl self-end max-w-[80%] relative"
            >
                <div className="absolute -top-2 -right-2 bg-destructive text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm animate-bounce">
                    FLAGGED
                </div>
                <p className="text-xs text-foreground font-bold">"Results are leaking early. Buy ASTRAL now. 20% gap up guaranteed."</p>
                <span className="text-[8px] opacity-50 block mt-1">10:41 AM</span>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="bg-pink-400/10 text-pink-400 text-xs p-2 rounded text-center border border-pink-400/20 font-mono"
            >
                NLP Confidence: 99.8% (Material Non-Public Info)
            </motion.div>
        </motion.div>
    )
}

function TakedownSimulation() {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-md bg-white text-black rounded-lg shadow-2xl p-8 relative"
        >
            <div className="absolute top-4 right-4 opacity-20">
                <img src="/emblem.png" alt="" className="w-16 h-16 grayscale" />
                {/* Fallback visual if image fails is fine, opacity handles it */}
            </div>

            <div className="text-center mb-6 border-b-2 border-black pb-4">
                <h3 className="font-serif font-bold text-lg uppercase">Securities and Exchange Board of India</h3>
                <p className="font-serif text-xs italic">Ex-Parte Ad-Interim Order</p>
            </div>

            <div className="space-y-4 font-serif text-xs leading-relaxed opacity-80">
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="h-2 bg-black/10 rounded overflow-hidden"
                >
                    <div className="h-full bg-black/40 w-full" />
                </motion.div>
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5, ease: "linear" }}
                    className="h-2 bg-black/10 rounded overflow-hidden"
                >
                    <div className="h-full bg-black/40 w-full" />
                </motion.div>
                <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 0.8, delay: 1, ease: "linear" }}
                    className="h-2 bg-black/10 rounded overflow-hidden"
                >
                    <div className="h-full bg-black/40 w-full" />
                </motion.div>
            </div>

            <motion.div
                initial={{ scale: 2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
                className="mt-8 border-4 border-destructive text-destructive font-bold text-xl uppercase p-4 transform -rotate-12 text-center opacity-80"
            >
                Assets Frozen
            </motion.div>

            <div className="absolute bottom-2 right-4 text-[8px] font-mono text-gray-500">
                Generated by Legal-BERT v2.1
            </div>
        </motion.div>
    )
}
