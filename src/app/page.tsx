"use client";

import { useState } from "react";
import { SparklesCore } from "../components/ui/sparkles";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input"; // Custom Input component
import { Github } from "lucide-react";
import { FeaturesSectionDemo } from "../components/ui/FeatureSection"; // Import FeaturesSectionDemo
import { Cover } from "@/components/ui/cover";
import { CardDemo } from "@/components/ui/card";
import { title } from "process";

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-gray-950 overflow-hidden">
      {/* Hero Section without Gradient */}
      <div className="relative h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#ffffff"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-7xl font-bold text-white mb-4">
            Git-
            <span><Cover className="text-white">Talks</Cover></span>
          </h1>

          <TextGenerateEffect
            words="Where Code Meets Conversation - Real-time collaboration for GitHub projects"
            className="text-white/90 text-xl mb-8"
          />

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onSubmit={handleSearchSubmit}
              placeholder="Search for a repository (e.g., facebook/react)"
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center mb-12">
            <Button className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white px-8 py-2 rounded-lg shadow-lg flex items-center gap-2">
              <Github className="w-5 h-5" />
              Login with GitHub
            </Button>
            <Button className="bg-transparent border border-purple-500 text-white px-8 py-2 rounded-lg hover:bg-purple-500/20 flex items-center gap-2 shadow-lg transition duration-200">
              Learn More
            </Button>
          </div>
        </div>

        <BackgroundBeams className="absolute inset-0" />
      </div>

      {/* Features Section using Aceternity UI */}
      <FeaturesSectionDemo />

      {/* Reviews Section with Meteor Effect */}
     {/* Reviews Section using CardDemo */}
{/* Reviews Section using CardDemo */}
<div className="py-24 bg-gray-950">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-white mb-16">
      What Our Users Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Yuvraj",
          title: "Wowsome",
          testimonial: "Git-Talks has transformed our collaboration.",
          avatar: "/bot.png", // Path to the bot icon
          background: "url('/cardimages/card1.jpg')", // Updated path
        },
        {
          name: "Ronaldo",
          title: "Impressed",
          testimonial: "The real-time chat feature is a game changer.",
          avatar: "/bot.png", // Path to the bot icon
          background: "url('/cardimages/card2.jpg')", // Updated path
        },
        {
          name: "Alex",
          title: "Loved It !",
          testimonial: "A must-have tool for any developer team.",
          avatar: "/bot.png", // Path to the bot icon
          background: "url('/cardimages/card3.jpg')", // Updated path
        },
      ].map((user, index) => (
        <CardDemo key={index} user={user} />
      ))}
    </div>
  </div>
</div>



     
      {/* Stats Section */}
      <div className="bg-purple-500/10 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Active Users" },
              { number: "50K+", label: "Chat Rooms" },
              { number: "1M+", label: "Messages Sent" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>


       {/* Contact Us Section */}
       <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Contact Us
        </h2>
        <form className="bg-white/10 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full h-12 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Email" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-white mb-2" htmlFor="message">Message</label>
            <textarea id="message" className="w-full h-32 px-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg shadow-lg transition duration-200">
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
}
