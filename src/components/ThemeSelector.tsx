import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Flame, Sparkles } from "lucide-react";

export const ThemeSelector = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSelectedTheme = localStorage.getItem("freedompath-theme");
    if (!hasSelectedTheme) {
      // Delay para mostrar depois do carregamento inicial
      setTimeout(() => setOpen(true), 2000);
    } else {
      applyTheme(hasSelectedTheme);
    }
  }, []);

  const applyTheme = (theme: string) => {
    if (theme === "fire") {
      document.documentElement.classList.add("theme-fire");
    } else {
      document.documentElement.classList.remove("theme-fire");
    }
  };

  const selectTheme = (theme: string) => {
    localStorage.setItem("freedompath-theme", theme);
    applyTheme(theme);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center gradient-text">
            Escolha Seu Tema
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground pt-2">
            Selecione o tema que mais ressoa com você
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 py-6">
          <Button
            onClick={() => selectTheme("fire")}
            variant="outline"
            className="h-auto flex-col gap-4 p-6 hover:shadow-soft transition-all duration-300 hover:scale-105 border-primary/20"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-glow">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">Fogo</div>
              <div className="text-sm text-muted-foreground">Força e determinação</div>
            </div>
          </Button>

          <Button
            onClick={() => selectTheme("light")}
            variant="outline"
            className="h-auto flex-col gap-4 p-6 hover:shadow-soft transition-all duration-300 hover:scale-105 border-primary/20"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 flex items-center justify-center shadow-glow">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <div className="font-bold text-lg">Luz</div>
              <div className="text-sm text-muted-foreground">Suavidade e acolhimento</div>
            </div>
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground">
          Você pode mudar o tema depois nas configurações
        </p>
      </DialogContent>
    </Dialog>
  );
};
