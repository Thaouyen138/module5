package com.example.connectbe.service.impl;

import com.example.connectbe.model.LoaiXe;
import com.example.connectbe.model.NhaXe;
import com.example.connectbe.repository.INhaXeRepository;
import com.example.connectbe.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhaXeService implements INhaXeService {

    @Autowired
    private INhaXeRepository iNhaXeRepository;

    @Override
    public List<NhaXe> findAllNhaXe() {
        return this.iNhaXeRepository.findAllNhaXe();
    }
}
