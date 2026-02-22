import { Zap, DollarSign, Phone, Users, Check } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-white p-4 md:p-8 lg:p-12 font-['Satoshi'] text-[#0a0a0a]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
            <span className="font-['Boska']">Rendify</span>, because old 3D
            <br />
            workflows <span className="font-['Boska'] italic font-light">can&apos;t keep up</span>
          </h1>
        </div>

        {/* Bento Grid - Column based layout for strict alignment */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {/* Unlimited 3D renders */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 min-h-[400px] flex-grow">
              <Image
                src="https://picsum.photos/seed/render1/800/1000"
                alt="3D Render"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">Unlimited 3D renders</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Easily manage your 3D visualization requests queue with your Rendify Board.
                </p>
              </div>
            </div>

            {/* Top 1% */}
            <div className="rounded-3xl bg-[#F3F4F6] p-6 flex flex-col justify-center min-h-[180px]">
              <div className="flex -space-x-3 mb-4">
                 {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                     <Image src={`https://picsum.photos/seed/avatar${i}/100/100`} alt="Avatar" fill className="object-cover" />
                  </div>
                 ))}
                 <div className="w-10 h-10 rounded-full border-2 border-white bg-[#D2F874] flex items-center justify-center text-xs font-bold text-[#1A2E1A]">
                   75+
                 </div>
              </div>
              <h3 className="text-lg font-medium mb-2">Top 1% of global 3D artist talent</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Insane rendering quality at your fingertips whenever you need it.
              </p>
            </div>

            {/* Let's get Started */}
            <div className="rounded-3xl bg-[#E8F0D8] p-6 flex items-center justify-between min-h-[120px]">
              <div>
                <p className="font-['Boska'] italic text-2xl leading-none">Let&apos;s</p>
                <p className="font-['Boska'] italic text-2xl leading-none">get Started</p>
              </div>
              <button className="bg-[#1A2E1A] text-white px-5 py-3 rounded-full flex items-center gap-2 hover:bg-[#2C4A2C] transition-colors cursor-pointer">
                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                   <span className="text-[10px] font-bold">S</span>
                </div>
                <span className="text-sm font-medium whitespace-nowrap">Book a Call</span>
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            {/* Super-fast */}
            <div className="group rounded-3xl bg-[#E8F0D8] p-8 flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-center items-center flex-1">
                <div className="relative">
                  <Zap className="w-24 h-24 text-[#2C2C2C] fill-current transform -rotate-12 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 text-2xl font-['Boska'] italic">
                    {'//'}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Super-fast turnaround times</h3>
                <p className="text-[#2C2C2C]/70 text-sm leading-relaxed">
                  Get your models and renders in just 1 - 2 days with dedicated project managers.
                </p>
              </div>
            </div>

            {/* Flexible */}
            <div className="rounded-3xl bg-[#F6A686] p-8 flex flex-col justify-between flex-grow min-h-[300px]">
               <div className="flex justify-center items-center flex-1">
                 <div className="bg-white rounded-full p-2 flex items-center shadow-lg transform rotate-[-5deg] transition-transform hover:rotate-0 duration-300">
                   <span className="px-4 py-2 text-sm font-medium">Basic</span>
                   <span className="px-4 py-2 text-sm font-medium">Pro</span>
                   <span className="px-6 py-2 bg-[#E69373] text-white rounded-full text-sm font-medium shadow-sm">Premium</span>
                 </div>
                  <div className="absolute top-8 right-8 text-2xl font-['Boska'] italic">
                    {'//'}
                  </div>
               </div>
               <div>
                <h3 className="text-xl font-medium mb-2">Flexible and Scalable</h3>
                <p className="text-[#4A2B20]/80 text-sm leading-relaxed">
                  Scale up or down as needed, and pause or cancel at anytime.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            {/* Fixed Monthly */}
            <div className="group rounded-3xl bg-[#D2F874] p-8 flex flex-col justify-between min-h-[300px]">
               <div className="flex justify-center items-center flex-1">
                <div className="relative">
                  <DollarSign className="w-24 h-24 text-[#1A2E1A] fill-current transform rotate-12 transition-transform group-hover:scale-110 duration-300" strokeWidth={1} />
                   <div className="absolute top-0 right-0 -mr-4 -mt-4 text-2xl font-['Boska'] italic">
                    {'//'}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Fixed Monthly Subscription</h3>
                <p className="text-[#1A2E1A]/70 text-sm leading-relaxed">
                  No surprises here! Pay the same fixed price each month.
                </p>
              </div>
            </div>

            {/* Unique */}
            <div className="group relative overflow-hidden rounded-3xl bg-gray-100 flex-grow min-h-[400px]">
              <Image
                src="https://picsum.photos/seed/interior1/800/1000"
                alt="Interior"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
               <div className="absolute top-6 left-6">
                 <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 flex items-center gap-2 text-white text-sm">
                   <div className="w-6 h-6 rounded-full bg-gray-300 overflow-hidden relative">
                      <Image src="https://picsum.photos/seed/avatar_owner/100/100" alt="Owner" fill className="object-cover" />
                   </div>
                   Belongs to you
                 </div>
               </div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">Unique and all yours</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                  Each of your models and renders are made especially for you and are 100% yours.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
