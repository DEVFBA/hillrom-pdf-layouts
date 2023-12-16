async function getCentrella()
{
    const fecha = new Date();
    fecha.toLocaleDateString()

    var centrella = [
        "\n",
        "\n",
        "\n",
        { text: 'Centrella™ Smart+ Bed\n', style: 'header', tocItem: 'centrella'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text:'Standard features:\n', style: 'textosubrayado', decoration: 'underline'},
        {
            columns: [
                [
                    {
                        style:'textolista',
                        ul: [
                                { text: 'Graphical Caregiver Interface™ Touchscreen (Left Side)'},
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
                            ]
                    }
                ],
                [
                    {
                        style:'textolista',
                        ul: [
                                { text: 'Smart Bed Ready (Sidecom Required)'},
                                { text: 'Enhanced 3-Mode Bed Exit'},
                                { text: 'Motion Activated Nightlight'},
                                { text: 'Stand Assist'},
                                { text: 'Advanced SlideGuard™'},
                                { text: 'Foley Position Limit'},
                                { text: 'Patient HOB Angle Display'},
                                { text: 'Dampened Emergeny CPR'},
                                { text: 'Trendelenburg/Reverse Trendelenburg'},
                                { text: 'Patient Storage in Siderail'},
                                { text: 'Integrated Urinal Holders'},
                                { text: 'FlexAFoot™ Powered Bed Extension'},
                            ]
                    }
                ],
                [
                    {
                        style:'textolista',
                        ul: [
                                { text: 'Wifi'},
                                { text: 'Safe Working Load: 650 lb'},
                                { text: 'Max Patient Weight: 500 lb'},
                                { text: "5'' Central Locking Caster System"},
                                { text: "Drainage Bag Holder"},
                            ]
                    }
                ],
            ]
        },
        {
            table: {
                widths: [60, "*", 50, 50, 50],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: 'CENTRELLABED', style: 'textotablacolor', fillColor: '#154898', colSpan: 3,  alignment: 'center'},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'P7900', style: 'textotablaboldblack', alignment: 'center', colSpan: 3},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {image: "images/Centrella.png", width: 100, height: 60, alignment: 'center', colSpan: 3},
                        {},
                        {}
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'CNT-BASE', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                        {text: 'CNT-PAK255', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'}, 
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'Centrella™ Base Bed - (does not include Verbal Alerts or USB)', style: 'textotabla'},
                        {text: '$16,108', style: 'textotabla', alignment: 'center'},
                        {text: '$16,108', style: 'textotabla', alignment: 'center'}, 
                        {text: '$16,108', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'Centrella™ Pkg 255 - (includes Verbal Alerts, USB, Patient Pendant, Upgradability)', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '$5,339', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'Centrella™ Pkg 355 - (includes Verbal Alerts, USB, Patient Pendant, max surface, 2nd GCI, Safeview®+ System with IllumiGuide™ Siderail Handgrip, Upgradeability)', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                        {text: '$24,840', style: 'textotabla', alignment: 'center'},  
                    ],
                    [
                        {border: [false, false, false, false], text: '', style: ''},
                        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898'},
                        {text: '$16,109', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                        {text: '$21,446', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                        {text: '$40,948', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#154898'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                        {text: 'CNT-BASE', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                        {text: 'CNT-PAK255', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                    ],
                    [
                        {text: 'Surface (AIR Surface includes Blower, Comfort Controls, Enhanced Turn Assist, and Focused Advanced Microclimate™Technology)', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'MAX36', style: 'textotabla', alignment: 'center'},
                        {text: 'MAX Air Surface - For 36" Frame		', style: 'textotabla'},
                        {text: '$18,924', style: 'textotabla', alignment: 'center'},
                        {text: '$18,924', style: 'textotabla', alignment: 'center'}, 
                        {text: '*', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'MAX40', style: 'textotabla', alignment: 'center'},
                        {text: 'MAX Air Surface - For 40" Frame', style: 'textotabla'},
                        {text: '$19,505', style: 'textotabla', alignment: 'center'},
                        {text: '$19,505', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'MAX36U', style: 'textotabla', alignment: 'center'},
                        {text: 'MAX Air Surface Upgrade  - For 40" Frame', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                        {text: '$583', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PRO36', style: 'textotabla', alignment: 'center'},
                        {text: 'PRO Surface (ACCUMAX) - For 36" Frame - P7921A01		', style: 'textotabla'},
                        {text: '$2,273', style: 'textotabla', alignment: 'center'},
                        {text: '$2,273', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'},  
                    ],
                    [
                        {text: 'PRO40', style: 'textotabla', alignment: 'center'},
                        {text: 'PRO Surface (ACCUMAX) - For 40" Frame - P7921A02		', style: 'textotabla'},
                        {text: '$2,855', style: 'textotabla', alignment: 'center'},
                        {text: '$2,855', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'CORE36', style: 'textotabla', alignment: 'center'},
                        {text: 'CORE Surface (FOAM) - For 36" Frame - P7920A		', style: 'textotabla'},
                        {text: '$1,331', style: 'textotabla', alignment: 'center'},
                        {text: '$1,331', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PP3', style: 'textotabla', alignment: 'center'},
                        {text: 'Pro+ Surface 36" without X-RAY - P7923A03', style: 'textotabla'},
                        {text: '$7,156', style: 'textotabla', alignment: 'center'},
                        {text: '$7,156', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PP3X', style: 'textotabla' , alignment: 'center'},
                        {text: 'Pro+ Surface 36" with X-RAY - P7923A01', style: 'textotabla'},
                        {text: '$7,525', style: 'textotabla', alignment: 'center'},
                        {text: '$7,525', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'},  
                    ],
                    [
                        {text: 'PP4', style: 'textotabla', alignment: 'center'},
                        {text: 'Pro+ Surface 40" without X-RAY - P7923A04', style: 'textotabla'},
                        {text: '$6,587', style: 'textotabla', alignment: 'center'},
                        {text: '$6,587', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PP4X', style: 'textotabla', alignment: 'center'},
                        {text: 'Pro+ Surface 40" with X-RAY - P7923A02', style: 'textotabla'},
                        {text: '$6,956', style: 'textotabla', alignment: 'center'},
                        {text: '$6,956', style: 'textotabla', alignment: 'center'}, 
                        {text: '-', style: 'textotabla', alignment: 'center'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'Frame Width', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: '36', style: 'textotabla', alignment: 'center'},
                        {text: '36" Frame Width', style: 'textotabla'},
                        {text: '$0', style: 'textotabla', alignment: 'center'},
                        {text: '$0', style: 'textotabla', alignment: 'center'}, 
                        {text: '$0', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '40', style: 'textotabla', alignment: 'center'},
                        {text: '40" Frame Width - Comfort Edition', style: 'textotabla'},
                        {text: '$5,822', style: 'textotabla', alignment: 'center'},
                        {text: '$5,822', style: 'textotabla', alignment: 'center'}, 
                        {text: '$5,822', style: 'textotabla', alignment: 'center'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'Patient Siderail Com', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'SNC', style: 'textotabla', alignment: 'center'},
                        {text: 'Nurse Call with Active Nurse Call Button', style: 'textotabla'},
                        {text: '$1,459', style: 'textotabla', alignment: 'center'},
                        {text: '$1,459', style: 'textotabla', alignment: 'center'}, 
                        {text: '$1,459', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'NUL', style: 'textotabla', alignment: 'center'},
                        {text: 'Nurse Call, Universal TV and Lighting Controls with Active Nurse Call Button', style: 'textotabla'},
                        {text: '$1,459', style: 'textotabla', alignment: 'center'},
                        {text: '$1,459', style: 'textotabla', alignment: 'center'}, 
                        {text: '$1,459', style: 'textotabla', alignment: 'center'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'Experience Pod', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'BASIC', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod - Basic', style: 'textotabla'},
                        {text: '$1,865', style: 'textotabla', alignment: 'center'},
                        {text: '$1,865', style: 'textotabla', alignment: 'center'}, 
                        {text: '$1,865', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'STD', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod - Standard', style: 'textotabla'},
                        {text: '$2,545', style: 'textotabla', alignment: 'center'},
                        {text: '$2,545', style: 'textotabla', alignment: 'center'}, 
                        {text: '$2,545', style: 'textotabla', alignment: 'center'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'Mobility', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: '5W', style: 'textotabla', alignment: 'center'},
                        {text: 'Fifth Wheel Steering', style: 'textotabla'},
                        {text: '$982', style: 'textotabla', alignment: 'center'},
                        {text: '$982', style: 'textotabla', alignment: 'center'}, 
                        {text: '$982', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'ID', style: 'textotabla', alignment: 'center'},
                        {text: 'IntelliDrive® Powered Transport', style: 'textotabla'},
                        {text: '$7,619', style: 'textotabla', alignment: 'center'},
                        {text: '$7,619', style: 'textotabla', alignment: 'center'}, 
                        {text: '$7,619', style: 'textotabla', alignment: 'center'}, 
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
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'Additional Options', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'YES', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Pendant', style: 'textotabla'},
                        {text: '$277', style: 'textotabla', alignment: 'center'},
                        {text: '*', style: 'textotabla', alignment: 'center'}, 
                        {text: '*', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'YES', style: 'textotabla', alignment: 'center'},
                        {text: '2nd Patient Pendant', style: 'textotabla'},
                        {text: '$266', style: 'textotabla', alignment: 'center'},
                        {text: '$266', style: 'textotabla', alignment: 'center'}, 
                        {text: '$266', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'SV', style: 'textotabla', alignment: 'center'},
                        {text: 'SafeView®+ System with IllumiGuide™ Siderail Handgrip', style: 'textotabla'},
                        {text: '$1,701', style: 'textotabla', alignment: 'center'},
                        {text: '$1,701', style: 'textotabla', alignment: 'center'}, 
                        {text: '*', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: '2LCD', style: 'textotabla', alignment: 'center'},
                        {text: '2nd Graphical Caregiver Interface™ Touchscreen (Right Side)', style: 'textotabla'},
                        {text: '$410', style: 'textotabla', alignment: 'center'},
                        {text: '$410', style: 'textotabla', alignment: 'center'}, 
                        {text: '*', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'LM', style: 'textotabla', alignment: 'center'},
                        {text: 'Additional Line Management - P7512A', style: 'textotabla'},
                        {text: '$259', style: 'textotabla', alignment: 'center'},
                        {text: '$259', style: 'textotabla', alignment: 'center'}, 
                        {text: '$259', style: 'textotabla', alignment: 'center'}, 
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
        {
            table: {
                widths: [70, "*", 50, 50, 50],
                body: [
                    [
                        {text: 'OPTION CODE', style: 'textotablacolor', fillColor: '#154898', alignment: 'center'},
                        {text: 'DESCRIPTION', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                        {text: 'CNT-BASE', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                        {text: 'CNT-PAK255', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                        {text: 'CNT-PAK355', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                    ],
                    [
                        {text: 'Additional Options', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
                        {},
                        {}, 
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'YES', style: 'textotabla', alignment: 'center'},
                        {text: 'Removable IV Pole - P2217A', style: 'textotabla'},
                        {text: '$0', style: 'textotabla', alignment: 'center'},
                        {text: '$0', style: 'textotabla', alignment: 'center'}, 
                        {text: '$0', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PIV', style: 'textotabla', alignment: 'center'},
                        {text: 'Permanent IV Pole - P7511A', style: 'textotabla'},
                        {text: '$451', style: 'textotabla', alignment: 'center'},
                        {text: '$451', style: 'textotabla', alignment: 'center'}, 
                        {text: '$451', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'OSI', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Sleeve - OSI Compatible Only P3212A', style: 'textotabla'},
                        {text: '$563', style: 'textotabla', alignment: 'center'},
                        {text: '$563', style: 'textotabla', alignment: 'center'}, 
                        {text: '$563', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PHB', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Bracket - P7938A', style: 'textotabla'},
                        {text: '$281', style: 'textotabla', alignment: 'center'},
                        {text: '$281', style: 'textotabla', alignment: 'center'}, 
                        {text: '$281', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'FTA', style: 'textotabla', alignment: 'center'},
                        {text: 'Footend Traction Adaptor', style: 'textotabla'},
                        {text: '$172', style: 'textotabla', alignment: 'center'},
                        {text: '$172', style: 'textotabla', alignment: 'center'}, 
                        {text: '$172', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'TS', style: 'textotabla', alignment: 'center'},
                        {text: 'Transport Shelf - P7524A', style: 'textotabla'},
                        {text: '$561', style: 'textotabla', alignment: 'center'},
                        {text: '$561', style: 'textotabla', alignment: 'center'}, 
                        {text: '$561', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'PH', style: 'textotabla', alignment: 'center'},
                        {text: 'Ergonomic Push Handles - P7929A - Not used with IntelliDrive® Powered Transport', style: 'textotabla'},
                        {text: '$280', style: 'textotabla', alignment: 'center'},
                        {text: '$280', style: 'textotabla', alignment: 'center'}, 
                        {text: '$280', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'BLO', style: 'textotabla', alignment: 'center'},
                        {text: 'Air Blower (No Surface)', style: 'textotabla'},
                        {text: '$5,091', style: 'textotabla', alignment: 'center'},
                        {text: '$5,091', style: 'textotabla', alignment: 'center'}, 
                        {text: '$5,091', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'OD', style: 'textotabla', alignment: 'center'},
                        {text: 'Obstacle Detect® System', style: 'textotabla'},
                        {text: '$236', style: 'textotabla', alignment: 'center'},
                        {text: '$236', style: 'textotabla', alignment: 'center'}, 
                        {text: '$236', style: 'textotabla', alignment: 'center'}, 
                    ],
                    [
                        {text: 'XRAY', style: 'textotabla', alignment: 'center'},
                        {text: 'X-Ray Sleeve (Requires 36"MAX Surface, AU - NZ - AE - SA only)', style: 'textotabla'},
                        {text: '$896', style: 'textotabla', alignment: 'center'},
                        {text: '$896', style: 'textotabla', alignment: 'center'}, 
                        {text: '$896', style: 'textotabla', alignment: 'center'}, 
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
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        "\n",
        { text: 'MATTRESSES', style: 'textotablaboldlarge' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [70, "*", 50, 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAMAT', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ core Surface For 36" Frame', style: 'textotabla'},
                        {text: 'P7920A', style: 'textotabla', alignment: 'center'},
                        {text: '$1,331', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAMAT', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ pro Surface For 36" Frame', style: 'textotabla'},
                        {text: 'P7921A01', style: 'textotabla', alignment: 'center'},
                        {text: '$2,273', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAMAT', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ pro Surface For 40" Frame', style: 'textotabla'},
                        {text: 'P7921A02', style: 'textotabla', alignment: 'center'},
                        {text: '$2,855', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAMAT', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ max Air Surface For 36" Frame - Does not include blower', style: 'textotabla'},
                        {text: 'P7922A01', style: 'textotabla', alignment: 'center'},
                        {text: '$13,463', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAMAT', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ max Air Surface For 40" Frame - Does not include blower', style: 'textotabla'},
                        {text: 'P7922A02', style: 'textotabla', alignment: 'center'},
                        {text: '$14,029', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CNT-P7928A', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ MAX Air Surface with X-Ray Sleeve For 36" Frame (Does not include blower) AU - NZ - AE - SA only', style: 'textotabla'},
                        {text: 'P7922A03', style: 'textotabla', alignment: 'center'},
                        {text: '$14,727', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PROPLUS', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Pro+ Surface 36" WIDE WITH X-RAY (Integrated)', style: 'textotabla'},
                        {text: 'P7923A01', style: 'textotabla', alignment: 'center'},
                        {text: '$7,156', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PROPLUS', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Pro+ Surface 40" WIDE WITH X-RAY (Integrated)', style: 'textotabla'},
                        {text: 'P7923A02', style: 'textotabla', alignment: 'center'},
                        {text: '$7,525', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PROPLUS', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Pro+ Surface 36" WIDE W/O X-RAY (Integrated)', style: 'textotabla'},
                        {text: 'P7923A03', style: 'textotabla', alignment: 'center'},
                        {text: '$6,587', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PROPLUS', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Pro+ Surface 40" WIDE W/O X-RAY (Integrated)', style: 'textotabla'},
                        {text: 'P7923A04', style: 'textotabla', alignment: 'center'},
                        {text: '$6,956', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'PROPLUS', style: 'textotabla', alignment: 'center'},
                        {text: 'Upgrade Kit to Upgrade a Non-Powered Centrella Frame to Powered (Installation Included)', style: 'textotabla'},
                        {text: 'P7933A20', style: 'textotabla', alignment: 'center'},
                        {text: '$726', style: 'textotabla', alignment: 'center'},
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
        "\n",
        { text: 'ACCESSORIES', style: 'textotablaboldlarge' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [70, "*", 50, 50],
                body: [
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod Standard without Entertainment', style: 'textotabla'},
                        {text: 'P7926A03', style: 'textotabla', alignment: 'center'},
                        {text: '$2,812', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod Standard with Entertainment', style: 'textotabla'},
                        {text: 'P7926A04', style: 'textotabla', alignment: 'center'},
                        {text: '$2,812', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod Premium without Entertainment', style: 'textotabla'},
                        {text: 'P7926A05', style: 'textotabla', alignment: 'center'},
                        {text: '$2,812', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Experience Pod Premium with Entertainment', style: 'textotabla'},
                        {text: 'P7926A06', style: 'textotabla', alignment: 'center'},
                        {text: '$2,812', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Foot End Traction Adaptor - Head End Included in Frame', style: 'textotabla'},
                        {text: 'P7927A1', style: 'textotabla', alignment: 'center'},
                        {text: '$172', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Bracket - Zimmer, OSI, TMI for older (P7900B0) base frame beds', style: 'textotabla'},
                        {text: 'P7928A', style: 'textotabla', alignment: 'center'},
                        {text: '$273', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Ergonomic Push Handles', style: 'textotabla'},
                        {text: 'P7929C', style: 'textotabla', alignment: 'center'},
                        {text: '$280', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Pendant w/o Air w/o Entertainment', style: 'textotabla'},
                        {text: 'P7932B03', style: 'textotabla', alignment: 'center'},
                        {text: '$266', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Pendant w/o Air w/Entertainment', style: 'textotabla'},
                        {text: 'P7932B04', style: 'textotabla', alignment: 'center'},
                        {text: '$266', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Pendant w/Air w/o Entertainment', style: 'textotabla'},
                        {text: 'P7932B05', style: 'textotabla', alignment: 'center'},
                        {text: '$266', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Pendant w/Air w/Entertainment', style: 'textotabla'},
                        {text: 'P7932B06', style: 'textotabla', alignment: 'center'},
                        {text: '$266', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Assembly - Whole System Includes arm and trapeze handle', style: 'textotabla'},
                        {text: 'P7934A101', style: 'textotabla', alignment: 'center'},
                        {text: '$2,669', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Bracket', style: 'textotabla'},
                        {text: 'P7935A', style: 'textotabla', alignment: 'center'},
                        {text: '$281', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Arm, English', style: 'textotabla'},
                        {text: 'P7936A1', style: 'textotabla', alignment: 'center'},
                        {text: '$2,396', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Patient Helper Bracket (Zimmer, OSI, TMI) for newer (P7900B1) base frame beds', style: 'textotabla'},
                        {text: 'P7938A', style: 'textotabla', alignment: 'center'},
                        {text: '$281', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'O2 Tank Holder - 150mm', style: 'textotabla'},
                        {text: 'P009408', style: 'textotabla', alignment: 'center'},
                        {text: '$249', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'MISCACCESSORIES', style: 'textotabla', alignment: 'center'},
                        {text: 'Vertical Oxygen Tank Holder', style: 'textotabla'},
                        {text: 'P27601', style: 'textotabla', alignment: 'center'},
                        {text: '$472', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'MISCACCESSORIES', style: 'textotabla', alignment: 'center'},
                        {text: 'Permanent IV Pole', style: 'textotabla'},
                        {text: 'P7511A', style: 'textotabla', alignment: 'center'},
                        {text: '$435', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'MISCACCESSORIES', style: 'textotabla', alignment: 'center'},
                        {text: 'Line Manager Kit', style: 'textotabla'},
                        {text: 'P7512A', style: 'textotabla', alignment: 'center'},
                        {text: '$243', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'MISCACCESSORIES', style: 'textotabla', alignment: 'center'},
                        {text: 'Transport Shelf', style: 'textotabla'},
                        {text: 'P7524A', style: 'textotabla', alignment: 'center'},
                        {text: '$546', style: 'textotabla', alignment: 'center'},
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
        { text: 'UPGRADE KITS', style: 'textotablaboldlarge' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [90, "*", 50, 50],
                body: [
                    [
                        {text: 'CENTRELLA40UPG', style: 'textotabla', alignment: 'center'},
                        {text: 'max Air Surface For 40" Frame Comfort Edition - CNB Does not include blower', style: 'textotabla'},
                        {text: 'P7922A02', style: 'textotabla', alignment: 'center'},
                        {text: '$14,029', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLA40UPG', style: 'textotabla', alignment: 'center'},
                        {text: '36" to 40" Comfort Edition Frame Upgrade Kit - Does not include surface *', style: 'textotabla'},
                        {text: 'P7933A08', style: 'textotabla', alignment: 'center'},
                        {text: '$5,666', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLA40UPG', style: 'textotabla', alignment: 'center'},
                        {text: 'SafeView®+ 40" Comfort Edition Frame Upgrade Kit *', style: 'textotabla'},
                        {text: 'P7933A10', style: 'textotabla', alignment: 'center'},
                        {text: '$1,624', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Intellidrive™ Powered Transport Upgrade Kit *', style: 'textotabla'},
                        {text: 'P7933A01', style: 'textotabla', alignment: 'center'},
                        {text: '$7,413', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Sidecom Upgrade Kit with Bluetooth', style: 'textotabla'},
                        {text: 'P7933A1601', style: 'textotabla', alignment: 'center'},
                        {text: '$2,646', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Sidecom Upgrade Kit without Bluetooth			', style: 'textotabla'},
                        {text: 'P7933A1602', style: 'textotabla', alignment: 'center'},
                        {text: '$2,646', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAACC', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Obstacle Detect®  for Centrella "B1" base frame', style: 'textotabla'},
                        {text: 'P7933A18', style: 'textotabla', alignment: 'center'},
                        {text: '$620', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAAIRUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'max Air Surface For 36" Frame - Does not include blower', style: 'textotabla'},
                        {text: 'P7922A01', style: 'textotabla', alignment: 'center'},
                        {text: '$13,464', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAAIRUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'max Air Surface For 40" Frame Comfort Edition - Does not include blower', style: 'textotabla'},
                        {text: 'P7922A02', style: 'textotabla', alignment: 'center'},
                        {text: '$14,029', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAAIRUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'Non-Powered Frame to max Powered Air Frame Upgrade Kit - Does not include surface. Must order Centrella™ max *', style: 'textotabla'},
                        {text: 'P7933A07', style: 'textotabla', alignment: 'center'},
                        {text: '$4,951', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAGCIUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'GCI® Touchscreen Upgrade Kit with IllumiGuide™ Siderail Handgrip. Bed Must Already Have Sidecom *', style: 'textotabla'},
                        {text: 'P7933A1301', style: 'textotabla', alignment: 'center'},
                        {text: '$2,651', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAGCIUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'GCI® Touchscreen Upgrade Kit without IllumiGuide™ Siderail Handgrip. Bed Must Already Have Sidecom *', style: 'textotabla'},
                        {text: 'P7933A1302', style: 'textotabla', alignment: 'center'},
                        {text: '$2,368', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAGCIUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'GCI® Touchscreen Upgrade Kit with IllumiGuide™ Siderail Handgrip & without Sidecom *', style: 'textotabla'},
                        {text: 'P7933A1303', style: 'textotabla', alignment: 'center'},
                        {text: '$2,508', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLAGCIUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'GCI® Touchscreen Upgrade Kit without IllumiGuide™ Siderail Handgrip & without Sidecom *', style: 'textotabla'},
                        {text: 'P7933A1304', style: 'textotabla', alignment: 'center'},
                        {text: '$2,222', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLASAFEVIEWUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'SafeView®+ 36" Frame Upgrade Kit *', style: 'textotabla'},
                        {text: 'P7933A04', style: 'textotabla', alignment: 'center'},
                        {text: '$1,614', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'CENTRELLASAFEVIEWUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'SafeView®+ 40" Comfort Edition Frame Upgrade Kit *', style: 'textotabla'},
                        {text: 'P7933A10', style: 'textotabla', alignment: 'center'},
                        {text: '$1,624', style: 'textotabla', alignment: 'center'},
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
        { text: '* Installation not included', style: 'parrafo' },
        "\n",
        {
            table: {
                widths: [90, "*", 50, 50],
                body: [
                    [
                        {text: 'KIT NAME', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                        {text: 'PRICE', style: 'textotablacolorlarge', fillColor: '#154898', alignment: 'center'},
                    ],
                    [
                        {text: 'HR/RR INITIAL ACTIVATION CODE', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
                        {},
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'HRRRACTIVATION', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Sensor Activated One Year', style: 'textotabla'},
                        {text: 'ACT-CFCM1', style: 'textotabla', alignment: 'center'},
                        {text: '$2,644', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRACTIVATION', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Sensor Activated Three Years', style: 'textotabla'},
                        {text: 'ACT-CFCM3', style: 'textotabla', alignment: 'center'},
                        {text: '$6,047', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRACTIVATION', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Sensor Activated Five Years', style: 'textotabla'},
                        {text: 'ACT-CFCM5', style: 'textotabla', alignment: 'center'},
                        {text: '$8,876', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HR/RR EXTENSION', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
                        {},
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'HRRREXTEND', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Extended for One Year - No new sensor required', style: 'textotabla'},
                        {text: 'EXT-CFCM1', style: 'textotabla', alignment: 'center'},
                        {text: '$2,267', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRREXTEND', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Extended for Two Years - No new sensor required', style: 'textotabla'},
                        {text: 'EXT-CFCM2', style: 'textotabla', alignment: 'center'},
                        {text: '$4,155', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRREXTEND', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Extended for Three Years - No new sensor required', style: 'textotabla'},
                        {text: 'EXT-CFCM3', style: 'textotabla', alignment: 'center'},
                        {text: '$5,666', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRREXTEND', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Extended for Four Years - No new sensor required', style: 'textotabla'},
                        {text: 'EXT-CFCM4', style: 'textotabla', alignment: 'center'},
                        {text: '$7,177', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HR/RR MONITORING UPGRADE KIT', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
                        {},
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'HRRRMONITORINGUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only) - Includes installation by a Hill-Rom Certified Technician and One Year Activation', style: 'textotabla'},
                        {text: 'UPG-CFCM1', style: 'textotabla', alignment: 'center'},
                        {text: '$2,644', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRMONITORINGUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only) - Includes installation by a Hill-Rom Certified Technician and Three Year Activation', style: 'textotabla'},
                        {text: 'UPG-CFCM3', style: 'textotabla', alignment: 'center'},
                        {text: '$6,047', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRMONITORINGUPG', style: 'textotabla', alignment: 'center'},
                        {text: 'Centrella™ Contact-Free, Continuous Monitoring Upgrade (REV A and Base beds Only) - Includes installation by a Hill-Rom Certified Technician and Five Year Activation', style: 'textotabla'},
                        {text: 'UPG-CFCM5', style: 'textotabla', alignment: 'center'},
                        {text: '$8,876', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HR/RR RENEWAL', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
                        {},
                        {}, 
                        {}, 
                    ],
                    [
                        {text: 'HRRRRENEWAL', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring One Year with new sensor', style: 'textotabla'},
                        {text: 'RENW-CFCM1', style: 'textotabla', alignment: 'center'},
                        {text: '$2,267', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRRENEWAL', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Two Years with new sensor', style: 'textotabla'},
                        {text: 'RENW-CFCM2', style: 'textotabla', alignment: 'center'},
                        {text: '$4,155', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRRENEWAL', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Three Years with new sensor', style: 'textotabla'},
                        {text: 'RENW-CFCM3', style: 'textotabla', alignment: 'center'},
                        {text: '$5,666', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRRENEWAL', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Four Years with new sensor', style: 'textotabla'},
                        {text: 'RENW-CFCM4', style: 'textotabla', alignment: 'center'},
                        {text: '$7,177', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'HRRRRENEWAL', style: 'textotabla', alignment: 'center'},
                        {text: 'P7900 Centrella™ Contact-Free, Continuous Monitoring Five Years with new sensor', style: 'textotabla'},
                        {text: 'RENW-CFCM5', style: 'textotabla', alignment: 'center'},
                        {text: '$8,499', style: 'textotabla', alignment: 'center'},
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