const dbSynthetoSurfaces = require('../controllers/synthetosurfaces')

async function getSynthetoSurfaces()
{
    const res = await dbSynthetoSurfaces.getDataSyntethoSurfaces()
    
    const data1 = res[0]
    const data2 = res[1]
    const data3 = res[2]
    const data4 = res[3]

    var options =[]
    var pSItems = 0;

    options[pSItems] = [
        {text: "Option", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}
    ]

    pSItems++

    var table1 = [];
    if(data1.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/THERAPY2.png", width: 120, height: 60, alignment: 'center', colSpan: 2},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'THERAPY2', style: 'textotablacolorlarge', colSpan: 2, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P650A1', style: 'textotabla', alignment: 'center'},
                                    {text: 'P650A2', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Prone Mode (Head Only)', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Prone Mode (Chest, Abdomen, Pelvis) - requires AD322A proning accesory kit', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data1[0].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data1[1].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
                ]
            }
        ]
    }
    else {
        table1 = [
            {
                columns: [
                    {
                        width: 50,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/THERAPY2.png", width: 120, height: 60, alignment: 'center', colSpan: 2},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'THERAPY2', style: 'textotablacolorlarge', colSpan: 2, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P650A1', style: 'textotabla', alignment: 'center'},
                                    {text: 'P650A2', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Prone Mode (Head Only)', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Prone Mode (Chest, Abdomen, Pelvis) - requires AD322A proning accesory kit', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data1[0].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data1[1].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
                ]
            }
        ]
    }

    var table2 = [];
    if(data2.length > 0)
    {
        table2 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Option', style: "textotablabold", colSpan: 3},
                                    {},
                                    {}
                                ],
                                [
                                    {text: data2[0].Item_Long_Desc, style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data2[0].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data2[1].Price), style: 'textotabla', alignment: 'center'}
                                ]
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
                ]
            }
        ]
    }
    else {
        table2 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 70, 70],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Option', style: "textotablabold"},
                                    {},
                                    {}
                                ],
                                [
                                    {text: data2[0].Item_Long_Desc, style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data2[0].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data2[1].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
                                ]
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
                ]
            }
        ]
    }

    var table3 = [];
    if(data3.length > 0)
    {
        table3 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 40, 40, 40, 40],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/SYNTHETO.png", width: 120, height: 60, alignment: 'center', colSpan: 4},
                                    {},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'SYNTHETO', style: 'textotablacolorlarge', colSpan: 4, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P460A1', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A2', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A3', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A4', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Button control pendant', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Touch sensitive control pendant included with HR&RR option)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'XRay Sleeve/pouch', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Patient Exit Alert', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Wifi Connection included with HR&RR option)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'MicoClimate Management (MCM)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Mobilization and pressure ulcer modes by lateral rotation', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data3[0].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data3[1].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data3[2].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data3[3].Price), style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
                ]
            }
        ]
    }
    else {
        table3 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 40, 40, 40, 40],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {image: "images/SYNTHETO.png", width: 120, height: 60, alignment: 'center', colSpan: 4},
                                    {},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'SYNTHETO', style: 'textotablacolorlarge', colSpan: 4, fillColor: '#154898',  alignment: 'center'},
                                    {},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P460A1', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A2', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A3', style: 'textotabla', alignment: 'center'},
                                    {text: 'P460A4', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Button control pendant', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Touch sensitive control pendant included with HR&RR option)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'XRay Sleeve/pouch', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Patient Exit Alert', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Wifi Connection included with HR&RR option)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '○', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'MicoClimate Management (MCM)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'Mobilization and pressure ulcer modes by lateral rotation', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                                    {text: "NO-DATA", style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}
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
                ]
            }
        ]
    }

    var table4 = [];
    if(data4.length > 0)
    {
        table4 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 40, 40, 40, 40],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Options', style: "textotablabold", colSpan: 5},
                                    {},
                                    {},
                                    {},
                                    {}
                                ],
                                [
                                    {text: data4[0].Item_Long_Desc, style: 'textotabla'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[0].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[1].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[2].Price), style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: data4[3].Item_Long_Desc, style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[3].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'}
                                ]
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
                ]
            }
        ]
    }
    else {
        table4 = [
            {
                columns: [
                    {
                        width: 80,
                        text: ''
                    },
                    {
                        width: "*",
                        table: {
                            widths: ['*', 40, 40, 40, 40],
                            body: [
                                [
                                    {border: [false, false, false, false], text: 'Options', style: "textotablabold", colSpan: 5},
                                    {},
                                    {},
                                    {},
                                    {}
                                ],
                                [
                                    {text: data4[0].Item_Long_Desc, style: 'textotabla'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[0].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[1].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[2].Price), style: 'textotabla', alignment: 'center'}
                                ],
                                [
                                    {text: data4[3].Item_Long_Desc, style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(data4[3].Price), style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'},
                                    {text: "-", style: 'textotabla', alignment: 'center'}
                                ]
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
                ]
            }
        ]
    }

    var synthetoSurfaces = [
        "\n",
        "\n",
        "\n",
        { text: 'Powered Surfaces\n', style: 'header', tocItem: 'synthetosurfaces' },
        { text: 'Country of origin: Francia\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text: 'Therapy2 Air Mattress\n', style: 'subheader', tocItem: 'progressa', tocItem: "therapy" },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Maximum patient weight: 250 kg'},
                            { text: 'Alternating Low Pressure (ALP)'},
                            { text: 'Continous Low Pressure (CLP)'},
                            { text: 'Mobilization, pressure ulcer and pulmonary modes by lateral rotation'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Comfort Level Adiustment'},
                            { text: 'Patient Exit Alert'},
                            { text: 'MicoClimate Management (MCM)'},
                            { text: 'Touch sensitive control pendant'}
                        ]				
                }
            ]
        },
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: 'Syntheto Hybrid Mattress\n', style: 'subheader', tocItem: 'progressa', tocItem: "syntheto" },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Maximum patient weight : 250 kg'},
                            { text: 'Alternating Low Pressure (ALP)'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Foam Mode'},
                            { text: 'Comfort Level Adjustment'}
                        ]				
                }
            ]
        },
        "\n",
        table3,
        "\n",
        table4,
        "\n",
        { text: '* = standard', style: 'parrafo' },
        { text: '○ = optional', style: 'parrafo' },
        { text: '- = not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
    ]

    return synthetoSurfaces;
}

module.exports = {
    getSynthetoSurfaces : getSynthetoSurfaces,
}