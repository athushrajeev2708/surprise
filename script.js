/* ================= Personalized Data ================= */
const memoryData = [
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/4.jpeg', msg: '...FIRST PIC 📷...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/8.jpeg', msg: '...☺️PRINCESS TREATMENT ☺️...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/5.jpeg', msg: '...📈NATIONAL ANTHEM 📈...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/3.jpeg', msg: '...🩷DK🩷...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/6.jpeg', msg: '...❤️‍🩹TECH❤️‍🩹...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/7.jpeg', msg: '...🐼CUTE alleeee🐼...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/9.jpeg', msg: '...🙈CALLSssss🙈...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/11.jpeg', msg: '...🫠FINALLYyyy🫠...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/2.jpeg', msg: '...💎OUTPUT💎...' },
  { img: 'https://raw.githubusercontent.com/athushrajeev2708/surprise/main/1.jpeg', msg: '...I promise to love you today, tomorrow, and forever💍❤️...' }
];

const letterContent = `
\nFrom,
\nYour own Kannettan❤️,
\nDate : 01/08/2026
\nTime : 5.50 PM
\nBgm : Ambalappuzhe unni kannanod nee...
\n\nTo,
\nMy wifeyyy,
\nMaalaghaa❤️
\nSub : Explanation about my love...
\nDear🧚🏻‍♀️,
\n\tEllam ariyamallo...How i found u...
How i fell for u...How i won in love...
Onnum ottak aarunnilla...Ellathinum koode undayirunnu nee (nb: no neg for nee...direct from heart aahn..)
\nU showed me what love is...How does it feel...Ellaaam...
\nU gave me 100 reasons to hate u 💯...But the truth is enik hate cheyyan pattunnilla 💯...
\nEnik vere aarodum ee oru ❤️ feel cheythit illa...But u conquered my heart effortlessly...
\n\tI think...May be it is written ✍🏻
"14 July 2026"...An unforgettable day...
Korach late aayi. But it's okeyyy...
Poya time okke onnich thirich pidikkam...
\nEnne orupaaad maatti💯
\n The time i spent with was my best timess🫠🫠🫠
\n"I NEED U AS MY BETTER HALF FOR MY ENTIRE LIFE"\n 
\nValich neettunnilla...coding aayond ichiri task aaahn...
\nBut effort matterssss aahnalloooo😌😌😌
\n\n\t""❤️I LOVE U❤️""\n
\n\n\t❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`;

/* Audio Control */
const music = document.getElementById('bg-music');
const playBtn = document.getElementById('play-pause-btn');
const volumeSlider = document.getElementById('volume-slider');
let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    music.play().catch(() => {});
    musicStarted = true;
  }
}

playBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playBtn.textContent = '🎵';
  } else {
    music.pause();
    playBtn.textContent = '🔇';
  }
});

volumeSlider.addEventListener('input', (e) => {
  music.volume = e.target.value;
});

/* ================= Dynamic Particle System (Falling Petals & Floating Hearts) ================= */
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class PetalAndHeart {
  constructor() {
    this.reset();
  }

  reset() {
    this.type = Math.random() > 0.3 ? 'petal' : 'heart'; // 70% Petals, 30% Floating Hearts
    this.x = Math.random() * canvas.width;
    
    if (this.type === 'petal') {
      // Petals fall down
      this.y = -20;
      this.speedY = Math.random() * 1.5 + 0.8;
      this.speedX = Math.random() * 1.2 - 0.6;
      this.swaySpeed = Math.random() * 0.03 + 0.01;
    } else {
      // Hearts float up
      this.y = canvas.height + 20;
      this.speedY = -(Math.random() * 1.2 + 0.5);
      this.speedX = Math.random() * 0.8 - 0.4;
      this.swaySpeed = 0;
    }

    this.size = Math.random() * 12 + 8;
    this.opacity = Math.random() * 0.7 + 0.3;
    this.rotation = Math.random() * 360;
    this.rotSpeed = Math.random() * 1.5 - 0.75;
    this.swayAngle = Math.random() * Math.PI * 2;
  }

  update() {
    if (this.type === 'petal') {
      this.y += this.speedY;
      this.swayAngle += this.swaySpeed;
      this.x += Math.sin(this.swayAngle) * 0.8 + this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y > canvas.height + 20) this.reset();
    } else {
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;

      if (this.y < -20) this.reset();
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = this.opacity;

    if (this.type === 'petal') {
      // Realistic Rose Petal Shape
      ctx.fillStyle = '#ff3366';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size/2, -this.size/2, -this.size, this.size/3, 0, this.size);
      ctx.bezierCurveTo(this.size, this.size/3, this.size/2, -this.size/2, 0, 0);
      ctx.fill();
    } else {
      // Floating Heart Shape
      ctx.fillStyle = '#ff85a1';
      ctx.beginPath();
      ctx.arc(-this.size/4, -this.size/4, this.size/4, 0, Math.PI, true);
      ctx.arc(this.size/4, -this.size/4, this.size/4, 0, Math.PI, true);
      ctx.lineTo(0, this.size/2);
      ctx.closePath();
      ctx.fill();
    }
    ctx.restore();
  }
}

