import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 88px;
    display: grid;
    justify-items: center;
    grid-gap: 24px;
    text-align: center;
    color: ${({ theme }) => theme.colors.textPrimary};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.header`
    font-weight: 700;
    font-size: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 1.4;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;