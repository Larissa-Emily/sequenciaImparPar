const bnt1 = document.querySelector("#bnt1");
const bnt2 = document.querySelector("#bnt2");

bnt1.addEventListener("click", (e) => {
  e.preventDefault();
  const campImparInicio = document.querySelector("#input-1").value;
  const campImparFinal = document.querySelector("#input-2").value;
  const camp1 = document.querySelector("#camp1");

  for (let i = campImparInicio; i <= campImparFinal; i++) {
    const imparResult = i % 2 === 0 ? true : false;
    if (imparResult === false) {
      camp1.innerHTML += ` ${ i}  `;
    } 
  }
});


bnt2.addEventListener("click", (e) => {
    e.preventDefault();
    const campImparInicio = document.querySelector("#input-3").value;
    const campImparFinal = document.querySelector("#input-4").value;
    const camp2 = document.querySelector("#camp2");
  
    for (let i = campImparInicio; i <= campImparFinal; i++) {
      const imparResult = i % 2 === 0 ? true : false;
      if (imparResult === true) {
        camp2.innerHTML += ` ${ i}  `;
      } 
    }
  });