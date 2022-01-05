const axios = require('axios');

async function getStretchers()
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
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    options[pSItems] = [
        {text: "Deck width", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
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
        {text: "26", style: 'textotabla', alignment: 'center'},
        {text: '26" (66 cm)', style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "30", style: 'textotabla', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotabla'},
        {text: "$476", style: 'textotabla', alignment: 'center'}, 
        {text: "$476", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: 'Surface', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "3S", style: 'textotabla', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3W", style: 'textotabla', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4S", style: 'textotabla', alignment: 'center'},
        {text: '4" (10,2 cm ) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "$47", style: 'textotabla', alignment: 'center'}, 
        {text: "$47", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$47", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4W", style: 'textotabla', alignment: 'center'},
        {text: '4" (10,2 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "$47", style: 'textotabla', alignment: 'center'}, 
        {text: "$47", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "5S", style: 'textotabla', alignment: 'center'},
        {text: '5" (12,7 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "$180", style: 'textotabla', alignment: 'center'}, 
        {text: "$180", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$180", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "5W", style: 'textotabla', alignment: 'center'},
        {text: '5" (12,7 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotabla'},
        {text: "$180", style: 'textotabla', alignment: 'center'}, 
        {text: "$180", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "2P", style: 'textotabla', alignment: 'center'},
        {text: '4" Surgical Surface-2 pc Flat/Concave Head Cushion Set', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "FL", style: 'textotabla', alignment: 'center'},
        {text: '4" Surgical Surface w/ Flat Head Cushion Set', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3O", style: 'textotabla', alignment: 'center'},
        {text: '3" (7,6 cm) thick - OB/GYN surface', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "NONE", style: 'textotabla', alignment: 'center'},
        {text: 'without surface', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Push handles (standard colour: grey/with O2 tank holder colour: blue)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "NONE", style: 'textotabla', alignment: 'center'},
        {text: "no push handles", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "HEAD", style: 'textotabla', alignment: 'center'},
        {text: "at head end", style: 'textotabla'},
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "FOOT", style: 'textotabla', alignment: 'center'},
        {text: "at foot end", style: 'textotabla'},
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "$590", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "HDFT", style: 'textotabla', alignment: 'center'},
        {text: "at head and foot end", style: 'textotabla'},
        {text: "$1,180", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,180", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,180", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'IV pole type/location', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "NONE", style: 'textotabla', alignment: 'center'},
        {text: "No IV pole", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3SONE", style: 'textotabla', alignment: 'center'},
        {text: "3 stage at head - HEAD", style: 'textotabla'},
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3SONE", style: 'textotabla', alignment: 'center'},
        {text: "3 stage at foot - FOOT", style: 'textotabla'},
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$905", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3STWO", style: 'textotabla', alignment: 'center'},
        {text: "3 stage at head and foot - BOTH", style: 'textotabla'},
        {text: "$1,810", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,810", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,810", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,810", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'IV pole transport push handles (not available with handbrake - HB)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "BSB", style: 'textotabla', alignment: 'center'},
        {text: "Both ends - Right and left side", style: 'textotabla'},
        {text: "$2,285", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,285", style: 'textotabla', alignment: 'center'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BSH", style: 'textotabla', alignment: 'center'},
        {text: "Head end - Right and left side", style: 'textotabla'},
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BSF", style: 'textotabla', alignment: 'center'},
        {text: "Foot end - Right and left side", style: 'textotabla'},
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RSB", style: 'textotabla', alignment: 'center'},
        {text: "Both ends - Right side", style: 'textotabla'},
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "_", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "LSB", style: 'textotabla', alignment: 'center'},
        {text: "Both ends - Left side", style: 'textotabla'},
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "_", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,144", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RSF", style: 'textotabla', alignment: 'center'},
        {text: "Foot end - Right side", style: 'textotabla'},
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "_", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "LSF", style: 'textotabla', alignment: 'center'},
        {text: "Foot end - Left side", style: 'textotabla'},
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "_", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RSH", style: 'textotabla', alignment: 'center'},
        {text: "Head end - Right side", style: 'textotabla'},
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "LSH", style: 'textotabla', alignment: 'center'},
        {text: "Head end - Left side", style: 'textotabla'},
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Steering', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "LSC", style: 'textotabla', alignment: 'center'},
        {text: "Locking steering castor as pivot", style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$761", style: 'textotabla', alignment: 'center'}, 
        {text: "$761", style: 'textotabla', alignment: 'center'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "SP", style: 'textotabla', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$761", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Brake Pedals', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "BSHF", style: 'textotabla', alignment: 'center'},
        {text: "Brake pedals at head & foot", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotabla', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotabla'},
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
        {text: "$714", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Surface', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "N", style: 'textotabla', alignment: 'center'},
        {text: "Hard pan non-rad sleep surface", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "R", style: 'textotabla', alignment: 'center'},
        {text: "radiolucent surface - not available with (AC) and/or (FO) and", style: 'textotabla'},
        {text: "$515", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RH", style: 'textotabla', alignment: 'center'},
        {text: "radiolucent head section - not available with (O2)", style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,066", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Hydraulic control pedals', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 7},
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
        {text: "HBS", style: 'textotabla', alignment: 'center'},
        {text: "On both side", style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "HBSF", style: 'textotabla', alignment: 'center'},
        {text: "On both sides and foot end", style: 'textotabla'},
        {text: "$476", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$476", style: 'textotabla', alignment: 'center'}, 
        {text: "$476", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    /*TERMINA CICLO*/

    var options2 = []
    pSItems = 0

    options2[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: 'Siderails', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

     /*ESTO VA EN UN CICLO*/
     options2[pSItems] = [
        {text: "HE", style: 'textotabla', alignment: 'center'},
        {text: 'Gap at head end', style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "FE", style: 'textotabla', alignment: 'center'},
        {text: "Gap at foot end", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "KX1", style: 'textotabla', alignment: 'center'},
        {text: "Additional coverage siderail-gap at foot end only (not compatible with AC)", style: 'textotabla'},
        {text: "$834", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Bumper colour (with Light Neutral Bellows)', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "BLUE", style: 'textotabla', alignment: 'center'},
        {text: "Blue", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "TEAL", style: 'textotabla', alignment: 'center'},
        {text: 'Teal', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "RED", style: 'textotabla', alignment: 'center'},
        {text: 'Red', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "PURPLE", style: 'textotabla', alignment: 'center'},
        {text: 'Purple', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "LGTNET", style: 'textotabla', alignment: 'center'},
        {text: 'Light neutral', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

     options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "AC", style: 'textotabla', alignment: 'center'},
        {text: 'Auto Contour™ with knee gatch & Backsaver Fowler™ (not compatible with KX1)', style: 'textotabla'},
        {text: "$1,555", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "KN", style: 'textotabla', alignment: 'center'},
        {text: 'Knee gatch', style: 'textotabla'},
        {text: "$651", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: '●', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "FO", style: 'textotabla', alignment: 'center'},
        {text: 'Backsaver Fowler™ including knee gatch', style: 'textotabla'},
        {text: "$1,081", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "O2", style: 'textotabla', alignment: 'center'},
        {text: 'Integrated O2 tank holder/utility tray - push handles required', style: 'textotabla'},
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: "$0", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "UCH", style: 'textotabla', alignment: 'center'},
        {text: 'Upright cassette holder', style: 'textotabla'},
        {text: "$979", style: 'textotabla', alignment: 'center'}, 
        {text: "$979", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SC", style: 'textotabla', alignment: 'center'},
        {text: 'Dual Display Integrated Scale', style: 'textotabla'},
        {text: "$2,584", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: '-', style: 'textotabla'},
        {text: "$2,584", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    var surfaces = []
    pSItems = 0

    surfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8000', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8005', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8010', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'P8040', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'P8050', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaces[pSItems] = [
        {text: "STRETCHERMAT", style: 'textotabla', alignment: 'center'},
        {text: 'Replacement Surface 26" x 75" x 3"', style: 'textotabla'},
        {text: "P1430ECS3", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$678", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
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

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories[pSItems] = [
        {text: 'Following for OB/GYN only:', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories[pSItems] = [
        {text: 'Following for Surgical only:', style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    
    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    accesories[pSItems] = [
        {text: "AFFINITYACC", style: 'textotabla', alignment: 'center'},
        {text: "Calf Supports - Pair (Affinity IV)", style: 'textotabla'},
        {text: "P7634C", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,705", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var stretchers = [
        { text: 'Stretchers', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: México\n', style: 'parrafo' },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Safe Working Load 317,5 kg'},
                        ]
                },
                
            ]
        },
        {
            columns: [
                {
                    width: 80,
                    text: ''
                },
                {
                    width: "*",
                    table: {
                        widths: ["*", 40, 40, 40, 40, 40],
                        body: [
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'STRETCHER', style: 'textotablacolor', colSpan: 5, fillColor: '#546ce4',  alignment: 'center'},
                                {},
                                {},
                                {},
                                {},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'P8000', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8005', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8010', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8040', style: 'textotablaboldblack', alignment: 'center'},
                                {text: 'P8050', style: 'textotablaboldblack', alignment: 'center'},
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'Procedural', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Transport', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Surgical', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'Trauma', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: 'OB/GYN', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                
                            ],
                            [
                                {border: [false, false, false, false], text: ''},
                                {text: 'PS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'TN', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'SS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'TS', style: 'textotablaboldblack',  alignment: 'center'},
                                {text: 'OS', style: 'textotablaboldblack',  alignment: 'center'},
                            ],
                            [
                                {text: 'Trendelenburg / Reverse Trendelenburg', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'OneStep TuckAway siderails for zero-gap transfers', style: 'textotabla'},
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '●', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'Fold-down siderails', style: 'textotabla'},
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '●', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                                {text: '-', style: 'textotabla', alignment: 'center'}, 
                                {text: '-', style: 'textotabla', alignment: 'center'},
                            ],
                            [
                                {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4'},
                                {text: "$9,243", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$6,906", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$12,361", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
                                {text: "$12,078", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
                                {text: "$14,237", style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
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
                widths: [50, "*", 30, 30, 30, 30, 30],
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
        "\n",
        {
            table: {
                widths: [50, "*", 30, 30, 30, 30, 30],
                body: options2
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
        { image: "images/Stretchers.png", width: 370, height: 160, alignment: 'center'},
        '\n',
        { text: 'SURFACES', style: 'textotablaboldlarge' },
        { text: 'Fire Code Compliance: Surfaces comply with North American Federal Regulations: (16CFR1632, 16CFR1633 and CAN/CGSB-4.1 No. 27.7)\n Country of Origin: USA', style: 'parrafo' },
        {
            table: {
                widths: [60, "*", 50, 30, 30, 30, 30, 30],
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
        {text: '', pageBreak: 'after'  },
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

    return stretchers;
}

module.exports = {
    getStretchers : getStretchers,
}