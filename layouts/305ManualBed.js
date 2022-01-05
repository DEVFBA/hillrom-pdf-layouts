const axios = require('axios');

async function get305ManualBed()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: "NP50 (non-powered) Surface MRS", style: 'textotabla'},
        {text: '80" x 35.5" x 6"', style: 'textotabla', alignment: 'center'}, 
        {text: "P50A7F", style: 'textotabla'},
        {text: "$462", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: "NP100 (non-powered) Surface", style: 'textotabla'},
        {text: '80" x 35.5" x 6"', style: 'textotabla', alignment: 'center'}, 
        {text: "P100A4", style: 'textotabla'},
        {text: "$770", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    var options2 = []
    pSItems = 0

    options2[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

     /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "SURFACE", style: 'textotabla', alignment: 'center'},
        {text: "NP50 SW - Sewn cover", style: 'textotabla'},
        {text: "198x90x14cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS028CN", style: 'textotabla'},
        {text: "$391", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

     /*ESTO VA EN UN CICLO*/
    accesories[pSItems] = [
        {text: "ENTER AS END ITEM", style: 'textotabla', alignment: 'center'},
        {text: "IV Pole (Made in CHINA)", style: 'textotabla'},
        {text: "P1445A", style: 'textotabla', alignment: 'center'}, 
        {text: "$108", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var t305ManualBed = [
        { text: '305 Manual Bed', style: 'header', tocItem: '305ManualBed'},
        { text: 'Country of origin: China\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'HiLow'},
                            { text: 'Articulating Backrest'},
                            { text: 'Clocking Split Siderails'},
                            { text: 'Gas-Assisted Manual Controls'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '(4) IV pole holders'},
                            { text: 'Blow-Molded Headboard and Footboards'},
                            { text: 'Steel deck'},
                            { text: 'Trendelenburg/12° Reverse Trendelenburg with angle indicator'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Safe Working load - 450 lbs (204kg)'},
                            { text: 'Corner Roller Bumpers'},
                            { text: 'Deck Length 80"'},
                        ]				
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 40,
                    text: ''
                },
                {
                    width: "*",
                    columns: [
                        {
                            width: 120,
                            text: ''
                        },
                        {
                            width: "*",
                            table: {
                                widths: ["*", 70],
                                body: [
                                    [
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                    ],
                                    [
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                        {text: 'P1441B000001', style: 'textotabla', alignment: 'center'},
                                    ],
                                    [
                                        {text: "4 Corner Central Brake and Steer", style: 'textotabla'},
                                        {text: "●", style: 'textotabla', alignment: 'center'},
                                    ],
                                    [
                                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                        {text: "$2,605", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                    ],
                                    [
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    ],
                                    [
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    ],
                                    [
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    ],
                                    [
                                        {border: [false, false, false, false], colspan: 2, image: "images/305ManualBed.png", width: 210, height: 150, alignment: 'center'},
                                        {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    ],
                                ]
                            }	,
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
                        {
                            width: 40,
                            text: ''
                        },
                    ]
                },
            ],
        },
        "\n",
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        {
            table: {
                widths: [70, "*", 70, 70, 70],
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
        { text: 'Country of origin: CHINA\n', style: 'parrafo' },
        {
            table: {
                widths: [70, "*", 70, 70, 70],
                body: options2
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
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        { text: 'Country of Origin Accessories: USA (unless stated otherwise)\n', style: 'parrafo' },
        {
            columns: [
                {
                    width: "*",
                    table: {
                        widths: [70, 290, 70, 70],
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
                {
                    width: 70,
                    text: ''
                }
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return t305ManualBed;
}

module.exports = {
    get305ManualBed : get305ManualBed,
}