export class DataTicketModel {
    thongTinPhim = new ThongtinPhim();
    danhSachGhe = [];
}

export class TicKetModel {
    maLichChieu = "";
    danhSachVe = [
        {
            maGhe: "",
            giaVe: ""
        }
    ]
}

class ThongtinPhim {
    maLichChieu = "";
    tenCumRap = "";
    tenRap = "";
    diaChi = "";
    tenPhim = "";
    hinhAnh = "";
    ngayChieu = "";
    gioChieu = "";
}

class Ghe {
    maGhe = ""
    tenGhe = "";
    maRap = "";
    loaiGhe = "";
    stt = "";
    giaVe = "";
    daDat = "";
    taiKhoanNguoiDat = "";
}