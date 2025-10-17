import { NextResponse } from 'next/server'

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID

interface CommunityStats {
  members: number;
  onlineMembers: number;
  events: number;
  founded: number;
  messagesPerDay: number;
  activeChannels: number;
}

// Simple in-memory cache to prevent rate limiting
let lastFetch = 0
let cachedData: CommunityStats | null = null
const CACHE_DURATION = 60000 // 60 seconds

export async function GET() {
  if (!DISCORD_BOT_TOKEN || !GUILD_ID) {
    console.warn('Discord credentials not found. Using fallback stats.')
    return NextResponse.json(getFallbackStats())
  }

  // Check if we should use cached data to prevent rate limiting
  const now = Date.now()
  if (now - lastFetch < CACHE_DURATION && cachedData) {
    console.log('Using cached Discord data to prevent rate limiting')
    return NextResponse.json(cachedData)
  }

  try {
    // Get guild info for member count - IMPORTANT: with_counts=true is required
    const guildResponse = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}?with_counts=true`,
      {
        headers: {
          'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    if (!guildResponse.ok) {
      console.warn(`Discord API error: ${guildResponse.status} ${guildResponse.statusText}`)
      const errorData = await guildResponse.text()
      console.warn('Discord API error details:', errorData)
      
      // If rate limited, wait before returning fallback
      if (guildResponse.status === 429) {
        lastFetch = now
        // Don't cache fallback data on rate limit
        return NextResponse.json(getFallbackStats())
      }
      
      return NextResponse.json(getFallbackStats())
    }

    const guildData = await guildResponse.json()
    console.log('Discord guild data:', { 
      memberCount: guildData.approximate_member_count,
      presenceCount: guildData.approximate_presence_count,
      name: guildData.name 
    })

    // Update cache timestamp
    lastFetch = now

    // Get scheduled events count (with delay to prevent rate limiting)
    await new Promise(resolve => setTimeout(resolve, 1000)) // 1 second delay

    const eventsResponse = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}/scheduled-events`,
      {
        headers: {
          'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    )

    let eventsCount = 0
    if (eventsResponse.ok) {
      const eventsData = await eventsResponse.json()
      eventsCount = eventsData.length
      console.log('Discord events data:', { count: eventsData.length, events: eventsData })
    } else {
      console.warn(`Discord Events API error: ${eventsResponse.status} ${eventsResponse.statusText}`)
      const errorData = await eventsResponse.text()
      console.warn('Discord Events API error details:', errorData)
    }

    const stats = {
      members: guildData.approximate_member_count || 0,
      onlineMembers: guildData.approximate_presence_count || 0,
      events: eventsCount,
      founded: 2024,
      messagesPerDay: Math.floor(Math.random() * 50) + 100, // Simulated
      activeChannels: 8 // Simulated
    }

    // Cache the real data
    cachedData = stats
    lastFetch = now

    return NextResponse.json(stats)
  } catch (error) {
    console.error('Error fetching community stats:', error)
    return NextResponse.json(getFallbackStats())
  }
}

function getFallbackStats() {
  return {
    members: 150,
    onlineMembers: 25,
    events: 12,
    founded: 2024,
    messagesPerDay: 120,
    activeChannels: 8
  }
}
