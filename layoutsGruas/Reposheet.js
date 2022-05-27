const dbReposheet = require('../controllers/reposheet')

async function getReposheet(pdfZone)
{
    const res = await dbReposheet.getReposheet(pdfZone)
    const salida1  = res[0]
    const salida2 = res[1]
    const salida3 = res[2]
    const salida4 = res[3]
    const salida5 = res[4]

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
                    {border: [true, true, true, true], image: "images/Reposheet1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida1.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet1.png", width: 80, height: 80, alignment: 'center', rowSpan: salida1.length+2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false],  text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida1.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet2.png", width: 80, height: 60, alignment: 'center', rowSpan: salida2.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet2.png", width: 80, height: 80, alignment: 'center', rowSpan: salida2.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida2.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
        accesories3[pSItems] =[
            {border: [true, true, true, false], text: salida3[0].Part, style: 'textotabla'},
            {border: [true, true, true, false], text: salida3[0].Item_Long_Desc, style: 'textotablaboldblack'},
            {border: [true, true, true, false], image: "images/Reposheet3.png", width: 80, height: 40, alignment: 'center', rowSpan: 2},
            {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[0].Price), style: 'textotabla', alignment: 'center'},
        ]
    
        pSItems++

        accesories3[pSItems] =[
            {border: [true, false, true, false], text: ""},
            {border: [true, false, true, false], text: salida3[0].Specifications, style: 'textotabla'},
            {border: [true, false, true, false], text: ""},
            {border: [true, false, true, false], text: ""},
        ]
    
        pSItems++
    
        accesories3[pSItems] =[
            {border: [true, false, true, false], text: salida3[1].Part, style: 'textotabla'},
            {border: [true, false, true, false], text: salida3[1].Item_Long_Desc, style: 'textotablaboldblack'},
            {border: [true, false, true, false], image: "images/Reposheet4.png", width: 80, height: 40, alignment: 'center' , rowSpan: 2},
            {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[1].Price), style: 'textotabla', alignment: 'center'},
        ]
    
        pSItems++

        accesories3[pSItems] =[
            {border: [true, false, true, false], text: ""},
            {border: [true, false, true, false], text: salida3[1].Specifications, style: 'textotabla'},
            {border: [true, false, true, false], text: ""},
            {border: [true, false, true, false], text: ""},
        ]
    
        pSItems++
    
        accesories3[pSItems] =[
            {border: [true, false, true, false], text: salida3[2].Part, style: 'textotabla'},
            {border: [true, false, true, false], text: salida3[2].Item_Long_Desc, style: 'textotablaboldblack'},
            {border: [true, false, true, true], image: "images/Reposheet5.png", width: 80, height: 40, alignment: 'center', rowSpan: 2},
            {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[2].Price), style: 'textotabla', alignment: 'center'},
        ]
    
        pSItems++

        accesories3[pSItems] =[
            {border: [true, false, true, true], text: ""},
            {border: [true, false, true, true], text: salida3[0].Specifications, style: 'textotabla'},
            {border: [true, false, true, true], text: ""},
            {border: [true, false, true, true], text: ""},
        ]
    
        pSItems++
          
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
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet9.png", width: 80, height: 40, alignment: 'center', rowSpan: salida4.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
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
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet9.png", width: 80, height: 40, alignment: 'center', rowSpan: salida4.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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

                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida5.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida5.length; i++)
        {
            if(i === 0 && salida5.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida5.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
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
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Reposheet8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida5.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida5.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
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
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var s1 = []
    if(salida1.length>0)
    {
        s1 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'REPOSHEET ORIGINAL', style: 'textotablacolorlarge'},
                                {text: "Reposheet Original", style: {fontSize: 0}, tocItem: "reposheetoriginal"}
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
    if(salida2.length>0)
    {
        s2 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'SOLO REPOSHEET™ ORIGINAL', style: 'textotablacolorlarge'},
                                {text: "Solo Reposheet™ Original", style: {fontSize: 0}, tocItem: "soloreposheetoriginal"}
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
    if(salida3.length>0)
    {
        s3 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'MULTISTRAP™', style: 'textotablacolorlarge'},
                                {text: "Multistrap™", style: {fontSize: 0}, tocItem: "multistrap"}
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
    if(salida4.length>0)
    {
        s4 = [
            "\n",
            {
                table: {
                    widths: [190, "*", 130],
                    body: [
                        [
                            {text: [
                                {text: 'SOLO MULTISTRAP™', style: 'textotablacolorlarge'},
                                {text: "Solo Multistrap™", style: {fontSize: 0}, tocItem: "solomultistrap"}
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

    var reposheet = [
        "\n",
        "\n",
        "\n",
        { text: 'REPOSHEET - MULTISTRAP', style: 'header' },
        s1,
        s2,
        s3,
        s4,
        {text: '', pageBreak: 'after'  },
    ]

    return reposheet;
}

module.exports = {
    getReposheet : getReposheet,
}