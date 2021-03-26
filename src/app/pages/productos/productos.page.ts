import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Categoria } from 'src/app/shared/categoria.interface';
import { Producto } from '../../shared/producto.interfaces';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  uid = '';
  categoria: Categoria = {
    uid: '',
    name: '',
    img: ''
  };

  producto: Producto = {
    name: '',
    imagen: '',
    cantidad: null,
    precio: null,
    descripcion: ''
  }

  constructor(
    private activedRoter: ActivatedRoute,
    private fs: FirestoreService
  ) { }

  ngOnInit() {
   console.log(this.uid = this.activedRoter.snapshot.paramMap.get('id'));
    console.log(this.uid)
    this.getProu(this.uid);
  }

  getProductos(uid:string){
    const path = 'categorias';
    this.fs.getDoc<Categoria>(path, uid).subscribe(res => {
      this.categoria = res;
    })
  }

  getProu(uid:string){
  const path = 'categorias/' + this.uid + '/productos';
  this.fs.getDoc<Producto>(path, uid).subscribe(res => {
    this.producto = res;
  })
  }


}
