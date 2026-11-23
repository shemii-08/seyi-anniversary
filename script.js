// ===================================
// CHANGE YOUR PIN HERE
// ===================================

const secretPassword = "2311";


// ===================================
// PIN KEYPAD
// ===================================

function addPinDigit(digit) {

    const pinInput = document.getElementById("secret-password");

    if (pinInput.value.length < 4) {
        pinInput.value += digit;
        updatePinDots();
    }

}


function deletePinDigit() {

    const pinInput = document.getElementById("secret-password");

    pinInput.value = pinInput.value.slice(0, -1);

    updatePinDots();

}


function clearPin() {

    document.getElementById("secret-password").value = "";

    updatePinDots();

}


function updatePinDots() {

    const pinInput = document.getElementById("secret-password");

    const dots = document.querySelectorAll(".pin-dots .dot");

    dots.forEach((dot, index) => {

        dot.classList.toggle(
            "filled",
            index < pinInput.value.length
        );

    });

}


// ===================================
// UNLOCK WEBSITE
// ===================================

function enterWebsite() {

    const pinInput = document.getElementById("secret-password");

    const message = document.getElementById("password-message");

    if (pinInput.value === secretPassword) {

        document.getElementById("welcome-screen").style.display = "none";

        document.getElementById("main-content").style.display = "block";

        message.textContent = "";

        startFloatingHearts();

        window.scrollTo(0, 0);

    } else {

        message.textContent = "Wrong PIN! Try again, my love ♡";

        pinInput.value = "";

        updatePinDots();

    }

}


// ===================================
// FLOATING HEARTS
// ===================================

let heartsStarted = false;

function startFloatingHearts() {

    if (heartsStarted) return;

    heartsStarted = true;

    setInterval(() => {

        const heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML = "♥";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        heart.style.animationDuration = (4 + Math.random() * 3) + "s";

        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);

    }, 600);

}


// ===================================
// POLAROID FLIP
// ===================================

function flipCard(card) {

    card.classList.toggle("flipped");

}


// ===================================
// REASONS WHY I LOVE YOU
// ===================================

const reasons = [
    "I love your eyes. ♡",
    "I love how you make me laugh.",
    "I love the way you care.",
    "I love our conversations.",
    "I love how comfortable I feel with you.",
    "I love making memories with you.",
    "I love your personality.",
    "I love having you in my life.",
    "I love that I can be myself around you.",
    "I love you simply because you are you. ♡"
];

let reasonIndex = 0;

function showReason() {

    document.getElementById("reason-display").textContent =
        reasons[reasonIndex];

    reasonIndex++;

    if (reasonIndex >= reasons.length) {
        reasonIndex = 0;
    }

}


// ===================================
// LOVE QUIZ
// ===================================

const questions = [
    {
        question: "Who eats more?",
        options: ["Me", "You", "Gabby"],
        answer: 2
    },
    {
        question: "What is my favourite thing about us?",
        options: ["Everything", "Our memories", "Our laughter"],
        answer: 0
    },
    {
        question: "What do I want more of?",
        options: ["More memories", "All of the above", "More money"],
        answer: 1
    },
    {
        question: "How much do I love you?",
        options: ["A little", "A lot", "More than words can explain"],
        answer: 2
    }
];

let currentQuestion = 0;

function loadQuestion() {

    const question = questions[currentQuestion];

    document.getElementById("quiz-question").textContent =
        question.question;

    const optionsContainer = document.getElementById("quiz-options");

    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;

        button.onclick = () => checkAnswer(index);

        optionsContainer.appendChild(button);

    });

    document.getElementById("quiz-feedback").textContent = "";

}


function checkAnswer(selectedAnswer) {

    const correctAnswer = questions[currentQuestion].answer;

    const feedback = document.getElementById("quiz-feedback");

    if (selectedAnswer === correctAnswer) {

        feedback.textContent = "Correct! You know us so well. ♡";

    } else {

        feedback.textContent = "Not quite! Try again, my love. 💗";

    }

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    loadQuestion();

}


// ===================================
// LOVE LETTER
// ===================================

function openLetter() {

    const letter = document.getElementById("love-letter");

    if (letter.style.display === "block") {

        letter.style.display = "none";

    } else {

        letter.style.display = "block";

    }

}


// ===================================
// FINAL SURPRISE
// ===================================

function finalSurprise() {

    const message = document.getElementById("final-message");

    message.style.display = "block";

    message.textContent =
        "If I had to do it all over again, I would still choose you. " +
        "Thank you for being my person. I love you endlessly. ♡";

}


// ===================================
// LOAD QUIZ WHEN PAGE OPENS
// ===================================

loadQuestion();

/* MUSIC PLAYER */
const ourSong = document.getElementById("our-song");
const musicButton = document.getElementById("music-button");

function toggleMusic() {
  if (ourSong.paused) {
    ourSong.play();

    musicButton.textContent = "♫ Pause our song";
  } else {
    ourSong.pause();

    musicButton.textContent = "♫ Play our song";
  }
}
