import Image from "next/image";

export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading..."
      className="fixed inset-0 z-[2147483000] flex items-center justify-center overflow-hidden bg-white"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F3FF] p-2">
          <Image
            src="/logo-with-bg.png"
            alt="Presenton"
            width={40}
            height={40}
            className="h-8 w-auto object-contain animate-pulse"
          />
        </div>
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#7A5AF8] border-t-transparent" />
        <p className="font-syne text-xs font-medium text-[#6B7280]">
          Loading...
        </p>
      </div>
    </main>
  );
}

