const insertForm = document.querySelector(".insert-form");
const idInput = document.querySelector("#st_id");
const nameInput = document.querySelector("#st_name");
const namesensorInput = document.querySelector("#sensor_name");
const typesensorInput = document.querySelector("#sensor_type");
const unitsensorInput = document.querySelector("#sensor_unit");
const valuesensorInput = document.querySelector("#sensor_value");

function insertSubmit(event) {
  event.preventDefault();

  const user = {
    st_id:idInput.value,
    st_name:nameInput.value,
    sensor_name:namesensorInput.value,
    sensor_type:typesensorInput.value,
    sensor_unit:unitsensorInput.value,
    sensor_value:valuesensorInput.value,
  };
  fetch("https://midterm-exam-010723313-2022.herokuapp.com/student_post",{
    method: 'POST',
    headers: {
        'Content-Type':'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  })
    .then((res) => res.json())
    .then((json) => {
    })
    .catch((error) => {
      console.log(error.message);
    });
}
insertForm.addEventListener("submit", insertSubmit);
