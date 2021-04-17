const XLSX  = require('xlsx');
const fs    = require('fs');
const path = 'C:/Users/Lun/Documents/github/luka_study/elastic';



let lists = fs.readdirSync(path,{withFileTypes : true});

//let listf = list.files(path, pattern = '*.xlsx', full.name = Ture)


//console.log(lists);

const wb = XLSX.utils.book_new();

lists.forEach((res)=>{
    if( res.name.endsWith('.xlsx'))
    {
        let workbook = XLSX.readFile(path+"/"+res.name);  
        //let js = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames]);
        
        XLSX.utils.book_append_sheet(wb, workbook.Sheets[workbook.SheetNames], res.name.replace(".xlsx",""));
    }
});

XLSX.writeFile(wb, "oders"+'.xlsx');

