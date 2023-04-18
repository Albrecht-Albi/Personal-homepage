import { Bullet, Item, ItemList, Wrapper } from "./styled";
import { Title } from "../../../../common/styled";

const Skills = ({ title, skills }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ItemList>
        {skills.map((skill) =>
          <Item key={skill}>
            <Bullet />
            {skill}
          </Item>
        )}
      </ItemList>
    </Wrapper>
  );
};

export default Skills;