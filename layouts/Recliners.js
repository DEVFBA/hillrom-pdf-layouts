const axios = require('axios');

async function getRecliners()
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
        {text: 'OPTIONS (Tray and Removable Arm not available on the same side)', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Arm', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Tray Option (not available with Open Arm)', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Retractable Arm - Open Arm Only', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Removable Arm Option', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Accessory Bracket', style: 'textotablabold', border: [false, false, false, false], colSpan: 4},
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
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "CAL 133 Flammability Barrier (CAL)", style: 'textotabla'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'}, 
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var recliners = [
        "\n",
        "\n",
        "\n",
        { text: 'Recliners\n', style: 'subheader' },
        "\n",
        {
            columns: [
                {
                    width: 400,
                    table: {
                        widths: [140, 80, 80, 80],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center', colSpan: 3},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMRECLINER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 3},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P9090', style: 'textotablabold', alignment: 'center'},
                                {text: 'P9081', style: 'textotablabold', alignment: 'center'},
                                {text: 'P9084', style: 'textotablabold', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {image: "images/Recliners1.png", width: 70, height: 70, alignment: 'center'},
                                {image: "images/Recliners2.png", width: 70, height: 70, alignment: 'center'},
                                {image: "images/Recliners3.png", width: 70, height: 70, alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'R4SP', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'RTCR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'RLFR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {text: 'Style', style: 'textotabla'},
                                {text: '4 Position', style: 'textotabla', alignment: 'center'},
                                {text: '2 Position', style: 'textotabla', alignment: 'center'},
                                {text: 'Lay Flat', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Weight Capacity', style: 'textotabla'},
                                {text: '300 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '300 lbs', style: 'textotabla', alignment: 'center'},
                                {text: '500 lbs', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Seat Width', style: 'textotabla'},
                                {text: '23"', style: 'textotabla', alignment: 'center'},
                                {text: '23.5"', style: 'textotabla', alignment: 'center'},
                                {text: '24"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Caster size', style: 'textotabla'},
                                {text: '3"', style: 'textotabla', alignment: 'center'},
                                {text: '3"', style: 'textotabla', alignment: 'center'},
                                {text: '4"', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Grade 1 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 2 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 3 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 4 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 5 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 6 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 7 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                            ],
                            [
                                {text: 'Grade 8 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
                                {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
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
                widths: [140, 80, 80, 80],
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
        {text: '', pageBreak: 'after'  },
    ]

    return recliners;
}

module.exports = {
    getRecliners : getRecliners,
}