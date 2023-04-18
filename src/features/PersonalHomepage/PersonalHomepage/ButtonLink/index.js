import styled from "styled-components";

export const ButtonLink = styled.a`
    text-decoration: none;
    padding: 12px 16px;
    font-weight: 600;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.buttonLink.text};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.box.border};
    border-radius: 4px;
    transition: box-shadow 0.3s;
    &:hover{
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 18px;
    }
`;