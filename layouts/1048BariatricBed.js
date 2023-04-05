const db1048BariatricBed = require('../controllers/1048bariatricbed')

async function get1048BariatricBed()
{
    const res = await db1048BariatricBed.getData1048BariatricBed();
    console.log(res)
    const prices = res[0]
    const np50 = res[1]
    const bl  = res[2]
    
    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                columns: [
                    {
                        width: "*",
                        table: {
                            widths: ["*", 70,100],
                            body: [
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'BARIATRICLTCBED', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'P1380C02', style: 'textotabla', alignment: 'center'},
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                                    {text: prices[0].Item, style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Options', style: 'textotablaboldlarge'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {text: 'Headboards/ Footboards (Must select Finish)', style: 'textotabla'},
                                    {text: '', style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(0), style: 'textotabla', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Surface (Entered Separate Line)', style: 'textotabla'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'NP50MAT', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
                                ],
                                [
                                    {text: np50[0].Item, style: 'textotabla'},
                                    {text: 'N5-P50A4F', style: 'textotabla'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(np50[0].Price), style: 'textotabla', alignment: 'center'},
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
                        width: "200",
                        image: "images/1048BariatricBed.png", width: 180, height: 90, alignment: 'center'
                    }
                ]
            }
        ]
    }
    else {
        table1 = [
            {
                columns: [
                    {
                        width: "*",
                        table: {
                            widths: ["*", 70,100],
                            body: [
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'BARIATRICLTCBED', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'P1380C02', style: 'textotabla', alignment: 'center'},
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                                    {text: 'NO-DATA', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                    {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Options', style: 'textotablaboldlarge'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {text: 'Headboards/ Footboards (Must select Finish)', style: 'textotabla'},
                                    {text: '', style: 'textotabla'},
                                    {text: "NO-DATA", style: 'textotabla', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                ],
                                [
                                    {border: [false, false, false, false], text: 'Surface (Entered Separate Line)', style: 'textotabla'},
                                    {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                    {text: 'NP50MAT', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
                                ],
                                [
                                    {text: 'NO-DATA', style: 'textotabla'},
                                    {text: 'N5-P50A4F', style: 'textotabla'},
                                    {text: "NO-DATA", style: 'textotabla', alignment: 'center'},
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
                        width: "200",
                        image: "images/1048BariatricBed.png", width: 180, height: 90, alignment: 'center'
                    }
                ]
            }
        ]
    }

    var table2 = []
    if(prices.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [100, 50, "*", 100],
                    body: [
                        [
                            {text: bl[0].Item, style: 'textotabla', alignment: 'center'},
                            {text: bl[0].Model, style: 'textotabla', alignment: 'center'},
                            {text: bl[0].Desc, style: 'textotabla'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(bl[0].Price), style: 'textotabla', alignment: 'center'},
                        ],
                        [
                            {text: bl[1].Item, style: 'textotabla', alignment: 'center'},
                            {text: bl[1].Model, style: 'textotabla', alignment: 'center'},
                            {text: bl[1].Desc, style: 'textotabla'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(bl[1].Price), style: 'textotabla', alignment: 'center'},
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
            }
        ]
    }
    else {
        table2 = [
            {
                table: {
                    widths: [100, 80, "*", 100],
                    body: [
                        {
                            text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                            {text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                            {text: 'NO-DATA', style: 'textotabla'},
                            {text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                        [
                            {text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                            {text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                            {text: 'NO-DATA', style: 'textotabla'},
                            {text: 'NO-DATA', style: 'textotabla', alignment: 'center'},
                        ]
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
            }
        ]
    }
   
    const fecha = new Date();
    fecha.toLocaleDateString()

    var t1048BariatricBed = [
        "\n",
        "\n",
        "\n",
        { text: '1048 Bariatric Bed', style: 'header', tocItem: '1048BariatricBed'},
        { text: '(Extended Care)\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Six button pendant control'},
                            { text: 'Mattress Stops located at the upper and lower sides of Frame and at Footend'},
                            { text: 'Drainage Bag Holder'},
                            { text: 'Head of Bed Angle Indicator'},
                            { text: '5" Casters'},
                            { text: 'Mattress Not Included'},
                        ]
                },
            ]
        },
        "\n",
        "\n",
        table1,
        "\n",
        { text: 'Finish for Headboards and Footboards', style: 'textotablaboldlarge' },
        { text: 'V02 Solara Oak', style: 'parrafo' },
        { text: 'V06 Acajou Mahogany (Matches 084)', style: 'parrafo' },
        { text: 'V07 American Natural (Matches 735)', style: 'parrafo' },
        { text: 'V08 Hayward Cherry', style: 'parrafo' },
        "\n",
        "\n",
        { text: 'Note: A frame and surface compatibility matrix is available on SalesForce (Internal Use Only Library-> HBSW). Compatibility has been defined per the FDA HBSW (Hospital Bed Safety Workgroup) guidance. For any questions on available surfaces please contact Customer Service.', style: 'parrafo' },
        "\n",
        { text: 'Frames: Other: Bariatric: LTC Bariatric Bed Accessories', style: 'textotablaboldlarge' },
        "\n",
        { text: 'BARIATRICLTCACC', style: 'textotablaboldlarge' },
        "\n",
        table2
    ]

    return t1048BariatricBed;
}

module.exports = {
    get1048BariatricBed : get1048BariatricBed,
}