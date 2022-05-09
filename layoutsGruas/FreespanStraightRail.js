const dbFreeStand = require('../controllers/freestandingliftsystem')

async function getFreespanStraightRail(pdfZone)
{
    const res = await dbFreeStand.getFreestanding(pdfZone)
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3 = res[2]

    var accesories = []
    var pSItems = 0

    if(salida1.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida1.length; i++)
        {
            if(i === 0 && salida1.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight2.png", width: 80, height: 20, alignment: 'center', rowSpan: salida1.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight2.png", width: 80, height: 20, alignment: 'center', rowSpan: salida1.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida1.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida2.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida2.length; i++)
        {
            if(i === 0 && salida2.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight3.png", width: 80, height: 20, alignment: 'center', rowSpan: salida2.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight3.png", width: 80, height: 20, alignment: 'center', rowSpan: salida2.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida2.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida3.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida3.length; i++)
        {
            if(i === 0 && salida3.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida3.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/FreespanStraight4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida3.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida3.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    var table1 = []
    if(salida1.length > 0 || salida2.length > 0 || salida3.length > 0)
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

    var freespanStraightRail = [
        "\n",
        "\n",
        "\n",
        { text: 'FREESTANDING LIFT SYSTEM', style: 'header' },
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Freespan™ Straight Rail', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freespanstraight"},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "\n\nProduct specification for a complete product:\n", style: "textotablaboldblack"},
                           {text: "FreeSpan Rail (Prod. No. 3103115 - 50 / 3103215 - 50)\n", style: "textotabla"},
                           {text: "FreeSpan Side Support (Prod. No. 3103512)\n", style: "textotabla"},
                           {text: "Likorall / Multirall\n", style: "textotabla"},
                           {text: "Hand control\n", style: "textotabla"},
                           {text: "Charger\n", style: "textotabla"},
                           {text: "Sling bar / stretcher\n", style: "textotabla"},
                           {text: "Sling\n", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanStraight1.png", width: 100, height: 100, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\nThe maximum load can be between 200 kg (440 lbs) and 250 kg (550 lbs) depending on the length of the rail being used, see below', style: 'textotabla',  alignment: 'center'},
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
        table1,
        {text: '', pageBreak: 'after'  },
    ]

    return freespanStraightRail;
}

module.exports = {
    getFreespanStraightRail : getFreespanStraightRail,
}