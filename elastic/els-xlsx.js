/*
const elastic = require('elasticsearch');
const moment = require('moment');
const client = new elastic.Client({
        //host:'http://211.225.65.36:9000',
        host:'http://211.225.79.43:9200',
        auth: {
                apiKey: "VTZBNnNYZ0IzaDk4VnBVMncwSXY6Mm93cmd2SUtRM2VXN20wclFmS0VLUQ=="
        },
        log : 'info',
});
*/
const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'http://211.225.79.43:9200',
  auth: {
    username: 'elastic',
    password: 'cslab407'
  }
})
const XLSX = require('xlsx');


/*
let idn = [
    "namf0000000001d*",
    "namf0000000001e*",
    "namf0000000001f*",
    "namf00000000020*",
    "namf00000000021*",
    "namf00000000022*",
    "namf00000000023*",
    "namf00000000024*", 
    "namf00000000025*",
    "namf00000000026*",
    "namf00000000027*",
    "namf00000000028*",
    "namf00000000029*",
    "namf0000000002a*",
    "namf0000000002b*",
    "namf0000000002c*",
    "namf0000000002d*",
    "namf0000000002e*",
    "namf0000000002f*",
    "namf00000000030*",
    "namf00000000031*",
    "namf00000000032*",
    "namf00000000033*",
    "namf00000000034*",
    "namf00000000035*",
    "namf00000000036*",
    "namf00000000037*",
    "namf00000000038*",
    "namf00000000039",
    "namf0000000003a*",
    "namf0000000003b*",
    "namf0000000003c*",
    "namf0000000003d*",
    "namf0000000003e*",
    "namf0000000003f*",
    "namf00000000040*",
    "namf00000000041*",
    "namf00000000042*",
    "namf00000000043*",
    "namf00000000044*",
    "namf00000000045*",
    "namf00000000046*",
    "namf00000000047*",
    "namf00000000048*",
    "namf00000000049*",
    "namf0000000004a*",
    "namf0000000004b*",
    "namf0000000004c*",
    "namf0000000004d*",
    "namf0000000004e*",
    "namf0000000004f*",
    "namf00000000050*",
    "namf00000000051*",
    "namf00000000052*",
    "namf00000000053*"
    ]*/
    /*
    let idn = [
        "namf0000000001d",
        "namf0000000001e",
        "namf0000000001f",
        "namf00000000021",
        "namf00000000025",
        "namf00000000027",
        "namf0000000002a",
        "namf0000000002c",
        "namf0000000002d",
        "namf0000000002f",
        "namf00000000031",
        "namf00000000034",
        "namf00000000035",
        "namf00000000037",
        "namf00000000039",
        "namf0000000003a",
        "namf0000000003f",
        "namf00000000040",
        "namf00000000041",
        "namf00000000042",
        "namf0000000004c",
        "namf0000000004d",
        "namf0000000004e",
        "namf0000000004f",
        "namf00000000050",*/
//];

function exportExcel(_file,_data){ 
    // step 1. workbook 생성
    const wb = XLSX.utils.book_new();

    // step 2. 시트 만들기 
    let newWorksheet = excelHandler.getWorksheet(_data);
    
    // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
    XLSX.utils.book_append_sheet(wb, newWorksheet, _file.replace("*",""));

    // step 4. 엑셀 파일 만들기 
    XLSX.writeFile(wb, _file.replace('*','')+'.xlsx');
}

var excelHandler = {    
    getExcelData : function(){
        return [{'name':'삼성 갤럭시 s11' , 'price':'200000'}, {'name':'삼성 갤럭시 s11' , 'price':'200000'}]; 
    },
    getExcelData : function(_data){
        let rs = [];
        _data.forEach(res => {
            let _tmp = res['@timestamp']
            _tmp = _tmp.replace("T"," ");
            _tmp = _tmp.replace("Z","");
            let _time = moment(_tmp);
            _time.add(9,'h');            
            rs.push({ "IDN" : res.IDN,  "Time" : _time.format("YYYY-MM-DD HH:mm:ss"), "DATA" : res.data  , "RMSG" : res.RMSG, "COMPANY" : res.COMPANY });
        });
        return rs;
    },
    getWorksheet : function(_data){
        return XLSX.utils.json_to_sheet(this.getExcelData(_data));
    }
}


async function s_Query(midn){
    return new Promise( async (resolve, reject ) =>{
    var list = [];
    var count = 0;

    await client.search({
            index   : midn,
            scroll  :'5s',
            size    : 10,
            body    : {
                    query   :{
                    "bool": {
                             "must": [],
                             "filter" : [{
                                "range": {
                                        "@timestamp": {
                                                "gte": "2020-11-30T15:00:00.000Z",
                                                "lte": "2021-01-29T14:59:59.000Z",
                                                "format": "strict_date_optional_time"
                                        }
                                }
                            }],
                            "must_not": []
                            }
                    },
                    "sort": [
                            {
                    
                                    "@timestamp": {
                                        "order": "desc"
                                    }
                            }
                    ]
                },
                ignore : [404]
            },
            async function getMoreDone(err, res){
                if(err) {console.log(err); reject(err)};
                //console.log(res);
                count += res.hits.hits.length;
                
                for( dt of res.hits.hits ){
                        list.push(dt['_source']);
                }
                console.log(list.length);

                if( count != res.hits.total.value )
                {
                        await client.scroll({
                                scrollId : res._scroll_id,
                                scroll   : '5s'
                        }, getMoreDone );
                }
                else
                {
                        //console.log(list.length);
                        resolve(list);
                }
        });
    });
}




function els(INDXarray){
    var result_list = [];
    //var size = INDXarray.length;  
    var count = 0;  
    var list = [];
    return new Promise( async ( resolve, reject ) =>{
      await Promise.all( INDXarray.map(async element => {
          var list = [];
          const res = await client.search({
            index   : element,
            scroll  :'10s',
            size    : 1000,
            body    : {
                    query   :{
                    "bool": {
                             "must": [{
                                    "match_all": {}
                            },
                            {
                                    "range": {
                                            "@timestamp": {
                                                    "gte": "2021-01-01T15:00:00.000Z",
                                                    "lte": "2021-01-02T14:59:59.000Z",
                                                    "format": "strict_date_optional_time"
                                                  }
                                    }
                            }],
                            "must_not": []
                            }
                    },
                    "sort": [
                            {
                    
                                    "@timestamp": {
                                        "order": "asc"
                                    }
                            }
                    ]
                },
                ignore : [404]
          }); 
          for( dt of res.hits.hits ){
            list.push(dt['_source']);
          }
          result_list = result_list.concat(list);
          //console.log(result_list.length);  
          
      })).then( res =>{
        //console.log(result_list.length);  
        resolve(result_list);
      }).catch( err => { 
        //console.log(err); reject(err); 
      });
    });
}

//['0000000000000100','0000000000000103','0000000000000104','0000000000000105']
let idn = '0000000000000100';
//let idn = '0000000000000back105';
/*
els(idn).then((res)=>{
    console.log(res.length);
    exportExcel(("NODE"+idn),res);
}).catch(err=>console.log(err));

*/

s_Query(idn).then((res)=>{
        console.log(res.length);
        exportExcel(("NODE"+idn),res);
}).catch(err=>console.log(err));

       
   


