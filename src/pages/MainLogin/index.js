import React from "react";

import { Column, Img, Stack } from "components";

const MainLoginPage = () => {
  return (
    <>
      <Column className="bg-bluegray_900 items-center justify-end mx-[auto] lg:p-[26px] xl:p-[30px] 2xl:p-[34px] 3xl:p-[41px] p-[46px] w-[100%]">
        <Img
          src="images/img_image2prev.png"
          className="lg:h-[54px] xl:h-[62px] 2xl:h-[70px] 3xl:h-[83px] h-[92px] 2xl:mt-[10px] 3xl:mt-[12px] mt-[14px] lg:mt-[8px] xl:mt-[9px] w-[13%]"
          alt="image2prev"
        />
        <Stack className="bg-gray_200 lg:h-[507px] xl:h-[580px] 2xl:h-[653px] 3xl:h-[783px] h-[869px] 3xl:mt-[11px] mt-[13px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] lg:px-[28px] xl:px-[32px] 2xl:px-[36px] 3xl:px-[44px] px-[49px] rounded-radius60 w-[37%]">
          <Img
            src="images/img_image1.png"
            className="absolute lg:h-[450px] xl:h-[515px] 2xl:h-[579px] 3xl:h-[695px] h-[771px] inset-[0] justify-center m-[auto] w-[92%]"
            alt="imageOne"
          />
        </Stack>
      </Column>
    </>
  );
};

export default MainLoginPage;
