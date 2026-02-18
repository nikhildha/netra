"use client";

import { Bell, Search, User, Settings } from "lucide-react";

export function Header() {
    return (
        <header className="h-16 bg-header border-b border-border flex items-center justify-between px-6 sticky top-0 z-10 w-full">
            <div className="flex items-center gap-4">
                <h1 className="text-sm font-bold text-sidebar-foreground/80 uppercase tracking-widest hidden md:block">
                    Indian Stock Manipulation Surveillance System
                </h1>
            </div>

            <div className="flex items-center gap-4">
                {/* Search Bar (Mock) */}
                <div className="relative hidden md:block group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-sidebar-foreground group-focus-within:text-white transition-colors" />
                    <input
                        type="text"
                        placeholder="Search Entity / Scrip ID..."
                        className="bg-sidebar-active border border-border rounded-full py-1.5 pl-9 pr-4 text-sm text-foreground focus:outline-none focus:border-accent w-64 transition-all"
                    />
                </div>

                {/* Notifications */}
                <button className="relative p-2 text-sidebar-foreground hover:text-white transition-colors rounded-full hover:bg-sidebar-active">
                    <Bell size={20} />
                    <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-destructive rounded-full border-2 border-header"></span>
                </button>

                {/* User Profile */}
                <div className="flex items-center gap-3 pl-2 border-l border-b border-border md:border-l-0">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-foreground">Officer Sharma</p>
                        <p className="text-xs text-sidebar-foreground">Senior Analyst, SEBI</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent">
                        <User size={18} />
                    </div>
                </div>
            </div>
        </header>
    );
}
