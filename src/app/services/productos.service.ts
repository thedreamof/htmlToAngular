import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[];
  productoFiltrado: Producto[] = [];

  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    // tslint:disable-next-line: no-shadowed-variable
    return new Promise( ( resolve ) => {
      this.http.get('https://angular-html-8ea05.firebaseio.com/productos_idx.json')
      .subscribe(( res: Producto[]) => {
        this.productos = res;
        this.cargando = false;
        resolve();
      });
    });
  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-8ea05.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string) {
    if ( this.productos ) {
      this.filtrarProductos( termino );
    } else {
      this.cargarProductos().then( () => {
        this.filtrarProductos( termino );
      });
    }
  }

  filtrarProductos( termino: string ) {
    this.productoFiltrado = this.productos.filter(
      producto => producto.categoria.toLowerCase().includes(termino.toLowerCase())
    );
    console.log(this.productoFiltrado);
  }
}
