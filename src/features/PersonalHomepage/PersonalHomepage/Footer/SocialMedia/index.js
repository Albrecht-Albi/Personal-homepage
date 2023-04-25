import { List, Item, Link } from "./styled"
import { socialIcons } from "./socialIcons"

const SocialMedia = () => {
    return (
        <List>
            {socialIcons.map(({ name, url, Icon }) => (
                <Item key={name}>
                    <Link href={url} title={name} target="_blank" rel="noreferrer">
                        <Icon />
                    </Link>
                </Item>
            ))}
        </List>
    )
};

export default SocialMedia;