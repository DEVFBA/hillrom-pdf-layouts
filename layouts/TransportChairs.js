const dbTransportChairs = require('../controllers/transportchairs')

async function getTransportChairs()
{
    const res = await dbTransportChairs.getDataTransportChairs()
    const prices = res[0]
    const castorsData = res[1]
    const accesoriesData  = res[2]
    const towelHolderData = res[3]
    const singleBottleData = res[4]
    const coloursContrast = res[5]
    const handlesData = res[6]


    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SM647B', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Castors", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(castorsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var castorsFlag = false
        while(castorsFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*1
            }
            var precios = []
            var preciosCount = 0
            var countC=0
            var printCaracter = []
            while(j< castorsData.length && countC<1)
            {
            precios[preciosCount] = castorsData[j].Price
            printCaracter[preciosCount] = castorsData[j].Print_Character
            preciosCount++
            j++
            countC++
            }
            var data = {
                Id_Item: castorsData[j-1].Id_Item,
                Item_Long_Desc: castorsData[j-1].Item_Long_Desc,
                Prices: precios,
                Print_Character: printCaracter
            }

            var precio1;

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
            
            options[pSItems] = [
                {text: data.Id_Item, style: 'textotabla', alignment: 'center'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= castorsData.length)
            {
                castorsFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }

    var accesories =[]
    var pSItems = 0;
    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    if(accesoriesData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<accesoriesData.length; i++)
        {
            accesories[pSItems] = [
                {text: accesoriesData[i].KitName, style: 'textotabla'},
                {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'},
                {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
            ]
        
            pSItems++
        }
        /*TERMINA CICLO*/
    }

    var table1 = []
    if(prices.length > 0)
    {
        table1 = [
            {
                table: {
                    widths: [310, 80, 80],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'METALARMCHAIR', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'}
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'SM647B', style: 'textotablaboldblack', alignment: 'center'}
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            { image: "images/TransportChairs.png", width: 65, height: 80, alignment: 'center'}
                        ],
                        [
                            {text: '4 x 125 mm single-band with central brake (R2B)', style: 'textotabla', },
                            {text: "●", style: 'textotabla', alignment: 'center'}
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
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
                    widths: [310, 80, 80],
                    body: [
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'METALARMCHAIR', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'}
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            {text: 'SM647B', style: 'textotablaboldblack', alignment: 'center'}
                        ],
                        [
                            {border: [false, false, false, false], text: ''},
                            { image: "images/TransportChairs.png", width: 65, height: 80, alignment: 'center'}
                        ],
                        [
                            {text: '4 x 125 mm single-band with central brake (R2B)', style: 'textotabla', },
                            {text: "●", style: 'textotabla', alignment: 'center'}
                        ],
                        [
                            {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4'},
                            {text: "NO-DATA", style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}
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
    if(castorsData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, 231, 80, 50],
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

    var table3 = []
    if(accesoriesData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [70, 80, 142, 80, 50],
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

    const fecha = new Date();
    fecha.toLocaleDateString()

    var transportChairs = [
        "\n",
        "\n",
        "\n",
        { text: 'Transport Chairs', style: 'header'},
        '\n',
        { text: 'Transport Chair Anatome SM647B', style: 'subheader'},
        { text: 'Anatome', style: { fontSize: 0}, tocItem: 'transportChairs'},
        { text: 'Country of origin: France', style: 'parrafo' },
        { text: '\n', style: 'textotabla' },
        {
            style:'textolista',
            ul: [
                    { text: 'Variable seat height'},
                    { text: 'For more technical specifications see separate tech specs'},
                    { text: 'For fabrics see separate fabrics sheet'},
                ]		
        },
        table1,
        { text: '\n', style: 'textotabla' },
        table2,
        '\n',
        '\n',
        { text: 'Accesories', style: 'subheader'},
        { text: '\n', style: 'textotabla' },
        table3,
        { text: '\n', style: 'textotabla' },
        { text: '● = standard', style: 'textotabla' },
        { text: '\n', style: 'textotabla' },
        { image: "images/TransportChairs2.png", width: 420, height: 215, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return transportChairs;
}

module.exports = {
    getTransportChairs : getTransportChairs,
}