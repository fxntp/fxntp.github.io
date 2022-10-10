fetch(
  "https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer"
)
  .then((res) => {
    return res.json();
  })
  .then((test) => {
    for(var i = 0 ; i < test.length ;i++){
        const test1 = test[i].name;
        console.log(test1)

    }
    
  });
