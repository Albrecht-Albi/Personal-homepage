import { Caption, Paragraph } from "../../../styled";
import Mail from "./Mail";
import SocialMedia from "./SocialMedia";
import { FooterWrapper } from "./styled";

const Footer = () => {
    return (
        <FooterWrapper>
            <Caption>Let's talk</Caption>
            <Mail />
            <Paragraph midBlack>
                I'm always open to new projects whenever I have the time. If you have a website,
                dashboard or mobile app in mind and need some help to make your ideas come to life,
                feel free to conatct me 🤞
            </Paragraph>
            <SocialMedia />
        </FooterWrapper>

    );
}

export default Footer;