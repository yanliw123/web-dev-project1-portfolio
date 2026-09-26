const repetitions = [
  { down: 0.467, up: 0.533, total: 1.000, consistency: 0.862 },
  { down: 0.367, up: 0.533, total: 0.900, consistency: 0.863 },
  { down: 0.467, up: 0.567, total: 1.033, consistency: 0.903 },
  { down: 0.500, up: 0.533, total: 1.033, consistency: 0.926 },
  { down: 1.033, up: 0.867, total: 1.900, consistency: 0.758 },
  { down: 1.067, up: 1.000, total: 2.067, consistency: 0.728 },
];

const slider = document.querySelector("#rep-slider");
const details = document.querySelector("#rep-details");
const downBar = document.querySelector("#rep-down");

slider.addEventListener("input", () => {
  const rep = repetitions[Number(slider.value) - 1];
  details.textContent = `Rep ${slider.value}: ${rep.down.toFixed(3)} s down · ${rep.up.toFixed(3)} s up · ${rep.total.toFixed(3)} s total · ${rep.consistency.toFixed(3)} consistency`;
  downBar.style.width = `${(rep.down / (rep.down + rep.up)) * 100}%`;
});
