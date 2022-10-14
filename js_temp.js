function showTT(TT) {
  var data = TT;
  let placeholder = document.querySelector("#data-TT");
  placeholder.innerHTML = "";
  Object.keys(data).forEach((val) => {
    var rows = `
        <tr>
          <td>${val}</td>
          <td>${data[val]["plant-site"]}</td>
          <td>${data[val].name}</td>
          <td>${data[val].type}</td>
          <td>${data[val].range[0]} - ${data[val].range[1]}</td>
          <td>${data[val].value}</td>
          <td>${data[val].unit}</td>
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
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer"
)
  .then((res) => res.json())
  .then((TT) => {
    showTT(TT);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
