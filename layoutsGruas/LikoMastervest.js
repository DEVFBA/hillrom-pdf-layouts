const dbSlings = require('../controllers/slingsforadults')

async function getLikoMastervest(pdfZone)
{
    const res = await dbSlings.getSlingsForAdults(pdfZone)
    const salida11  = res[10]
    const salida12 = res[11]
    const salida13 = res[12]
    const salida14 = res[13]

    var accesories = []
    var pSItems = 0


    if(salida11.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida11.length; i++)
        {
            if(i === 0 && salida11.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida11.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida11.length+2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida11.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida11.length-2)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
    }

    var accesories2 = []
    var pSItems = 0

    if(salida12.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida12.length; i++)
        {
            if(i === 0 && salida12.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest2.png", width: 80, height: 80, alignment: 'center', rowSpan: salida12.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest2.png", width: 80, height: 80, alignment: 'center', rowSpan: salida12.length},
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
    }
    
    var accesories3 = []
    var pSItems = 0

    if(salida13.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida13.length; i++)
        {
            if(i === 0 && salida13.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest3.png", width: 80, height: 80, alignment: 'center', rowSpan: salida13.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest3.png", width: 80, height: 80, alignment: 'center', rowSpan: salida13.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida13.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
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
    
    var accesories4 = []
    var pSItems = 0

    if(salida14.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida14.length; i++)
        {
            if(i === 0 && salida14.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, true], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida14.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoMastervest4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida14.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida14.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida14.length-2)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var s1 = []
    if(salida11.length>0)
    {
        s1 = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO MASTERVEST™, MOD 60', style: 'textotablacolorlarge'},
                                {text: "Liko Mastervest™, Mod 60", style: {fontSize: 0}, tocItem: "likomastervest60"}
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

    var s2 = []
    if(salida12.length>0)
    {
        s2 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO MASTERVEST™ FRONT CLOSURE, MOD 64', style: 'textotablacolorlarge'},
                                {text: "Liko Mastervest™ Front Closure, Mod 64", style: {fontSize: 0}, tocItem: "likomastervest64"}
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

    var s3 = []
    if(salida13.length>0)
    {
        s3 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LEG HARNESS MASTERVEST, MOD 66', style: 'textotablacolorlarge'},
                                {text: "Liko Harness Mastervest, Mod 66", style: {fontSize: 0}, tocItem: "likomastervest66"}
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

    var s4 = []
    if(salida14.length>0)
    {
        s4 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO AMPUTEE HIGHBACK SLING™, MOD 75', style: 'textotablacolorlarge'},
                                {text: "Liko Amputee Highback Sling™, Mod 75", style: {fontSize: 0}, tocItem: "likoamputee75"}
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
    
    var likoMastervest = [
        s1,
        s2,
        s3,
        s4,
        {text: '', pageBreak: 'after'  },
    ]

    return likoMastervest;
}

module.exports = {
    getLikoMastervest : getLikoMastervest,
}