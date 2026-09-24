const questions = [

    {
        id: "nick",
        category: "IDENTIFICAÇÃO",
        title: "Qual é o seu Nick?",
        type: "text",
        placeholder: "Digite seu nick no servidor..."
    },

    {
        id: "nivel",
        category: "IDENTIFICAÇÃO",
        title: "Qual é o seu nível?",
        type: "text",
        placeholder: "Ex: 10"
    },

    {
        id: "whatsapp",
        category: "CONTATO",
        title: "Qual é o seu WhatsApp?",
        type: "text",
        placeholder: "(21) 99999-9999"
    },

    {
        id: "disponibilidade",
        category: "DISPONIBILIDADE",
        title: "Qual é a sua disponibilidade?",
        type: "radio",
        options: [
            "🌅 Manhã",
            "☀️ Tarde",
            "🌙 Noite",
            "🔄 Flexível"
        ]
    },

    {
        id: "discord",
        category: "COMUNICAÇÃO",
        title: "Você pode sempre entrar no Discord?",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não",
            "🟡 Às vezes"
        ]
    },

    {
        id: "recrutador",
        category: "RECRUTAMENTO",
        title: "Quem está fazendo o seu recrutamento?",
        type: "radio",
        options: [
            "Lucas12@ — Líder",
            "MENOR_REAL00 — Sublíder",
            "Angela_Lopez — Sublíder"
        ]
    },

    {
        id: "dm",
        category: "CONHECIMENTO",
        title: "O que é DM? Explique.",
        type: "textarea",
        placeholder: "Digite sua explicação..."
    },

    {
        id: "antirpg",
        category: "CONHECIMENTO",
        title: "O que é Anti-RPG? Explique.",
        type: "textarea",
        placeholder: "Digite sua explicação..."
    },

    {
        id: "db",
        category: "CONHECIMENTO",
        title: "O que é DB? Explique.",
        type: "textarea",
        placeholder: "Digite sua explicação..."
    },

    {
        id: "regras",
        category: "CONHECIMENTO",
        title: "Cite 5 regras do servidor.",
        type: "textarea",
        placeholder: "Digite cinco regras que você conhece..."
    },

    {
        id: "territorios",
        category: "OPERAÇÕES",
        title: "Quais territórios a BOPE pode dominar?",
        description: "Responda conforme as regras vigentes do servidor.",
        type: "textarea",
        placeholder: "Digite sua resposta..."
    },

    {
        id: "abordagem",
        category: "PROCEDIMENTOS",
        title: "Como faz uma abordagem em um suspeito?",
        type: "textarea",
        placeholder: "Explique passo a passo..."
    },

    {
        id: "procurado",
        category: "PROCEDIMENTOS",
        title: "Você está patrulhando em LS e encontra um procurado. Como daria a voz de prisão? E se o suspeito não aceitasse?",
        type: "textarea",
        placeholder: "Explique os procedimentos que você realizaria..."
    },

    {
        id: "operacao",
        category: "OPERAÇÃO TERRITORIAL",
        title: "Cite procedimentos básicos de uma operação territorial.",
        description: "Considere os procedimentos definidos para atuação governamental.",
        type: "textarea",
        placeholder: "Explique os procedimentos..."
    },

    {
        id: "sequestro",
        category: "INTERVENÇÃO",
        title: "Cite procedimentos básicos para realizar uma intervenção de sequestro.",
        description: "Campo é necessário.",
        type: "textarea",
        placeholder: "Explique como você procederia..."
    },

    {
        id: "funcao",
        category: "ORGANIZAÇÃO",
        title: "Qual é a principal função da BOPE?",
        type: "textarea",
        placeholder: "Digite sua resposta..."
    },

    {
        id: "blacklist",
        category: "CIÊNCIA DAS REGRAS",
        title: "Você está ciente que, se sair da organização em menos de 3 dias, poderá levar blacklist?",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    },

    {
        id: "discordCronograma",
        category: "DISCIPLINA",
        title: "Está ciente de que o uso do Discord pode ser obrigatório durante cronogramas e que a desobediência pode gerar punições internas?",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    },

    {
        id: "veiculos",
        category: "DISCIPLINA",
        title: "Está ciente de que deverá manter os veículos organizados na HQ?",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    },

    {
        id: "experienciaPolicial",
        category: "EXPERIÊNCIA",
        title: "Você já participou de alguma organização policial?",
        type: "radio",
        options: [
            "🎖️ Sim, tenho experiência",
            "❌ Não"
        ]
    },

    {
        id: "suspeitoMatou",
        category: "SITUAÇÃO RP",
        title: "Você estava abordando um suspeito e, durante a abordagem, o suspeito lhe matou. O que você faria?",
        type: "radio",
        options: [
            "❌ Vou atrás do suspeito e mato ele.",
            "🔄 Vou até o suspeito e faço outra abordagem novamente.",
            "📻 Peço reforços no /g."
        ]
    },

    {
        id: "procedimentos",
        category: "PROCEDIMENTOS POLICIAIS",
        title: "Quais tipos de procedimentos policiais você sabe fazer?",
        description: "Seja sincero. Você pode selecionar mais de uma opção.",
        type: "checkbox",
        options: [
            "Procedimento de Abordagem",
            "Procedimento de Prisões",
            "Blitz",
            "Invasões de HQ's",
            "Operação territorial",
            "Neutralização de Emboscada",
            "Nenhuma das opções"
        ]
    },

    {
        id: "safeAbordagem",
        category: "ÁREA NEUTRA",
        title: "Tem um suspeito na área neutra (SAFE). Você pode abordar ele?",
        description: "Considere a situação apresentada na pergunta.",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    },

    {
        id: "safePrender",
        category: "ÁREA NEUTRA",
        title: "Tem um procurado na área neutra (SAFE). Você pode prender ele?",
        description: "Considere a situação apresentada na pergunta.",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    },

    {
        id: "invadirHQ",
        category: "INVASÃO DE HQ",
        title: "Tem um procurado dentro da HQ. Você pode invadir a HQ e dar voz de prisão estando sozinho?",
        type: "radio",
        options: [
            "✅ Sim",
            "❌ Não"
        ]
    }

];


