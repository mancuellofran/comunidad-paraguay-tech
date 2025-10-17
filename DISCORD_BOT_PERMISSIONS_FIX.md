# 🔧 Fix Discord Bot Permissions - Member Count Issue

## Problem
The Discord API is returning `memberCount: undefined` and `presenceCount: undefined` because the bot doesn't have the required permissions to read member counts.

## Solution Steps

### 1. Enable Required Intents in Discord Developer Portal

1. **Go to Discord Developer Portal**: https://discord.com/developers/applications
2. **Select your bot application** (Paraguay Tech Bot)
3. **Go to "Bot" section** in the left sidebar
4. **Scroll down to "Privileged Gateway Intents"**
5. **Enable these intents**:
   - ✅ **SERVER MEMBERS INTENT** (Required for member count)
   - ✅ **PRESENCE INTENT** (Required for online member count)
   - ✅ **MESSAGE CONTENT INTENT** (Optional, for future features)

### 2. Update Bot Permissions

1. **Go to "OAuth2" > "URL Generator"**
2. **Select Scopes**:
   - ✅ `bot`
   - ✅ `applications.commands` (if using slash commands)
   - ✅ `guilds.members.read` (**CRITICAL** - This is the missing permission!)

3. **Select Bot Permissions**:
   - ✅ `View Channels`
   - ✅ `Read Message History`
   - ✅ `Send Messages`
   - ✅ `Manage Events` (for scheduled events)
   - ✅ `Create Events` (for scheduled events)

### 3. Re-invite the Bot

1. **Copy the generated URL** from step 2
2. **Paste it in your browser**
3. **Select your Paraguay Tech server**
4. **Authorize the bot with the new permissions**

### 4. Verify the Fix

After completing these steps:

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Check the terminal logs** - you should see:
   ```
   Discord guild data: {
     memberCount: 150,  // Should show actual number
     presenceCount: 25, // Should show actual number
     name: 'Paraguay Tech'
   }
   ```

3. **Check the website** - the community stats should show real numbers instead of 0

## Why This Happens

- **Member counts** require the `SERVER MEMBERS INTENT` and `guilds.members.read` scope
- **Presence counts** require the `PRESENCE INTENT`
- Without these permissions, Discord returns `undefined` for these values
- The `with_counts=true` parameter in the API call is correct, but the bot needs the permissions first

## Rate Limiting Fix

I've also added rate limiting protection to prevent 429 errors:
- 60-second cache between API calls
- Proper error handling for rate limits
- Delays between API calls

## Test the Fix

1. Complete the permission steps above
2. Restart your dev server
3. Refresh the website
4. Check the footer "Estado de APIs" section - Discord should show "Conectado"
5. The community stats should show real member counts

## Troubleshooting

If it still doesn't work:

1. **Check bot permissions in Discord**:
   - Right-click your server → Server Settings → Integrations → Paraguay Tech Bot
   - Verify it has the required permissions

2. **Check the bot token**:
   - Make sure `DISCORD_BOT_TOKEN` in `.env.local` is correct
   - Make sure `DISCORD_GUILD_ID` is the correct server ID

3. **Check console logs**:
   - Look for any error messages in the terminal
   - The logs will show exactly what Discord is returning

## Expected Result

After fixing permissions, you should see:
- Real member count (e.g., 150+ members)
- Real online member count (e.g., 25+ online)
- Real event count from your Discord server
- No more 429 rate limiting errors
- "Conectado" status in the API status section
