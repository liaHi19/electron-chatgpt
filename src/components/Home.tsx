import { FC, useState } from "react";
import MessageItem from "./MessageItem";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  const handleSubmit = async () => {
    setMessages((prev) => [
      ...prev,
      { id: new Date().toISOString(), text: prompt, author: "human" },
    ]);

    setPrompt("");

    const result = await electron.chatGPTApi.getCompletion(prompt);

    setMessages((prev) => [
      ...prev,
      { id: new Date().toISOString(), text: result, author: "ai" },
    ]);
  };
  return (
    <div className="container">
      <div className="inputContainer">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask a question"
          rows={3}
          required
        />
        <button className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="answers">
        {messages.length > 0 &&
          messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
      </div>
    </div>
  );
};

export default Home;
