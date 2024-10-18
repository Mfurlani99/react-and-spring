import { invoiceById } from "./data/invoices";

const findInvoicesByid =(id) => {
const promise = new Promise((resolve, reject) => {
    
  setTimeout (()=>{
    const result = invoiceById(id);

    if(result){
        resolve(result);
    }else{
        reject("no se puede enecontrar la factura o es inexistente");
    }


  },2500)

});

return promise;
}

findInvoicesByid(3).then(console.log).catch(console.error);