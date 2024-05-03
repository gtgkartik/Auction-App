import { useCallback } from "react";
import { useRouter } from "next/router";

const BidProduct = () => {
  const router = useRouter();

  const onButtonContainer3Click = useCallback(() => {
    router.push("/product");
  }, [router]);

  return (
    <div className="w-full relative bg-white1 h-[2137px] overflow-hidden text-left text-base text-black1 font-title-16px-regular">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[1440px] h-[38px] overflow-hidden text-sm text-white1 font-roboto">
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
      <div className="absolute top-[62px] left-[100px] w-[1240px] flex flex-row items-center justify-center gap-[40px] text-black font-roboto">
        <img
          className="w-[114.2px] relative h-[33px] object-cover"
          alt=""
          src="/logo-text@2x.png"
        />
        <div className="flex flex-row items-center justify-start gap-[24px]">
          <div className="rounded-xl bg-accent overflow-hidden flex flex-row items-center justify-start p-2 text-white">
            <div className="relative">Home</div>
          </div>
          <div className="relative">Sell</div>
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
      <div className="absolute top-[1548px] left-[calc(50%_-_721px)] w-[1441px] h-[589px] text-21xl text-white1 font-roboto">
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
      <div className="absolute top-[158px] left-[100px] flex flex-row items-center justify-start gap-[12px] text-gray1-500 font-roboto">
        <div className="flex flex-row items-center justify-start gap-[4px]">
          <div className="relative">Home</div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0 object-contain"
            alt=""
            src="/frame4@2x.png"
          />
        </div>
        <div className="relative text-dimgray-100">Category</div>
        <img
          className="w-4 relative h-4 overflow-hidden shrink-0 object-contain"
          alt=""
          src="/frame4@2x.png"
        />
      </div>
      <div className="absolute top-[158px] left-[276px] font-roboto text-dimgray-100">
        xyz instrument
      </div>
      <img
        className="absolute top-[225px] left-[214px] rounded w-[632px] h-[600px] overflow-hidden object-cover"
        alt=""
        src="/frame-894@2x.png"
      />
      <img
        className="absolute top-[225px] left-[99px] rounded-[2.25px] w-[95.8px] h-[77.7px] overflow-hidden object-cover"
        alt=""
        src="/frame-895@2x.png"
      />
      <img
        className="absolute top-[311.8px] left-[99px] rounded-[2.25px] w-[95.8px] h-[77.7px] overflow-hidden object-cover"
        alt=""
        src="/frame-896@2x.png"
      />
      <img
        className="absolute top-[398.5px] left-[99px] rounded-[2.25px] w-[95.8px] h-[77.7px] overflow-hidden object-cover"
        alt=""
        src="/frame-897@2x.png"
      />
      <img
        className="absolute top-[485.3px] left-[99px] rounded-[2.25px] w-[95.8px] h-[77.7px] overflow-hidden object-cover"
        alt=""
        src="/frame-919@2x.png"
      />
      <div className="absolute top-[225px] left-[901px] text-5xl tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-semibold">
        xyz instrument
      </div>
      <div className="absolute top-[302px] left-[901px] text-5xl tracking-[0.03em] leading-[24px] font-heading-24px-semibold">
        RS.192,00
      </div>
      <div className="absolute top-[265px] left-[901px] font-roboto text-accent">
        Time left 4d 20h (Sat, 02:39 PM)
      </div>
      <div className="absolute top-[350px] left-[901px] text-sm leading-[21px] inline-block w-[373px]">{`PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.`}</div>
      <div className="absolute top-[307px] left-[1029px] text-sm leading-[21px] inline-block w-[373px] h-4">
        (3 bids)
      </div>
      <img
        className="absolute top-[437px] left-[901px] max-h-full w-[400px] opacity-[0.5]"
        alt=""
        src="/underline.svg"
      />
      <div className="absolute top-[453px] left-[902px] w-[159px] h-11 flex flex-row items-start justify-start text-xl">
        <div className="w-10 relative rounded-tl rounded-tr-none rounded-br-none rounded-bl box-border h-11 overflow-hidden shrink-0 border-[1px] border-solid border-gray1-200">
          <img
            className="absolute top-[10px] left-[8px] w-6 h-6 overflow-hidden"
            alt=""
            src="/iconminus.svg"
          />
        </div>
        <div className="w-20 relative box-border h-11 overflow-hidden shrink-0 ml-[-1px] border-t-[1px] border-solid border-gray1-200 border-b-[1px]">
          <div className="absolute top-[8px] left-[17px] leading-[28px] font-medium">
            1000
          </div>
        </div>
        <img
          className="w-[41px] relative rounded-tl-none rounded-tr rounded-br rounded-bl-none h-11 overflow-hidden shrink-0 ml-[-1px]"
          alt=""
          src="/frame-907.svg"
        />
      </div>
      <div className="absolute top-[519px] left-[902px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[336px] flex flex-row items-center justify-center py-2.5 px-12 box-border text-text">
        <div className="relative leading-[24px] font-medium">Bid Now</div>
      </div>
      <img
        className="absolute top-[521px] left-[1261px] rounded w-10 h-10 overflow-hidden"
        alt=""
        src="/frame-904.svg"
      />
      <div className="absolute top-[1291px] left-[99px] rounded bg-white w-[1222px] h-[193px] overflow-hidden">
        <img
          className="absolute top-[90px] left-[0px] w-[399px] h-0 opacity-[0.5]"
          alt=""
        />
        <img
          className="absolute top-[177px] left-[0px] w-[399px] h-0 opacity-[0.5]"
          alt=""
        />
        <img
          className="absolute top-[16px] left-[22px] rounded-[50%] w-[65px] h-[65px] object-cover"
          alt=""
          src="/ellipse-30@2x.png"
        />
        <div className="absolute top-[27px] left-[99px] text-sm leading-[21px] font-semibold inline-block w-[131px]">
          Kaif Khawaja
        </div>
        <div className="absolute top-[48px] left-[98px] flex flex-row items-start justify-start gap-[8px] text-sm">
          <div className="flex flex-row items-start justify-start">
            <img
              className="w-5 relative rounded-11xs-4 h-5"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="w-5 relative rounded-11xs-4 h-5"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="w-5 relative rounded-11xs-4 h-5"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="w-5 relative rounded-11xs-4 h-5"
              alt=""
              src="/vector4.svg"
            />
            <img
              className="w-5 relative rounded-11xs-4 h-5 opacity-[0.25]"
              alt=""
              src="/vector5.svg"
            />
          </div>
          <div className="relative leading-[21px] opacity-[0.5]">
            (150 Reviews)
          </div>
        </div>
        <div className="absolute top-[99px] left-[19px] leading-[21px] inline-block w-[972px]">
          Lorem ipsum dolor sit amet consectetur. Augue quis justo amet
          tristique nibh. Elementum risus sem ultricies sed id. Quam enim sem eu
          egestas diam sit auctor nunc ultrices. In consectetur urna nibh
          molestie. Tincidunt dictumst ut pretium cursus urna sodales et. Duis
          adipiscing laoreet risus malesuada elementum.
        </div>
        <div className="absolute top-[38px] left-[1018px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[182px] flex flex-row items-center justify-center py-2.5 px-12 box-border text-text">
          <div className="relative leading-[24px] font-medium">
            Other products
          </div>
        </div>
        <div className="absolute top-[98px] left-[1018px] rounded box-border w-[182px] flex flex-row items-center justify-center py-2.5 px-12 text-accent border-[1px] border-solid border-accent">
          <div className="relative leading-[24px] font-medium">Contact</div>
        </div>
      </div>
      <div className="absolute top-[889px] left-[calc(50%_-_621px)] rounded box-border w-[1222px] h-[386px] overflow-hidden text-5xl font-heading-24px-semibold border-[1px] border-solid border-gray1-200">
        <img
          className="absolute top-[90px] left-[0px] w-[399px] h-0 opacity-[0.5]"
          alt=""
        />
        <img
          className="absolute top-[177px] left-[0px] w-[399px] h-0 opacity-[0.5]"
          alt=""
        />
        <div className="absolute top-[30px] left-[27px] tracking-[0.03em] leading-[24px] font-semibold">
          Item Specifications
        </div>
        <div className="absolute top-[69px] left-[27px] text-base tracking-[0.03em] leading-[24px] inline-block w-[1158px] h-[287px]">
          <p className="m-0">
            Lorem ipsum dolor sit amet consectetur. Vestibulum purus aliquam
            purus vel sed. Eu ornare enim tincidunt hendrerit libero commodo
            vitae netus magnis. Id at eget est id velit non in nulla tincidunt.
            Ultricies neque ac adipiscing
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            ugiat leo scelerisque vulputate posuere. Habitant pellentesque
            posuere et nunc. Amet erat nibh scelerisque proin sollicitudin nisl
            vitae. Pretium eget dolor auctor velit commodo blandit lacus
            adipiscing. Mollis tristique orci varius urna integer egestas
            sagittis. Mauris iaculis diam feugiat gravida aliquam lobortis
            viverra. Volutpat ultrices libero augue ut justo cursus eget a. Mi
            sed tortor ac sed massa venenatis sed pretium.
          </p>
          <p className="m-0">{`Lorem ipsum dolor sit amet consectetur. Vestibulum purus aliquam purus vel sed. Eu ornare enim tincidunt hendrerit libero commodo vitae netus magnis. Id at eget est id velit non in nulla tincidunt. Ultricies neque ac adipiscing turpis nunc orci fringilla tristique. In scelerisque velit dui eleifend pellentesque volutpat cras vitae. Diam urna purus cursus sit. `}</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">
            auctor velit commodo blandit lacus adipiscing. Mollis tristique orci
            varius urna integer egestas sagittis. Mauris iaculis diam feugiat
            gravida aliquam lobortis viverra. Volutpat ultrices libero augue ut
            justo cursus eget a. Mi sed tortor ac sed massa venenatis sed
            pretium.
          </p>
        </div>
      </div>
      <div className="absolute top-[587px] left-[901px] rounded box-border w-[400px] h-[180px] overflow-hidden border-[1px] border-solid border-gray1-200">
        <img
          className="absolute top-[90px] left-[0px] max-h-full w-[399px] opacity-[0.5]"
          alt=""
          src="/underline5.svg"
        />
        <div className="absolute top-[24px] left-[16px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/icondelivery.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium">Shipping</div>
            <div className="relative text-xs leading-[18px] font-medium">
              Rs. 100 per order
            </div>
          </div>
        </div>
        <div className="absolute top-[106px] left-[16px] flex flex-row items-center justify-start gap-[16px]">
          <img
            className="w-[38px] relative h-[38px] overflow-hidden shrink-0"
            alt=""
            src="/iconparkoutlinedelivery.svg"
          />
          <div className="flex flex-col items-start justify-start gap-[8px]">
            <div className="relative leading-[24px] font-medium">Delivery</div>
            <div className="relative text-xs leading-[18px] font-medium">
              Estimated between Thu, Jan 4 and Fri, Jan 12
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] bg-gray1-100 w-[1440px] h-[2137px]" />
      <div className="absolute top-[177px] left-[calc(50%_-_321px)] rounded-2xl bg-white1 w-[649px] h-[402px] overflow-hidden">
        <img
          className="absolute top-[31px] left-[589px] w-6 h-6 overflow-hidden"
          alt=""
          src="/icroundclose.svg"
        />
        <div className="absolute top-[31px] left-[36px] text-5xl tracking-[0.03em] leading-[24px] font-semibold font-heading-24px-semibold">
          Place your bid
        </div>
        <div className="absolute top-[115px] left-[45px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[170px] flex flex-row items-center justify-center py-2.5 px-12 box-border text-text">
          <div className="relative leading-[24px]">
            <span className="font-medium">Bid PKR 1000</span>
          </div>
        </div>
        <div className="absolute top-[115px] left-[239px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[171px] flex flex-row items-center justify-center py-2.5 px-12 box-border text-text">
          <div className="relative leading-[24px]">
            <span className="font-medium">Bid PKR 1300</span>
          </div>
        </div>
        <div className="absolute top-[115px] left-[434px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[170px] flex flex-row items-center justify-center py-2.5 px-12 box-border text-text">
          <div className="relative leading-[24px]">
            <span className="font-medium">Bid PKR 1500</span>
          </div>
        </div>
        <div
          className="absolute top-[265px] left-[438px] rounded [background:linear-gradient(89.28deg,_#7b2334,_#9f3247),_#9f3247] w-[170px] flex flex-row items-center justify-center py-2.5 px-12 box-border cursor-pointer text-text"
          onClick={onButtonContainer3Click}
        >
          <div className="relative leading-[24px] font-medium">Place bid</div>
        </div>
        <div className="absolute top-[73px] left-[106px] font-roboto text-accent">
          Time left 4d 20h (Sat, 02:39 PM)
        </div>
        <div className="absolute top-[73px] left-[36px] leading-[21px] inline-block w-[98px] h-6">
          (3 bids)
        </div>
        <div className="absolute top-[201px] left-[36px] leading-[21px] font-medium inline-block w-[117px] h-6">
          Your max bid
        </div>
        <img
          className="absolute top-[187px] left-[36px] max-h-full w-[577px] opacity-[0.5]"
          alt=""
          src="/underline10.svg"
        />
        <div className="absolute top-[262px] left-[36px] rounded box-border w-[366px] h-[50px] overflow-hidden border-[1px] border-solid border-grey">
          <div className="absolute top-[13px] left-[11px] leading-[24px] font-medium">
            PKR
          </div>
        </div>
        <div className="absolute top-[239px] left-[36px] leading-[24px] text-black opacity-[0.4]">
          Enter PKR 1000 or more
        </div>
      </div>
    </div>
  );
};

export default BidProduct;
