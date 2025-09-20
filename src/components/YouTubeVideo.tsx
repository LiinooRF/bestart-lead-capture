import { Card, CardContent } from "@/components/ui/card";

interface YouTubeVideoProps {
  videoId?: string;
  title?: string;
}

export function YouTubeVideo({ 
  videoId = "dQw4w9WgXcQ", // Default video ID - should be replaced with actual agent video
  title = "Mensaje del Agente Inmobiliario" 
}: YouTubeVideoProps) {
  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in duration-1000">
      <Card className="shadow-elegant">
        <CardContent className="p-6">
          <h3 className="text-2xl font-bold text-bestart-primary mb-4 text-center">
            {title}
          </h3>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}