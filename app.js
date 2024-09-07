const faq = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language. It is the standard language for creating web pages."
    },
    {
        question: "What is CSS used for?",
        answer: "CSS (Cascading Style Sheets) is used to style and layout web pages, including colors, fonts, and spacing."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language that allows you to create dynamic content on websites, such as interactive forms, animations, and more."
    }
];
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const accordion = document.getElementsByClassName("accordion-class")

const faqContainer = document.getElementById("accordion")

function loadContent() {
    const faqContainer = document.getElementById("accordion");

    for (let i = 0; i < faq.length; i++) {
        const questionElem = document.createElement("div");
        questionElem.classList.add("question");
        questionElem.innerHTML = faq[i].question;
        faqContainer.appendChild(questionElem);

        const answerElem = document.createElement("div");
        answerElem.classList.add("answer");
        answerElem.innerHTML = faq[i].answer;
        faqContainer.appendChild(answerElem);
    }

    for (let i = 0; i < faqContainer.children.length; i += 2) {
        const questionElem = faqContainer.children[i];
        const answerElem = faqContainer.children[i + 1];

        questionElem.addEventListener('click', function() {
            const isActive = answerElem.classList.toggle('active');
            questionElem.classList.toggle('active', isActive);

        });
    }
}

document.addEventListener("DOMContentLoaded", loadContent)
