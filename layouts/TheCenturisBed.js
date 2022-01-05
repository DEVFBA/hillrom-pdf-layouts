const dbCenturis = require('../controllers/centuris')

async function getTheCenturisBed()
{
    const res = await dbCenturis.getDataCenturis()
    const prices = res[0]
    const brake = res[1]
    const countryOfOrigin  = res[2]
    const voltaje = res[3]
    const mattress = res[4]
    const np50 = res[5]
    const surface = res[6]
    const accesoriesData = res[7]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'C', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'D', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Brake", style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++
    
    var i=0;
    var brakeFlag = false
    while(brakeFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*2
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< brake.length && countC<2)
        {
           precios[preciosCount] = brake[j].Price
           printCaracter[preciosCount] = brake[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: brake[j-1].Id_Item,
            Item_Long_Desc: brake[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;

        if(data.Print_Character[0] !== null)
        {
            if(data.Print_Character[0] === "*")
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }
        }
        else {
            precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
        }

        if(data.Print_Character[1] !== null)
        {
            if(data.Print_Character[1] === "*")
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }
        }
        else {
            precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
        }
        
        options[pSItems] = [
            {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= brake.length)
        {
            brakeFlag = true
        }
        i++
    }

    options[pSItems] = [
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    options[pSItems] = [
        {text: 'Country Of Origin', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    
     i=0;
     var countryOfOriginFlag = false
     while(countryOfOriginFlag === false)
     {
         var j;
         if(i===0)
         {
             j=0
         }
         else {
             j = i*2
         }
         var precios = []
         var preciosCount = 0
         var countC=0
         var printCaracter = []
         while(j< countryOfOrigin.length && countC<2)
         {
            precios[preciosCount] = countryOfOrigin[j].Price
            printCaracter[preciosCount] = countryOfOrigin[j].Print_Character
            preciosCount++
            j++
            countC++
         }
         var data = {
             Id_Item: countryOfOrigin[j-1].Id_Item,
             Item_Long_Desc: countryOfOrigin[j-1].Item_Long_Desc,
             Prices: precios,
             Print_Character: printCaracter
         }
 
         var precio1;
         var precio2;
 
         if(data.Print_Character[0] !== null)
         {
             if(data.Print_Character[0] === "*")
             {
                 precio1 = "●"
             }
             else {
                 precio1 = "-"
             }
         }
         else {
             precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
         }
 
         if(data.Print_Character[1] !== null)
         {
             if(data.Print_Character[1] === "*")
             {
                 precio2 = "●"
             }
             else {
                 precio2 = "-"
             }
         }
         else {
             precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
         }
         
         options[pSItems] = [
             {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
             {text: data.Item_Long_Desc, style: 'textotabla'},
             {text: precio1, style: 'textotabla', alignment: 'center'}, 
             {text: precio2, style: 'textotabla', alignment: 'center'}, 
         ]
 
         pSItems++
 
         //console.log(data)
 
         if(j >= countryOfOrigin.length)
         {
            countryOfOriginFlag = true
         }
         i++
     }

    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    options[pSItems] = [
        {text: 'Voltaje', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<voltaje.length; i++)
     {
        var price = ""
        if(voltaje[i].Print_Character !== null)
        {
            if(voltaje[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(voltaje[i].Price)
        }
         options[pSItems] = [
             {text: voltaje[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: voltaje[i].Item_Long_Desc, style: 'textotabla'},
             {text: voltaje[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: price, style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
    
    /*TERMINA CICLO*/

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SURFACE COVER', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<mattress.length; i++)
     {
        surfaces[pSItems] = [
             {text: mattress[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: mattress[i].Model, style: 'textotabla'},
             {text: mattress[i].Item_Short_Desc, style: 'textotabla'},
             {text: mattress[i].Size_Code, style: 'textotabla'},
             {text: mattress[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(mattress[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
     /*TERMINA CICLO*/

    surfaces[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++
    
    surfaces[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    var surfaces2 = []
    pSItems = 0

    surfaces2[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<np50.length; i++)
     {
         surfaces2[pSItems] = [
             {text: np50[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: np50[i].Item_Long_Desc, style: 'textotabla'},
             {text: np50[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(np50[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
    /*TERMINA CICLO*/

    var surfaces3E = []
    pSItems = 0

    surfaces3E[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    var surfaces3 = []
    pSItems = 0
     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<surface.length; i++)
     {
        surfaces3[pSItems] = [
             {text: surface[i].KitName, style: 'textotabla', alignment: 'center'},
             {text: surface[i].Item_Long_Desc, style: 'textotabla'},
             {text: surface[i].Part, style: 'textotabla', alignment: 'center'}, 
             {text: "$" + Intl.NumberFormat("en-IN").format(surface[i].Price), style: 'textotabla', alignment: 'center'}, 
         ]
     
         pSItems++
     }
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

    var theCenturisBed = [
        { text: 'The Centuris™ Bed - P750', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: China\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric variable height'},
                            { text: 'Electric backrest with autocontour'},
                            { text: 'Electric thigh section'},
                            { text: 'Manually adjustable foot section'},
                            { text: 'Backrest & Trendelenburg angle indicators'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Removable head and foot boards'},
                            { text: 'Four IV poles/accessory sockets'},
                            { text: 'Bilateral accessory holder'},
                            { text: '4 corner bumpers'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '125 mm single band castors'},
                            { text: 'Safe working load: 204 kg'},
                            { text: 'Split siderails'},
                            { text: 'Bilateral & manual CPR control'},
                        ]				
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 80,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        widths: ["*", 50, 50],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'CENTURIS', style: 'textotablacolor', colSpan: 2, fillColor: '#546ce4',  alignment: 'center'},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'C', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'D', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {text: 'Bed Controls - hand-held pendant', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Bed Controls - intergrated in siderails', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Function Lockouts', style: 'textotabla'},
                                {text: 'Individual', style: 'textotabla', alignment: 'center'},
                                {text: 'Individual', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Electric Trend/Rev. Trendelenburg', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Battery', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Bed Extension', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        },
        "\n",
        {
            table: {
                widths: [80, "*", 50, 50],
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
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {
            columns: [
                [
                    { image: "images/TheCenturisBed.png", width: 320, height: 260, alignment: 'center'},
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
        '\n',
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        { text: 'Country of Origin: France', style: 'parrafo' },
        {
            table: {
                widths: [70, 70, "*", 70, 70, 70],
                body: surfaces
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
        { text: '\n', style: 'parrafo' },
        { text: 'Country of Origin: China', style: 'parrafo' },
        {
            table: {
                widths: [70, '*', 70, 70],
                body: surfaces2
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
        { text: '\n', style: 'parrafo' },
        { text: 'Country of Origin: China', style: 'parrafo' },
        {
            table: {
                widths: [80, "*", 80, 80],
                body: surfaces3E
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
                widths: [80, "*", 80, 80],
                body: surfaces3
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
        '\n',
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [80, "*", 80, 80],
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

    return theCenturisBed;
}

module.exports = {
    getTheCenturisBed : getTheCenturisBed,
}