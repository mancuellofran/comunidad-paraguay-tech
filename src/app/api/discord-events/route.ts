import { NextResponse } from 'next/server'

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID

export async function GET() {
  if (!DISCORD_BOT_TOKEN || !GUILD_ID) {
    console.warn('Discord credentials not found. Using fallback events.')
    return NextResponse.json(getFallbackEvents())
  }

  try {
    const response = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`,
      {
        headers: {
          'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch Discord events')
    }

    const events = await response.json()
    
    // Filter and format events
    const upcomingEvents = events
      .filter((event: any) => {
        const eventTime = new Date(event.scheduled_start_time)
        return eventTime > new Date() && event.status === 1 // SCHEDULED
      })
      .slice(0, 3) // Get only the next 3 events
      .map((event: any) => ({
        id: event.id,
        title: event.name,
        description: event.description || 'Evento de la comunidad Paraguay Tech',
        date: event.scheduled_start_time,
        location: event.entity_metadata?.location || 'Discord',
        type: event.entity_type === 1 ? 'Presencial' : 'Online',
        url: `https://discord.com/events/${GUILD_ID}/${event.id}`,
        status: getEventStatus(event.scheduled_start_time)
      }))

    return NextResponse.json(upcomingEvents)
  } catch (error) {
    console.error('Error fetching Discord events:', error)
    return NextResponse.json(getFallbackEvents())
  }
}

function getEventStatus(scheduledTime: string): string {
  const eventTime = new Date(scheduledTime)
  const now = new Date()
  const diffInHours = (eventTime.getTime() - now.getTime()) / (1000 * 60 * 60)

  if (diffInHours < 24) return 'Próximo'
  if (diffInHours < 168) return 'Esta semana'
  return 'Próximamente'
}

function getFallbackEvents() {
  return [
    {
      id: '1',
      title: 'Meetup: Introducción a React',
      description: 'Aprendé los conceptos básicos de React con ejemplos prácticos',
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days from now
      location: 'Asunción, Paraguay',
      type: 'Presencial',
      url: 'https://discord.gg/ZY5JRnTswv',
      status: 'Próximo'
    },
    {
      id: '2',
      title: 'Workshop: Git y GitHub',
      description: 'Control de versiones desde cero hasta colaboración en equipo',
      date: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 days from now
      location: 'Discord Live',
      type: 'Online',
      url: 'https://discord.gg/ZY5JRnTswv',
      status: 'Esta semana'
    },
    {
      id: '3',
      title: 'Networking: Tech Drinks',
      description: 'Conectá con otros desarrolladores en un ambiente relajado',
      date: new Date(Date.now() + 19 * 24 * 60 * 60 * 1000).toISOString(), // 19 days from now
      location: 'Barrio Villa Morra',
      type: 'Presencial',
      url: 'https://discord.gg/ZY5JRnTswv',
      status: 'Próximamente'
    }
  ]
}
