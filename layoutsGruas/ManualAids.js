const dbProgressa = require('../controllers/progressa')

async function getManualAIDS()
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
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS1.png", width: 60, height: 30, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS2.png", width: 80, height: 30, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS3.png", width: 50, height: 30, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS4.png", width: 80, height: 50, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:' Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS5.png", width: 80, height: 60, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/ManualAIDS6.png", width: 80, height: 20, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories3 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, false, true, true], image: "images/ManualAIDS7.png", width: 80, height: 60, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var manualAIDS = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
        "\n",
        { text: 'MANUAL AIDS', style: 'header' },
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'HANDYTUBE', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'HANDYSHEET™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'HANDYBELT™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
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

    return manualAIDS;
}

module.exports = {
    getManualAIDS : getManualAIDS,
}