const dbCatonicBedSide = require('../controllers/catoniSCH770A')

async function getCatoniBedSide()
{
    const res = await dbCatonicBedSide.getDataCatoniBedSide()
    const prices = res[0]
    const overbedTableData = res[1]
    const plasticDrawerData  = res[2]
    const towelHolderData = res[3]
    const singleBottleData = res[4]
    const coloursContrast = res[5]
    const handlesData = res[6]

    var options3 =[]
    var pSItems = 0;
    options3[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B03', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options3[pSItems] = [
        {text: "Overbed table", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(overbedTableData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var overbedTableFlag = false
        while(overbedTableFlag === false)
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
            while(j< overbedTableData.length && countC<2)
            {
            precios[preciosCount] = overbedTableData[j].Price
            printCaracter[preciosCount] = overbedTableData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: overbedTableData[j-1].Id_Item,
                Item_Long_Desc: overbedTableData[j-1].Item_Long_Desc,
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
            
            options3[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= overbedTableData.length)
            {
                overbedTableFlag = true
            }
            i++
        }
        /*TERMINA CICLO*/
    }
    
    options3[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++;
    
    if(plasticDrawerData[0] !== undefined && plasticDrawerData[1] !== undefined)
    {
        options3[pSItems] = [
            {text: plasticDrawerData[0].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: plasticDrawerData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[0].Price), style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[1].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    
    if(plasticDrawerData[2] !== undefined)
    {
        options3[pSItems] = [
            {text: plasticDrawerData[2].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: plasticDrawerData[2].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(plasticDrawerData[2].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
        /*TERMINA CICLO*/
    }


    options3[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++;

    options3[pSItems] = [
        {text: 'Towel Holder', style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: '* Note: will be discontinued last order March 2021', style: 'textotablaboldblack', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(towelHolderData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var towelHolderFlag = false
        while(towelHolderFlag === false)
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
            while(j< towelHolderData.length && countC<2)
            {
            precios[preciosCount] = towelHolderData[j].Price
            printCaracter[preciosCount] = towelHolderData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: towelHolderData[j-1].Id_Item,
                Item_Long_Desc: towelHolderData[j-1].Item_Long_Desc,
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
            
            options3[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= towelHolderData.length)
            {
                towelHolderFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    options3[pSItems] = [
        {text: '2 x single bottle hold', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 3},
        {border: [false, false, false, false], text: ""},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(singleBottleData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var singleBottleFlag = false
        while(singleBottleFlag === false)
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
            while(j< singleBottleData.length && countC<2)
            {
            precios[preciosCount] = singleBottleData[j].Price
            printCaracter[preciosCount] = singleBottleData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: singleBottleData[j-1].Id_Item,
                Item_Long_Desc: singleBottleData[j-1].Item_Long_Desc,
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
            
            options3[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= singleBottleData.length)
            {
                singleBottleFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    /*options3[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 4},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(coloursContrast.length > 0)
    {
        var i=0;
        var coloursContrastFlag = false
        while(coloursContrastFlag === false)
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
            while(j< coloursContrast.length && countC<2)
            {
            precios[preciosCount] = coloursContrast[j].Price
            printCaracter[preciosCount] = coloursContrast[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: coloursContrast[j-1].Id_Item,
                Item_Long_Desc: coloursContrast[j-1].Item_Long_Desc,
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
            
            options3[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= coloursContrast.length)
            {
                coloursContrastFlag = true
            }
            i++
        }   
    }*/

    options3[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(handlesData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var handlesFlag= false
        while(handlesFlag === false)
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
            while(j< handlesData.length && countC<2)
            {
            precios[preciosCount] = handlesData[j].Price
            printCaracter[preciosCount] = handlesData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: handlesData[j-1].Id_Item,
                Item_Long_Desc: handlesData[j-1].Item_Long_Desc,
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
            
            options3[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'},  
            ]

            pSItems++

            //console.log(data)

            if(j >= handlesData.length)
            {
                handlesFlag = true
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
                table: {
                    widths: ["*", 80, 80],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'FURNACUSELECT', style: 'textotablacolorlarge', colSpan: 2, fillColor: '#546ce4',  alignment: 'center'},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'SER-CH770A', style: 'textotablaboldblacklarge', colSpan: 2,  alignment: 'center'},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Catoni Bedside Cabinet with overbed table - bilateral functionality', style: 'textotablaboldlarge'},
                            {text: 'B03', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'B04', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], ul: [
                                { text: 'Height 870 mm - Width 605 mm - Depth 450 mm'},
                                { text: 'Material: sides: Melamine, Top Plate/drawers/ doors : High Pressure Laminate (HPL)'},
                                { text: 'Castors: 5 x 50 mm with 2 brakes'},
                                { text: 'Bumpers-grey'},
                                { text: 'For additional technical specifications see separate tech specs'},
                                { text: 'For colour and handles see separate tech specs'},
                            ],  style:'textolista',},
                            { image: "images/Catoni21.png", width: 80, height: 70, alignment: 'center'},
                            { image: "images/Catoni22.png", width: 80, height: 70, alignment: 'center'},
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
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
            }
        ]
    }
    else {
        table1 = [
            {
                table: {
                    widths: ["*", 80, 80],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'FURNACUSELECT', style: 'textotablacolorlarge', colSpan: 2, fillColor: '#546ce4',  alignment: 'center'},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'SER-CH770A', style: 'textotablaboldblacklarge', colSpan: 2,  alignment: 'center'},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: 'Catoni Bedside Cabinet with overbed table - bilateral functionality', style: 'textotablaboldlarge'},
                            {text: 'B03', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: 'B04', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], ul: [
                                { text: 'Height 870 mm - Width 605 mm - Depth 450 mm'},
                                { text: 'Material: sides: Melamine, Top Plate/drawers/ doors: High Pressure Laminate (HPL)'},
                                { text: 'Castors: 5 x 50 mm with 2 brakes'},
                                { text: 'Bumpers-grey'},
                                { text: 'For additional technical specifications see separate tech specs'},
                                { text: 'For colour and handles see separate tech specs'},
                            ],  style:'textolista',},
                            { image: "images/Catoni21.png", width: 80, height: 70, alignment: 'center'},
                            { image: "images/Catoni22.png", width: 80, height: 70, alignment: 'center'},
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
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
            }
        ]
    }

    var table2 = []
    if(overbedTableData.length > 0 || plasticDrawerData.length > 0 || towelHolderData.length > 0
        || singleBottleData.length > 0 || coloursContrast.length > 0 || handlesData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, "*", 80, 80],
                    body: options3
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

    var catoni = [
        "\n",
        "\n",
        "\n",
        table1,
        "\n",
        table2,
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'textotabla' },
        { text: '= - not available', style: 'textotabla' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [67, 67, 67, 67],
                body: [
                    [
                        {text: 'B03 Plastic drawer insert (1BS) in top drawer', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 with 2 x single bottle holder (BOH)', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B04 with 2 x single bottle holder (BOH)', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Towel holder (TH)', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni23.png", width: 60, height: 70, alignment: 'center'},
                        { image: "images/Catoni24.png", width: 60, height: 70, alignment: 'center'},
                        { image: "images/Catoni25.png", width: 60, height: 70, alignment: 'center'},
                        { image: "images/Catoni26.png", width: 60, height: 70, alignment: 'center'},
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
        {
            table: {
                widths: [67, 67, 67],
                body: [
                    [
                        {text: 'B03 Contrasting colours front (drawers and doors)', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Contrasting colours front and overbed table', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Contrasting colours front (drawers and doors)', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni27.png", width: 75, height: 70, alignment: 'center'},
                        { image: "images/Catoni28.png", width: 75, height: 70, alignment: 'center'},
                        { image: "images/Catoni29.png", width: 75, height: 70, alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return catoni;
}

module.exports = {
    getCatoniBedSide : getCatoniBedSide,
}