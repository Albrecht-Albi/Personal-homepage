import { myData } from "../../data";
import { MailAdress, MailWrapper } from "./styled";

const Mail = () => {
  return (
    <MailWrapper>
      <MailAdress href={`mailto:${myData.email}`}>
        {myData.email}
      </MailAdress>
    </MailWrapper>
  );
};

export default Mail;