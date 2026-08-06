export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 px-6 text-center dark:bg-black">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
        Etna Abigail
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Sitio en construcción
      </h1>
      <a
        href="https://ecotono.etnabi.com"
        className="mt-6 text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
      >
        Mientras tanto, visita Ecotono Travel Co. →
      </a>
    </div>
  );
}
