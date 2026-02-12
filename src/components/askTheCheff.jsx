import { useState } from "react";
import { menuData } from "../components/menuData";
import "./askTheCheff.css";

export default function AskChef() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const synonymMap = {
    beef: ["beef", "meat", "steak"],
    chicken: ["chicken", "chick", "poultry"],
    cheesy: ["cheesy", "cheese", "melty", "gooey"],
    big: ["big", "huge", "massive", "large", "giant"],
    crispy: ["crispy", "crunchy", "fried"],
    smoky: ["smoky", "bbq", "grilled"],
    truffle: ["truffle", "mushroom"],
    loaded: ["loaded", "stacked", "crazy", "wild"],
    bacon: ["bacon"],
  };

  function handleAsk() {
    const text = input.toLowerCase();

    let best = null;
    let bestScore = 0;

    menuData.forEach((burger) => {
      let score = 0;

      burger.tags.forEach((tag) => {
        const synonyms = synonymMap[tag] || [];

        synonyms.forEach((word) => {
          if (text.includes(word)) {
            score++;
          }
        });
      });

      if (score > bestScore) {
        bestScore = score;
        best = burger;
      }
    });

    // Fallback if nothing matched
    if (!best) {
      const random = menuData[Math.floor(Math.random() * menuData.length)];
      setResult(random);
    } else {
      setResult(best);
    }
  }

  return (
    <div className="ask-chef">
      <h2 className="heading-divider">ASK THE CHEF</h2>

      <p className="ask-chef-sub">
        Write what you feel like eating and I’ll find your perfect match.
      </p>

      <div className="ask-chef-box">
        <input
          placeholder="e.g. cheesy chicken, big and crispy..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAsk}>Ask</button>
      </div>

      {result && (
        <div className="chef-result">
          <h3>{result.name}</h3>
          <p>{result.description}</p>
          <p className="chef-line">Sounds like your kind of chaos.</p>
        </div>
      )}
    </div>
  );
}
