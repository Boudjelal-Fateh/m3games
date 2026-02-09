import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden md:pt-20">
      {/* Background gradient and bars - Commented out */}
      {/* <div className="absolute  w-[1270px] h-[1039px] -top-[70px] right-[85px] left-[85px] -bottom-[100] rectangle px-[31.8] flex justify-center items-start ">
        <div className="absolute left-[26.5px]  w-[546px] h-[515px] top-[180px] right-[697px] bottom-[344px]  opacity-50 bg-[radial-gradient(50%_50%_at_50%_50%,#4A5CFF_0%,rgba(74,92,255,0)_100%)] blur-[28.863636016845703px]" />
        <div className="absolute left-[360px]  w-[546px] h-[515px] top-[260px] right-[360px] bottom-[260px]  opacity-50 bg-[radial-gradient(circle_at_center,#6366F1_0%,transparent_100%)] blur-[29px] " />
        <div className="absolute left-[637px]  w-[546px] h-[515px] top-[324px] right-[86.5px] bottom-[200px]  opacity-50 bg-[radial-gradient(circle_at_center,#6E51FF_0%,rgba(89,64,212,0)_100%)] blur-[29px]  " />
        
        <div className=" w-[63.5px] h-[1039px] absolute left-[31.8px] right-[1175px] flex flex-col justify-center items-center  shrink-0 opacity-20 bg-[linear-gradient(270deg,rgba(154,160,166,0.2)_0%,#0C0D12_30%,rgba(154,160,166,0.2)_100%)] backdrop-blur-[58px] ">
          <div className="w-[63.5px] h-[1039px] border-r-[1.155px] border-r-[rgba(255,255,255,0.25)]" />
        </div>
        
        <div className=" w-[63.5px] h-[1039px] absolute left-[95.3px] right-[1111px] flex flex-col justify-center items-center  shrink-0 opacity-20 bg-[linear-gradient(270deg,rgba(154,160,166,0.2)_0%,#0C0D12_30%,rgba(154,160,166,0.2)_100%)] backdrop-blur-[58px] ">
          <div className="w-[63.5px] h-[1039px] border-r-[1.155px] border-r-[rgba(255,255,255,0.25)]" />
        </div>
        
        <div className=" w-[63.5px] h-[1039px] absolute left-[159px] right-[1048px] flex flex-col justify-center items-center  shrink-0 opacity-20 bg-[linear-gradient(270deg,rgba(154,160,166,0.2)_0%,#0C0D12_30%,rgba(154,160,166,0.2)_100%)] backdrop-blur-[58px] ">
          <div className="w-[63.5px] h-[1039px] border-r-[1.155px] border-r-[rgba(255,255,255,0.25)]" />
        </div>
        
        <div className=" w-[63.5px] h-[1039px] absolute left-[222px] right-[984px] flex flex-col justify-center items-center  shrink-0 opacity-20 bg-[linear-gradient(270deg,rgba(154,160,166,0.2)_0%,#0C0D12_30%,rgba(154,160,166,0.2)_100%)] backdrop-blur-[58px] ">
          <div className="w-[63.5px] h-[1039px] border-r-[1.155px] border-r-[rgba(255,255,255,0.25)]" />
        </div>
      </div> */}

      <div className="relative xl:px-[200px] xl:py-[100px] flex flex-col items-center gap-10 md:gap-[60px]">
        <div className="flex flex-col items-center justify-center md:gap-[16px] text-center">
          <h1 className="font-onest mb-6 text-2xl md:text-6xl mt-20  xl:text-[66px] xl:leading-[74px] text-center font-semibold text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
            Where flexibility meets <br className="hidden sm:block" />
            performance
          </h1>

          <p className="  md:text-[20px] text-[16px] md:leading-[32px] leading-[26px]  max-w-[573px]  text-center font-onest font-normal text-[#B8C5D1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            Flexible teams, real-time tracking, guaranteed continuity. We secure
            your technology journey from start to finish.
          </p>
        </div>

        <div className="flex flex-col items-center gap-[15.4px]">
          <Button className="flex h-[40px] min-h-[36px] w-auto cursor-pointer px-[10px] text-[#2f3031] py-[14px] justify-center items-center gap-2 rounded-[8px] bg-[#e6e6e6] shadow-[0_0_0_2px_rgba(0,0,0,0.50),0_0_14px_0_rgba(255,255,255,0.19),0_-1px_0.4px_0_rgba(0,0,0,0.20)_inset,0_1px_0.4px_0_#FFF_inset] hover:bg-[#d0d0d0] transition-colors">
            Transform Your Business
          </Button>
          <p className="font-roboto text-[#9c9c9d] text-[12px] font-normal leading-[19.2px] tracking-[0.2px]">
            Smarter scaling for sustainable growth
          </p>
        </div>
      </div>
    </section>
  );
}
