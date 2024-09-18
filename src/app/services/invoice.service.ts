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

  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return { ... this.invoice, total };
  }
  
  calculateTotal() {
    return this.invoice.items.reduce((calculator, item )=> calculator + (item.price*item.quantity), 0);
  }

}
