import React, { useState } from "react";

const fruitList = [
  { id: 1, name: "Apple", description: "A sweet red fruit." },
  { id: 2, name: "Banana", description: "A long yellow fruit." },
  { id: 3, name: "Orange", description: "A citrus fruit with a tangy taste." },
];

function Chat() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div>
      <h1>Chatbot - Fruits Information</h1>
      <div className="fruit-cards">
        {fruitList.map((fruit) => (
          <div
            key={fruit.id}
            className="card"
            onClick={() => setSelectedFruit(fruit)}
          >
            <h2>{fruit.name}</h2>
          </div>
        ))}
      </div>

      {selectedFruit && (
        <div className="fruit-detail">
          <h2>{selectedFruit.name}</h2>
          <p>{selectedFruit.description}</p>
        </div>
      )}
    </div>
  );
}

export default Chat;
