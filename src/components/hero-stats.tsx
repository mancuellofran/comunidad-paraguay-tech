"use client"

import { useState, useEffect } from 'react'

interface CommunityStatsData {
  members: number;
  onlineMembers: number;
  events: number;
  founded: number;
  messagesPerDay: number;
  activeChannels: number;
}

// Hook para animar números
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function para suavizar la animación
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  // Trigger animation when component becomes visible
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return count
}

export function HeroStats() {
  const [stats, setStats] = useState<CommunityStatsData | null>(null)
  const [loading, setLoading] = useState(true)

  // Llamar todos los hooks al inicio, antes de cualquier return
  const animatedMembers = useCountUp(stats?.members || 0, 1500)
  const animatedOnline = useCountUp(stats?.onlineMembers || 0, 1500)
  const animatedEvents = useCountUp(stats?.events || 0, 1500)
  const animatedYears = useCountUp(stats ? new Date().getFullYear() - stats.founded : 0, 1500)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/community-stats')
        const data = await response.json()
        setStats(data)
      } catch (error) {
        console.error('Error loading community stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center space-x-8 text-slate-400">
        <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
        <div className="h-4 bg-slate-200 rounded w-16 animate-pulse" />
      </div>
    )
  }

  if (!stats) {
    return null
  }

  const statItems = [
    { value: stats.members, label: 'Miembros' },
    { value: stats.onlineMembers, label: 'En Línea' },
    { value: stats.events, label: 'Eventos' },
    { value: new Date().getFullYear() - stats.founded, label: 'Años Activos' },
  ];

  const animatedValues = [animatedMembers, animatedOnline, animatedEvents, animatedYears]

  return (
    <div className="flex justify-center items-center space-x-8 text-slate-600">
      {statItems.map((item, index) => (
        <div 
          key={index}
          className="text-center group hover:text-slate-900 transition-colors duration-300"
        >
          <div className="text-2xl font-bold text-slate-900 group-hover:scale-105 transition-transform duration-300">
            {animatedValues[index]}
          </div>
          <div className="text-sm text-slate-500 font-medium">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
