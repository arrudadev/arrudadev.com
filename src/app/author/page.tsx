'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Code, Laptop, Moon, Rss, Sun, Github, Twitter, Linkedin } from 'lucide-react'

const author = {
  name: "Jane Doe",
  role: "Senior Frontend Developer",
  bio: "Passionate about creating intuitive and performant web applications. With over 8 years of experience in the field, I specialize in React, TypeScript, and modern JavaScript frameworks.",
  avatarUrl: "/placeholder.svg?height=200&width=200",
  twitterHandle: "janedoe",
  githubHandle: "janedoe",
  linkedinHandle: "jane-doe",
  technologies: ["React", "TypeScript", "Next.js", "Node.js", "GraphQL", "Tailwind CSS", "Jest", "Cypress"],
  experiences: [
    {
      company: "Tech Innovators Inc.",
      role: "Senior Frontend Developer",
      period: "2020 - Present",
      description: "Lead developer for multiple high-traffic web applications, focusing on performance optimization and scalability."
    },
    {
      company: "Web Solutions Ltd.",
      role: "Frontend Developer",
      period: "2017 - 2020",
      description: "Developed responsive web applications using React and Redux, improving user engagement by 40%."
    },
    {
      company: "StartUp Ventures",
      role: "Junior Developer",
      period: "2015 - 2017",
      description: "Contributed to the development of various client projects using JavaScript and jQuery."
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with Next.js, GraphQL, and Stripe integration.",
      link: "https://github.com/janedoe/ecommerce-platform"
    },
    {
      name: "Task Management App",
      description: "A real-time task management application using React, Firebase, and Material-UI.",
      link: "https://github.com/janedoe/task-manager"
    },
    {
      name: "Weather Dashboard",
      description: "A weather dashboard that provides real-time weather data using React and a third-party weather API.",
      link: "https://github.com/janedoe/weather-dashboard"
    }
  ]
}

export default function AuthorPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Code className="h-6 w-6" />
            <span className="text-xl font-bold">FrontendDev</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Home</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Articles</Link>
            <Link href="/author" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">About Author</Link>
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Laptop className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="h-32 w-32">
                <AvatarImage src={author.avatarUrl} alt={author.name} />
                <AvatarFallback>{author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold">{author.name}</h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-400">{author.role}</p>
                <p className="mt-2 max-w-2xl">{author.bio}</p>
                <div className="mt-4 flex justify-center md:justify-start space-x-4">
                  <a href={`https://twitter.com/${author.twitterHandle}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    <Twitter size={24} />
                  </a>
                  <a href={`https://github.com/${author.githubHandle}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    <Github size={24} />
                  </a>
                  <a href={`https://linkedin.com/in/${author.linkedinHandle}`} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {author.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {author.experiences.map((exp, index) => (
                <div key={index} className="border-b border-zinc-200 dark:border-zinc-700 pb-4 last:border-b-0 last:pb-0">
                  <h3 className="text-lg font-semibold">{exp.role} at {exp.company}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {author.projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{project.description}</CardDescription>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">
                      View Project
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="h-6 w-6" />
              <span className="text-xl font-bold">FrontendDev</span>
            </div>
            <nav className="flex space-x-4 mb-4 md:mb-0">
              <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Home</Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Articles</Link>
              <Link href="/author" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">About Author</Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Rss className="h-5 w-5" />
                <span className="sr-only">RSS Feed</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <p className="text-center text-sm text-zinc-500 dark:text-zinc-400">
            © 2023 FrontendDev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}