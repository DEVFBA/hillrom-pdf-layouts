const dbProgressa = require('../controllers/progressa')

async function getLikoOriginalHighback()
{
    /*const res = await dbProgressa.getDataProgressa()
    const prices = res[0]
    const patientSiderail = res[1]
    const mobility  = res[2]
    const permanentPole = res[3]
    const transportShelf = res[4]
    const accumaxSurfaces = res[5]
    const therapyIntegrated = res[6]
    const pulmonaryIntegrated = res[7]
    const accesoriesData = res[8]*/

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LikoHighback1.png", width: 80, height: 60, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/LikoHighback2.png", width: 50, height: 70, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350\n', style: 'textotablaboldblack' },
            ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350\n', style: 'textotablaboldblack' },
            ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350', style: 'textotablaboldblack' },
            {text: 'Universal SlingBarTM 350\n', style: 'textotabla' },
            {text: 'Universal SlingBarTM 350\n', style: 'textotabla' },
            ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/LikoHighback3.png", width: 50, height: 70, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text: ' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++


    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/LikoHighback4.png", width: 50, height: 70, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text: ' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/LikoHighback5.png", width: 50, height: 70, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text: ' Universal SlingBarTM 350\n', style: 'textotabla'},
            {text: ' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text: ' Universal SlingBarTM 350', style: 'textotabla'},
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, true], image: "images/LikoHighback6.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LikoHighback7.png", width: 70, height: 60, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories3 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LikoHighback8.png", width: 70, height: 50, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var likoOriginalHighback = [
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'LIKO ORIGINAL HIGHBACK SLING???, MOD 200/210', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'LIKO SILHOUETTESLING???, MOD 22', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'LIKO SOFT ORIGINAL HIGHBACK SLING???, MOD 26', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return likoOriginalHighback;
}

module.exports = {
    getLikoOriginalHighback : getLikoOriginalHighback,
}