package com.example.connectbe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;
@Entity(name = "loai_xe")
public class LoaiXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ten_loai_xe")
    private String tenLoaiXe;

    @OneToMany(mappedBy = "loaiXe")
    @JsonBackReference
    private List<BenXe> benXe;

    public LoaiXe() {
    }

    public LoaiXe(Integer id, String tenLoaiXe, List<BenXe> benXe) {
        this.id = id;
        this.tenLoaiXe = tenLoaiXe;
        this.benXe = benXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenLoaiXe() {
        return tenLoaiXe;
    }

    public void setTenLoaiXe(String tenLoaiXe) {
        this.tenLoaiXe = tenLoaiXe;
    }

    public List<BenXe> getBenXe() {
        return benXe;
    }

    public void setBenXe(List<BenXe> benXe) {
        this.benXe = benXe;
    }
}

