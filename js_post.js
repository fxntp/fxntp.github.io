document.addEventListener("DOMContentLoaded", function () {
  const insertForm = document.querySelector(".insert-form");
  const idInput = document.querySelector("#st_id");
  const nameInput = document.querySelector("#st_name");
  const namesensorInput = document.querySelector("#sensor_name");
  const typesensorInput = document.querySelector("#sensor_type");
  const unitsensorInput = document.querySelector("#sensor_unit");
  const valuesensorInput = document.querySelector("#sensor_value");

  function insertSubmit(event) {
    event.preventDefault(); //ป้องกันไม่ให้ form submit ตัวเอง
    const data = {
      st_id: idInput.value,
      st_name: nameInput.value,
      sensor_name: namesensorInput.value,
      sensor_type: typesensorInput.value,
      sensor_unit: unitsensorInput.value,
      sensor_value: valuesensorInput.value,
    };
    console.log(sensor_value);
    Swal.fire({
      icon: 'success',
      title: 'Successfully',
      showConfirmButton: true
    })
    fetch("https://midterm-exam-010723313-2022.herokuapp.com/student_post", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8' //บอกว่าข้อมูลที่จะส่งให้ API คือข้อมูลเเบบ JSON
      },
      body: JSON.stringify(data) //เเปลง OBJECT เป็น string
    })
      .then((res) => res.json())
      .then((json) => {
      })

      .catch((error) => {
        console.log(error.message);
      });
    idInput.value = '';
    nameInput.value = '';
    namesensorInput.value = '';
    typesensorInput.value = '';
    unitsensorInput.value = '';
    valuesensorInput.value = '';
  }
  insertForm.addEventListener("submit", insertSubmit);
})
