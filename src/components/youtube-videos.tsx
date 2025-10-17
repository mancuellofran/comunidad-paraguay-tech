"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { formatTimeAgo, type YouTubeVideo } from "@/lib/youtube"
import Image from "next/image"

export function YouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/youtube')
        const latestVideos = await response.json()
        setVideos(latestVideos)
      } catch (error) {
        console.error('Error loading videos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border-red-200 bg-white/80 overflow-hidden">
            <div className="aspect-video bg-slate-100 animate-pulse" />
            <CardContent className="p-6">
              <div className="h-4 bg-slate-200 rounded animate-pulse mb-2" />
              <div className="h-3 bg-slate-200 rounded animate-pulse mb-3" />
              <div className="flex justify-between">
                <div className="h-3 bg-slate-200 rounded w-20 animate-pulse" />
                <div className="h-3 bg-slate-200 rounded w-12 animate-pulse" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-red-200 bg-white/80 overflow-hidden">
          <div className="relative aspect-video bg-slate-100">
            {video.thumbnail ? (
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  width={480}
                  height={270}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl ml-1">▶</span>
                  </div>
                </div>
              </a>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                  <p className="text-slate-600 font-medium">Video</p>
                </div>
              </div>
            )}
          </div>
          <CardContent className="p-6">
            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{video.title}</h3>
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-slate-500">
              <span>{formatTimeAgo(video.publishedAt)}</span>
              <span>{video.duration} min</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
