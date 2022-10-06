package com.example.connectbe.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.List;

@Entity(name = "nha_xe")
public class NhaXe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String tenNhaXe;

    @OneToMany(mappedBy = "nhaXe")
    @JsonBackReference
    private List<BenXe> benXe;

    public NhaXe() {
    }

    public NhaXe(Integer id, String tenNhaXe, List<BenXe> benXe) {
        this.id = id;
        this.tenNhaXe = tenNhaXe;
        this.benXe = benXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenNhaXe() {
        return tenNhaXe;
    }

    public void setTenNhaXe(String tenNhaXe) {
        this.tenNhaXe = tenNhaXe;
    }

    public List<BenXe> getBenXe() {
        return benXe;
    }

    public void setBenXe(List<BenXe> benXe) {
        this.benXe = benXe;
    }
}
