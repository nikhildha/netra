"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BarChart4,
    ShieldAlert,
    Network,
    FileText,
    Menu,
    X,
    LayoutDashboard,
    Presentation,
    Sparkles,
    Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
    { name: "Executive Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Surveillance Engine", href: "/strategies", icon: ShieldAlert },
    { name: "Frameworks", href: "/frameworks", icon: Menu }, // Using Menu as a placeholder for "Control" icon, or maybe Cpu/Zap
    { name: "Our Edge (AI USP)", href: "/ai-advantage", icon: Sparkles },
    { name: "Live Investigation", href: "/investigation", icon: Search },
    { name: "Architecture Map", href: "/architecture", icon: Network },
    { name: "Budget & Roadmap", href: "/plan", icon: FileText },
    { name: "Govt Pitch Deck", href: "/pitch", icon: Presentation },
];

export function Sidebar() {
    const pathname = usePathname();
    // Mobile menu state could be lifted up or handled here for small screens
    // For this MVP, we'll focus on desktop first but keep it responsive-ready

    return (
        <div className="flex flex-col h-full bg-sidebar border-r border-border w-64 shrink-0 transition-all duration-300">
            <div className="h-16 flex items-center px-6 border-b border-border">
                <div className="flex items-center gap-2 font-bold text-xl text-foreground tracking-tight">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white">
                        <ShieldAlert size={18} />
                    </div>
                    <span>NETRA AI</span>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
                <nav className="space-y-1 px-3">
                    {navigation.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-sidebar-active text-sidebar-active-foreground shadow-sm"
                                        : "text-sidebar-foreground hover:bg-sidebar-active/50 hover:text-white"
                                )}
                            >
                                <item.icon size={18} />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="p-4 border-t border-border">
                <div className="bg-sidebar-active/50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-sidebar-foreground uppercase mb-1">System Status</p>
                    <div className="flex items-center gap-2 text-xs text-success">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
                        </span>
                        Live Monitoring
                    </div>
                    <div className="mt-2 text-[10px] text-sidebar-foreground/70">
                        Latency: 42ms | Stream: OK
                    </div>
                </div>
            </div>
        </div>
    );
}
