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

   return index ;

  }
  this.XoaNhanVien = function (maNV) {
    var index = this.TimViTri(maNV)
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  }

this.laychitietNV = function (maNV){
  var index = this.TimViTri(maNV)
  if(index !== -1){
    return  this.arr[index];
  }
};
 
  this.CapNhatNhanVien = function () { }

}
//cập nhật

