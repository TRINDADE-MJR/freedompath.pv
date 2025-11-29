import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface FooterProps {
  t: {
    footer: {
      copyright: string;
      tagline: string;
      support: string;
      privacyPolicy: string;
      termsOfUse: string;
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
        <div className="flex items-center justify-center gap-4 text-sm">
          <Link 
            to="/privacy" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.footer.privacyPolicy}
          </Link>
          <span className="text-muted-foreground/50">•</span>
          <Link 
            to="/terms" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            {t.footer.termsOfUse}
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">{t.footer.support}</p>
      </div>
    </footer>
  );
};
