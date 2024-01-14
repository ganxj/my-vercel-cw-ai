const getFaqList = () => {
  const faqs: Faq[] = [
    {
      question: "1. What is Crew AI?",
      answer:
        "Crew AI is a collaborative working system designed to enable various artificial intelligence agents to work together as a team, efficiently accomplishing complex tasks. Each agent has a specific role, resembling a team composed of researchers, writers, and planners.",
    },
    {
      question: "2. What are the main features of Crew AI?",
      answer:
        "The main features of Crew AI include role-based agents, providing each robot with a clearly defined role, and teamwork capabilities that enable agents to communicate, share task information, and assist each other.",
    },
    {
      question: "3. How does Crew AI achieve team collaboration?",
      answer:
        "Crew AI organizes multiple intelligent agents into a team, emphasizing collaboration to ensure seamless performance during task execution. The agents possess excellent communication and collaboration capabilities.",
    },
    {
      question: "4. In which scenarios is Crew AI applicable?",
      answer:
        "Crew AI is suitable for various scenarios, especially those requiring collaborative work on complex tasks. It enhances overall team capabilities, simplifies decision-making processes, boosts creativity, and addresses complex challenges.",
    },
    {
      question:
        "5. How does Crew AI differ from other artificial intelligence tools?",
      answer:
        "The key distinction of Crew AI from other artificial intelligence tools lies in its emphasis on team collaboration, achieving seamless coordination among multiple intelligent agents through modular design and simplicity principles. Unlike traditional automation, Crew AI aims to transcend, achieving a higher level of decision simplification, creativity enhancement, and addressing complex challenges.",
    },
  ];

  return faqs;
};

export interface Faq {
  question: string;
  answer: string;
}

export default getFaqList;
