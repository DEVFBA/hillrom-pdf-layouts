const dbProgressa = require('../controllers/progressa')

async function getRailSystemH100()
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
        {border: [true, true, true, false], text: '31013020N', style: 'textotabla'},
        {border: [true, true, true, false], text: '2,0 m Straight Rail H100 (78 in), natural', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/RailSystemH100.png", width: 80, height: 25, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$215', style: 'textotabla', alignment: 'center'},
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
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122005', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Likorall 242 ES, natural Max. 200Kg (440 lbs)', style: 'textotabla'},
        {border: [true, true, true, false], text: ""},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
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

    var accesories2 = []
    pSItems = 0;

    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428N', style: 'textotabla'},
        {border: [true, true, true, false], text: '2,8 m Straight Rail H140 (110 in), natural', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/RailSystemH1002.png", width: 80, height: 25, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$312', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var railSystemH100 = [
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H100', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H140', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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

    return railSystemH100;
}

module.exports = {
    getRailSystemH100 : getRailSystemH100,
}