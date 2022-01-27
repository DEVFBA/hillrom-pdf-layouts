const dbProgressa = require('../controllers/progressa')

async function getLikoStretchers()
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
        {border: [true, true, true, false], image: "images/LikoStretchers1.png", width: 80, height: 30, alignment: 'center'},
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
        {border: [true, true, true, false], image: "images/LikoStretchers2.png", width: 60, height: 40, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, true, true, false], image: "images/LikoStretchers3.png", width: 60, height: 40, alignment: 'center', rowSpan: 2},
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

    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:' Universal SlingBarTM 350', style: 'textotabla'}
        ]},
        {border: [true, true, true, false], image: "images/LikoStretchers4.png", width: 80, height: 30, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LikoStretchers6.png", width: 80, height: 50, alignment: 'center', rowSpan: 3},
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
            {text:'Universal SlingBarTM 350', style: 'textotabla'},
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
            {text:'Universal SlingBarTM 350', style: 'textotabla'},
        ]},
        {border: [true, true, true, false], image: "images/LikoStretchers7.png", width: 80, height: 40, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: [
            {text:'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        ]},
        {border: [true, true, true, false], image: "images/LikoStretchers8.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, true], text: [
            {text:'Universal SlingBarTM 350\n', style: 'textotablaboldblack'},
            {text:'Universal SlingBarTM 350', style: 'textotabla'},
        ]},
        {border: [true, true, true, true], image: "images/LikoStretchers9.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var likoStretchers = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
        "\n",
        { text: 'LIKO STRETCHERS', style: 'header' },
        "\n",
        {
            table: {
                widths: [190, "*"],
                body: [
                    [
                        {text: 'LIKO OCTOSTRETCH™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
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
                        {text: 'LIKOSTRETCH MOD 600 IC™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 2},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                            {text: 'Product specification for a complete product:\n', style: 'textotablaboldblack',  alignment: 'left'},
                            {text: '* LikoStretch Mod 600 IC\n', style: 'textotabla',  alignment: 'left'},
                            {text: '(Prod. No. 3156065 or 3156065B)\n', style: 'textotabla',  alignment: 'left'},
                            {text: '* SideRails 600 (Prod. No. 3166506)\n', style: 'textotabla',  alignment: 'left'},
                            {text: '* Straps Mod 600 IC (Prod. No. 3684001)\n', style: 'textotabla',  alignment: 'left'},
                            {text: '* Spatula Mod 600 IC (Prod. No. 3684002).', style: 'textotabla',  alignment: 'left'},
                        ]},
                        {border: [false, true, true, true], image: "images/LikoStretchers5.png", width: 80, height: 60, alignment: 'center'},
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

    return likoStretchers;
}

module.exports = {
    getLikoStretchers : getLikoStretchers,
}