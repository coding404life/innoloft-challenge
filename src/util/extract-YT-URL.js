export function extractVideoIdAndConstructEmbedUrl(youtubeUrl) {
  if (youtubeUrl) {
    // Regular expression to match YouTube video URLs
    const videoIdRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/;

    // Try to match the regex pattern with the provided URL
    const match = youtubeUrl.match(videoIdRegex);

    // If a match is found, extract the video ID
    if (match && match[1]) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return embedUrl;
    } else {
      // If no match is found, return null or handle the error as needed
      return null;
    }
  }
}
