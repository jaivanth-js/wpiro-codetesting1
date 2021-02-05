const express = require('express');

const app = express();
const port = 3000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submitSubsitute', (req, res) => {
    let REF_MSISDN = req.body.referenceData.REF_MSISDN;
    let REF_IMSI = req.body.referenceData.REF_IMSI;
    let REF_SERVPROFID = req.body.referenceData.REF_SERVPROFID;
    delete req.body.referenceData;
    let stringfied = JSON.stringify(req.body);
    let parsedJSON = JSON.parse(stringfied.replace(/{REF_MSISDN}/g, REF_MSISDN).replace(/{REF_IMSI}/g, REF_IMSI).replace(/{REF_SERVPROFID}/g, REF_SERVPROFID));
    res.send(parsedJSON);
});


app.listen(port, () => console.log(`server listening on ${port}`));

