const PROCESSO = "1000159497";

const EMAIL_CONTATOS = {
    lider: {
        nome: "LÍDER",
        email: "lider@gmail.com",
        whatsapp: "21999999999"
    },

    sub1: {
        nome: "SUBLÍDER 1",
        email: "sub1@gmail.com",
        whatsapp: "21988888888"
    },

    sub2: {
        nome: "SUBLÍDER 2",
        email: "sub2@gmail.com",
        whatsapp: "21977777777"
    }
};

const TEMPO_TOTAL = 30 * 60;

const questions = [

    {
        id: "nick",
        title: "Qual é o seu Nick?",
        type: "text",
        placeholder: "Digite seu Nick..."
    },

    {
        id: "nivel",
        title: "Qual é o seu nível?",
        type: "text",
        placeholder: "Digite seu nível..."
    },

    {
        id: "whatsapp",
        title: "Qual é o seu WhatsApp?",
        type: "text",
        placeholder: "(21) 99999-9999"
    },

    {
        id: "disponibilidade",
        title: "Qual é a sua disponibilidade?",
        type: "radio",
        options: [
            "Manhã",
            "Tarde",
            "Noite"
        ]
    },

    {
        id: "discord",
        title: "Você pode sempre entrar no Discord?",
        type: "radio",
        options: [
            "Sim",
            "Não",
            "Às vezes"
        ]
    },

    {
        id: "recrutador",
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
        title: "O que é DM? Explique.",
        type: "textarea",
        placeholder: "Explique com suas palavras..."
    },

    {
        id: "antirpg",
        title: "O que é Ant Rpg? Explique.",
        type: "textarea",
        placeholder: "Explique com suas palavras..."
    },

    {
        id: "db",
        title: "O que é DB? Explique.",
        type: "textarea",
        placeholder: "Explique com suas palavras..."
    },

    {
        id: "regras",
        title: "Cite 5 regras do servidor.",
        type: "textarea",
        placeholder: "Digite 5 regras..."
    },

    {
        id: "territorios",
        title: "Quais territórios a BOPE pode dominar?",
        type: "text",
        placeholder: "Digite sua resposta..."
    },

    {
        id: "abordagem",
        title: "Como faz uma abordagem em um suspeito?",
        type: "textarea",
        placeholder: "Descreva o procedimento..."
    },

    {
        id: "procurado",
        title: "Você está patrulhando em LS e encontra um procurado, como você daria a voz de prisão? E se o suspeito não aceitasse a voz de prisão, quais seriam os próximos procedimentos?",
        type: "textarea",
        placeholder: "Descreva detalhadamente..."
    },

    {
        id: "operacao",
        title: "Cite procedimentos básicos de operação territorial.",
        type: "textarea",
        placeholder: "Digite os procedimentos..."
    },

    {
        id: "sequestro",
        title: "Cite procedimentos básicos para uma realização de uma intervenção de sequestro.",
        type: "textarea",
        placeholder: "Descreva os procedimentos..."
    },

    {
        id: "funcao",
        title: "Qual é a principal função da BOPE?",
        type: "textarea",
        placeholder: "Explique..."
    },

    {
        id: "blacklist",
        title: "Você está ciente que se sair da organização em menos de 3 dias levará blacklist?",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    },

    {
        id: "discordCronograma",
        title: "Na organização, é obrigatório o uso do Discord em casos que esteja sendo realizado cronograma. Em casos de desobediência você pode e vai tomar punições internas de acordo com bom senso da administração.",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    },

    {
        id: "veiculos",
        title: "Está ciente que deverá sempre manter a organização dos veículos na HQ, caso espalhe veículo será punido com rebaixamento de cargo, demissão ou até Blacklist em casos extremos?",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    },

    {
        id: "experienciaPolicial",
        title: "Já participou alguma vez de uma organização policial?",
        type: "radio",
        options: [
            "Sim — Tenho experiência",
            "Não"
        ]
    },

    {
        id: "suspeitoMatou",
        title: "Você estava abordando um suspeito, e durante a abordagem o suspeito lhe matar, o que você faria?",
        type: "radio",
        options: [
            "Vou atrás do suspeito e mato ele.",
            "Vou até o suspeito e faço outra abordagem novamente.",
            "Peço reforços no /g."
        ]
    },

    {
        id: "procedimentos",
        title: "Quais tipos de procedimentos policiais você sabe fazer? Seja sincero.",
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
        title: "Tem um suspeito na área neutra (safe), você pode abordar ele?",
        helper: "O suspeito está sem estrela.",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    },

    {
        id: "safePrender",
        title: "Tem um procurado na área neutra (safe), você pode prender ele?",
        helper: "O procurado está com estrela.",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    },

    {
        id: "invadirHQ",
        title: "Tem um procurado dentro da HQ, você pode invadir HQ e dar voz de prisão?",
        helper: "Você está sozinho.",
        type: "radio",
        options: [
            "Sim",
            "Não"
        ]
    }
];


