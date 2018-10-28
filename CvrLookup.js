
const http = require('http');

function SeachCompany(firmanavn, callback) {
    // console.log(firmanavn);
    // Her skal den hente firmaet fra CVR  API'et
    // http://cvrapi.dk/api?search=Erhvervsakademi%20Sj%C3%A6lland&country=DK
    let url = "/api?search="+ encodeURI(firmanavn) + "&country=DK";


    //data hvor den skal tage infomationer fra.
    const options = {
        hostname: 'cvrapi.dk',
        path: url,
        headers: { 'User-Agent': 'EASJ Test' }
    }

    http.get(options, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // her er information modtager, den printer det ud
        resp.on('end', () => {
            let virkObj = JSON.parse(data);
            //console.log(virkObj.vat);
            //console.log(virkObj.address);
            callback(virkObj);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}



exports.returnByName = SeachCompany;



