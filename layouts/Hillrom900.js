const axios = require('axios');

async function getHillrom900()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'X3', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "SHS", style: 'textotabla', alignment: 'center'},
        {text: "Stationary Head Section", style: 'textotabla'},
        {text: "$345", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "EC", style: 'textotabla', alignment: 'center'},
        {text: "EasyChair / flat positioning and low height indicator", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "HV", style: 'textotabla', alignment: 'center'},
        {text: "Bilateral High-Low foot control", style: 'textotabla'},
        {text: "$401", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "EXT-LNH", style: 'textotabla', alignment: 'center'},
        {text: "Bed extension with linen holder", style: 'textotabla'},
        {text: "$232", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "250K", style: 'textotabla', alignment: 'center'},
        {text: "250 kg SWL (not compatible with Shock Position)", style: 'textotabla'},
        {text: "$277", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BOA", style: 'textotabla', alignment: 'center'},
        {text: "Brake-off Indicator", style: 'textotabla'},
        {text: "$145", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "NL", style: 'textotabla', alignment: 'center'},
        {text: "Intelligent Night Light", style: 'textotabla'},
        {text: "$155", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "SHO + NL", style: 'textotabla', alignment: 'center'},
        {text: "Shock Position and Night Light with bilateral caregiver control panel (not compatible)", style: 'textotabla'},
        {text: "$330", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "SHO + NL + BOA", style: 'textotabla', alignment: 'center'},
        {text: "Shock Position, Night Light and Brake-off indicator with bilateral caregiver control panel (not compatible with 250K)", style: 'textotabla'},
        {text: "$478", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "FP", style: 'textotabla', alignment: 'center'},
        {text: "Caregiver foot end pendant (not compatible with BC nor BEA)", style: 'textotabla'},
        {text: "$324", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BEA + WCO + NL", style: 'textotabla', alignment: 'center'},
        {text: "3 Mode Bed Exit Alarm + 37 pin Wired connection + Intelligent night light (requires SHS)", style: 'textotabla'},
        {text: "$2,340", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "NC", style: 'textotabla', alignment: 'center'},
        {text: "Nurse call (only with BEA)", style: 'textotabla'},
        {text: "$339", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "ABF", style: 'textotabla', alignment: 'center'},
        {text: "Accessory bar support at foot (only with BEA)", style: 'textotabla'},
        {text: "$90", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    var controls = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    controls[pSItems] = [
        {text: "C0", style: 'textotabla', alignment: 'center'},
        {text: "One caregiver/patient hand pendant (not compatible with BEA)", style: 'textotabla'},
        {text: "$211", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "C0", style: 'textotabla', alignment: 'center'},
        {text: "One caregiver/patient hand pendant (only with BEA)", style: 'textotabla'},
        {text: "$211", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "B0", style: 'textotabla', alignment: 'center'},
        {text: "Control on flexible arm (Not compatible with BEA)", style: 'textotabla'},
        {text: "$466", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "BC", style: 'textotabla', alignment: 'center'},
        {text: "Control on flexible arm and caregiver/patient pendant control (not compatible with B)", style: 'textotabla'},
        {text: "$677", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    var brake = []
    pSItems = 0

    /*ESTO VA EN UN CICLO*/
    brake[pSItems] = [
        {text: "BRK", style: 'textotabla', alignment: 'center'},
        {text: "Brake and steer at head and foot end (only with SHS)", style: 'textotabla'},
        {text: "$151", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var castors = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
     castors[pSItems] = [
        {text: "R4", style: 'textotabla', alignment: 'center'},
        {text: "150 mm antistatic double band castors", style: 'textotabla'},
        {text: "$291", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    castors[pSItems] = [
        {text: "R6", style: 'textotabla', alignment: 'center'},
        {text: "25 mm antistatic double band castors (only with BEA)", style: 'textotabla'},
        {text: "$324", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var steering = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
     steering[pSItems] = [
        {text: "RDP", style: 'textotabla', alignment: 'center'},
        {text: "Steering wheel at footend", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    steering[pSItems] = [
        {text: "5RO", style: 'textotabla', alignment: 'center'},
        {text: "5th castor", style: 'textotabla'},
        {text: "$522", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var plug = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
    plug[pSItems] = [
        {text: "EU", style: 'textotabla', alignment: 'center'},
        {text: "EU Plug", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "UK", style: 'textotabla', alignment: 'center'},
        {text: "UK Plug", style: 'textotabla'},
        {text: "$18", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "IT", style: 'textotabla', alignment: 'center'},
        {text: "Italian Plug", style: 'textotabla'},
        {text: "$60", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "US", style: 'textotabla', alignment: 'center'},
        {text: "USA Plug", style: 'textotabla'},
        {text: "$23", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "AU", style: 'textotabla', alignment: 'center'},
        {text: "Australian Plug", style: 'textotabla'},
        {text: "$60", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "BZ", style: 'textotabla', alignment: 'center'},
        {text: "Brazilian Plug", style: 'textotabla'},
        {text: "$124", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "230V", style: 'textotabla', alignment: 'center'},
        {text: "230V", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    plug[pSItems] = [
        {text: "120V", style: 'textotabla', alignment: 'center'},
        {text: "120V", style: 'textotabla'},
        {text: "$114", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var hillrom900 = [
        { text: 'Hillrom® 900', style: 'header', tocItem: 'hillrom900'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Variable Height'},
                            { text: 'SlideGuardTM Electric Sliding Backrest'},
                            { text: 'Electric Thigh Section'},
                            { text: 'Intelligent Autocontour'},
                            { text: 'One-Touch Side Egress positioning'},
                            { text: 'Manually adjustable foot section'},
                            { text: 'Bilateral emergency CPR control'},
                            { text: 'Bilateral lockout bed functions'},
                            { text: 'Low height indicator'},
                            { text: 'Electric cord holder'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Electric Trendeleburg/Reverse Trendelenburg with Line-Of-SiteTM angle indicator'},
                            { text: 'Line-Of-SiteTM Backrest indicator'},
                            { text: 'Mobile head section'},
                            { text: 'Battery'},
                            { text: '4 section sleep deck with removable panels'},
                            { text: 'Adjustable surface retainers'},
                            { text: 'Bilateral accessory holder'},
                            { text: '4 corner bumpers and accessory holders'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Removable head and foot boards'},
                            { text: 'Endboard locks'},
                            { text: 'Central braking on 4 castors'},
                            { text: '150 mm Integral Castors'},
                            { text: 'Brake and steer at foot end'},
                            { text: '220 kg/ 250 kg Safe Working Load'},
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
                        widths: ["*", 100],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: 'HILLROM900', style: 'textotablabold',  alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                {text: 'X3', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: '', style: 'textotablabold'},
                                { image: "images/Hillrom900.png", width: 65, height: 45, alignment: 'center'},
                            ],
                            [
                                {text: 'Split siderails with integrated controls', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$5,687", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
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
            ]
        },
        "\n",
        {
            table: {
                widths: [70, "*", 100],
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
        { text: 'Controls', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 100],
                body: controls
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
        { text: 'Brake and Steer', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 100],
                body: brake
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
                widths: [70, "*", 100],
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
        { text: 'Steering Wheel', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, "*", 100],
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
                widths: [70, "*", 100],
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
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {text: '', pageBreak: 'after'  },
    ]

    return hillrom900;
}

module.exports = {
    getHillrom900 : getHillrom900,
}