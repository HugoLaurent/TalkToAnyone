import  { useEffect, useState } from "react";
import axios from "axios";
import Chat from "../components/chat/Chat";

function Home() {
    const [inputUser, setInputUser] = useState("");
    const [celibrityChoice, setCelebrityChoice] = useState("");
    const [history, setHistory] = useState([]);
  
    const handleInput = async (e) => {
      e.preventDefault();
  
      try {
        const newUserMessage = {
          role: "user",
          content: inputUser,
        };
        setHistory((prevHistory) => [...prevHistory, newUserMessage]);
  
        const res = await axios.post("http://localhost:3000/firstRequest", {
          input: inputUser,
          celibrityChoice: celibrityChoice,
        });
  
        if (res.status !== 200) {
          console.error("Error", res.status);
          return;
        }
  
        const newServerMessage = {
          role: "assistant",
          content: res.data.content,
        };
        setHistory((prevHistory) => [...prevHistory, newServerMessage]);
        setInputUser("");
      } catch (error) {
        console.error("Error", error);
      }
    };
  
    useEffect(() => {
      setHistory([]);
    }, [celibrityChoice]);
  
    return (
      <div className="main-container">
        <Chat history={history} celibrityChoice={celibrityChoice} />
        <section>
          <form onSubmit={handleInput}>
            <input
              type="text"
              placeholder="Choose your celebrity"
              value={celibrityChoice}
              onChange={(e) => setCelebrityChoice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Ask me anything"
              value={inputUser}
              onChange={(e) => setInputUser(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    );
  }


export default Home;