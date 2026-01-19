const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('active'));
});



const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}

// Easter Eggs
// 1. Type "hack" sequence
const hackSequence = ['h', 'a', 'c', 'k'];
let hackIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === hackSequence[hackIndex]) {
        hackIndex++;
        if (hackIndex === hackSequence.length) {
            alert('💻 HACK Sequence Detected! 💻\n\nYou\'ve unlocked the hacker protocol!\n\nAchievement Unlocked: Codebreaker\n\nroot@ainz:~# ./exploit.sh\n[*] Initializing exploit framework...\n[*] Scanning for vulnerabilities...\n[*] Gaining root access...\n[+] SUCCESS: You are now root!\n\nWelcome to the matrix, hacker!');
            hackIndex = 0;
        }
    } else {
        hackIndex = 0;
    }
});

// 2. Triple-click on logo
const logo = document.querySelector('.logo');
let logoClickCount = 0;
let logoClickTimer;

logo.addEventListener('click', (e) => {
    logoClickCount++;

    // Clear existing timer
    clearTimeout(logoClickTimer);

    if (logoClickCount === 3) {
        // Prevent default only for triple-click
        e.preventDefault();
        alert('🎯 Logo Triple-Click Easter Egg! 🎯\n\nYou found the secret access point!\n\nroot@ainz:~# cat /etc/shadow\nroot:!:1::::::\nainz:$6$encrypted$password:1000:1000::/home/ainz:/bin/zsh\n\nWARNING: Unauthorized access detected!\nBut since you\'re elite, we\'ll let it slide...\n\nAchievement Unlocked: Logo Hacker');
        logoClickCount = 0;
    } else {
        // Set timer to reset counter after 1 second for single/double clicks
        logoClickTimer = setTimeout(() => {
            logoClickCount = 0;
        }, 1000);
    }
});

// --- MATRIX RAIN EFFECT ---
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '01234_56789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const rainDrops = [];

for( let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(5, 5, 5, 0.05)'; // Fade effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Green text
    ctx.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i*fontSize, rainDrops[i]*fontSize);

        if(rainDrops[i]*fontSize > canvas.height && Math.random() > 0.975){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 30);

// Handle Resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// --- TYPEWRITER EFFECT ---
const textToType = "Detect • Defend • Respond";
const typeWriterElement = document.getElementById('typewriter');
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        typeWriterElement.innerHTML += textToType.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing when page loads
window.onload = typeWriter;
