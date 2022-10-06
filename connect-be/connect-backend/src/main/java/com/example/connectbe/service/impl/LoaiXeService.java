package com.example.connectbe.service.impl;

import com.example.connectbe.model.LoaiXe;
import com.example.connectbe.repository.ILoaiXeRepository;
import com.example.connectbe.service.ILoaiXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiXeService implements ILoaiXeService {

    @Autowired
    private ILoaiXeRepository iLoaiXeRepository;

    @Override
    public List<LoaiXe> findAllLoaiXe() {
        return this.iLoaiXeRepository.findAllLoaiXe();
    }
}
