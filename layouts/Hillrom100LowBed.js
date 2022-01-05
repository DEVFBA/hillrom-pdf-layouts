const axios = require('axios');

async function getHilrom100LowBed()
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

    var hillroom100Low = [
        { text: 'Hillrom® 100 Low Bed', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Adjustable length 80"- 84"'},
                            { text: 'SlideGuard™ Frame Techn'},
                            { text: 'Auto Contour'},
                            { text: 'Surface Retainer'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '110 Voltage'},
                            { text: 'Vascular Lift'},
                            { text: 'Battery Backup'},
                            { text: ' Pendant Control'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: '3g" Casters'},
                            { text: 'Bed Weight: 300 lbs (136 kgs)'},
                            { text: 'Safe Working Load: 450 lbs (204 kgs)'},
                        ]				
                },
            ]
        },
        "\n",
        {
            table: {
                widths: ["*", 60, 60, 60],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'LOWBED', style: 'textotablacolor', colSpan: 3, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P3930A2', style: 'textotablaboldblack', colSpan: 3, alignment: 'center'},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Special Features', style: 'textotablabold'},
                        {text: 'LB-NONE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'LB-HALFF', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'LB-HALFC', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Stone Frame Color', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'No Side Rails', style: 'textotabla'},
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Fixed Assist Rails', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: 'X', style: 'textotabla', alignment: 'center'}, 
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '1/2 Clocking Assist Rails', style: 'textotabla'},
                        {text: '', style: 'textotabla', alignment: 'center'},
                        {text: '', style: 'textotabla', alignment: 'center'}, 
                        {text: 'X', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'Headboard Footboard Style (Standard or Sleek)', style: 'textotabla'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Finial Style - Standard', style: 'textotabla'},
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT (STND)', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Finial Style - Traditional (LB-TRAD)', style: 'textotabla'},
                        {text: '$149', style: 'textotabla', alignment: 'center'},
                        {text: '$149', style: 'textotabla', alignment: 'center'}, 
                        {text: '$149', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Casters (3" or NONE)', style: 'textotabla'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'},
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                        {text: 'OPT', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: "$2,793", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$2,793", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$2,793", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
            columns: [
                [
                    {text: 'Finish Options', style: 'textolista2'},
                    {text: 'V01 Red Oak', style: 'textolista2'},
                    {text: 'V02 Solara Oak', style: 'textolista2'},
                ],
                [
                    {text: '', style: 'textolista2'},
                    {text: 'V06 Acajou Mahogany', style: 'textolista2'},
                    {text: 'V07 American Natural', style: 'textolista2'},				
                ],
                [
                    {text: 'V08 Hayward Cherry', style: 'textolista2'},			
                ],
            ]
        },
        { text: '\n'},
        {
            image: "images/Hillrom100LowBed.png", width: 180, height: 120, alignment: 'center',
        },
        {text: '', pageBreak: 'after'  },
    ]

    return hillroom100Low;
}

module.exports = {
    getHilrom100LowBed : getHilrom100LowBed,
}