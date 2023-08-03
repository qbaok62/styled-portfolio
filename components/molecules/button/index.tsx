import { ButtonFront, ButtonBack } from "@/components/atoms";
import React from "react";

export interface ICustomedButtonProps
  extends React.HTMLProps<HTMLButtonElement> {}

export const CustomedButton = (props: ICustomedButtonProps) => {
  const { children, onClick, alt, disabled, form } = props;

  return (
    <ButtonBack alt={alt} form={form} disabled={disabled}>
      {children}
      <ButtonFront alt={alt} onClick={onClick} disabled={disabled}>
        {children}
      </ButtonFront>
    </ButtonBack>
  );
};
