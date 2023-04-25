import { Container } from "../../styled"
import Header from "./Header"
import Skills from "./Skills";
import { myData } from "./data";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import ThemeSwitch from "../../ThemeSwitch";

const PersonalHomepage = () => {
    return (
        <Container>
            <ThemeSwitch />
            <Header />
            <Skills title="My skillset includes 🛠️" skills={myData.currentSkills} />
            <Skills title="What I want to learn next 🚀" skills={myData.skillsToLearn} />
            <Portfolio />
            <Footer />
        </Container>
    );
};

export default PersonalHomepage;