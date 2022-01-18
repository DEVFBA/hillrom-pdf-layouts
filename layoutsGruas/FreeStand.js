const dbProgressa = require('../controllers/progressa')

async function getFreeStand()
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
        {border: [true, true, true, false], image: "images/FreeStand2.png", width: 80, height: 100, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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
        {border: [true, true, true, true], image: "images/FreeStand3.png", width: 40, height: 60, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
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

    var freeStand = [
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'FreeStand™', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                        {},
                        {}
                    ],
                    [
                        {border: [true, true, false, true], text: [
                           {text: "Product specification for a complete product:\n", style: "textotablaboldblack"},
                           {text: "Rail H100, max 3.2 m (126 in) \n FreeStand Upright Support, Prod. No. 3104001. \nFreeStand Parking Set (Prod. No. 3104002) \nCarriage\n Likorall/Multirall \n Charger \nHand control \nSling bar/stretcher \nSling", style: "textotabla"},
                        ]},
                        {border: [false, true, false, true], image: "images/FreeStand1.png", width: 120, height: 90, alignment: 'center'},
                        {border: [false, true, true, true], text: '\n\n\n\nMax. load 200 kg (440 lbs)', style: 'textotabla',  alignment: 'center'},
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

    return freeStand;
}

module.exports = {
    getFreeStand : getFreeStand,
}