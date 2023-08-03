import {
  DropDownContainer,
  DropDownIcon,
  DropDownItem,
  DropDownItemDesc,
  DropDownItemTitle,
  DropDownTextContainer,
} from "@/components/atoms/drop-down";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

export interface INavDropDownProps {
  isOpen: boolean;
}

export const NavDropDown = (props: INavDropDownProps) => {
  const { isOpen } = props;

  return (
    <DropDownContainer active={isOpen}>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiFillPhone />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Phone</DropDownItemTitle>
          <DropDownItemDesc>
            {"Let's get together and have a chat?"}
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <AiOutlineMail />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Email</DropDownItemTitle>
          <DropDownItemDesc>
            {"If you want to talk jus send a message and I'll get back"}
          </DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
      <DropDownItem href="#" target="_blank" rel="noreferrer">
        <DropDownIcon>
          <FaLocationArrow />
        </DropDownIcon>
        <DropDownTextContainer>
          <DropDownItemTitle>Address</DropDownItemTitle>
          <DropDownItemDesc>1405, Angelus Dr, Florissant. Mo</DropDownItemDesc>
        </DropDownTextContainer>
      </DropDownItem>
    </DropDownContainer>
  );
};
