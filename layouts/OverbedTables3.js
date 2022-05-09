const dbOverbedTables = require('../controllers/overbedtables3')

async function getOverbedTables()
{
    const res = await dbOverbedTables.getDataOverbedTables()
    const prices = res[0]
    const accesoriesData = res[1]

    var options =[]
    var pSItems = 0;

    options[pSItems] = [
        {text: "Accessories", style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
    ]
    pSItems++

    if(accesoriesData.length > 0)
    {
        /*EMPIEZA CICLO*/
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
                j = i*2
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< accesoriesData.length && countC<2)
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
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= accesoriesData.length)
            {
                accesoriesFlag = true
            }
            i++
        }  
    }
    
    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [200, 150, 150],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'OVERBEDTABLES', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'P009497', style: 'textotablabold', alignment: 'center'},
                            {text: 'P009498', style: 'textotablabold', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {image: "images/OverbedTable4.png", width: 100, height: 100, alignment: "center"},
                            {image: "images/OverbedTable3.png", width: 100, height: 100, alignment: "center"},
                        ],
                        [
                            {text: 'Single Top Overbed Table', style: 'textotabla'},
                            {text: '$762', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Dual Top Overbed Table', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '$1 195', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[1].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
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
                    widths: [200, 150, 150],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'OVERBEDTABLES', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
                            {},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'P009497', style: 'textotablabold', alignment: 'center'},
                            {text: 'P009498', style: 'textotablabold', alignment: 'center'},
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {image: "images/OverbedTable4.png", width: 100, height: 100, alignment: "center"},
                            {image: "images/OverbedTable3.png", width: 100, height: 100, alignment: "center"},
                        ],
                        [
                            {text: 'Single Top Overbed Table', style: 'textotabla'},
                            {text: '$762', style: 'textotabla', alignment: 'center'},
                            {text: '●', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'Dual Top Overbed Table', style: 'textotabla'},
                            {text: '●', style: 'textotabla', alignment: 'center'},
                            {text: '$1 195', style: 'textotabla', alignment: 'center'}, 
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', alignment: 'center', fillColor: '#546ce4'},
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
    if(accesoriesData.length > 0)
    {
        table2 = [
            {
        
                table: {
                    widths: [200, 150, 150],
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

    var healthcareFurniture = [
        "\n",
        "\n",
        "\n",
        { text: 'HEALTHCARE FURNITURE\n', style: 'header'},
        { text: 'Overbed Table', style: 'subheader', tocItem: "overbedTables2"},
        { text: 'Country of origin: Canada\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Single Top has seamless thermofoil table surface with spill guard edge'},
                    { text: 'Dual Top has two seamless thermofoil table surfaces: main table with spill guard edge and flip table with 2 cup holder indentations'},
                    { text: 'Integrated rail on both sides of column'},
                    { text: 'Low base design compatible with beds & furniture'},
                    { text: 'Graphite grey steel U-base and steel column'},
                    { text: 'Variable height adjustment'},
                ]		
        },
        { text: '\n', style: 'parrafo' },
        table1,
        "\n",
        table2,            
        { text: '\n'},
        { text: 'Thermo Foil Options', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: 'CC Choco Cherry', style: 'textotabla'},
                    {text: 'HC Hayward Cherry', style: 'textotabla'},
                    {text: 'DB Dunbar', style: 'textotabla'},
                    {text: 'DV Dolce Vita', style: 'textotabla'},
                ],
                [
                    {text: 'FW Frosty White', style: 'textotabla'},
                    {text: 'CP Chocolate Pear', style: 'textotabla'},
                    {text: 'CL Candlelight', style: 'textotabla'},
                    {text: 'HM Hard Rock Maple', style: 'textotabla'},
                ],
            ]
        },
        '\n',
        { image: "images/OverbedTable5.png", width: 500, height: 240, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return healthcareFurniture;
}

module.exports = {
    getOverbedTables : getOverbedTables,
}