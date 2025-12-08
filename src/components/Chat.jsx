import "../blocks/chat.css";
import chatIcon from "../assets/images/simplifiedLogo.png";
function Chat() {
  return (
    <section className="chat">
      <img className="chat__icon" src={chatIcon}></img>
    </section>
  );
}

export default Chat;
