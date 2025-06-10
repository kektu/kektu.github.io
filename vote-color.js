function updateVoteColors() {
    document.querySelectorAll(".card__vote").forEach(voteElement => {
        const vote = parseFloat(voteElement.textContent.trim());
        
        if (vote >= 0 && vote <= 3) {
            voteElement.style.color = "red";
        } else if (vote >= 3 && vote <= 5.9) {
            voteElement.style.color = "orange";
        } else if (vote >= 6 && vote <= 7.9) {
            voteElement.style.color = "cornflowerblue";
        } else if (vote >= 8 && vote <= 10) {
            voteElement.style.color = "lawngreen";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(updateVoteColors, 500);
});

// Следим за изменениями в контейнере с карточками
const observer = new MutationObserver(updateVoteColors);
observer.observe(document.body, { childList: true, subtree: true });
