"use client";

import { ShieldCheck, Lock, Users, TrendingUp } from "lucide-react";

export function GovtAlignment() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-sidebar to-sidebar/50 border border-border rounded-2xl p-8 md:p-12 text-center md:text-left shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Project NETRA: <span className="text-accent">Sovereign Financial Security</span>
                    </h2>
                    <p className="text-lg text-sidebar-foreground max-w-2xl mb-8">
                        A strategic imperative to safeguard the ₹400 Lakh Crore Indian Capital Market against foreign algorithmic manipulation and predatory practices.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <span className="bg-accent/20 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-bold">Atmanirbhar Bharat</span>
                        <span className="bg-accent/20 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-bold">Digital India</span>
                        <span className="bg-accent/20 text-accent border border-accent/20 px-4 py-2 rounded-full text-sm font-bold">Amrit Kaal Vision</span>
                    </div>
                </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-sidebar border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40 group">
                    <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center text-success mb-4 group-hover:scale-110 transition-transform">
                        <Lock size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Data Sovereignty</h3>
                    <p className="text-sm text-sidebar-foreground mb-4">
                        End-to-end processing on <b>MeitY-empanelled Cloud</b> (AWS/GCP India Regions) ensures sensitive financial data never leaves Indian soil.
                    </p>
                    <ul className="text-xs text-sidebar-foreground space-y-2 list-disc pl-4">
                        <li>Indigenous 5G Stack Integration</li>
                        <li>Data Localization Compliant</li>
                    </ul>
                </div>

                <div className="bg-sidebar border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40 group">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                        <Users size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Retail Protection</h3>
                    <p className="text-sm text-sidebar-foreground mb-4">
                        Shielding 10 Crore+ retail investors from "Pump & Dump" schemes and unregulated "Finfluencer" manipulations.
                    </p>
                    <ul className="text-xs text-sidebar-foreground space-y-2 list-disc pl-4">
                        <li>Sentiment Analysis on Social Media</li>
                        <li>Pre-emptive Fraud Detection</li>
                    </ul>
                </div>

                <div className="bg-sidebar border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40 group">
                    <div className="w-12 h-12 bg-warning/20 rounded-lg flex items-center justify-center text-warning mb-4 group-hover:scale-110 transition-transform">
                        <TrendingUp size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Ease of Business</h3>
                    <p className="text-sm text-sidebar-foreground mb-4">
                        Reducing false positives for honest FIIs/DIIs while targeting bad actors with surgical precision using AI.
                    </p>
                    <ul className="text-xs text-sidebar-foreground space-y-2 list-disc pl-4">
                        <li>Pattern-based Compliance</li>
                        <li>Faster Dispute Resolution</li>
                    </ul>
                </div>
            </div>

            {/* Quote Section */}
            <div className="border-l-4 border-accent pl-6 py-4 italic text-lg text-sidebar-foreground/80 bg-background/50 rounded-r-lg">
                "To become a $5 Trillion economy, our financial markets must be governed by technology that is faster, smarter, and fairer than the manipulators."
            </div>
        </div>
    );
}
