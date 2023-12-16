const axios = require('axios');

async function getArtOfCareCollection()
{
    /*const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]*/

    var options =[]
    var pSItems = 0;

    options[pSItems] = [
        {text: 'Options', style: 'textotablabold', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Table Tray (Rotating) - cannot be same side as removable arm', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Removable Arm (cannot be same side as tray)', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Accessory Brackets', style: 'textotablabold', border: [false, false, false, false], colSpan: 5},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var artOfCareCollection = [
        "\n",
        "\n",
        "\n",
        { text: 'Art of Care® Collection', style: 'header' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        { text: 'Three Position Recliner\n', style: 'subheader', tocItem: "threePosition"},
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [160, 108.7, 108.5],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMRECLINER', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P9080', style: 'textotablabold', alignment: 'center', colSpan: 2},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [true, false, true, false], image: "images/ThreePosition1.png", width: 70, height: 70, alignment: 'center'},
                                {border: [false, false, true, false], image: "images/ThreePosition2.png", width: 70, height: 70, alignment: 'center'},
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
                    width: "*",
                    text: ''
                },
            ]
        },
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [160, 50, 50, 50, 50],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'R3SM', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                                {text: 'R33M', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                                {text: 'R3SR', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                                {text: 'R33R', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                            ],
                            [
                                {text: 'Seat Height', style: 'textotabla'},
                                {text: '19"', style: 'textotabla', alignment: 'center'},
                                {text: '21"', style: 'textotabla', alignment: 'center'}, 
                                {text: '19"', style: 'textotabla', alignment: 'center'},
                                {text: '21"', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: '24" Seat Width', style: 'textotabla'},
                                {text: '*', style: 'textotabla', alignment: 'center'},
                                {text: '*', style: 'textotabla', alignment: 'center'}, 
                                {text: '*', style: 'textotabla', alignment: 'center'},
                                {text: '*', style: 'textotabla', alignment: 'center'}, 
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
                    width: "*",
                    text: ''
                },
            ]
        },
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [160, 108.7, 108.5],
                        body: [
                            [
                                {border: [true, false, true, false], text: 'Style', style: 'textotabla', alignment: 'center'},
                                {border: [true, false, true, false], text: 'Metropolitan', style: 'textotabla', alignment: 'center'},
                                {border: [true, false, true, false], text: 'Aero', style: 'textotabla', alignment: 'center'},
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
                    width: "*",
                    text: ''
                },
            ]
        },
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [160, 50, 50, 50, 50],
                        body: [
                            [
                                {text: 'Removable Seat Cover', style: 'textotabla'},
                                {text: '*', style: 'textotabla', alignment: 'center'},
                                {text: '*', style: 'textotabla', alignment: 'center'}, 
                                {text: '*', style: 'textotabla', alignment: 'center'},
                                {text: '*', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolor', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#154898'}, 
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
                    width: "*",
                    text: ''
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [160, 50, 50, 50, 50],
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
        { text: '* = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        {image: "images/ThreePosition3.png", width: 400, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return artOfCareCollection;
}

module.exports = {
    getArtOfCareCollection : getArtOfCareCollection,
}