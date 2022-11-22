function DanhSanhNhanVien() {
  this.arr = [];
  this.ThemNhanVien = function (NV) {
    this.arr.push(NV);
  };
  this.TimViTri = function (maNV) {
    var index = -1;
    for (i = 0; i < this.arr.length; i++) {
      var NV = this.arr[i];
      if (NV.maNV === maNV) {
        index = i;
        break;
      }
    }

    return index;

  }
  this.XoaNhanVien = function (maNV) {
    var index = this.TimViTri(maNV)
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

  this.laychitietNV = function (maNV) {
    var index = this.TimViTri(maNV)
    if (index !== -1) {
      return this.arr[index];
    }
  };
  //  cập nhật đề lên lại arr cũ
  this.CapNhatNhanVien = function (NV) {
    var index = this.TimViTri(NV.maNV);
    if (index !== -1) {
      this.arr[index] = NV;
    }

  }

  //tìm kiếm nhân viên
  // this.timkiem = function (keyword) {
  //   var mangtimkiem = [];
  //   for (var i = 0; i < this.arr.length; i++) {
  //     var NV = this.arr[i]
  //     var tenNVLowerCase = NV.loainhanvien.toLowerCase ();
  //     var keywordLowerCase = keyword.toLowerCase() ;
  //     if (tenNVLowerCase.indexOf(keywordLowerCase) !== -1) {
  //       mangtimkiem.push(NV);

  //     }
  //   } return mangtimkiem;
  // }
this.timkiem = function(keyword){
  var mangtimkiem = [];
  for(var i = 0 ; i <this.arr.length ; i++){
    var NV = this.arr[i];
    var tenNVLowerCase = NV.loainhanvien.toLowerCase();
    var keywordLowerCase = keyword.toLowerCase();
    if(tenNVLowerCase.indexOf(keywordLowerCase) !== -1){
      mangtimkiem.push(NV);
    }
  } return  mangtimkiem;
}



}


