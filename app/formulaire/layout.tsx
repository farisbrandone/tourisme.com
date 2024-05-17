import Headers from "@/app/ui/headers/headers";
import SelectName from "../ui/select/select-name";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex flex-col items-center bg-white">
      <div className="w-full p-0">
        <Headers />
      </div>
      <div className="mt-6 p-3 w-11/12 border-4 rounded-2xl border-slate-500 flex flex-col items-center md:w-max">
        {children}
      </div>
    </div>
  );
}