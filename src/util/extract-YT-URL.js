export function extractVideoIdAndConstructEmbedUrl(youtubeUrl) {
  if (youtubeUrl) {
    // Regular expression to match YouTube video URLs
    const videoIdRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/;

    // Try to match the regex pattern with the provided URL
    const match = youtubeUrl.match(videoIdRegex);

    // If a match is found, extract the video ID
    const videoId = match && match[1] ? match[1] : null;

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }
}
