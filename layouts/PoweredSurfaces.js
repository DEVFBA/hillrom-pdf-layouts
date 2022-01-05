const axios = require('axios');

async function getPoweredSurfaces()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var p280 =[]
    var pSItems = 0;
    p280[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    p280[pSItems] = [
        {text: "Overlay", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P280", style: 'textotabla', alignment: 'center'},
        {text: '220-240V - 50/60 Hz - 200 x 90 x 10 cm', style: 'textotabla'}, 
        {text: "P005856A", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,957", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P280", style: 'textotabla', alignment: 'center'},
        {text: '120V - 50/60 Hz - 200 x 90 x 10 cm', style: 'textotabla'}, 
        {text: "P005858A", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,957", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    p280[pSItems] = [
        {text: 'Replacement with foam base', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P280MRS', style: 'textotabla', alignment: 'center'},
        {text: '220-240V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P005987A", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,693", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P280MRS', style: 'textotabla', alignment: 'center'},
        {text: '120V - 50-60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P006052A", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,693", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    p280[pSItems] = [
        {text: 'Replacement with full air', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P280AIR", style: 'textotabla', alignment: 'center'},
        {text: '220-240V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P006172A", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,693", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p280[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P280AIR", style: 'textotabla', alignment: 'center'},
        {text: '120V - 50-60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P006173A", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,693", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var p290 =[]
    var pSItems = 0;
    p290[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    p290[pSItems] = [
        {text: "Overlay", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290", style: 'textotabla', alignment: 'center'},
        {text: 'Overlay - 230v - 50/60 Hz - 200 x 90 x 10 cm', style: 'textotabla'}, 
        {text: "P290A160", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,314", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290", style: 'textotabla', alignment: 'center'},
        {text: 'Overlay - 120V - 50/60 Hz - 200 x 90 x 10 cm', style: 'textotabla'}, 
        {text: "P290A130", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,314", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    p290[pSItems] = [
        {text: 'Replacement with foam base', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P290MRS', style: 'textotabla', alignment: 'center'},
        {text: 'MRS - 230V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A260", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,997", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P290MRS', style: 'textotabla', alignment: 'center'},
        {text: 'MRS - 120V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A230", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,997", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P290MRS', style: 'textotabla', alignment: 'center'},
        {text: 'MRS with XRAY - 230V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A261", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,247", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: 'P290MRS', style: 'textotabla', alignment: 'center'},
        {text: 'MRS with XRAY - 120V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A231", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,247", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    p290[pSItems] = [
        {text: 'Replacement with full air', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290AIR", style: 'textotabla', alignment: 'center'},
        {text: 'Full Air - 230V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A360", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,997", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290AIR", style: 'textotabla', alignment: 'center'},
        {text: 'Full Air - 120V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A330", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,997", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290AIR", style: 'textotabla', alignment: 'center'},
        {text: 'Full Air with XRAY - 230V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A361", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,247", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    p290[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P290AIR", style: 'textotabla', alignment: 'center'},
        {text: 'Full Air with XRAY - 120V - 50/60Hz - 200 x 90 x 17 cm', style: 'textotabla'}, 
        {text: "P290A331", style: 'textotabla', alignment: 'center'}, 
        {text: "$3,247", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accellaTherapy =[]
    var pSItems = 0;

    accellaTherapy[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    accellaTherapy[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "AD307A(*)", style: 'textotabla', alignment: 'center'},
        {text: 'Accella Therapy Surface - 203 x 92 x 21.5 cm - 230V', style: 'textotabla'}, 
        {text: "P006789A", style: 'textotabla', alignment: 'center'}, 
        {text: "$7,895", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accellaTherapy[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "AD307A(*)", style: 'textotabla', alignment: 'center'},
        {text: 'Accella Therapy Surface - 203 x 92 x 21.5 cm - 120V', style: 'textotabla'}, 
        {text: "P006792A", style: 'textotabla', alignment: 'center'}, 
        {text: "$8,412", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var talleyFusion =[]
    var pSItems = 0;
    
    talleyFusion[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    talleyFusion[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "P260", style: 'textotabla', alignment: 'center'},
        {text: 'Talley Fusion Hybrid Mattress', style: 'textotabla'}, 
        {text: "P260A160", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,833", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    talleyFusion[pSItems] = [
        {text: "AIRMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "AD307A(*)", style: 'textotabla', alignment: 'center'},
        {text: 'Talley Fusion Hybrid Mattress with X-RAY Sleeve & Evac Handles', style: 'textotabla'}, 
        {text: "P260A161", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,000", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var poweredSurfaces = [
        { text: 'Powered Surfaces', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: France', style: 'parrafo' },
        "\n",
        {
            columns: [
                [
                    { text: 'P280\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces.png", width: 60, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        {
            table: {
                widths: [50, 40, "*", 60, 50],
                body: p280
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
                    { text: 'P290\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces2.png", width: 60, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        {
            table: {
                widths: [50, 40, "*", 60, 50],
                body: p290
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
                    { text: 'Accella Therapy\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces3.png", width: 60, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        {
            table: {
                widths: [50, 40, "*", 60, 50],
                body: accellaTherapy
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
                    { text: 'TALLEY FUSION HYBRID\n', style: 'subheader' },
                    {
                        style:'parrafo',
                        ul: [
                            { text: 'Maximum Patient Weight 250 kg'},
                            { text: 'For additional technical specifications see separate tech specs'},
                        ]
                    },
                ],
                [
                    { image: "images/PoweredSurfaces4.png", width: 100, height: 60, alignment: 'center'},
                ]
            ]
            
        },
        {
            table: {
                widths: [50, 40, "*", 60, 50],
                body: talleyFusion
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

    return poweredSurfaces;
}

module.exports = {
    getPoweredSurfaces : getPoweredSurfaces,
}