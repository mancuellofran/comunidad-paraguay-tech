"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface DiscordEvent {
  id: string
  title: string
  description: string
  date: string
  location: string
  type: string
  url: string
  status: string
}

export function DiscordEvents() {
  const [events, setEvents] = useState<DiscordEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/discord-events')
        const eventsData = await response.json()
        setEvents(eventsData)
      } catch (error) {
        console.error('Error loading events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-orange-200 bg-white/80 overflow-hidden">
            <CardHeader>
              <div className="h-4 bg-slate-200 rounded animate-pulse mb-2" />
              <div className="h-6 bg-slate-200 rounded animate-pulse" />
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-slate-200 rounded animate-pulse mb-4" />
              <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-orange-200 bg-white/80">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <Badge 
                className={`${
                  event.status === 'Próximo' ? 'bg-orange-100 text-orange-700 border-orange-200' :
                  event.status === 'Esta semana' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                  'bg-green-100 text-green-700 border-green-200'
                }`}
              >
                {event.status}
              </Badge>
              <span className="text-sm text-slate-500">
                {formatEventDate(event.date)}
              </span>
            </div>
            <CardTitle className="text-slate-900 group-hover:text-orange-600 transition-colors">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600 mb-4 line-clamp-2">{event.description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
              <span>{event.type === 'Presencial' ? '📍' : '💻'}</span>
              <span>{event.location}</span>
            </div>
            <Link 
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium text-sm transition-colors"
            >
              Ver detalles en Discord
              <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function formatEventDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffInDays = Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (diffInDays === 0) return 'Hoy'
  if (diffInDays === 1) return 'Mañana'
  if (diffInDays < 7) return `En ${diffInDays} días`
  
  return date.toLocaleDateString('es-PY', {
    day: 'numeric',
    month: 'short'
  })
}
