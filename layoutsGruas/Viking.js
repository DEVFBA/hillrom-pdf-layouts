const dbProgressa = require('../controllers/progressa')

async function getViking()
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

    accesories[pSItems] =[
        {text: '20090071', style: 'textotablacatoni'},
        {text: [
            {text: "Viking Armrest M\n", style: 'textotablaboldblack'},
            {text: 'Golvo 7007/8008/9000 LowBase kit', style: 'textotablacatoni'},
        ]},
        { image: "images/Viking5.png", width: 70, height: 30, alignment: 'center'},
        {text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

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
        {border: [true, false, true, false], text: '20090071', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Leg Protector set Golvo 7000/8000, grey', style: 'textotablacatoni'},
        {border: [true, false, true, false], image: "images/Viking6.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '20090071', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Leg Protector set Golvo 7000/8000, grey', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '20090071', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Leg Protector set Golvo 7000/8000, grey', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], image: "images/Viking7.png", width: 60, height: 60, alignment: "center", rowSpan: 8},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2000400BGRO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide BG/RO', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '2000100', style: 'textotablacatoni'},
        {text: 'Holder for Quick Reference Guide', style: 'textotablacatoni'},
        {image: "images/Viking8.png", width: 70, height: 40},
        {text: '$30', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var viking = [
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'VIKING', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
                widths: [80, 70, "*", 80, 60],
                body: [
                    [
                        {text: '\n\n\n\n\n\n\n\n\n\n\nVIKINGINT', style: 'textotablaboldblack', alignment: 'center', rowSpan: 7},
                        {text: '2040043', style: 'textotabla'},
                        {text: [
                            {text: "Viking XL\n", style: "textotablaboldblack"},
                            {text: "Intelligent control box, operation panel, Hand control with cable, Electrical lifting/lowering motion (two speeds), Electrical base-width adjustment, Holder with Quick Reference Guide, Built-in charger, Wheels 100/125, Universal TwinBar 670. Max 300 kg (660 lbs).", style: "textotabla"},
                        ]},
                        { image: "images/Viking1.png", width: 70, height: 80, alignment: 'center'},
                        {text: '$6,521', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: '2040043', style: 'textotabla'},
                        {text: [
                            {text: "Viking XL\n", style: "textotablaboldblack"},
                            {text: "Intelligent control box, operation panel, Hand control with cable, Electrical lifting/lowering motion (two speeds), Electrical base-width adjustment, Holder with Quick Reference Guide, Built-in charger, Wheels 100/125, Universal TwinBar 670. Max 300 kg (660 lbs).", style: "textotabla"},
                        ]},
                        { image: "images/Viking2.png", width: 70, height: 80, alignment: 'center'},
                        {text: '$6,521', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: '2040043', style: 'textotabla'},
                        {text: [
                            {text: "Viking XL\n", style: "textotablaboldblack"},
                            {text: "Intelligent control box, operation panel, Hand control with cable, Electrical lifting/lowering motion (two speeds), Electrical base-width adjustment, Holder with Quick Reference Guide, Built-in charger, Wheels 100/125, Universal TwinBar 670. Max 300 kg (660 lbs).", style: "textotabla"},
                        ]},
                        { image: "images/Viking3.png", width: 70, height: 80, alignment: 'center'},
                        {text: '$6,521', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {},
                        {text: 'Option', style: 'textotablaboldblack', fillColor: '#dbdbdb', colSpan: 4},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: '2006106', style: 'textotablacatoni'},
                        {border: [true, false, true, false], text: 'Battery Lead Acid', style: 'textotablacatoni'}, 
                        { image: "images/Viking4.png", width: 20, height: 30, alignment: 'center', rowSpan: 3},
                        {border: [true, false, true, false], text: '$250', style: 'textotablacatoni', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: '2006106', style: 'textotablacatoni'},
                        {border: [true, false, true, false], text: 'Battery Lead Acid', style: 'textotablacatoni'}, 
                        {},
                        {border: [true, false, true, false], text: '$250', style: 'textotablacatoni', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, true], text: '2006110', style: 'textotablacatoni'},
                        {border: [true, false, true, true], text: 'Battery Lithium Ion', style: 'textotablacatoni'}, 
                        {}, 
                        {border: [true, false, true, true], text: '$506', style: 'textotablacatoni', alignment: 'center'}, 
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
        "\n",
        {text: "ACCESORIES", style: "textotablaboldlarge"},
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return viking;
}

module.exports = {
    getViking : getViking,
}