import { useCallback } from "react";
import { useRouter } from "next/router";

const SellerVerify1Web = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/seller-verify2-web");
  }, [router]);

  return (
    <div className="w-full relative bg-white1 h-[1455px] overflow-hidden text-left text-base text-white1 font-roboto">
      <div className="absolute top-[134px] left-[calc(50%_-_720px)] bg-light w-[1440px] h-[876px]" />
      <div className="absolute top-[0px] left-[-4px] [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1440px] h-[38px] overflow-hidden text-sm">
        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_176px)]">
          <span>{`Sign up and get your first order. `}</span>
          <span className="[text-decoration:underline] font-medium">
            Sign Up Now
          </span>
        </div>
        <img
          className="absolute top-[calc(50%_-_10px)] left-[1320px] w-5 h-5 overflow-hidden"
          alt=""
          src="/frame.svg"
        />
      </div>
      <div className="absolute top-[62px] left-[96px] w-[1240px] flex flex-row items-center justify-center gap-[40px] text-black">
        <img
          className="w-[114.2px] relative h-[33px] object-cover"
          alt=""
          src="/logo-text@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div
            className="rounded-xl overflow-hidden flex flex-row items-center justify-start p-2 cursor-pointer"
            onClick={onFrameContainerClick}
          >
            <div className="relative">Home</div>
          </div>
          <div className="rounded-xl bg-accent overflow-hidden flex flex-row items-center justify-start p-2 text-white">
            <div className="relative">Sell</div>
          </div>
          <div className="relative">About us</div>
        </div>
        <div className="flex-1 rounded-43xl bg-whitesmoke-200 overflow-hidden flex flex-row items-start justify-start py-3 px-4 gap-[12px] text-gray1-400">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame1.svg"
          />
          <div className="relative">Search for products...</div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[14px]">
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/gravityuiheart.svg"
          />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/frame2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[201px] left-[96px] w-[1240px] h-[574px] text-accent font-title-16px-regular">
        <div className="absolute top-[0px] left-[0px] rounded-xl bg-white1 w-[1240px] h-[558px]" />
        <b className="absolute top-[43px] left-[52px] text-21xl leading-[45px] inline-block font-roboto w-[356px] h-[46px]">
          Profile Information
        </b>
        <div className="absolute top-[145px] left-[52px] w-[519px] h-[50px] text-black">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[519px] h-[50px] overflow-hidden border-[1px] border-solid border-grey">
            <div className="absolute top-[13px] left-[10px] leading-[24px] opacity-[0.4]">
              Name
            </div>
          </div>
        </div>
        <div className="absolute top-[213px] left-[52px] w-[519px] h-[50px] text-black">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[519px] h-[50px] overflow-hidden border-[1px] border-solid border-grey">
            <div className="absolute top-[13px] left-[11px] leading-[24px] opacity-[0.4]">
              Phone
            </div>
          </div>
        </div>
        <div className="absolute top-[145px] left-[613px] w-[519px] h-[50px] text-black">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[519px] h-[50px] overflow-hidden border-[1px] border-solid border-grey">
            <div className="absolute top-[13px] left-[10px] leading-[24px] opacity-[0.4]">
              Email
            </div>
          </div>
        </div>
        <div
          className="absolute top-[464px] left-[52px] rounded-43xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[186px] h-[52px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border cursor-pointer text-white1 font-roboto"
          onClick={onFrameContainer3Click}
        >
          <div className="relative font-medium">Next</div>
        </div>
        <div className="absolute top-[305px] left-[52px] w-[519px] h-[141px]">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[519px] h-[141px] overflow-hidden border-[1px] border-solid border-grey">
            <div className="absolute top-[89px] left-[calc(50%_-_59.5px)] leading-[24px]">
              Upload picture
            </div>
            <img
              className="absolute top-[48px] left-[237px] w-[45px] h-[45px] overflow-hidden"
              alt=""
              src="/materialsymbolsuploadsharp.svg"
            />
          </div>
        </div>
        <div className="absolute top-[305px] left-[613px] w-[519px] h-[141px]">
          <div className="absolute top-[0px] left-[0px] rounded box-border w-[519px] h-[141px] overflow-hidden border-[1px] border-solid border-grey">
            <div className="absolute top-[89px] left-[calc(50%_-_59.5px)] leading-[24px]">
              Upload picture
            </div>
            <img
              className="absolute top-[48px] left-[237px] w-[45px] h-[45px] overflow-hidden"
              alt=""
              src="/materialsymbolsuploadsharp.svg"
            />
          </div>
        </div>
        <div className="absolute top-[281px] left-[52px] leading-[24px] text-grey">
          ID Card front
        </div>
        <div className="absolute top-[281px] left-[613px] leading-[24px] text-grey">
          ID Card back
        </div>
      </div>
      <div className="absolute top-[866px] left-[calc(50%_-_721px)] w-[1441px] h-[589px] text-21xl">
        <div className="absolute top-[0px] left-[calc(50%_-_720.5px)] w-[1441px] h-[589px]">
          <div className="absolute top-[90px] left-[calc(50%_-_720.5px)] bg-whitesmoke-200 w-[1441px] h-[499px]" />
          <div className="absolute top-[457px] left-[calc(50%_-_619.5px)] box-border w-[1241px] h-px border-t-[1px] border-solid border-brown-200" />
          <div className="absolute top-[0px] left-[101px] rounded-xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1240px] overflow-hidden flex flex-row items-center justify-between py-9 px-16 box-border">
            <b className="w-[551px] relative leading-[45px] inline-block h-[94px] shrink-0">
              {`STAY UPTO DATE ABOUT OUR LATEST `}
              <span className="uppercase">Auctions</span>
            </b>
            <div className="flex flex-col items-start justify-start gap-[14px] text-base text-gray1-400">
              <div className="w-[349px] rounded-43xl bg-white1 overflow-hidden flex flex-row items-start justify-start py-3 px-4 box-border gap-[12px]">
                <img
                  className="w-6 relative h-6 overflow-hidden shrink-0"
                  alt=""
                  src="/frame3.svg"
                />
                <div className="relative">Enter your email address</div>
              </div>
              <div className="w-[349px] rounded-43xl bg-white1 overflow-hidden flex flex-row items-center justify-center py-3 px-4 box-border text-accent">
                <div className="relative font-medium">
                  Subscribe to Newsletter
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[230px] left-[101px] w-[1240px] flex flex-row items-start justify-between text-base text-accent">
            <div className="flex flex-col items-start justify-start gap-[35px] text-8xs text-black">
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <div className="w-[121px] relative h-[39.2px]">
                  <img
                    className="absolute top-[1.3px] left-[41.5px] w-[76.7px] h-[22.2px] object-cover"
                    alt=""
                    src="/logo-text@2x.png"
                  />
                  <img
                    className="absolute top-[0px] left-[0px] rounded-[24.06px] w-[39.2px] h-[39.2px] object-cover"
                    alt=""
                    src="/logo-icon@2x.png"
                  />
                  <div className="absolute top-[23.4px] left-[42.9px] w-[73.4px] h-1.5">
                    <div className="absolute top-[0%] left-[0%] tracking-[0.17em] uppercase font-medium">
                      The wise choice!
                    </div>
                  </div>
                </div>
                <div className="w-[248px] relative text-base leading-[22px] text-brown-300 inline-block">
                  Join online auctions and find unique items to buy and sell
                  with excitement!
                </div>
              </div>
              <div className="w-[148px] relative h-7">
                <img
                  className="absolute top-[0px] left-[0px] w-7 h-7"
                  alt=""
                  src="/1.svg"
                />
                <img
                  className="absolute top-[0px] left-[40px] w-7 h-7"
                  alt=""
                  src="/2.svg"
                />
                <img
                  className="absolute top-[0px] left-[80px] w-7 h-7"
                  alt=""
                  src="/3.svg"
                />
                <img
                  className="absolute top-[0px] left-[120px] w-7 h-7"
                  alt=""
                  src="/4.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
                Company
              </div>
              <div className="relative leading-[19px] text-brown-300">
                <p className="m-0 whitespace-pre-wrap">{`About          `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 whitespace-pre-wrap">{`Features          `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 whitespace-pre-wrap">{`Works          `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0 whitespace-pre-wrap">{`Career  `}</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
                Help
              </div>
              <div className="relative leading-[19px] text-gray1-500">
                <p className="m-0">Customer Support</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Delivery Details</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`Terms & Conditions`}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Privacy Policy</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
                FAQ
              </div>
              <div className="w-[149px] relative leading-[19px] text-brown-300 inline-block">
                <p className="m-0">Account</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Manage Deliveries</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Orders</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Payments</p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[26px]">
              <div className="relative tracking-[3px] leading-[18px] uppercase font-medium">
                Resources
              </div>
              <div className="relative leading-[19px] text-brown-300">
                <p className="m-0">Free eBooks</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Development Tutorial</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">How to - Blog</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Youtube Playlist</p>
              </div>
            </div>
          </div>
          <div className="absolute top-[482px] left-[101px] text-sm text-brown-300 text-right">
            Bidbuyy © 2000-2023, All Rights Reserved
          </div>
        </div>
      </div>
      <div className="absolute top-[158px] left-[100px] flex flex-row items-center justify-start gap-[12px] text-gray1-500">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="relative">Sell</div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 object-contain"
            alt=""
            src="/frame4@2x.png"
          />
        </div>
        <div className="relative text-black1">Account</div>
      </div>
    </div>
  );
};

export default SellerVerify1Web;
