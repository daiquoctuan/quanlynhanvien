
var dsnv = new DanhSanhNhanVien();
var validation = new validation();
getLocalstorage();
function getEle(id) {
    return document.getElementById(id);
}

function laythongtinNhanVien(isadd) {
    var maNV = getEle('tknv').value;
    var hoTen = getEle('name').value;
    var email = getEle('email').value;
    var matKhau = getEle('password').value;
    var ngayLam = getEle('datepicker').value;
    var luongCB = getEle('luongCB').value;
    var chucVu = getEle('chucvu').value;
    var gioLam = getEle('gioLam').value;

    var isvalis = true;
    //mã nv
if(isadd){
    isvalis &= validation.kiemtrarong(
        maNV, "tbTKNV", "(*) Vui lòng nhập mã")
        && validation.kiemtradodaikytu(
            maNV, "tbTKNV", '(*) Vui lòng nhập từ 4 đến 10 ký tự', 4, 10)
        && validation.kiemtratrungmaNV(
            maNV, "tbTKNV", "(*) Mã nhân viên đã tồn tại", dsnv.arr);}

    //tên nhân viên

    isvalis &= validation.kiemtrarong(
        hoTen, "tbTen", "(*) Vui lòng nhập tên nhân viên")
        && validation.kiemtrachuoikytu(
            hoTen, "tbTen", "(*) Vui lòng nhập chuỗi ký tự");

    //email

    isvalis &= validation.kiemtrarong(
        email, "tbEmail", "(*) Vui lòng nhập Email")
        && validation.kiememail(email, "tbEmail", "(*) Email của bạn không hợp lệ. VD: ...@gmai.com");
    //mật khẩu
    isvalis &= validation.kiemtrarong(
        matKhau, "tbMatKhau", "(*) Vui lòng nhập mật khẩu")
        && validation.kiemmatkhau( matKhau, "tbMatKhau", "(*) Vui lòng kiểm tra mật khẩu")
    // ngày làm việc
    isvalis &= validation.kiemtrarong(
        ngayLam, "tbNgay", "(*) Vui lòng nhập ngày vào làm");
    // lương căn bản
    isvalis &= validation.kiemtrarong(
        luongCB, "tbLuongCB", "(*) Vui lòng nhập lương căn bản");
    // chức vụ
    isvalis &= validation.kiemtranhanvien("chucvu", "tbChucVu", "(*) Vui lòng chọn chức vụ");
    // gioLam
    isvalis &= validation.kiemtrarong(gioLam, "tbGiolam", "(*) Vui lòng nhập giờ làm");


    if (!isvalis) return;

    var NV = new NhanVien(maNV, hoTen, email, matKhau, ngayLam, luongCB, chucVu, gioLam);
    NV.xeploai();
    NV.tinhluong();
    console.log(NV)
    return NV;
}


getEle('btnThemNV').onclick = function () {
    var NV = laythongtinNhanVien(true);
   
    if (NV) {
        dsnv.ThemNhanVien(NV);
        console.log(NV)
        renderTable(dsnv.arr);
        setLocalStorage();
    }
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
                <button class="btb btn-info" data-toggle="modal" data-target="#myModal" onclick="EditNV('${NV.maNV}')">Edit</button>
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
    console.log(dsnv.arr);


    renderTable(dsnv.arr);
    setLocalStorage();
}


function EditNV(maNV) {
    var nv = dsnv.laychitietNV(maNV)
    if (nv) {
        getEle('tknv').value = nv.maNV;
        getEle('tknv').disabled = true;
        getEle("name").value = nv.tennhanvien;
        getEle("email").value = nv.email;
        getEle("password").value = nv.matkhau;
        getEle("datepicker").value = nv.ngayvaolam;
        getEle("luongCB").value = nv.luongcanban;
        getEle("chucvu").value = nv.chucvu;
        getEle("gioLam").value = nv.giolam;
        getEle('btnThemNV').style.display = "none";
        getEle("btnCapNhat").style.display = "inline-block";

    } ;
}





//cập nhật

getEle('btnCapNhat').addEventListener("click", function () {
    var NV = laythongtinNhanVien(false);

    dsnv.CapNhatNhanVien(NV);
    renderTable(dsnv.arr);
    setLocalStorage();
});


//tìm kiếm loại nhân viên

getEle('timkiem').addEventListener("keyup", function () {
    var keyword = getEle("timkiem").value;

    var timkiemNV = dsnv.timkiem(keyword);
    renderTable(timkiemNV);

})
//reset
getEle("resetform").onclick = function(){
   
    getEle("reset").reset();
    
}
