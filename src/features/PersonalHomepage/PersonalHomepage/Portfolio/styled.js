import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg"

export const Wrapper = styled.div`
    margin-top: 72px;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 48px;
    }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 8px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const MyProjects = styled.h3`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.textPrimary};
    
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        font-size: 17px;
    }
    `;