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
    indemnify: "450.000"
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
    indemnify: "0"
},
]

let Expressdelivery = contentlistorder.map ((Order,i) => {
    return
    <tr>
        <td>${Order.code}</td>
        <td>${Order.phonenumber}</td>
        <td>${Order.ordervalue}</td>
        <td>
            <a href=""><i class="fa-solid fa-eye"></i></a>
        </td>
        <td>${Order.freight}</td>
        <td>${Order.comeback}</td>
        <td>${Order.status}</td>
        <td>${Order.collection}</td>
        <td>${Order.indemnify}</td>
        <td></td>
    </tr>
});