import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Globe,
  Github,
  ExternalLink,
  Zap,
  BookOpen,
  Users,
  Play,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 animate-fade-in">
            <div className="relative">
              <Code className="h-8 w-8 text-blue-400 animate-spin-slow" />
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              PostGen
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Features
            </Link>
            <Link
              href="#tech-stack"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              Tech Stack
            </Link>
            <Link
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 animate-bounce"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Learning Project
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-gradient">
              MERN Stack
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Post Generator
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up delay-300">
            A full-stack application built to master the fundamentals of
            MongoDB, Express.js, React, and Node.js. Generate dynamic posts and
            seamlessly fetch them from the database.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-500">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            >
              <Play className="w-4 h-4 mr-2" />
              View Live Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              <Github className="w-4 h-4 mr-2" />
              View Source Code
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Key Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the core functionalities that demonstrate MERN stack
              capabilities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Dynamic Post Generation",
                desc: "Create and generate posts with custom content, demonstrating form handling and data processing",
                color: "yellow",
              },
              {
                icon: Database,
                title: "Database Integration",
                desc: "Seamlessly store and retrieve posts from MongoDB, showcasing CRUD operations",
                color: "green",
              },
              {
                icon: Server,
                title: "RESTful API",
                desc: "Well-structured Express.js backend with proper routing and middleware implementation",
                color: "blue",
              },
              {
                icon: Globe,
                title: "Responsive Frontend",
                desc: "Modern React interface with responsive design and intuitive user experience",
                color: "purple",
              },
              {
                icon: Users,
                title: "Real-time Updates",
                desc: "Live data fetching and updates to demonstrate state management and API integration",
                color: "red",
              },
              {
                icon: Code,
                title: "Clean Code Structure",
                desc: "Well-organized codebase following best practices and modern development patterns",
                color: "indigo",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div
                    className={`w-10 h-10 text-${feature.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {feature.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-stack"
        className="relative z-10 py-16 px-4 bg-gray-800/30"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technology Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with modern technologies to create a robust full-stack
              application
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Database,
                title: "MongoDB",
                desc: "NoSQL database for flexible data storage and retrieval",
              },
              {
                icon: Server,
                title: "Express.js",
                desc: "Fast and minimalist web framework for Node.js backend",
              },
              {
                icon: Globe,
                title: "React",
                desc: "Modern JavaScript library for building user interfaces",
              },
              {
                icon: Code,
                title: "Node.js",
                desc: "JavaScript runtime for scalable backend services",
              },
            ].map((tech, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-10 h-10 text-blue-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-full h-full" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {tech.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            About This Project
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            This project was built as part of a learning journey to master the
            MERN stack. It covers the complete full-stack cycle — from frontend
            UI to backend services and database integration — and is designed to
            be lightweight, scalable, and responsive.
          </p>
        </div>
      </section>
    </div>
  );
}
