import { NextResponse } from 'next/server'

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID

export async function GET() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=3&type=video`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos')
    }

    const data = await response.json()
    
    const videos = data.items.map((item: {
      id: { videoId: string };
      snippet: {
        title: string;
        description: string;
        thumbnails: {
          maxres?: { url: string };
          high?: { url: string };
        };
        publishedAt: string;
      };
    }) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url,
      publishedAt: item.snippet.publishedAt,
      duration: '0',
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }))

    return NextResponse.json(videos)
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    
    // Return fallback videos
    const fallbackVideos = [
      {
        id: '1',
        title: 'Introducción a React Hooks - Tutorial Completo',
        description: 'Aprendé los conceptos básicos de React Hooks con ejemplos prácticos y casos de uso reales.',
        thumbnail: '',
        publishedAt: new Date().toISOString(),
        duration: '15',
        url: 'https://www.youtube.com/@ParaguayTech'
      },
      {
        id: '2',
        title: 'Git y GitHub para Principiantes - Guía Completa',
        description: 'Control de versiones desde cero hasta colaboración en equipo con GitHub.',
        thumbnail: '',
        publishedAt: new Date().toISOString(),
        duration: '22',
        url: 'https://www.youtube.com/@ParaguayTech'
      },
      {
        id: '3',
        title: 'Carrera en Tech: Cómo Conseguir tu Primer Trabajo',
        description: 'Tips y estrategias para conseguir tu primer trabajo como desarrollador en Paraguay.',
        thumbnail: '',
        publishedAt: new Date().toISOString(),
        duration: '18',
        url: 'https://www.youtube.com/@ParaguayTech'
      }
    ]

    return NextResponse.json(fallbackVideos)
  }
}
