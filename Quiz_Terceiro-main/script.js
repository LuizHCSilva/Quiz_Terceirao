const questions = [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Brasília", "Rio de Janeiro", "Salvador"],
            answer: "Brasília"
        },
        {
            question: "Qual é o maior planeta do sistema solar?",
            options: ["Terra", "Marte", "Júpiter", "Saturno"],
            answer: "Júpiter"
        },
        {
            question: "Quem escreveu 'Dom Casmurro'?",
            options: ["Machado de Assis", "José de Alencar", "Jorge Amado", "Guimarães Rosa"],
            answer: "Machado de Assis"
        },
        {
            question: "Qual é o elemento químico representado pelo símbolo 'O'?",
            options: ["Ouro", "Oxigênio", "Osmio", "Ósmio"],
            answer: "Oxigênio"
        },
        {
            question: "Qual é o país mais populoso do mundo?",
            options: ["Índia", "Estados Unidos", "China", "Indonésia"],
            answer: "China"
        },
        {
            question: "Quem pintou a Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "Qual é a fórmula química da água?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            answer: "H2O"
        },
        {
            question: "Qual é o maior oceano do mundo?",
            options: ["Atlântico", "Índico", "Ártico", "Pacífico"],
            answer: "Pacífico"
        },
        {
            question: "Quem foi o primeiro homem a pisar na Lua?",
            options: ["Yuri Gagarin", "Buzz Aldrin", "Neil Armstrong", "Michael Collins"],
            answer: "Neil Armstrong"
        },
        {
            question: "Qual é a moeda oficial do Japão?",
            options: ["Yuan", "Won", "Yen", "Dólar"],
            answer: "Yen"
        },
        {
            question: "Qual é o maior mamífero terrestre?",
            options: ["Elefante", "Rinoceronte", "Hipopótamo", "Girafa"],
            answer: "Elefante"
        },
        {
            question: "Quem escreveu 'O Pequeno Príncipe'?",
            options: ["Antoine de Saint-Exupéry", "J.K. Rowling", "George Orwell", "Mark Twain"],
            answer: "Antoine de Saint-Exupéry"
        },
        {
            question: "Qual é o país conhecido como 'Terra do Sol Nascente'?",
            options: ["China", "Coreia do Sul", "Japão", "Tailândia"],
            answer: "Japão"
        },
        {
            question: "Qual é o maior deserto do mundo?",
            options: ["Saara", "Gobi", "Kalahari", "Antártico"],
            answer: "Antártico"
        },
        {
            question: "Quem desenvolveu a teoria da relatividade?",
            options: ["Isaac Newton", "Galileu Galilei", "Albert Einstein", "Nikola Tesla"],
            answer: "Albert Einstein"
        },
        {
            question: "Qual é a língua oficial do Brasil?",
            options: ["Espanhol", "Português", "Inglês", "Francês"],
            answer: "Português"
        },
        {
            question: "Qual é o menor país do mundo?",
            options: ["Mônaco", "Nauru", "Vaticano", "San Marino"],
            answer: "Vaticano"
        },
        {
            question: "Quem foi o primeiro presidente dos Estados Unidos?",
            options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
            answer: "George Washington"
        },
        {
            question: "Qual é a montanha mais alta do mundo?",
            options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
            answer: "Everest"
        },
        {
            question: "Qual é o rio mais longo do mundo?",
            options: ["Amazonas", "Nilo", "Yangtzé", "Mississippi"],
            answer: "Nilo"
        },
        {
            question: "Quem é o autor de '1984'?",
            options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "J.D. Salinger"],
            answer: "George Orwell"
        },
        {
            question: "Qual é o maior país do mundo em área?",
            options: ["Canadá", "China", "Estados Unidos", "Rússia"],
            answer: "Rússia"
        },
        {
            question: "Qual é a fórmula química do sal de cozinha?",
            options: ["NaCl", "KCl", "CaCO3", "NaHCO3"],
            answer: "NaCl"
        },
        {
            question: "Quem pintou 'A Última Ceia'?",
            options: ["Michelangelo", "Raphael", "Leonardo da Vinci", "Donatello"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "Qual é o maior continente do mundo?",
            options: ["África", "América do Norte", "Ásia", "Europa"],
            answer: "Ásia"
        },
        {
            question: "Quem escreveu 'Hamlet'?",
            options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
            answer: "William Shakespeare"
        },
        {
            question: "Qual é o maior órgão do corpo humano?",
            options: ["Coração", "Fígado", "Pele", "Pulmão"],
            answer: "Pele"
        },
        {
            question: "Qual é o nome do processo pelo qual as plantas produzem energia?",
            options: ["Respiração", "Fotossíntese", "Fermentação", "Digestão"],
            answer: "Fotossíntese"
        },
        {
            question: "Quem foi o líder do movimento de independência da Índia?",
            options: ["Jawaharlal Nehru", "Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh"],
            answer: "Mahatma Gandhi"
        },
        {
            question: "Qual é o maior lago de água doce do mundo?",
            options: ["Lago Superior", "Lago Vitória", "Lago Baikal", "Lago Tanganica"],
            answer: "Lago Baikal"
        }
    ];    

const correctsound = document.getElementById('correct-sound')
const incorrectsound = document.getElementById('incorrect-sound')

let currentQuestionIndex = 0;
let score = 0;

function showModal() {
    const modal = document.getElementById('modal');
    const questionElement = document.getElementById('modal-question');
    const optionsElement = document.getElementById('modal-options');
    const nextButton = document.getElementById('next-question');
    const feedbackElement = document.getElementById('feedback');

    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach(option => {
        const label = document.createElement('label');
        label.classList.add('option');

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'option';
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        optionsElement.appendChild(label);
    });

    feedbackElement.textContent = ''; // Limpa o feedback anterior
    feedbackElement.classList.remove('correct', 'incorrect');
    modal.style.display = 'block';

    nextButton.onclick = () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            if (selectedOption.value === question.answer) {
                feedbackElement.textContent = 'Resposta correta!';
                feedbackElement.classList.add('correct');
                score++;
                correctsound.play();
            } else {
                feedbackElement.textContent = 'Resposta incorreta. A resposta correta é: ' + question.answer;
                feedbackElement.classList.add('incorrect');
                incorrectsound.play();
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                setTimeout(showModal, 2000); // Exibe a próxima pergunta após 2 segundos
            } else {
                document.getElementById('result').textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
                document.getElementById('result').classList.add(score === questions.length ? 'correct' : 'incorrect');
                modal.style.display = 'none';
                document.getElementById('start').style.display = 'block';
            }
        }
    };
}

document.getElementById('start').addEventListener('click', () => {
    document.getElementById('start').style.display = 'none';
    showModal();
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
};
