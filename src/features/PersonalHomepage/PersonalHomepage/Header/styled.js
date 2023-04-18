import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "./envelope-icon.svg"

export const Wrapper = styled.div`
    margin-top: -30px;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
        grid-gap: 32px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;

export const Image = styled.img`
    width: 30vw;
    height: 30vw;
    max-width: 384px;
    max-height: 384px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 132px;
        height: 132px;
    }
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-top: 12px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Description = styled.p`
    font-size: 20px;
    margin-top: 36px;
    margin-bottom: 0px;
    line-height: 1.4;
    max-width: 650px;
    
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
        margin-top: 16px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
        max-width: 570px;
    }
`;

export const StyledLinkButton = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top: 32px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 24px;
    }
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;