const axios = require('axios');

async function getTherapySurfaces()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var foamSurface =[]
    var pSItems = 0;
    foamSurface[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SURFACE COVER', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    foamSurface[pSItems] = [
        {text: "ENTER AS END ITEM", style: 'textotabla', alignment: 'center'},
        {text: "NP50", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS028CN", style: 'textotabla', alignment: 'center'}, 
        {text: "$391", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var foamSurfaces =[]
    pSItems = 0;
    foamSurfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'SURFACE COVER', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
    ]
    pSItems++

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Monodensity', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP50", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS027", style: 'textotabla', alignment: 'center'}, 
        {text: "$391", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP50", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS028", style: 'textotabla', alignment: 'center'}, 
        {text: "$391", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP50", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: "203 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS049", style: 'textotabla', alignment: 'center'}, 
        {text: "$391", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Bidensity', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP100", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS029", style: 'textotabla', alignment: 'center'}, 
        {text: "$581", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP100", style: 'textotabla', alignment: 'center'},
        {text: "SW - sewn cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS031", style: 'textotabla', alignment: 'center'}, 
        {text: "$581", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP100", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS030", style: 'textotabla', alignment: 'center'}, 
        {text: "$676", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP100", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS032", style: 'textotabla', alignment: 'center'}, 
        {text: "$676", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP100", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS038", style: 'textotabla', alignment: 'center'}, 
        {text: "$676", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    foamSurfaces[pSItems] = [
        {border: [false, false, false, false], text: 'Viscoelastic', style: 'textotablaboldlarge',  alignment: 'left', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP150", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS033", style: 'textotabla', alignment: 'center'}, 
        {text: "$840", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP150", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS034", style: 'textotabla', alignment: 'center'}, 
        {text: "$840", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP150", style: 'textotabla', alignment: 'center'},
        {text: "WD - welded cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: "203 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS048", style: 'textotabla', alignment: 'center'}, 
        {text: "$840", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP150", style: 'textotabla', alignment: 'center'},
        {text: "XR - XRAY welded cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 85 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS095", style: 'textotabla', alignment: 'center'}, 
        {text: "$914", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    foamSurfaces[pSItems] = [
        {text: "FOAMATTRESS", style: 'textotabla', alignment: 'center'},
        {text: "NP150", style: 'textotabla', alignment: 'center'},
        {text: "XR - XRAY welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: "198 x 90 x 14 cm", style: 'textotabla', alignment: 'center'}, 
        {text: "ASS099", style: 'textotabla', alignment: 'center'}, 
        {text: "$914", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var extensions = []
    pSItems = 0

    extensions[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     extensions[pSItems] = [
        {text: "MATTRESSEXT", style: 'textotabla', alignment: 'center'},
        {text: 'AD231A', style: 'textotabla', alignment: 'center'},
        {text: "Bed extender NP", style: 'textotabla'}, 
        {text: "04", style: 'textotabla', alignment: 'center'}, 
        {text: '9 x 85 x 14 cm', style: 'textotabla'},
        {text: "ASS043", style: 'textotabla', alignment: 'center'}, 
        {text: "$179", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    extensions[pSItems] = [
        {text: "MATTRESSEXT", style: 'textotabla', alignment: 'center'},
        {text: 'AD231A', style: 'textotabla', alignment: 'center'},
        {text: "Bed extender NP", style: 'textotabla'}, 
        {text: "05", style: 'textotabla', alignment: 'center'}, 
        {text: '18 x 85 x 14 cm', style: 'textotabla'},
        {text: "ASS044", style: 'textotabla', alignment: 'center'}, 
        {text: "$226", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    extensions[pSItems] = [
        {text: "MATTRESSEXT", style: 'textotabla', alignment: 'center'},
        {text: 'AD231A', style: 'textotabla', alignment: 'center'},
        {text: "Bed extender NP", style: 'textotabla'}, 
        {text: "06", style: 'textotabla', alignment: 'center'}, 
        {text: '18 x 90 x 28 cm', style: 'textotabla'},
        {text: "ASS077", style: 'textotabla', alignment: 'center'}, 
        {text: "$299", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    extensions[pSItems] = [
        {text: "MATTRESSEXT", style: 'textotabla', alignment: 'center'},
        {text: 'AD231A', style: 'textotabla', alignment: 'center'},
        {text: "Bed extender NP", style: 'textotabla'}, 
        {text: "07", style: 'textotabla', alignment: 'center'}, 
        {text: '20 x 85 x 21 cm', style: 'textotabla'},
        {text: "ASS078", style: 'textotabla', alignment: 'center'}, 
        {text: "$226", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    var surfaceCovers = []
    pSItems = 0

    surfaceCovers[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'MODEL', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'SIZE CODE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'SIZE (L x W x H)', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Monodensity", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP50C', style: 'textotabla', alignment: 'center'},
        {text: "SW - Sewn cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 85 x 14 cm', style: 'textotabla'},
        {text: "TEX027", style: 'textotabla', alignment: 'center'}, 
        {text: "$274", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP50C', style: 'textotabla', alignment: 'center'},
        {text: "SW - Sewn cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX028", style: 'textotabla', alignment: 'center'}, 
        {text: "$274", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP50C', style: 'textotabla', alignment: 'center'},
        {text: "SW - Sewn cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: '203 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX049", style: 'textotabla', alignment: 'center'}, 
        {text: "$274", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Bidensity", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP100C', style: 'textotabla', alignment: 'center'},
        {text: "SW - Sewn cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 85 x 14 cm', style: 'textotabla'},
        {text: "TEX029", style: 'textotabla', alignment: 'center'}, 
        {text: "$321", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP100C', style: 'textotabla', alignment: 'center'},
        {text: "SW - Sewn cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX031", style: 'textotabla', alignment: 'center'}, 
        {text: "$321", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP100C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 85 x 14 cm', style: 'textotabla'},
        {text: "TEX030", style: 'textotabla', alignment: 'center'}, 
        {text: "$438", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP100C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX032", style: 'textotabla', alignment: 'center'}, 
        {text: "$438", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP100C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: '203 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX038", style: 'textotabla', alignment: 'center'}, 
        {text: "$438", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    surfaceCovers[pSItems] = [
        {border: [false, false, false, false], text: "Viscoelastic", style: 'textotablaboldlarge', colSpan: 7},
        {},
        {},
        {},
        {},
        {},
        {},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP150C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "15", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 85 x 14 cm', style: 'textotabla'},
        {text: "TEX033", style: 'textotabla', alignment: 'center'}, 
        {text: "$486", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP150C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX034", style: 'textotabla', alignment: 'center'}, 
        {text: "$486", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP150C', style: 'textotabla', alignment: 'center'},
        {text: "WD - Welded cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: '203 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX048", style: 'textotabla', alignment: 'center'}, 
        {text: "$486", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP150C', style: 'textotabla', alignment: 'center'},
        {text: "XR - XRAY welded cover", style: 'textotabla'}, 
        {text: "17", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 85 x 14 cm', style: 'textotabla'},
        {text: "TEX095", style: 'textotabla', alignment: 'center'}, 
        {text: "$623", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    surfaceCovers[pSItems] = [
        {text: "MATTRESSCOV", style: 'textotabla', alignment: 'center'},
        {text: 'NP150C', style: 'textotabla', alignment: 'center'},
        {text: "XR - XRAY welded cover", style: 'textotabla'}, 
        {text: "16", style: 'textotabla', alignment: 'center'}, 
        {text: '198 x 90 x 14 cm', style: 'textotabla'},
        {text: "TEX099", style: 'textotabla', alignment: 'center'}, 
        {text: "$623", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var usSurfaces = []
    pSItems = 0

    usSurfaces[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    usSurfaces[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP50 (non-powered) Surface: MRS 80" x 35.5" x 6"', style: 'textotabla'},
        {text: "P50A7F", style: 'textotabla'}, 
        {text: "$452", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP50 (non-powered) Surface: MRS 84" x 35.5" x 6"', style: 'textotabla'},
        {text: 'P50A8F', style: 'textotabla'}, 
        {text: "$466", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP50 (non-powered) Surface: MRS 76" x 35.5" x 6"', style: 'textotabla'},
        {text: "P50A9F", style: 'textotabla'}, 
        {text: "$448", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP50 (non powered) Surface: Bariatric 84" x 39" x 7"', style: 'textotabla'},
        {text: "P50A3F", style: 'textotabla'}, 
        {text: "$860", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP50MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP50 (non powered) Surface: Bariatric 84" x 48" x 7"', style: 'textotabla'},
        {text: "P50A4F", style: 'textotabla'}, 
        {text: "$1,003", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    usSurfaces[pSItems] = [
        {border: [false, false, false, false], text: "", style: 'parrafo', colSpan: 4},
        {},
        {},
        {},
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    usSurfaces[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP100 (non-powered) Surface: MRS 80" x 35.5" x 6"', style: 'textotabla'},
        {text: "P100A4", style: 'textotabla'}, 
        {text: "$770", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP100 (non-powered) Surface: MRS 84" x 35.5" x 6"', style: 'textotabla'},
        {text: "P100A5", style: 'textotabla'}, 
        {text: "$789", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP100 (non-powered) Surface - Versacare - 86.5" x 35.5" x 7"', style: 'textotabla'},
        {text: "P100A7", style: 'textotabla'}, 
        {text: "$1,197", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP100 (non-powered) Surface - CareAssist - 80" x 35.5" x 6"', style: 'textotabla'},
        {text: "P100A8", style: 'textotabla'}, 
        {text: "$883", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    usSurfaces[pSItems] = [
        {text: "NP100MAT", style: 'textotabla', alignment: 'center'},
        {text: 'NP100 (non-powered) Surface - Totalcare', style: 'textotabla'},
        {text: "P100A9", style: 'textotabla'}, 
        {text: "$1,446", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var therapySurfaces = [
        { text: 'THERAPY SURFACES', style: 'header', tocItem: 'compella'},
        { text: 'Country of origin: China\n', style: 'parrafo' },
        "\n",
        { text: 'FOAM SURFACE', style: 'textotablaboldlarge'},
        {
            table: {
                widths: [70, 40, "*", 40, 60, 50, 50],
                body: foamSurface
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
        { text: 'FOAM SURFACES', style: 'textotablaboldlarge'},
        { text: 'Country of origin: France\n', style: 'parrafo' },
        {
            table: {
                widths: [70, 40, "*", 40, 60, 50, 50],
                body: foamSurfaces
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
        { image: "images/TherapySurfaces.png", width: 500, height: 120, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
        '\n',
        { text: 'EXTENSIONS', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, '*', 70, 70, 70, 70, 70],
                body: extensions
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
        { text: 'SURFACE COVERS', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, '*', 70, 70, 70, 70, 70],
                body: surfaceCovers
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
        { text: 'US SURFACES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, '*', 70, 70],
                body: usSurfaces
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

    return therapySurfaces;
}

module.exports = {
    getTherapySurfaces : getTherapySurfaces,
}