function showFT(FT) {
  let placeholder = document.querySelector("#data-FT");
  placeholder.innerHTML = "";
  Object.keys(FT).forEach((val) => {
    var rows = `
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
    placeholder.innerHTML += rows;
  });
}
function filterSearch() {
  var input, filter, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();//เเปลงค่าที่รับเป็นพิมพ์ใหญ่
  tr = document.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td_name = tr[i].getElementsByTagName("td")[2];
    if (td_name) {
      txtValue = td_name.textContent || td_name.innerText; //txtvalue = text ในตัวเเปร td_name
      if (txtValue.toUpperCase().indexOf(filter) > -1) { //เเปลง txtvalue เป็นตัวใหญ่เเละนำ txt ของ filter มาเปรียบเทียบกันว่าเหมือนกันหรือไม่ ถ้าเหมือนจะเป็น0 เเต่ถ้าไม่จะเป็น -1
        tr[i].style.display = "";//ถ้าตรงให้ข้อมูลเเสดงเหมือนเดิม
      } else {
        tr[i].style.display = "none";//ถ้าไม่ตรงให้ข้อมูลหายไป
      }
    }
  }
}
  fetch(
    "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer"
  )
    .then((res) => res.json())
    .then((FT) => {
      showFT(FT);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

