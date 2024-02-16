const dbOverbedTablesArtOfCare = require('../controllers/overbedtablesartofcare')

async function getOverbedTables()
{
    const res = await dbOverbedTablesArtOfCare.getOverbedTablesArtOfCare()
    const prices = res[0]
    const topStyleData = res[1]
    const mirrorStorageData = res[2]
    const accesoriesData = res[3]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTIONS', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
        {text: 'OBT-636', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
        {text: 'OBT-635', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
        {text: 'OBT-634', style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    /*var i=0;
    var topStyleFlag = false
    while(topStyleFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*3
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< topStyleData.length && countC<3)
        {
           precios[preciosCount] = topStyleData[j].Price
           printCaracter[preciosCount] = topStyleData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: topStyleData[j-1].Id_Item,
            Item_Long_Desc: topStyleData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;

        if(data.Print_Character[0] !== null)
        {
            if(data.Print_Character[0] === "*")
            {
                precio1 = "*"
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
                precio2 = "*"
            }
            else {
                precio2 = "-"
            }
        }
        else {
            precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
        }

        if(data.Print_Character[2] !== null)
        {
            if(data.Print_Character[2] === "*")
            {
                precio3 = "*"
            }
            else {
                precio3 = "-"
            }
        }
        else {
            precio3 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[2])
        }
        
        options[pSItems] = [
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= topStyleData.length)
        {
            topStyleFlag = true
        }
        i++
    }  */ 

    if(topStyleData[0] !== undefined)
    {
        options[pSItems] = [
            {text: "Top Style", style: 'textotablaboldlarge', border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]}, 
            {text: "", border: [false, false, false, false]},
        ]
        pSItems++

        options[pSItems] = [
            {text: topStyleData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(topStyleData[0].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }

    
    if(topStyleData[1] !== undefined)
    {
        options[pSItems] = [
            {text: topStyleData[1].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(topStyleData[1].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    
        options[pSItems] = [
            {text: topStyleData[2].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(topStyleData[2].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }
    
    /*EMPIEZA CICLO*/
    /*var i=0;
    var mirrorStorageFlag = false
    while(mirrorStorageFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*3
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< mirrorStorageData.length && countC<3)
        {
           precios[preciosCount] = mirrorStorageData[j].Price
           printCaracter[preciosCount] = mirrorStorageData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: mirrorStorageData[j-1].Id_Item,
            Item_Long_Desc: mirrorStorageData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;
        var precio3;

        if(data.Print_Character[0] !== null)
        {
            if(data.Print_Character[0] === "*")
            {
                precio1 = "*"
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
                precio2 = "*"
            }
            else {
                precio2 = "-"
            }
        }
        else {
            precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
        }

        if(data.Print_Character[2] !== null)
        {
            if(data.Print_Character[2] === "*")
            {
                precio3 = "*"
            }
            else {
                precio3 = "-"
            }
        }
        else {
            precio3 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[2])
        }
        
        options[pSItems] = [
            {text: data.Item_Long_Desc, style: 'textotabla'},
            {text: precio1, style: 'textotabla', alignment: 'center'}, 
            {text: precio2, style: 'textotabla', alignment: 'center'}, 
            {text: precio3, style: 'textotabla', alignment: 'center'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= mirrorStorageData.length)
        {
            mirrorStorageFlag = true
        }
        i++
    }  */

    if(mirrorStorageData[0] !== undefined  || mirrorStorageData[1] !== undefined)
    {
        options[pSItems] = [
            {text: "Mirror / Storage", style: 'textotablaboldlarge', border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]}, 
            {text: "", border: [false, false, false, false]},
        ]
        pSItems++

        options[pSItems] = [
            {text: mirrorStorageData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[0].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[1].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }

    if(mirrorStorageData[2] !== undefined)
    {
        options[pSItems] = [
            {text: mirrorStorageData[2].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[2].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }

    if(mirrorStorageData[3] !== undefined || mirrorStorageData[4] !== undefined)
    {
    
        options[pSItems] = [
            {text: mirrorStorageData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[3].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[4].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }

    if(mirrorStorageData[5] !== undefined)
    {
        options[pSItems] = [
            {text: mirrorStorageData[5].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(mirrorStorageData[5].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
        {text: "", border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    if(accesoriesData.length > 0 || !accesoriesData)
    {
        options[pSItems] = [
            {text: "ACCESSORIES (FURNITUREACC)", style: 'textotablaboldlarge', border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]},
            {text: "", border: [false, false, false, false]}, 
            {text: "", border: [false, false, false, false]},
        ]
        pSItems++

        var i=0;
        var accesoriesFlag = false
        while(accesoriesFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< accesoriesData.length && countC<3)
            {
               precios[preciosCount] = accesoriesData[j].Price
               printCaracter[preciosCount] = accesoriesData[j].Print_Character
               preciosCount++
               j++
               countC++
            }
            var data = {
                Id_Item: accesoriesData[j-1].Id_Item,
                Item_Long_Desc: accesoriesData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }
    
            var precio1;
            var precio2;
            var precio3;
    
            if(data.Print_Character[0] !== null)
            {
                if(data.Print_Character[0] === "*")
                {
                    precio1 = "*"
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
                    precio2 = "*"
                }
                else {
                    precio2 = "-"
                }
            }
            else {
                precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
            }
    
            if(data.Print_Character[2] !== null)
            {
                if(data.Print_Character[2] === "*")
                {
                    precio3 = "*"
                }
                else {
                    precio3 = "-"
                }
            }
            else {
                precio3 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[2])
            }
            
            options[pSItems] = [
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= accesoriesData.length)
            {
                accesoriesFlag = true
            }
            i++
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
                        width: 370,
                        table: {
                            widths: [140, 50, 50, 50],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PREMIUMOVERBEDTABLE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center', colSpan: 3},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P636', style: 'textotablabold', alignment: 'center'},
                                    {text: 'P635', style: 'textotablabold', alignment: 'center'},
                                    {text: 'P634', style: 'textotablabold', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'OBT-636', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'OBT-635', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'OBT-634', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                ],
                                [
                                    {text: 'Dual Top - Food Service Tray', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Single Top (Top Style 1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Single Top w/cutout for left sitting mirror (Top Style 1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: '"C" Base', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Tuning Fork Base', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
                                    {text: "$" + Intl.NumberFormat("en-IN").format(prices[2].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},  
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
                        columns : [
                            { image: "images/ArtOfCare.png", width: 120, height: 120, alignment: 'center'},
                        ]
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
                        width: 370,
                        table: {
                            widths: [140, 50, 50, 50],
                            body: [
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'PREMIUMOVERBEDTABLE', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center', colSpan: 3},
                                    {},
                                    {},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'P636', style: 'textotablabold', alignment: 'center'},
                                    {text: 'P635', style: 'textotablabold', alignment: 'center'},
                                    {text: 'P634', style: 'textotablabold', alignment: 'center'},
                                ],
                                [
                                    {border: [false, false, false, false], text: ''},
                                    {text: 'OBT-636', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'OBT-635', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                    {text: 'OBT-634', style: 'textotablacolorlarge', fillColor: '#154898',  alignment: 'center'},
                                ],
                                [
                                    {text: 'Dual Top - Food Service Tray', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Single Top (Top Style 1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Single Top w/cutout for left sitting mirror (Top Style 1)', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: '"C" Base', style: 'textotabla'},
                                    {text: '-', style: 'textotabla', alignment: 'center'},
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'Tuning Fork Base', style: 'textotabla'},
                                    {text: '*', style: 'textotabla', alignment: 'center'},
                                    {text: '*', style: 'textotabla', alignment: 'center'}, 
                                    {text: '-', style: 'textotabla', alignment: 'center'}, 
                                ],
                                [
                                    {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#154898'},
                                    {text: "NO-DATA", style: 'textotablacolorlarge', alignment: 'center', fillColor: '#154898'},
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
                        columns : [
                            { image: "images/ArtOfCare.png", width: 120, height: 120, alignment: 'center'},
                        ]
                    },
                ]
            }
        ]
    }

    var table2 = []
    if(topStyleData.length > 0 || mirrorStorageData.length > 0 || accesoriesData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [140, 50, 50, 50],
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

    var healthcareFurniture = [
        "\n",
        "\n",
        "\n",
        { text: 'Overbed Tables', style: 'header', tocItem: "overbedTablesArtOfCare"},
        { text: [
                {text: 'Art of Care ', style: 'subheader'},
                {text: "Last Order Date April 29, 2022", style: 'subheader2' }
            ]
        },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Low Profile Design'},
                    { text: 'Rounded Corners and Limited Exposed Parts Make Cleaning Easy'},
                    { text: 'Steel Column Raises and Lowers Table Quietly with Minimal Effort'},
                ]		
        },
        { text: '\n', style: 'parrafo' },
        table1,
        "\n",
        {
            columns: [
                {
                    width: 370,
                    columns : [
                        [
                            table2,
                            [
                                { text: '\n'},
                                { text: 'Thermo Foils', style: 'textotablaboldlarge' },
                                {
                                    columns: [
                                        [
                                            {text: 'V07 Natural Maple', style: 'textotabla'},
                                            {text: 'V08 Wild cherry', style: 'textotabla'},
                                            {text: 'V10 HoneyMaple', style: 'textotabla'},
                                            {text: 'V11 Shaker Cherry', style: 'textotabla'},
                                            {text: 'V13 Frosty white', style: 'textotabla'},
                                        ],
                                    ]
                                }
                            ]
                        ]
                    ]
                },
                {
                    width: "*",
                    columns : [
                        [ 
                            {image: "images/ArtOfCare2.png", width: 150, height: 110},
                            '\n',
                            '\n',
                            '\n',
                            { image: "images/ArtOfCare3.png", width: 100, height: 110},
                        ],
                    ]
                },
            ]
            
        },
        '\n',
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        { image: "images/ArtOfCare0.png", width: 430, height: 130, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return healthcareFurniture;
}

module.exports = {
    getOverbedTables : getOverbedTables,
}