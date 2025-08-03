// app/haw-lm/page.tsx
"use client";

import Link from "next/link";
import { Github, Mail, Twitter, PlayCircle, ExternalLink } from "lucide-react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
  {
    key: "twitter",
    icon: <Twitter size={20} />,
    href: "https://twitter.com/caslabs_ai",
    label: "Twitter",
    handle: "@caslabs",
  },
  {
    key: "email",
    icon: <Mail size={20} />,
    href: "mailto:jeraldydcascayan@gmail.com",
    label: "Email",
    handle: "jeraldydcascayan@gmail.com",
  },
  {
    key: "github",
    icon: <Github size={20} />,
    href: "https://github.com/caslabs",
    label: "GitHub",
    handle: "caslabs",
  },
];

// Hardcode your public demo URL here (Hugging Face Space or your hosted Gradio)
// Example Spaces embed (dark): https://hf.space/embed/<user>/<space>/+?__theme=dark
const DEMO_URL = "https://x.gradio.live/";

export default function HawLMPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 pb-24">
        {/* Header */}
        <header className="pt-24 md:pt-32 flex flex-col items-start gap-4">
          <span className="text-xs tracking-widest uppercase text-zinc-400">
            caslabs · research note
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-100 leading-tight">
            Developing Encoder-Based Language Models for Future Technology to
            Support ʻŌlelo Hawaiʻi
          </h1>
          <p className="text-zinc-400">
            Project code: <span className="font-mono">haw-lm</span>
          </p>

          {/* CTA */}
          <section className="mt-2">
            <div className="flex items-center gap-3">
              <Link
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-800 px-5 py-2.5 text-zinc-100
                           hover:bg-zinc-700 hover:border-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-400/50"
              >
                <PlayCircle size={18} />
                <span>Try the Demo</span>
                <ExternalLink size={16} className="opacity-70" />
              </Link>
              {/* Optional: secondary link to open the inline section anchor */}
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-5 py-2.5 text-zinc-300
                           hover:text-white hover:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400/30"
              >
                View Inline
              </a>
            </div>
          </section>
        </header>

        {/* Abstract */}
        <section className="mt-10">
          <Card>
            <article className="relative p-6 md:p-10">
              <h2 className="text-sm tracking-widest uppercase text-zinc-400">
                Abstract
              </h2>
              <div className="prose prose-invert max-w-none mt-4">
                <p>
                  ʻŌlelo Hawaiʻi remains underrepresented in modern language
                  technologies, lacking essential Natural Language Processing
                  (NLP) tools such as spell-checking and semantic search that
                  depend on understanding word meanings and sentence structure.
                  Addressing this gap requires a system capable of generating
                  computationally meaningful representations of ʻŌlelo Hawaiʻi
                  words and sentences that can support core NLP tasks in
                  low-resource settings.
                </p>
                <p>
                  In response, we developed a benchmarking system designed to
                  evaluate NLP models trained on ʻŌlelo Hawaiʻi text. This
                  system is grounded in two key datasets: a collection of raw
                  ʻŌlelo Hawaiʻi sentences from textbooks, short stories, and
                  other teaching materials, and a curated corpus of
                  part-of-speech-tagged sentences created through
                  human-in-the-loop annotation. We explored both traditional and
                  modern approaches to word representations, including Word2Vec
                  and transformer-based architectures such as Bidirectional
                  Encoder Representations from Transformers (BERT). All models
                  were trained on the raw corpus and evaluated on a downstream
                  part-of-speech tagging task and language modeling task.
                </p>
                <p>
                  Model performance was evaluated using F1 score and accuracy
                  for part-of-speech tagging, and perplexity for models with
                  language modeling objectives. These benchmarking results
                  enable direct comparison between traditional and
                  transformer-based approaches. By analyzing model behavior on
                  downstream tasks, we identify which architectures demonstrate
                  the most promise for advancing ʻŌlelo Hawaiʻi NLP
                  capabilities.
                </p>
                <p>
                  Our findings establish a performance baseline and offer
                  guidance for selecting and developing future models that
                  support culturally aligned language technologies, helping to
                  bridge the technological gap and pave the way toward a
                  comprehensive ʻŌlelo Hawaiʻi language model.
                </p>
              </div>
            </article>
          </Card>
        </section>

        {/* Inline Demo Embed */}
        <section id="demo" className="mt-10">
          <Card>
            <div className="p-2 md:p-4">
              <h2 className="sr-only">ʻŌlelo Hawaiʻi Demo</h2>
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-zinc-800">
                <iframe
                  src={DEMO_URL}
                  title="ʻŌlelo Hawaiʻi Demo"
                  className="h-full w-full"
                  loading="lazy"
                  // Trim permissions to what your demo needs
                  allow="clipboard-read; clipboard-write"
                  sandbox="allow-scripts allow-forms allow-same-origin"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Keywords / At-a-glance */}
        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <div className="p-6 md:p-8">
              <h3 className="text-sm tracking-widest uppercase text-zinc-400">
                Keywords
              </h3>
              <p className="mt-3 text-zinc-200">
                ʻŌlelo Hawaiʻi, NLP, encoder-based models, Word2Vec, BERT,
                transformers, part-of-speech tagging, language modeling,
                low-resource, benchmarking.
              </p>
            </div>
          </Card>

          <Card>
            <div className="p-6 md:p-8">
              <h3 className="text-sm tracking-widest uppercase text-zinc-400">
                Datasets
              </h3>
              <ul className="mt-3 text-zinc-200 list-disc list-inside space-y-1">
                <li>
                  Raw sentence corpus (textbooks, stories, teaching materials)
                </li>
                <li>Curated POS-tagged corpus (human-in-the-loop)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <div className="p-6 md:p-8">
              <h3 className="text-sm tracking-widest uppercase text-zinc-400">
                Methods
              </h3>
              <ul className="mt-3 text-zinc-200 list-disc list-inside space-y-1">
                <li>Traditional embeddings: Word2Vec</li>
                <li>Transformers: BERT (encoder-only)</li>
                <li>Tasks: POS tagging, language modeling</li>
                <li>Metrics: Accuracy, Macro-F1, Perplexity</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Contact */}
        <section className="mt-14">
          <h2 className="text-sm tracking-widest uppercase text-zinc-400 mb-4">
            Contact
          </h2>
          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card key={s.key}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-16 lg:pb-24 md:p-10"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
