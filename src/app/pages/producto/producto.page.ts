import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from '../../services/firestore.service';
import { Producto } from '../../shared/producto.interfaces';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  uid = '';

  producto: Producto = {
    uid:'',
    name: '',
    img: '',
    cantidad: null,
    precio: null,
    descripcion: ''
  }

  constructor(
    private activatedRouter: ActivatedRoute,
    private fs: FirestoreService
  ) { }

  ngOnInit() {
    this.uid = this.activatedRouter.snapshot.paramMap.get('id');
    this.getProducto(this.uid);
  }

  getProducto(uid:string){
    const path = this.uid ;
    this.fs.getDoc<Producto>(path, uid).subscribe(res => {
      this.producto = res;
      console.log(this.uid);
    })
    }

}
