const dbGolvo = require('../controllers/golvo')

async function getMobileLifts(pdfZone)
{
    const res = await dbGolvo.getGolvo(pdfZone)
    const generalData = res[0]
    const optionsData = res[1]
    const accesories1Data  = res[2]
    const accesories2Data  = res[3]
    const accesories3Data  = res[4]
    const accesories4Data  = res[5]

    var accesories = []
    var pSItems = 0

    if(accesories1Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesories1Data.length; i++)
        {
            if(i===0)
            {
                accesories[pSItems] = [
                    {text: accesories1Data[i].Part, style: 'textotabla'},
                    {text: accesories1Data[i].Item_Long_Desc, style: 'textotabla'},
                    {image: "images/Golvo4.png", width: 70, height: 30, alignment: 'center', rowSpan: accesories1Data.length},
                    {text: "$" + Intl.NumberFormat("en-IN").format(accesories1Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else 
            {
                accesories[pSItems] = [
                    {text: accesories1Data[i].Part, style: 'textotabla'},
                    {text: accesories1Data[i].Item_Long_Desc, style: 'textotabla'},
                    {},
                    {text: "$" + Intl.NumberFormat("en-IN").format(accesories1Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
        }
        /*TERMINA CICLO*/
    }
    

    if(accesories2Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesories2Data.length; i++)
        {
            if(i===0)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories2Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories2Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], image: "images/Golvo5.png", width: 70, height: 30, alignment: 'center', rowSpan: accesories2Data.length},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else if(i === accesories2Data.length-1)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, true], text: accesories2Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: accesories2Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(accesories2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories2Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories2Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories2Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
        }
        /*TERMINA CICLO*/
    }
    

    if(accesories3Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesories3Data.length; i++)
        {
            if(i===0)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories3Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories3Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], image: "images/Golvo7.png", width: 70, height: 50, alignment: 'center', rowSpan: accesories3Data.length},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories3Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else if(i === accesories3Data.length-1)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, true], text: accesories3Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: accesories3Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(accesories3Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories3Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories3Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories3Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
        }
        /*TERMINA CICLO*/
    }

    if(accesories4Data.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesories4Data.length; i++)
        {
            if(accesories4Data.length === 1)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, true], text: accesories4Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: accesories4Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], image: "images/Golvo6.png", width: 40, height: 30, alignment: 'center'},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(accesories4Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else if(i===0)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories4Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories4Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], image: "images/Golvo6.png", width: 40, height: 30, alignment: 'center', rowSpan: accesories4Data.length},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories4Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else if(i === accesories4Data.length-1)
            {
                accesories[pSItems] = [
                    {border: [true, false, true, true], text: accesories4Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: accesories4Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(accesories4Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
            else
            {
                accesories[pSItems] = [
                    {border: [true, false, true, false], text: accesories4Data[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: accesories4Data[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(accesories4Data[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
            
                pSItems++
            }
        }
        /*TERMINA CICLO*/
    }

    var generalDataBody = []
    pSItems = 0

    if(generalData[0] !== undefined)
    {
        var specifications = dividirCadena(generalData[0].Specifications, "Note");
        generalDataBody[pSItems] = [
            {text: '\n\n\n\n\n\n\n\n\n\n' + generalData[0].KitName, style: 'textotablaboldblacklarge', alignment: 'center', rowSpan: 5},
            {text: generalData[0].Id_Item, style: 'textotabla'},
            {text: [
                {text: generalData[0].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                {text: specifications[0], style: "textotabla"},
                {text: "\n\nNote" + specifications[1], style: "textotabla"}
            ]},
            { image: "images/Golvo1.png", width: 70, height: 80, alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(generalData[0].Price), style: 'textotabla', alignment: 'center'},
        ]

        pSItems++
    }
    else {
        generalDataBody[pSItems] = [
            {text: '\n\n\n\n\n\n\n\n\n\n\n' + "NO-DATA", style: 'textotablaboldblack', alignment: 'center', rowSpan: 5},
            {text: "NO-DATA", style: 'textotabla'},
            {text: [
                {text: "NO-DATA" + "\n", style: "textotablaboldblack"},
                {text: "NO-DATA", style: "textotabla"},
            ]},
            { image: "images/Golvo1.png", width: 70, height: 80, alignment: 'center'},
            {text: "NO-DATA", style: 'textotabla', alignment: 'center'},
        ]

        pSItems++
    }

    if(generalData[1] !== undefined)
    {
        var specifications = dividirCadena(generalData[0].Specifications, "Note");
        generalDataBody[pSItems] = [
            {},
            {text: generalData[1].Id_Item, style: 'textotabla'},
            {text: [
                {text: generalData[1].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                {text: specifications[0], style: "textotabla"},
                {text: "\n\nNote" + specifications[1], style: "textotabla"}
            ], style: 'textotabla'},
            { image: "images/Golvo2.png", width: 70, height: 80, alignment: 'center'},
            {text: "$" + Intl.NumberFormat("en-IN").format(generalData[1].Price), style: 'textotabla', alignment: 'center'},
        ]

        pSItems++
    }
    else {
        generalDataBody[pSItems] = [
            {},
            {text: "NO-DATA", style: 'textotabla'},
            {text: [
                {text: "NO-DATA" + "\n", style: "textotablaboldblack"},
                {text: "NO-DATA", style: "textotabla"},
            ], style: 'textotabla'},
            { image: "images/Golvo2.png", width: 70, height: 80, alignment: 'center'},
            {text: "NO-DATA", style: 'textotabla', alignment: 'center'},
        ]

        pSItems++
    }

    generalDataBody[pSItems] = [
        {},
        {text: 'Option', style: 'textotablaboldblacklarge', fillColor: '#dbdbdb', colSpan: 4},
        {}, 
        {}, 
        {}, 
    ]

    pSItems++

    if(optionsData[0] !== undefined)
    {
        generalDataBody[pSItems] = [
            {},
            {border: [true, false, true, false], text: optionsData[0].Id_Item, style: 'textotabla'},
            {border: [true, false, true, false], text: optionsData[0].Item_Long_Desc, style: 'textotabla'}, 
            { image: "images/Golvo3.png", width: 20, height: 30, alignment: 'center', rowSpan: 2},
            {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(optionsData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++
    }
    else {
        generalDataBody[pSItems] = [
            {},
            {border: [true, false, true, false], text: "NO-DATA", style: 'textotabla'},
            {border: [true, false, true, false], text: "NO-DATA", style: 'textotabla'}, 
            { image: "images/Golvo3.png", width: 20, height: 30, alignment: 'center', rowSpan: 2},
            {border: [true, false, true, false], text: "NO-DATA", style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++
    }

    if(optionsData[1] !== undefined)
    {
        generalDataBody[pSItems] = [
            {},
            {border: [true, false, true, true], text: optionsData[1].Id_Item, style: 'textotabla'},
            {border: [true, false, true, true], text: optionsData[1].Item_Long_Desc, style: 'textotabla'}, 
            {}, 
            {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(optionsData[1].Price), style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++
    }
    else {
        generalDataBody[pSItems] = [
            {},
            {border: [true, false, true, true], text: "NO-DATA", style: 'textotabla'},
            {border: [true, false, true, true], text: "NO-DATA", style: 'textotabla'}, 
            {}, 
            {border: [true, false, true, true], text: "NO-DATA", style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++
    }

    var table1 = [];
    if(accesories1Data.length > 0 || accesories2Data.length > 0 || accesories3Data.length > 0 || accesories4Data.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [80, "*", 80, 60],
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
            }
        ]
    }

    var mobileLifts = [
        "\n",
        "\n",
        "\n",
        { text: 'MOBILE LIFTS', style: 'header' },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: [
                            {text: 'GOLVO', style: 'textotablacolorlarge'},
                            {text: "Golvo", tocItem: "golvo", style: {fontSize: 0}}
                        ], fillColor: '#5bbccc',  alignment: 'center', },
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
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        {
            table: {
                widths: [80, 70, "*", 80, 60],
                body: generalDataBody
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
        {text: "ACCESORIES", style: "textotablaboldlarge"},
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        table1,
        {text: '', pageBreak: 'after'  },
    ]

    return mobileLifts;
}

function dividirCadena(cadenaADividir, separador) {
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
}

module.exports = {
    getMobileLifts : getMobileLifts,
}