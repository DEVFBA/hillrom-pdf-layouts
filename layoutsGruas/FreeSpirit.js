const dbCurtainSystem = require('../controllers/curtainsystem')

async function getFreeSpirit(pdfZone)
{
    const res = await dbCurtainSystem.getCurtainSystem(pdfZone)
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3 = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida1.length; i++)
    {
        if(i === 0 && salida1.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit1.png", width: 70, height: 60, alignment: 'center', rowSpan: salida1.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit1.png", width: 70, height: 60, alignment: 'center', rowSpan: salida1.length},
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

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida2.length; i++)
    {
        if(i === 0 && salida2.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit2.png", width: 70, height: 40, alignment: 'center', rowSpan: salida2.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit2.png", width: 70, height: 40, alignment: 'center', rowSpan: salida2.length},
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

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida3.length; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit3.png", width: 70, height: 40, alignment: 'center', rowSpan: salida3.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit3.png", width: 70, height: 40, alignment: 'center', rowSpan: salida3.length},
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

    var accesories2 = []
    pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit4.png", width: 70, height: 20, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit4.png", width: 70, height: 20, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
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
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit5.png", width: 30, height: 60, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit5.png", width: 30, height: 60, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
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
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit6.png", width: 60, height: 90, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/FreeSpirit6.png", width: 60, height: 90, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida6.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var freespirit1 = []
    if(salida1.length > 0)
    {
        freespirit1 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: 'FreeSpirit™ E-System', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freespirit"},
                            {},
                            {}
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
        ]
    }

    var freespirit2 = []
    if(salida4.length > 0)
    {
        freespirit2 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: 'FreeSpirit™ T-System', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "freespirittsystem"},
                            {},
                            {}
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
        ]
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var freeSpirit = [
        "\n",
        "\n",
        "\n",
        { text: 'CURTAIN SYSTEM', style: 'header' },
        freespirit1,
        freespirit2,
        {text: '', pageBreak: 'after'  },
    ]

    return freeSpirit;
}

module.exports = {
    getFreeSpirit : getFreeSpirit,
}