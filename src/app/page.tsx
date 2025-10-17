"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { YouTubeVideos } from "@/components/youtube-videos"
import { DiscordEvents } from "@/components/discord-events"
import { HeroStats } from "@/components/hero-stats"
import { BackToTop } from "@/components/back-to-top"
import {
  Code2,
  Github,
  HandHeart,
  Coffee,
  Lightbulb,
  Menu,
  X,
  Instagram,
  Linkedin,
  Globe,
  Youtube,
  MessageCircle
} from "lucide-react"
import Link from "next/link"
import { Suspense, useState } from "react"

export default function ParaguayTechLanding() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Paraguay Tech",
    "description": "Comunidad de desarrolladores y profesionales de tecnología en Paraguay",
    "url": "https://www.paraguaytech.com",
    "logo": "https://www.paraguaytech.com/logo.png",
    "sameAs": [
      "https://discord.gg/ZY5JRnTswv",
      "https://github.com/mancuellofran/comunidad-tech-paraguay"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "community support",
      "availableLanguage": ["Spanish", "English"]
    },
    "memberOf": {
      "@type": "Organization",
      "name": "Tech Community Paraguay"
    },
    "foundingDate": "2025",
    "areaServed": {
      "@type": "Country",
      "name": "Paraguay"
    }
  };

  const founders = [
    {
      name: "Francisco Mancuello",
      role: "Co-Fundador & Software Engineer",
      avatar: "/francisco-mancuello.webp?height=80&width=80",
      bio: "Ayudo a emprendedores a crear SaaS rentables",
      social: {
        instagram: "https://www.instagram.com/mancuellofran/",
        linkedin: "https://www.linkedin.com/in/mancuellofran",
        github: "https://github.com/mancuellofran",
        portfolio: "https://mancuellofran.com/"
      }
    },
    {
      name: "Michael Sahlmann",
      role: "Co-Fundador & IA Specialist",
      avatar: "/michael-sahlmann.webp?height=80&width=80",
      bio: "Potenciando negocios usando IA & Automatización 10x",
      social: {
        instagram: "https://www.instagram.com/michaelsahlmann/",
        linkedin: "https://www.linkedin.com/in/michaelsahlmann"
      }
    },
  ]

  const faqs = [
    {
      question: "¿Qué es Paraguay Tech?",
      answer:
        "Somos una comunidad de profesionales que trabajan en tecnología y están dispuestas a ayudarse mutuamente. No importa si recién empezás o si ya tenés experiencia, acá vas a encontrar gente que te puede dar una mano.",
    },
    {
      question: "¿Cómo funciona el networking?",
      answer:
        "Es simple: entrás al Discord, te presentás y empezás a conversar. La gente acá es buena onda y siempre hay alguien dispuesto a ayudarte con dudas, darte consejos de carrera o simplemente charlar de tecnología.",
    },
    {
      question: "¿Qué pasa si soy principiante?",
      answer:
        "Nadie te va a juzgar por hacer preguntas. Al contrario, nos gusta ayudar a gente que está empezando. Todos pasamos por ahí y sabemos lo que se siente.",
    },
    {
      question: "¿Solo es para programadores?",
      answer:
        "¡Para nada! Tenemos desarrolladores, diseñadores, product managers, estudiantes, emprendedores y cualquier persona interesada en tecnología. La diversidad nos hace más fuertes y enriquece la comunidad.",
    },
    {
      question: "¿Cómo puedo ayudar a otros?",
      answer:
        "Compartiendo lo que sabés, respondiendo preguntas, dando consejos o simplemente siendo buena onda. No necesitás ser un experto para ayudar a alguien que está un paso atrás tuyo.",
    },
  ]

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-orange-200/60 bg-white/95 backdrop-blur-xl h-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Paraguay Tech</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#comunidad"
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group"
            >
              La Comunidad
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#gente" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group">
              Fundadores
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#eventos" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group">
              Eventos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors relative group">
              Preguntas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="https://discord.gg/ZY5JRnTswv" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Únete a nuestra comunidad en Discord"
              >
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl group">
                  <span className="flex items-center gap-2">
                    Entrar al Discord
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-orange-600 hover:bg-orange-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-orange-200/60 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <Link
                href="#comunidad"
                className="block text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                La Comunidad
              </Link>
              <Link 
                href="#gente" 
                className="block text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Fundadores
              </Link>
              <Link 
                href="#eventos" 
                className="block text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Eventos
              </Link>
              <Link 
                href="#faq" 
                className="block text-lg font-medium text-slate-600 hover:text-orange-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Preguntas
              </Link>
              <div className="pt-4">
                <Link 
                  href="https://discord.gg/ZY5JRnTswv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Únete a nuestra comunidad en Discord"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg rounded-xl">
                    Entrar al Discord
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-blue-50">
        </div>


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full text-sm font-medium text-orange-700 mb-8 shadow-sm">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              Comunidad tech de Paraguay
            </div>

            <h1 id="hero-title" className="mb-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block mb-2">Hola, somos</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent pb-2">
                Paraguay Tech
              </span>
            </h1>

            <p className="mb-12 text-xl text-slate-700 md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed">
              Somos una comunidad que proyecta ideas, crea conexiones valiosas y ayuda a 
              profesionales del ecosistema tech a crecer.
              <br className="hidden sm:block" />
              ¿Tenés ganas de ser parte?
            </p>
            
            {/* Hidden content for SEO */}
            <div className="sr-only">
              <h2>Comunidad Tech de Paraguay</h2>
              <p>Paraguay Tech es la comunidad de tecnología más activa de Paraguay. Conectamos desarrolladores, diseñadores, product managers, emprendedores y profesionales tech para compartir conocimiento, crear oportunidades laborales y fomentar el crecimiento profesional en el ecosistema tecnológico paraguayo.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link 
                href="https://discord.gg/ZY5JRnTswv" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Únete a nuestra comunidad en Discord"
                className="group"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-10 py-7 h-auto shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 rounded-2xl group-hover:scale-105 group-hover:-translate-y-2 border-0 font-semibold"
                >
                  <span className="flex items-center gap-3">
                    Entrar al Discord
                    <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
                  </span>
                </Button>
              </Link>
              
              <Link 
                href="#eventos" 
                className="group"
                aria-label="Ver próximos eventos"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-7 h-auto border-2 border-slate-300 hover:border-orange-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 rounded-2xl group-hover:scale-105 group-hover:-translate-y-1 font-semibold text-slate-700"
                >
                  <span className="flex items-center gap-3">
                    Ver Eventos
                    <span className="group-hover:rotate-12 transition-transform duration-300">→</span>
                  </span>
                </Button>
              </Link>
            </div>

            {/* Community Stats */}
            <Suspense fallback={
              <div className="flex justify-center items-center space-x-12 text-slate-400">
                <div className="h-6 bg-slate-200 rounded w-20 animate-pulse" />
                <div className="h-6 bg-slate-200 rounded w-20 animate-pulse" />
                <div className="h-6 bg-slate-200 rounded w-20 animate-pulse" />
                <div className="h-6 bg-slate-200 rounded w-20 animate-pulse" />
              </div>
            }>
              <HeroStats />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              ¿Qué encontrás acá?
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-slate-900">
              Somos una comunidad tech
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-pretty">
              Personas que se ayudan entre sí para crecer juntos en el mundo de la tecnología. 
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-orange-50 via-orange-100/50 to-white relative overflow-hidden h-full flex flex-col">
              <CardHeader className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Ayuda Real</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed">
                  ¿Tenés una duda técnica? ¿No sabés por dónde empezar? ¿Necesitás consejos de carrera? 
                  Acá siempre hay alguien dispuesto a ayudarte.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-blue-50 via-blue-100/50 to-white relative overflow-hidden h-full flex flex-col">
              <CardHeader className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Networking Genuino</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Conocé gente que trabaja en empresas que te interesan, que pasó por lo mismo que vos, o que
                  simplemente quiere hacer amigos en el mundo tech.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-green-50 via-green-100/50 to-white relative overflow-hidden h-full flex flex-col">
              <CardHeader className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-green-700 transition-colors">Aprendé Compartiendo</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-1 flex flex-col justify-center">
                <p className="text-slate-600 text-lg leading-relaxed">
                  La mejor forma de aprender es enseñando. Compartí lo que sabés, por más básico que te parezca. 
                  Siempre hay alguien que lo necesita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="gente" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-6 border border-orange-500/30">
              Fundadores
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-white">
              Conocé a los <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">fundadores</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Las personas detrás de esta comunidad que creen en el poder de conectar y ayudar a otros en el mundo tech
            </p>
          </div>

          <div className="gap-8 flex flex-wrap justify-center">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="group border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white/10 backdrop-blur-sm w-[320px] relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="text-center relative z-10 p-8">
                  <div className="relative mb-6">
                    <Avatar className="h-24 w-24 mx-auto border-4 border-white/20 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage 
                        src={founder.avatar} 
                        alt={`Foto de perfil de ${founder.name}, ${founder.role} en Paraguay Tech`}
                        loading="lazy"
                        width={96}
                        height={96}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-xl bg-gradient-to-br from-orange-400 to-red-400 text-white font-bold">
                        {founder.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    {founder.name}
                  </CardTitle>
                  <div className="flex justify-center mb-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 font-semibold px-4 py-2 text-sm">
                      {founder.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10 p-8 pt-0">
                  <p className="text-slate-300 text-center leading-relaxed text-lg mb-6">
                    {founder.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3 flex-wrap gap-2">
                    <Link
                      href={founder.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`Instagram de ${founder.name}`}
                    >
                      <Instagram className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                    
                    <Link
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`LinkedIn de ${founder.name}`}
                    >
                      <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    </Link>

                    {founder.social.github && (
                      <Link
                        href={founder.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        aria-label={`GitHub de ${founder.name}`}
                      >
                        <Github className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    )}

                    {founder.social.portfolio && (
                      <Link
                        href={founder.social.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-3 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        aria-label={`Portafolio de ${founder.name}`}
                      >
                        <Globe className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Tech Ecosystem Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-slate-900">Ecosistema Tech Paraguay</h2>
            <p className="text-xl text-slate-600">Conectamos con el mundo tecnológico paraguayo</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Empresas</h3>
              <p className="text-sm text-slate-600">Conectamos con empresas locales e internacionales</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Educación</h3>
              <p className="text-sm text-slate-600">Colaboramos con instituciones educativas</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Startups</h3>
              <p className="text-sm text-slate-600">Ecosistema emprendedor en crecimiento</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Remoto</h3>
              <p className="text-sm text-slate-600">Oportunidades de trabajo remoto global</p>
            </div>
          </div>
        </div>
      </section>


      {/* What We Do Section */}
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-orange-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              ¿De qué hablamos?
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-slate-900">
              Los temas que más nos <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">gustan</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Y en los que podemos ayudarte a crecer profesionalmente
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-orange-50 via-orange-100/50 to-white hover:from-orange-100 hover:to-orange-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-orange-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-orange-900 mb-3 text-xl group-hover:text-orange-700 transition-colors">Tecnologías Emergentes</h3>
                <p className="text-orange-700 leading-relaxed">Tendencias y tecnologías que están transformando el mundo tech</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-blue-100/50 to-white hover:from-blue-100 hover:to-blue-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-blue-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-blue-900 mb-3 text-xl group-hover:text-blue-700 transition-colors">Emprendimiento</h3>
                <p className="text-blue-700 leading-relaxed">Ideas, startups, y cómo hacer realidad tus proyectos</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-green-50 via-green-100/50 to-white hover:from-green-100 hover:to-green-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-green-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">💼</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-green-900 mb-3 text-xl group-hover:text-green-700 transition-colors">Carrera</h3>
                <p className="text-green-700 leading-relaxed">Consejos, CV, entrevistas y cómo crecer en el mundo tech paraguayo</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-purple-50 via-purple-100/50 to-white hover:from-purple-100 hover:to-purple-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-purple-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-purple-900 mb-3 text-xl group-hover:text-purple-700 transition-colors">Inteligencia Artificial</h3>
                <p className="text-purple-700 leading-relaxed">LLMs, Machine Learning, automatización y el futuro de la tecnología</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-indigo-50 via-indigo-100/50 to-white hover:from-indigo-100 hover:to-indigo-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-indigo-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-indigo-900 mb-3 text-xl group-hover:text-indigo-700 transition-colors">Aprendizaje</h3>
                <p className="text-indigo-700 leading-relaxed">Cursos, recursos, y por dónde empezar a estudiar</p>
              </div>
            </div>

            <div className="group flex items-start space-x-6 p-8 rounded-3xl bg-gradient-to-br from-pink-50 via-pink-100/50 to-white hover:from-pink-100 hover:to-pink-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-pink-200/50 relative overflow-hidden h-full">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10">
                <span className="text-2xl">☕</span>
              </div>
              <div className="relative z-10 flex-1 flex flex-col justify-start">
                <h3 className="font-bold text-pink-900 mb-3 text-xl group-hover:text-pink-700 transition-colors">Charla Random</h3>
                <p className="text-pink-700 leading-relaxed">Memes, noticias tech, y conversaciones de todo tipo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="eventos" className="py-24 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-700 rounded-full text-sm font-medium mb-6">
              Próximos Eventos
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-slate-900">
              Meetups, workshops y <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">actividades</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              De la comunidad para la comunidad. Conectamos, aprendemos y crecemos juntos.
            </p>
          </div>

          <DiscordEvents />

          <div className="text-center mt-16">
            <Link 
              href="https://discord.gg/ZY5JRnTswv" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Ver todos los eventos en Discord
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-700 rounded-full text-sm font-medium mb-6">
              Últimos Videos
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-slate-900">
              Contenido <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">fresco</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              De nuestro canal de YouTube. Aprendé, crecé y conectá con la comunidad tech paraguaya
            </p>
          </div>

          <YouTubeVideos />

          <div className="text-center mt-16">
            <Link 
              href="https://www.youtube.com/@ParaguayTech" 
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Ver todos los videos en YouTube
              <span className="group-hover:translate-x-2 transition-transform duration-300 text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="mx-auto max-w-4xl text-center mb-20">
             <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-white">
               Conviértete en <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">partner</span>
             </h2>
             <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
               Te invitamos a ser parte de nuestros eventos y sumarte a la comunidad tech paraguaya
             </p>

             <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
               <div className="text-center group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                 <div className="text-4xl mb-4">🎪</div>
                 <h3 className="text-2xl font-bold text-white mb-3">Festival Paraguay Tech</h3>
                 <p className="text-slate-300 text-lg">La mayor conferencia que se realiza 1 vez por año</p>
               </div>

               <div className="text-center group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                 <div className="text-4xl mb-4">💻</div>
                 <h3 className="text-2xl font-bold text-white mb-3">Hackathon Paraguay Tech</h3>
                 <p className="text-slate-300 text-lg">Competencia de desarrollo e innovación</p>
               </div>
             </div>
           </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
              <span className="text-slate-300">Escribinos a:</span>
              <a 
                href="mailto:hola@paraguaytech.com?subject=Partnership%20Paraguay%20Tech" 
                className="text-orange-400 hover:text-orange-300 transition-colors font-semibold text-lg"
              >
                hola@paraguaytech.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-orange-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              Preguntas Frecuentes
            </div>
            <h2 className="text-4xl font-bold mb-6 sm:text-5xl lg:text-6xl text-slate-900">
              Preguntas que nos hacen <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">seguido</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Por si tenés dudas antes de entrar. Estamos acá para ayudarte
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <AccordionTrigger className="px-8 py-6 text-left font-bold text-lg hover:no-underline hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-2xl text-slate-900 group-hover:text-blue-700 transition-all duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 text-slate-600 text-lg leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium mb-8 border border-orange-500/30">
              ¿Te interesa conocernos?
            </div>
            <h2 className="text-5xl font-bold mb-8 sm:text-6xl lg:text-7xl">
              ¿Te animás a <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">conocernos</span>?
            </h2>
            <p className="text-2xl mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed text-slate-300">
              Somos una comunidad abierta y siempre hay lugar para nuevas personas. 
              Te invitamos a formar parte del mundo tech paraguayo.
            </p>
            <Link 
              href="https://discord.gg/ZY5JRnTswv" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Únete a nuestra comunidad en Discord"
              className="group inline-block"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-2xl px-12 py-8 h-auto font-bold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 rounded-2xl group-hover:scale-105 group-hover:-translate-y-2 border-0"
              >
                <span className="flex items-center gap-4">
                  Entrar al Discord
                  <span className="group-hover:translate-x-2 transition-transform duration-300 text-2xl">→</span>
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Paraguay Tech</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Proyectando ideas, creando comunidad y ayudando a crecer en el ecosistema tech.
              </p>
              <div className="flex space-x-4">  
                <Link
                  href="https://github.com/mancuellofran/comunidad-tech-paraguay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                  aria-label="GitHub de Paraguay Tech"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.youtube.com/@ParaguayTech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                  aria-label="YouTube de Paraguay Tech"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/paraguaytech_oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                  aria-label="Instagram de Paraguay Tech"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@paraguaytech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                  aria-label="TikTok de Paraguay Tech"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
                <Link
                  href="https://chat.whatsapp.com/KpQewTWRDIJCKnJWPkkSVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                  aria-label="WhatsApp de Paraguay Tech"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Redes Sociales</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="https://discord.gg/ZY5JRnTswv" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="https://chat.whatsapp.com/KpQewTWRDIJCKnJWPkkSVx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@ParaguayTech/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/paraguaytech_oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.tiktok.com/@paraguaytech" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Eventos</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#eventos" className="hover:text-white transition-colors">
                    Festival Paraguay Tech <span className="text-orange-400 text-sm">Próx... </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Encuesta Paraguay Tech <span className="text-orange-400 text-sm">Próx... </span>
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Hackathon Paraguay Tech <span className="text-orange-400 text-sm">Próx... </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a 
                    href="mailto:hola@paraguaytech.com" 
                    className="hover:text-white transition-colors flex items-center gap-2"
                  >
                    hola@paraguaytech.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Paraguay Tech. Hecho con ❤️ por gente que le gusta ayudar.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
      </div>
    </>
  )
}