let currentQuestionIndex = 0;

let answers = {};

let timeRemaining = 30 * 60;

let timerInterval = null;

let testStarted = false;


const pageLoader = document.getElementById("pageLoader");

const navbar = document.getElementById("navbar");

const mainNav = document.getElementById("mainNav");

const menuButton = document.getElementById("menuButton");

const startTest = document.getElementById("startTest");

const testSection = document.getElementById("testSection");

const selectionSection = document.getElementById("concurso");

const questionContainer = document.getElementById("questionContainer");

const previousButton = document.getElementById("previousButton");

const nextButton = document.getElementById("nextButton");

const currentQuestion = document.getElementById("currentQuestion");

const totalQuestions = document.getElementById("totalQuestions");

const progressPercent = document.getElementById("progressPercent");

const progressFill = document.getElementById("progressFill");

const timer = document.getElementById("timer");

const resultSection = document.getElementById("resultSection");

const resultNick = document.getElementById("resultNick");

const reviewButton = document.getElementById("reviewButton");

const sendButton = document.getElementById("sendButton");

const toast = document.getElementById("toast");

const toastMessage = document.getElementById("toastMessage");


document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        pageLoader.classList.add("loaded");
    }, 900);

    totalQuestions.textContent = questions.length;

    setupNavigation();

    setupTest();

});


function setupNavigation() {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    menuButton.addEventListener("click", () => {

        mainNav.classList.toggle("open");

        const icon = menuButton.querySelector("i");

        if (mainNav.classList.contains("open")) {
            icon.className = "bi bi-x-lg";
        } else {
            icon.className = "bi bi-list";
        }

    });


    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuButton.querySelector("i").className = "bi bi-list";

        });

    });

}


function setupTest() {

    startTest.addEventListener("click", startRecruitment);

    previousButton.addEventListener("click", previousQuestion);

    nextButton.addEventListener("click", nextQuestion);

    reviewButton.addEventListener("click", reviewTest);

    sendButton.addEventListener("click", sendEmail);

}


function startRecruitment() {

    testStarted = true;

    currentQuestionIndex = 0;

    timeRemaining = 30 * 60;

    selectionSection.classList.add("hidden");

    resultSection.classList.add("hidden");

    testSection.classList.remove("hidden");

    window.scrollTo({
        top: testSection.offsetTop - 20,
        behavior: "smooth"
    });

    renderQuestion();

    startTimer();

}