let answers = {};
let currentQuestion = 0;
let remainingTime = TEMPO_TOTAL;
let timerInterval = null;
let testStarted = false;
let testFinished = false;

let selectedPerson = null;


const $ = selector =>
    document.querySelector(selector);


const questionContainer =
    $("#questionContainer");

const startScreen =
    $("#startScreen");

const quizPanel =
    $("#quizPanel");

const resultScreen =
    $("#resultScreen");

const startButton =
    $("#startBtn");

const nextButton =
    $("#nextBtn");

const prevButton =
    $("#prevBtn");

const progressBar =
    $("#progressBar");

const progressText =
    $("#progressText");

const questionNumber =
    $("#questionNumber");

const timerElement =
    $("#timer");

const reviewButton =
    $("#reviewButton");

const downloadPDFButton =
    $("#downloadPDF");

const downloadTXTButton =
    $("#downloadTXT");

const toast =
    $("#toast");

const sendModal =
    $("#sendModal");

const openSendModal =
    $("#openSendModal");

const closeSendModal =
    $("#closeSendModal");

const methodPanel =
    $("#methodPanel");

const backToPeople =
    $("#backToPeople");

const selectedPersonName =
    $("#selectedPersonName");

const selectedEmail =
    $("#selectedEmail");

const selectedWhatsApp =
    $("#selectedWhatsApp");

const modalEmailButton =
    $("#modalEmailButton");

const modalWhatsAppButton =
    $("#modalWhatsAppButton");


function showToast(
    message,
    type = "normal"
) {

    if (!toast) {
        return;
    }

    toast.textContent = message;

    toast.className =
        `toast ${type} show`;

    clearTimeout(
        showToast.timeout
    );

    showToast.timeout =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 3500);
}


function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function normalizeAnswer(value) {

    if (Array.isArray(value)) {

        return value.length
            ? value.join(", ")
            : "Não informado";
    }

    if (
        value === undefined ||
        value === null ||
        String(value).trim() === ""
    ) {
        return "Não informado";
    }

    return String(value).trim();
}


function getCandidateName() {

    if (
        answers.nick &&
        String(answers.nick).trim()
    ) {
        return String(
            answers.nick
        ).trim();
    }

    return "Candidato";
}


function getCurrentDate() {

    return new Date().toLocaleString(
        "pt-BR",
        {
            dateStyle: "short",
            timeStyle: "medium"
        }
    );
}


function saveAnswers() {

    try {

        localStorage.setItem(
            "bope_concurso_answers",
            JSON.stringify(answers)
        );

    } catch (error) {

        console.warn(error);
    }
}


function loadAnswers() {

    try {

        const saved =
            localStorage.getItem(
                "bope_concurso_answers"
            );

        if (saved) {

            answers =
                JSON.parse(saved);
        }

    } catch {

        answers = {};
    }
}


function formatTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        seconds % 60;

    return (
        String(minutes).padStart(2, "0") +
        ":" +
        String(secs).padStart(2, "0")
    );
}


function updateTimer() {

    if (!timerElement) {
        return;
    }

    timerElement.textContent =
        formatTime(
            remainingTime
        );

    timerElement.classList.remove(
        "warning",
        "danger"
    );

    if (
        remainingTime <= 300
    ) {

        timerElement.classList.add(
            "danger"
        );

    } else if (
        remainingTime <= 600
    ) {

        timerElement.classList.add(
            "warning"
        );
    }
}


function startTimer() {

    stopTimer();

    remainingTime =
        TEMPO_TOTAL;

    updateTimer();

    timerInterval =
        setInterval(() => {

            remainingTime--;

            updateTimer();

            if (
                remainingTime <= 0
            ) {

                stopTimer();

                finishTest(true);
            }

        }, 1000);
}


function stopTimer() {

    if (timerInterval) {

        clearInterval(
            timerInterval
        );

        timerInterval = null;
    }
}


function renderQuestion() {

    const question =
        questions[currentQuestion];

    if (!questionContainer) {
        return;
    }

    const number =
        currentQuestion + 1;

    const percentage =
        Math.round(
            (number / questions.length) * 100
        );

    questionNumber.textContent =
        `QUESTÃO ${String(number).padStart(2, "0")}`;

    progressText.textContent =
        `${number} / ${questions.length}`;

    progressBar.style.width =
        `${percentage}%`;


    let html = `
        <div class="question-header">

            <div class="question-index">
                QUESTÃO ${String(number).padStart(2, "0")}
            </div>

            <h2 class="question-title">
                ${escapeHTML(
                    question.title
                )}
            </h2>
    `;


    if (question.helper) {

        html += `
            <div class="question-helper">

                <i class="bi bi-info-circle-fill"></i>

                ${escapeHTML(
                    question.helper
                )}

            </div>
        `;
    }


    html += `
        </div>
    `;


    const savedValue =
        answers[question.id];


    if (
        question.type === "text"
    ) {

        html += `
            <div class="input-wrapper">

                <i class="bi bi-pencil-square"></i>

                <input
                    type="text"
                    id="answerInput"
                    class="answer-input"
                    placeholder="${escapeHTML(
                        question.placeholder
                    )}"
                    value="${escapeHTML(
                        savedValue || ""
                    )}"
                    autocomplete="off"
                >

            </div>
        `;
    }


    if (
        question.type === "textarea"
    ) {

        html += `
            <div class="textarea-wrapper">

                <textarea
                    id="answerInput"
                    class="answer-textarea"
                    placeholder="${escapeHTML(
                        question.placeholder
                    )}"
                >${escapeHTML(
                    savedValue || ""
                )}</textarea>

                <div class="textarea-counter">

                    <span id="answerCounter">
                        0
                    </span>

                    caracteres

                </div>

            </div>
        `;
    }


    if (
        question.type === "radio"
    ) {

        html += `
            <div class="options-list">
        `;

        question.options.forEach(
            (option, index) => {

                const checked =
                    savedValue === option
                        ? "checked"
                        : "";

                html += `
                    <label class="option-card">

                        <input
                            type="radio"
                            name="${question.id}"
                            value="${escapeHTML(
                                option
                            )}"
                            ${checked}
                        >

                        <span class="option-indicator">
                            ${String.fromCharCode(
                                65 + index
                            )}
                        </span>

                        <span class="option-text">
                            ${escapeHTML(
                                option
                            )}
                        </span>

                        <span class="option-check">
                            <i class="bi bi-check-lg"></i>
                        </span>

                    </label>
                `;
            }
        );

        html += `
            </div>
        `;
    }


    if (
        question.type === "checkbox"
    ) {

        const selected =
            Array.isArray(savedValue)
                ? savedValue
                : [];


        html += `
            <div class="options-list">
        `;


        question.options.forEach(
            option => {

                const checked =
                    selected.includes(
                        option
                    )
                        ? "checked"
                        : "";

                html += `
                    <label class="option-card">

                        <input
                            type="checkbox"
                            name="${question.id}"
                            value="${escapeHTML(
                                option
                            )}"
                            ${checked}
                        >

                        <span class="option-indicator">
                            <i class="bi bi-check-lg"></i>
                        </span>

                        <span class="option-text">
                            ${escapeHTML(
                                option
                            )}
                        </span>

                        <span class="option-check">
                            <i class="bi bi-check-lg"></i>
                        </span>

                    </label>
                `;
            }
        );


        html += `
            </div>
        `;
    }


    questionContainer.innerHTML =
        html;

    attachAnswerEvents();

    updateNavigation();

    updateTextareaCounter();
}


