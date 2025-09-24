const modalOverlay = document.getElementById("modal-overlay");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

const blockContents = {
  "O que é fibromialgia?": {
    title: "O que é Fibromialgia?",
    content:
      "É uma síndrome caracterizada por dor crônica generalizada, fadiga, alterações do sono e da memória.<br>Atinge principalmente mulheres e impacta muito a qualidade de vida.",
  },
  "Papel da Nutrição": {
    title: "Papel da Nutrição",
    content:
      'A alimentação não cura a fibromialgia, mas pode ajudar a: <ul class="modal-list"><li>Reduzir inflamações;</li><li>Melhorar a energia;</li><li>Controlar o peso;</li><li>Modular sintomas intestinais;</li></ul>',
  },
  "Nutrientes Importantes": {
    title: "Nutrientes Importantes",
    content:
      '<ul class="modal-list"><li><strong>Ômega 3:</strong> Salmão, sardinha, chia, linhaça, nozes</li><li><strong>Magnésio:</strong> Espinafre, couve, aveia, feijão, castanha-do-pará</li><li><strong>Vitaminas do Complexo B:</strong> Carnes, ovos, leite, cereais integrais, leguminosas</li><li><strong>Vitamina D:</strong> Sardinha, atum, ovos, leite fortificado + sol</li></ul>',
  },
  "O que evitar?": {
    title: "O que evitar?",
    content:
      'Alguns alimentos podem piorar os sintomas em pessoas com fibromialgia: <ul class="modal-list"><li>Ultraprocessados (biscoito recheado, salgadinho, macarrão instantâneo); </li><li>Açúcar em excesso (refrigerante, doces, bolos industrializados);</li><li>Álcool;</li><li>Glutamato monossódico (temperos prontos, sopas de pacotinho, fast-food);</ul>',
  },
  "Estratégias Práticas": {
    title: "Estratégias Práticas",
    content:
      '<ul class="modal-list"><li>Prefira uma dieta variada e anti-inflamatória (como a mediterrânea);</li><li>Hidrate-se bem;</li><li>Faça refeições fracionadas ao longo do dia;</li><li>Observe possíveis intolerâncias (glúten, lactose) caso haja sintomas;</li></ul>',
  },
};

// Alertar usuário que página está em construção
document.querySelectorAll(".block").forEach((block) => {
    block.addEventListener("click", function (e) {
    if (block.tagName === "A" && block.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Esta página está em construção.");
    }
  });
});

document.querySelectorAll(".block_modal").forEach((block) => {
  block.style.cursor = "pointer";
  block.addEventListener("click", () => {
    const text = block.querySelector(".block-text").textContent.trim();
    const data = blockContents[text];
    if (data) {
      modalTitle.innerHTML = data.title;
      modalContent.innerHTML = data.content;
    } else {
      modalTitle.innerHTML = text;
      modalContent.innerHTML = "";
    }
    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modalOverlay.style.display = "none";
  document.body.style.overflow = "";
});

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
    document.body.style.overflow = "";
  }
});
