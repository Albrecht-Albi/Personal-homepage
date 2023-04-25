import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as ErrorIcon } from "./danger.svg"
import { ButtonLink } from "../../../ButtonLink";
import { myData } from "../../../data";

export const ErrorBox = () => (
    <Wrapper>
        <ErrorIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github&nbsp;projects.<br />
            You can check them directly&nbsp;on&nbsp;Github.
        </Paragraph>
        <ButtonLink href={myData.github} target="_blank" title={myData.github} >Go to Github</ButtonLink>
    </Wrapper>
);