const results = {
  tfidf: {
    src: "images/nlp-tfidf-correlation.png",
    alt: "TF-IDF and logistic regression scatterplot of positive comment ratio versus like rate for 50 videos; Pearson r is 0.155.",
    caption: "TF-IDF + logistic regression result (Pearson r ≈ 0.16). Figure from our final report.",
    summary: "For 50 MrBeast videos, the TF-IDF + logistic regression positive comment ratio had a weak positive correlation with like rate (Pearson r ≈ 0.16).",
  },
  roberta: {
    src: "images/nlp-roberta-correlation.png",
    alt: "RoBERTa scatterplot of positive comment ratio versus like rate for 50 videos; Pearson r is 0.299.",
    caption: "RoBERTa result (Pearson r ≈ 0.30). Figure from our final report.",
    summary: "For 50 MrBeast videos, the RoBERTa-based positive comment ratio had a modest positive correlation with like rate (Pearson r ≈ 0.30).",
  },
};

const image = document.querySelector("#result-image");
const caption = document.querySelector("#result-caption");
const summary = document.querySelector("#result-summary");
const buttons = document.querySelectorAll(".result-option");

function showResult(button) {
  const result = results[button.dataset.model];
  image.src = result.src;
  image.alt = result.alt;
  caption.textContent = result.caption;
  summary.textContent = result.summary;
  buttons.forEach((option) =>
    option.setAttribute("aria-pressed", String(option === button)),
  );
}

buttons.forEach((button) => {
  ["mouseenter", "focus", "click"].forEach((event) =>
    button.addEventListener(event, () => showResult(button)),
  );
});
