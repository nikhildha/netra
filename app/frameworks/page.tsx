"use client";

import { motion } from "framer-motion";
import { Cpu, BrainCircuit, Activity, ShieldCheck, Zap, Globe, MessageSquare, AlertTriangle, Eye, Radar, Hexagon, Sparkles } from "lucide-react";
import { InsiderLogic } from "@/components/strategies/logic/InsiderLogic";
import { FrontRunningLogic } from "@/components/strategies/logic/FrontRunningLogic";
import { PumpDumpLogic } from "@/components/strategies/logic/PumpDumpLogic";
import { SpoofingLogic } from "@/components/strategies/logic/SpoofingLogic";

export default function FrameworksPage() {
    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-12">

            {/* Header Section: INCMSF */}
            <div className="relative overflow-hidden rounded-2xl bg-sidebar border border-border p-8">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Globe size={120} />
                </div>
                <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
                    <ShieldCheck className="text-accent" size={32} />
                    INCMSF Frameworks
                </h1>
                <p className="text-sidebar-foreground mt-2 max-w-2xl text-lg">
                    Integrated National Capital Markets Surveillance Framework
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                    <div className="bg-background/50 border border-border px-4 py-2 rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-full text-accent"><Activity size={16} /></div>
                        <div>
                            <span className="text-[10px] text-sidebar-foreground uppercase block font-bold">Core Engine</span>
                            <span className="text-foreground font-mono font-bold">A.E.G.I.S.</span>
                        </div>
                    </div>
                    <div className="bg-background/50 border border-border px-4 py-2 rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-purple-500/10 rounded-full text-purple-400"><BrainCircuit size={16} /></div>
                        <div>
                            <span className="text-[10px] text-sidebar-foreground uppercase block font-bold">AI Regulation</span>
                            <span className="text-foreground font-mono font-bold">N.E.X.U.S.</span>
                        </div>
                    </div>
                    <div className="bg-background/50 border border-border px-4 py-2 rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-pink-500/10 rounded-full text-pink-400"><Radar size={16} /></div>
                        <div>
                            <span className="text-[10px] text-sidebar-foreground uppercase block font-bold">Social Watch</span>
                            <span className="text-foreground font-mono font-bold">S.O.N.A.R.</span>
                        </div>
                    </div>
                    <div className="bg-background/50 border border-border px-4 py-2 rounded-lg flex items-center gap-3">
                        <div className="p-2 bg-orange-500/10 rounded-full text-orange-400"><Hexagon size={16} /></div>
                        <div>
                            <span className="text-[10px] text-sidebar-foreground uppercase block font-bold">Risk Kernel</span>
                            <span className="text-foreground font-mono font-bold">H.A.W.K.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* A.E.G.I.S. Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-accent rounded-full"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground font-mono tracking-tight">A.E.G.I.S.</h2>
                        <div className="text-[10px] text-sidebar-foreground uppercase tracking-widest font-bold">Advanced Electronic Guard & Integrity System</div>
                    </div>
                    <span className="ml-auto px-3 py-1 rounded-full bg-accent/10 text-accent text-xs border border-accent/20">Real-time Surveillance</span>
                </div>
                <p className="text-sidebar-foreground mb-6 max-w-4xl">
                    The backbone of Project NETRA. Tracks trading activity across all exchanges in real-time, aggregating order streams to detect anomalies in security markets instantly.
                </p>

                {/* AI Context Card */}
                <div className="mb-6 bg-accent/5 border border-accent/20 rounded-xl p-4 flex gap-4">
                    <div className="p-2 bg-accent/10 rounded-lg h-fit"><Cpu className="text-accent" size={24} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">AI Advantage: FPGA-Accelerated Inference</h4>
                        <p className="text-xs text-sidebar-foreground mt-1 leading-relaxed">
                            Utilizes <strong>Quantized Neural Networks</strong> running on Field-Programmable Gate Arrays (FPGAs) to achieve sub-millisecond latency. This allows A.E.G.I.S. to inspect every single packet in the 12.4M orders/sec stream without causing market drag.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-sidebar border border-border rounded-xl flex items-center gap-4">
                        <Activity className="text-accent" />
                        <div>
                            <div className="text-2xl font-mono font-bold">12.4M</div>
                            <div className="text-xs text-sidebar-foreground">Orders Processed / Sec</div>
                        </div>
                    </div>
                    <div className="p-4 bg-sidebar border border-border rounded-xl flex items-center gap-4">
                        <Zap className="text-accent" />
                        <div>
                            <div className="text-2xl font-mono font-bold">42ms</div>
                            <div className="text-xs text-sidebar-foreground">Detection Latency</div>
                        </div>
                    </div>
                    <div className="p-4 bg-sidebar border border-border rounded-xl flex items-center gap-4">
                        <Eye className="text-accent" />
                        <div>
                            <div className="text-2xl font-mono font-bold">100%</div>
                            <div className="text-xs text-sidebar-foreground">Market Coverage</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* N.E.X.U.S. Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-purple-500 rounded-full"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground font-mono tracking-tight">N.E.X.U.S.</h2>
                        <div className="text-[10px] text-sidebar-foreground uppercase tracking-widest font-bold">Neural Engine for X-market Unusual Scenarios</div>
                    </div>
                    <span className="ml-auto px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">AI Fraud Detection</span>
                </div>
                <p className="text-sidebar-foreground mb-6 max-w-4xl">
                    A specialized AI-powered regulation system designed to identify complex algorithmic manipulation strategies like <strong>Layering</strong> and <strong>Spoofing</strong> that evade traditional rule-based checks.
                </p>

                {/* AI Context Card */}
                <div className="mb-6 bg-purple-500/5 border border-purple-500/20 rounded-xl p-4 flex gap-4">
                    <div className="p-2 bg-purple-500/10 rounded-lg h-fit"><Sparkles className="text-purple-400" size={24} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">AI Advantage: Generative Adversarial Networks (GANs)</h4>
                        <p className="text-xs text-sidebar-foreground mt-1 leading-relaxed">
                            N.E.X.U.S. trains on synthetic market data generated by <strong>GANs</strong> to recognize novel manipulation patterns that have never been seen before. It uses <strong>Unsupervised Learning</strong> to flag "unknown unknowns" rather than just matching historical signatures.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-sidebar border border-border rounded-xl p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-foreground">Spoofing Detection Logic</h3>
                            <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">N.E.X.U.S. Core</span>
                        </div>
                        <SpoofingLogic />
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-sidebar border border-border rounded-xl p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-foreground">HFT Front-Running Logic</h3>
                            <span className="text-[10px] bg-purple-500/10 text-purple-400 px-2 py-1 rounded border border-purple-500/20">N.E.X.U.S. Speed</span>
                        </div>
                        <FrontRunningLogic />
                    </motion.div>
                </div>
            </section>

            {/* S.O.N.A.R. Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-pink-500 rounded-full"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground font-mono tracking-tight">S.O.N.A.R.</h2>
                        <div className="text-[10px] text-sidebar-foreground uppercase tracking-widest font-bold">Social Opinion & Narrative Analytics Recon</div>
                    </div>
                    <span className="ml-auto px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs border border-pink-500/20">Social Media Watch</span>
                </div>
                <p className="text-sidebar-foreground mb-6 max-w-4xl">
                    Monitors social media channels (Telegram, YouTube, X) to identify misleading "finfluencer" content and synchronized <strong>Pump & Dump</strong> schemes.
                </p>

                {/* AI Context Card */}
                <div className="mb-6 bg-pink-500/5 border border-pink-500/20 rounded-xl p-4 flex gap-4">
                    <div className="p-2 bg-pink-500/10 rounded-lg h-fit"><MessageSquare className="text-pink-400" size={24} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">AI Advantage: Large Language Models (LLMs)</h4>
                        <p className="text-xs text-sidebar-foreground mt-1 leading-relaxed">
                            S.O.N.A.R. deploys domain-specific <strong>Transformer Models (BERT/GPT)</strong> fine-tuned on financial slang (Hinglish/Regional) to understand intent. It correlates <em>"Semantic Urgency"</em> in posts with real-time volume spikes to detect coordinated pumps.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-sidebar-active/20 border border-pink-500/20 rounded-xl p-6 flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-foreground mb-4">Sentiment-to-Trade Correlation</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-3 bg-background rounded-lg border border-border">
                                <MessageSquare className="text-pink-400" />
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-foreground">Telegram Signal Detected</div>
                                    <div className="text-[10px] text-sidebar-foreground">"Buy PENNY_STK now! 200% gains! 🚀"</div>
                                </div>
                            </div>
                            <div className="flex justify-center text-sidebar-foreground"><Zap size={16} /></div>
                            <div className="flex items-center gap-4 p-3 bg-background rounded-lg border border-border">
                                <Activity className="text-destructive" />
                                <div className="flex-1">
                                    <div className="text-xs font-bold text-foreground">Volume Spike Detected</div>
                                    <div className="text-[10px] text-sidebar-foreground">+400% Volume within 2 mins of message</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div whileHover={{ y: -5 }} className="bg-sidebar border border-border rounded-xl p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-foreground">Circular Trading Visualization</h3>
                            <span className="text-[10px] bg-pink-500/10 text-pink-400 px-2 py-1 rounded border border-pink-500/20">S.O.N.A.R. View</span>
                        </div>
                        <PumpDumpLogic />
                    </motion.div>
                </div>
            </section>

            {/* H.A.W.K. Section */}
            <section>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
                    <div>
                        <h2 className="text-2xl font-bold text-foreground font-mono tracking-tight">H.A.W.K.</h2>
                        <div className="text-[10px] text-sidebar-foreground uppercase tracking-widest font-bold">High-frequency Anomaly Warning Kernel</div>
                    </div>
                    <span className="ml-auto px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs border border-orange-500/20">Risk Analytics</span>
                </div>
                <p className="text-sidebar-foreground mb-6 max-w-4xl">
                    Employs deep data analytics to spot potential manipulation by analyzing Order-to-Trade Ratios (OTR) and correlating Price-Volume movements with non-public information.
                </p>

                {/* AI Context Card */}
                <div className="mb-6 bg-orange-500/5 border border-orange-500/20 rounded-xl p-4 flex gap-4">
                    <div className="p-2 bg-orange-500/10 rounded-lg h-fit"><BrainCircuit className="text-orange-400" size={24} /></div>
                    <div>
                        <h4 className="text-sm font-bold text-foreground flex items-center gap-2">AI Advantage: Graph Neural Networks (GNNs)</h4>
                        <p className="text-xs text-sidebar-foreground mt-1 leading-relaxed">
                            H.A.W.K. constructs dynamic <strong>Knowledge Graphs</strong> of all market participants. It uses GNNs for <strong>Link Prediction</strong> to uncover hidden relationships between seemingly unconnected entities (e.g., family ties, shared directors) to detect Insider Trading rings.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div whileHover={{ y: -5 }} className="bg-sidebar border border-border rounded-xl p-6 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-foreground">Insider Trading & UPSI Linkage</h3>
                            <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-1 rounded border border-orange-500/20">H.A.W.K. Core</span>
                        </div>
                        <InsiderLogic />
                    </motion.div>

                    <div className="bg-sidebar border border-border rounded-xl p-6">
                        <h3 className="font-bold text-foreground mb-4">Risk Factors Analyzed</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center p-2 bg-background rounded border border-border/50">
                                <span className="text-xs text-sidebar-foreground">Order-to-Trade Ratio</span>
                                <div className="h-1.5 w-24 bg-border rounded-full overflow-hidden"><div className="h-full bg-orange-400 w-[75%]"></div></div>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-background rounded border border-border/50">
                                <span className="text-xs text-sidebar-foreground">Price Variance (Sigma)</span>
                                <div className="h-1.5 w-24 bg-border rounded-full overflow-hidden"><div className="h-full bg-orange-400 w-[90%]"></div></div>
                            </div>
                            <div className="flex justify-between items-center p-2 bg-background rounded border border-border/50">
                                <span className="text-xs text-sidebar-foreground">Concentration Risk</span>
                                <div className="h-1.5 w-24 bg-border rounded-full overflow-hidden"><div className="h-full bg-orange-400 w-[45%]"></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
