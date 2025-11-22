import { Heart } from "lucide-react";

interface FooterProps {
  t: {
    footer: {
      copyright: string;
      tagline: string;
      support: string;
    };
  };
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="py-8 px-4 border-t border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <span>{t.footer.copyright}</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-glow-pulse" />
          <span>{t.footer.tagline}</span>
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.support}</p>
      </div>
    </footer>
  );
};
