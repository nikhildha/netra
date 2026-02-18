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
    Smartphone,
    TrendingUp,
    Users,
    FileSearch,
    Lock
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
type CaseId = 'mercury' | 'saturn' | 'jupiter' | 'neptune';

type CaseConfig = {
    id: CaseId;
    name: string;
    type: string;
    description: string;
    trigger: string; // New Trigger Field
    steps: StepConfig[];
};

type StepConfig = {
    id: number;
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    tech: string[];
    data: string[];
    narration: string;
    // New Efficiency Comparison Data
    comparison: {
        legacy: { method: string; time: string };
        netra: { method: string; time: string };
        gain: string;
    };


    // Dynamic props for the simulation components
    simulation: {
        spark: { label: string; value: string; chartType: 'spike' | 'sequence' | 'volume' | 'flat' };
        web: { leftNode: string; rightNode: string; linkLabel: string; leftIcon: any; rightIcon: any };
        smokingGun: { type: 'chat' | 'audio' | 'email' | 'bank'; title: string; content: string; match: string; evidenceLabel: string };
        takedown: { title: string; action: string };
    };
};

// --- Data ---
const cases: Record<CaseId, CaseConfig> = {
    mercury: {
        id: 'mercury',
        name: "Operation Mercury",
        type: "Insider Trading",
        description: "CFO leaking Quarterly Results to a proxy trader.",
        trigger: "Anonymous Whistleblower Complaint (SCORES Portal)",
        steps: [
            {
                id: 1,
                title: "The Spark",
                subtitle: "Anomaly Detection",
                icon: AlertTriangle,
                color: "text-warning",
                tech: ["Apache Flink", "LSTM Autoencoder"],
                data: ["Tick-by-Tick Orders", "Hist. Volatility"],
                narration: "System detects a 14-sigma volume spike in ASTRAL_POLY just 2 days before earnings. No public news to justify this accumulation.",
                comparison: { legacy: { method: "Manual Excel Analysis of EOD Data", time: "2-3 Days" }, netra: { method: "Real-time Stream Processing (Flink)", time: "10 Milliseconds" }, gain: "250,000x Faster" },
                simulation: { spark: { label: "Volume Sigma", value: "+14.2σ (Extreme)", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 2,
                title: "The Web",
                subtitle: "Entity Linkage",
                icon: Network,
                color: "text-blue-400",
                tech: ["Graph Neural Networks", "Neo4j"],
                data: ["KYC Records", "MCA Director Data"],
                narration: "Connecting the dots: The aggressive buyer (Trader A) shares a past residential address with the Conmpany's CFO. A clear 'Connected Entity' link.",
                comparison: { legacy: { method: "Manual Request to Depositories (KYC)", time: "1-2 Weeks" }, netra: { method: "Knowledge Graph Query (Neo4j)", time: "0.5 Seconds" }, gain: "Instant Linkage" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "Trader A", rightNode: "Director", linkLabel: "Shared Address (Past)", leftIcon: User, rightIcon: Database }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 3,
                title: "The Smoking Gun",
                subtitle: "Digital Forensics",
                icon: MessageSquare,
                color: "text-pink-400",
                tech: ["Cellebrite (UFED)", "NLP (Context)"],
                data: ["Seized Device", "Cloud Backup"],
                narration: "Device seizure confirms intent. Deleted WhatsApp messages reveal the CFO explicitly tipping off the trader about the upcoming guidance beat.",
                comparison: { legacy: { method: "Manual Keyword Search by Forensics Team", time: "1 Month" }, netra: { method: "AI Contextual NLP & OCR", time: "1 Hour" }, gain: "700x Faster" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "WA_EXPORT_882.txt", content: "Results are leaking early. Buy ASTRAL now.", match: "UPSI Leak Match", evidenceLabel: "iPhone 15 Pro" }, takedown: { title: "", action: "" } }
            },
            {
                id: 4,
                title: "The Takedown",
                subtitle: "Enforcement",
                icon: Gavel,
                color: "text-success",
                tech: ["Legal-BERT", "Auto-Drafting"],
                data: ["SEBI Precedents", "Case Laws"],
                narration: "Immediate action: AI drafts an Ex-Parte Ad-Interim Order. Bank accounts are frozen and unlawful gains are impounded pending final investigation.",
                comparison: { legacy: { method: "Manual Drafting by Legal Team", time: "5-7 Days" }, netra: { method: "Generative AI Order Drafting", time: "2 Minutes" }, gain: "Assets Frozen Instantly" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "Ex-Parte Interim Order", action: "Assets Frozen" } }
            }
        ]
    },
    saturn: {
        id: 'saturn',
        name: "Operation Saturn",
        type: "Front Running",
        description: "Dealer buying stocks before plotting big Mutual Fund orders.",
        trigger: "Exchange Surveillance Alert #9921 (Pattern Match)",
        steps: [
            {
                id: 1,
                title: "The Spark",
                subtitle: "Sequence Mining",
                icon: TrendingUp,
                color: "text-orange-400",
                tech: ["Complex Event Processing", "Sequence Matcher"],
                data: ["Trade Log", "Order Book Replay"],
                narration: "Pattern Match: Every time the Mutual Fund places a large 'Buy' order, this specific individual account buys 30 seconds earlier. A textbook A-B-A sequence.",
                comparison: { legacy: { method: "Post-facto Audit of Trade Logs", time: "End of Quarter" }, netra: { method: "Live Complex Event Processing", time: "Real-time" }, gain: "Preventive Alerts" },
                simulation: { spark: { label: "Pattern Match", value: "A-B-A Sequence", chartType: 'sequence' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 2,
                title: "The Web",
                subtitle: "Device Fingerprint",
                icon: Network,
                color: "text-blue-400",
                tech: ["IP Clustering", "IMEI Tracking"],
                data: ["Broker Logs", "ISP Records"],
                narration: "Digital Fingerprint: The 'Mule Account' is being operated from a mobile device that logs into the same WiFi IP address as the Dealer's personal phone.",
                comparison: { legacy: { method: "Subpoena to ISP/Telco", time: "3-4 Weeks" }, netra: { method: "Unified Device Graph", time: "Instant" }, gain: "Immediate Correlation" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "Dealer ID", rightNode: "Mule Acct", linkLabel: "Same IMEI & IP", leftIcon: Cpu, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 3,
                title: "The Smoking Gun",
                subtitle: "Voice Analytics",
                icon: MessageSquare,
                color: "text-pink-400",
                tech: ["Speech-to-Text", "Audio Fingerprint"],
                data: ["Recorded Line", "Dealer Room Mic"],
                narration: "Audio Surveillance: Dealing room voice logs capture the Dealer instructing an accomplice to 'punch the trade' moments before executing the Fund's order.",
                comparison: { legacy: { method: "Manual Listening to Hours of Tape", time: "Weeks" }, netra: { method: "Speech-to-Text Keyword Spotting", time: "Minutes" }, gain: "100% Coverage" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'audio', title: "REC_LINE_04.mp3", content: "Punching the big HDFC order in 5 mins. Get in now.", match: "Voice Match: 99%", evidenceLabel: "Dealing Room Log" }, takedown: { title: "", action: "" } }
            },
            {
                id: 4,
                title: "The Takedown",
                subtitle: "Impoundment",
                icon: Gavel,
                color: "text-success",
                tech: ["Profit Calculation", "Asset Tracing"],
                data: ["Bank API", "Demat Statement"],
                narration: "Recovery: Total unlawful gains calculated at ₹45 Cr. Impoundment order issued to recover these funds from the mule accounts.",
                comparison: { legacy: { method: "Manual Forensic Audit", time: "2-3 Months" }, netra: { method: "Algorithmic Profit Calculation", time: "Instant" }, gain: "Zero Dissipation Risk" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "Impounding Order", action: "₹45 Cr Seized" } }
            }
        ]
    },
    jupiter: {
        id: 'jupiter',
        name: "Operation Jupiter",
        type: "Pump & Dump",
        description: "Telegram influencer hyping penny stocks for promoter exit.",
        trigger: "Social Media Sentiment Spike (S.O.N.A.R. System)",
        steps: [
            {
                id: 1,
                title: "The Spark",
                subtitle: "Volume Anomaly",
                icon: AlertTriangle,
                color: "text-red-500",
                tech: ["Volume Profile", "Sentiment AI"],
                data: ["Social Media Firehose", "Market Feed"],
                narration: "A dormant penny stock suddenly sees 5000% volume. Correlates perfectly with a 'Buy Recommendation' blast on 50 Telegram channels.",
                comparison: { legacy: { method: "Manual Complaint Monitoring", time: "Post-Collapse" }, netra: { method: "AI Social Listening (S.O.N.A.R)", time: "Pre-Surge" }, gain: "Proactive Prevention" },
                simulation: { spark: { label: "Vol Increase", value: "+5000% (No News)", chartType: 'volume' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 2,
                title: "The Web",
                subtitle: "Money Trail",
                icon: Network,
                color: "text-blue-400",
                tech: ["Money Flow Graph", "Crypto Trace"],
                data: ["Bank Txns", "UPI Logs"],
                narration: "Follow the Money: The 'unbiased' Influencer received ₹50 Lakhs from the Company Promoter's shell entity just days before the recommendation.",
                comparison: { legacy: { method: "Bank Statement Requisition", time: "1-2 Months" }, netra: { method: "Integrated FinNet Graph", time: "Instant" }, gain: "Trace Hidden Flows" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "Influencer", rightNode: "Promoter", linkLabel: "₹50L Transfer", leftIcon: Smartphone, rightIcon: Database }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 3,
                title: "The Smoking Gun",
                subtitle: "Contract Leak",
                icon: FileSearch,
                color: "text-pink-400",
                tech: ["Document AI", "Email Scraping"],
                data: ["Email Dump", "Cloud Drive"],
                narration: "The Smoking Gun: A 'Rate Card' invoice found in email dumps explicitly lists price packages for 'Pumping' shares to retail victims.",
                comparison: { legacy: { method: "Physical Raids & Analysis", time: "Months" }, netra: { method: "Cloud Evidence Scraper", time: "Minutes" }, gain: "Rapid Evidence" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'email', title: "INVOICE_22.pdf", content: "Rate Card: ₹2L for one 'Buy Recommended' video.", match: "Paid Promotion", evidenceLabel: "Gmail Backup" }, takedown: { title: "", action: "" } }
            },
            {
                id: 4,
                title: "The Takedown",
                subtitle: "Market Ban",
                icon: Gavel,
                color: "text-success",
                tech: ["Generative AI", "Auto-Drafting"],
                data: ["SEBI Act", "PFUTP Regs"],
                narration: "Justice Served: The Influencer and Promoters are debarred from the capital markets for 5 years. Disgorgement proceedings initiated.",
                comparison: { legacy: { method: "Long Legal Process", time: "Years" }, netra: { method: "AI-Assisted Adjudication", time: "Weeks" }, gain: "Swift Justice" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "Confirmatory Order", action: "Debarred: 5 Yrs" } }
            }
        ]
    },
    neptune: {
        id: 'neptune',
        name: "Operation Neptune",
        type: "Circular Trading",
        description: "Cartel of shell companies trading to create fake volume.",
        trigger: "Tax Evasion Report (GST Network Interface)",
        steps: [
            {
                id: 1,
                title: "The Spark",
                subtitle: "Wash Trade",
                icon: AlertTriangle,
                color: "text-purple-400",
                tech: ["Cycle Detection", "Graph Algo"],
                data: ["Trade Order Log", "Beneficial Owner"],
                narration: "Wash Trading Algo: Volume is high, but 0% of shares changed 'Beneficial Ownership'. The same shares are just rotating between A -> B -> C -> A.",
                comparison: { legacy: { method: "Random Sample Audits", time: "Hit or Miss" }, netra: { method: "Algorithmic Graph Cycle Detection", time: "100% Capture" }, gain: "Zero Escape" },
                simulation: { spark: { label: "Net Change", value: "0% Ownership", chartType: 'flat' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 2,
                title: "The Web",
                subtitle: "Common Address",
                icon: Network,
                color: "text-blue-400",
                tech: ["Geospatial Clustering", "Fuzzy Match"],
                data: ["GST Records", "MCA Data"],
                narration: "Physical Verification: 50 different 'Trading Companies' are all registered to a single 10x10 ft room in a remote location. A classic shell cartel.",
                comparison: { legacy: { method: "Manual Site Visits", time: "Days/Site" }, netra: { method: "Geospatial Clustering", time: "Instant" }, gain: "Scale at Speed" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "Entity A..Z", rightNode: "1 Office", linkLabel: "50 Cos / 1 Room", leftIcon: Users, rightIcon: Database }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "", action: "" } }
            },
            {
                id: 3,
                title: "The Smoking Gun",
                subtitle: "Layering",
                icon: FileText,
                color: "text-pink-400",
                tech: ["Forensic Accounting", "Flow Analysis"],
                data: ["Bank Statements", "Ledgers"],
                narration: "Money Layering: Bank statements show funds moving in a circle within minutes to create flexible liquidity for the fake trades.",
                comparison: { legacy: { method: "Excel Forensic Accounting", time: "Months" }, netra: { method: "Automated Flow Analysis", time: "Minutes" }, gain: "Complex Patterns Solved" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'bank', title: "HDFC_STMT_OCT.pdf", content: "Funds rotated: A -> B -> C -> A (Same Day)", match: "Round Tripping", evidenceLabel: "Bank Server" }, takedown: { title: "", action: "" } }
            },
            {
                id: 4,
                title: "The Takedown",
                subtitle: "Cancellation",
                icon: Gavel,
                color: "text-success",
                tech: ["Auto-Drafting", "Compliance Check"],
                data: ["Registration Rules", "KYC Norms"],
                narration: "Cleanup: The registrations of all 50 shell entities are cancelled. The network is permanently dismantled.",
                comparison: { legacy: { method: "Individual Show Cause Notices", time: "Tedious" }, netra: { method: "Bulk Action Processing", time: "One Click" }, gain: "Total Cleanup" },
                simulation: { spark: { label: "", value: "", chartType: 'spike' }, web: { leftNode: "", rightNode: "", linkLabel: "", leftIcon: User, rightIcon: User }, smokingGun: { type: 'chat', title: "", content: "", match: "", evidenceLabel: "" }, takedown: { title: "Final Order", action: "Licence Cancelled" } }
            }
        ]
    }
};

