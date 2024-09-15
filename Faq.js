import React, { useState, useEffect } from "react";
import axios from "axios";

function Faq() {
  const [faqs, setFaqs] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentFaqId, setCurrentFaqId] = useState(null);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/faqs");
      setFaqs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddFaq = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/faqs", {
        question,
        answer,
      });
      setFaqs([...faqs, res.data]);
      setQuestion("");
      setAnswer("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditFaq = (faq) => {
    setIsEditing(true);
    setCurrentFaqId(faq.id);
    setQuestion(faq.question);
    setAnswer(faq.answer);
  };

  const handleUpdateFaq = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://127.0.0.1:5000/faqs/${currentFaqId}`, {
        question,
        answer,
      });
      setFaqs(
        faqs.map((faq) =>
          faq.id === currentFaqId ? { ...faq, question, answer } : faq
        )
      );
      setIsEditing(false);
      setQuestion("");
      setAnswer("");
      setCurrentFaqId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteFaq = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/faqs/${id}`);
      setFaqs(faqs.filter((faq) => faq.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>FAQs</h1>
      <form onSubmit={isEditing ? handleUpdateFaq : handleAddFaq}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Question"
          required
        />
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Answer"
          required
        />
        <button type="submit">{isEditing ? "Update FAQ" : "Add FAQ"}</button>
      </form>

      <ul>
        {faqs.map((faq) => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>: {faq.answer}
            <button onClick={() => handleEditFaq(faq)}>Edit</button>
            <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Faq;
