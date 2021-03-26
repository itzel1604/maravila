import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';
import { Categoria } from '../../shared/categoria.interface';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.page.html',
  styleUrls: ['./inventario.page.scss'],
})
export class InventarioPage implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private fs: FirestoreService,
  ) { }

  ngOnInit() {
    this.getCategorias();
  }

  getCategorias(){
    const path = 'categorias';
    this.fs.getCollection<Categoria>(path).subscribe(res => {
      this.categorias = res;
    })
  }

}
