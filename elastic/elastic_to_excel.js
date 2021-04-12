let elastic = require('elasticsearch');
let client = new elastic.Client({
        host:'namooplus.iptime.org:9000',
        log : 'trace'
});
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
/*
const csvWriter = createCsvWriter({
  path: 'NODE_EL_13.csv',
  header: [

        {id: 'snode_id', tile: 'ID' },
        {id: '@timestamp', title: 'Time'},
        {id: 'DATAX', title: 'X'},
        {id: 'DATAY', title: 'Y'}
]

});
let idn = 'namf00000000013';
*/
/*
const csvWriter = createCsvWriter({
        path: 'NODE_105.csv',
        header: [
      
              {id: 'snode_id', tile: 'ID' },
              {id: '@timestamp', title: 'Time'},
              {id: 'data', title: 'Data'},
      ]
      
});
let idn = '0000000000000105';
*/
/*
let idn = [
"namf0000000001d*",
"namf0000000001f*",
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
]
*/

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
        "namf00000000050",
];

function s_Query_m(){
        return new Promise( ( resolve , reject ) =>{
                var list = [];
                var count = 0;

                client.search({
                        index   : idn,
                        size    : 500,
                        body    : {
                                "query": {
                                        "range": {
                                                "@timestamp": {
                                                        "gte": "now-30d",
                                                        "lte": "now"

                                                }

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
                },
                        function get(err,res)
                        {
                                if(err) reject(err);

                                for( dt of res.hits.hits ) {
                                        list.push({ "snode_id" : dt['_source'].snode_id , "DATAX" : dt['_source'].DATA.X , "DATAY" : dt['_source'].DATA.Y, "@timestamp" : dt['_source']['@timestamp'] });
                                        //console.log(dt['_source']);
                                }
                        }
                );
                setTimeout(function(){ resolve(list); }, 250);
  
                //resolve(list);
        });
}



async function s_Query(midn){
        return new Promise( async (resolve, reject ) =>{
        var list = [];
        var count = 0;

        await client.search({
                index   : midn,
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
                                                        "gte": "2020-06-10T15:00:00.000Z",
                                                        "lte": "2020-06-22T12:00:00.000Z",
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
                },
                function getMoreDone(err, res){
                    if(err) {console.log(err); reject(err)};

                    count += res.hits.hits.length;
                
                    for( dt of res.hits.hits ){
                        list.push(dt['_source']);
                    }
                    console.log(list.length);

                    if( count != res.hits.total.value )
                    {
                            client.scroll({
                                    scrollId : res._scroll_id,
                                    scroll : '10s'
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


idn.forEach( async ele => {
        console.log(ele);
        await s_Query(ele).then( async res => {
                //console.log(res);
                let csvWriter = createCsvWriter({
                        path: ele.replace("*","") + '.xlsx',
                        header: [
                              {id: 'IDN', title: 'IDN'},
                              {id: 'snode_id', title: 'ID' },
                              {id: '@timestamp', title: 'Time'},
                              {id: 'DATA', title: 'Data'},
                              {id: 'RMSG', title: 'MSG'},
                              {id: 'COMPANY', title: 'COMPANY'}
                      ],
                      encoding: 'ucs2'                      
                });
        
                await csvWriter
                .writeRecords(res)
                .then(()=> console.log('The CSV file was written successfully'));
        
        }).catch(err => console.log("elastic query err!"+ err));
});

