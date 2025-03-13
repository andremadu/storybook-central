import React from "react";

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
      
      <style jsx>{`
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.05);
        }
        h3 {
          margin-bottom: 8px;
        }
        p {
          color: #555;
          font-size: 14px;
          margin-bottom: 12px;
        }
        button {
          background-color: #0070f3;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Card;
