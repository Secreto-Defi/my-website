import React from "react";

interface AskProps {
  question: string;
  response: string;
  number: number;
}

const Ask: React.FC<AskProps> = ({ question, response, number }) => {
  return (
    <div className="collapse collapse-open rounded-none border-t border-t-zinc-800 hover:border-t-primary cursor-pointer">
      <input type="checkbox" aria-label={question} />
      <div className="collapse-title text-xl font-bold peer-checked:border-t-primary">
      <span className="font-bold text-primary">{number}</span>. {question}
      </div>
      <div className="collapse-content">
        <p className="font-light text-justify text-sm small:text-base">{response}</p>
      </div>
    </div>
  );
};

export default Ask;
