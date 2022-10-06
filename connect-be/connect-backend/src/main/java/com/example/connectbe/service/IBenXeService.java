package com.example.connectbe.service;

import com.example.connectbe.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBenXeService {
    Page<BenXe> findAllBenXe(Pageable pageable);

    void updateBenXe(BenXe benXe);

    BenXe findIdBenXe(Integer id);

    void createBenXe(BenXe benXe);

    void deleteBenXe(Integer id);
}
