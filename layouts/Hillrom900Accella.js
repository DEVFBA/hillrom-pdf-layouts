const axios = require('axios');
const dbHillrom900Accella = require('../controllers/hillrom900accella')

async function getHillrom900Accella()
{
    const res = await dbHillrom900Accella.getDataAccella()
    const prices = res[0]
    const optionsData = res[1]
    const castorsData  = res[2]
    const graphicalInterface = res[3]
    const steeringCastor = res[4]
    const plugsVoltages = res[5]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'X3', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<optionsData.length; i++)
    {
        var price = ""
        if(optionsData[i].Print_Character !== null)
        {
            if(optionsData[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(optionsData[i].Price)
        }

        options[pSItems] = [
            {text: optionsData[i].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: optionsData[i].Item_Long_Desc, style: 'textotabla'},
            {text: price, style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var castors = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    for(var i=0; i<castorsData.length; i++)
    {
        var price = ""
        if(castorsData[i].Print_Character !== null)
        {
            if(castorsData[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(castorsData[i].Price)
        }

        castors[pSItems] = [
            {text: castorsData[i].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: castorsData[i].Item_Long_Desc, style: 'textotabla'},
            {text: price, style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var graphical = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    for(var i=0; i<graphicalInterface.length; i++)
    {
        var price = ""
        if(graphicalInterface[i].Print_Character !== null)
        {
            if(graphicalInterface[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(graphicalInterface[i].Price)
        }

        graphical[pSItems] = [
            {text: graphicalInterface[i].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: graphicalInterface[i].Item_Long_Desc, style: 'textotabla'},
            {text: price, style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var steering = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    for(var i=0; i<steeringCastor.length; i++)
    {
        var price = ""
        if(steeringCastor[i].Print_Character !== null)
        {
            if(steeringCastor[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(steeringCastor[i].Price)
        }

        steering[pSItems] = [
            {text: steeringCastor[i].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: steeringCastor[i].Item_Long_Desc, style: 'textotabla'},
            {text: price, style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    var plug = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    for(var i=0; i<plugsVoltages.length; i++)
    {
        var price = ""
        if(plugsVoltages[i].Print_Character !== null)
        {
            if(plugsVoltages[i].Print_Character === "*")
            {
                price = "●"
            }
            else {
                price = "-"
            }
        }
        else {
            price = "$" + Intl.NumberFormat("en-IN").format(plugsVoltages[i].Price)
        }

        plug[pSItems] = [
            {text: plugsVoltages[i].Id_Item, style: 'textotabla', alignment: 'center'},
            {text: plugsVoltages[i].Item_Long_Desc, style: 'textotabla'},
            {text: price, style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var hillrom900Accella = [
        "\n",
        "\n",
        "\n",
        { text: 'Hillrom® 900 Accella', style: 'header', tocItem: 'hillroom900Accella'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Variable Height'},
                            { text: 'Electric Sliding Backrest (SlideGuard™)'},
                            { text: 'Electric Thigh Section'},
                            { text: 'Intelligent Autocontour'},
                            { text: 'One-Touch Side Egress positioning'},
                            { text: 'Low position indicator'},
                            { text: 'Bilateral emergency (Auto) CPR control'},
                            { text: 'Manually adjustable foot section'},
                            { text: 'Line-Of-Site™ Backrest indicator'},
                            { text: 'Electric Trendeleburg/Reverse Trendelenburg with Line-Of-Site™ angle indicator'},
                            { text: 'Intelligent night light'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'EasyChair™/flat positioning and low height indicator'},
                            { text: '4 section sleep deck with 3 removable panels'},
                            { text: 'Adjustable surfaces retainers'},
                            { text: 'Split siderails with integrated controls'},
                            { text: '4 corner bumpers and accessory holders'},
                            { text: '6 patient restraint strap holders'},
                            { text: 'Removable head and foot boards'},
                            { text: '250Kg Safe working Load'},
                            { text: 'Graphical Caregiver Interface (GCI)'},
                            { text: 'In bed Scale Class III OIML'},
                            { text: 'Brake Off indicator'},
                            { text: '30°/45° Head of bed angle alert'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Boost™ Function'},
                            { text: 'Central braking on 4 castors'},
                            { text: 'Electrical cord holder'},
                            { text: 'Bilateral accessory holders'},
                            { text: 'Stationary Head Section'},
                            { text: 'Bilateral function lockouts'},
                            { text: 'Battery'},
                            { text: 'Surface integration readiness'},
                            { text: 'Bed extension with linen holder'},
                        ]				
                },
            ]
        },
        {
            columns: [
                {
                    width: 70,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        widths: ["*", 130],
                        body: [
                            [
                                {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                {text: 'ACCELLA', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                { image: "images/Hillrom900Acella.png", width: 95, height: 75, alignment: 'center'},
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$" + Intl.NumberFormat("en-IN").format(prices[0].Price), style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            ],
                        ]
                    }	,
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
        },
        "\n",
        {
            table: {
                widths: [70, "*", 130],
                body: options
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
        { text: 'Castors', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 130],
                body: castors
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
        { text: 'Graphical Interface', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 130],
                body: graphical
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
        { text: 'Steering Castor', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 130],
                body: steering
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
        { text: 'Plug & Voltage', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 130],
                body: plug
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

    return hillrom900Accella;
}

module.exports = {
    getHillrom900Accella : getHillrom900Accella,
}