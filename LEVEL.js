function showLT(LT) {
  let placeholder = document.querySelector("#data-LT");
  placeholder.innerHTML = "";
  Object.keys(LT).forEach((val) => {
    var rows = `
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
    placeholder.innerHTML += rows;
  });
}

fetch(
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer"
)
  .then((res) => res.json())
  .then((LT) => {
    showLT(LT);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
