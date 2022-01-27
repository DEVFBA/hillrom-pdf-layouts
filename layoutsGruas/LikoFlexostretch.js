const dbProgressa = require('../controllers/progressa')

async function getLikoFlexostretch()
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
        {border: [true, true, true, false], image: "images/LikoFlexostretch1.png", width: 80, height: 30, alignment: 'center'},
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
        {border: [true, true, true, false], image: "images/LikoFlexostretch2.png", width: 60, height: 40, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, true, true, false], image: "images/LikoFlexostretch3.png", width: 60, height: 40, alignment: 'center', rowSpan: 4},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
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
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotabla'},
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350\n', style: 'textotablaboldblack'},
            {text:'Fits Mod 600 IC, Prod. No. 3156065 and 3156065B and OctoStretch, Prod. No. 3156055. Max 300 kg (660 lbs).', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/LikoFlexostretch4.png", width: 80, height: 50, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: 'Some of the slings may be special made in other material/design. Contact Liko for more information and price. All of Liko’s accessories and slings are approved for a maximum load of 200 kg (440 lbs) if nothing else is described.', style: 'textotabla', colSpan: 4, fillColor: '#dbdbdb',  alignment: 'center'},
        {border: [true, true, true, true], text: ""},
        {border: [true, true, true, true], text: ""},
        {border: [true, true, true, true], text: ""},
    ]

    pSItems++

    const fecha = new Date();
    fecha.toLocaleDateString()

    var likoFlexostretch = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
        "\n",
        {
            table: {
                widths: [190, "*"],
                body: [
                    [
                        {text: 'LIKO FLEXOSTRETCH™, LIKO ULTRASTRETCH™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
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
        {
            table: {
                widths: [250, "*"],
                body: [
                    [
                        {text: 'LIKO STRETCHERS - MISCELLANEOUS', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
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
        {text: '', pageBreak: 'after'  },
    ]

    return likoFlexostretch;
}

module.exports = {
    getLikoFlexostretch : getLikoFlexostretch,
}