export function InvestigationBoard() {
    const [activeCaseId, setActiveCaseId] = useState<CaseId>('mercury');
    const [currentStep, setCurrentStep] = useState(1);

    const activeCase = cases[activeCaseId];
    const activeStepData = activeCase.steps.find(s => s.id === currentStep)!;

    return (
        <div className="grid grid-cols-12 gap-6 h-[720px] lg:h-[650px]">
            {/* Case Selector Sidebar */}
            <div className="col-span-12 lg:col-span-3 bg-sidebar border border-border rounded-2xl p-4 flex flex-col gap-2 overflow-y-auto max-h-[250px] lg:max-h-full">
                <h3 className="text-xs font-bold text-sidebar-foreground uppercase mb-2 px-2">Active Operations</h3>
                {Object.values(cases).map((c) => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveCaseId(c.id); setCurrentStep(1); }}
                        className={cn(
                            "text-left p-3 rounded-xl border transition-all hover:bg-accent/5",
                            activeCaseId === c.id
                                ? "bg-accent/10 border-accent/50 shadow-sm"
                                : "bg-transparent border-transparent hover:border-border"
                        )}
                    >
                        <div className="flex justify-between items-start mb-1">
                            <span className={cn("font-bold text-sm", activeCaseId === c.id ? "text-accent" : "text-foreground")}>
                                {c.name}
                            </span>
                            {activeCaseId === c.id && <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />}
                        </div>
                        <div className="text-xs text-sidebar-foreground line-clamp-2">{c.description}</div>
                        <div className="mt-2 text-[10px] font-mono bg-background/50 inline-block px-1.5 py-0.5 rounded border border-border/50">
                            {c.type}
                        </div>
                    </button>
                ))}
            </div>

            {/* Main Board Area */}
            <div className="col-span-12 lg:col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Steps Navigation */}
                <div className="lg:col-span-1 bg-sidebar border border-border rounded-2xl p-6 flex flex-col">
                    <div className="mb-6">
                        <div className="flex items-center gap-2 mb-1">
                            <Lock size={14} className="text-destructive" />
                            <span className="text-xs font-bold text-destructive uppercase tracking-widest">Top Secret</span>
                        </div>
                        <h2 className="text-xl font-bold text-foreground">{activeCase.name}</h2>
                        <p className="text-sm text-sidebar-foreground">{activeCase.type}</p>

                        {/* Trigger Badge */}
                        <div className="mt-2 mb-2 p-2 bg-muted/50 rounded-lg text-[10px] text-sidebar-foreground border border-border">
                            <span className="font-bold text-foreground block">Trigger Source:</span>
                            {activeCase.trigger}
                        </div>
                    </div>

                    <div className="space-y-4 flex-1">
                        {activeCase.steps.map((step) => (
                            <div
                                key={step.id}
                                onClick={() => setCurrentStep(step.id)}
                                className={cn(
                                    "relative pl-6 cursor-pointer transition-all duration-300",
                                    currentStep === step.id ? "opacity-100 scale-105" : "opacity-50 hover:opacity-80"
                                )}
                            >
                                <div className={cn(
                                    "absolute left-0 top-1 bottom-1 w-1 rounded-full bg-border",
                                    currentStep === step.id ? step.color.replace("text-", "bg-") : ""
                                )} />

                                <div className="flex items-center gap-3">
                                    <div className={cn("p-2 rounded-lg bg-sidebar border border-border", step.color)}>
                                        <step.icon size={18} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground text-sm">{step.title}</h3>
                                        <p className="text-xs text-sidebar-foreground">{step.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tech & Data */}
                    <div className="mt-6 pt-6 border-t border-border">
                        <h4 className="text-[10px] uppercase font-bold text-sidebar-foreground mb-2 flex items-center gap-1">
                            <Cpu size={10} /> Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                            {activeStepData.tech.map(t => (
                                <span key={t} className="text-[10px] bg-accent/10 text-accent border border-accent/20 px-1.5 py-0.5 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <h4 className="text-[10px] uppercase font-bold text-sidebar-foreground mb-2 flex items-center gap-1">
                            <Database size={10} /> Data Sources
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                            {activeStepData.data.map(d => (
                                <span key={d} className="text-[10px] bg-sidebar-foreground/10 text-sidebar-foreground border border-border px-1.5 py-0.5 rounded">
                                    {d}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Simulation Stage */}
                <div className="lg:col-span-2 bg-black/40 border border-border rounded-2xl p-8 relative overflow-hidden flex flex-col min-h-[400px]">
                    <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                        <activeStepData.icon size={200} />
                    </div>

                    <div className="flex-1 flex items-center justify-center relative z-10 w-full">
                        <AnimatePresence mode="wait">
                            {currentStep === 1 && <SparkSimulation key={activeCaseId + "s1"} config={activeStepData.simulation.spark} />}
                            {currentStep === 2 && <WebSimulation key={activeCaseId + "s2"} config={activeStepData.simulation.web} />}
                            {currentStep === 3 && <SmokingGunSimulation key={activeCaseId + "s3"} config={activeStepData.simulation.smokingGun} />}
                            {currentStep === 4 && <TakedownSimulation key={activeCaseId + "s4"} config={activeStepData.simulation.takedown} />}
                        </AnimatePresence>
                    </div>

                    {/* Narration Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={currentStep + activeCaseId} // Re-animate on step change
                        className="bg-sidebar border border-border/50 rounded-xl p-4 mb-4 z-20 relative"
                    >
                        <div className="absolute -top-2 left-4 bg-primary text-primary-foreground text-[9px] px-2 py-0.5 rounded shadow-sm border border-primary/20">
                            AGENT NOTES
                        </div>
                        <p className="text-xs text-foreground font-mono leading-relaxed">
                            "{activeStepData.narration}"
                        </p>
                    </motion.div>

                    {/* Efficiency Comparison */}
                    <div className="grid grid-cols-2 gap-4 mt-auto z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                            className="bg-destructive/10 border border-destructive/20 rounded-lg p-3"
                        >
                            <div className="text-[10px] text-destructive uppercase font-bold mb-1">Legacy Method</div>
                            <div className="text-xs text-foreground font-medium mb-1 line-clamp-1">{activeStepData.comparison.legacy.method}</div>
                            <div className="text-[10px] text-sidebar-foreground">Avg Time: <span className="text-foreground">{activeStepData.comparison.legacy.time}</span></div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
                            className="bg-success/10 border border-success/20 rounded-lg p-3 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 bg-success text-black text-[9px] font-bold px-2 py-0.5 rounded-bl">
                                {activeStepData.comparison.gain}
                            </div>
                            <div className="text-[10px] text-success uppercase font-bold mb-1">NETRA AI</div>
                            <div className="text-xs text-foreground font-medium mb-1 line-clamp-1">{activeStepData.comparison.netra.method}</div>
                            <div className="text-[10px] text-sidebar-foreground">Avg Time: <span className="text-foreground font-bold">{activeStepData.comparison.netra.time}</span></div>
                        </motion.div>
                    </div>

                    <div className="mt-8 flex justify-between items-center z-10 border-t border-white/5 pt-4">
                        <div className="text-xs text-sidebar-foreground flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                            Live Simulation
                        </div>
                        <button
                            onClick={() => setCurrentStep(prev => prev < 4 ? prev + 1 : 1)}
                            className="bg-accent hover:bg-accent/90 text-white px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-accent/20"
                        >
                            {currentStep === 4 ? "Restart" : "Next Phase"} <ArrowRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Dynamic Sub-Components ---

function SparkSimulation({ config }: { config: StepConfig['simulation']['spark'] }) {
    // Generate different charts based on type
    const data = config.chartType === 'volume'
        ? [10, 12, 11, 13, 12, 11, 14, 12, 15, 95, 100, 92, 88]
        : config.chartType === 'flat'
            ? [50, 52, 48, 51, 49, 50, 51, 49, 50, 50, 51, 49]
            : config.chartType === 'sequence'
                ? [20, 30, 40, 30, 20, 10, 20, 80, 20, 10] // A-B-A pattern
                : [20, 35, 25, 30, 22, 18, 25, 30, 25, 40, 95, 100, 90, 85]; // Default Spike

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="w-full max-w-md bg-sidebar border border-border rounded-xl p-4 shadow-2xl"
        >
            <div className="flex justify-between items-center mb-4 border-b border-border pb-2">
                <span className="font-mono font-bold text-warning flex items-center gap-2">
                    <AlertTriangle size={14} /> ANOMALY DETECTED
                </span>
                <span className="text-[10px] text-sidebar-foreground font-mono">ID: {Math.floor(Math.random() * 9999)}</span>
            </div>

            <div className="h-32 flex items-end gap-1 mb-4">
                {data.map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05 }}
                        className={cn(
                            "w-full rounded-t-sm",
                            h > 80 || (config.chartType === 'sequence' && i === 7) ? "bg-warning animate-pulse" : "bg-sidebar-foreground/20"
                        )}
                    />
                ))}
            </div>

            <div className="flex justify-between items-end">
                <div>
                    <div className="text-xs text-sidebar-foreground">{config.label}</div>
                    <div className="text-xl font-bold text-foreground">{config.value}</div>
                </div>
                <div className="bg-destructive/10 text-destructive text-[10px] px-2 py-1 rounded font-bold uppercase animate-pulse border border-destructive/20">
                    Flagged by AI
                </div>
            </div>
        </motion.div>
    )
}

function WebSimulation({ config }: { config: StepConfig['simulation']['web'] }) {
    const LeftIcon = config.leftIcon;
    const RightIcon = config.rightIcon;

    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center p-8"
        >
            {/* Left Node */}
            <motion.div
                initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="absolute left-[10%] bg-sidebar border border-accent/50 rounded-2xl w-28 h-28 flex flex-col items-center justify-center z-10 shadow-lg shadow-accent/10"
            >
                <LeftIcon size={32} className="text-accent mb-2" />
                <span className="text-xs font-bold text-center px-2">{config.leftNode}</span>
            </motion.div>

            {/* Connection Line */}
            <div className="absolute inset-x-[25%] top-1/2 -translate-y-1/2 h-0.5 bg-border overflow-hidden">
                <motion.div
                    initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ delay: 0.5, duration: 0.8 }}
                    className="w-full h-full bg-accent"
                />
            </div>

            {/* Match Label */}
            <motion.div
                initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1 }}
                className="absolute bg-background border border-destructive text-destructive px-4 py-2 rounded-lg text-xs font-bold shadow-xl z-20 flex items-center gap-2"
            >
                <Network size={14} /> {config.linkLabel}
            </motion.div>

            {/* Right Node */}
            <motion.div
                initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
                className="absolute right-[10%] bg-sidebar border border-destructive/50 rounded-2xl w-28 h-28 flex flex-col items-center justify-center z-10 shadow-lg shadow-destructive/10"
            >
                <RightIcon size={32} className="text-destructive mb-2" />
                <span className="text-xs font-bold text-center px-2">{config.rightNode}</span>
            </motion.div>
        </motion.div>
    )
}