function renderQuestion() {

    const question = questions[currentQuestionIndex];

    currentQuestion.textContent = currentQuestionIndex + 1;

    const percent = Math.round(
        ((currentQuestionIndex + 1) / questions.length) * 100
    );

    progressPercent.textContent = `${percent}%`;

    progressFill.style.width = `${percent}%`;

    let answerHTML = "";

    if (question.type === "text") {

        answerHTML = `
            <textarea
                class="text-answer short-answer"
                id="answerField"
                placeholder="${question.placeholder || ""}"
                rows="3"
            >${escapeHTML(answers[question.id] || "")}</textarea>
        `;

    }


    if (question.type === "textarea") {

        answerHTML = `
            <textarea
                class="text-answer"
                id="answerField"
                placeholder="${question.placeholder || ""}"
            >${escapeHTML(answers[question.id] || "")}</textarea>
        `;

    }


    if (question.type === "radio") {

        answerHTML = `
            <div class="answer-grid">
                ${question.options.map((option, index) => {

                    const checked =
                        answers[question.id] === option
                            ? "checked"
                            : "";

                    return `
                        <div class="option">
                            <input
                                type="radio"
                                id="${question.id}_${index}"
                                name="${question.id}"
                                value="${escapeAttribute(option)}"
                                ${checked}
                            >

                            <label for="${question.id}_${index}">
                                ${escapeHTML(option)}
                            </label>
                        </div>
                    `;

                }).join("")}
            </div>
        `;

    }


    if (question.type === "checkbox") {

        const selected = answers[question.id] || [];

        answerHTML = `
            <div class="answer-grid">
                ${question.options.map((option, index) => {

                    const checked =
                        selected.includes(option)
                            ? "checked"
                            : "";

                    return `
                        <div class="option">
                            <input
                                type="checkbox"
                                id="${question.id}_${index}"
                                name="${question.id}"
                                value="${escapeAttribute(option)}"
                                ${checked}
                            >

                            <label for="${question.id}_${index}">
                                ${escapeHTML(option)}
                            </label>
                        </div>
                    `;

                }).join("")}
            </div>
        `;

    }


    questionContainer.innerHTML = `

        <div class="question-card">

            <div class="question-category">
                <i class="bi bi-shield-fill"></i>
                ${escapeHTML(question.category)}
            </div>

            <h2 class="question-title">
                ${escapeHTML(question.title)}
            </h2>

            ${
                question.description
                    ? `<p class="question-description">
                        ${escapeHTML(question.description)}
                       </p>`
                    : ""
            }

            ${answerHTML}

        </div>

    `;


    previousButton.disabled = currentQuestionIndex === 0;

    previousButton.style.opacity =
        currentQuestionIndex === 0
            ? ".4"
            : "1";


    if (currentQuestionIndex === questions.length - 1) {

        nextButton.innerHTML = `
            FINALIZAR
            <i class="bi bi-check-lg"></i>
        `;

    } else {

        nextButton.innerHTML = `
            PRÓXIMA
            <i class="bi bi-arrow-right"></i>
        `;

    }


    attachAnswerListeners();

}


function attachAnswerListeners() {

    const question = questions[currentQuestionIndex];

    if (question.type === "text" || question.type === "textarea") {

        const field = document.getElementById("answerField");

        field.addEventListener("input", () => {

            answers[question.id] = field.value;

        });

    }


    if (question.type === "radio") {

        document.querySelectorAll(
            `input[name="${question.id}"]`
        ).forEach(input => {

            input.addEventListener("change", () => {

                answers[question.id] = input.value;

            });

        });

    }


    if (question.type === "checkbox") {

        document.querySelectorAll(
            `input[name="${question.id}"]`
        ).forEach(input => {

            input.addEventListener("change", () => {

                const selected = Array.from(
                    document.querySelectorAll(
                        `input[name="${question.id}"]:checked`
                    )
                ).map(item => item.value);

                answers[question.id] = selected;

            });

        });

    }

}


function saveCurrentAnswer() {

    const question = questions[currentQuestionIndex];

    if (question.type === "text" || question.type === "textarea") {

        const field = document.getElementById("answerField");

        if (field) {
            answers[question.id] = field.value;
        }

    }


    if (question.type === "radio") {

        const checked = document.querySelector(
            `input[name="${question.id}"]:checked`
        );

        if (checked) {
            answers[question.id] = checked.value;
        }

    }


    if (question.type === "checkbox") {

        const checked = Array.from(
            document.querySelectorAll(
                `input[name="${question.id}"]:checked`
            )
        );

        answers[question.id] =
            checked.map(input => input.value);

    }

}


