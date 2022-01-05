const axios = require('axios');

async function getAffinity4BirthingBed()
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
        {text: 'C', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'D', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'C', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'D', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'C', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'D', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'C', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'D', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Seat Cut", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "S", style: 'textotabla', alignment: 'center'},
        {text: "Straight Cut", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "V", style: 'textotabla', alignment: 'center'},
        {text: "V Cut", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: 'Surface Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "4.5", style: 'textotabla', alignment: 'center'},
        {text: 'Thickness 4.5" (11,4 cm)', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Additionnal Options', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "CALF", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports", style: 'textotabla'},
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'},
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'},
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "PH", style: 'textotabla', alignment: 'center'},
        {text: "Push Handles with IV Hook", style: 'textotabla'},
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
        {text: "$425", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    /*TERMINA CICLO*/

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 5" Head Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

     /*ESTO VA EN UN CICLO*/
    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Foam "V" Cut', style: 'textotabla'},
        {text: "P3610FB01", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,129", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: "Foam Straight Cut (Previously S4622802)", style: 'textotabla'},
        {text: "P3611FB01", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,129", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: "Air Straight Cut (Previously S4622602)", style: 'textotabla'},
        {text: "P3614FB01", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,040", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Air "V" Cut (Previously S4622602)', style: 'textotabla'},
        {text: "P3615FB01", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,040", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 4.5" Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: "Foam Straight Cut (Previously S4622802)", style: 'textotabla'},
        {text: "P3611FB01", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,129", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Foam "V" Cut (Lift-Off)', style: 'textotabla'},
        {text: "P3610FB02", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,020", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

     surfaces[pSItems] = [
        {text: 'Replacement Surfaces, 3.5" Foot Section', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Foam "V" Cut (Lift-Off)', style: 'textotabla'},
        {text: "P3610FB03", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,020", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Foam "V" Cut (Stow and Go) - Bed revision A & B', style: 'textotabla'},
        {text: "P3610FB04", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,020", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "AFFINITYMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Foam "V" Cut (Stow and Go) - Bed revision A & B', style: 'textotabla'},
        {text: "P3610FB04", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,020", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    var accesories = []
    pSItems = 0

    accesories[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     accesories[pSItems] = [
        {text: "MISCACCESSORIES", style: 'textotabla', alignment: 'center'},
        {text: "Removable two section, telescopic IV pole", style: 'textotabla'},
        {text: "P2217A", style: 'textotabla', alignment: 'center'}, 
        {text: "$117", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "MISCACCESSORIES", style: 'textotabla', alignment: 'center'},
        {text: "Vertical Oxygen Tank Holder", style: 'textotabla'},
        {text: "P27601", style: 'textotabla', alignment: 'center'}, 
        {text: "$385", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Universal Instrument Tray", style: 'textotabla'},
        {text: "P278B", style: 'textotabla', alignment: 'center'}, 
        {text: "$375", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Universal Instrument Tray", style: 'textotabla'},
        {text: "P278B", style: 'textotabla', alignment: 'center'}, 
        {text: "$375", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports, Telescoping (Fully Padded w/Telescoping Height Adjustment) - Pair", style: 'textotabla'},
        {text: "P35745A", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,152", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Labor Bar", style: 'textotabla'},
        {text: "P3613B", style: 'textotabla', alignment: 'center'}, 
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Drainage Bag (Foley) Hook Kit", style: 'textotabla'},
        {text: "P3623", style: 'textotabla', alignment: 'center'}, 
        {text: "$262", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P3705A", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,190", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "2 Permanent IV poles 18 kg (foldable)", style: 'textotabla'},
        {text: "P3732A", style: 'textotabla', alignment: 'center'}, 
        {text: "$588", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Integrated line managers", style: 'textotabla'},
        {text: "P3733A", style: 'textotabla', alignment: 'center'}, 
        {text: "$193", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Full Leg Supports, Telescoping (Fully Padded W/Telescoping Height Adjustment) - Pair", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var affinity4 = [
        { text: 'Affinity™ 4 Birthing Bed', style: 'header', tocItem: 'compella'},
        { text: 'Maternity', style: 'subheader', tocItem: 'compella'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'V-Cut or Straight Cut Surface'},
                            { text: 'Removable Foot Section'},
                            { text: 'Battery Back-up'},
                            { text: 'Powered Foot Section'},
                            { text: 'Four Wheel Dual Locking Castors'},
                            { text: 'Safe Working Load 227 kg'},
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Automatic Nightlight'},
                            { text: 'Lock-out controls'},
                            { text: 'Manual Trend-like positioning'},
                            { text: 'Instant CPR'},
                            { text: 'Instant Labor Grips'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Siderail Controls'},
                            { text: 'IV Pole'},
                            { text: 'Hinged Foot Section Surface'},
                            { text: 'Central Brake and Steer'},
                            { text: 'Instant Labor Grips'},
                        ]				
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Automatic Seat Tilt (15 degrees)'},
                            { text: 'Forward locking steer castor'},
                            { text: '100V-120V or 230V'},
                            { text: 'OneStep® Siderail Release'},
                            { text: '150 mm Castors (6 inches)'},
                        ]				
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 80,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        widths: ["*", 30, 30, 30, 30, 30, 30, 30, 30,],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'AFFINITY4', style: 'textotablacolor', colSpan: 8, fillColor: '#546ce4',  alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P3700', style: 'textotablaboldblack', colSpan: 8,  alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'AF400', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF450', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF500', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF550', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF600', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF650', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF700', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'AF750', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                            ],
                            [
                                {text: 'Prevention (Foam) Surface', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Air Package (Lumbar & Seat)', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Nurse Call, lighting, Entertainment &', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Lift-Off Foot Section', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'},  
                            ],
                            [
                                {text: 'Stow and Go Foot Section', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Plastic Blow Molded Head Panel* - (', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$30,315", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$31,557", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$36,191", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$37,323", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$35,670", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$36,944", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$40,860", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$41,958", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
                widths: [50, "*", 30, 30, 30, 30, 30, 30, 30, 30],
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
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        "\n",
        {
            columns: [
                [
                    { text: "Country Code Options - Determines Power Cord and Voltage Decals", style: 'textotablabold' },
                    { text: "C - Australia Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "D - United Kingdom Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "E - Denmark Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "F - Continental Europe Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "K - North American Power Cord (for 120 volts with English Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "L - Switzerland Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "P - North American/Japan Power Cord (for 110 volts International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "Q - China Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "S - Israel Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                    { text: '\n', style: 'minispace' },
                    { text: "T - Argentina Power Cord (for 230 volts with International Decals)", style: 'textolista' },
                ],
                [
                    { image: "images/Affinity4BirthingBed.png", width: 230, height: 160, alignment: 'center'},
                ]
            ]
        },
        { text: "* Wood Grain Laminate Options:", style: 'textotablabold' },
        { text: "734- Natural Maple", style: 'textolista' },
        { text: '\n', style: 'minispace' },
        { text: "705 - Wild Cherry", style: 'textolista' },
        { text: '\n', style: 'minispace' },
        { text: "935 - Shaker Cherry", style: 'textolista' },
        { text: '\n', style: 'minispace' },
        { text: "70T - Montana Walnut", style: 'textolista' },
        { text: '\n', style: 'minispace' },
        { text: "WM9 - Honey Maple", style: 'textolista' },
        { text: '\n', style: 'minispace' },
        { text: "MOK - Medium Oak", style: 'textolista' },
        {text: '', pageBreak: 'after'  },
        '\n',
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, '*', 70, 70],
                body: surfaces
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
        '\n',
        { text: 'ACCESORIES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [80, "*", 80, 80],
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

    return affinity4;
}

module.exports = {
    getAffinity4BirthingBed : getAffinity4BirthingBed,
}