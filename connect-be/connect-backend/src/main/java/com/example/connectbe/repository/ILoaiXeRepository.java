package com.example.connectbe.repository;

import com.example.connectbe.model.LoaiXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILoaiXeRepository extends JpaRepository<LoaiXe,Integer> {

    @Query(value = "select * from loai_xe", nativeQuery = true)
    List<LoaiXe> findAllLoaiXe();

}
