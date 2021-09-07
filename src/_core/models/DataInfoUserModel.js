export class dataInfoUserModel {
    taiKhoan = "";
    matKhau = "";
    hoTen = "";
    email = "";
    soDT = "";
    maNhom = "";
    loaiNguoiDung = "";
    thongTinDatVe = new thongTinDatVe() ;
}

class thongTinDatVe {
    giaVe = "";
    hinhAnh = "";
    maVe = "";
    ngayDat = "";
    tenPhim = "";
    thoiLuongPhim = "";
    danhSachGhe = [
        {
            maHeThongRap: "",
            tenHeThongRap: "",
            maCumRap: "",
            tenCumRap: "",
            maRap: "",
            tenRap: "",
            maGhe: "",
            tenGhe: "",
        }
    ]
}