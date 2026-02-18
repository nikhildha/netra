"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Users, Zap, Search, Network, Lock, FileText, Globe, Cpu, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AIAdvantagePage() {
    return (
        <div className="max-w-7xl mx-auto space-y-16 pb-16">

            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-3xl bg-sidebar border border-border p-12 text-center">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent"></div>
                    <Globe className="absolute -top-12 -right-12 text-foreground/20 w-64 h-64" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6 border border-accent/20">
                        <SparklesIcon /> The NETRA USP
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
                        Seeing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Unseen</span>
                    </h1>
                    <p className="text-xl text-sidebar-foreground max-w-3xl mx-auto leading-relaxed">
                        Why AI? Because modern market manipulation is too fast, too complex, and too subtle for human analysis alone. NETRA bridges the cognitive gap.
                    </p>
                </motion.div>
            </div>

            {/* Section 1: The Cognitive Gap (Human vs AI) */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400"><Users size={24} /></div>
                    <h2 className="text-3xl font-bold text-foreground">The Cognitive Gap</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Human Capacity */}
                    <div className="bg-sidebar border border-border rounded-2xl p-8 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                            <Users className="text-sidebar-foreground" /> Human Analyst
                        </h3>
                        <p className="text-sidebar-foreground mb-8">Linear processing power. Limited by fatigue and cognitive load.</p>

                        <div className="space-y-6">
                            <MetricRow label="Data Processing" value="~50 Alerts / Day" barWidth="10%" color="bg-red-500" />
                            <MetricRow label="Pattern Recognition" value="Single Stock Focus" barWidth="20%" color="bg-red-500" />
                            <MetricRow label="Reaction Time" value="15-30 Minutes" barWidth="5%" color="bg-red-500" />
                            <MetricRow label="Context Window" value="Recent Events Only" barWidth="15%" color="bg-red-500" />
                        </div>
                    </div>

                    {/* AI Capacity */}
                    <div className="bg-sidebar border border-border rounded-2xl p-8 relative overflow-hidden group border-accent/50 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                            <BrainCircuit className="text-accent" /> NETRA AI
                        </h3>
                        <p className="text-sidebar-foreground mb-8">Exponential processing power. Parallel, untiring, and omniscient.</p>

                        <div className="space-y-6">
                            <MetricRow label="Data Processing" value="12.4 Million / Sec" barWidth="100%" color="bg-accent" isAnimated />
                            <MetricRow label="Pattern Recognition" value="Cross-Market Correlation" barWidth="100%" color="bg-accent" isAnimated delay={0.2} />
                            <MetricRow label="Reaction Time" value="42 Milliseconds" barWidth="100%" color="bg-accent" isAnimated delay={0.4} />
                            <MetricRow label="Context Window" value="10-Year Historical Lookback" barWidth="100%" color="bg-accent" isAnimated delay={0.6} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Deep Insight Engine (Connecting Dots) */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400"><Network size={24} /></div>
                    <h2 className="text-3xl font-bold text-foreground">Deep Insight Generation</h2>
                </div>
                <div className="bg-sidebar border border-border rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                    <p className="text-lg text-sidebar-foreground mb-12 max-w-4xl">
                        Humans see isolated events. AI sees the hidden web. NETRA ingests disparate data sources to construct a <strong>Knowledge Graph</strong> that reveals manipulation rings invisible to the naked eye.
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
                        {/* Data Points */}
                        <div className="space-y-4">
                            <DataCard icon={TrendingUp} title="Trade Logs" desc="Synchronized buy/sell orders" color="text-green-400" />
                            <DataCard icon={Users} title="Social Graph" desc="Family/Director relationships" color="text-blue-400" />
                            <DataCard icon={Search} title="Alt Data" desc="Device geolocation, Call records" color="text-yellow-400" />
                        </div>

                        {/* The AI Engine */}
                        <div className="flex flex-col items-center justify-center relative">
                            <div className="w-32 h-32 rounded-full bg-sidebar-active border-2 border-accent/30 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                                <Cpu size={48} className="text-accent animate-pulse" />
                            </div>
                            {/* Connecting Lines */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible -z-10">
                                <motion.path d="M -50 50 L 150 150" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                                <motion.path d="M -50 150 L 150 150" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} />
                                <motion.path d="M -50 250 L 150 150" stroke="#eab308" strokeWidth="2" strokeDasharray="4 4" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                                <motion.path d="M 150 150 L 350 150" stroke="#ec4899" strokeWidth="4" className="opacity-50" />
                            </svg>
                            <div className="mt-4 text-center">
                                <h4 className="font-bold text-accent">GNN Inference</h4>
                                <span className="text-xs text-sidebar-foreground">Graph Neural Network</span>
                            </div>
                        </div>

                        {/* The Insight */}
                        <div className="bg-sidebar-active/50 border border-t-accent border-x-accent/20 border-b-accent/5 rounded-xl p-6 shadow-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <AlertTriangle className="text-destructive" />
                                <h4 className="font-bold text-foreground text-lg">Insider Ring Detected</h4>
                            </div>
                            <p className="text-sm text-sidebar-foreground leading-relaxed">
                                <span className="text-accent font-bold">Insight:</span> Trader A and Trader B are not just synchronizing trades. They are <span className="text-foreground font-bold">College Roommates</span> (Social Graph) and were located at the <span className="text-foreground font-bold">Same Hotel</span> (Geolocation) just before the earnings announcement.
                            </p>
                            <div className="mt-4 pt-4 border-t border-border flex justify-between items-center text-xs">
                                <span className="text-sidebar-foreground">Confidence Score</span>
                                <span className="font-mono text-success font-bold">99.8%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sections 3: Predictive Power */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-sidebar border border-border rounded-2xl p-8">
                    <div className="p-3 bg-red-500/10 rounded-xl text-red-400 w-fit mb-6"><Search size={24} /></div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">The Old Way: "Post-Mortem"</h3>
                    <p className="text-sidebar-foreground mb-6">
                        Traditional surveillance is reactive. Alerts trigger only <em>after</em> the price has crashed and investors have lost money.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-sidebar-foreground/80"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> T+1 Analysis (Too Late)</li>
                        <li className="flex items-center gap-3 text-sm text-sidebar-foreground/80"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Rule-Based (Easy to Bypass)</li>
                        <li className="flex items-center gap-3 text-sm text-sidebar-foreground/80"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> High False Positives</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-sidebar to-accent/10 border border-accent/30 rounded-2xl p-8">
                    <div className="p-3 bg-green-500/10 rounded-xl text-green-400 w-fit mb-6"><Zap size={24} /></div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">NETRA's Way: "Pre-Crime"</h3>
                    <p className="text-sidebar-foreground mb-6">
                        AI predicts intent before execution completes. It detects the <em>setup</em> of a manipulation, allowing regulators to intervene preventively.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-3 text-sm text-foreground font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> T+0 Real-Time Interdiction</li>
                        <li className="flex items-center gap-3 text-sm text-foreground font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Behavioral Intent Analysis</li>
                        <li className="flex items-center gap-3 text-sm text-foreground font-medium"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Precision Targeting</li>
                    </ul>
                </div>
            </section>

            {/* Section 3: Operational Edge (Legacy vs NETRA) */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-green-500/10 rounded-xl text-green-400"><TrendingUp size={24} /></div>
                    <h2 className="text-3xl font-bold text-foreground">Operational Edge: Legacy vs NETRA</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ComparisonCard
                        title="Insider Trading Detection"
                        legacy="Manual Excel Analysis of EOD Data (2-3 Days)"
                        netra="Real-time Stream Processing (Flink) (10ms)"
                        gain="250,000x Faster"
                    />
                    <ComparisonCard
                        title="Front Running Identification"
                        legacy="Post-facto Audit of Trade Logs (End of Quarter)"
                        netra="Live Complex Event Processing (Real-time)"
                        gain="Preventive Alerts"
                    />
                    <ComparisonCard
                        title="Pump & Dump Prevention"
                        legacy="Manual Complaint Monitoring (Post-Collapse)"
                        netra="AI Social Listening & Sentiment (Pre-Surge)"
                        gain="Proactive"
                    />
                    <ComparisonCard
                        title="Circular Trading (Shell Companies)"
                        legacy="Random Sample Audits (Hit or Miss)"
                        netra="Algorithmic Graph Cycle Detection (100% Capture)"
                        gain="Zero Escape"
                    />
                    <ComparisonCard
                        title="Evidence Collection"
                        legacy="Manual Physical Raids & Seizures (Months)"
                        netra="Cloud Evidence Scraper & NLP (Minutes)"
                        gain="Rapid Justice"
                    />
                    <ComparisonCard
                        title="Asset Recovery"
                        legacy="Manual Forensic Accounting (2-3 Months)"
                        netra="Algorithmic Profit Calculation (Instant)"
                        gain="Maximize Recovery"
                    />
                </div>
            </section>

        </div>
    );
}

