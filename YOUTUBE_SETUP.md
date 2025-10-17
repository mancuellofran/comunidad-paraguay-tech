# Configuración de YouTube API para Paraguay Tech

## Pasos para configurar la integración automática de videos

### 1. Obtener una API Key de YouTube

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la **YouTube Data API v3**
4. Ve a "Credenciales" → "Crear credenciales" → "Clave de API"
5. Copia tu API key

### 2. Configurar las variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# YouTube API Configuration
NEXT_PUBLIC_YOUTUBE_API_KEY=tu_api_key_aqui
```

### 3. Verificar el canal de YouTube

El código está configurado para usar el canal `@ParaguayTech`. Si el username es diferente, actualiza la variable `CHANNEL_USERNAME` en `src/lib/youtube.ts`.

### 4. Funcionamiento

- **Con API Key**: Los videos se cargan automáticamente desde YouTube
- **Sin API Key**: Se muestran videos de ejemplo con enlaces al canal

### 5. Límites de la API

- **Cuota gratuita**: 10,000 unidades por día
- **Costo por video**: ~100 unidades por búsqueda
- **Videos mostrados**: 3 videos por carga

### 6. Troubleshooting

Si los videos no se cargan:

1. Verifica que la API key sea correcta
2. Asegúrate de que la YouTube Data API v3 esté habilitada
3. Verifica que el username del canal sea correcto
4. Revisa la consola del navegador para errores

### 7. Personalización

Para cambiar el número de videos mostrados, modifica el parámetro en `src/components/youtube-videos.tsx`:

```typescript
const latestVideos = await getLatestVideos(5); // Cambiar 3 por el número deseado
```
