// YouTube API integration for Paraguay Tech channel
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID; // Paraguay Tech channel ID

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  url: string;
}

export async function getLatestVideos(count: number = 3): Promise<YouTubeVideo[]> {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API key not found. Using fallback data.');
    return getFallbackVideos();
  }

  try {
    // Get the latest videos directly using the channel ID
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${count}&type=video`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch YouTube videos');
    }

    const data = await response.json();
    
    return data.items.map((item: {
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
      duration: '0', // Duration would require additional API call
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`
    }));
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return getFallbackVideos();
  }
}

function getFallbackVideos(): YouTubeVideo[] {
  return [
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
  ];
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Hace un momento';
  if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} min`;
  if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
  if (diffInSeconds < 2592000) return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
  if (diffInSeconds < 31536000) return `Hace ${Math.floor(diffInSeconds / 2592000)} meses`;
  return `Hace ${Math.floor(diffInSeconds / 31536000)} años`;
}
