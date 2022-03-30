const contentlist = document.querySelector("#contentlist")

const arr = [
{
    stt:"1",
    code: "55043886653",
    phonenumber: "0988456723",
    ordervalue: "900.000",
    details: "... Địa chỉ nhận: Đường 23, phố Nguyễn Huệ, Hà Nội, ...",
    freight: "53.000",
    comeback: "0",
    status: "Mất",
    collection: "850.000",
    indemnify: "450.000",
},

{
    stt:"2",
    code: "848550438",
    phonenumber: "0345214568",
    ordervalue: "600.000",
    details: "... Địa chỉ nhận: Thôn 2, Kim Liên, Quốc Oai, Hà Nội, ...",
    freight: "22.000",
    comeback: "11.500",
    status: "Chuyển hoàn",
    collection: "0",
    indemnify: "0",
},
];

let Expressdelivery = arr.map ((ord,i) => {
    return`
    <tr>
        <td>${ord.stt}</td>
        <td>${ord.code}</td>
        <td>${ord.phonenumber}</td>
        <td>${ord.ordervalue}</td>
        <td>
            <a href=""><i class="fa-solid fa-eye"></i></a>
        </td>
        <td>${ord.freight}</td>
        <td>${ord.comeback}</td>
        <td>${ord.status}</td>
        <td>${ord.collection}</td>
        <td>${ord.indemnify}</td>
        <td>
            <a href=""><i class="fa-solid fa-pencil"></i></a>
        </td>
        <td>
            <a href = ""><i class="fa-solid fa-trash-can"></i></a>
        </td>
    </tr>
     `;
});

contentlist.innerHTML = Expressdelivery.join("");

const morenew = document.querySelector("#morenew")
const isMorenew = false;
morenew.addEventListener("click", () => {
  isMorenew = !isMorenew;
  if (isMorenew) {
    addnew.classList.remove("form");
    addnew.classList.add("block");
  } else {
    addnew.classList.remove("block");
    addnew.classList.add("form");
  }
});

//thêm
inputCode = document.querySelector("input[name=code]");
inputPhoneNumber = document.querySelector("input[name=phonenumber]");
inputOrderValue = document.querySelector("input[name=ordervalue]");
inputDetails = document.querySelector("textarea[name=details]");
inputFreight = document.querySelector("input[name=freight]");
inputComeback = document.querySelector("input[name=comeback]");
inputStatus = document.querySelector("input[name=status]");
inputCollection = document.querySelector("input[name=collection]");
inputIndemnify = document.querySelector("input[name=indemnify]");

let add = document.getElementById("add");
add.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputCode.value)
    let newlist = {
      stt: arr.length + 1,
      code: inputCode.value,
      phonenumber: inputPhoneNumber.value,
      details: inputDetails.value,
      freight: inputFreight.value,
      comeback: inputComeback.value,
      status: inputStatus.value,
      collection: inputCollection.value,
      indemnify: inputIndemnify.value,  
    };
  
    arr.push(newlist);
  
    let Expressdelivery = arr.map ((ord,i) => {
    return`
    <tr>
        <td>${ord.stt}</td>
        <td>${ord.code}</td>
        <td>${ord.phonenumber}</td>
        <td>${ord.ordervalue}</td>
        <td>
            <a href=""><i class="fa-solid fa-eye"></i></a>
        </td>
        <td>${ord.freight}</td>
        <td>${ord.comeback}</td>
        <td>${ord.status}</td>
        <td>${ord.collection}</td>
        <td>${ord.indemnify}</td>
        <td>
            <a href=""><i class="fa-solid fa-pencil"></i></a>
        </td>
        <td>
            <a href = ""><i class="fa-solid fa-trash-can"></i></a>
        </td>
    </tr>
     `;
});
    //
    contentlist.innerHTML = Expressdelivery.join("");
  });
  