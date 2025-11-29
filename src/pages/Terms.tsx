import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Terms = () => {
  const { translations } = useLanguage();
  const t = translations.terms;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backHome}
        </Link>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {t.title}
          </h1>
          
          <p className="text-muted-foreground">
            {t.lastUpdated}
          </p>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.intro.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.intro.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.service.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.service.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.trial.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.trial.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.billing.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.billing.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.cancellation.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.cancellation.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.conduct.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.conduct.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.liability.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.liability.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.changes.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.changes.content}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">{t.sections.contact.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.sections.contact.content}</p>
            <p className="text-primary font-medium">freedom@st0pporn.com</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
