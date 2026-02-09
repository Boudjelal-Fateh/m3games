import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Productivity() {
  return (
    <section className="relative w-full overflow-x-hidden bg-black px-4 py-20 sm:px-6 lg:px-8 xl:pb-[140px] xl:px-[100px]">
      {/* Header */}
      <div className="mb-16 text-center flex flex-col items-center justify-center">
        <div className="mb-4 flex items-center justify-center gap-2 mb-[22px]">
          <Image src="/Frame.svg" width={18} height={18} alt="Sparkles Icon" />
          <span className="text-[24px] leading-[24px] text-[#a594fd] font-onest -tracking-[0.24px]">
            Productivity
          </span>
        </div>

        <div className="flex flex-col items-center gap-[10px]">
          <h2 className="text-[50px] leading-[64px] mb-[10px] font-onest font-[500] -tracking-[1.76px] text-[#f1f1ef]">
            Smarter Tools, Better Work
          </h2>
          <p className="text-center max-w-[510px] leading-[26px] text-[18px] font-normal font-onest -tracking-[0.16px] text-[#adadad]/80">
            Automate tasks, collaborate seamlessly, and optimize operations to
            focus on what truly matters.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 items-start">
        {/* Item 1 - Collaborative Tools */}
        <div className="flex flex-col w-full md:max-w-[393px] h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
          <div className="relative mb-6 w-full md:w-[375px] h-[280px] overflow-hidden rounded-lg">
            <Image
              src="/asset-1.png"
              alt="Collaborative Tools"
              width={385}
              height={59}
              className="absolute top-[45px] bottom-[165px] right-[5px]"
            />
            <Image
              src="/asset.png"
              alt="Collaborative Tools"
              width={385}
              height={80}
              style={{ filter: "grayscale(100%)" }}
              className="absolute top-[104px] bottom-[85px] right-[5px]"
            />
            <Image
              src="/asset-2.png"
              alt="Collaborative Tools"
              width={385}
              height={80}
              className="absolute top-[184px] bottom-[44.3px] right-[5px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center px-4 md:px-[38.5px] pb-[50px] gap-[10px]">
            <h3 className="font-onest text-[#f1f1ef] text-center text-[26px] font-[500] leading-[28px]">
              Collaborative Tools
            </h3>
            <p className="font-onest text-[16px] leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
              Boost teamwork and collaboration with our tools
            </p>
          </div>
        </div>

        {/* Item 2 - Automate Tedious Tasks */}
        <div className="flex flex-col w-full md:max-w-[393px] h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
          <div className="md:mb-6 w-full md:w-[393px] h-[269px] overflow-hidden flex flex-col items-center justify-center">
            <div className="px-4 md:px-[17.9px] max-w-[350px]">
              <p className="font-onest text-[32px] md:text-[42px] leading-[44px] font-[500] text-[#3e3e3e] text-center">
                Less manual work,
                <span className="font-onest text-[34px] md:text-[44px] font-[500] leading-[44px] bg-gradient-to-r from-[#A594FD] to-[#EB8BF7] bg-clip-text text-transparent">
                  {" "}
                  But more
                </span>{" "}
                impact{" "}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4 md:px-[38.5px] pb-[50px] gap-[10px]">
            <h3 className="font-onest text-[#f1f1ef] text-center text-[26px] font-[500] leading-[28px]">
              Automate Tedious Tasks
            </h3>
            <p className="font-onest text-[16px] leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
              Streamline operations with intelligent automation
            </p>
          </div>
        </div>

        {/* Item 3 - Transform Operations */}
        <div className="flex flex-col w-full md:max-w-[393px] h-[435px] bg-[#101010]/80 items-center rounded-[20px]">
          <div className="mb-6 w-full md:w-[375px] h-[280px] overflow-hidden rounded-lg">
            <div className="w-full md:w-[393px] h-[227px] relative">
              <Image
                src="/easy-02.png"
                alt="Collaborative Tools"
                width={174}
                height={155}
                className="absolute top-[55.5px] right-[165px] left-[39.3px]"
              />
              <Image
                src="/Frame-1.png"
                alt="Collaborative Tools"
                width={174}
                height={155}
                className="absolute top-[15.9px] right-[23.6px] left-[134px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center px-4 md:px-[38.5px] pb-[50px] gap-[10px]">
            <h3 className="font-onest text-[#f1f1ef] text-center text-[26px] font-[500] leading-[28px]">
              Transform Operations
            </h3>
            <p className="font-onest text-[16px] leading-[24px] font-normal -tracking-[0.16px] text-[#adadad]/80 max-w-[287px] text-center">
              Revolutionize your business operations for peak efficiency
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
