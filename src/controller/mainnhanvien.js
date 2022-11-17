
var dsnv = new DanhSanhNhanVien();
getLocalstorage();
function getEle(id) {
    return document.getElementById(id);
}

function laythongtinNhanVien() {
    var maNv = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;
    var NV = new NhanVien(maNv, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    NV.xeploai();

    NV.tinhluong();
    return NV;
}

getEle('btnThemNV').onclick = function () {
    var NV = laythongtinNhanVien();
    dsnv.ThemNhanVien(NV)
    renderTable(dsnv.arr)
    setLocalStorage();
}
function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var NV = data[i];
        content += `
        <tr>
        <td>${NV.maNV}</td>
         <td>${NV.tennhanvien}</td>
        <td>${NV.email}</td>
        <td>${NV.ngayvaolam}</td>
        <td>${NV.chucvu}</td>
        <td>${NV.tongluong}</td>
        <td>${NV.loainhanvien}</td>
        <td>    
<button class="btb btn-danger" onclick="deleteNV('${NV.maNV}')">Delete</button>
<button class="btb btn-info" onclick="EditNV('${NV.maNV}')">Edit</button>


        </td>
     </tr>`
    }
    getEle('tableDanhSach').innerHTML = content;
}

function setLocalStorage() {
    var datastring = JSON.stringify(dsnv.arr);
    localStorage.setItem("DSNV", datastring);
}
function getLocalstorage() {
    if (localStorage.getItem("DSNV")) {
        var datastring = localStorage.getItem("DSNV");
        dsnv.arr = JSON.parse(datastring);
        renderTable(dsnv.arr);
    }
}


function deleteNV(maNV) {
// console.log(maNV);
dsnv.XoaNhanVien(maNV);
console.log(dsnv.arr)

   
    renderTable(dsnv.arr);
    setLocalStorage();
}