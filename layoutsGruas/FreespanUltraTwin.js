const dbFreeStand = require('../controllers/freestandingliftsystem')

async function getFreespanUltraTwin()
{
    const res = await dbFreeStand.getFreestanding()
    const salida8 = res[7]
    const salida9 = res[8]
    const salida10 = res[9]
    const salida11 = res[10]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida8.length; i++)
    {
        if(i === 0 && salida8.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin2.png", width: 50, height: 50, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin2.png", width: 50, height: 50, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida8.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida9.length; i++)
    {
        if(i === 0 && salida9.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin3.png", width: 60, height: 60, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin3.png", width: 60, height: 60, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida9.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida10.length; i++)
    {
        if(i === 0 && salida10.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin5.png", width: 60, height: 60, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin5.png", width: 60, height: 60, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida10.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida11.length; i++)
    {
        if(i === 0 && salida11.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin6.png", width: 60, height: 80, alignment: 'center', rowSpan: salida11.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanUltraTwin6.png", width: 60, height: 80, alignment: 'center', rowSpan: salida11.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida11.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()
    
    var freespanUltraTwin = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Freespan™ UltraTwin', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freespanultratwin"},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "Product specification for a complete product (cc 300):\n", style: "textotablaboldblack"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-3103150) x 2 \nUltraTwin Upright Support (Prod. No. 3103520) Likorall x 2 \nHand control x 2 / Ultra Control Unit \nSling bar x 2 / Ultra SlingBar \nCharger x 2 / Charger x 1 (when using Ultra Control Unit) Sling \nCC-distance 300 mm (12 in).\n", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanUltraTwin1.png", width: 70, height: 70, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\nMaximum load may vary between 400 kg (880 lbs) and 500 kg (1100 lbs) depending on the length of the rail being used.', style: 'textotabla',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        },
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {border: [true, false, false, true], text: [
                           {text: "Product specification for a complete product (cc 800):\n", style: "textotablaboldblack"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-3103150) x 2 \nUltraTwin Upright Support (Prod. No. 3103521) Likorall x 2 \nHand control x 2 \nUltraStretch (Prod. No. 3156058) Sling bar x 2 \nCharger x 2 \nLift sheet/lift strap/sling CC-distance 800 mm (32 in).", style: "textotabla"},
                        ]},
                        {border: [false, false, false, true], image: "images/FreespanUltraTwin4.png", width: 70, height: 70, alignment: 'center'},
                        {border: [false, false, true, true], text: '\n\nMaximum load may vary between 400 kg (880 lbs) and 500 kg (1100 lbs) depending on the length of the rail being used.', style: 'textotabla',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
                widths: [80, "*", 80, 60],
                body: accesories2
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

    return freespanUltraTwin;
}

module.exports = {
    getFreespanUltraTwin : getFreespanUltraTwin,
}