const dbProgressa = require('../controllers/progressa')

async function getSabina()
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
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], image: "images/Sabina2.png", width: 30, height: 60, alignment: 'center', rowSpan: 5},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '2000100', style: 'textotabla'},
        {text: 'Holder for Quick Reference Guide', style: 'textotabla'},
        {},
        {text: '$30', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '2027011', style: 'textotabla'},
        {text: [
            {text: "Sabina II Heel Support\n", style: "textotablaboldblack"},
            {text: "Fits Sabina II and Sabina 200.,", style: "textotabla"}
        ]},
        {image: "images/Sabina3.png", width: 40, height: 30, alignment: 'center'},
        {text: '$30', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2027006', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "Sabina SeatStrap SlingBar\n", style: "textotablaboldblack"},
            {text: "fits Sabina, all models", style: "textotabla"}
        ]},
        {border: [true, false, true, false], image: "images/Sabina4.png", width: 50, height: 30, alignment: 'center', rowSpan: 3},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2027006', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "Sabina SeatStrap SlingBar\n", style: "textotablaboldblack"},
            {text: "fits Sabina, all models", style: "textotabla"}
        ]},
        {},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '2027006', style: 'textotabla'},
        {text: [
            {text: "Sabina SeatStrap,\n", style: "textotablaboldblack"},
            {text: "incl. 2 pcs Loop Clips Fits Sabina, all models. Max 200 kg (440 lbs).", style: "textotabla"}
        ]},
        {image: "images/Sabina5.png", width: 30, height: 30, alignment: 'center'},
        {text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '2027006', style: 'textotabla'},
        {text: [
            {text: "Sabina SeatStrap,\n", style: "textotabla"},
            {text: "incl. 2 pcs Loop Clips Fits Sabina, all models. Max 200 kg (440 lbs).", style: "textotabla"}
        ]},
        {image: "images/Sabina6.png", width: 50, height: 30, alignment: 'center'},
        {text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {text: 'SUPPORT VEST MOD 91', style: "textotablaboldblack", fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], image: "images/Sabina7.png", width: 60, height: 50, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "Sabina SeatStrap SlingBar\n", style: "textotabla"},
            {text: "fits Sabina, all models", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {text: '3691107', style: 'textotabla'},
        {text: [
            {text: "Extension Belt III for SupportVest,\n", style: "textotabla"},
            {text: "Extends 7-48 cm (3-19 in).", style: "textotabla"}
        ]},
        {image: "images/Sabina8.png", width: 60, height: 20, alignment: 'center'},
        {text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3691034', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Padding for Vest Mod.91 (3591134), S', style: 'textotabla'},
        {border: [true, false, true, false], image: "images/Sabina9.png", width: 60, height: 30, alignment: 'center', rowSpan: 3},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3691034', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Padding for Vest Mod.91 (3591134), S', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '3691034', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Padding for Vest Mod.91 (3591134), S', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '3691034', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Padding for Vest Mod.91 (3591134), S', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    accesories2[pSItems] =[
        {text: 'SAFETY VEST MOD 93', style: "textotablaboldblack", fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], image: "images/Sabina10.png", width: 60, height: 60, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {text: 'COMFORT VEST MOD 95', style: "textotablaboldblack", fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], image: "images/Sabina11.png", width: 60, height: 60, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "Sabina SeatStrap SlingBar\n", style: "textotabla"},
            {text: "fits Sabina, all models", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {text: 'SOLO SUPPORT VEST MOD 911', style: "textotablaboldblack", fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], image: "images/Sabina12.png", width: 60, height: 60, alignment: 'center', rowSpan: 3},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3591134', style: 'textotabla'},
        {border: [true, false, true, false], text: [
            {text: "SupportVest with padding, S, mod 91\n", style: "textotabla"},
            {text: "Incl. 2 pcs Loop Clips. Fits Sabina II 350 SlingBar.", style: "textotabla"}
        ]},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var sabina = [
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'SABINA', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {text: '\n\n\n\n\n\n\n\nSABINAII', style: 'textotablaboldblack', alignment: 'center', rowSpan: 5},
                        {text: '2040043', style: 'textotablacatoni'},
                        {text: [
                            {text: "SABINAII EE\n", style: "textotablaboldblack"},
                            {text: "Electrical lifting/lowering motion (two speeds), Electrical base-width adjustment, Holder with Quick Reference Guide, Built-in charger, Wheels 75/75. Max 200 kg (440 lbs).", style: "textotabla"},
                        ]},
                        { image: "images/Sabina1.png", width: 70, height: 70, alignment: 'center'},
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
                        {border: [true, false, true, false], text: '2006106', style: 'textotabla'},
                        {border: [true, false, true, false], text: 'Battery Lead Acid', style: 'textotabla'}, 
                        {border: [true, false, true, false], text: ''},
                        {border: [true, false, true, false], text: '$250', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, false], text: '2006106', style: 'textotabla'},
                        {border: [true, false, true, false], text: 'Battery Lead Acid', style: 'textotabla'}, 
                        {border: [true, false, true, false], text: ''},
                        {border: [true, false, true, false], text: '$250', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {},
                        {border: [true, false, true, true], text: '2006110', style: 'textotabla'},
                        {border: [true, false, true, true], text: 'Battery Lithium Ion', style: 'textotabla'}, 
                        {border: [true, false, true, true], text: ''},
                        {border: [true, false, true, true], text: '$506', style: 'textotabla', alignment: 'center'}, 
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
        "\n",
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

    return sabina;
}

module.exports = {
    getSabina : getSabina,
}