import { Suspense } from "react";
import { Hero } from "@/components/bento/Hero";
import { FlagshipProject } from "@/components/bento/FlagshipProject";
import { TechEcosystem } from "@/components/bento/TechEcosystem";
import { GitHubStats } from "@/components/bento/GitHubStats";
import { GitHubStatsSkeleton } from "@/components/bento/GitHubStatsSkeleton";
import { ExperienceTimeline } from "@/components/bento/ExperienceTimeline";
import { Card } from "@/components/ui/card";
import { Mail, Send } from "lucide-react";
import { FadeUp } from "@/lib/motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-ctp-base selection:bg-ctp-surface1 selection:text-ctp-text">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">

          <FadeUp delay={0} className="col-span-1 md:col-span-3">
            <Hero />
          </FadeUp>

          <FadeUp delay={0.1} className="col-span-1 md:col-span-3">
            <FlagshipProject />
          </FadeUp>

          {/* GitHub card — async server component with skeleton fallback */}
          <FadeUp delay={0.2} className="md:col-span-2 md:h-full">
            <Suspense fallback={<GitHubStatsSkeleton />}>
              <GitHubStats />
            </Suspense>
          </FadeUp>

          <FadeUp delay={0.3} className="md:col-span-1 md:h-full">
            <TechEcosystem />
          </FadeUp>

          <FadeUp delay={0.15} className="md:col-span-2">
            <ExperienceTimeline />
          </FadeUp>

          <FadeUp delay={0.25}>
            <Card id="contact" className="p-6 flex flex-col justify-between min-h-[300px]">
              <div>
                <div className="flex items-center gap-2 border-b border-ctp-surface0 pb-3">
                  <Mail className="h-4 w-4 text-ctp-mauve" aria-hidden="true" />
                  <h2 className="text-base font-semibold text-ctp-text">Get in Touch</h2>
                </div>
                <p className="text-xs text-ctp-subtext0 mt-4 leading-relaxed">
                  Whether you want to collaborate on a project, talk tech, or just say hi — my inbox is open.
                </p>

                <div className="mt-5 space-y-2">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Pako_Motsumi_CV.pdf"
                    className="flex items-center gap-3 rounded-lg border border-ctp-mauve/30 bg-ctp-mauve/10 p-2.5 text-xs text-ctp-mauve transition-colors hover:border-ctp-mauve/60 hover:bg-ctp-mauve/20"
                  >
                    <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    <span>Download CV / Resume</span>
                  </a>
                  <a
                    href="tel:+26776011993"
                    className="flex items-center gap-3 rounded-lg border border-ctp-surface0 bg-ctp-crust/60 p-2.5 text-xs text-ctp-subtext0 transition-colors hover:border-ctp-surface1 hover:text-ctp-text"
                  >
                    <svg className="h-3.5 w-3.5 shrink-0 text-ctp-mauve" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l1.27-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17.42z" />
                    </svg>
                    <span>+267 76011993</span>
                  </a>
                  <a
                    href="mailto:pjmotsumi06@gmail.com"
                    className="flex items-center gap-3 rounded-lg border border-ctp-surface0 bg-ctp-crust/60 p-2.5 text-xs text-ctp-subtext0 transition-colors hover:border-ctp-surface1 hover:text-ctp-text"
                  >
                    <Send className="h-3.5 w-3.5 text-ctp-mauve shrink-0" aria-hidden="true" />
                    <span>pjmotsumi06@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/enchantrezzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-ctp-surface0 bg-ctp-crust/60 p-2.5 text-xs text-ctp-subtext0 transition-colors hover:border-ctp-surface1 hover:text-ctp-text"
                  >
                    <svg className="h-3.5 w-3.5 fill-current shrink-0 text-ctp-mauve" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    <span>github.com/enchantrezzz</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/pako-jack-motsumi-338b19401"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-ctp-surface0 bg-ctp-crust/60 p-2.5 text-xs text-ctp-subtext0 transition-colors hover:border-ctp-surface1 hover:text-ctp-text"
                  >
                    <svg className="h-3.5 w-3.5 fill-current shrink-0 text-ctp-mauve" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>Pako Jack Motsumi</span>
                  </a>
                </div>
              </div>

              <div className="mt-6 border-t border-ctp-surface0 pt-4">
                <p className="text-[10px] text-ctp-overlay0">
                  Based in Botswana · Open to remote opportunities
                </p>
              </div>
            </Card>
          </FadeUp>

        </div>
      </div>
    </main>
  );
}