function SmokingGunSimulation({ config }: { config: StepConfig['simulation']['smokingGun'] }) {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
            className="w-full max-w-md bg-sidebar border border-border rounded-xl overflow-hidden shadow-2xl"
        >
            <div className="bg-muted/50 p-3 border-b border-border flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {config.type === 'chat' && <Smartphone size={16} className="text-pink-400" />}
                    {config.type === 'audio' && <FileText size={16} className="text-orange-400" />}
                    {config.type === 'email' && <FileSearch size={16} className="text-blue-400" />}
                    {config.type === 'bank' && <Database size={16} className="text-purple-400" />}
                    <div>
                        <div className="text-[10px] font-bold text-foreground uppercase tracking-wider">Forensic Artifact</div>
                        <div className="text-[8px] text-sidebar-foreground">Source: {config.evidenceLabel}</div>
                    </div>
                </div>
                <div className="text-[8px] font-mono bg-background border border-border px-1 py-0.5 rounded text-sidebar-foreground">
                    EVIDENCE #00{Math.floor(Math.random() * 9)}
                </div>
            </div>

            <div className="p-5 space-y-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-background rounded-lg flex items-center justify-center border border-border">
                        <FileText size={20} className="text-sidebar-foreground" />
                    </div>
                    <div>
                        <div className="text-sm font-bold text-foreground">{config.title}</div>
                        <div className="text-xs text-sidebar-foreground">Size: 4.2 MB • Decrypted</div>
                    </div>
                </div>

                <div className="bg-background/50 border border-border rounded-lg p-3 relative">
                    <div className="absolute -top-3 right-2 bg-destructive text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-md animate-bounce">
                        CRITICAL MATCH
                    </div>

                    <p className="font-mono text-xs text-foreground leading-relaxed">
                        "{config.content}"
                    </p>

                    <div className="mt-3 pt-3 border-t border-border/50 flex justify-between items-center text-[10px]">
                        <span className="text-sidebar-foreground">AI Tag:</span>
                        <span className="text-destructive font-bold">{config.match}</span>
                    </div>
                </div>
            </div>

            <div className="bg-accent/5 p-2 text-center border-t border-accent/10">
                <span className="text-[9px] text-accent uppercase font-bold tracking-widest">Admissible in Court (65B Cert)</span>
            </div>
        </motion.div>
    )
}

