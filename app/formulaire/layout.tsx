import Headers from "@/app/ui/headers/headers";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex flex-col items-center bg-white">
      <div className="w-full p-0">
        <Headers />
      </div>
      <div className="mt-6 p-3 w-11/12 flex flex-row items-center flex flex-col items-center md:w-max border-4 rounded-2xl border-slate-500">
        {children}
      </div>
    </div>
  );
}
