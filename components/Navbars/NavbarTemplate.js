import React from "react";
import Image from "next/image";
import RVCELogo from "../../public/RVCE-logo.png";
import ByteForgeLogo from "../../public/ByteForge-logo.png";
import Button from "../Button";
import LinkButton from "../LinkButton";
import IconButton from "../IconButton";

export default function NavbarTemplate({ buttonList, linksList }) {
  return (
    <div className="w-full flex justify-between items-center shadow-inner duration-200 hover:shadow-innerOnHover py-2 px-4">
      <Image src={RVCELogo} alt="RVCE logo" width={50} />
      <Image className="absolute left-[calc(50%-60px)]" src={ByteForgeLogo} alt="ByteForge logo" width={120} />

      <nav className="flex gap-8 items-center">
        {linksList.map((linkData, index) => {
          return (
            <LinkButton
              key={index}
              href={linkData.href}
              color={linkData.color}
              text={linkData.text}
              Icon={linkData.Icon ? linkData.Icon : null}
            />
          );
        })}

        {buttonList.map((buttonData, index) => {
          if(buttonData.isIcon){
            return(
              <IconButton
                key={index}
                onClickFunction={buttonData.onClick}
                color={buttonData.color}
                text={buttonData.text}
                Icon={buttonData.Icon}
              />
            )
          }else{
            return (
              <Button
                key={index}
                onClick={buttonData.onClick}
                color={buttonData.color}
                text={buttonData.text}
              />
            );
          }
        })}
      </nav>
    </div>
  );
}
