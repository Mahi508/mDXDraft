var vs =
{
  version: "1.0",
  status: "200",
  statusMessage: "OK",
  data: [
    {
      token:
        "09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9",
    },
  ],
};




function setID(item, index) {
  let obj = "time: " + item;
  return obj;
}

let output = timeslots.map(setID);
console.log(output);