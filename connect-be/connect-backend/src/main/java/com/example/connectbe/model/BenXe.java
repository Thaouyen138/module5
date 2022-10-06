package com.example.connectbe.model;

import javax.persistence.*;

@Entity(name = "ben_xe")
public class BenXe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "loai_xe",referencedColumnName = "id")
    private LoaiXe loaiXe;

    @ManyToOne
    @JoinColumn(name = "nha_xe", referencedColumnName = "id")
    private NhaXe nhaXe;

    @Column(name = "diem_di")
    private String diemDi;

    @Column(name = "diem_den")
    private String diemDen;

    @Column(name = "so_dien_thoai")
    private String soDienThoai;

    private String email;

    @Column(name = "gio_di", columnDefinition = "DATE")
    private String gioDi;

    @Column(name = "gio_den", columnDefinition = "DATE")
    private String gioDen;


    @Column(name = "status_delete", columnDefinition = "BIT")
    private Integer statusDelete = 0;

    public BenXe() {
    }

    public BenXe(Integer id, LoaiXe loaiXe, NhaXe nhaXe, String diemDi, String diemDen, String soDienThoai, String email, String gioDi, String gioDen, Integer statusDelete) {
        this.id = id;
        this.loaiXe = loaiXe;
        this.nhaXe = nhaXe;
        this.diemDi = diemDi;
        this.diemDen = diemDen;
        this.soDienThoai = soDienThoai;
        this.email = email;
        this.gioDi = gioDi;
        this.gioDen = gioDen;
        this.statusDelete = statusDelete;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LoaiXe getLoaiXe() {
        return loaiXe;
    }

    public void setLoaiXe(LoaiXe loaiXe) {
        this.loaiXe = loaiXe;
    }

    public NhaXe getNhaXe() {
        return nhaXe;
    }

    public void setNhaXe(NhaXe nhaXe) {
        this.nhaXe = nhaXe;
    }

    public String getDiemDi() {
        return diemDi;
    }

    public void setDiemDi(String diemDi) {
        this.diemDi = diemDi;
    }

    public String getDiemDen() {
        return diemDen;
    }

    public void setDiemDen(String diemDen) {
        this.diemDen = diemDen;
    }

    public String getSoDienThoai() {
        return soDienThoai;
    }

    public void setSoDienThoai(String soDienThoai) {
        this.soDienThoai = soDienThoai;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGioDi() {
        return gioDi;
    }

    public void setGioDi(String gioDi) {
        this.gioDi = gioDi;
    }

    public String getGioDen() {
        return gioDen;
    }

    public void setGioDen(String gioDen) {
        this.gioDen = gioDen;
    }

    public Integer getStatusDelete() {
        return statusDelete;
    }

    public void setStatusDelete(Integer statusDelete) {
        this.statusDelete = statusDelete;
    }
}
