function showPT(PT) {
  let placeholder = document.querySelector("#data-PT");
  placeholder.innerHTML = '';
  Object.keys(PT).forEach((val) => {
    var rows = `
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
    placeholder.innerHTML += rows;
  });
}
fetch(
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer"
)
  .then((res) => res.json())
  .then((PT) => {
    showPT(PT);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
