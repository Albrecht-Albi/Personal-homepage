import { Wrapper, MyProjects, Header, StyledGithubIcon } from "./styled";
import { Title } from "../../../styled";
import { Projects } from "./Projects";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "../../personalHomepageSlice";
import { useEffect } from "react";

const Portfolio = () => {

    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Wrapper>
            <Header>
                <StyledGithubIcon />
                <Title portfolio>Portfolio</Title>
                <MyProjects>My recent projects</MyProjects>
            </Header>

            <Projects
                status={repositoriesStatus}
                repositories={repositories}
            />
        </Wrapper>
    );
};

export default Portfolio;