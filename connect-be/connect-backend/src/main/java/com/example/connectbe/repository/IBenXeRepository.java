package com.example.connectbe.repository;

import com.example.connectbe.model.BenXe;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;

@Repository
@Transactional
public interface IBenXeRepository extends JpaRepository<BenXe,Integer> {

    @Query(value = "select  * from ben_xe where status_delete = 0", nativeQuery = true)
    Page<BenXe> findAllBenXe(Pageable pageable);

    @Query(value = "select * from ben_xe where id = :id",nativeQuery = true)
    BenXe findIdBenXe(@Param("id") Integer id);

    @Modifying
    @Query(value = "update ben_xe set loai_xe = :loaiXe,nha_xe = :nhaXe,diem_di = :diemDi, diem_den = :diemDen," +
            " so_dien_thoai = :soDienThoai, email = :email, gio_di = :gioDi, gio_den =:gioDen  where id = :id", nativeQuery = true)
    void updateBenXe(@Param("loaiXe") Integer loaiXe, @Param("nhaXe") Integer nhaXe, @Param("diemDi") String diemDi,
                @Param("diemDen") String diemDen, @Param("soDienThoai") String soDienThoai, @Param("email") String email,
                @Param("gioDi") String gioDi, @Param("gioDen") String gioDen, @Param("id") Integer id);

    @Modifying
    @Query(value = "update ben_xe set status_delete = 1 where id = :id",nativeQuery = true)
    void deleteBenXe(@Param("id") Integer id);

    @Modifying
    @Query(value = "insert INTO ben_xe values (null , :diemDen, :diemDi, :email, :gioDen, :gioDi, :soDienThoai, 0, :loaiXe, :nhaXe)", nativeQuery = true)
    void createBenXe( @Param("loaiXe") Integer loaiXe, @Param("nhaXe") Integer nhaXe, @Param("diemDi") String diemDi,
                 @Param("diemDen") String diemDen, @Param("soDienThoai") String soDienThoai, @Param("email") String email,
                 @Param("gioDi") String gioDi, @Param("gioDen") String gioDen);

}
