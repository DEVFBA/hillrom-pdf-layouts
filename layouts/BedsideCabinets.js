const dbBedsideCabinets = require('../controllers/bedsidecabinetspremiumAOC')

async function getBedsideCabinets()
{
    const res = await dbBedsideCabinets.getBedsideCabinetsPremiumAOC()
    const prices = res[0]
    const optionsData = res[1]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'Options', style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: 'BSCM', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
        {text: 'BSCR', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
    ]
    pSItems++
    
    if(optionsData[0] !== undefined)
    {
        options[pSItems] = [
            {text: optionsData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[0].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    
    if(optionsData[1] !== undefined)
    {
        options[pSItems] = [
            {text: optionsData[1].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[1].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }

    if(optionsData[2] !== undefined)
    {
        options[pSItems] = [
            {text: optionsData[2].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[2].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    
    if(optionsData[3] !== undefined)
    {
        options[pSItems] = [
            {text: optionsData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionsData[3].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }

    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: 400,
                        table: {
                            widths: [140, 80, 80],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PREMIUMBEDSIDECABINET', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center', colSpan: 2},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'BSCM', style: 'textotablaboldblacklarge', alignment: 'center'},
                                    {text: 'BSCR', style: 'textotablaboldblacklarge', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'Metropolitan™', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'Areo™', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    { image: "images/BedsideCabinets1.png", width: 70, height: 70, alignment: 'center'},
                                    { image: "images/BedsideCabinets2.png", width: 70, height: 70, alignment: 'center'},
                                ],
                                [
                                    {text: '3 Drawers', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Castors', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},  
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
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
                    {
                        width: "*",
                        text: ''
                    },
                ]
            }
        ]
    }
    else {
        table1 = [
            {
                columns: [
                    {
                        width: 400,
                        table: {
                            widths: [140, 80, 80],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PREMIUMBEDSIDECABINET', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center', colSpan: 2},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'BSCM', style: 'textotablaboldblacklarge', alignment: 'center'},
                                    {text: 'BSCR', style: 'textotablaboldblacklarge', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'Metropolitan™', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'Areo™', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    { image: "images/BedsideCabinets1.png", width: 70, height: 70, alignment: 'center'},
                                    { image: "images/BedsideCabinets2.png", width: 70, height: 70, alignment: 'center'},
                                ],
                                [
                                    {text: '3 Drawers', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Castors', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},  
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                    {text: "NO-DATA", style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
                                    {text: "NO-DATA", style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
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
                    {
                        width: "*",
                        text: ''
                    },
                ]
            }
        ]
    }
    var table2 = []
    if(optionsData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [140, 80, 80, 80],
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
            }
        ]
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var bedsideCabinets = [
        "\n",
        "\n",
        "\n",
        { text: 'Bedside Cabinets', style: 'header', tocItem: "bedsideCabinets"},
        { text: 'Premium (AOC)\n', style: 'subheader' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Hardwood and Hardwood Veneer Drawer Fronts and Side Panels'},
                    { text: 'High Pressure Laminate Tops for Easy Cleaning'},
                    { text: 'Easy Clean Hardware Provides Beauty and Performance'},
                    { text: 'Generously Rounded Corners of Storage Drawers Make Cleaning Easier'},
                    { text: 'Easy-Roller Casters Make Moving Cabinets Simple'},
                    { text: 'Convenient Storage with Easy Reach'},
                ]		
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        {
            columns: [
                [
                    {text: 'Finish Options:', style: 'textotablaboldlarge' },
                    {text: '31M - Natural Maple', style: 'textotabla'},
                    {text: 'T9C - Wild Cherry', style: 'textotabla'},
                    {text: 'H4C - Dark Cherry', style: 'textotabla'},
                    {text: 'CCM - Colonial Cherry', style: 'textotabla'},
                    {text: 'MWM - Montana Walnut', style: 'textotabla'},
                    {text: 'HMM - Honey Maple', style: 'textotabla'},
                    {text: 'R3O - Light Oak', style: 'textotabla'},
                    {text: '82O- Medium Oak', style: 'textotabla'},
                    '\n',
                    { text: 'Powder Coat Options:', style: 'textotablaboldlarge' },
                    {text: '(Metropolitan Style only)', style: 'textotabla'},
                    {text: 'QSL - Metalic Quicksilver', style: 'textotabla'},
                    {text: 'GRA - Stonetone Graphite', style: 'textotabla'},
                    {text: 'IMP - Metallic Impala', style: 'textotabla'},
                    {text: 'ESP - Metallic Expresso', style: 'textotabla'},
                    {text: 'SAF - Mettallic Saffron', style: 'textotabla'},
                ],
                [
                    {text: 'Laminate Options:', style: 'textotablaboldlarge' },
                    {text: '734 - Natural Maple', style: 'textotabla'},
                    {text: '705 - Wild Cherry', style: 'textotabla'},
                    {text: '084 - Dark Cherry', style: 'textotabla'},
                    {text: '935 - Shaker Cherry (matches Colonial Cherry in wood finish)', style: 'textotabla'},
                    {text: '70T - Montana Walnut', style: 'textotabla'},
                    {text: 'WM9 - Honey Maple', style: 'textotabla'},
                    {text: 'MOK - Medium Oak', style: 'textotabla'},
                    {text: '293 - Almond Leather', style: 'textotabla'},
                    {text: '655 - Natural Legacy', style: 'textotabla'},
                    {text: '157 - Antique White', style: 'textotabla'},
                    {text: '462 - White Nebula', style: 'textotabla'},
                    {text: 'M07 - Light Neutral', style: 'textotabla'},
                ]
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return bedsideCabinets;
}

module.exports = {
    getBedsideCabinets : getBedsideCabinets,
}