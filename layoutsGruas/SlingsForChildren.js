const dbSlings = require('../controllers/slingsforchildren')

async function getSlingsForChildren(pdfZone)
{
    const res = await dbSlings.getSlingsForChildren(pdfZone)
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3  = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]

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
                    {border: [true, true, true, true], image: "images/SlingsForChildren1.png", width: 60, height: 120, alignment: 'center', rowSpan: salida1.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren1.png", width: 60, height: 120, alignment: 'center', rowSpan: salida1.length},
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

    var accesories2 = []
    var pSItems = 0

    if(salida2.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida2.length; i++)
        {
            if(i === 0 && salida2.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren2.png", width: 60, height: 50, alignment: 'center', rowSpan: salida2.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren2.png", width: 60, height: 50, alignment: 'center', rowSpan: salida2.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida2.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
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

    var accesories3 = []
    var pSItems = 0

    if(salida3.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida3.length; i++)
        {
            if(i === 0 && salida3.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren3.png", width: 60, height: 50, alignment: 'center', rowSpan: salida3.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren3.png", width: 60, height: 50, alignment: 'center', rowSpan: salida3.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida3.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
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
    
    var accesories4 = []
    var pSItems = 0

    if(salida4.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida4.length; i++)
        {
            if(i === 0 && salida4.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, true], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren4.png", width: 60, height: 50, alignment: 'center', rowSpan: salida4.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren4.png", width: 60, height: 50, alignment: 'center', rowSpan: salida4.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida4.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    var accesories5 = []
    var pSItems = 0

    if(salida5.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida5.length; i++)
        {
            if(i === 0 && salida5.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren5.png", width: 60, height: 60, alignment: 'center', rowSpan: salida5.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren5.png", width: 60, height: 60, alignment: 'center', rowSpan: salida5.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida5.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    var accesories6 = []
    var pSItems = 0

    if(salida6.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida6.length; i++)
        {
            if(i === 0 && salida6.length === 1)
            {
                accesories6[pSItems] =[
                    {border: [true, true, true, true], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren6.png", width: 60, height: 50, alignment: 'center', rowSpan: salida6.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories6[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/SlingsForChildren6.png", width: 60, height: 50, alignment: 'center', rowSpan: salida6.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida6.length-1)
            {
                accesories6[pSItems] =[
                    {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories6[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var likoH200 = []
    if(salida1.length > 0)
    {
        likoH200 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO ORIGINAL HIGHBACK SLING™, MOD 200', style: 'textotablacolorlarge'},
                                {text: "Liko Original Highback Sling™, Mod 200", style: {fontSize: 0}, tocItem: "likohighback"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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

    var likoS22 = []
    if(salida2.length > 0)
    {
        likoS22 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO SILHOUETTESLING™, MOD 22', style: 'textotablacolorlarge'},
                                {text: "Liko Silhouettesling™, Mod 22", style: {fontSize: 0}, tocItem: "likosilhouettesling"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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

    var teddyH41 = []
    if(salida3.length > 0)
    {
        teddyH41 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'TEDDY HYGIENESLING™/ LIKO HYGIENESLING™, MOD 41', style: 'textotablacolorlarge'}, 
                                {text: "Teddy Hygienesling™, Liko Hygienesling™, Mod 41", style: {fontSize: 0}, tocItem: "teddyhygienesling"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                    body: accesories3
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

    var teddyH55 = []
    if(salida4.length > 0)
    {
        teddyH55 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'TEDDY HYGIENEVEST HIGHBACK™/ LIKO HYGIENEVEST HIGHBACK™, MOD 55', style: 'textotablacolorlarge'},
                                {text: "Teddy Hygienevest Highback™, Liko Hygienevest Highback™, Mod 55", style: {fontSize: 0}, tocItem: "teddyhygienevest"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                    body: accesories4
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

    var teddy60 = []
    if(salida5.length > 0)
    {
        teddy60 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'TEDDYVEST™ / LIKO MASTERVEST™, MOD 60', style: 'textotablacolorlarge'},
                                {text: "Teddyvest™ / Liko Mastervest™, Mod 60", style: {fontSize: 0}, tocItem: "teddyvest"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                    body: accesories5
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

    var leg66 = []
    if(salida6.length > 0)
    {
        leg66 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LEG HARNESS MASTERVEST, MOD 66', style: 'textotablacolorlarge'},
                                {text: "Leg Harness Mastervest, Mod 66", style: {fontSize: 0}, tocItem: "legharness"}
                            ], fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                    body: accesories6
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

    var slingsForChildren = [
        "\n",
        "\n",
        "\n",
        { text: 'SLINGS FOR CHILDREN', style: 'header' },
        likoH200,
        likoS22,
        teddyH41,
        teddyH55,
        teddy60,
        leg66,
        {text: '', pageBreak: 'after'  },
    ]

    return slingsForChildren;
}

module.exports = {
    getSlingsForChildren : getSlingsForChildren,
}