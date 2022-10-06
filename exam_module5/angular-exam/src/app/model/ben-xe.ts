import {LoaiXe} from "./loai-xe";
import {NhaXe} from "./nha-xe";

export interface BenXe{
  id?: number;
  loaiXe?: LoaiXe;
  nhaXe?: NhaXe;
  diemDi?: string;
  diemDen?: string;
  soDienThoai?: string;
  email?: string;
  gioDi?: string;
  gioDen?: string;
}
