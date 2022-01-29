const axios = require('axios');

async function getPatientRoomSeating()
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
        {text: 'OPTIONS', style: 'textotablabold', border: [false, false, false, false], colSpan: 2},
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
        {text: "$195", style: 'textotabla', alignment: 'center'},
        {text: "$195", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var patientRoomSeating = [
        "\n",
        "\n",
        "\n",
        { text: 'Art of Care® Collection\n', style: 'header' },
        { text: 'Country of origin: USA', style: 'parrafo' },
        "\n",
        { text: 'Patient Room Seating - Metropolitan™', style: 'subheader' },
        {
            table: {
                widths: [180, 210, 115],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: '* Note: will be discontinued last order date July16th, 2021', style: 'textotablaboldblack', alignment: 'center', colSpan: 2},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'PREMIUMHIGHBACK', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'PREMIUMVISITOR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'P9010', style: 'textotablabold', alignment: 'center'},
                        {text: 'P9020', style: 'textotablabold', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [true, false, true, false], image: "images/PatientRoomSeating.png", width: 200, height: 110, alignment: 'center'},
                        {border: [true, false, true, false], image: "images/PatientRoomSeating2.png", width: 100, height: 110, alignment: 'center'},
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
                widths: ["*", 106.5, 105, 105],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'VISM', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'VI3M', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'HIGM', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: '18" Seat Height', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla',  alignment: 'center'},
                        {text: '●', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {text: '21" Seat Height (3 in longer legs)', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla',  alignment: 'center'},
                        {text: '-', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {text: '20" Seat Width', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'Removable Seat Covers', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {text: 'Armless', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: '-', style: 'textotabla',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 1 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 2 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 3 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 4 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 5 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 6 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 7 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'Grade 8 Upholstery', style: 'textotablacolor', fillColor: '#546ce4'},
                        {text: '$2,949', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'CLPA', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
                widths: ["*", 106.5, 105, 105],
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
        '\n',
        { text: 'Finish Options For Arm Caps:', style: 'textotablaboldlarge' },
        {
            columns: [
                [
                    {text: '31B- Natural Maple', style: 'textotabla'},
                    {text: 'T9B - Wild Cherry', style: 'textotabla'},
                    {text: 'MWB - Montana Walnut', style: 'textotabla'},
                    {text: 'HMB- Honey Maple', style: 'textotabla'},
                    {text: '82A - Medium Oak', style: 'textotabla'},
                ],
            ]
        },
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        {image: "images/ClubSleeper2.png", width: 200, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return patientRoomSeating;
}

module.exports = {
    getPatientRoomSeating : getPatientRoomSeating,
}