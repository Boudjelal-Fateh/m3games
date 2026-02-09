import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-black" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center text-center">
          <h1 className="font-black font-onest mb-6 text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            Where flexibility meets <br className="hidden sm:block" />
            performance
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-300 sm:text-xl">
            Flexible teams, real-time tracking, guaranteed continuity. We secure
            your technology journey from start to finish.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Transform Your Business
            </Button>
          </div>

          <p className="mt-8 text-sm text-zinc-400">
            Smarter scaling for sustainable growth
          </p>
        </div>
      </div>
    </section>
  );
}