for (let i = 0; i < 50; i++) particles.push(new PetalAndHeart());

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}
animateParticles();

/* Touch Sparkles */
window.addEventListener('pointerdown', (e) => createSparkle(e.clientX, e.clientY));

function createSparkle(x, y) {
  for (let i = 0; i < 6; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'fixed';
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    spark.style.width = '6px';
    spark.style.height = '6px';
    spark.style.background = '#fff';
    spark.style.borderRadius = '50%';
    spark.style.boxShadow = '0 0 10px #ff85a1';
    spark.style.pointerEvents = 'none';
    spark.style.zIndex = '999';
    document.body.appendChild(spark);

    const destX = x + (Math.random() - 0.5) * 60;
    const destY = y + (Math.random() - 0.5) * 60;

    spark.animate([
      { transform: 'scale(1)', opacity: 1 },
      { transform: `translate(${destX - x}px, ${destY - y}px) scale(0)`, opacity: 0 }
    ], { duration: 600, easing: 'ease-out' }).onfinish = () => spark.remove();
  }
}

/* Screen Transitions */
function switchScreen(fromId, toId) {
  document.getElementById(fromId).classList.add('hidden');
  document.getElementById(toId).classList.remove('hidden');
}

/* Step 1: Intro -> Love Meter */
document.getElementById('start-btn').addEventListener('click', () => {
  startMusic();
  switchScreen('intro-screen', 'love-meter-screen');
});

/* Step 2: Love Meter Handling */
let loveLevel = 0;
const loveMeterScreen = document.getElementById('love-meter-screen');
const loveBar = document.getElementById('love-bar');
const lovePercent = document.getElementById('love-percentage');
const heartBeat = document.getElementById('heart-beat');

loveMeterScreen.addEventListener('click', () => {
  if (loveLevel >= 100) return;
  loveLevel += 10;
  if (loveLevel > 100) loveLevel = 100;

  loveBar.style.width = loveLevel + '%';
  lovePercent.textContent = loveLevel + '%';

  heartBeat.style.transform = 'scale(1.4)';
  setTimeout(() => heartBeat.style.transform = 'scale(1)', 150);

  if (loveLevel === 100) {
    setTimeout(() => {
      switchScreen('love-meter-screen', 'balloon-screen');
      initBalloons();
    }, 800);
  }
});

/* Step 3: Balloon Garden Handling */
let unlockedCount = 0;
function initBalloons() {
  const screen = document.getElementById('balloon-screen');
  const colors = ['#ff4b72', '#ff85a1', '#be52f2', '#ff6b6b', '#4d96ff'];

  for (let i = 0; i < 10; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor = colors[i % colors.length];
    balloon.style.left = (8 + (i % 5) * 18) + '%';
    balloon.style.animationDelay = (Math.random() * 3) + 's';
    balloon.style.animationDuration = (6 + Math.random() * 3) + 's';

    balloon.addEventListener('click', () => popBalloon(balloon, i));
    screen.appendChild(balloon);
  }
}