function TakedownSimulation({ config }: { config: StepConfig['simulation']['takedown'] }) {
    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ opacity: 0 }}
            className="text-center"
        >
            <div className="relative inline-block">
                <div className="w-48 h-64 bg-white text-black rounded shadow-2xl p-6 flex flex-col items-center rotate-3 transition-transform hover:rotate-0 duration-500">
                    <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mb-4 opacity-50">
                        <Gavel size={24} />
                    </div>
                    <div className="text-xs font-serif italic text-gray-500 mb-2">Government of India</div>
                    <div className="font-serif font-bold text-sm uppercase border-b-2 border-black pb-2 mb-4 w-full text-center">
                        {config.title}
                    </div>
                    <div className="space-y-2 w-full opacity-30">
                        <div className="h-1 bg-black w-full rounded" />
                        <div className="h-1 bg-black w-3/4 rounded" />
                        <div className="h-1 bg-black w-full rounded" />
                        <div className="h-1 bg-black w-5/6 rounded" />
                    </div>

                    <motion.div
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, type: 'spring' }}
                        className="mt-auto border-4 border-destructive text-destructive font-bold text-lg uppercase p-2 -rotate-12 opacity-80"
                    >
                        {config.action}
                    </motion.div>
                </div>

                {/* Background Stacks */}
                <div className="absolute top-2 -right-4 w-48 h-64 bg-white rounded shadow-xl -z-10 rotate-6" />
                <div className="absolute top-4 -right-8 w-48 h-64 bg-white rounded shadow-lg -z-20 rotate-12" />
            </div>

            <div className="mt-8">
                <div className="text-xs text-sidebar-foreground">Drafted by</div>
                <div className="text-sm font-bold text-accent">Legal-BERT v2.1</div>
            </div>
        </motion.div>
    )
}
