function NhanVien(_maNV,
    _tennhanvien,
    _email,
    _pass,
    _ngaylamviec,
    _luongcanban,
    _chucvu,
    _giolam){
    this.maNV = _maNV;
    this.tennhanvien = _tennhanvien ;
    this.email = _email;
    this.matkhau = _pass;
    this.ngayvaolam = _ngaylamviec ;
    this.luongcanban = _luongcanban ;
    this.chucvu = _chucvu ;
    this.giolam = _giolam ;
    this.loainhanvien = '';
    this.tongluong = 0;

    this.xeploai = function(){

        
        if(this.giolam >= 190){
            this.loainhanvien = "Xuất sắc";
        } else if(this.giolam >= 176 && this.giolam < 190){
            this.loainhanvien = "Giỏi";
        }else if(this.giolam >= 160 && this.giolam <176){
            this.loainhanvien = "Khá"
        } else {
            this.loainhanvien = "trung bình"
        }
    }

    this.tinhluong = function(){
        if(this.chucvu === "sếp"){
            this.tongluong = this.luongcanban * 3;
        } else if(this.chucvu === "Trưởng phòng"){
            this.tongluong = this.luongcanban * 2
        } else {this.tongluong = this.luongcanban}
    }


}