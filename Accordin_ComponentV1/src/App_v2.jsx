import "./style.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setCurrOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          currOpen={currOpen}
          onOpen={setCurrOpen}
          num={index + 1}
          title={item.title}
          key={item.title}
        >
          {item.text}
        </AccordionItem>
      ))}

      <AccordionItem
        currOpen={currOpen}
        onOpen={setCurrOpen}
        num={22}
        title="Test 1"
        key="test 1"
      >
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, sapiente nostrum? Repellendus ipsam reprehenderit id reiciendis illo beatae impedit hic! Incidunt architecto, quia illo autem harum alias cupiditate delectus eos.</p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ currOpen, onOpen, num, title, children }) {
  const isOpen = num === currOpen;

  function handleOnClick() {
    // setIsOpen(!isOpen);
    // if (!isOpen){
    //  onOpen(num)
    // }else{
    //   onOpen(null)
    // }
    onOpen(isOpen ? null : num)

  }
  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleOnClick}>
      <p className="number">{num < 9 ? `0${num}` : `${num}`}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