function attachAnswerEvents() {

    const question =
        questions[currentQuestion];

    const input =
        $("#answerInput");


    if (input) {

        input.addEventListener(
            "input",
            () => {

                answers[question.id] =
                    input.value;

                saveAnswers();

                updateTextareaCounter();
            }
        );
    }


    questionContainer
        .querySelectorAll(
            'input[type="radio"]'
        )
        .forEach(
            radio => {

                radio.addEventListener(
                    "change",
                    () => {

                        answers[
                            question.id
                        ] =
                            radio.value;

                        saveAnswers();
                    }
                );
            }
        );


    questionContainer
        .querySelectorAll(
            'input[type="checkbox"]'
        )
        .forEach(
            checkbox => {

                checkbox.addEventListener(
                    "change",
                    () => {

                        const selected =
                            Array.from(
                                questionContainer
                                    .querySelectorAll(
                                        'input[type="checkbox"]:checked'
                                    )
                            )
                            .map(
                                item =>
                                    item.value
                            );

                        answers[
                            question.id
                        ] =
                            selected;

                        saveAnswers();
                    }
                );
            }
        );
}


function updateTextareaCounter() {

    const textarea =
        $("#answerInput");

    const counter =
        $("#answerCounter");

    if (
        !textarea ||
        !counter
    ) {
        return;
    }

    counter.textContent =
        textarea.value.length;
}


function validateCurrentQuestion() {

    const question =
        questions[currentQuestion];

    const answer =
        answers[question.id];


    if (
        question.type === "checkbox"
    ) {

        if (
            !Array.isArray(answer) ||
            answer.length === 0
        ) {

            showToast(
                "Selecione pelo menos uma opção.",
                "error"
            );

            return false;
        }

        return true;
    }


    if (
        answer === undefined ||
        answer === null ||
        String(answer).trim() === ""
    ) {

        showToast(
            "Preencha ou selecione uma resposta.",
            "error"
        );

        return false;
    }


    return true;
}


function updateNavigation() {

    prevButton.disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        nextButton.innerHTML = `
            FINALIZAR CONCURSO
            <i class="bi bi-shield-check"></i>
        `;

    } else {

        nextButton.innerHTML = `
            PRÓXIMA
            <i class="bi bi-arrow-right"></i>
        `;
    }
}


function nextQuestion() {

    if (
        !validateCurrentQuestion()
    ) {
        return;
    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        finishTest();

        return;
    }


    currentQuestion++;

    renderQuestion();

    scrollToQuestion();
}


function previousQuestion() {

    if (
        currentQuestion <= 0
    ) {
        return;
    }

    currentQuestion--;

    renderQuestion();

    scrollToQuestion();
}


