import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { TotalComponent } from '../total/total.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ClientViewComponent, CompanyViewComponent, ListItemsComponent,  InvoiceViewComponent, TotalComponent, FormItemComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  constructor(private service: InvoiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }

  removeItem(id: number) {
    this.invoice = this.service.remove(id);
  }

  addItem(item: Item) {
    this.invoice = this.service.save(item);
  }

  downloadPdf() {
    const path = encodeURIComponent('C:/clientes/files/20538492028/anexo/2024/6/24/20537909171/20/20538492028-20-R001-00000003.pdf');
    const url = `http://localhost:8083/api/document/download?path=${path}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9...',
    });

    this.http.get(url, { headers, responseType: 'blob' }).subscribe((response: Blob) => {
      const filename = 'document.pdf'; // Puedes cambiarlo dinámicamente si deseas
      saveAs(response, filename); // Guarda el archivo
    });
  }

}