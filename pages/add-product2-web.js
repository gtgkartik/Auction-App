import { useCallback } from "react";
import { useRouter } from "next/router";

const AddProduct2Web = () => {
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
      <div className="absolute top-[186px] left-[calc(50%_-_343px)] w-[686px] h-[88px] text-center text-lg font-body-regular-small">
        <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[56px]">
          <div className="w-[136px] relative h-[88px] z-[0]">
            <div className="absolute top-[72.73%] left-[14.71%] leading-[24px] font-semibold">
              Description
            </div>
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
          <div className="w-[136px] relative h-[88px] z-[1]">
            <b className="absolute top-[72.73%] left-[16.18%] leading-[24px]">
              Categories
            </b>
            <div className="absolute h-[63.64%] w-[41.18%] top-[0%] right-[29.41%] bottom-[36.36%] left-[29.41%] rounded-[50%] bg-accent" />
            <img
              className="absolute h-[27.27%] w-[17.65%] top-[17.05%] right-[40.44%] bottom-[55.68%] left-[41.91%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/iconcursorclick1.svg"
            />
          </div>
          <div className="w-[100px] absolute !m-[0] top-[35px] left-[115px] box-border h-0.5 z-[2] border-t-[2px] border-dashed border-brown-100" />
          <div className="w-[100px] absolute !m-[0] top-[35px] left-[305px] box-border h-0.5 z-[3] border-t-[2px] border-dashed border-brown-100" />
          <div className="w-[100px] absolute !m-[0] top-[35px] left-[497px] box-border h-0.5 z-[4] border-t-[2px] border-dashed border-brown-100" />
          <div className="w-[136px] relative h-[88px] z-[5]">
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
          <div className="w-[136px] relative h-[88px] z-[6]">
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
        </div>
      </div>
      <div className="absolute top-[310px] left-[75px] rounded-2xl bg-white1 w-[1290px] h-[650px] font-body-regular-small">
        <div
          className="absolute top-[560px] left-[calc(50%_-_93px)] rounded-43xl [background:linear-gradient(89.28deg,_#7b2334,_#9f3247)] w-[186px] h-[52px] overflow-hidden flex flex-row items-center justify-center py-4 px-[54px] box-border cursor-pointer text-white1 font-roboto"
          onClick={onFrameContainerClick}
        >
          <div className="relative font-medium">Next</div>
        </div>
        <b className="absolute h-[3.69%] w-[37.67%] top-[6.46%] left-[3.26%] text-lg leading-[24px] inline-block">
          Select the category your goods belong to (max. 3)
        </b>
        <div className="absolute top-[90px] left-[42px] flex flex-col items-start justify-start">
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-white" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Electronics
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Fashion
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Home and Garden
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Supermarket
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Beauty
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">{`Culture `}</div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Sports and tourism
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Automotive
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
          <div className="w-[228px] relative h-[43px]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-lg bg-neutral-gray-bg hidden" />
            <div className="absolute top-[27.91%] left-[7.89%] leading-[20px]">
              Properties
            </div>
            <div className="absolute h-[32.56%] w-[6.14%] top-[34.88%] right-[8.77%] bottom-[32.56%] left-[85.09%] overflow-hidden">
              <div className="absolute top-[48px] left-[-45px] w-6 h-6 overflow-hidden">
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
                <img
                  className="relative w-4 h-[8.1px] object-contain"
                  alt=""
                  src="/union@2x.png"
                />
              </div>
              <img className="relative w-0 h-0" alt="" />
              <img
                className="absolute h-3/6 w-3/12 top-[25%] right-[37.14%] bottom-[25%] left-[37.86%] max-w-full overflow-hidden max-h-full object-contain"
                alt=""
                src="/vector-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[90px] left-[312px] w-[170px] h-[186px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Phones and axesories
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Smartphones</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Smartwatches</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Tablets</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Axesories GSM</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Cases and covers</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[318px] left-[312px] w-[170px] h-[154px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Minor appliances
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Kitchen, cooking</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Hygiene and care</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">For home</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Vacuum cleaners</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[90px] left-[524px] w-52 h-[186px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Computers
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Laptops</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="rounded bg-accent flex flex-row items-center justify-center p-1 border-[2px] border-solid border-accent">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className="relative leading-[20px]">Laptop components</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="rounded bg-accent flex flex-row items-center justify-center p-1 border-[2px] border-solid border-accent">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className="relative leading-[20px]">Desktop Computers</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-accent" />
              <div className="relative leading-[20px]">Computer components</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Printers and scanners
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[318px] left-[524px] w-[209px] h-[154px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Appliances
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Fridges</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Washing machines</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Clothes dryers</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Free-standing kitchens
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[90px] left-[794px] w-[154px] h-[186px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            TVs and axesories
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">TVs</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Projectors</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Headphones</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Audio for home</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Home cinema</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[318px] left-[775px] w-48 h-[154px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Built-in appliances
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Hotplates</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Built-in ovens</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Built-in dishwashers
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Hoods</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[90px] left-[1009px] w-[233px] h-[186px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Consoles and slot machines
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Consoles PlayStation 5
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Consoles Xbox Series X/S
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Consoles PlayStation 4
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Consoles Xbox One</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                Consoles Nintendo Switch
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[318px] left-[1043px] w-[165px] h-[170px]">
          <b className="absolute top-[0px] left-[0px] leading-[16px]">
            Photography
          </b>
          <div className="absolute top-[34px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Digital cameras</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Lenses</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">Photo axesories</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <div className="w-[26px] rounded box-border h-[26px] border-[2px] border-solid border-light" />
              <div className="relative leading-[20px]">
                <p className="m-0">Instant cameras</p>
                <p className="m-0">(Instax, Polaroid)</p>
              </div>
            </div>
          </div>
        </div>
        <b className="absolute top-[78%] left-[3.1%] text-lg leading-[24px]">
          Selected categories:
        </b>
        <div className="absolute top-[504px] left-[236px] rounded-29xl bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-6 gap-[12px] text-center text-sm border-[1px] border-solid border-white">
          <div className="relative leading-[18px] font-semibold">
            Laptop components
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/iconx.svg"
          />
        </div>
        <div className="absolute top-[504px] left-[467px] rounded-29xl bg-white overflow-hidden flex flex-row items-center justify-center py-2 px-6 gap-[12px] text-center text-sm border-[1px] border-solid border-white">
          <div className="relative leading-[18px] font-semibold">
            Desktop Computers
          </div>
          <img
            className="w-4 relative h-4 overflow-hidden shrink-0"
            alt=""
            src="/iconx.svg"
          />
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

export default AddProduct2Web;