function validateCurrentQuestion() {

    const question = questions[currentQuestionIndex];

    saveCurrentAnswer();

    const answer = answers[question.id];

    if (question.type === "checkbox") {

        if (!answer || answer.length === 0) {

            showToast("Selecione pelo menos uma opção.");

            return false;

        }

        return true;

    }


    if (!answer || String(answer).trim() === "") {

        showToast("Preencha a resposta antes de continuar.");

        return false;

    }

    return true;

}


function nextQuestion() {

    if (!validateCurrentQuestion()) {
        return;
    }

    if (currentQuestionIndex === questions.length - 1) {

        finishTest();

        return;

    }

    currentQuestionIndex++;

    renderQuestion();

    scrollToTestTop();

}


function previousQuestion() {

    saveCurrentAnswer();

    if (currentQuestionIndex > 0) {

        currentQuestionIndex--;

        renderQuestion();

        scrollToTestTop();

    }

}


function scrollToTestTop() {

    window.scrollTo({
        top: testSection.offsetTop - 20,
        behavior: "smooth"
    });

}


function finishTest() {

    saveCurrentAnswer();

    stopTimer();

    testSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    resultNick.textContent =
        answers.nick || "Candidato";

    window.scrollTo({
        top: resultSection.offsetTop,
        behavior: "smooth"
    });

}


function reviewTest() {

    resultSection.classList.add("hidden");

    testSection.classList.remove("hidden");

    currentQuestionIndex = 0;

    renderQuestion();

    startTimer();

    scrollToTestTop();

}


function startTimer() {

    stopTimer();

    updateTimer();

    timerInterval = setInterval(() => {

        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {

            timeRemaining = 0;

            stopTimer();

            autoFinish();

        }

    }, 1000);

}


function stopTimer() {

    if (timerInterval) {

        clearInterval(timerInterval);

        timerInterval = null;

    }

}


function updateTimer() {

    const minutes =
        Math.floor(timeRemaining / 60)
            .toString()
            .padStart(2, "0");

    const seconds =
        (timeRemaining % 60)
            .toString()
            .padStart(2, "0");

    timer.querySelector("strong").textContent =
        `${minutes}:${seconds}`;


    timer.classList.remove(
        "warning",
        "danger"
    );


    if (timeRemaining <= 300) {

        timer.classList.add("danger");

    } else if (timeRemaining <= 600) {

        timer.classList.add("warning");

    }

}


function autoFinish() {

    saveCurrentAnswer();

    testSection.classList.add("hidden");

    resultSection.classList.remove("hidden");

    resultNick.textContent =
        answers.nick || "Candidato";

    showToast(
        "O tempo acabou. O concurso foi finalizado."
    );

}


function sendEmail() {

    const nick =
        answers.nick || "Novo candidato";

    const subject =
        `[CONCURSO BOPE SV2] ${nick}`;

    let body = "";

    body += "══════════════════════════════════════\n";
    body += "       CONCURSO B.O.P.E • SV2\n";
    body += "       BRASIL PLAY SHOX\n";
    body += "══════════════════════════════════════\n\n";

    body += `CANDIDATO: ${nick}\n`;
    body += `DATA: ${new Date().toLocaleString("pt-BR")}\n\n`;

    body += "──────────────────────────────────────\n";
    body += "              RESPOSTAS\n";
    body += "──────────────────────────────────────\n\n";


    questions.forEach((question, index) => {

        let answer = answers[question.id];

        if (Array.isArray(answer)) {
            answer = answer.join(", ");
        }

        if (!answer) {
            answer = "Não informado";
        }

        body += `${index + 1}. ${question.title}\n`;
        body += `Resposta: ${answer}\n\n`;

    });


    body += "══════════════════════════════════════\n";
    body += "      FIM DO CONCURSO • BOPE SV2\n";
    body += "══════════════════════════════════════\n";


    const mailto =
        `mailto:felipemiguel.dev@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;


    window.location.href = mailto;

}


function showToast(message) {

    toastMessage.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* FECHAR MENU AO CLICAR FORA */

document.addEventListener("click", event => {

    if (
        mainNav.classList.contains("open") &&
        !mainNav.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        mainNav.classList.remove("open");

        menuButton.querySelector("i").className =
            "bi bi-list";

    }

});


/* PREVENIR SAÍDA ACIDENTAL DURANTE O CONCURSO */

window.addEventListener("beforeunload", event => {

    if (testStarted && !testSection.classList.contains("hidden")) {

        event.preventDefault();

        event.returnValue = "";

    }

});