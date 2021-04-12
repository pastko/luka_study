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
  XLSX.utils.book_append_sheet(wb, newWorksheet, _file.replace("*", ""));

  // step 4. 엑셀 파일 만들기 
  XLSX.writeFile(wb, _file.replace('*', '') + '.xlsx');
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
      rs.push({ "IDN": res.IDN, "Time": _time.format("YYYY-MM-DD HH:mm:ss"), "DATA": res.data, "RMSG": res.RMSG, "COMPANY": res.COMPANY });
    });
    return rs;
  },
  getWorksheet: function (_data) {
    return XLSX.utils.json_to_sheet(this.getExcelData(_data));
  }
}



async function s_query(_idn) {
  return new Promise((resolve, reject) => {
    var list = [];
    var count = 0;

    client.search({
      index: _idn,
      scroll: '5s',
      size: 100,
      body: {
        query: {
          "bool": {
            "must": [],
            "filter": [{
              "range": {
                "@timestamp": {
                  "gte": "2020-12-31T15:00:00.000Z",
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
        //console.log(list.length);

        if (count != res.body.hits.total.value) {
          client.scroll({
            scrollId: res.body._scroll_id,
            scroll: '5s'
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

s_query(idn).then((res) => {
  console.log("result data count : ");
  console.log(res.length);

  exportExcel(("NODE" + idn), res);
}).catch(console.log);

