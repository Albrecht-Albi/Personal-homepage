import styled from "styled-components"

export const AppWrapper = styled.div`
transition: background 0.3s;
    background: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
`