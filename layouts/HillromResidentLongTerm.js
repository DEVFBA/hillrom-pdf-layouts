const dbHillromResident = require('../controllers/hillromresidentlongterm')

const fecha = new Date();
fecha.toLocaleDateString()

async function getHillromResidentLongTerm()
{
    const res = await dbHillromResident.getDataHillromResident()
    const pricesData = res[0]
    const optionsData = res[1]
    const miscAccesoriesData = res[2]
    const residentAccData = res[3]
    
    var options =[]
    var pSItems = 0;

    options[pSItems] = [
        {border: [false, false, false, false], text: "Options", style: 'textotablabold'},
        {text: "LTC-320", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: "LTC-310", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: "LTC-300", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: "LTC-250", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: "LTC-205", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: "LTC-105", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: "LTC-100", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/

    options[pSItems] = [
        {text: optionsData[0].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[0].Price), style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[1].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[1].Price), style: 'textotabla',alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[2].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[2].Price), style: 'textotabla',alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[3].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[3].Price), style: 'textotabla',alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[4].Item_Long_Desc, style: 'textotabla'},
        {text: "N/A", style: 'textotabla',alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[4].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[5].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[6].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[6].Price), style: 'textotabla',alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[7].Price), style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[8].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[9].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[10].Price), style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[11].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[12].Price), style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[13].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[13].Price), style: 'textotabla',alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[14].Price), style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[15].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[16].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[17].Price), style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[18].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[19].Price), style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: optionsData[20].Item_Long_Desc, style: 'textotabla'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[20].Price), style: 'textotabla',alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[21].Price), style: 'textotabla', alignment: 'center'},
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[22].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[23].Price), style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    
     /*TERMINA CICLO*/

    options[pSItems] = [
        {text: "LIST PRICE", style: 'textotablacolor', fillColor: '#546ce4'},
        {text: "$1,056.64", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: "$1,056.64", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$1,300", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$1,300", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$878.8", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$878.8", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$878.8", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
    ]

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {border: [false, false, false, false], text: "ACCESORIES", style: 'textotablaboldlarge', colSpan: 4,},
        {},
        {}, 
        {}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {border: [false, false, false, false], text: "MISCACCESORIES", style: 'textotablaboldlarge', colSpan: 4,},
        {},
        {}, 
        {}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i< miscAccesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: miscAccesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: miscAccesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: miscAccesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(miscAccesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
     /*TERMINA CICLO*/

     accesories[pSItems] = [
        {border: [false, false, false, false], text: "RESIDENTACC", style: 'textotablaboldlarge', colSpan: 4,},
        {},
        {}, 
        {}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i< residentAccData.length; i++)
    {
        accesories[pSItems] = [
            {text: residentAccData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: residentAccData[i].Item_Long_Desc, style: 'textotabla'},
            {text: residentAccData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(residentAccData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/
   

    const fecha = new Date();
    fecha.toLocaleDateString()

    var hillromResidentLongTerm = [
        "\n",
        "\n",
        "\n",
        { text: 'Hillrom® Resident® Long Term Care Bed', style: 'header', tocItem: 'hillromResident'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Fully Electric High/Low, Head and Knee Movement'},
                            { text: 'Footend Control Lockout Panel'},
                            { text: 'Head of Bed angle indicators'},
                            { text: 'AutoContour™'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '110 Voltage'},
                            { text: '3" Casters'},
                            { text: 'Wall Bumpers'},
                            { text: 'Surface Retainer'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Taupe Paint'},
                            { text: 'Safe Working Load: 400 lbs (181 kgs)'},
                            { text: 'Bed Weight: 275 lbs (125 kgs)'},
                        ]				
                },
                {
                    image: "images/HillromResidentLong.png", width: 100, height: 50, alignment: 'center',
                }
            ]
        },
        "\n",
        {
            table: {
                widths: ["*", 35, 35, 35, 35, 35, 35, 35],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'RESIDENTLTCBED', style: 'textotablacolor', colSpan: 7, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P870', style: 'textotablaboldblack', colSpan: 7, alignment: 'center'},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Special Features', style: 'textotablabold'},
                        {text: 'LTC-320', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'LTC-310', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LTC-300', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LTC-250', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'LTC-205', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LTC-105', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LTC-100', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Head Rails with Controls', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Head Rails No Controls', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Foot Rails No Controls', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Sleep Deck Options. Must Choose One', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Pendant', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '2 Floor Brake', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '4 Floor Brake', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'No Head/Foot Rails', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[1].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[2].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[3].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[4].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[5].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$" + Intl.NumberFormat("en-IN").format(pricesData[6].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        "\n",
        {
            table: {
                widths: ["*", 35, 35, 35, 35, 35, 35, 35],
                body: options
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
        "\n",
        { text: "Hearthside Laminate Options Available", style: 'parrafo' },
        {
            columns: [
                [
                    { text: "ROK - Light Oak", style: 'textolista2' },
                    { text: "MOK - Medium Oak", style: 'textolista2' },
                    { text: "734 - Natural Maple", style: 'textolista2' },
                    { text: "705 - Wild Cherry", style: 'textolista2' },
                    { text: "084 - Dark Cherry", style: 'textolista2' },
                ],
                [
                    { text: "M07 - Light Neutral", style: 'textolista2' },
                    { text: "70T - Montana Walnut", style: 'textolista2' },
                    { text: "935 - Shaker Cherry", style: 'textolista2' },
                    { text: "WM9 - Honey Maple", style: 'textolista2' },
                ],
                [
                    { image: "images/HillromResidentLong2.png", width: 130, height: 70, alignment: 'left'},
                ],
            ]
        },
        {
            table: {
                widths: [50, "*", 50, 50],
                body: accesories
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

    return hillromResidentLongTerm;
}

module.exports = {
    getHillromResidentLongTerm : getHillromResidentLongTerm,
}