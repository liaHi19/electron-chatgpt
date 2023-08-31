interface IMessage {
  id: string;
  text: string;
  author: "human" | "ai";
}

interface Electron {
  chatGPTApi: {
    getCompletion: (value: string) => Promise<string>;
  };
}

declare let electron: Electron;