function scrollToQuestion() {

    const card =
        document.querySelector(
            ".quiz-card"
        );

    if (!card) {
        return;
    }

    card.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function startTest() {

    testStarted = true;

    testFinished = false;

    currentQuestion = 0;

    startScreen.classList.add(
        "hidden"
    );

    quizPanel.classList.remove(
        "hidden"
    );

    resultScreen.classList.add(
        "hidden"
    );

    startTimer();

    renderQuestion();

    setTimeout(
        scrollToQuestion,
        100
    );
}


function finishTest(
    timeExpired = false
) {

    if (testFinished) {
        return;
    }


    if (
        !timeExpired &&
        !validateCurrentQuestion()
    ) {
        return;
    }


    stopTimer();

    testFinished = true;

    saveAnswers();

    renderResult();

    quizPanel.classList.add(
        "hidden"
    );

    resultScreen.classList.remove(
        "hidden"
    );

    resultScreen.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


function renderResult() {

    $("#resultCandidateName")
        .textContent =
        getCandidateName();

    $("#resultDate")
        .textContent =
        getCurrentDate();

    $("#resultTotal")
        .textContent =
        `${questions.length} questões respondidas`;

    $("#resultStatus")
        .textContent =
        "AGUARDANDO ANÁLISE";


    const summary =
        $("#resultSummary");

    let html = "";


    questions.forEach(
        (question, index) => {

            html += `
                <div class="result-answer">

                    <div class="result-answer-number">
                        ${String(
                            index + 1
                        ).padStart(2, "0")}
                    </div>

                    <div class="result-answer-content">

                        <div class="result-question">
                            ${escapeHTML(
                                question.title
                            )}
                        </div>

                        <div class="result-response">
                            ${escapeHTML(
                                normalizeAnswer(
                                    answers[
                                        question.id
                                    ]
                                )
                            )}
                        </div>

                    </div>

                </div>
            `;
        }
    );


    summary.innerHTML =
        html;
}


function generateEmailBody() {

    let body = "";

    body +=
        "☠️ CONCURSO B.O.P.E — BRASIL PLAY SHOX | SV2\n";

    body +=
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";

    body +=
        `📋 Processo: ${PROCESSO}\n`;

    body +=
        `👤 Candidato: ${getCandidateName()}\n`;

    body +=
        `📅 Data: ${getCurrentDate()}\n`;

    body +=
        "🛡️ Status: AGUARDANDO ANÁLISE\n\n";

    body +=
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";

    body +=
        "📑 RESPOSTAS DO CANDIDATO\n";

    body +=
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";


    questions.forEach(
        (question, index) => {

            body +=
                `🔹 QUESTÃO ${index + 1}\n`;

            body +=
                `${question.title}\n`;

            body +=
                `➡️ ${normalizeAnswer(
                    answers[
                        question.id
                    ]
                )}\n\n`;
        }
    );


    body +=
        "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n";

    body +=
        "☠️ FIM DO CONCURSO\n";

    body +=
        "🇧🇷 BRASIL PLAY SHOX — SV2\n";


    return body;
}


function generateWhatsAppMessage() {

    let message = "";

    message +=
        "☠️ *CONCURSO B.O.P.E — SV2*\n";

    message +=
        "🇧🇷 *BRASIL PLAY SHOX*\n";

    message +=
        "━━━━━━━━━━━━━━━━━━━━\n\n";

    message +=
        `📋 *Processo:* ${PROCESSO}\n`;

    message +=
        `👤 *Candidato:* ${getCandidateName()}\n`;

    message +=
        `📅 *Data:* ${getCurrentDate()}\n`;

    message +=
        "🛡️ *Status:* AGUARDANDO ANÁLISE\n\n";

    message +=
        "━━━━━━━━━━━━━━━━━━━━\n";

    message +=
        "📑 *RESPOSTAS*\n";

    message +=
        "━━━━━━━━━━━━━━━━━━━━\n\n";


    questions.forEach(
        (question, index) => {

            message +=
                `*${index + 1}. ${question.title}*\n`;

            message +=
                `➡️ ${normalizeAnswer(
                    answers[
                        question.id
                    ]
                )}\n\n`;
        }
    );


    message +=
        "━━━━━━━━━━━━━━━━━━━━\n";

    message +=
        "☠️ *FIM DO CONCURSO*";


    return message;
}


function openSendWindow() {

    if (!sendModal) {
        return;
    }

    selectedPerson = null;

    methodPanel.classList.add(
        "hidden"
    );

    sendModal.classList.remove(
        "hidden"
    );
}


function closeSendWindow() {

    sendModal.classList.add(
        "hidden"
    );

    selectedPerson = null;

    methodPanel.classList.add(
        "hidden"
    );
}


function selectPerson(personId) {

    const person =
        EMAIL_CONTATOS[
            personId
        ];

    if (!person) {
        return;
    }

    selectedPerson =
        personId;


    $("#selectedPersonName")
        .textContent =
        person.nome;


    $("#selectedEmail")
        .textContent =
        person.email;


    $("#selectedWhatsApp")
        .textContent =
        person.whatsapp;


    methodPanel.classList.remove(
        "hidden"
    );


    document
        .querySelector(
            ".responsible-list"
        )
        .classList.add(
            "hidden"
        );
}


function backToResponsibleList() {

    selectedPerson = null;

    methodPanel.classList.add(
        "hidden"
    );

    document
        .querySelector(
            ".responsible-list"
        )
        .classList.remove(
            "hidden"
        );
}


function sendByEmail() {

    if (!selectedPerson) {
        return;
    }

    const person =
        EMAIL_CONTATOS[
            selectedPerson
        ];


    const subject =
        `[CONCURSO BOPE SV2] ${getCandidateName()}`;


    const body =
        generateEmailBody();


    const mailto =
        `mailto:${person.email}` +
        `?subject=${encodeURIComponent(
            subject
        )}` +
        `&body=${encodeURIComponent(
            body
        )}`;


    window.location.href =
        mailto;


    showToast(
        `Abrindo e-mail para ${person.nome}.`,
        "success"
    );


    setTimeout(
        closeSendWindow,
        500
    );
}


function sendByWhatsApp() {

    if (!selectedPerson) {
        return;
    }

    const person =
        EMAIL_CONTATOS[
            selectedPerson
        ];


    const message =
        generateWhatsAppMessage();


    const url =
        `https://wa.me/${person.whatsapp}` +
        `?text=${encodeURIComponent(
            message
        )}`;


    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );


    showToast(
        `Abrindo WhatsApp para ${person.nome}.`,
        "success"
    );


    setTimeout(
        closeSendWindow,
        500
    );
}


function sanitizeFileName(name) {

    return String(name)
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(
            /[^a-zA-Z0-9_-]/g,
            "_"
        )
        .replace(
            /_+/g,
            "_"
        )
        .substring(
            0,
            50
        );
}


function generateTXT() {

    let report = "";

    report +=
        "============================================================\n";

    report +=
        "              CONCURSO B.O.P.E — SV2\n";

    report +=
        "                BRASIL PLAY SHOX\n";

    report +=
        "============================================================\n\n";

    report +=
        `PROCESSO: ${PROCESSO}\n`;

    report +=
        `CANDIDATO: ${getCandidateName()}\n`;

    report +=
        `DATA: ${getCurrentDate()}\n`;

    report +=
        "STATUS: AGUARDANDO ANALISE\n\n";


    questions.forEach(
        (question, index) => {

            report +=
                `QUESTAO ${index + 1}\n`;

            report +=
                `${question.title}\n`;

            report +=
                "------------------------------------------------------------\n";

            report +=
                `${normalizeAnswer(
                    answers[
                        question.id
                    ]
                )}\n\n`;
        }
    );


    return report;
}


function downloadTXT() {

    const blob =
        new Blob(
            [
                generateTXT()
            ],
            {
                type:
                    "text/plain;charset=utf-8"
            }
        );


    const url =
        URL.createObjectURL(
            blob
        );


    const link =
        document.createElement(
            "a"
        );


    link.href = url;


    link.download =
        `Concurso_BOPE_${sanitizeFileName(
            getCandidateName()
        )}.txt`;


    document.body.appendChild(
        link
    );


    link.click();

    link.remove();


    URL.revokeObjectURL(
        url
    );


    showToast(
        "TXT baixado com sucesso.",
        "success"
    );
}


function downloadPDF() {

    if (
        !window.jspdf ||
        !window.jspdf.jsPDF
    ) {

        showToast(
            "O PDF ainda está carregando. Tente novamente.",
            "error"
        );

        return;
    }


    const {
        jsPDF
    } = window.jspdf;


    const doc =
        new jsPDF();


    const pageWidth =
        doc.internal.pageSize.getWidth();


    const pageHeight =
        doc.internal.pageSize.getHeight();


    const margin = 15;

    let y = 20;


    function checkPage(
        height
    ) {

        if (
            y + height >
            pageHeight - 15
        ) {

            doc.addPage();

            y = 20;
        }
    }


    function addText(
        text,
        size = 10,
        bold = false
    ) {

        doc.setFont(
            "helvetica",
            bold
                ? "bold"
                : "normal"
        );

        doc.setFontSize(
            size
        );


        const lines =
            doc.splitTextToSize(
                String(text),
                pageWidth -
                margin * 2
            );


        const lineHeight =
            size * .45;


        checkPage(
            lines.length *
            lineHeight +
            5
        );


        doc.text(
            lines,
            margin,
            y
        );


        y +=
            lines.length *
            lineHeight +
            5;
    }


    doc.setFillColor(
        10,
        15,
        11
    );


    doc.rect(
        0,
        0,
        pageWidth,
        30,
        "F"
    );


    doc.setTextColor(
        255,
        255,
        255
    );


    doc.setFont(
        "helvetica",
        "bold"
    );


    doc.setFontSize(
        20
    );


    doc.text(
        "B.O.P.E — SV2",
        margin,
        14
    );


    doc.setFontSize(
        8
    );


    doc.text(
        `PROCESSO ${PROCESSO}`,
        margin,
        22
    );


    y = 40;


    doc.setTextColor(
        20,
        20,
        20
    );


    addText(
        "RELATORIO DE CONCURSO",
        16,
        true
    );


    addText(
        `Candidato: ${getCandidateName()}`,
        10,
        true
    );


    addText(
        `Data: ${getCurrentDate()}`,
        9
    );


    addText(
        "Status: AGUARDANDO ANALISE DA LIDERANCA",
        9
    );


    y += 5;


    questions.forEach(
        (question, index) => {

            checkPage(25);


            addText(
                `QUESTAO ${index + 1}`,
                10,
                true
            );


            addText(
                question.title,
                9,
                true
            );


            addText(
                `Resposta: ${normalizeAnswer(
                    answers[
                        question.id
                    ]
                )}`,
                9
            );


            y += 3;
        }
    );


    const totalPages =
        doc.internal.getNumberOfPages();


    for (
        let i = 1;
        i <= totalPages;
        i++
    ) {

        doc.setPage(i);

        doc.setFont(
            "helvetica",
            "normal"
        );

        doc.setFontSize(
            8
        );

        doc.setTextColor(
            120,
            120,
            120
        );

        doc.text(
            `B.O.P.E SV2 | ${PROCESSO}`,
            margin,
            pageHeight - 8
        );

        doc.text(
            `${i}/${totalPages}`,
            pageWidth - margin,
            pageHeight - 8,
            {
                align: "right"
            }
        );
    }


    doc.save(
        `Concurso_BOPE_${sanitizeFileName(
            getCandidateName()
        )}.pdf`
    );


    showToast(
        "PDF baixado com sucesso.",
        "success"
    );
}


function reviewAnswers() {

    resultScreen.classList.add(
        "hidden"
    );

    quizPanel.classList.remove(
        "hidden"
    );

    testFinished = false;

    currentQuestion = 0;

    renderQuestion();

    scrollToQuestion();
}


function initMenu() {

    const menuButton =
        $("#menuButton");

    const mobileMenu =
        $("#mobileMenu");


    if (
        !menuButton ||
        !mobileMenu
    ) {
        return;
    }


    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );
        }
    );


    mobileMenu
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        mobileMenu.classList.remove(
                            "open"
                        );
                    }
                );
            }
        );
}


