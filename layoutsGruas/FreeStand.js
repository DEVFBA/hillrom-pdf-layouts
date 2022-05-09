const dbFreeStand = require('../controllers/freestandingliftsystem')

async function getFreeStand(pdfZone)
{
    const res = await dbFreeStand.getFreestanding(pdfZone)
    const salida12 = res[11]
    const salida13 = res[12]

    var accesories = []
    var pSItems = 0

    if(salida12.length > 0)
    {   
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida12.length; i++)
        {
            if(i === 0 && salida12.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreeStand2.png", width: 80, height: 100, alignment: 'center', rowSpan: salida12.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreeStand2.png", width: 80, height: 100, alignment: 'center', rowSpan: salida12.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida12.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida13.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida13.length; i++)
        {
            if(i === 0 && salida13.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreeStand3.png", width: 40, height: 60, alignment: 'center', rowSpan: salida13.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreeStand3.png", width: 40, height: 60, alignment: 'center', rowSpan: salida13.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida8.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    var table1 = []
    if(salida12.length > 0 || salida13.length > 0)
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
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var freeStand = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'FreeStand™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freestand"},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "Product specification for a complete product:\n", style: "textotablaboldblack"},
                           {text: "Rail H100, max 3.2 m (126 in) \n FreeStand Upright Support, Prod. No. 3104001. \nFreeStand Parking Set (Prod. No. 3104002) \nCarriage\n Likorall/Multirall \n Charger \nHand control \nSling bar/stretcher \nSling", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreeStand1.png", width: 120, height: 90, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\nMax. load 200 kg (440 lbs)', style: 'textotabla',  alignment: 'center'},
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
        table1,
        {text: '', pageBreak: 'after'  },
    ]

    return freeStand;
}

module.exports = {
    getFreeStand : getFreeStand,
}