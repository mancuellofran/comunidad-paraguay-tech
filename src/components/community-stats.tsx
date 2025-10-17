"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface CommunityStats {
  members: number
  onlineMembers: number
  events: number
  founded: number
  messagesPerDay: number
  activeChannels: number
}

export function CommunityStats() {
  const [stats, setStats] = useState<CommunityStats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/community-stats')
        const statsData = await response.json()
        setStats(statsData)
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="border-orange-200 bg-white/80">
            <CardContent className="p-6 text-center">
              <div className="h-8 bg-slate-200 rounded animate-pulse mb-2" />
              <div className="h-4 bg-slate-200 rounded w-20 mx-auto animate-pulse" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!stats) return null

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-200 bg-white/80">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stats.members.toLocaleString()}
          </div>
          <div className="text-sm text-slate-600">Miembros</div>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-200 bg-white/80">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stats.onlineMembers}
          </div>
          <div className="text-sm text-slate-600">En línea ahora</div>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-200 bg-white/80">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stats.events}
          </div>
          <div className="text-sm text-slate-600">Eventos este año</div>
        </CardContent>
      </Card>

      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-purple-200 bg-white/80">
        <CardContent className="p-6 text-center">
          <div className="text-3xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">
            {stats.messagesPerDay}
          </div>
          <div className="text-sm text-slate-600">Mensajes por día</div>
        </CardContent>
      </Card>
    </div>
  )
}
