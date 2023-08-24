const textArea = document.getElementById("TA");
const WordSpace = document.getElementById("WordCount");


const TotalChar = document.getElementById("TotalChar");

const vowels = document.getElementById("Vowels");
const consonants = document.getElementById("Consonants");
const spaces = document.getElementById("spaces");
const spch = document.getElementById("spch");

function updateMetrics(text) {
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;
    if (text.length === 0)
        wordCount = 0;

    WordSpace.textContent = wordCount;

    let lttr = 0;
    let vls = 0;
    let sps = 0;
    let specialChar = 0;

    for (let i = 0; i < text.length; ++i) {
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) {
            ++lttr;
            if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u' || text[i] == 'A' || text[i] == 'E' || text[i] == 'I' || text[i] == 'O' || text[i] == 'U') {
                ++vls;
            }
        } else if (text[i] == ' ') {
            ++sps;
        } else {
            ++specialChar;
        }
    }

    vowels.textContent = vls;
    consonants.textContent = lttr - vls;
    TotalChar.textContent = text.length;
    spaces.textContent = sps;
    spch.textContent = specialChar;
}

textArea.addEventListener("input", function () {
    let text = textArea.value;
    updateMetrics(text);
});

document.getElementById("remSp").addEventListener("click", function () {
    let text = textArea.value;
    let trimmedText = text.replace(/\s+/g, ' ').trim();
    textArea.value = trimmedText;
    updateMetrics(trimmedText);

    document.getElementById("remSp").style.backgroundColor = "rgb(0, 115, 255)";
    document.getElementById("remSp").style.color = "white";
    setTimeout(() => {
        document.getElementById("remSp").style.backgroundColor = "white";
        document.getElementById("remSp").style.color = "rgb(75, 75, 75)";
    }, 100);
});


const up = document.getElementById("Uppercase");
const low = document.getElementById("Lowercase");
const cap = document.getElementById("Capitalize");
const reset = document.getElementById("reset");


up.addEventListener("click", () => {
    var currentElement = textArea.style.textTransform;

    if (currentElement === "uppercase") {
        textArea.style.textTransform = "none";
        up.style.backgroundColor = "white";
        up.style.color = "black";
    } else {
        textArea.style.textTransform = "uppercase";
        up.style.backgroundColor = "rgb(0, 115, 255)";
        up.style.color = "white";
        low.style.backgroundColor = "white";
        low.style.color = "black";
        cap.style.backgroundColor = "white";
        cap.style.color = "black";
    }
})

low.addEventListener("click", () => {
    var currentElement2 = textArea.style.textTransform;

    if (currentElement2 === "lowercase") {
        textArea.style.textTransform = "none";
        low.style.backgroundColor = "white";
        low.style.color = "black";
    } else {
        textArea.style.textTransform = "lowercase";
        low.style.backgroundColor = "rgb(0, 115, 255)";
        low.style.color = "white";
        up.style.backgroundColor = "white";
        up.style.color = "black";
        cap.style.backgroundColor = "white";
        cap.style.color = "black";
    }
})

cap.addEventListener("click", () => {
    var currentElement3 = textArea.style.textTransform;

    if (currentElement3 === "capitalize") {
        textArea.style.textTransform = "none";
        cap.style.backgroundColor = "white";
        cap.style.color = "black";
    } else {
        textArea.style.textTransform = "capitalize";
        cap.style.backgroundColor = "rgb(0, 115, 255)";
        cap.style.color = "white";
        up.style.backgroundColor = "white";
        up.style.color = "black";
        low.style.backgroundColor = "white";
        low.style.color = "black";
    }
})

reset.addEventListener("click", () => {
    textArea.style.textTransform = "none";

    reset.style.backgroundColor = "rgb(0, 115, 255)";
    reset.style.color = "white";
    setTimeout(() => {
        reset.style.backgroundColor = "white";
        reset.style.color = "rgb(75, 75, 75)";
    }, 100);

    cap.style.backgroundColor = "white";
    cap.style.color = "black";
    up.style.backgroundColor = "white";
    up.style.color = "black";
    low.style.backgroundColor = "white";
    low.style.color = "black";
})



document.getElementById("cpy").addEventListener("click", function () {
    textArea.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    document.getElementById("cpy").style.backgroundColor = "rgb(0, 115, 255)";
    document.getElementById("cpy").style.color = "white";
    setTimeout(() => {
        document.getElementById("cpy").style.backgroundColor = "white";
        document.getElementById("cpy").style.color = "rgb(75, 75, 75)";
    }, 100);
    document.getElementById("copied").style.opacity = "1";
    setTimeout(() => {
        document.getElementById("copied").style.opacity = "0";
    }, 850);
});

