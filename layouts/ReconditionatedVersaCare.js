const axios = require('axios');

async function getReconditionatedVersaCare()
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
        {text: 'RVC955', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'RVC965', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC755', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC765', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'RVC155', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'RVC165', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "RVC-NUL", style: 'textotabla', alignment: 'center'},
        {text: "Siderail NurseCall, Universal TV and Lighting Controls (includes P3207A01 Docking Pendant) - Enables smart bed connectivity", style: 'textotabla'},
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-SNC", style: 'textotabla', alignment: 'center'},
        {text: "Siderail NurseCall (Does not include Docking Pendant) - Enables smart bed connectivity", style: 'textotabla'},
        {text: "$427", style: 'textotabla', alignment: 'center'}, 
        {text: "$427", style: 'textotabla', alignment: 'center'}, 
        {text: "$427", style: 'textotabla', alignment: 'center'}, 
        {text: "$427", style: 'textotabla', alignment: 'center'}, 
        {text: "$427", style: 'textotabla', alignment: 'center'}, 
        {text: "$427", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-SNC", style: 'textotabla', alignment: 'center'},
        {text: "Bed Controls Only, Exit alarm to nurse station, no n/c buttons in rails-enables smart bed connectivity", style: 'textotabla'},
        {text: "$186", style: 'textotabla', alignment: 'center'}, 
        {text: "$186", style: 'textotabla', alignment: 'center'}, 
        {text: "$186", style: 'textotabla', alignment: 'center'}, 
        {text: "$186", style: 'textotabla', alignment: 'center'}, 
        {text: "$186", style: 'textotabla', alignment: 'center'}, 
        {text: "$186", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-BOTH", style: 'textotabla', alignment: 'center'},
        {text: "Footend Fraction Frame Adaptor (factory installed) and Patient Helper Adaptor", style: 'textotabla'},
        {text: "$178", style: 'textotabla', alignment: 'center'}, 
        {text: "$178", style: 'textotabla', alignment: 'center'}, 
        {text: "$178", style: 'textotabla', alignment: 'center'}, 
        {text: "$178", style: 'textotabla', alignment: 'center'}, 
        {text: "$178", style: 'textotabla', alignment: 'center'}, 
        {text: "$178", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-AR", style: 'textotabla', alignment: 'center'},
        {text: "Accesory Outlet", style: 'textotabla'},
        {text: "$368", style: 'textotabla', alignment: 'center'}, 
        {text: "$368", style: 'textotabla', alignment: 'center'}, 
        {text: "$368", style: 'textotabla', alignment: 'center'}, 
        {text: "$368", style: 'textotabla', alignment: 'center'}, 
        {text: "$368", style: 'textotabla', alignment: 'center'}, 
        {text: "$368", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-OSI", style: 'textotabla', alignment: 'center'},
        {text: "P3212A Patient Helper Sleeve", style: 'textotabla'},
        {text: "$308", style: 'textotabla', alignment: 'center'}, 
        {text: "$308", style: 'textotabla', alignment: 'center'}, 
        {text: "$308", style: 'textotabla', alignment: 'center'}, 
        {text: "$308", style: 'textotabla', alignment: 'center'}, 
        {text: "$308", style: 'textotabla', alignment: 'center'}, 
        {text: "$308", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-EVACAIR", style: 'textotabla', alignment: 'center'},
        {text: "Versacare Evacuation Device", style: 'textotabla'},
        {text: "$105", style: 'textotabla', alignment: 'center'}, 
        {text: "$105", style: 'textotabla', alignment: 'center'}, 
        {text: "$105", style: 'textotabla', alignment: 'center'}, 
        {text: "$105", style: 'textotabla', alignment: 'center'}, 
        {text: "$105", style: 'textotabla', alignment: 'center'}, 
        {text: "$105", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-ID", style: 'textotabla', alignment: 'center'},
        {text: "IntelliDrive Powered Transport Mechanism", style: 'textotabla'},
        {text: "$4,367", style: 'textotabla', alignment: 'center'}, 
        {text: "$4,367", style: 'textotabla', alignment: 'center'}, 
        {text: "$4,367", style: 'textotabla', alignment: 'center'}, 
        {text: "$4,367", style: 'textotabla', alignment: 'center'}, 
        {text: "$4,367", style: 'textotabla', alignment: 'center'}, 
        {text: "$4,367", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-BES", style: 'textotabla', alignment: 'center'},
        {text: "Bed Exit Silence", style: 'textotabla'},
        {text: "$569", style: 'textotabla', alignment: 'center'}, 
        {text: "$569", style: 'textotabla', alignment: 'center'}, 
        {text: "$569", style: 'textotabla', alignment: 'center'}, 
        {text: "$569", style: 'textotabla', alignment: 'center'}, 
        {text: "$569", style: 'textotabla', alignment: 'center'}, 
        {text: "$569", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-LM", style: 'textotabla', alignment: 'center'},
        {text: "Line Manager", style: 'textotabla'},
        {text: "$149", style: 'textotabla', alignment: 'center'}, 
        {text: "$149", style: 'textotabla', alignment: 'center'}, 
        {text: "$149", style: 'textotabla', alignment: 'center'}, 
        {text: "$149", style: 'textotabla', alignment: 'center'}, 
        {text: "$149", style: 'textotabla', alignment: 'center'}, 
        {text: "$149", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-BO", style: 'textotabla', alignment: 'center'},
        {text: "Boost Function", style: 'textotabla'},
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'}, 
        {text: "$652", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-I", style: 'textotabla', alignment: 'center'},
        {text: "IV Push Handles", style: 'textotabla'},
        {text: "$942", style: 'textotabla', alignment: 'center'}, 
        {text: "$942", style: 'textotabla', alignment: 'center'}, 
        {text: "$942", style: 'textotabla', alignment: 'center'}, 
        {text: "$942", style: 'textotabla', alignment: 'center'}, 
        {text: "$942", style: 'textotabla', alignment: 'center'}, 
        {text: "$942", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "RVC-DA", style: 'textotabla', alignment: 'center'},
        {text: "Digital Head of Bed Angle Display and Alarm", style: 'textotabla'},
        {text: "$1,663", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,663", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,663", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,663", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,663", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,663", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var reconditionatedVersaCare = [
        { text: 'Reconditioned VersaCare® Bed', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Adjustable length 80"- 84"'},
                            { text: 'Audible Brake Alarms'},
                            { text: 'Cord Wrap Clips with IV Pole Storage'},
                            { text: 'Battery Back-Up'},
                            { text: '4-Corner Brake / Neutral / Steer Pedals'},
                            { text: 'Point-of-Care TM Siderail Controls'},
                            { text: 'Four IV Sockets'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Patient Controls Backlighting'},
                            { text: 'Handsfree Foot Controls for Bed Height'},
                            { text: 'Stationary Height Headboard'},
                            { text: 'TuckAway TM Siderails with OneStep Siderail Release'},
                            { text: 'Bed Scale Displays both Kilograms and Pounds'},
                            { text: 'Bed Controls Only (Does not include Docking Pendant)'},
                            { text: '5th Urethane Central Locking Caster System (Not Available w/intelliDrive)'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'FlexAfoot TM Retractable Foot Control'},
                            { text: 'Drainage Bag Holders'},
                            { text: 'Night Light'},
                            { text: 'Lone-of-Site Angle indicators'},
                            { text: 'Smart Bed Ready (Sidecom Required)'},
                            { text: 'Emergency CPR and Trendelenburg Release Mechanism'},
                            { text: 'Light Neutral End Panels'},
                        ]				
                },
            ]
        },
        "\n",
        {
            table: {
                widths: ["*", 30, 30, 30, 30, 30, 30],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'RECONVERSACARE', style: 'textotablacolor', colSpan: 6, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P3200', style: 'textotablaboldblack', colSpan: 6, alignment: 'center'},
                        {},
                        {},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Standard Features', style: 'textotablabold'},
                        {text: 'RVC955', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'RVC965', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'RVC755', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'RVC765', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'RVC155', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'RVC165', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: 'No surface package', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'P500 Surface with advanced Micro Climate Technology', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'A.I.R. TM ( Active Integrated Response TM) Pressure Relief Surface', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Scale (Kilograms or Pounds) and PPM', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Safe View Alert', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Accent Color - Light Neutral (LN)', style: 'textotabla'},
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT$', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Standard Pendant (ST) - when NUL selected', style: 'textotabla'},
                        {text: 'STND', style: 'textotabla', alignment: 'center'},
                        {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                        {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                        {text: 'STND', style: 'textotabla', alignment: 'center'},
                        {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                        {text: 'STND', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$17,889", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$18,568", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$15,314", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$15,993", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$10,444", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$11,122", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        {
            table: {
                widths: [40, "*", 30, 30, 30, 30, 30, 30],
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
        { text: '\n'},
        {
            columns: [
                [
                    { text: "\n\n\n\nAccent Color Options: \n LN - Light Neutral \n(Standard)", style: 'parrafo', alignment: 'right' },
                ],
                [
                    { image: "images/ReconditionatedVersaCare.png", width: 200, height: 140, alignment: 'left'},
                ],
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return reconditionatedVersaCare;
}

module.exports = {
    getReconditionatedVersaCare : getReconditionatedVersaCare,
}