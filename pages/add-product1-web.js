import { useCallback } from "react";
import { useRouter } from "next/router";

const AddProduct1Web = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/add-product2-web");
  }, [router]);

  const onFrameContainer2Click = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="w-full relative bg-white1 h-[1606px] overflow-hidden text-left text-base text-black font-roboto">
      <div className="absolute top-[134px] left-[calc(50%_-_720px)] bg-light w-[1440px] h-[981px]" />
      <div className="absolute top-[186px] left-[calc(50%_-_355px)] w-[711px] h-[88px] text-center text-lg font-body-regular-small">
        <div className="absolute top-[0px] left-[0px] w-[712px] h-[88px]">
          <div className="absolute top-[0px] left-[0px] w-[136px] h-[88px]">
            <b className="absolute top-[72.73%] left-[13.97%] leading-[24px]">
              Description
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-accent" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconpencilalt.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[192px] w-[136px] h-[88px]">
            <div className="absolute top-[72.73%] left-[16.91%] leading-[24px] font-semibold">
              Categories
            </div>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcursorclick.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[384px] w-[136px] h-[88px]">
            <div className="absolute top-[72.73%] left-[28.68%] leading-[24px] font-semibold">
              Photos
            </div>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcamera.svg"
            />
          </div>
          <div className="absolute top-[0px] left-[576px] w-[136px] h-[88px]">
            <div className="absolute top-[72.73%] left-[25%] leading-[24px] font-semibold">
              Delivery
            </div>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-white" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcube.svg"
            />
          </div>
          <div className="absolute top-[34px] left-[116px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
        </div>
        <div className="absolute top-[34px] left-[306px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
        <div className="absolute top-[34px] left-[498px] box-border w-[100px] h-0.5 border-t-[2px] border-dashed border-brown-100" />
      </div>
      <div className="absolute top-[310px] left-[calc(50%_-_645px)] rounded-2xl bg-white1 w-[1290px] h-[650px]">
        <b className="absolute h-[3.69%] w-[37.67%] top-[6.45%] left-[3.26%] text-lg leading-[24px] inline-block">{`Fill in the basic information about your item `}</b>
        <div className="absolute top-[90px] left-[41px] w-[810px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[16px]">Product name</b>
          <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4">
            <div className="relative leading-[18px]">
              Graphic card GIGABYTE GeForce RTX 3050
            </div>
          </div>
          <div className="relative text-xs leading-[16px] text-grey">38/60</div>
        </div>
        <div className="absolute top-[90px] left-[880px] w-[370px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[16px]">Number of units available</b>
          <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4 text-grey">
            <div className="relative leading-[18px]">Availability</div>
          </div>
          <div className="w-[26px] relative text-xs leading-[16px] font-body-regular-small text-neutral-disabled-text hidden">
            0/40
          </div>
        </div>
        <div className="absolute top-[452px] left-[880px] w-[330px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[16px]">Initial price</b>
          <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4 text-grey">
            <div className="self-stretch relative leading-[18px]">{`Product price `}</div>
          </div>
          <div className="w-[26px] relative text-xs leading-[16px] font-body-regular-small text-neutral-disabled-text hidden">
            0/40
          </div>
        </div>
        <div className="absolute top-[212px] left-[41px] w-[810px] h-[314px] flex flex-col items-start justify-start gap-[16px]">
          <b className="relative leading-[16px]">Description</b>
          <div className="w-[810px] h-[282px] flex flex-col items-start justify-start gap-[2px]">
            <div className="w-[810px] relative rounded-lg bg-light h-[282px]">
              <div className="absolute top-[13px] left-[16px] w-[218px] flex flex-row items-center justify-start">
                <div className="w-[773px] relative leading-[20px] inline-block shrink-0">
                  The NVIDIA RTX 3050 graphics card is a design equipped with
                  8GB of GDDR6 memory, supports PCI-E 4.0 and offers a number of
                  unique technologies from NVIDIA to enhance the smoothness and
                  high quality of generated graphics. At the same time, it
                  provides support for Ray Tracing, allowing you to enjoy
                  photorealistic graphics.
                </div>
              </div>
              <img
                className="absolute right-[4px] bottom-[6px] w-4 h-4"
                alt=""
                src="/iconstrech.svg"
              />
            </div>
            <div className="relative text-xs leading-[16px] text-grey text-right">
              322/1200
            </div>
          </div>
        </div>
        <b className="absolute h-[2.46%] w-[13.41%] top-[32.86%] left-[68.22%] leading-[16px] inline-block">
          Dimensions (optional)
        </b>
        <div className="absolute h-[7.69%] w-[16.98%] top-[37.78%] right-[14.81%] bottom-[54.52%] left-[68.22%]">
          <div className="absolute h-[32%] w-[47.49%] top-[34%] left-[0%] leading-[16px] font-semibold inline-block">
            Length [mm]
          </div>
          <div className="absolute w-[30.14%] top-[calc(50%_-_25px)] right-[0%] left-[69.86%] flex flex-col items-start justify-start gap-[9px] text-neutral-text-primary font-body-regular-small">
            <b className="w-[42px] relative leading-[16px] hidden">Label</b>
            <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4 text-grey">
              <div className="relative leading-[18px] whitespace-pre-wrap">
                {" "}
                0
              </div>
            </div>
            <div className="w-[26px] relative text-xs leading-[16px] text-neutral-disabled-text hidden">
              0/40
            </div>
          </div>
        </div>
        <div className="absolute h-[7.69%] w-[16.98%] top-[47.91%] right-[14.81%] bottom-[44.4%] left-[68.22%]">
          <div className="absolute h-[32%] w-[54.79%] top-[34%] left-[0%] leading-[16px] font-semibold inline-block">
            Width [mm]
          </div>
          <div className="absolute w-[30.14%] top-[calc(50%_-_25px)] right-[0%] left-[69.86%] flex flex-col items-start justify-start gap-[9px] text-neutral-text-primary font-body-regular-small">
            <b className="w-[42px] relative leading-[16px] hidden">Label</b>
            <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4 text-grey">
              <div className="relative leading-[18px] whitespace-pre-wrap">
                {" "}
                0
              </div>
            </div>
            <div className="w-[26px] relative text-xs leading-[16px] text-neutral-disabled-text hidden">
              0/40
            </div>
          </div>
        </div>
        <div className="absolute h-[7.69%] w-[16.98%] top-[58.05%] right-[14.81%] bottom-[34.26%] left-[68.22%]">
          <div className="absolute h-[32%] w-[55.25%] top-[34%] left-[0%] leading-[16px] font-semibold inline-block">
            Height [mm]
          </div>
          <div className="absolute w-[30.14%] top-[calc(50%_-_25px)] right-[0%] left-[69.86%] flex flex-col items-start justify-start gap-[9px] text-neutral-text-primary font-body-regular-small">
            <b className="w-[42px] relative leading-[16px] hidden">Label</b>
            <div className="self-stretch rounded-lg bg-light flex flex-col items-start justify-center p-4 text-grey">
              <div className="relative leading-[18px] whitespace-pre-wrap">
                {" "}
                0
              </div>
            </div>
            <div className="w-[26px] relative text-xs leading-[16px] text-neutral-disabled-text hidden">
              0/40
            </div>
          </div>
        </div>
        <div
          className="absolute top-[562px] left-[42px] rounded-43xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[186px] h-[52px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border cursor-pointer text-white1"
          onClick={onFrameContainerClick}
        >
          <div className="relative font-medium">Next</div>
        </div>
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
            onClick={onFrameContainer2Click}
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

export default AddProduct1Web;
