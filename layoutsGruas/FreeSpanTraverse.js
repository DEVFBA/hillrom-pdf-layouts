const dbProgressa = require('../controllers/progressa')

async function getFreespanTraverse()
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
        {border: [true, true, true, false], text: 'FreeSpan Rail 1,5 m LR (60 in), max 250 kg (550 lbs)', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/FreespanTraverse3.png", width: 80, height: 40, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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
        {border: [true, false, true, true], text: ''},
        {border: [true, false, true, true], text: 'Incl. screw set (8 pcs) for cross-beam.', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'FreeSpan Rail 1,5 m MR (59 in), max 250 kg (550 lbs)', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/FreespanTraverse4.png", width: 80, height: 40, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
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
        {border: [true, false, true, true], text: ''},
        {border: [true, false, true, true], text: 'Carriage S65 for Multirall (Prod. No. 3136011) is included in all of the above products.', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
     accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Parking Bracket and Bracket for Charger FreeSpan Traverse', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/FreespanTraverse5.png", width: 80, height: 40, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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
        {border: [true, false, true, true], text: ''},
        {border: [true, false, true, true], text: 'Fits charger Prod. No. 3126101-3126104.', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Parking Bracket and Bracket for Charger FreeSpan Traverse', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/FreespanTraverse6.png", width: 60, height: 40, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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
        {border: [true, false, true, true], text: ''},
        {border: [true, false, true, true], text: 'Incl. max. load decal 460 kg (1014 lbs). \nFits FreeSpan UltraTwin Traverse.', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    
    var freespanTraverse = [
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Freespan™ Traverse', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "FREESPAN TRAVERSE\n", style: "textotablaboldblack"},
                           {text: "Product specification for a complete product:\n", style: "textotabla"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-50 / 3103215-50) x 2 \nFreeSpan Upright Support (Prod. No. 3103515) \nFreeSpan Cross-beam (Prod. No. 3103020-3103040) \nStraight Rail H70, H100 or H140, \ndepending on cc-distance between the FreeSpan rails. \nEnd-stop (Prod. No. 3101060) \nTraverse Rail Carrier (3102531-3102532) \nParking Bracket FS Traverse (Prod. No. 3103502) \n(fits charger Prod. No. 3126101-3126104) \nLikorall/Multirall \nHand control \nSling bar / stretcher \nCharger \nSling\n", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanTraverse1.png", width: 100, height: 100, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\n\n\nMaximum load may vary between 200 kg (440 lbs) and 250 kg (550 lbs) depending on the length of the rail being used.', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "FREESPAN ULTRATWIN TRAVERSE\n", style: "textotablaboldblack"},
                           {text: "Product specification for a complete product:\n", style: "textotabla"},
                           {text: "FreeSpan Rail (Prod. No. 3103115-3103135) x 2 \nFreeSpan Upright Support (Prod. No. 3103515) \nFreeSpan Cross-beam (Prod. No. 3103020-3103040) \nStraight Rail H70, H100 or H140, \ndepending on cc-distance between the \nFreeSpan rails End-stop (Prod. No. 3101060) x 2 \nTraverse Rail Carrier (3102531-3102532) x 2 \nUltra Traverse Damper (Prod. No. 3103604) \nParking Bracket FS Traverse (Prod. No. 3103502) x 2 \n(fits charger Prod. No. 3126101-3126104) \nLikorall x 2 \nHand control x 2 \nSling bar x 2 / stretcher \nCharger x 2 \nSling", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreespanTraverse2.png", width: 100, height: 90, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\n\n\nMax. load 460 kg (1014 lbs)', style: 'textotabla',  alignment: 'center'},
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

    return freespanTraverse;
}

module.exports = {
    getFreespanTraverse : getFreespanTraverse,
}