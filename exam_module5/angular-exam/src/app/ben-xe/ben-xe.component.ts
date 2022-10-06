import {Component, OnInit} from '@angular/core';
import {BenXeServiceService} from '../service/ben-xe-service.service';
import {NhaXeServiceService} from '../service/nha-xe-service.service';
import {LoaiXeServiceService} from '../service/loai-xe-service.service';
import {NhaXe} from '../model/nha-xe';
import {LoaiXe} from '../model/loai-xe';
import {BenXe} from '../model/ben-xe';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-ben-xe',
  templateUrl: './ben-xe.component.html',
  styleUrls: ['./ben-xe.component.css']
})
export class BenXeComponent implements OnInit {

  constructor(private benXeService: BenXeServiceService,
              private nhaXeService: NhaXeServiceService,
              private loaiXeService: LoaiXeServiceService,
              private toast: ToastrService) {
  }
  nhaXeList: NhaXe[];
  loaiXeList: LoaiXe[];
  benXeList: BenXe[];
  idToDelete = 1;
  page = 0;
  totalItems: any;

  benXeForm = new FormGroup(
    {
      id: new FormControl(''),
      loaiXe: new FormControl('', [Validators.required]),
      nhaXe: new FormControl('', [Validators.required]),
      diemDi: new FormControl('', [Validators.required]),
      diemDen: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gioDi: new FormControl('', [Validators.required]),
      gioDen: new FormControl('', [Validators.required]),
    });

  getAllNhaXe() {
    this.nhaXeService.getAll().subscribe(value => this.nhaXeList = value);
  }

  getAllLoaiXe() {
    this.loaiXeService.getAll().subscribe(value => this.loaiXeList = value);
  }

  getAll() {
    this.benXeService.getAll(this.page).subscribe(
      (value: any) => {
        this.benXeList = value.content;
        this.totalItems = value.totalElements;
      });
  }
  ngOnInit(): void {
    this.getAllLoaiXe();
    this.getAllNhaXe();
    this.getAll();

  }

  getPage(event: number) {
    this.page = event - 1;
    this.getAll();
  }

  edit(benXe: BenXe) {
    this.benXeForm.patchValue(benXe);
  }

  update() {
    const employee = this.benXeForm.value;
    this.benXeService.update(employee).subscribe(value => {
      },
      error => {
      },
      () => {
        this.getAll();
        this.benXeForm.reset();
        this.toast.success('Chỉnh sửa thành công!');
      });
  }

  compareWithId(item1, item2) {
    return item1 && item2 && item1.id === item2.id;
  }

  delete() {
    this.benXeService.delete(this.idToDelete).subscribe(
      value =>     this.getAll()
    );
    this.toast.success('Xóa Thành công !');
  }

  setDelete(id: number) {
    this.idToDelete = id;
  }

  onSubmit() {
    const benXe = this.benXeForm.value;
    this.benXeService.save(benXe).subscribe(
      value => {
      },
      error => {
      },
      () => {
        this.getAll();
        this.benXeForm.reset();
        this.toast.success('Thêm mới thành công!');
      }
    );
  }

  resetForm() {
    this.benXeForm.reset();
  }
}
