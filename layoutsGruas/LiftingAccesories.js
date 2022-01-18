const dbProgressa = require('../controllers/progressa')

async function getLiftingAccesories()
{
    /*const res = await dbProgressa.getDataProgressa()
    const prices = res[0]
    const patientSiderail = res[1]
    const mobility  = res[2]
    const permanentPole = res[3]
    const transportShelf = res[4]
    const accumaxSurfaces = res[5]
    const therapyIntegrated = res[6]
    const pulmonaryIntegrated = res[7]
    const accesoriesData = res[8]*/

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories1.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories2.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories3.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories4.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories5.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories6.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories7.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories8.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories9.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories10.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories11.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories12.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories13.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<accesoriesData.length; i++)
    {
        accesories[pSItems] = [
            {text: accesoriesData[i].KitName, style: 'textotabla', alignment: 'center'},
            {text: accesoriesData[i].Item_Long_Desc, style: 'textotabla'},
            {text: accesoriesData[i].Part, style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(accesoriesData[i].Price), style: 'textotabla', alignment: 'center'}, 
        ]
    
        pSItems++
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories14.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories15.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories16.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories17.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories18.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories19.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories20.png", width: 70, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories21.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories22.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories23.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/LiftingAccesories24.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories25.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories26.png", width: 30, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories27.png", width: 50, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories28.png", width: 30, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428V', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Universal SlingBarTM 350', style: 'textotablaboldblack'},
        {border: [true, true, true, true], image: "images/LiftingAccesories29.png", width: 40, height: 30, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '31013428V', style: 'textotabla'},
        {border: [true, false, true, true], text: 'Max 300 kg (660 lbs).', style: 'textotabla'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$329', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var liftingAccesories = [
        { text: 'LIFTING ACCESSORIES', style: 'header' },
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Lifting Accessories', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3},
                        {},
                        {}
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
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                    ],
                    [
                        {border: [true, false, true, false], text: "\nAll of Liko’s accessories and slings are approved for a maximum load of 200 kg (440 lbs) if nothing else is described. \nFor advice and guidance regarding the Quick-release Hook system's compatibility with other Liko products, we refer to the latest version of the \ndocument 'Guide to Liko's Quick-release Hook System', which can be downloaded at www.liko.com.\n\n", style: 'textotabla', fillColor: '#dbdbdb',  alignment: 'center', colSpan: 3},
                        {},
                        {},
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
                widths: [80, "*", 80, 60],
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
        "\n",
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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
                widths: [80, "*", 80, 60],
                body: accesories2
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

    return liftingAccesories;
}

module.exports = {
    getLiftingAccesories : getLiftingAccesories,
}