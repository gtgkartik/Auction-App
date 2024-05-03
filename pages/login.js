import { useCallback } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const onSellTextClick = useCallback(() => {
    router.push("/seller-create-account-web");
  }, [router]);

  return (
    <div className="w-full relative bg-white1 h-[1453px] overflow-hidden text-left text-base text-black font-roboto">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1440px] h-[38px] overflow-hidden text-sm text-white1">
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
      <div className="absolute top-[62px] left-[100px] w-[1240px] flex flex-row items-center justify-center gap-[40px]">
        <img
          className="w-[114.2px] relative h-[33px] object-cover"
          alt=""
          src="/logo-text@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div className="flex flex-row items-center justify-start gap-[4px]">
            <div className="relative">Home</div>
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/frame8.svg"
            />
          </div>
          <div className="relative">Auction</div>
          <div className="relative cursor-pointer" onClick={onSellTextClick}>
            Sell
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
      <div className="absolute top-[134px] left-[0px] bg-light w-[1440px] h-[820px]" />
      <div className="absolute top-[864px] left-[calc(50%_-_720px)] w-[1441px] h-[589px] text-21xl text-white1">
        <div className="absolute top-[0px] left-[calc(50%_-_720.5px)] w-[1441px] h-[589px]">
          <div className="absolute top-[90px] left-[calc(50%_-_720.5px)] bg-whitesmoke-200 w-[1441px] h-[499px]" />
          <div className="absolute top-[457px] left-[calc(50%_-_619.5px)] box-border w-[1241px] h-px border-t-[1px] border-solid border-brown-200" />
          <div className="absolute top-[0px] left-[101px] rounded-xl bg-accent w-[1240px] overflow-hidden flex flex-row items-center justify-between py-9 px-16 box-border">
            <b className="w-[551px] relative leading-[45px] inline-block h-[94px] shrink-0">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
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
            <div className="flex flex-col items-start justify-start gap-[35px] text-14xl-5">
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <b className="relative">Bidbuyy</b>
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
      <div className="absolute top-[201px] left-[100px] rounded-xl bg-white1 w-[1240px] h-[599px]" />
      <div className="absolute top-[582px] left-[151px] rounded-43xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[471px] h-[52px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border text-white1">
        <div className="relative font-medium">Login</div>
      </div>
      <div className="absolute top-[200px] left-[720px] rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[620px] h-[600px]" />
      <div className="absolute top-[562px] left-[874px] rounded-43xl bg-gray1-300 w-[311px] h-[37px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border text-sm text-white1">
        <div className="relative">
          <span className="font-medium">{`Don’t have an account? `}</span>
          <b className="[text-decoration:underline]">Signup here</b>
        </div>
      </div>
      <b className="absolute top-[392px] left-[886px] text-21xl leading-[45px] inline-block text-white w-72 h-[46px]">
        Welcome back!
      </b>
      <b className="absolute top-[244px] left-[152px] text-21xl leading-[45px] inline-block text-accent w-[127px] h-[46px]">
        Login
      </b>
      <div className="absolute top-[324px] left-[152px] flex flex-col items-start justify-start gap-[8px] font-title-16px-regular">
        <div className="relative leading-[24px] opacity-[0.4]">
          <span>Email</span>
          <span className="text-button2">*</span>
        </div>
        <div className="w-[470px] relative rounded box-border h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-grey" />
      </div>
      <div className="absolute top-[532px] left-[187px] leading-[24px] font-title-16px-regular opacity-[0.4]">
        Remember me
      </div>
      <div className="absolute top-[424px] left-[152px] flex flex-col items-start justify-start gap-[8px] font-title-16px-regular">
        <div className="relative leading-[24px] opacity-[0.4]">
          <span>Password</span>
          <span className="text-button2">*</span>
        </div>
        <div className="w-[470px] relative rounded box-border h-[50px] overflow-hidden shrink-0 border-[1px] border-solid border-grey" />
      </div>
      <div className="absolute top-[532px] left-[151px] rounded box-border w-6 h-6 border-[1px] border-solid border-grey" />
      <div className="absolute top-[462px] left-[801px] font-medium text-white text-center inline-block w-[457px]">
        "Welcome back! We're thrilled to see you again. Log in to Bidbuyy and
        resume your journey into the world of exclusive auctions. Your next
        winning bid could be just a click away. Happy bidding!"
      </div>
      <div className="absolute top-[660px] left-[152px] w-[470px] h-[15px]">
        <div className="absolute top-[0px] left-[189px] inline-block w-[90px] h-[15px]">
          Or login with
        </div>
        <div className="absolute top-[9.5px] left-[-0.5px] box-border w-[169px] h-px border-t-[1px] border-solid border-light" />
        <div className="absolute top-[9.5px] left-[299.5px] box-border w-[172px] h-px border-t-[1px] border-solid border-light" />
      </div>
      <div className="absolute top-[701px] left-[290px] flex flex-row items-start justify-start gap-[16px]">
        <img
          className="w-[54px] relative h-[54px]"
          alt=""
          src="/frame-920.svg"
        />
        <img
          className="w-[54px] relative h-[54px]"
          alt=""
          src="/frame-919.svg"
        />
        <img
          className="w-[54px] relative h-[54px]"
          alt=""
          src="/frame-921.svg"
        />
      </div>
      <div className="absolute top-[158px] left-[100px] flex flex-row items-center justify-start gap-[12px] text-gray1-500">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="relative">Home</div>
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

export default Login;
