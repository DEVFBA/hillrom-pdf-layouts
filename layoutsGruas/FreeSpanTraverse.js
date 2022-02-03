const dbFreeStand = require('../controllers/freestandingliftsystem')

async function getFreespanTraverse()
{
    const res = await dbFreeStand.getFreestanding()
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse3.png", width: 80, height: 40, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse3.png", width: 80, height: 40, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida5.length; i++)
    {
        if(i === 0 && salida5.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse4.png", width: 80, height: 40, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse4.png", width: 80, height: 40, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida6.length; i++)
    {
        if(i === 0 && salida6.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse5.png", width: 80, height: 40, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse5.png", width: 80, height: 40, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida6.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida7.length; i++)
    {
        if(i === 0 && salida7.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse6.png", width: 60, height: 40, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreespanTraverse6.png", width: 60, height: 40, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida7.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()
    
    var freespanTraverse = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Freespan™ Traverse', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freespantraverse"},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "FREESPAN TRAVERSE\n", style: "textotablaboldblack"},
                           {text: "Product specification for a complete product:\n", style: "textotabla"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-50 / 3103215-50) x 2 \nFreeSpan Upright Support (Prod. No. 3103515) \nFreeSpan Cross-beam (Prod. No. 3103020-3103040) \nStraight Rail H70, H100 or H140, \ndepending on cc-distance between the FreeSpan rails. \nEnd-stop (Prod. No. 3101060) \nTraverse Rail Carrier (3102531-3102532) \nParking Bracket FS Traverse (Prod. No. 3103502) \n(fits charger Prod. No. 3126101-3126104) \nLikorall/Multirall \nHand control \nSling bar / stretcher \nCharger \nSling\n", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanTraverse1.png", width: 100, height: 100, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\n\n\nMaximum load may vary between 200 kg (440 lbs) and 250 kg (550 lbs) depending on the length of the rail being used.', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "FREESPAN ULTRATWIN TRAVERSE\n", style: "textotablaboldblack"},
                           {text: "Product specification for a complete product:\n", style: "textotabla"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-3103135) x 2 \nFreeSpan Upright Support (Prod. No. 3103515) \nFreeSpan Cross-beam (Prod. No. 3103020-3103040) \nStraight Rail H70, H100 or H140, \ndepending on cc-distance between the \nFreeSpan rails End-stop (Prod. No. 3101060) x 2 \nTraverse Rail Carrier (3102531-3102532) x 2 \nUltra Traverse Damper (Prod. No. 3103604) \nParking Bracket FS Traverse (Prod. No. 3103502) x 2 \n(fits charger Prod. No. 3126101-3126104) \nLikorall x 2 \nHand control x 2 \nSling bar x 2 / stretcher \nCharger x 2 \nSling", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanTraverse2.png", width: 100, height: 90, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\n\n\nMax. load 460 kg (1014 lbs)', style: 'textotabla',  alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return freespanTraverse;
}

module.exports = {
    getFreespanTraverse : getFreespanTraverse,
}