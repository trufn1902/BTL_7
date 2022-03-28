const contentlist = document.querySelector("#contentlist")

const contentlistorder = [
{
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

let Expressdelivery = contentlistorder.map ((ord,i) => {
    return`
    <tr>
        <td></td>
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

contentlist.innerHTML = Expressdelivery.join("")


// const toggle = document.querySelector("#toggle")

// var isToggle = false;
// toggle.addEventListener("click", () => {
//   isToggle = !isToggle;
//   if (isToggle) {
//     formAdd.classList.remove("none");
//     formAdd.classList.add("block");
//   } else {
//     formAdd.classList.remove("block");
//     formAdd.classList.add("none");
//   }
// });