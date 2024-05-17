import Image from "next/image";

export default function Headers() {
  return (
    <div
      className={`shadow-xl flex flex-row justify-between items-center w-full border-b-4 border-slate-500 pb-0`}
    >
      <div className="flex items-center p-2 ml-1 cursor-pointer">
        <Image
          src="/logo.png"
          width={180}
          height={90}
          className=""
          alt="Logo"
        />
        <p className="flex flex-row items-center overflow-hidden invisible text-left text-blue-950 text-xl pl-2 border-l-4 ml-2 border-stone-800 h-6 w-28 md:w-full md:h-16 md:visible">
          Le meilleur site pour vos reservation de villa
        </p>
      </div>

      <button className="shadow-lg h-10 flex items-center p-3 mr-3 text-lg bg-gray-100 hover:bg-slate-500 text-black hover:text-white border-gray-500 border-2 ">
        Reservation
      </button>
    </div>
  );
}
