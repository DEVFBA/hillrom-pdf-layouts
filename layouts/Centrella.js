async function getCentrella()
{
    const fecha = new Date();
    fecha.toLocaleDateString()

    var centrella = [
        "\n",
        "\n",
        "\n",
        { text: 'Centrella™ Smart+ Bed', style: 'header', tocItem: 'centrella'},
        { text: 'Bariatric\n', style: 'subheader' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                [
                    {text: "Caregiver-Centric Design Principles", style: "textotablaboldblack"},
                    {
                        style:'textotablacatoni',
                        ul: [
                                { text: 'Graphical Caregiver InterfaceTM Touchscreen (Left Side)'},
                                { text: 'Bed Exit Silence'},
                                { text: 'Brake Not Set Alarm'},
                                { text: 'One Button Chair'},
                                { text: 'Scale (KG/LBS)'},
                                { text: 'Battery Backup'},
                                { text: 'Digital Angle Indicator'},
                                { text: 'Four Corner Break and Steer'},
                                { text: 'Built in Line and Cord Management'},
                                { text: '4 IV Pole Sockets'},
                                { text: 'Integrated Restraint Holders'},
                                { text: 'Lockout Controls'},
                                { text: 'Drainage Bag Holder'},
                                { text: 'Smart Bed Ready (Sidecom Required)'}
                            ]
                    }
                ],
                [
                    {text: "Optimized Patient Safety Features", style: "textotablaboldblack"},
                    {
                        style:'textotablacatoni',
                        ul: [
                                { text: 'Enhanced 3-Mode Bed Exit'},
                                { text: 'Motion Activated Nightlight'},
                                { text: 'Stand Assist'},
                                { text: 'Advanced SlideGuardTM'},
                                { text: 'Foley Position Limit'},
                                { text: 'Patient HOB Angle Display'},
                                { text: 'Dampened Emergeny CPR'},
                                { text: 'Trendelenburg/Reverse Trendelenburg'}
                            ]
                    },
                    { text: '\n', style: 'parrafo' },
                    {text: "Enhanced Patient Satisfaction Features", style: "textotablaboldblack"},
                    {
                        style:'textotablacatoni',
                        ul: [
                                { text: 'Patient Storage in Siderail'},
                                { text: 'Integrated Urinal Holders'},
                                { text: 'FlexAFootTM Powered Bed Extension'},
                                { text: ' Wifi'},
                            ]
                    }
                ],
                [
                    {text: "Design Specifications", style: "textotablaboldblack"},
                    {
                        style:'textotablacatoni',
                        ul: [
                                { text: 'Safe Working Load: 650 lb'},
                                { text: 'Max Patient Weight: 500 lb'},
                                { text: '5 Central Locking Caster System'},
                            ]
                    }
                ],
            ]
        },
        {
            table: {
                widths: ["*", 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: 'CENTRELLABED', style: 'textotablaboldblack', colSpan: 12,  alignment: 'center'},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P7900', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center', colSpan: 12},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {image: "images/Centrella.png", width: 100, height: 50, alignment: 'center', colSpan: 12},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'CNT-BASE', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-BASE1', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE3', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE5', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK255', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK2555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK3553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Base Frame (does not include Verbal Alerts or USB)', style: 'textotablacentrella'},
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$9,344', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'CentrellaTM Base Frame (does not include Verbal Alerts or USB) with CFCM activation for one year (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacentrella'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$10,580', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'CentrellaTM Base Frame (does not include Verbal Alerts or USB) with CFCM activation for three years (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacentrella'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$12,434', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'CentrellaTM Base Frame (does not include Verbal Alerts or USB) with CFCM activation for five years (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacentrella'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$13,979', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 255 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready', style: 'textotablacentrella'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,097', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 2551 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready with CFCM activation for one year (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,333', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 2553 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready with CFCM activation for three years (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,279', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 2555 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready with CFCM activation for five years (Requires Sidecom/NUL/SNC & Safeview)', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$7,871', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 355 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready, MAX', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$14,408', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},  
                    ],
                    [
                        {text: 'Centrella® Pkg 3551 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready, MAX Surface, 2nd GCI with CFCM activation for one year', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$15,644', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 3553 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready, MAX Surface, 2nd GCI with CFCM activation for three years', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$17,498', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pkg 3555 includes Verbal Alerts, USB, Patient Pendant, Upgradeability, HR/RR Monitoring Ready, MAX Surface, 2nd GCI with CFCM activation for five years', style: 'textotablacatoni'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '-', style: 'textotablacentrella', alignment: 'center'},
                        {text: '-', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$19,043', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'TOTAL', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$9,344', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'},
                        {text: '$10,580', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$12,434', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$13,979', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'},
                        {text: '$12,441', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$13,677', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$15,623', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'},
                        {text: '$17,215', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$23,752', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$24,988', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'},
                        {text: '$26,842', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
                        {text: '$28,387', style: 'textotablacolorcentrella', alignment: 'center', fillColor: '#546ce4'}, 
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
                widths: ["*", 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Optimized Patient Safety Features', style: 'textotablabold'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'Centrella® MAX Air Surface - For 36" Frame (included with CNT-PAK355) Includes Blower, Comfort Controls, Enhanced Turn Assist, and Focused Advanced MicroclimateTMTechnology', style: 'textotablacentrella'},
                        {text: 'CNT-MAX36', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$10,976', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® MAX Air Surface - For 40" Frame (CNT-BASE or CNT-PAK255) Includes Blower, Comfort Controls, Enhanced Turn Assist, and Focused Advanced MicroclimateTMTechnology', style: 'textotablacentrella'},
                        {text: 'CNT-MAX40', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$11,313', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® PRO Surface - For 36" Frame (P7921A01) (not available on CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-PRO36', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,320', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® PRO Surface - For 40" Frame (P7921A02) (not available on CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-PRO40', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® CORE Surface - For 36" Frame (P7920A) (not available on CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-CORE36', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® MAX Air Surface Upgrade - For 40" Frame (CNT-PAK355 only) Includes Blower, Comfort Controls, Enhanced Turn Assist, and Focused Advanced MicroclimateTMTechnology', style: 'textotablacatoni'},
                        {text: 'CNT-MAX36U', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 36" without X-RAY (P7923A03)', style: 'textotablacatoni'},
                        {text: 'CNT-PP3', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 36" with X-RAY (P7923A01)', style: 'textotablacatoni'},
                        {text: 'CNT-PP3X', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 40" without X-RAY (P7923A04)', style: 'textotablacatoni'},
                        {text: 'CNT-PP4', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,165', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},  
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 40" with X-RAY (P7923A02)', style: 'textotablacatoni'},
                        {text: 'CNT-PP4X', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,670', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'HR/RR Monitoring Hardware (Must order Activation at Point of Sale to get CNT-BASE as an Option) (Activation entered as separate Line)', style: 'textotablacatoni'},
                        {text: '', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'OPTION', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
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
        {text: '', pageBreak: 'after'},
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: ["*", 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Enhanced Patient Satisfaction Features', style: 'textotablabold'},
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'CNT-BASE', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-BASE1', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE3', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE5', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK255', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK2555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK3553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: '36" Frame Width', style: 'textotablacentrella'},
                        {text: '', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: '40" Frame Width - Comfort Edition', style: 'textotablacentrella'},
                        {text: 'CNT-40', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$3,378', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Patient Pendant (Included with CNT-PAK255 and CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-PEN', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: '2nd Patient Pendant', style: 'textotablacentrella'},
                        {text: 'CNT-2PEN', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$155', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,657', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® CORE Surface - For 36" Frame (P7920A) (not available on CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-CORE36', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$773', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® MAX Air Surface Upgrade - For 40" Frame (CNT-PAK355 only) Includes Blower, Comfort Controls, Enhanced Turn Assist, and Focused Advanced MicroclimateTMTechnology', style: 'textotablacatoni'},
                        {text: 'CNT-MAX36U', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$339', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 36" without X-RAY (P7923A03)', style: 'textotablacatoni'},
                        {text: 'CNT-PP3', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$5,838', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Centrella® Pro+ Surface 36" with X-RAY (P7923A01)', style: 'textotablacatoni'},
                        {text: 'CNT-PP3X', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$6,342', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
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
                widths: ["*", 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
                body: [
                    [
                        {border: [false, false, false, false], text: 'Caregiver-Centric Design Principles', style: 'textotablabold'},
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'CNT-BASE', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-BASE1', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE3', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-BASE5', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK255', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK2553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK2555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3551', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'CNT-PAK3553', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: 'CNT-PAK3555', style: 'textotablacolorcentrella', fillColor: '#546ce4', alignment: 'center'}, 
                    ],
                    [
                        {text: 'SafeView®+ System with IllumiGuideTM Siderail Handgrip (included with CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-SV', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$987', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'N/A', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Fifth Wheel Steering', style: 'textotablacentrella'},
                        {text: 'CNT-5W', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$571', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'IntelliDrive® Powered Transport', style: 'textotablacentrella'},
                        {text: 'CNT-ID', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419L', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$4,419', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: '2nd Graphical Caregiver InterfaceTM Touchscreen (Right Side) (included with CNT-PAK355)', style: 'textotablacentrella'},
                        {text: 'CNT-2LCD', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$238', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'},
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: 'INCL', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Accessory Outlet', style: 'textotablacentrella'},
                        {text: 'CNT-AR', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$373', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Additional Line Management (P7512A)', style: 'textotablacatoni'},
                        {text: 'CNT-LM', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$152', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Removable IV Pole (P2217A)', style: 'textotablacatoni'},
                        {text: '', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$0', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Permanent IV Pole (P7511A)', style: 'textotablacatoni'},
                        {text: 'CNT-PIV', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$262', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Patient Helper Sleeve - OSI Compatible Only (P3212A)', style: 'textotablacatoni'},
                        {text: 'CNT-OSI', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$328', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Patient Helper Bracket (P7938A)', style: 'textotablacatoni'},
                        {text: 'CNT-PHB', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$164', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Footend Traction Adaptor', style: 'textotablacatoni'},
                        {text: 'CNT-FTA', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$100', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Transport Shelf (P7524A)', style: 'textotablacatoni'},
                        {text: 'CNT-TS', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$327', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Ergonomic Push Handles (P7929C) (Not used with IntelliDrive® Powered Transport)', style: 'textotablacatoni'},
                        {text: 'CNT-PH', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$163', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'BlackJack Magnetic Cable Kit (Requires Sidecom)', style: 'textotablacatoni'},
                        {text: 'CNT-BJC', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$411', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'BlackJack Dummy Plug', style: 'textotablacatoni'},
                        {text: 'CNT-BJCD', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$68', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Air Blower (No Surface) (not available on CNT-PAK355)', style: 'textotablacatoni'},
                        {text: 'CNT-BLO', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$2,954', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Obstacle Detect® System', style: 'textotablacatoni'},
                        {text: 'CNT-OD', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$137', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'Watchcare (Requires NUL or SNC and Safeview)', style: 'textotablacatoni'},
                        {text: 'CNT-WC', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$1,313', style: 'textotablacentrella', alignment: 'center'}, 
                    ],
                    [
                        {text: 'X-Ray Sleeve (Requires 36" MAX Surface, US only)', style: 'textotablacatoni'},
                        {text: 'CNT-XRAY', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'},
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
                        {text: '$521', style: 'textotablacentrella', alignment: 'center'}, 
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
        { text: 'Frames: Bed: CentrellaTM Smart+ Bed Accessories', style: 'textotablaboldlarge' },
        { text: 'Hillrom offers these accessories for the CentrellaTM Smart+ Bed', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [150, "*", 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAACC', style: 'textotablaboldblack'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7926A03', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Experience Pod Standard, Built-in Pendant, No Air, No Entertainment - Installation NOT Included', style: 'textotabla'},
                        {text: '$1,679', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7926A04', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Experience Pod Standard, Built-in Pendant, No Air, Entertainment - Installation NOT Included', style: 'textotabla'},
                        {text: '$1,679', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7926A05', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Experience Pod Premium, Built-in Pendant, Air, No Entertainment - Installation NOT Included', style: 'textotabla'},
                        {text: '$1,679', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7926A06', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Experience Pod Premium, Built-in Pendant, Air, Entertainment - Installation NOT Included', style: 'textotabla'},
                        {text: '$1,679', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7926A07', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Experience Pod Basic, No Pendant - Installation NOT Included', style: 'textotabla'},
                        {text: '$1,212', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7927A1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Foot End Traction Adaptor (Head End Included in Frame), English', style: 'textotabla'},
                        {text: '$100', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7928A', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Patient Helper Bracket (Zimmer, OSI, TMI) for older base frame beds', style: 'textotabla'},
                        {text: '$164', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7929C', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Ergonomic Push Handles', style: 'textotabla'},
                        {text: '$163', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7932B03', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Pendant w/o Air w/o Entertainment', style: 'textotabla'},
                        {text: '$155', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7932B04', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Pendant w/o Air w/Entertainment', style: 'textotabla'},
                        {text: '$155', style: 'textotabla'},
                    ],
                    [
                        {text: 'CCNT-P7932B05', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Pendant w/Air w/o Entertainment', style: 'textotabla'},
                        {text: '$155', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7932B06', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Pendant w/Air w/Entertainment', style: 'textotabla'},
                        {text: '$155', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A16', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Sidecom Upgrade Kit', style: 'textotabla'},
                        {text: '$1,584', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A21', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Head End Restraint', style: 'textotabla'},
                        {text: '$182', style: 'textotabla'},
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
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [150, "*", 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAACC', style: 'textotablaboldblack'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7934A101', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Patient Helper Assembly (Whole System Includes arm and trapeze handle), English', style: 'textotabla'},
                        {text: '$1,592', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7935A', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Patient Helper Bracket', style: 'textotabla'},
                        {text: '$164', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7936A1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Patient Helper Arm, English', style: 'textotabla'},
                        {text: '$1,431', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7937A1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Traction Adapter, English', style: 'textotabla'},
                        {text: '$102', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7938A', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Patient Helper Bracket (Zimmer, OSI, TMI) for newer base frame beds', style: 'textotabla'},
                        {text: '$164', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7939A', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Heavy Duty Patient Helper Mount (Only available on B1 or newer Revs)', style: 'textotabla'},
                        {text: '$164', style: 'textotabla'},
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
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [150, "*", 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'HRRRACTIVATION', style: 'textotablaboldblack'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'ACT-CFCM1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Sensor Activated One Year(Requires Sidecom or NUL or SNC and Safeview)', style: 'textotabla'},
                        {text: '$1,442', style: 'textotabla'},
                    ],
                    [
                        {text: 'ACT-CFCM3', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Sensor Activated Three Years(Requires Sidecom or NUL or SNC and Safeview)', style: 'textotabla'},
                        {text: '$3,298', style: 'textotabla'},
                    ],
                    [
                        {text: 'ACT-CFCM5', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Sensor Activated Five Years(Requires Sidecom or NUL or SNC and Safeview)', style: 'textotabla'},
                        {text: '$4,841', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'HRRREXTEND', style: 'textotablaboldblack'},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'EXT-CFCM1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Extended for One Year - No new sensor required', style: 'textotabla'},
                        {text: '$1,236', style: 'textotabla'},
                    ],
                    [
                        {text: 'EXT-CFCM2', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Extended for Two Years - No new sensor required', style: 'textotabla'},
                        {text: '$2,266', style: 'textotabla'},
                    ],
                    [
                        {text: 'EXT-CFCM3', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Extended for Three Years - No new sensor required', style: 'textotabla'},
                        {text: '$3,090', style: 'textotabla'},
                    ],
                    [
                        {text: 'EXT-CFCM4', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Extended for Four Years - No new sensor required', style: 'textotabla'},
                        {text: '$3,914', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'HRRRMONITORINGUPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'UPG-CFCM1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only)(Requires Sidecom or NUL or SNC and Safeview) - Includes installation by a Hill-Rom Certified Technician and One Year Activation', style: 'textotabla'},
                        {text: '$1,442', style: 'textotabla'},
                    ],
                    [
                        {text: 'UPG-CFCM3', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only)(Requires Sidecom or NUL or SNC and Safeview) - Includes $3,298 installation by a Hill-Rom Certified Technician and Three Year Activation', style: 'textotabla'},
                        {text: '$3,298', style: 'textotabla'},
                    ],
                    [
                        {text: 'UPG-CFCM5', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only) (Requires Sidecom or NUL or SNC and Safeview)- Includes installation by a Hill-Rom Certified Technician and Five Year Activation', style: 'textotabla'},
                        {text: '$4,841', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'HRRRRENEWAL', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'RENW-CFCM1', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring One Year with new sensor', style: 'textotabla'},
                        {text: '$1,236', style: 'textotabla'},
                    ],
                    [
                        {text: 'RENW-CFCM2', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Two Years with new sensor', style: 'textotabla'},
                        {text: '$2,266', style: 'textotabla'},
                    ],
                    [
                        {text: 'RENW-CFCM3', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Three Years with new sensor', style: 'textotabla'},
                        {text: '$3,090', style: 'textotabla'},
                    ],
                    [
                        {text: 'RENW-CFCM4', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Four Years with new sensor', style: 'textotabla'},
                        {text: '$3,914', style: 'textotabla'},
                    ],
                    [
                        {text: 'RENW-CFCM5', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'P7900 CentrellaTM Contact-Free, Continuous Monitoring Five Years with new sensor', style: 'textotabla'},
                        {text: '$4,635', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'MISCACCESSORIES', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'MS-P008783AFA', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: "Black Jack Magnetic Breakaway Cable Kit (6' female cable, 2’ male to female cable with magnetic brick, all necessary hardware)", style: 'textotabla'},
                        {text: '$411', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P008783DFA', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Black Jack Dummy Plug', style: 'textotabla'},
                        {text: '$73', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P008783GFA', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Black Jack Gender Changers', style: 'textotabla'},
                        {text: '$25', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P27601', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Vertical Oxygen Tank Holder (Compatible on Advanta2, CareAssist, Compella, TotalCare, Resident LTC, Stretcher, Centrella) Installed at the Foot. $332 When in chair position, does not touch the floor.', style: 'textotabla'},
                        {text: '$332', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P7511A', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Permanent IV Pole', style: 'textotabla'},
                        {text: '$262', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P7512A', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Line Manager Kit - Rev A', style: 'textotabla'},
                        {text: '$152', style: 'textotabla'},
                    ],
                    [
                        {text: 'MS-P7524A', style: 'textotabla'},
                        {text: 'MDG', style: 'textotabla'},
                        {text: 'Transport Shelves', style: 'textotabla'},
                        {text: '$335', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'WATCHCAREUPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'P00697905', style: 'textotabla'},
                        {text: 'WSP', style: 'textotabla'},
                        {text: "WatchCare Incontinence Management System Upgrade Kit, Centrella - Includes Installation", style: 'textotabla'},
                        {text: '$1,313', style: 'textotabla'},
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
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        { text: 'Frames: Bed: CentrellaTM Smart+ Bed Surfaces', style: 'textotablaboldlarge' },
        { text: 'Hillrom offers these surfaces for the CentrellaTM Smart+ Bed', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [150, "*", 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAMAT', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7920A', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM CORE Surface For 36" Frame', style: 'textotabla'},
                        {text: '$773', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7921A01', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM PRO Surface For 36" Frame', style: 'textotabla'},
                        {text: '$1,320', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7921A02', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM PRO Surface For 40" Frame', style: 'textotabla'},
                        {text: '$1,657', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7922A01', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM MAX Air Surface For 36" Frame (Does not include blower)', style: 'textotabla'},
                        {text: '$8,024', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7922A02', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM MAX Air Surface For 40" Frame Comfort Edition (Does not include blower)', style: 'textotabla'},
                        {text: '$8,362', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7922A03', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM MAX Air Surface with X-Ray Sleeve For 36" Frame (Does not include blower) - US Only', style: 'textotabla'},
                        {text: '$8,543', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'PROPLUS', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7933A20', style: 'textotabla'},
                        {text: 'CNB', style: 'textotabla'},
                        {text: 'CentrellaTM Pro+ Surface Upgrade Kit', style: 'textotabla'},
                        {text: '$258', style: 'textotabla'},
                    ],
                    [
                        {text: 'P7923A01', style: 'textotabla'},
                        {text: 'CNB', style: 'textotabla'},
                        {text: 'CentrellaTM Pro+ Surface 36" Wide with X-Ray (Integrated)', style: 'textotabla'},
                        {text: '$6,342', style: 'textotabla'},
                    ],
                    [
                        {text: 'P7923A02', style: 'textotabla'},
                        {text: 'CNB', style: 'textotabla'},
                        {text: 'CentrellaTM Pro+ Surface 40" Wide with X-Ray (Integrated)', style: 'textotabla'},
                        {text: '$6,670', style: 'textotabla'},
                    ],
                    [
                        {text: 'P7923A03', style: 'textotabla'},
                        {text: 'CNB', style: 'textotabla'},
                        {text: 'CentrellaTM Pro+ Surface 36" Wide without X-Ray (Integrated)', style: 'textotabla'},
                        {text: '$5,838', style: 'textotabla'},
                    ],
                    [
                        {text: 'P7923A04', style: 'textotabla'},
                        {text: 'CNB', style: 'textotabla'},
                        {text: 'CentrellaTM Pro+ Surface 40" Wide without X-Ray (Integrated)', style: 'textotabla'},
                        {text: '$6,165', style: 'textotabla'},
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
        {text:  "\n", style: "textotabla"},
        { text: 'Frames: Bed: CentrellaTM Smart+ Bed Upgrade Kits', style: 'textotablaboldlarge' },
        { text: 'Hillrom offers these upgrade kits for the CentrellaTM Smart+ Bed', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [150, "*", 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: 'PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLA40UPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7933A08', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM 36" to 40" Comfort Edition Frame Upgrade Kit (Does not include surface) Installation NOT included.', style: 'textotabla'},
                        {text: '$3,378', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A10', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM SafeView®+ 40" Comfort Edition Frame Upgrade Kit. Installation NOT included.', style: 'textotabla'},
                        {text: '$970', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAACC', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7933A01', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM IntellidriveTM Powered Transport Upgrade Kit. Includes Installation.', style: 'textotabla'},
                        {text: '$4,419', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A05', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Accessory Outlet Upgrade Kit. Installation NOT included.', style: 'textotabla'},
                        {text: '$373', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A18', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Obstacle Detection® System Upgrade Kit for Centrella “B1” base frames (includes installation by SmartCareTM Service)', style: 'textotabla'},
                        {text: '$373', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAAIRUPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7922A01', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM MAX Air Surface For 36" Frame (Does not include blower)', style: 'textotabla'},
                        {text: '$8,024', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A07', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM Non-Powered Frame to CentrellaTM MAX Powered Air Frame Upgrade Kit (Does not include surface. Must order CentrellaTM MAX $2,954 Surface separately (P7922A01 - 36") or (P7922A02 - 40"). Installation included.', style: 'textotabla'},
                        {text: '$2,954', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLAGCIUPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7933A1301', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM GCI® Touchscreen Upgrade Kit with IllumiGuideTM Siderail Handgrip (Bed Must Already Have Sidecom). Installation NOT included.', style: 'textotabla'},
                        {text: '$1,583', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A1302', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM GCI® Touchscreen Upgrade Kit without IllumiGuideTM Siderail Handgrip (Bed Must Already Have Sidecom). Installation NOT included.', style: 'textotabla'},
                        {text: '$1,413', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A1303', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM GCI® Touchscreen Upgrade Kit with IllumiGuideTM Siderail Handgrip and without Sidecom. Installation NOT included.', style: 'textotabla'},
                        {text: '$1,496', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A1304', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM GCI® Touchscreen Upgrade Kit without IllumiGuideTM Siderail Handgrip and without Sidecom. Installation NOT included.', style: 'textotabla'},
                        {text: '$1,327', style: 'textotabla'},
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
                headerRows: 1,
                widths: [70, 70, "*", 50],
                body: [
                    [
                        {border: [false, false, false, false], text: 'CENTRELLASAFEVIEWUPG', style: 'textotablaboldblack', colSpan: 4},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                    ],
                    [
                        {text: 'CNT-P7933A04', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM SafeView®+ 36" Frame Upgrade Kit. Installation Included.', style: 'textotabla'},
                        {text: '$964', style: 'textotabla'},
                    ],
                    [
                        {text: 'CNT-P7933A10', style: 'textotabla'},
                        {text: 'CNA', style: 'textotabla'},
                        {text: 'CentrellaTM SafeView®+ 40" Comfort Edition Frame Upgrade Kit. Installation NOT included.', style: 'textotabla'},
                        {text: '$970', style: 'textotabla'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return centrella;
}

module.exports = {
    getCentrella : getCentrella,
}