import { FC } from "react";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  return (
    <div className="answer">
      <div className={`author author-${message.author}`}>{message.author}</div>
      <div className="message">{message.text}</div>
    </div>
  );
};

export default MessageItem;
