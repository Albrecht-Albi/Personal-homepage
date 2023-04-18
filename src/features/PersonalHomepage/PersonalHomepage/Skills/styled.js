import styled from "styled-components";
import { ReactComponent as BulletImg } from "./bullet.svg"

export const Wrapper = styled.div`
    margin-top: 72px;
    padding: 32px;
    background: ${({ theme }) => theme.colors.box.background}; 
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 4px solid;
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 48px;
        padding: 16px;
    }
`;

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 8px 32px;
    margin-top: 32px;
    padding: 0;
    list-style: none;
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletHorizontalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.tabletVerticalMax}px) {
        font-size: 16px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        font-size: 14px;
        margin-top: 12px;
    }
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
    color: ${({ theme }) => theme.colors.site.text};
    font-size: 18px;
    line-height: 1.4;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        line-height: 1.2;
    }
`;

export const Bullet = styled(BulletImg)`
    color: ${({ theme }) => theme.colors.primary};
    margin-right: 16px;
    height: auto;
    @media (max-width:${({ theme }) => theme.breakpoint.mobileMax}px){
        margin-right: 8px;
        width: 6px;
    }
`;