function validation() {
    this.kiemtrarong = function (value, errorid, mess) {
        if (value === "") {
            getEle(errorid).innerHTML = mess;
            getEle(errorid).style.display = "block";
            return false
        }
        getEle(errorid).innerHTML = "";
        getEle(errorid).style.display = "none"
        return true;

    }
    this.kiemtradodaikytu = function (value, errorid, mess, min, max) {
        if (value.trim().length >= min && value.trim().length <= max) {
            getEle(errorid).innerHTML = "";
            getEle(errorid).style.display = "none"
            return true;
        }
        getEle(errorid).innerHTML = mess;
        getEle(errorid).style.display = "block"
        return false;
    }

    this.kiemtrachuoikytu = function (value, errorid, mess) {
        var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
        if (value.match(letter)) {
            getEle(errorid).innerHTML = "";
            getEle(errorid).style.display = "none"
            return true
        }
        getEle(errorid).innerHTML = mess;
        getEle(errorid).style.display = "block";
        return false
    }
    // this.kiemngay =function(value, errorid, mess){
    //     var letter = "/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/";
    //     if(value.match(letter)){
    //         getEle(errorid).innerHTML = "";
    //     getEle(errorid).style.display = "none"
    //         return true
    //     }
    //     getEle(errorid).innerHTML = mess;
    //     getEle(errorid).style.display = "block";

    //     return false
    // }
    this.kiemmatkhau = function (value, errorid, mess) {
        var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
        if (value.match(letter)) {
            getEle(errorid).innerHTML = "";
            getEle(errorid).style.display = "none"
            return true
        }
        getEle(errorid).innerHTML = mess;
        getEle(errorid).style.display = "block";
        return false
    }
    this.kiememail = function (value, errorid, mess) {
        var letter = "^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$";
        if (value.match(letter)) {
            getEle(errorid).innerHTML = "";
            getEle(errorid).style.display = "none"
            return true
        }
        getEle(errorid).innerHTML = mess;
        getEle(errorid).style.display = "block";
        return false
    }
    // this.kiemtraluong = function (value, errorid, mess){
    //     var so = "/^[0-9]+$/";
    //     if(value.match(so)){
    //         getEle(errorid).innerHTML = "";
    //         getEle(errorid).style.display = "none";
    //         return true;
    //     } 
    //     getEle(errorid).innerHTML = mess;
    //     getEle(errorid).style.display = "block";
    //     return false;
    // }

    this.kiemtranhanvien = function (idselect, errorid, mess) {
        if (getEle(idselect).selectedIndex !== 0) {
            getEle(errorid).innerHTML = "";
            getEle(errorid).style.display = "none"
            return true
        }
        getEle(errorid).innerHTML = mess;
        getEle(errorid).style.display = "block";
        return false
    }

    this.kiemtratrungmaNV = function (value, errorid, mess, data) {
        var trung = false;
        for (var i = 0; i < data.length; i++) {
            var NV = data[i];
            if (NV.maNV === value) {
                trung = true;
                break;
            }
        }
        if (trung) {
            getEle(errorid).innerHTML = mess;
            getEle(errorid).style.display = "block";
            return false;
        }
        getEle(errorid).innerHTML = "";
        getEle(errorid).style.display = "none"
        return true;
    }


}