function popBalloon(balloon) {
  balloon.remove();
  const currentMemoryIndex = unlockedCount;
  unlockedCount++;
  document.getElementById('balloon-counter').textContent = `Memories Unlocked: ${unlockedCount} / 10`;

  const modal = document.getElementById('balloon-modal');
  document.getElementById('modal-img').src = memoryData[currentMemoryIndex].img;
  document.getElementById('modal-msg').textContent = memoryData[currentMemoryIndex].msg;
  modal.classList.add('active');
}

document.getElementById('modal-close-btn').addEventListener('click', () => {
  document.getElementById('balloon-modal').classList.remove('active');

  if (unlockedCount === 10) {
    setTimeout(() => {
      switchScreen('balloon-screen', 'letter-screen');
      initEnvelope();
    }, 800);
  }
});

/* Step 4: Envelope & Typewriter Effect */
function initEnvelope() {
  const envelope = document.getElementById('envelope');
  envelope.addEventListener('click', () => {
    if (!envelope.classList.contains('open')) {
      envelope.classList.add('open');
      setTimeout(typeWriterEffect, 600);
    }
  });
}

function typeWriterEffect() {
  let i = 0;
  const target = document.getElementById('typewriter-text');
  const letterPaper = document.querySelector('.letter-paper');
  function type() {
    if (i < letterContent.length) {
      target.textContent += letterContent.charAt(i);
      i++;
     if (letterPaper) {
        letterPaper.scrollTop = letterPaper.scrollHeight;
     }
      setTimeout(type, 35);
    } else {
      document.getElementById('grand-ending-btn').style.opacity = '1';
    }
  }
  type();
}

document.getElementById('grand-ending-btn').addEventListener('click', () => {
  switchScreen('letter-screen', 'ending-screen');
  startGrandEnding();
});

/* Step 5: Grand Ending & Canvas Heart */
function startGrandEnding() {
  const fCanvas = document.getElementById('final-canvas');
  const fCtx = fCanvas.getContext('2d');
  fCanvas.width = window.innerWidth;
  fCanvas.height = window.innerHeight;

  let hearts = [];
  const total = 150;

  for (let i = 0; i < total; i++) {
    let t = Math.PI * 2 * (i / total);
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t));
    
    hearts.push({
      targetX: fCanvas.width / 2 + x * 7,
      targetY: fCanvas.height / 2 - 40 + y * 7,
      currentX: Math.random() * fCanvas.width,
      currentY: Math.random() * fCanvas.height,
      size: Math.random() * 3 + 2
    });
  }

  function drawHeartGathering() {
    fCtx.clearRect(0, 0, fCanvas.width, fCanvas.height);
    fCtx.fillStyle = '#ff4b72';

    let arrived = true;
    hearts.forEach(h => {
      h.currentX += (h.targetX - h.currentX) * 0.05;
      h.currentY += (h.targetY - h.currentY) * 0.05;

      fCtx.beginPath();
      fCtx.arc(h.currentX, h.currentY, h.size, 0, Math.PI * 2);
      fCtx.fill();

      if (Math.abs(h.currentX - h.targetX) > 1) arrived = false;
    });

    if (!arrived) {
      requestAnimationFrame(drawHeartGathering);
    } else {
      document.getElementById('final-photo').style.opacity = '1';
      document.getElementById('final-text').style.opacity = '1';
      scheduleSecretButton();
    }
  }

  drawHeartGathering();
}

/* Secret Addition Feature */
function scheduleSecretButton() {
  setTimeout(() => {
    const secretBtn = document.getElementById('secret-btn');
    secretBtn.classList.remove('hidden');

    secretBtn.addEventListener('click', () => {
      document.body.style.transition = 'background 1.5s';
      document.body.style.background = '#000000';

      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 400]);
      }

      secretBtn.remove();
      document.getElementById('final-text').innerHTML = "You & Me<br><span style='font-size:1.2rem; font-weight:normal;'>Together Forever</span>";

      let fadeAudio = setInterval(() => {
        if (music.volume > 0.05) {
          music.volume -= 0.05;
        } else {
          music.pause();
          clearInterval(fadeAudio);
        }
      }, 400);

    });
  }, 12000); // 12 Seconds delay
}
