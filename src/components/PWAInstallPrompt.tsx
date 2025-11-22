import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Mostrar prompt após algum tempo de navegação
      setTimeout(() => {
        const hasSeenPrompt = localStorage.getItem("pwa-install-prompted");
        if (!hasSeenPrompt) {
          setShowPrompt(true);
        }
      }, 10000); // 10 segundos
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      console.log("PWA installed");
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
    localStorage.setItem("pwa-install-prompted", "true");
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    localStorage.setItem("pwa-install-prompted", "true");
  };

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in-up">
      <Card className="glass-card p-4 md:p-6 border-primary/20 shadow-glow max-w-md mx-auto">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
            <Download className="w-6 h-6 text-primary-foreground" />
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="font-bold text-foreground">Instalar FreedomPath</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Instale nosso app para acesso rápido e funcionalidade offline
              </p>
            </div>
            
            <div className="flex gap-2">
              <Button
                onClick={handleInstall}
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Instalar
              </Button>
              <Button
                onClick={handleDismiss}
                size="sm"
                variant="outline"
              >
                Agora não
              </Button>
            </div>
          </div>

          <button
            onClick={handleDismiss}
            className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </Card>
    </div>
  );
};
