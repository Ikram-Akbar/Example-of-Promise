const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");

const data1 = document.getElementById("data1");
const data2 = document.getElementById("data2");
const data3 = document.getElementById("data3");

// create object of data

let dell = {
  brand: "Dell",
  hardDisk: "2 TB",
  color: "Black",
};
let hp = {
  brand: "HP",
  hardDisk: "1 TB",
  color: "red",
};
let notAvailable = {
  brand: "Not Available",
  status: "failed",
};

let buyLaptop = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(dell);
  }, 5000);
});
// Call a function for btn action

function buttonAction() {
  buyLaptop.then((res) => {
    data1.innerText = JSON.stringify(res);
    // console.log(res);
  });
}

// example 02:

async function buttonAction2() {
  data2.innerText = "loading Data ";
  let data = await buyLaptop;
  console.log(data);
  data2.innerText = JSON.stringify(data);
}

// example 03:
// fetch Api
const api = fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())

function buttonAction3() {
  data3.innerText = "Loading Data .....";
  api.then(res => {
    data3.innerText = JSON.stringify(res)
  });

}
