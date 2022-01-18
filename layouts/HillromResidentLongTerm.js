const axios = require('axios');

async function getHillromResidentLongTerm()
{
    /*const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]*/

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
        {text: 'Sleep Deck: 76" Hard Pan', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: 'Sleep Deck: 76" Spring Fabric', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: 'Sleep Deck: 80" Hard Pan', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$v", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: 'Sleep Deck: 80" Spring Fabric', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "Pendant Control RB-PEN", style: 'textotabla'},
        {text: "$171", style: 'textotabla', alignment: 'center'},
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "Hearthside Headboards/ Footboards RB-HTH", style: 'textotabla'},
        {text: "$196", style: 'textotabla', alignment: 'center'},
        {text: "$196", style: 'textotabla', alignment: 'center'}, 
        {text: "$196", style: 'textotabla', alignment: 'center'}, 
        {text: "$196", style: 'textotabla', alignment: 'center'}, 
        {text: "$196", style: 'textotabla', alignment: 'center'}, 
        {text: "$196", style: 'textotabla', alignment: 'center'}, 
        {text: "$196", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "Assist Bar RB-AB", style: 'textotabla'},
        {text: "N/A", style: 'textotabla', alignment: 'center'},
        {text: "STND", style: 'textotabla', alignment: 'center'}, 
        {text: "$234", style: 'textotabla', alignment: 'center'}, 
        {text: "$234", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "$234", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "Foot Rails RB-FR", style: 'textotabla'},
        {text: "STND", style: 'textotabla', alignment: 'center'},
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'}, 
        {text: "N/A", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "NP100 Surface RB-NP1", style: 'textotabla'},
        {text: "$649", style: 'textotabla', alignment: 'center'},
        {text: "$649", style: 'textotabla', alignment: 'center'}, 
        {text: "$649", style: 'textotabla', alignment: 'center'}, 
        {text: "$649", style: 'textotabla', alignment: 'center'}, 
        {text: "$649", style: 'textotabla', alignment: 'center'}, 
        {text: "$649", style: 'textotabla', alignment: 'center'}, 
        {text: "$649", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
     /*TERMINA CICLO*/

    options[pSItems] = [
        {text: "LIST PRICE", style: 'textotablacolor', fillColor: '#546ce4'},
        {text: "$3,264", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: "$3,148", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$2,927", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$2,870", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$2,667", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$2,368", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        {text: "$2,570", style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
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
    accesories[pSItems] = [
        {text: "MDG", style: 'textotabla', alignment: 'center'},
        {text: "Vertical Oxygen Tank Holder (Compatible on Advanta2, CareAssist, Compella, TotalCare, Resident LTC, Stretcher, Centrella)", style: 'textotabla'},
        {text: "MS-P27601", style: 'textotabla', alignment: 'center'}, 
        {text: "$312", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

     accesories[pSItems] = [
        {border: [false, false, false, false], text: "RESIDENTACC", style: 'textotablaboldlarge', colSpan: 4,},
        {},
        {}, 
        {}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Ambulatory Assist Bar - Taupe", style: 'textotabla'},
        {text: "RB-P00070833", style: 'textotabla', alignment: 'center'}, 
        {text: "$233", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Assist Bar Set - Light Neutral", style: 'textotabla'},
        {text: "RB-P00070848", style: 'textotabla', alignment: 'center'}, 
        {text: "$217", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Battery Backup Unit", style: 'textotabla'},
        {text: "RB-P442A", style: 'textotabla', alignment: 'center'}, 
        {text: "$475", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Pendant Control", style: 'textotabla'},
        {text: "RB-P724A01", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Trapeze Support Bracket - US", style: 'textotabla'},
        {text: "RB-P846A01", style: 'textotabla', alignment: 'center'}, 
        {text: "$154", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Surface Retainers", style: 'textotabla'},
        {text: "RB-P864A", style: 'textotabla', alignment: 'center'}, 
        {text: "$56", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Foot Rails with Top Cane", style: 'textotabla'},
        {text: "RB-P868C01", style: 'textotabla', alignment: 'center'}, 
        {text: "$373", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Foot Rails Without Top Cane", style: 'textotabla'},
        {text: "RB-P868C02", style: 'textotabla', alignment: 'center'}, 
        {text: "$373", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "1/2 Length Head Rails - No Controls, Standard", style: 'textotabla'},
        {text: "RB-P869A01", style: 'textotabla', alignment: 'center'}, 
        {text: "$234", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "1/2 Length Head Rails - with Embedded Controls", style: 'textotabla'},
        {text: "RB-P869A02", style: 'textotabla', alignment: 'center'}, 
        {text: "$621", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Bed Extender", style: 'textotabla'},
        {text: "RB-P9912B01", style: 'textotabla', alignment: 'center'}, 
        {text: "$642", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
   

    var hillromResidentLongTerm = [
        { text: 'Hillrom® Resident® Long Term Care Bed', style: 'header', tocItem: 'compella'},
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
                widths: ["*", 30, 30, 30, 30, 30, 30, 30],
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
                        {text: "$3,264", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$3,148", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$2,927", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$2,870", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$2,667", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$2,368", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: '$2,570', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
                widths: ["*", 30, 30, 30, 30, 30, 30, 30],
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