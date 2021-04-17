const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  node: 'http://211.225.79.43:9200',
  auth: {
    username: 'elastic',
    password: 'cslab407'
  }
})
const XLSX = require('xlsx');
const moment = require('moment');


/*
const elastic = require('elasticsearch');

const client = new elastic.Client({
        //host:'http://211.225.65.36:9000',
        host:'http://211.225.79.43:9200', 
        
        auth: {
            //apiKey:"VTZBNnNYZ0IzaDk4VnBVMncwSXY6Mm93cmd2SUtRM2VXN20wclFmS0VLUQ=="
            username : 'elastic',
            password : 'cslab407'
        },
        log : 'info',
});
*/

function exportExcel(_file, _data) {
  // step 1. workbook 생성
  const wb = XLSX.utils.book_new();

  // step 2. 시트 만들기 
  let newWorksheet = excelHandler.getWorksheet(_data);

  // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
  XLSX.utils.book_append_sheet(wb, newWorksheet, _file);

  // step 4. 엑셀 파일 만들기 
  XLSX.writeFile(wb, _file +'.xlsx');
}


var excelHandler = {
  getExcelData: function () {
    return [];
  },
  getExcelData: function (_data) {
    let rs = [];
    _data.forEach(res => {
      let _tmp = res['@timestamp']
      _tmp = _tmp.replace("T", " ");
      _tmp = _tmp.replace("Z", "");
      let _time = moment(_tmp);
      _time.add(9, 'h');
      rs.push({ "IDN": res.IDN, "Time": _time.format("YYYY-MM-DD HH:mm:ss"), "DATA": res.DATA.value, "switch" : res.DATA.switch, "msgTYPE": res.msgTYPE });
    });
    return rs;
  },
  getWorksheet: function (_data) {
    return XLSX.utils.json_to_sheet(this.getExcelData(_data));
  }
}



async function s_query(_idn) {
  return new Promise( (resolve, reject) => {
    var list = [];
    var count = 0;

    client.search({
      index: _idn,
      scroll: '3s',
      size: 1000,
      body: {
        query: {
          "bool": {
            "must": [],
            "filter": [{
              "range": {
                "@timestamp": {
                  "gte": "2020-08-31T15:00:00.000Z",
                  "lte": "2021-03-31T14:59:59.000Z",
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
      }
    }, function getMoreDone(err, res) {
      if (err) { reject(err) };
      if (res.statusCode !== 200) {
        console.log(res);
        reject('errcode : ' + res.statuscode);
      } 
      else {
        //console.log(res.hits.total);
        //console.log(res.body.hits);

        count += res.body.hits.hits.length;

        for (dt of res.body.hits.hits) {
          list.push(dt['_source']);
        }
        console.log("qury count :"+list.length);

        if (count != res.body.hits.total.value) {
          client.scroll({
            scrollId: res.body._scroll_id,
            scroll: '3s'
          }, getMoreDone);
        }
        else {
          //console.log(list.length);
          resolve(list);
        }
      }
    })
  });
}


const idn = '0000000000000105';

let listidn = [
  "namf00000000064",
  "namf00000000065",
  "namf00000000066",
  "namf00000000067",
  "namf00000000068",
  "namf00000000069",
  "namf0000000006a",
  "namf0000000006b",
  "namf0000000006c",
  "namf0000000006d",
  "namf0000000006e",
  "namf0000000006f",
  "namf00000000070",
  "namf00000000071",
  "namf00000000072",
  "namf00000000073",
  "namf00000000074",
  "namf00000000075",
  "namf00000000076",
  "namf00000000077",
  "namf00000000078",
  "namf00000000079",
  "namf0000000007a",
  "namf0000000007b",
  "namf0000000007c",
  "namf0000000007d",
  "namf0000000007e",
  "namf0000000007f",
  "namf00000000080",
  "namf00000000081",
  "namf00000000082",
  "namf00000000083",
  "namf00000000084",
  "namf00000000085",
  "namf00000000086",
  "namf00000000087",
  "namf00000000088",
  "namf00000000089",
  "namf0000000008a",
  "namf0000000008b",
  "namf0000000008c",
  "namf0000000008d",
  "namf0000000008e",
  "namf0000000008f",
  "namf00000000090",
  "namf00000000091",
  "namf00000000092",
  "namf00000000093",
  "namf00000000094",
  "namf00000000095",
  "namf00000000096",
  "namf00000000097",
  "namf00000000098",
  "namf00000000099",
  "namf0000000009a",
  "namf0000000009b",
  "namf0000000009c",
  "namf0000000009d",
  "namf0000000009e",
  "namf0000000009f",
  "namf000000000a0",
  "namf000000000a1",
  "namf000000000a2",
  "namf000000000a3",
  "namf000000000a4",
  "namf000000000a5",
  "namf000000000a6",
  "namf000000000a7",
  "namf000000000a8",
  "namf000000000a9",
  "namf000000000b2",
  "namf000000000b3",
  "namf000000000b4",
  "namf000000000b5",
  "namf000000000b6",
  "namf000000000b8",
  "namf000000000b9",
  "namf000000000ba",
  "namf000000000bb",
  "namf000000000bc"        
]


listidn.forEach((idnlist) => {
    s_query(idnlist)
        .then(async (res) => {
            console.log("result data count : "+ idnlist +":" + res.length);
            await exportExcel(idnlist, res);
        })
        .catch(console.log);
})


/*

async function exce_write() {
    const wb = XLSX
        .utils
        .book_new();
    return new Promise(async (resolve, reject) => {
        await Promise
            .all( listidn.forEach( async (idnlist) => {
                s_query(idnlist)
                    .then(async (res) => {
                        console.log("result data count : ");
                        console.log(res.length);

                        let newWorksheet = excelHandler.getWorksheet(res);
                        await XLSX
                            .utils
                            .book_append_sheet(wb, newWorksheet, idnlist);
                    })
                    .catch(console.log);
            }))
            .then((res) => {
                resolve(wb);
            })
            .catch(console.log)

        })
}

const result = exce_write();
console.log(result);
console.log(typeof result);
XLSX.writeFile(result, 'OrderNode.xlsx');
*/