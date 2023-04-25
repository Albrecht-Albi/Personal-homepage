import styled from "styled-components";

export const MailWrapper = styled.div`
    margin-top: 24px;
`;

export const MailAdress = styled.a`
    font-weight: 900;
    font-size: 32px;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.textPrimary};
    text-decoration: none;
    transition: color 0.3s;
    &:hover{
        color: ${({ theme }) => theme.colors.primary};
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 20px;
    };
`;