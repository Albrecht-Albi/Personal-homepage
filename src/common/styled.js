import styled, { css } from "styled-components";

export const Container = styled.div`
    max-width: 1216px;
    padding: 16px;
    margin: auto;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 8px;
    }
`;

export const Caption = styled.p`
    display: flex;
    margin-top: 64px;
    color: ${({ theme }) => theme.colors.site.text};
    font-weight: 700;
    font-size: 12px;
    line-height: 15.6px;
    text-transform: uppercase;
    
`;

export const Title = styled.h2`
    width: 100%;
    font-weight: 900;
    font-style: normal;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
    margin: 0px;
    padding-bottom: 15px;
    color: ${({ theme }) => theme.colors.textPrimary};
    border-bottom: 1px solid rgba(209, 213, 218, 0.3);
    ${({ portfolio }) => portfolio && css`
        border: none;
        padding: 0;
        text-align: center;
    `}
`;

export const Paragraph = styled.p`
    max-width: 633px;
    margin: 35px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.site.text};
    ${({ midBlack }) => midBlack && css`
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        margin: 26px 0;
        color: ${({ theme }) => theme.colors.textPrimary};
    `}
`;