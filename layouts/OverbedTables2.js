const axios = require('axios');

async function getOverbedTables()
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
        {text: 'OPTIONS', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'SLP-732', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'SLP-735', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
        {text: 'SLP-755', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Top Style", style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
        {text: "", border: [false, false, false, false]},
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
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: "Mirror / Storage", style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
        {text: "", border: [false, false, false, false]},
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
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Black Urethane Arm Cap (BLK)", style: 'textotabla'},
        {text: "$164", style: 'textotabla', alignment: 'center'},
        {text: "$164", style: 'textotabla', alignment: 'center'}, 
        {text: "$164", style: 'textotabla', alignment: 'center'},
    ]
    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
        {text: "", border: [false, false, false, false]},
    ]
    pSItems++

    options[pSItems] = [
        {text: "ACCESSORIES (FURNITUREACC)", style: 'textotablaboldlarge', border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]},
        {text: "", border: [false, false, false, false]}, 
        {text: "", border: [false, false, false, false]},
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

    var healthcareFurniture = [
        '\n',
        { text: 'Overbed Tables', style: 'header' },
        { text: 'Art of Care', style: 'subheader' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            style:'textolista',
            ul: [
                    { text: 'Low Profile Design'},
                    { text: 'Rounded Corners and Limited Exposed Parts Make Cleaning Easy'},
                    { text: 'Steel Column Raises and Lowers Table Quietly with Minimal Effort'},
                ]		
        },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    width: 370,
                    table: {
                        widths: [140, 50, 50, 50],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PREMIUMOVERBEDTABLE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 3},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P636', style: 'textotablabold', alignment: 'center'},
                                {text: 'P635', style: 'textotablabold', alignment: 'center'},
                                {text: 'P634', style: 'textotablabold', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'OBT-636', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'OBT-635', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                                {text: 'OBT-634', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                            ],
                            [
                                {text: 'Dual Top - Food Service Tray', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Single Top (Top Style 1)', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Single Top w/cutout for left sitting mirror (Top Style 1)', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: '"C" Base', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'Tuning Fork Base', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: '$1,294', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$778', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},
                                {text: '$445', style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'},  
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
                    columns : [
                        { image: "images/ArtOfCare.png", width: 120, height: 120, alignment: 'center'},
                    ]
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 370,
                    columns : [
                        [
                            {
                                table: {
                                    widths: [140, 50, 50, 50],
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
                            [
                                { text: '\n'},
                                { text: 'Thermo Foils', style: 'textotablaboldlarge' },
                                {
                                    columns: [
                                        [
                                            {text: 'V07 Natural Maple', style: 'textotabla'},
                                            {text: 'V08 Wild cherry', style: 'textotabla'},
                                            {text: 'V09 Medium Oak', style: 'textotabla'},
                                            {text: 'V10 HoneyMaple', style: 'textotabla'},
                                            {text: 'V11 Shaker Cherry', style: 'textotabla'},
                                            {text: 'V12 Montana Walnut', style: 'textotabla'},
                                            {text: 'V13 Frosty white', style: 'textotabla'},
                                        ],
                                    ]
                                }
                            ]
                        ]
                    ]
                },
                {
                    width: "*",
                    columns : [
                        [ 
                            {image: "images/ArtOfCare2.png", width: 150, height: 110},
                            '\n',
                            '\n',
                            '\n',
                            { image: "images/ArtOfCare3.png", width: 100, height: 110},
                        ],
                    ]
                },
            ]
            
        },
        '\n',
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        '\n',
        { image: "images/ArtOfCare0.png", width: 430, height: 130, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return healthcareFurniture;
}

module.exports = {
    getOverbedTables : getOverbedTables,
}