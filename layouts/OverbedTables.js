const axios = require('axios');

async function getOverbedTables()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var overbedTables = [
        '\n',
        { text: 'Overbed Tables', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: France', style: 'parrafo' },
        { text: '\n', style: 'textotabla' },
        { text: 'Overbed Table - TA270', style: 'subheader'},
        {
            style:'textolista',
            ul: [
                    { text: 'For more technical specifications see separate tech specs'},
                    { text: 'For colours see separate colours sheet'},
                ]		
        },
        {
            table: {
                widths: ["*", 80, 80,50],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'EOVERBEDTABLE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'TA270 FT', style: 'textotablaboldblack', alignment: 'center'},
                        {text: 'TA270 TT', style: 'textotablaboldblack', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'B01', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B02', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        { image: "images/OverbedTable1.png", width: 70, height: 80, alignment: 'center'},
                        { image: "images/OverbedTable2.png", width: 70, height: 80, alignment: 'center'},
                    ],
                    [
                        {text: 'Fixed table', style: 'textotabla', },
                        {text: "●", style: 'textotabla', alignment: 'center'},
                        {text: "-", style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Tilting table', style: 'textotabla', },
                        {text: "-", style: 'textotabla', alignment: 'center'},
                        {text: "●", style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$9,243", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$6,906", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                ]
            },
            layout: {
                hLineWidth: function () {
                    return  0.7;
                },
                vLineWidth: function () {
                    return 0.7;
                },
                hLineColor: function () {
                    return 'gray';
                },
                vLineColor: function () {
                    return 'gray';
                },
            }
        },
        {text: '', pageBreak: 'after'  },
    ]

    return overbedTables;
}

module.exports = {
    getOverbedTables : getOverbedTables,
}