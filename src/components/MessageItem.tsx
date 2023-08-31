import { FC, useEffect, useState } from "react";

interface MessageItemProps {
  message: IMessage;
}

const MessageItem: FC<MessageItemProps> = ({ message }) => {
  const [text, setText] = useState(message.author === "ai" ? "" : message.text);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setText(message.text.slice(0, text.length + 1));
    }, 10);

    return () => {
      clearTimeout(textTimer);
    };
  }, [text, message.text]);
  return (
    <div className="answer">
      <div className={`author author-${message.author}`}>{message.author}</div>
      <div className="message">{text}</div>
    </div>
  );
};

export default MessageItem;
