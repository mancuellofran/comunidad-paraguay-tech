# Configuración de Discord API para Eventos Automáticos

## Pasos para conectar eventos de Discord con la página web

### 1. Crear un Bot de Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Crea una nueva aplicación
3. Ve a la sección "Bot" y crea un bot
4. Copia el **Token** del bot

### 2. Obtener el Guild ID

1. En Discord, habilita el "Modo Desarrollador" en Configuración > Avanzado
2. Haz clic derecho en tu servidor de Discord
3. Selecciona "Copiar ID del servidor"
4. Este es tu **Guild ID**

### 3. Configurar permisos del bot

El bot necesita estos permisos en tu servidor:
- `View Channels`
- `Read Message History`
- `Use Slash Commands`
- `Manage Events` (para crear eventos programados)

### 4. Configurar variables de entorno

Crea o actualiza tu archivo `.env.local`:

```bash
# Discord Bot Configuration
DISCORD_BOT_TOKEN=tu_bot_token_aqui
DISCORD_GUILD_ID=tu_guild_id_aqui

# YouTube API Configuration (ya existente)
NEXT_PUBLIC_YOUTUBE_API_KEY=AIzaSyC_4K19wJIW3qAVtQYcnRRzMQHYENLkZeA
NEXT_PUBLIC_YOUTUBE_CHANNEL_ID=UCOvFHBZH5FBFfJWHZM8qYnA
```

### 5. Invitar el bot al servidor

1. En Discord Developer Portal, ve a OAuth2 > URL Generator
2. Selecciona "bot" en Scopes
3. Selecciona los permisos mencionados arriba
4. Copia la URL generada y úsala para invitar el bot

### 6. Crear eventos en Discord

Para que aparezcan en la web:
1. Ve a tu servidor de Discord
2. Usa el comando `/event` o crea eventos desde el calendario
3. Los eventos aparecerán automáticamente en la página web

### 7. Funcionamiento

- **Con credenciales**: Los eventos se cargan automáticamente desde Discord
- **Sin credenciales**: Se muestran eventos de ejemplo
- **Actualización**: Los eventos se actualizan cada vez que se carga la página

### 8. Troubleshooting

Si los eventos no aparecen:

1. Verifica que el bot tenga los permisos correctos
2. Asegúrate de que el Guild ID sea correcto
3. Verifica que el token del bot sea válido
4. Revisa la consola del navegador para errores
5. Asegúrate de que los eventos estén programados (no en el pasado)

### 9. Personalización

Para cambiar el número de eventos mostrados, modifica en `src/app/api/discord-events/route.ts`:

```typescript
.slice(0, 5) // Cambiar 3 por el número deseado
```

### 10. Seguridad

- **Nunca** compartas el token del bot
- **Nunca** commitees el archivo `.env.local`
- Usa variables de entorno en producción
- Considera rotar el token periódicamente
