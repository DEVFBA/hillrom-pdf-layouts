const dbLiko = require('../controllers/likostretchers')

async function getLikoFlexostretch()
{
    const res = await dbLiko.getLiko()
    const salida9  = res[8]
    const salida10 = res[9]
    const salida11 = res[10]
    const salida12 = res[11]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida9.length; i++)
    {
        if(i === 0 && salida9.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch1.png", width: 80, height: 30, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch1.png", width: 80, height: 30, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida9.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida10.length; i++)
    {
        if(i === 0 && salida10.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida10.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida10.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    for(var i=0; i<salida11.length; i++)
    {
        if(i === 0 && salida11.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida11.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida11.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida11.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida12.length; i++)
    {
        if(i === 0 && salida12.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch4.png", width: 80, height: 50, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/LikoFlexostretch4.png", width: 80, height: 50, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida12.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var s1 = []
    if(salida9.length>0)
    {
        s1 = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: [190, "*"],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO FLEXOSTRETCH™, LIKO ULTRASTRETCH™', style: 'textotablacolorlarge'},
                                {text: "Liko Flexostretch™, Liko Ultrastretch™", style: {fontSize: 0}, tocItem: "likoflexostretch"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
                            {},
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

    var s2 = []
    if(salida12.length>0)
    {
        s2 = [
            "\n",
            {
                table: {
                    widths: [250, "*"],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO STRETCHERS - MISCELLANEOUS', style: 'textotablacolorlarge'},
                                {text: "Liko Stretchers - Miscellaneous", style: {fontSize: 0}, tocItem: "likomiscellaneous"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
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

    var likoFlexostretch = [
        s1,
        s2,
        {text: '', pageBreak: 'after'  },
    ]

    return likoFlexostretch;
}

module.exports = {
    getLikoFlexostretch : getLikoFlexostretch,
}