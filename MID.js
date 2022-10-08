const url = [
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer",
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer",
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer",
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer",
];
function showFT(FT) {
  let placeholder = document.querySelector("#data-FT");
  let out = "";
  Object.keys(FT).forEach((val) => {
    out += `
      <tr>
        <td>${val}</td>
        <td>${FT[val]["plant-site"]}</td>
        <td>${FT[val].name}</td>
        <td>${FT[val].type}</td>
        <td>${FT[val].range[0]} - ${FT[val].range[1]}</td>
        <td>${FT[val].value}</td>
        <td>${FT[val].unit}</td>
      </tr> 
      `;
  });
  placeholder.innerHTML = out;
}
function showLT(LT) {
  let placeholder = document.querySelector("#data-LT");
  let out = "";
  Object.keys(LT).forEach((val) => {
    out += `
      <tr>
        <td>${val}</td>
        <td>${LT[val]["plant-site"]}</td>
        <td>${LT[val].name}</td>
        <td>${LT[val].type}</td>
        <td>${LT[val].range[0]} - ${LT[val].range[1]}</td>
        <td>${LT[val].value}</td>
        <td>${LT[val].unit}</td>
      </tr> 
      `;
  });
  placeholder.innerHTML = out;
}
function showTT(TT) {
  let placeholder = document.querySelector("#data-TT");
  let out = "";
  Object.keys(TT).forEach((val) => {
    out += `
      <tr>
        <td>${val}</td>
        <td>${TT[val]["plant-site"]}</td>
        <td>${TT[val].name}</td>
        <td>${TT[val].type}</td>
        <td>${TT[val].range[0]} - ${TT[val].range[1]}</td>
        <td>${TT[val].value}</td>
        <td>${TT[val].unit}</td>
      </tr> 
      `;
  });
  placeholder.innerHTML = out;
}
function showPT(PT) {
  let placeholder = document.querySelector("#data-PT");
  let out = "";
  Object.keys(PT).forEach((val) => {
    out += `
      <tr>
        <td>${val}</td>
        <td>${PT[val]["plant-site"]}</td>
        <td>${PT[val].name}</td>
        <td>${PT[val].type}</td>
        <td>${PT[val].range[0]} - ${PT[val].range[1]}</td>
        <td>${PT[val].value}</td>
        <td>${PT[val].unit}</td>
      </tr> 
      `;
  });
  placeholder.innerHTML = out;
}


// fecth data
fetch(url[0])
  .then((res) => res.json())
  .then((FT) => {
    showFT(FT);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
fetch(url[1])
  .then((res) => res.json())
  .then((LT) => {
    showLT(LT);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
fetch(url[2])
  .then((res) => res.json())
  .then((TT) => {
    showTT(TT);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
fetch(url[3])
  .then((res) => res.json())
  .then((PT) => {
    showPT(PT);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
