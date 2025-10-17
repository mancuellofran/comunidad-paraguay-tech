import { NextResponse } from 'next/server'

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN
const GUILD_ID = process.env.DISCORD_GUILD_ID

export async function GET() {
  if (!DISCORD_BOT_TOKEN || !GUILD_ID) {
    console.warn('Discord credentials not found. Using fallback stats.')
    return NextResponse.json(getFallbackStats())
  }

  try {
    // Get guild info for member count
    const guildResponse = await fetch(
      `https://discord.com/api/v10/guilds/${GUILD_ID}`,
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
      return NextResponse.json(getFallbackStats())
    }

    const guildData = await guildResponse.json()
    console.log('Discord guild data:', { 
      memberCount: guildData.approximate_member_count,
      presenceCount: guildData.approximate_presence_count,
      name: guildData.name 
    })

    // Get scheduled events count
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
