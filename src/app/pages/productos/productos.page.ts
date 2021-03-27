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
  

  productos: Producto[] = [{
    uid:'',
    name: '',
    img: '',
    cantidad: null,
    precio: null,
    descripcion: ''
  }]


  constructor(
    private activatedRoter: ActivatedRoute,
    private fs: FirestoreService
  ) { }

  ngOnInit() {
   console.log(this.uid = this.activatedRoter.snapshot.paramMap.get('id'));
    this.getAllProductos();
  }


  getAllProductos(){
  const path = 'categorias/' + this.uid + '/productos';
  this.fs.getCollection<Producto>(path).subscribe(res => {
    this.productos = res;
    console.log(res);
  })
  }


}
