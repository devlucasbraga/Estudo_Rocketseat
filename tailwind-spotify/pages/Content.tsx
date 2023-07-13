import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function Content() {
  return (
    <main className="flex-1 p-6">
      <div className="flex flex-items-center gap-4">
        <button>
          <ChevronLeft className="rounded-full bg-black/40 p-1" />
        </button>
        <button>
          <ChevronRight className="rounded-full bg-black/40 p-1" />
        </button>
      </div>

      <h1 className="font-semibold text-3xl mt-10 "> Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colorshidden transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
        <a className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden  hover:bg-white/10 transition-colors">
          <img
            src="album.jpg"
            width={104}
            height={104}
            alt="Charlie Brown Jr"
          />
          <strong>Só os Loucos</strong>
          <button
            className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-10 invisible group-hover:visible
        "
          >
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10 ">Made for Lucas Braga</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <img
            src="album.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Charlie Brown Jr"
          />
          <strong className="font-semibold">100% Charlie Brown Jr</strong>
          <span className="text-sm text-zinc-400">Pontes indestrutiveis</span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <img
            src="album.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Charlie Brown Jr"
          />
          <strong className="font-semibold">100% Charlie Brown Jr</strong>
          <span className="text-sm text-zinc-400">Pontes indestrutiveis</span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <img
            src="album.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Charlie Brown Jr"
          />
          <strong className="font-semibold">100% Charlie Brown Jr</strong>
          <span className="text-sm text-zinc-400">Pontes indestrutiveis</span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <img
            src="album.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Charlie Brown Jr"
          />
          <strong className="font-semibold">100% Charlie Brown Jr</strong>
          <span className="text-sm text-zinc-400">Pontes indestrutiveis</span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 flex flex-col gap-2 rounded-md hover:bg-white/10"
        >
          <img
            src="album.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Charlie Brown Jr"
          />
          <strong className="font-semibold">100% Charlie Brown Jr</strong>
          <span className="text-sm text-zinc-400">Pontes indestrutiveis</span>
        </a>
      </div>
    </main>
  );
}