function MetricRow({ label, value, barWidth, color, isAnimated = false, delay = 0 }: { label: string, value: string, barWidth: string, color: string, isAnimated?: boolean, delay?: number }) {
    return (
        <div>
            <div className="flex justify-between text-xs mb-1">
                <span className="text-sidebar-foreground">{label}</span>
                <span className="text-foreground font-bold">{value}</span>
            </div>
            <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                {isAnimated ? (
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: barWidth }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay, ease: "easeOut" }}
                        className={cn("h-full rounded-full", color)}
                    />
                ) : (
                    <div className={cn("h-full rounded-full", color)} style={{ width: barWidth }}></div>
                )}
            </div>
        </div>
    );
}

function DataCard({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
    return (
        <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl">
            <div className={cn("p-2 rounded-lg bg-sidebar-active", color)}><Icon size={20} /></div>
            <div>
                <div className="font-bold text-sm text-foreground">{title}</div>
                <div className="text-xs text-sidebar-foreground">{desc}</div>
            </div>
        </div>
    )
}

function SparklesIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
    )
}

function ComparisonCard({ title, legacy, netra, gain }: { title: string, legacy: string, netra: string, gain: string }) {
    return (
        <div className="bg-sidebar border border-border p-6 rounded-xl relative overflow-hidden group hover:border-accent/50 transition-colors">
            <h4 className="font-bold text-foreground mb-4">{title}</h4>

            <div className="space-y-3 relative z-10">
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <div className="text-[10px] text-destructive uppercase font-bold mb-1">Legacy</div>
                    <div className="text-sm text-sidebar-foreground">{legacy}</div>
                </div>

                <div className="flex justify-center text-sidebar-foreground/50">
                    <ArrowRight className="rotate-90 md:rotate-90" size={16} />
                </div>

                <div className="p-3 bg-success/10 border border-success/20 rounded-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-success text-black text-[9px] font-bold px-2 py-0.5 rounded-bl">
                        {gain}
                    </div>
                    <div className="text-[10px] text-success uppercase font-bold mb-1">NETRA AI</div>
                    <div className="text-sm text-foreground font-medium">{netra}</div>
                </div>
            </div>
        </div>
    )
}
