package com.example.connectbe.repository;

import com.example.connectbe.model.NhaXe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface INhaXeRepository extends JpaRepository<NhaXe,Integer> {

    @Query(value = "SELECT * FROM nha_xe", nativeQuery = true)
    List<NhaXe> findAllNhaXe();
}
