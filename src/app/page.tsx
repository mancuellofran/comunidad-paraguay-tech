import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Code2,
  Github,
  HandHeart,
  Coffee,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function ParaguayTechLanding() {
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
    },
    {
      name: "Michael Sahlmann",
      role: "Co-Fundador & IA Specialist",
      avatar: "/michael-sahlmann.webp?height=80&width=80",
      bio: "Potenciando negocios usando IA & Automatización 10x",
    },
  ]

  const faqs = [
    {
      question: "¿Qué es Paraguay Tech?",
      answer:
        "Somos una comunidad de gente que ama la tecnología y que está siempre dispuesta a ayudar. No importa si recién empezás o si ya tenés años de experiencia, acá vas a encontrar personas que quieren darte una mano.",
    },
    {
      question: "¿Cómo funciona esto del networking?",
      answer:
        "Simple: entrás al Discord, te presentás, y empezás a charlar. La gente acá es súper buena onda y siempre hay alguien dispuesto a ayudarte con dudas, darte consejos de carrera, o simplemente charlar de tecnología.",
    },
    {
      question: "¿Qué pasa si soy principiante?",
      answer:
        "¡Mejor! Acá nadie te va a juzgar por hacer preguntas. Al contrario, nos encanta ayudar a gente que está empezando. Todos pasamos por ahí y sabemos lo que se siente.",
    },
    {
      question: "¿Solo es para programadores?",
      answer:
        "Para nada. Tenemos diseñadores, product managers, estudiantes, emprendedores, y gente curiosa de la tecnología. La diversidad nos hace más fuertes.",
    },
    {
      question: "¿Cómo puedo ayudar a otros?",
      answer:
        "Compartiendo lo que sabés, respondiendo preguntas, dando consejos, o simplemente siendo buena onda. No necesitás ser un experto para ayudar a alguien que está un paso atrás tuyo.",
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
      <header className="sticky top-0 z-50 w-full border-b border-orange-200/60 bg-white/90 backdrop-blur-xl h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-full items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 shadow-sm">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Paraguay Tech</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#comunidad"
              className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              La Comunidad
            </Link>
            <Link href="#gente" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
              Fundadores
            </Link>
            <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">
              Preguntas
            </Link>
            <Link 
              href="https://discord.gg/ZY5JRnTswv" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Únete a nuestra comunidad en Discord"
            >
              <Button className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white shadow-sm rounded-xl">
                Entrar al Discord
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-8 overflow-hidden">
        {/* Friendly background elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-4xl text-center">

            <h1 className="mb-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
              <span className="block">Hola, somos</span>
              <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent pb-2">
                Paraguay Tech
              </span>
            </h1>

            <p className="mb-12 text-xl text-slate-700 md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Somos una comunidad que proyecta ideas, crea conexiones valiosas y ayuda a 
              profesionales tech a crecer. ¿Tenés ganas de ser parte?
            </p>
            
            {/* Hidden content for SEO */}
            <div className="sr-only">
              <h2>Comunidad de Desarrolladores en Paraguay</h2>
              <p>Paraguay Tech es la comunidad de tecnología más activa de Paraguay. Conectamos desarrolladores, diseñadores, product managers y emprendedores para compartir conocimiento, crear oportunidades laborales y fomentar el crecimiento profesional en el sector tecnológico paraguayo.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link 
                href="https://discord.gg/ZY5JRnTswv" 
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Únete a nuestra comunidad en Discord"
              >
              <Button
                size="lg"
                className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
                >
                  Entrar al Discord
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="comunidad" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-slate-900">¿Qué encontrás acá?</h2>
            <p className="text-xl text-slate-600">
              No somos una empresa ni una escuela. Somos personas que se ayudan entre sí
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <HandHeart className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-slate-900">Ayuda Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  ¿Tenés una duda de código? ¿No sabés por dónde empezar? ¿Necesitás consejos de carrera? Acá siempre
                  hay alguien dispuesto a ayudarte.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <Coffee className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Networking Genuino</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Conocé gente que trabaja en empresas que te interesan, que pasó por lo mismo que vos, o que
                  simplemente quiere hacer amigos en el mundo tech.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Aprendé Compartiendo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  La mejor forma de aprender es enseñando. Compartí lo que sabés, por más básico que te parezca. Siempre
                  hay alguien que lo necesita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="gente" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-slate-900">Fundadores</h2>
            <p className="text-xl text-slate-600">
              Conocé a los fundadores de esta comunidad tech.
            </p>
          </div>

          <div className="gap-8 flex flex-wrap justify-center">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm w-[280px]"
              >
                <CardHeader className="text-center">
                  <Avatar className="h-20 w-20 mx-auto mb-4 border-2 border-white shadow-lg">
                    <AvatarImage 
                      src={founder.avatar} 
                      alt={`Foto de perfil de ${founder.name}, ${founder.role} en Paraguay Tech`}
                      loading="lazy"
                    />
                    <AvatarFallback className="text-lg bg-gradient-to-br from-orange-400 to-red-400 text-white font-semibold">
                      {founder.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg text-slate-900 min-h-[28px]">{founder.name}</CardTitle>
                  <div className="flex justify-center">
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 font-normal">
                      {founder.role}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600 text-pretty min-h-[40px]">{founder.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-slate-900">¿De qué hablamos?</h2>
            <p className="text-xl text-slate-600">Los temas que más nos gustan y en los que podemos ayudarte</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:from-orange-100 hover:to-orange-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white group-hover:scale-105 transition-transform">
                💻
              </div>
              <div>
                <h3 className="font-semibold text-orange-900 mb-1">Programación</h3>
                <p className="text-sm text-orange-700">JavaScript, Python, Java, C#, y lo que se te ocurra</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white group-hover:scale-105 transition-transform">
                🎨
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 mb-1">Diseño</h3>
                <p className="text-sm text-blue-700">UI/UX, Figma, Adobe, y todo lo visual</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white group-hover:scale-105 transition-transform">
                💼
              </div>
              <div>
                <h3 className="font-semibold text-green-900 mb-1">Carrera</h3>
                <p className="text-sm text-green-700">Consejos, CV, entrevistas, y cómo crecer profesionalmente</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-white group-hover:scale-105 transition-transform">
                🚀
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-1">Emprendimiento</h3>
                <p className="text-sm text-purple-700">Ideas, startups, y cómo hacer realidad tus proyectos</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100 hover:from-indigo-100 hover:to-indigo-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 text-white group-hover:scale-105 transition-transform">
                🎓
              </div>
              <div>
                <h3 className="font-semibold text-indigo-900 mb-1">Aprendizaje</h3>
                <p className="text-sm text-indigo-700">Cursos, recursos, y por dónde empezar a estudiar</p>
              </div>
            </div>

            <div className="group flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-200">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500 text-white group-hover:scale-105 transition-transform">
                ☕
              </div>
              <div>
                <h3 className="font-semibold text-pink-900 mb-1">Charla Random</h3>
                <p className="text-sm text-pink-700">Memes, noticias tech, y conversaciones de todo tipo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl text-slate-900">Preguntas que nos hacen seguido</h2>
            <p className="text-xl text-slate-600">Por si tenés dudas antes de entrar</p>
          </div>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold hover:no-underline hover:bg-slate-50/50 rounded-xl text-slate-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-bold mb-4 sm:text-4xl">¿Te animás a entrar?</h2>
            <p className="text-xl mb-8 opacity-90">
              Dale, no seas tímido. Somos buena onda y siempre hay lugar para una persona más 😊
            </p>
            <Link 
              href="https://discord.gg/ZY5JRnTswv" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Únete a nuestra comunidad en Discord"
            >
            <Button
              size="lg"
              className="bg-white cursor-pointer text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 h-auto font-semibold shadow-lg hover:shadow-xl transition-all duration-200 rounded-xl"
              >
                Entrar al Discord
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500">
                  <Code2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">Paraguay Tech</span>
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Proyectando ideas, creando comunidad y ayudando a crecer.
              </p>
              <div className="flex space-x-4">  
                <Link
                  href="https://github.com/mancuellofran/comunidad-tech-paraguay"
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-700"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Comunidad</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="https://discord.gg/ZY5JRnTswv" target="_blank" className="hover:text-white transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reglas básicas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cómo ayudar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Sugerencias
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Reportar problema
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Colaborar
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Paraguay Tech. Hecho con ❤️ por gente que le gusta ayudar.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}
