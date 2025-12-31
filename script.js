let musicPlaying = false;
const music = document.getElementById("bg-music");

function toggleMusic() {
    if (!musicPlaying) {
        music.play();
        musicPlaying = true;
    } else {
        music.pause();
        musicPlaying = false;
    }
}

function talk(animal) {
    const text = document.getElementById("animal-text");

    if (animal === "bear") {
        text.innerHTML = "🐻 You mess up, growl, and act tough — but you protect what you love. I see that.";
    }

    if (animal === "panda") {
        text.innerHTML = "🐼 You’re confusing, clumsy, and adorable. You don’t need to change to be loved.";
    }

    if (animal === "fox") {
        text.innerHTML = "🦊 You’re learning. You’re growing. And I’m proud of you — even when you fail.";
    }
}

function unlock() {
    const pass = document.getElementById("password").value;
    const text = document.getElementById("secret-text");

    if (pass.toLowerCase() === "riya") {
        text.innerHTML = "This is me choosing you — again. Happy Birthday, Abhi 🤍";
    } else {
        text.innerHTML = "Wrong password. Try again 😌";
    }
}
