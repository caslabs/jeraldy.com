"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export default function Example() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="w-full mt-32 sm:mt-0">
                </div>
            </div>
        </div>
    );
}
