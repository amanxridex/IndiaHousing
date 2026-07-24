export function getMediaType(url) {
  if (!url) return { type: 'image', src: '' };
  
  // Check for youtube
  const ytMatch = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
  if (ytMatch && ytMatch[1]) {
    // We add autoplay, mute, loop, and playlist (required for loop)
    return { 
      type: 'youtube', 
      src: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&mute=1&loop=1&playlist=${ytMatch[1]}&controls=0&showinfo=0&rel=0` 
    };
  }
  
  // Check for video extensions
  if (url.match(/\.(mp4|webm|ogg)(\?.*)?$/i)) {
    return { type: 'video', src: url };
  }
  
  return { type: 'image', src: url };
}
