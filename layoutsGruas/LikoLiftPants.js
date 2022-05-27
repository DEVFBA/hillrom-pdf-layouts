const dbSlings = require('../controllers/slingsforadults')

async function getLikoLiftPants(pdfZone)
{
    const res = await dbSlings.getSlingsForAdults(pdfZone)
    const salida15  = res[14]
    const salida16 = res[15]
    const salida17 = res[16]

    var accesories = []
    var pSItems = 0

    if(salida15.length >0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida15.length; i++)
        {
            if(i === 0 && salida15.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida15.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida15.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida15.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
   
    var accesories2 = []
    var pSItems = 0

    if(salida16.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<2; i++)
        {
            if(i === 0 && salida16.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, true], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants2.png", width: 80, height: 80, alignment: 'center', rowSpan: 2},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants2.png", width: 80, height: 80, alignment: 'center', rowSpan: 4},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }

        accesories2[pSItems] =[
            {border: [true, true, true, true], text: salida16[i].Part, style: 'textotabla'},
            {border: [true, true, true, true], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
            {border: [true, true, true, true], image: "images/LikoLiftPants3.png", width: 60, height: 70, alignment: 'center'},
            {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
        ]

        pSItems++
        
        /*TERMINA CICLO*/
    }

    var accesories3 = []
    var pSItems = 0

    if(salida17.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida17.length; i++)
        {
            if(i === 0 && salida17.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida17.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoLiftPants4.png", width: 80, height: 80, alignment: 'center', rowSpan: salida17.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida17.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    /*TERMINA CICLO*/

    /*accesories3[pSItems] =[
        {border: [true, true, true, true], text: 'Some of the slings may be special made in other material/design. Contact Liko for more information and price. All of Liko’s accessories and slings are approved for a maximum load of 200 kg (440 lbs) if nothing else is described.', style: 'textotabla', colSpan: 4, fillColor: '#dbdbdb',  alignment: 'center'},
        {border: [true, true, true, true], text: ""},
        {border: [true, true, true, true], text: ""},
        {border: [true, true, true, true], text: ""},
    ]

    pSItems++*/

    var s1 = []
    if(salida15.length>0)
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
                                {text: 'LIKO LIFTPANTS™, MOD 92', style: 'textotablacolorlarge'},
                                {text: "Liko Liftpants™, Mod 92", style: {fontSize: 0}, tocItem: "likoliftpants92"}
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
    if(salida16.length>0)
    {
        s2 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'ULTRA LIFTPANTS™, MOD 920', style: 'textotablacolorlarge'},
                                {text: "Ultra Liftpants™, Mod 920", style: {fontSize: 0}, tocItem: "ultraliftpants920"}
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
    if(salida17.length>0)
    {
        s3 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'SOLO HIGHBACK SLING™, MOD 25', style: 'textotablacolorlarge'},
                                {text: "Solo Highback Sling™, Mod 25", style: {fontSize: 0}, tocItem: "solohighback25"}
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
    
    const fecha = new Date();
    fecha.toLocaleDateString()
    
    var likoLiftPants = [
        s1,
        s2,
        s3,
        {text: '', pageBreak: 'after'  },
    ]

    return likoLiftPants;
}

module.exports = {
    getLikoLiftPants : getLikoLiftPants,
}