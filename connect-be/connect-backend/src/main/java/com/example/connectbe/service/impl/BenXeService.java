package com.example.connectbe.service.impl;

import com.example.connectbe.model.BenXe;
import com.example.connectbe.repository.IBenXeRepository;
import com.example.connectbe.service.IBenXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BenXeService implements IBenXeService {

    @Autowired
    private IBenXeRepository iBenXeRepository;

    @Override
    public Page<BenXe> findAllBenXe(Pageable pageable) {
        return this.iBenXeRepository.findAllBenXe(pageable);
    }

    @Override
    public void updateBenXe(BenXe benXe) {
        this.iBenXeRepository.updateBenXe(benXe.getLoaiXe().getId(),benXe.getNhaXe().getId(),benXe.getDiemDi()
        , benXe.getDiemDen(), benXe.getSoDienThoai(), benXe.getEmail(), benXe.getGioDi(),benXe.getGioDen(), benXe.getId());
    }

    @Override
    public BenXe findIdBenXe(Integer id) {
        return this.iBenXeRepository.findIdBenXe(id);
    }

    @Override
    public void createBenXe(BenXe benXe) {
        this.iBenXeRepository.createBenXe(benXe.getLoaiXe().getId(),benXe.getNhaXe().getId(),benXe.getDiemDi()
                , benXe.getDiemDen(), benXe.getSoDienThoai(), benXe.getEmail(), benXe.getGioDi(),benXe.getGioDen());
    }

    @Override
    public void deleteBenXe(Integer id) {
        this.iBenXeRepository.deleteBenXe(id);
    }
}
