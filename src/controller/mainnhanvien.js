
var dsnv = new DanhSanhNhanVien();

function getEle(id) {
    return document.getElementById(id);
}

function laythongtinNhanVien() {
    var taiKhoan = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;
    var NV = new NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    NV.xeploai();

    NV.tinhluong();
    return NV;
}

getEle('btnThemNV').onclick = function () {
    var NV = laythongtinNhanVien();
    dsnv.ThemNhanVien(NV)
    renderTable(dsnv.arr)
}
function renderTable(data) {
    var content = "";
    for (var i = 0; i < data.length; i++) {
        var NV = data[i];
        content += `
        <tr>
        <td>${NV.taiKhoan}</td>
         <td>${NV.tennhanvien}</td>
        <td>${NV.email}</td>
        <td>${NV.ngayvaolam}</td>
        <td>${NV.chucvu}</td>
        <td>${NV.tongluong}</td>
        <td>${NV.loainhanvien}</td>
        <td>    
        </td>
     </tr>`
    }
    getEle('tableDanhSach').innerHTML = content;
}