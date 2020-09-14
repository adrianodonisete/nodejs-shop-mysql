
function CURRENTDOLLARVALUE(date_entry) {
    // format dd/mm/yyyy to mm-dd-yyyy
    const str = new String(date_entry);
    const arr = date_entry.split('/');
    const day = arr[0];
    const month = arr[1];
    const year = arr[2];
    date_entry = encodeURI(month+'-'+day+'-'+year);
    console.log(date_entry);
    
    const url = "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=%27"+date_entry+"%27&$top=100&$format=json&$select=cotacaoCompra";
    return url;
    
    // const response = UrlFetchApp.fetch(url);
    // let ret = JSON.parse(response);

  
    // let dollar = '';
    // for (d of ret.value) {
    //   if (d.cotacaoCompra == undefined) {
    //     dollar = 0.0;
    //   } else {
    //     dollar = d.cotacaoCompra;
    //   }      
    // }
  
    // return dollar;
}

let d = new Date("2017-03-16T17:46:53.677");
console.log(d.toLocaleString("en-US"));

let d2 = new Date(d);
console.log(d2);
console.log(d2.toLocaleString("en-US"));

var day = d2.getDate() + "";
var month = (d2.getMonth() + 1) + "";
var year = d2.getFullYear() + "";

console.log(month+'-'+day+'-'+year);

// d = d.toLocaleString("pt-BR");
// console.log(CURRENTDOLLARVALUE(d));