import styled from "styled-components";

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
`;

export const StyledProject = styled.div`
    max-width: 592px;
    padding: 56px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    border: 6px solid ${({ theme }) => theme.colors.box.border};
    border-radius: 4px;
    &:hover{
        border: 6px solid ${({ theme }) => theme.colors.box.borderHover};
        border-radius: 4px;
    }
`;

export const ProjectTitle = styled.h3`
    display: flex;
    justify-content: flex-start;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${({ theme }) => theme.colors.portfolio.title};
    margin: 0;
`;