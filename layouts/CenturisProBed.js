const dbCenturis = require('../controllers/centurisprobed')

async function getCenturisProBed()
{
    const res = await dbCenturis.getDataCenturis()
    const prices = res[0]
    const steeringCastor = res[1]
    const bedExtension  = res[2]
    const plugVoltagesData = res[3]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
        {text: 'X3', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
    ]
    pSItems++

    if(steeringCastor.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<steeringCastor.length; i++)
        {
            var price = ""
            if(steeringCastor[i].Print_Character !== null)
            {
                if(steeringCastor[i].Print_Character === "*")
                {
                    price = "*"
                }
                else {
                    price = "-"
                }
            }
            else {
                price = "$" + Intl.NumberFormat("en-IN").format(steeringCastor[i].Price)
            }

            options[pSItems] = [
                {text: steeringCastor[i].Id_Item, style: 'textotabla', alignment: 'center'},
                {text: steeringCastor[i].Item_Long_Desc, style: 'textotabla'},
                {text: price, style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
    
    var badExtensions = []
    pSItems = 0

    if(bedExtension.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<bedExtension.length; i++)
        {
            var price = ""
            if(bedExtension[i].Print_Character !== null)
            {
                if(bedExtension[i].Print_Character === "*")
                {
                    price = "*"
                }
                else {
                    price = "-"
                }
            }
            else {
                price = "$" + Intl.NumberFormat("en-IN").format(bedExtension[i].Price)
            }
    
            badExtensions[pSItems] = [
                {text: bedExtension[i].Id_Item, style: 'textotabla', alignment: 'center'},
                {text: bedExtension[i].Item_Long_Desc, style: 'textotabla'},
                {text: price, style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }
     
    var plug = []
    pSItems = 0

    if(plugVoltagesData.length > 0)
    {
    
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<plugVoltagesData.length; i++)
        {
            var price = ""
            if(plugVoltagesData[i].Print_Character !== null)
            {
                if(plugVoltagesData[i].Print_Character === "*")
                {
                    price = "*"
                }
                else {
                    price = "-"
                }
            }
            else {
                price = "$" + Intl.NumberFormat("en-IN").format(plugVoltagesData[i].Price)
            }
    
            plug[pSItems] = [
                {text: plugVoltagesData[i].Id_Item, style: 'textotabla', alignment: 'center'},
                {text: plugVoltagesData[i].Item_Long_Desc, style: 'textotabla'},
                {text: price, style: 'textotabla', alignment: 'center'}, 
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
                                width: 70,
                                text: ''
                            },
                            {
                                width: "*",
                                table: {
                                    widths: ["*", 130],
                                    body: [
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {border: [false, false, false, false], text: 'CENTURISPRO', style: 'textotablaboldlarge', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {text: 'X3', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            { image: "images/CenturyProBed.png", width: 150, height: 100, alignment: 'center'},
                                        ],
                                        [
                                            {text: "Sleep Deck Surface", style: 'textotabla'},
                                            {text: "Metal / HPL", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Selective lockout", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Split Siderails with integrated controls", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Bilateral Caregiver Integrated Control Panels", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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
                        ]
                    },
                    {
                        width: 70,
                        text: ''
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
                                width: 70,
                                text: ''
                            },
                            {
                                width: "*",
                                table: {
                                    widths: ["*", 130],
                                    body: [
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {border: [false, false, false, false], text: 'CENTURISPRO', style: 'textotablabold', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            {text: 'X3', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                                        ],
                                        [
                                            {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                            { image: "images/CenturyProBed.png", width: 150, height: 100, alignment: 'center'},
                                        ],
                                        [
                                            {text: "Sleep Deck Surface", style: 'textotabla'},
                                            {text: "Metal / HPL", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Selective lockout", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Split Siderails with integrated controls", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: "Bilateral Caregiver Integrated Control Panels", style: 'textotabla'},
                                            {text: "*", style: 'textotabla', alignment: 'center'},
                                        ],
                                        [
                                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
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
                        ]
                    },
                    {
                        width: 70,
                        text: ''
                    },
                ],
            }
        ]
    }

    var table2 = [];
    if(steeringCastor.length > 0)
    {
        table2 = [
            {
                columns: [
                    {
                        width: "*",
                        table: {
                            widths: [70, "*", 130],
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
                    {
                        width: 70,
                        text: ''
                    }
                ]
                
            }
        ]
    }

    var table3 = []
    if(bedExtension.length > 0)
    {
        table3 = [
            {
                columns: [
                    {
                        width: "*",
                        table: {
                            widths: [70, "*", 130],
                            body: badExtensions
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

    var table4 = []
    if(plugVoltagesData.length > 0)
    {
        table4 = [
            {
                columns: [
                    {
                        width: "*",
                        table: {
                            widths: [70, "*", 130],
                            body: plug
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

    var centurisProBed = [
        "\n",
        "\n",
        "\n",
        { text: 'Centuris™ Pro Bed', style: 'header', tocItem: 'centurisProBed'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Sliding Backrest (SlideGuard™)'},
                            { text: 'Electric knee break'},
                            { text: 'Manually adjustable foot section'},
                            { text: 'Intelligent AutoContour™'},
                            { text: 'Electric Trend/Rev. Trend with Line-Of-Site™ angle indicator'},
                            { text: 'Light grey frame (RAL7035)'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Mobile head section'},
                            { text: 'HOB angle indication'},
                            { text: 'Removable head & foot boards'},
                            { text: 'Steering castor at headend'},
                            { text: '150 mm Integral Castors'},
                            { text: 'Brake and steer at foot end'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Bilateral emergency CPR'},
                            { text: 'Central braking on 4 castors'},
                            { text: 'Four Lifting/IV Poles holders'},
                            { text: 'Battery back-up'},
                            { text: '4 bumpers'},
                            { text: '220 kg Safe Working Load'},
                        ]				
                },
            ]
        },
        table1,
        "\n",
        table2,
        { text: ' Bed Extension', style: 'textotablaboldlarge' },
        table3,
        { text: ' Plug and Voltage', style: 'textotablaboldlarge' },
        table4,
        "\n",
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
    ]

    return centurisProBed;
}

module.exports = {
    getCenturisProBed : getCenturisProBed,
}