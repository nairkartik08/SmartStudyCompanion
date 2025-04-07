function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active-section');
    });
  
    const active = document.getElementById(sectionId);
    if (active) {
      active.classList.add('active-section');
    }
  }
  
  // Timetable Planner
  function addTimetableEntry() {
    const date = document.getElementById("dateInput").value;
    const day = document.getElementById("dayInput").value;
    const subject = document.getElementById("subjectInput").value;
    const time = document.getElementById("timeInput").value;
  
    if (!date || !day || !subject || !time) {
      alert("Please fill all fields.");
      return;
    }
  
    const entry = `${date} (${day}) - ${time}: ${subject}`;
    const li = document.createElement("li");
    li.textContent = entry;
    document.getElementById("timetableList").appendChild(li);
  
    // Clear inputs
    document.getElementById("dateInput").value = "";
    document.getElementById("dayInput").value = "";
    document.getElementById("subjectInput").value = "";
    document.getElementById("timeInput").value = "";
  }
  
  // Pomodoro Timer
  let timer;
  function startTimer() {
    const workMin = parseInt(document.getElementById("workTime").value);
    const breakMin = parseInt(document.getElementById("breakTime").value);
    let totalSeconds = workMin * 60;
    const display = document.getElementById("timerDisplay");
  
    clearInterval(timer);
    timer = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      totalSeconds--;
  
      if (totalSeconds < 0) {
        clearInterval(timer);
        alert("Break Time!");
        startBreak(breakMin);
      }
    }, 1000);
  }
  
  function startBreak(minutes) {
    let breakSeconds = minutes * 60;
    const display = document.getElementById("timerDisplay");
  
    timer = setInterval(() => {
      const min = Math.floor(breakSeconds / 60);
      const sec = breakSeconds % 60;
      display.textContent = `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
      breakSeconds--;
  
      if (breakSeconds < 0) {
        clearInterval(timer);
        alert("Pomodoro session completed!");
      }
    }, 1000);
  }
  
  // Notes
  function saveNote() {
    const noteText = document.getElementById("noteInput").value;
    if (noteText.trim() === "") return;
  
    const li = document.createElement("li");
    li.textContent = noteText;
    document.getElementById("noteList").appendChild(li);
    document.getElementById("noteInput").value = "";
  }
  
  // Formula Calculators
  function showFormula(type) {
    const calc = document.getElementById("formulaCalc");
    let html = "";
  
    switch (type) {
      case 'force':
        html = `
          <h3>Force = Mass × Acceleration</h3>
          <input type="number" id="mass" placeholder="Mass (kg)" />
          <input type="number" id="acceleration" placeholder="Acceleration (m/s²)" />
          <button onclick="calculateForce()">Calculate</button>
          <p id="forceResult"></p>
        `;
        break;
      case 'ke':
        html = `
          <h3>KE = ½mv²</h3>
          <input type="number" id="keMass" placeholder="Mass (kg)" />
          <input type="number" id="velocity" placeholder="Velocity (m/s)" />
          <button onclick="calculateKE()">Calculate</button>
          <p id="keResult"></p>
        `;
        break;
      case 'ohm':
        html = `
          <h3>V = IR</h3>
          <input type="number" id="current" placeholder="Current (A)" />
          <input type="number" id="resistance" placeholder="Resistance (Ω)" />
          <button onclick="calculateOhm()">Calculate</button>
          <p id="ohmResult"></p>
        `;
        break;
      case 'momentum':
        html = `
          <h3>Momentum = mv</h3>
          <input type="number" id="momMass" placeholder="Mass (kg)" />
          <input type="number" id="momVelocity" placeholder="Velocity (m/s)" />
          <button onclick="calculateMomentum()">Calculate</button>
          <p id="momentumResult"></p>
        `;
        break;
      case 'gravity':
        html = `
          <h3>F = G * m1 * m2 / r²</h3>
          <input type="number" id="m1" placeholder="Mass 1 (kg)" />
          <input type="number" id="m2" placeholder="Mass 2 (kg)" />
          <input type="number" id="r" placeholder="Distance (m)" />
          <button onclick="calculateGravitational()">Calculate</button>
          <p id="gravityResult"></p>
        `;
        break;
      case 'projectile':
        html = `
          <h3>Range = (v² * sin(2θ)) / g</h3>
          <input type="number" id="velocityProj" placeholder="Velocity (m/s)" />
          <input type="number" id="angle" placeholder="Angle (degrees)" />
          <button onclick="calculateProjectile()">Calculate</button>
          <p id="projectileResult"></p>
        `;
        break;
      case 'work':
        html = `
          <h3>Work = Force × Distance</h3>
          <input type="number" id="forceW" placeholder="Force (N)" />
          <input type="number" id="distanceW" placeholder="Distance (m)" />
          <button onclick="calculateWork()">Calculate</button>
          <p id="workResult"></p>
        `;
        break;
    }
  
    calc.innerHTML = html;
  }
  
  // Formula Calculations
  function calculateForce() {
    const m = parseFloat(document.getElementById("mass").value);
    const a = parseFloat(document.getElementById("acceleration").value);
    document.getElementById("forceResult").textContent = `Force = ${m * a} N`;
  }
  
  function calculateKE() {
    const m = parseFloat(document.getElementById("keMass").value);
    const v = parseFloat(document.getElementById("velocity").value);
    document.getElementById("keResult").textContent = `Kinetic Energy = ${0.5 * m * v * v} J`;
  }
  
  function calculateOhm() {
    const I = parseFloat(document.getElementById("current").value);
    const R = parseFloat(document.getElementById("resistance").value);
    document.getElementById("ohmResult").textContent = `Voltage = ${I * R} V`;
  }
  
  function calculateMomentum() {
    const m = parseFloat(document.getElementById("momMass").value);
    const v = parseFloat(document.getElementById("momVelocity").value);
    document.getElementById("momentumResult").textContent = `Momentum = ${m * v} kg·m/s`;
  }
  
  function calculateGravitational() {
    const G = 6.674e-11;
    const m1 = parseFloat(document.getElementById("m1").value);
    const m2 = parseFloat(document.getElementById("m2").value);
    const r = parseFloat(document.getElementById("r").value);
    const force = G * m1 * m2 / (r * r);
    document.getElementById("gravityResult").textContent = `Gravitational Force = ${force.toExponential(2)} N`;
  }
  
  function calculateProjectile() {
    const v = parseFloat(document.getElementById("velocityProj").value);
    const theta = parseFloat(document.getElementById("angle").value);
    const radians = theta * (Math.PI / 180);
    const g = 9.81;
    const range = (v * v * Math.sin(2 * radians)) / g;
    document.getElementById("projectileResult").textContent = `Range = ${range.toFixed(2)} m`;
  }
  
  function calculateWork() {
    const f = parseFloat(document.getElementById("forceW").value);
    const d = parseFloat(document.getElementById("distanceW").value);
    document.getElementById("workResult").textContent = `Work Done = ${f * d} J`;
  }
  
  function getExplanation() {
    const topic = document.getElementById("topicInput").value.trim();
    const aiResponse = document.getElementById("aiResponse");
  
    if (!topic) {
      aiResponse.textContent = "Please enter a topic.";
      return;
    }
  
    fetch("/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ topic: topic }),
    })
      .then((res) => res.json())
      .then((data) => {
        aiResponse.textContent = data.explanation;
      })
      .catch((err) => {
        aiResponse.textContent = "Error: Could not get explanation.";
        console.error(err);
      });
  }
  