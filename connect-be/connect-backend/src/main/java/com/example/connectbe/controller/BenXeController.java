package com.example.connectbe.controller;

import com.example.connectbe.model.BenXe;
import com.example.connectbe.service.IBenXeService;
import com.example.connectbe.service.ILoaiXeService;
import com.example.connectbe.service.INhaXeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class BenXeController {

    @Autowired
    private IBenXeService iBenXeService;

    @Autowired
    private INhaXeService iNhaXeService;

    @Autowired
    private ILoaiXeService iLoaiXeService;

    @GetMapping("/nhaXeList")
    public ResponseEntity<?> getAllNhaXe() {
        return new ResponseEntity<>(iNhaXeService.findAllNhaXe(), HttpStatus.OK);
    }
    @GetMapping("/loaiXeList")
    public ResponseEntity<?> getAllLoaiXe() {
        return new ResponseEntity<>(iLoaiXeService.findAllLoaiXe(), HttpStatus.OK);
    }

    @GetMapping("/benXeList")
    public ResponseEntity<?> getAllBenXe(@RequestParam(defaultValue = "0", name = "page") Integer page) {
        return new ResponseEntity<>(iBenXeService.findAllBenXe(PageRequest.of(page, 5)), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getId(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(iBenXeService.findIdBenXe(id), HttpStatus.OK);
    }

    @PatchMapping("/benXeList")
    public ResponseEntity<?> update(@RequestBody BenXe benXe) {
        iBenXeService.updateBenXe(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @DeleteMapping("/benXeList/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id) {
        iBenXeService.deleteBenXe(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @PostMapping("/benXeList")
    public ResponseEntity<?> create(@RequestBody BenXe benXe) {
        iBenXeService.createBenXe(benXe);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
