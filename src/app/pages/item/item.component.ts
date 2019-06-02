import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private router: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit() {
    this.router.params.subscribe( parametros => {
      this.productoService.getProducto(parametros.id)
        .subscribe( (producto: ProductoDescripcion ) => {
          this.producto = producto;
          this.id = parametros.id;
        });
    });
  }

}
