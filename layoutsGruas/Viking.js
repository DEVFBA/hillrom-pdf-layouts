const dbViking = require('../controllers/viking')

async function getViking()
{
    const res = await dbViking.getViking()
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3  = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]
    const salida8 = res[7]
    const salida9 = res[8]

    var accesories = []
    var pSItems = 0

    for(var i=0; i<salida3.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], image: "images/Viking5.png", width: 70, height: 30, alignment: 'center', rowSpan: salida3.length},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida3.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/Viking6.png", width: 70, height: 30, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotabla'},
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
        if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/Viking7.png", width: 60, height: 60, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
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
                {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/Viking8.png", width: 70, height: 40, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/Viking8.png", width: 70, height: 40, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida6.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var viking = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'VIKING', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                body: [
                    [
                        {text: '\n\n\n\n\n\n\n\n\n\n\n' + salida1[0].KitName, style: 'textotablaboldblack', alignment: 'center', rowSpan: 7},
                        {text: salida1[0].Id_Item, style: 'textotabla'},
                        {text: [
                            {text: salida1[0].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                            {text: salida1[0].Specifications, style: "textotabla"},
                        ]},
                        { image: "images/Viking1.png", width: 70, height: 80, alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(salida1[0].Price), style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: salida1[1].Id_Item, style: 'textotabla'},
                        {text: [
                            {text: salida1[1].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                            {text: salida1[1].Specifications, style: "textotabla"},
                        ]},
                        { image: "images/Viking2.png", width: 70, height: 80, alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(salida1[1].Price), style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: salida1[2].Id_Item, style: 'textotabla'},
                        {text: [
                            {text: salida1[2].Item_Long_Desc + "\n", style: "textotablaboldblack"},
                            {text: salida1[2].Specifications, style: "textotabla"},
                        ]},
                        { image: "images/Viking3.png", width: 70, height: 80, alignment: 'center'},
                        {text: "$" + Intl.NumberFormat("en-IN").format(salida1[2].Price), style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: 'Option', style: 'textotablaboldblack', fillColor: '#dbdbdb', colSpan: 4},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: salida2[0].Id_Item, style: 'textotablacatoni'},
                        {border: [true, false, true, false], text: salida2[0].Item_Long_Desc, style: 'textotablacatoni'}, 
                        { image: "images/Viking4.png", width: 20, height: 30, alignment: 'center', rowSpan: 3},
                        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[0].Price), style: 'textotablacatoni', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: salida2[1].Id_Item, style: 'textotablacatoni'},
                        {border: [true, false, true, false], text: salida2[1].Item_Long_Desc, style: 'textotablacatoni'}, 
                        {},
                        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[1].Price), style: 'textotablacatoni', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, true], text: salida2[2].Id_Item, style: 'textotablacatoni'},
                        {border: [true, false, true, true], text: salida2[2].Item_Long_Desc, style: 'textotablacatoni'}, 
                        {}, 
                        {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[2].Price), style: 'textotablacatoni', alignment: 'center'}, 
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

    return viking;
}

module.exports = {
    getViking : getViking,
}