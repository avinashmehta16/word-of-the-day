const norwegian = [
    {
      word: "Inngripende",
      meaning: "Something that has a deep or far-reaching effect.",
      examples: [
        "Tiltaket var svært inngripende for markedet.",
        "Reguleringen fikk inngripende konsekvenser.",
        "Det var en inngripende beslutning."
      ]
    }
  ];
  
  const english = [
    {
      word: "Information Asymmetry",
      meaning: "When one party in a transaction has more or better information.",
      examples: [
        "Markets suffer under information asymmetry.",
        "Insider trading exploits information asymmetry.",
        "Disclosure rules reduce information asymmetry."
      ]
    }
  ];
  
  const punjabi = [
    {
      word: "zimmedaari",
      meaning: "Responsibility or duty.",
      examples: [
        "Usne apni zimmedaari imaandari naal nibhayi.",
        "Kaam di zimmedaari samajhni zaroori hai.",
        "Zimmedaari naal kaam karna bharosa paida karda hai."
      ]
    }
  ];
  
  function dailyIndex(length) {
    const today = new Date().toDateString();
    let sum = 0;
    for (let char of today) sum += char.charCodeAt(0);
    return sum % length;
  }
  
  function renderWord(data, id, label) {
    document.getElementById(id).innerHTML = `
      <h2>${label}</h2>
      <h3>${data.word}</h3>
      <p><strong>Meaning:</strong> ${data.meaning}</p>
      ${data.examples.map(e => `<div class="example">${e}</div>`).join("")}
    `;
  }
  
  renderWord(norwegian[dailyIndex(norwegian.length)], "norwegian", "🇳🇴 Norwegian");
  renderWord(english[dailyIndex(english.length)], "english", "🇬🇧 English (Finance)");
  renderWord(punjabi[dailyIndex(punjabi.length)], "punjabi", "🇮🇳 Punjabi (Roman)");
  