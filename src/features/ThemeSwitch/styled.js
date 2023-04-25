import styled, { css } from "styled-components";
import { ReactComponent as Toggle } from "./Image/toggle.svg"

export const Wrapper = styled.div`
    margin: 20px auto 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
`;

export const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    background: none;
    color: inherit;
    cursor: pointer;
`;

export const Status = styled.span`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.site.text};
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    background-color: ${({ theme }) => theme.colors.themeSwitch.background};
    display: flex;
    align-items: center;
    width: 48px;
    height: 26px;
    border: 1px solid;
    border-radius: 12px;
    margin-left: 12px;
`;

export const IconWrapper = styled.span`
    background: currentColor;
    padding: 3px;
    border-radius: 50%;
    display: flex;
    transition: transform 0.3s;
    ${({ moveToRight }) => moveToRight && css`
        transform: translateX(20px);
    `}
`;

export const Icon = styled(Toggle)`
    margin: 3px;
    color: ${({ theme }) => theme.colors.themeSwitch.icon};
`;