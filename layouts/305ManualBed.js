const db305ManualBed = require('../controllers/305manualbed')

async function get305ManualBed()
{
    const res = await db305ManualBed.getData305ManualBed()
    const prices = res[0]
    const np50 = res[1]
    const surface  = res[2]
    const accesoriesData = res[3]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    if(np50.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<np50.length; i++)
        {
            options[pSItems] = [
                {text: np50[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: np50[i].Item_Long_Desc, style: 'textotabla'},
                {text: np50[i].Size, style: 'textotabla', alignment: 'center'}, 
                {text: np50[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(np50[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    var options2 = []
    pSItems = 0

    options2[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'SIZE (L x W x H)', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    if(surface.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<surface.length; i++)
        {
            options2[pSItems] = [
                {text: surface[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: surface[i].Item_Long_Desc, style: 'textotabla'},
                {text: surface[i].Size, style: 'textotabla', alignment: 'center'}, 
                {text: surface[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(surface[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    if(accesoriesData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesoriesData.length; i++)
        {
            accesories[pSItems] = [
                {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
                {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
                {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
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
                                            {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {text: 'P1441B000001', style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "4 Corner Central Brake and Steer", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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
                                            {border: [false, false, false, false], colspan: 2, image: "images/305ManualBed.png", width: 240, height: 150, alignment: 'center'},
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
            }
        ]
    }
    else {
        table1 = [
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
                                            {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {text: 'P1441B000001', style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "4 Corner Central Brake and Steer", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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
                                            {border: [false, false, false, false], colspan: 2, image: "images/305ManualBed.png", width: 240, height: 150, alignment: 'center'},
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
            }
        ]
    }

    var table2 = []
    if(np50 > 0)
    {
        table2 = [
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
            }
        ]
    }

    var table3 = []
    if(surface.length > 0)
    {
        table3 = [
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
            }
        ]
    }

    var table4 = []
    if(accesoriesData.length > 0)
    {
        table4 = [
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
            }
        ]
    }
   
    const fecha = new Date();
    fecha.toLocaleDateString()

    var t305ManualBed = [
        "\n",
        "\n",
        "\n",
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
        { text: 'Mattress sold separately but shipped from same location.', style: 'parrafo' },
        "\n",
        table1,
        "\n",
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        //table2,
        { text: 'Country of origin: CHINA\n', style: 'parrafo' },
        table3,
        "\n",
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        { text: 'Country of Origin Accessories: USA (unless stated otherwise)\n', style: 'parrafo' },
        table4,
        {text: '', pageBreak: 'after'  },
    ]

    return t305ManualBed;
}

module.exports = {
    get305ManualBed : get305ManualBed,
}