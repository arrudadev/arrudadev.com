'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Code, Laptop, Moon, Rss, Sun } from 'lucide-react'

const articles = [
  { id: 1, title: "Mastering React Hooks", content: "React Hooks have revolutionized the way we write React components. In this article, we'll dive deep into the most commonly used hooks and explore some advanced patterns.\n\nUseState Hook:\nThe useState hook is one of the most fundamental hooks in React. It allows you to add state to functional components. Here's a basic example:\n\n```jsx\nconst [count, setCount] = useState(0);\n```\n\nUseEffect Hook:\nThe useEffect hook lets you perform side effects in function components. It's a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount. Here's how you might use it:\n\n```jsx\nuseEffect(() => {\n  document.title = `You clicked ${count} times`;\n}, [count]);\n```\n\nUseContext Hook:\nThe useContext hook accepts a context object and returns the current context value for that context. It's great for avoiding prop drilling:\n\n```jsx\nconst value = useContext(MyContext);\n```\n\nCustom Hooks:\nOne of the most powerful features of hooks is the ability to create your own. Custom hooks let you extract component logic into reusable functions. Here's a simple example of a custom hook:\n\n```jsx\nfunction useWindowWidth() {\n  const [width, setWidth] = useState(window.innerWidth);\n  \n  useEffect(() => {\n    const handleResize = () => setWidth(window.innerWidth);\n    window.addEventListener('resize', handleResize);\n    return () => window.removeEventListener('resize', handleResize);\n  }, []);\n\n  return width;\n}\n```\n\nBy mastering these hooks and understanding when to use them, you can write more efficient and easier-to-understand React code." },
  { id: 2, title: "Next.js 13 App Router", content: "Next.js 13 introduces a new App Router with exciting features. Let's explore how it changes the way we build React applications." },
  { id: 3, title: "TypeScript Best Practices", content: "TypeScript has become an essential tool for many developers. In this article, we'll cover some best practices to make your TypeScript code more robust and maintainable." },
  { id: 4, title: "CSS-in-JS Solutions", content: "CSS-in-JS has gained popularity in recent years. We'll compare some of the most popular solutions and discuss their pros and cons." },
  { id: 5, title: "Web Performance Optimization", content: "Performance is crucial for user experience. Learn about various techniques to optimize your web application's performance." },
  { id: 6, title: "State Management in 2023", content: "State management is a crucial aspect of React applications. We'll explore modern solutions and best practices for managing state in 2023." },
]

export default function ArticlePage() {
  const [darkMode, setDarkMode] = useState(false)
  const params = useParams()
  const articleId = Number(params.id)
  const article = articles.find(a => a.id === articleId)

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

  if (!article) {
    return <div>Article not found</div>
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
            <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">About</Link>
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
        <Link href="/" className="inline-flex items-center space-x-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 mb-6">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Articles</span>
        </Link>
        <article className="prose dark:prose-invert lg:prose-xl mx-auto">
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>') }} />
        </article>
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
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">About</Link>
              <Link href="#" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Rss className="h-5 w-5" />
                <span className="sr-only">RSS Feed</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
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