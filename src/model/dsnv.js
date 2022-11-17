function DanhSanhNhanVien() {
    this.arr = [];
    this.ThemNhanVien = function (NV) {
        this.arr.push(NV);
    };
this.TimViTri = function(maNv){
    var index = -1;
    for(i = 0; i<this.arr.length;i++){
      var NV =  this.arr[i];
      if(NV.maNV === maNv){
        index = i ;break;
      }
    }



}
    this.XoaNhanVien = function(maNv){
      var index = this.TimViTri(maNv)
        if(index !== -1){
        this.arr.splice(index,1);}
    }




    // this.TimViTri = function (taiKhoan) {
    //     var index = -1;
    //     for (var i = 0; i < this.arr.length; i++) {
    //         var NV = this.arr[i];
    //         if (NV.taiKhoan === taiKhoan) {
    //             index= i;
    //             break;
    //         }
    //     }


    //     return index ;
    // }


    // this.XoaNhanVien = function (taiKhoan) {
    //     var index = this.TimViTri(taiKhoan);
    //     if (index !== -1) {
    //         this.arr.splice(index, 1);
    //     }

    // }




    this.SuaNhanVien = function () { }
    this.CapNhatNhanVien = function () { }


}