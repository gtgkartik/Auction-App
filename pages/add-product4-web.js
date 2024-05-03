import { useCallback } from "react";
import { useRouter } from "next/router";

const AddProduct4Web = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/add-product2-web");
  }, [router]);

  return (
    <div className="w-full relative bg-white1 h-[1606px] overflow-hidden text-left text-base text-black font-roboto">
      <div className="absolute top-[134px] left-[calc(50%_-_720px)] bg-light w-[1440px] h-[981px]" />
      <div className="absolute top-[186px] left-[calc(50%_-_320px)] w-[697px] h-[88px] text-center text-lg font-body-regular-small">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[56px]">
          <div className="w-[136px] relative h-[88px]">
            <b className="absolute top-[72.73%] left-[13.97%] leading-[24px]">
              Description
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconpencilalt1.svg"
            />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[39.77%] right-[26.47%] bottom-[32.95%] left-[55.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/epsuccessfilled.svg"
            />
          </div>
          <div className="w-[136px] relative h-[88px]">
            <b className="absolute top-[72.73%] left-[16.18%] leading-[24px]">
              Categories
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcursorclick.svg"
            />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[39.77%] right-[26.47%] bottom-[32.95%] left-[55.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/epsuccessfilled.svg"
            />
          </div>
          <div className="w-[136px] relative h-[88px]">
            <b className="absolute top-[72.73%] left-[27.94%] leading-[24px]">
              Photos
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcamera.svg"
            />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[39.77%] right-[26.47%] bottom-[32.95%] left-[55.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/epsuccessfilled.svg"
            />
          </div>
          <div className="w-[136px] relative h-[88px]">
            <b className="absolute top-[72.73%] left-[24.26%] leading-[24px]">
              Delivery
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-accent" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcube1.svg"
            />
          </div>
        </div>
        <div className="absolute top-[27px] left-[115px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
        <div className="absolute top-[27px] left-[305px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
        <div className="absolute top-[27px] left-[497px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
      </div>
      <div className="absolute top-[0px] left-[-4px] [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1440px] h-[38px] overflow-hidden text-sm text-white1">
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
      <div className="absolute top-[62px] left-[96px] w-[1240px] flex flex-row items-center justify-center gap-[40px]">
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
      <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] w-[1441px] h-[589px] text-21xl text-white1">
        <div className="absolute bottom-[0px] left-[calc(50%_-_720.5px)] w-[1441px] h-[589px]">
          <div className="absolute bottom-[0px] left-[calc(50%_-_720.5px)] bg-whitesmoke-200 w-[1441px] h-[499px]" />
          <div className="absolute bottom-[131px] left-[calc(50%_-_619.5px)] box-border w-[1241px] h-px border-t-[1px] border-solid border-brown-200" />
          <div className="absolute bottom-[412px] left-[101px] rounded-xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1240px] overflow-hidden flex flex-row items-center justify-between py-9 px-16 box-border">
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
          <div className="absolute bottom-[165.8px] left-[101px] w-[1240px] flex flex-row items-start justify-between text-base text-accent">
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
          <div className="absolute bottom-[91px] left-[101px] text-sm text-brown-300 text-right">
            Bidbuyy © 2000-2023, All Rights Reserved
          </div>
        </div>
      </div>
      <div className="absolute top-[310px] left-[75px] rounded-2xl bg-white1 w-[1290px] h-[575px] text-neutral-text-primary font-body-regular-small">
        <div
          className="absolute top-[481px] left-[calc(50%_-_93px)] rounded-43xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[186px] h-[52px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border cursor-pointer text-white1 font-roboto"
          onClick={onFrameContainer2Click}
        >
          <div className="relative font-medium">Next</div>
        </div>
        <b className="absolute h-[3.74%] w-[37.67%] top-[6.21%] left-[3.1%] text-lg leading-[24px] inline-block">
          Select delivery options
        </b>
        <div className="absolute top-[90px] left-[42px] w-[588px] h-[72px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg opacity-[0.5]" />
          <img
            className="absolute h-[65.28%] w-[26.58%] top-[16.67%] right-[2.65%] bottom-[18.06%] left-[70.77%] max-w-full overflow-hidden max-h-full hidden"
            alt=""
            src="/image.svg"
          />
          <div className="absolute h-[36.11%] w-[4.32%] top-[31.94%] right-[91.7%] bottom-[31.94%] left-[3.98%] rounded box-border border-[2px] border-solid border-neutral-gray-secondary" />
          <div className="absolute top-[36.11%] left-[11.63%] leading-[20px]">
            Self pickup
          </div>
        </div>
        <div className="absolute top-[178px] left-[42px] w-[588px] h-[72px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg opacity-[0.5]" />
          <div className="absolute h-[65.28%] w-[26.58%] top-[16.67%] right-[2.65%] bottom-[18.06%] left-[70.77%] overflow-hidden hidden">
            <img
              className="absolute top-[3px] left-[31px] w-[98px] h-[42px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="absolute h-[47.22%] w-[5.66%] top-[31.94%] right-[90.36%] bottom-[20.83%] left-[3.98%] rounded bg-accent box-border flex flex-row items-center justify-center p-1 border-[2px] border-solid border-accent">
            <img
              className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
              alt=""
              src="/iconcheck1.svg"
            />
          </div>
          <div className="absolute top-[36.11%] left-[11.63%] leading-[20px]">
            Online payment
          </div>
        </div>
        <div className="absolute top-[266px] left-[42px] w-[588px] h-[72px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg opacity-[0.5]" />
          <div className="absolute h-[65.28%] w-[26.58%] top-[16.67%] right-[2.65%] bottom-[18.06%] left-[70.77%] overflow-hidden hidden">
            <img
              className="absolute top-[3px] left-[31px] w-[98px] h-[42px] object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="absolute h-[47.22%] w-[5.66%] top-[31.94%] right-[90.36%] bottom-[20.83%] left-[3.98%] rounded bg-accent box-border flex flex-row items-center justify-center p-1 border-[2px] border-solid border-accent">
            <img
              className="w-[22px] relative h-[22px] overflow-hidden shrink-0"
              alt=""
              src="/iconcheck1.svg"
            />
          </div>
          <div className="absolute top-[36.11%] left-[11.63%] leading-[20px]">
            Courier cash on delivery
          </div>
        </div>
        <div className="absolute top-[364px] left-[42px] w-[1194px] flex flex-col items-start justify-start gap-[9px] text-neutral-disabled-text">
          <b className="relative leading-[16px] text-black">Shipping time</b>
          <div className="self-stretch rounded-lg bg-neutral-gray-bg flex flex-col items-start justify-center p-4">
            <div className="relative leading-[18px]">Specify a date</div>
          </div>
          <div className="w-[33px] relative text-xs leading-[16px] hidden">
            14/40
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
        <div className="relative text-black1">Add Product</div>
      </div>
    </div>
  );
};

export default AddProduct4Web;
