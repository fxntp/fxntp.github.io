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
function filterSearch(){
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("dataTable");
  tr = document.getElementsByTagName("tr");
  
  for(i = 0;i<tr.length;i++){
    td_name = tr[i].getElementsByTagName("td")[2];
    if(td_name){
      txtValue = td_name.textContent || td_name.innerText;
      if(txtValue.toUpperCase().indexOf(filter)>-1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
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