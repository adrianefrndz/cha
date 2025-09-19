document.addEventListener('DOMContentLoaded', function () {
    const lightBtn = document.getElementById('light-candles-btn');
    const cakeSection = document.getElementById('cake-section');
    const cardSection = document.getElementById('card-section');
    const candles = document.querySelectorAll('.candle');
    const confettiCanvas = document.getElementById('confetti-canvas');
    const balloonContainer = document.querySelector('.balloon-container');
    let balloonsLaunched = false;

    // Animate candles and open card
    lightBtn.addEventListener('click', function () {
        candles.forEach((candle, i) => {
            setTimeout(() => {
                candle.classList.add('lit');
            }, i * 200);
        });
        setTimeout(() => {
            cakeSection.style.display = 'none';
            cardSection.style.display = 'flex';
            cardSection.style.flexDirection = 'column';
            cardSection.style.alignItems = 'center';
            confettiCanvas.style.display = 'block';
            launchConfetti();
            launchBalloons();
            showGreeting();
        }, candles.length * 220 + 400);
    });

    // Confetti animation (simple canvas)
    function launchConfetti() {
        const ctx = confettiCanvas.getContext('2d');
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        let confetti = [];
        for (let i = 0; i < 80; i++) {
            confetti.push({
                x: Math.random() * confettiCanvas.width,
                y: Math.random() * -confettiCanvas.height,
                r: Math.random() * 8 + 4,
                d: Math.random() * 2 + 1,
                color: `hsl(${Math.random()*360},80%,70%)`
            });
        }
        function draw() {
            ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            confetti.forEach(c => {
                ctx.beginPath();
                ctx.arc(c.x, c.y, c.r, 0, 2 * Math.PI);
                ctx.fillStyle = c.color;
                ctx.fill();
                c.y += c.d;
                if (c.y > confettiCanvas.height) c.y = -10;
            });
            requestAnimationFrame(draw);
        }
        draw();
    }

    // Balloon float animation
    // function launchBalloons() {
    //     if (balloonsLaunched) return;
    //     balloonsLaunched = true;
    //     for (let i = 0; i < 6; i++) {
    //         const balloon = document.createElement('div');
    //         balloon.className = 'balloon';
    //         balloon.style.left = `${10 + i*15}%`;
    //         balloon.style.background = `hsl(${Math.random()*360},80%,80%)`;
    //         balloonContainer.appendChild(balloon);
    //     }
    // }

    // 3D Gift box unboxing
    const gift3d = document.getElementById('gift3d');
    const giftSurprise = document.getElementById('giftSurprise');
    const giftInstruction = document.querySelector('.gift-3d-instruction');
    if (gift3d) {
        gift3d.addEventListener('click', function () {
            gift3d.classList.add('unboxed');
            if (giftInstruction) giftInstruction.style.display = 'none';
            setTimeout(() => {
                giftSurprise.style.display = 'block';
            }, 600);
        });
    }
});