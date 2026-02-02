// ==========================
// COACH VOICE
// ==========================
const mentalStates = {
  motivated: { quote: "You’re in a strong place. Use it deliberately." },
  sharp: { quote: "Clarity is rare. This is when real progress happens." },
  sleepy: { quote: "No force. Just gentle momentum." },
  lazy: { quote: "Action creates motivation, not the other way around." },
  happy: { quote: "Good energy multiplies when you use it." },
  demotivated: { quote: "You don’t need fixing. Just a small direction." }
};

// ==========================
// ACTIVITY LIBRARY
// ==========================
const activities = {
  "15-30": {
    academic: [
      "Read one finance or market article and write 3 key insights.",
      "Watch part of an Excel or finance tutorial and explain one thing you learned.",
      "Explain one finance concept out loud without notes."
    ],
    soft: [
      "Do vocal warm-ups and read 5–10 pages aloud, slowly and clearly.",
      "Speak for 10 minutes explaining a topic with calm pacing."
    ],
    physical: [
      "Go for a walk with no phone.",
      "Do mobility for hips, spine, and ankles.",
      "Strengthen feet and ankles (small but important muscles)."
    ]
  },

  "30-60": {
    academic: [
      "Watch a full tutorial and replicate it in Excel.",
      "Read a finance topic, summarize it, then explain it out loud.",
      "Analyze one real company at a high level."
    ],
    soft: [
      "Voice session: warm-up, read aloud, record yourself explaining a topic.",
      "Journal to structure your thoughts clearly."
    ],
    physical: [
      "Targeted gym session (controlled, not max effort).",
      "Mobility and stability for shoulders, hips, and deep core.",
      "Longer walk with focused thinking."
    ]
  },

  "60-90": {
    academic: [
      "Build an Excel model or structured finance notes.",
      "Deep dive into a tutorial: pause, apply, and understand.",
      "Teach a finance topic as if preparing a lecture."
    ],
    soft: [
      "Full voice and speech training session.",
      "Confidence practice: slow speech, pauses, presence."
    ],
    physical: [
      "Gym plus accessory and stability work.",
      "Full yoga session.",
      "Conditioning followed by recovery."
    ]
  },

  "90-120": {
    academic: [
      "Build a mini-project (Excel dashboard, valuation model).",
      "Watch a long tutorial and fully implement it.",
      "Combine theory, application, and explanation."
    ],
    soft: [
      "Long reflection and journaling session.",
      "Structured thinking about career, direction, and identity.",
      "Extended voice and presence training."
    ],
    physical: [
      "Gym plus rehab and mobility.",
      "Long walk with deep thinking.",
      "Recovery-focused physical session."
    ]
  }
};

// ==========================
// MAIN LOGIC
// ==========================
function generateActivity() {
  const mental = document.getElementById("mental").value;
  const time = document.getElementById("time").value;
  const resultDiv = document.getElementById("result");

  const quote = mentalStates[mental].quote;

  let category;
  if (mental === "motivated" || mental === "sharp") {
    category = Math.random() < 0.7 ? "academic" : "soft";
  } else if (mental === "sleepy") {
    category = "physical";
  } else if (mental === "lazy") {
    category = Math.random() < 0.6 ? "soft" : "physical";
  } else if (mental === "happy") {
    category = Math.random() < 0.5 ? "soft" : "academic";
  } else {
    category = "soft";
  }

  const options = activities[time][category];
  const activity = options[Math.floor(Math.random() * options.length)];

  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <p><em>${quote}</em></p>
    <p><strong>Focus (${time}):</strong></p>
    <p>${activity}</p>
    <p><em>Stay present. Finish what you start.</em></p>
  `;
}
