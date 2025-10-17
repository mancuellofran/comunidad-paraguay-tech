"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface APIStatus {
  discord: {
    status: 'connected' | 'error' | 'loading'
    message: string
  }
  youtube: {
    status: 'connected' | 'error' | 'loading'
    message: string
  }
}

export function APIStatus() {
  const [status, setStatus] = useState<APIStatus>({
    discord: { status: 'loading', message: 'Verificando...' },
    youtube: { status: 'loading', message: 'Verificando...' }
  })

  useEffect(() => {
    async function checkAPIs() {
      // Check Discord API
      try {
        const discordResponse = await fetch('/api/community-stats')
        const discordData = await discordResponse.json()
        
        if (discordData.members > 0) {
          setStatus(prev => ({
            ...prev,
            discord: { status: 'connected', message: `${discordData.members} miembros conectados` }
          }))
        } else {
          setStatus(prev => ({
            ...prev,
            discord: { status: 'error', message: 'Bot no configurado o sin permisos' }
          }))
        }
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          discord: { status: 'error', message: 'Error de conexión' }
        }))
      }

      // Check YouTube API
      try {
        const youtubeResponse = await fetch('/api/youtube')
        const youtubeData = await youtubeResponse.json()
        
        if (youtubeData.length > 0 && youtubeData[0].thumbnail) {
          setStatus(prev => ({
            ...prev,
            youtube: { status: 'connected', message: `${youtubeData.length} videos cargados` }
          }))
        } else {
          setStatus(prev => ({
            ...prev,
            youtube: { status: 'error', message: 'API key no configurada' }
          }))
        }
      } catch (error) {
        setStatus(prev => ({
          ...prev,
          youtube: { status: 'error', message: 'Error de conexión' }
        }))
      }
    }

    checkAPIs()
  }, [])

  return (
    <Card className="border-slate-200 bg-slate-50">
      <CardHeader>
        <CardTitle className="text-sm text-slate-600">Estado de las APIs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Discord</span>
          <Badge 
            className={
              status.discord.status === 'connected' ? 'bg-green-100 text-green-700' :
              status.discord.status === 'error' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }
          >
            {status.discord.status === 'connected' ? 'Conectado' :
             status.discord.status === 'error' ? 'Error' : 'Cargando'}
          </Badge>
        </div>
        <p className="text-xs text-slate-500">{status.discord.message}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">YouTube</span>
          <Badge 
            className={
              status.youtube.status === 'connected' ? 'bg-green-100 text-green-700' :
              status.youtube.status === 'error' ? 'bg-red-100 text-red-700' :
              'bg-yellow-100 text-yellow-700'
            }
          >
            {status.youtube.status === 'connected' ? 'Conectado' :
             status.youtube.status === 'error' ? 'Error' : 'Cargando'}
          </Badge>
        </div>
        <p className="text-xs text-slate-500">{status.youtube.message}</p>
      </CardContent>
    </Card>
  )
}