function init() {

    loadAnswers();

    updateTimer();


    if (startButton) {

        startButton.addEventListener(
            "click",
            startTest
        );
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextQuestion
        );
    }


    if (prevButton) {

        prevButton.addEventListener(
            "click",
            previousQuestion
        );
    }


    if (reviewButton) {

        reviewButton.addEventListener(
            "click",
            reviewAnswers
        );
    }


    if (downloadTXTButton) {

        downloadTXTButton.addEventListener(
            "click",
            downloadTXT
        );
    }


    if (downloadPDFButton) {

        downloadPDFButton.addEventListener(
            "click",
            downloadPDF
        );
    }


    /*
     * ABRIR CENTRAL DE ENVIO
     */

    if (openSendModal) {

        openSendModal.addEventListener(
            "click",
            openSendWindow
        );
    }


    /*
     * FECHAR CENTRAL
     */

    if (closeSendModal) {

        closeSendModal.addEventListener(
            "click",
            closeSendWindow
        );
    }


    /*
     * CLICAR FORA DO MODAL
     */

    if (sendModal) {

        sendModal.addEventListener(
            "click",
            event => {

                if (
                    event.target ===
                    sendModal
                ) {

                    closeSendWindow();
                }
            }
        );
    }


    /*
     * ESCOLHER RESPONSÁVEL
     */

    document
        .querySelectorAll(
            ".responsible-card"
        )
        .forEach(
            card => {

                card.addEventListener(
                    "click",
                    () => {

                        selectPerson(
                            card.dataset.person
                        );
                    }
                );
            }
        );


    /*
     * VOLTAR PARA RESPONSÁVEIS
     */

    if (backToPeople) {

        backToPeople.addEventListener(
            "click",
            backToResponsibleList
        );
    }


    /*
     * ENVIAR POR E-MAIL
     */

    if (modalEmailButton) {

        modalEmailButton.addEventListener(
            "click",
            sendByEmail
        );
    }


    /*
     * ENVIAR PELO WHATSAPP
     */

    if (modalWhatsAppButton) {

        modalWhatsAppButton.addEventListener(
            "click",
            sendByWhatsApp
        );
    }


    /*
     * MENU MOBILE
     */

    initMenu();


    /*
     * LINKS INTERNOS
     */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    event => {

                        const id =
                            link.getAttribute(
                                "href"
                            );

                        const target =
                            document.querySelector(
                                id
                            );

                        if (!target) {
                            return;
                        }

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                );
            }
        );


    /*
     * HEADER AO ROLAR
     */

    const header =
        document.querySelector(
            ".topbar"
        );


    if (header) {

        window.addEventListener(
            "scroll",
            () => {

                header.classList.toggle(
                    "scrolled",
                    window.scrollY > 30
                );

            },
            {
                passive: true
            }
        );
    }


    /*
     * TECLAS
     */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                sendModal &&
                !sendModal.classList.contains(
                    "hidden"
                )
            ) {

                closeSendWindow();

                return;
            }


            if (
                !testStarted ||
                testFinished
            ) {
                return;
            }


            if (
                event.key === "ArrowRight"
            ) {

                nextQuestion();
            }


            if (
                event.key === "ArrowLeft"
            ) {

                previousQuestion();
            }


            if (
                event.key === "Enter"
            ) {

                if (
                    event.target.tagName !==
                    "TEXTAREA" &&
                    event.target.tagName !==
                    "INPUT"
                ) {

                    event.preventDefault();

                    nextQuestion();
                }
            }

        }
    );


    console.log(
        "B.O.P.E SV2 carregado."
    );
}


if (
    document.readyState ===
    "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init,
        {
            once: true
        }
    );

} else {

    init();
}