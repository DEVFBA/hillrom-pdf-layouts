const axios = require('axios');

async function getCatoni()
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
        {text: 'OPTION CODE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "Hinge", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "A0", style: 'textotablacatoni', alignment: 'center'},
        {text: '26" (66 cm)', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "A1", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "A6", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "3S", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "3W", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Lockable drawer', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "NONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "no push handles", style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "HEAD", style: 'textotablacatoni', alignment: 'center'},
        {text: "at head end", style: 'textotablacatoni'},
        {text: "$590", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$590", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$590", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Fixed strip or sliding tray', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "NONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "No IV pole", style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "3SONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "3 stage at head - HEAD", style: 'textotablacatoni'},
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "BSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right and left side", style: 'textotablacatoni'},
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "BSH", style: 'textotablacatoni', alignment: 'center'},
        {text: "Head end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Foot end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "RSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "_", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Accessory bar holder', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "LSC", style: 'textotablacatoni', alignment: 'center'},
        {text: "Locking steering castor as pivot", style: 'textotablacatoni'},
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "BSHF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Brake pedals at head & foot", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotabla'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 6},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "N", style: 'textotablacatoni', alignment: 'center'},
        {text: "Hard pan non-rad sleep surface", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "R", style: 'textotablacatoni', alignment: 'center'},
        {text: "radiolucent surface - not available with (AC) and/or (FO) and", style: 'textotablacatoni'},
        {text: "$515", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options[pSItems] = [
        {text: "HBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both side", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options[pSItems] = [
        {text: "HBSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both sides and foot end", style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var options2 =[]
    var pSItems = 0;
    options2[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options2[pSItems] = [
        {text: "Hinge", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "A0", style: 'textotablacatoni', alignment: 'center'},
        {text: '26" (66 cm)', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "A1", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "A6", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options2[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "3S", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "3W", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Fixed strip or sliding tray', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "NONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "No IV pole", style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "3SONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "3 stage at head - HEAD", style: 'textotablacatoni'},
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "BSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right and left side", style: 'textotablacatoni'},
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "BSH", style: 'textotablacatoni', alignment: 'center'},
        {text: "Head end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "BSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Foot end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "RSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "_", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Accessory bar holder', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "LSC", style: 'textotablacatoni', alignment: 'center'},
        {text: "Locking steering castor as pivot", style: 'textotablacatoni'},
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "BSHF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Brake pedals at head & foot", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotabla'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 6},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "N", style: 'textotablacatoni', alignment: 'center'},
        {text: "Hard pan non-rad sleep surface", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "R", style: 'textotablacatoni', alignment: 'center'},
        {text: "radiolucent surface - not available with (AC) and/or (FO) and", style: 'textotablacatoni'},
        {text: "$515", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "HBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both side", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "HBSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both sides and foot end", style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var options2 =[]
    var pSItems = 0;
    options2[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options2[pSItems] = [
        {text: "Hinge", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "A0", style: 'textotablacatoni', alignment: 'center'},
        {text: '26" (66 cm)', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "A1", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "A6", style: 'textotablacatoni', alignment: 'center'},
        {text: '30" (76,2 cm)', style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options2[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options2[pSItems] = [
        {text: "3S", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "3W", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Fixed strip or sliding tray', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "NONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "No IV pole", style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "3SONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "3 stage at head - HEAD", style: 'textotablacatoni'},
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$905", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Castors', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "BSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right and left side", style: 'textotablacatoni'},
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "BSH", style: 'textotablacatoni', alignment: 'center'},
        {text: "Head end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "BSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Foot end - Right and left side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "RSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right side", style: 'textotablacatoni'},
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "_", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$1,144", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Accessory bar holder', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "LSC", style: 'textotablacatoni', alignment: 'center'},
        {text: "Locking steering castor as pivot", style: 'textotablacatoni'},
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Additional options', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "BSHF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Brake pedals at head & foot", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotabla'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options2[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 6},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "N", style: 'textotablacatoni', alignment: 'center'},
        {text: "Hard pan non-rad sleep surface", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "R", style: 'textotablacatoni', alignment: 'center'},
        {text: "radiolucent surface - not available with (AC) and/or (FO) and", style: 'textotablacatoni'},
        {text: "$515", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options2[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options2[pSItems] = [
        {text: "HBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both side", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    options2[pSItems] = [
        {text: "HBSF", style: 'textotablacatoni', alignment: 'center'},
        {text: "On both sides and foot end", style: 'textotablacatoni'},
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$476", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var options3 =[]
    var pSItems = 0;
    options3[pSItems] = [
        {text: 'OPTION CODE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options3[pSItems] = [
        {text: "Overbed table", style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options3[pSItems] = [
        {text: "A0", style: 'textotablacatoni', alignment: 'center'},
        {text: '26" (66 cm)', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options3[pSItems] = [
        {text: 'Plastic drawer insert', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems ++

    /*ESTO VA EN UN CICLO*/
    options3[pSItems] = [
        {text: "3S", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 26" (66 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options3[pSItems] = [
        {text: "3W", style: 'textotablacatoni', alignment: 'center'},
        {text: '3" (7,6 cm) thick - 30" (76,2 cm) width - surface with fire barrier', style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options3[pSItems] = [
        {text: 'Towel Holder', style: 'textotablaboldlargecatoni', border: [false, false, false, false]},
        {text: '* Note: will be discontinued last order March 2021', style: 'textotablaboldblackcatoni', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options3[pSItems] = [
        {text: "NONE", style: 'textotablacatoni', alignment: 'center'},
        {text: "No IV pole", style: 'textotablacatoni'},
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$0", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options3[pSItems] = [
        {text: '2 x single bottle hold', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '* Note: will be discontinued last order March 2021', style: 'textotablaboldblackcatoni', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options3[pSItems] = [
        {text: "BSB", style: 'textotablacatoni', alignment: 'center'},
        {text: "Both ends - Right and left side", style: 'textotablacatoni'},
        {text: "$2,285", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options3[pSItems] = [
        {text: 'Colour contrast (only one additional colour choice is possible)', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 4},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options3[pSItems] = [
        {text: "LSC", style: 'textotablacatoni', alignment: 'center'},
        {text: "Locking steering castor as pivot", style: 'textotablacatoni'},
        {text: "-", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options3[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options3[pSItems] = [
        {text: "SP", style: 'textotablacatoni', alignment: 'center'},
        {text: "Steering Plus™ System (5th castor)", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$761", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    options3[pSItems] = [
        {text: 'Handles', style: 'textotablaboldlargecatoni', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    
    options3[pSItems] = [
        {text: "BSHF", style: 'textotablacatoni', alignment: 'center'},
        {text: "Brake pedals at head & foot", style: 'textotablacatoni'},
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "●", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options3[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++

    options3[pSItems] = [
        {text: "4SBS", style: 'textotablacatoni', alignment: 'center'},
        {text: "4 brake & steer pedals", style: 'textotablacatoni'},
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
        {text: "$714", style: 'textotablacatoni', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var catoni = [
        { text: 'Catoni Collection', style: 'header', tocItem: 'compella'},
        { text: 'Med-Surg', style: 'subheader'},
        { text: 'Country of origin: México', style: 'parrafo' },
        {
            table: {
                widths: ["*", 60, 60, 60, 60],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'FURNCAB', style: 'textotablacolorcatoni', colSpan: 4, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'CH700B4', style: 'textotablaboldblackcatoni', colSpan: 4,  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Catoni Classic Bedside Cabinet - High', style: 'textotablaboldlargecatoni'},
                        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], ul: [
                            { text: 'Height 885 mm - Width 401 mm - Depth 401 mm'},
                            { text: 'Material Body: Melamine - Top Plate: High Pressure Laminate (HPL)'},
                            { text: 'For additional technical specifications see separate tech specs'},
                            { text: 'For colour and handles see separate tech specs'},
                        ],  style:'textolista',},
                        { image: "images/Catoni1.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni2.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni3.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni4.png", width: 40, height: 70, alignment: 'center'},
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4'},
                        {text: "$9,243", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$6,906", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$12,361", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$12,078", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
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
        { text: '\n', style: 'textotablacatoni' },
        {
            table: {
                widths: [50, "*", 60, 60, 60, 60],
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
        { text: '\n', style: 'textotablacatoni' },
        { text: '● = standard', style: 'textotablacatoni' },
        { text: '= - not available', style: 'textotablacatoni' },
        { text: '\n', style: 'textotablacatoni' },
        { text: 'Configurations samples', style: 'textotablaboldlargecatoni' },
        {
            table: {
                widths: [80, 80, 80, 80, 80, "*"],
                body: [
                    [
                        {text: 'B01 with sliding tray (SLP) and simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN), and simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN), accessory bar holder (PAD) and simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with two half doors (A6), fixed strip (BAN), accessory bar holder (PAD) and simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN), colour contrast and simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with colour contrast for fixed shelf', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni5.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni6.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni7.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni8.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni9.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni10.png", width: 40, height: 70, alignment: 'center'},
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
        {
            table: {
                widths: ["*", 60, 60, 60, 60],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'FURNCAB', style: 'textotablacolorcatoni', colSpan: 4, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'CH700B3', style: 'textotablaboldblackcatoni', colSpan: 4,  alignment: 'center'},
                        {},
                        {},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Catoni Style Bedside Cabinet - High', style: 'textotablaboldlargecatoni'},
                        {text: 'B01', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B02', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], ul: [
                            { text: 'Height 885 mm - Width 401 mm - Depth 401 mm'},
                            { text: 'Material Body: Melamine - Top Plate: High Pressure Laminate (HPL) - Edges: Aluminium'},
                            { text: 'For additional technical specifications see separate tech specs'},
                            { text: 'For colour and handles see separate tech specs'},
                        ],  style:'textolista',},
                        { image: "images/Catoni11.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni12.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni13.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni14.png", width: 40, height: 70, alignment: 'center'},
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4'},
                        {text: "$365", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$433", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
                        {text: "$414", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$469", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
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
                widths: [50, "*", 60, 60, 60, 60],
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
        { text: '● = standard', style: 'textotablacatoni' },
        { text: '= - not available', style: 'textotablacatoni' },
        { text: '\n', style: 'parrafo' },
        { text: 'Configurations samples', style: 'textotablaboldlargecatoni' },
        {
            table: {
                widths: [80, 80, 80, 80, 80, "*"],
                body: [
                    [
                        {text: 'B01 with sliding tray (SLP), accessory bar holder (PAD) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with fixed strip (BAN) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with two half doors (A6) & simple base (L3)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B01 with colour contrast for fixed shelf', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B02 with plastic cover (CAP)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B02 with colour contrast', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni15.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni16.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni17.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni18.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni19.png", width: 40, height: 70, alignment: 'center'},
                        { image: "images/Catoni20.png", width: 40, height: 70, alignment: 'center'},
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
        {
            table: {
                widths: ["*", 80, 80],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'FURNACUSELECT', style: 'textotablacolorcatoni', colSpan: 2, fillColor: '#546ce4',  alignment: 'center'},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: ''},
                        {text: 'SER-CH770A', style: 'textotablaboldblackcatoni', colSpan: 2,  alignment: 'center'},
                        {},
                    ],
                    [
                        {border: [false, false, false, false], text: 'Catoni Bedside Cabinet with overbed table - bilateral functionality', style: 'textotablaboldlargecatoni'},
                        {text: 'B03', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: 'B04', style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                    ],
                    [
                        {border: [false, false, false, false], ul: [
                            { text: 'Height 870 mm - Width 605 mm - Depth 450 mm'},
                            { text: 'Material: Body - Top Plate: High Pressure Laminate (HPL) - Edges: Aluminium'},
                            { text: 'Castors : 5 x 50 mm with 2 brakes'},
                            { text: 'Bumpers-grey'},
                            { text: 'For additional technical specifications see separate tech specs'},
                            { text: 'For colour and handles see separate tech specs'},
                        ],  style:'textolista',},
                        { image: "images/Catoni21.png", width: 60, height: 70, alignment: 'center'},
                        { image: "images/Catoni22.png", width: 60, height: 70, alignment: 'center'},
                    ],
                    [
                        {text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4'},
                        {text: "$1,703", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'},
                        {text: "$1,766", style: 'textotablacolorcatoni', fillColor: '#546ce4', alignment: 'center'}, 
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
                widths: [50, "*", 60, 60],
                body: options3
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
        { text: '● = standard', style: 'textotablacatoni' },
        { text: '= - not available', style: 'textotablacatoni' },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [67, 67, 67, 67],
                body: [
                    [
                        {text: 'B03 Plastic drawer insert (1BS) in top drawer', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 with 2 x single bottle holder (BOH)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B04 with 2 x single bottle holder (BOH)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Towel holder (TH)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni23.png", width: 50, height: 70, alignment: 'center'},
                        { image: "images/Catoni24.png", width: 50, height: 70, alignment: 'center'},
                        { image: "images/Catoni25.png", width: 50, height: 70, alignment: 'center'},
                        { image: "images/Catoni26.png", width: 50, height: 70, alignment: 'center'},
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
                widths: [67, 67, 67],
                body: [
                    [
                        {text: 'B03 Contrasting colours front (drawers and doors)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Contrasting colours front and overbed table', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'B03 Contrasting colours front (drawers and doors)', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        { image: "images/Catoni27.png", width: 60, height: 60, alignment: 'center'},
                        { image: "images/Catoni28.png", width: 60, height: 60, alignment: 'center'},
                        { image: "images/Catoni29.png", width: 60, height: 60, alignment: 'center'},
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
        { text: 'Colours for Catoni Collection', style: 'header', tocItem: 'compella'},
        { text: 'Country of Origin : France', style: 'parrafo' },
        "\n",
        {
            table: {
                widths: [50, 50, 100, 40, 40, 40],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'Classic', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Style', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Select', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'M47', style: 'textotabla',  alignment: 'center'},
                        { image: "images/Catoni30.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Steamed Beech', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M88', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni31.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Bloomed Cherry', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M89', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni32.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Scandic Beech Dark', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M94', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni33.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Sycamore', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M32', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni34.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Crystal White', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M40', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni35.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Grey', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M91', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni36.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Hill-Rom Blue', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'M95', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni37.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'Light Beige', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
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
        { text: '\n', style: 'parrafo' },
        { text: 'x = optional', style: 'parrafo' },
        '\n',
        { text: 'Handles for Catoni Collection', style: 'header', tocItem: 'compella'},
        { text: 'Country of Origin : France', style: 'parrafo' },
        '\n',
        {
            table: {
                widths: [50, 50, 100, 40, 40, 40],
                body: [
                    [
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {border: [false, false, false, false], text: ''},
                        {text: 'Classic', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Style', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                        {text: 'Select', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {text: 'H20', style: 'textotabla',  alignment: 'center'},
                        { image: "images/Catoni38.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H20 - Steel, chromed', style: 'textotabla'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                        {text: '●', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'H22', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni39.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H22 - Aluminium, anodized', style: 'textotabla'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                    ],
                    [
                        {text: 'H13', style: 'textotabla', alignment: 'center'},
                        { image: "images/Catoni40.png", width: 50, height: 30, alignment: 'center'},
                        {text: 'H13 - Steel, chromed', style: 'textotabla'},
                        {text: '-', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
                        {text: 'x', style: 'textotabla', alignment: 'center'},
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

    return catoni;
}

module.exports = {
    getCatoni : getCatoni,
}