import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import useOpenController from "./useOpenController";
function Accordion({ section, key }) {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <div className="accordion-container">
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen &&  <TextSection text={section.answer} />
     }
      <div className="underline"></div>
     
    </div>
  );
}

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className="column-container" onClick={toggle}>
      <div className="column-text">{question}</div>
      <button className="expendable-button">
        {isOpen ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
      </button>
    </div>
  );
};
export const TextSection = ({ text }) => {
  return (
    <div className="text-container">
      <div>{text}</div>
    </div>
  );
};

export default Accordion;
