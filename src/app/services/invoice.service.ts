import { Injectable } from '@angular/core';
import { invoiceData }  from '../data/invoice.data';
import { Invoice } from '../models/invoice';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData; 
  
  constructor() { }

  getInvoice(): Invoice {
    //const total = this.calculateTotal();
    this.invoice.total =this.calculateTotal();
    //return {... this.invoice, total};
    return this.invoice;
  }

  calculateTotal() {
    return this.invoice.items.reduce((calculator, item )=> calculator + (item.price*item.quantity), 0);
  }

}
