const dbProgressa = require('../controllers/progressa')

async function getOverheadLifts()
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
        {border: [true, false, true, false], text: '3121001', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Likorall 200, natural, incl, hand control Max 200 kg (440 lbs)', style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/Likoral1.png", width: 60, height: 40, alignment: 'center', rowSpan: 4},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Not available for United States & Canada', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122005', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Likorall 242 ES, natural Max. 200Kg (440 lbs)', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral2.png", width: 55, height: 55, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ""},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122007', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Likorall 242 ES R2R, natural 200Kg (440 lbs)', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral3.png", width: 55, height: 55, alignment: 'center', rowSpan: 4},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: ""},
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {border: [true, false, true, true], text: "\nNOTE! Likorall is delivered without accessories. Complete the lift with appropriate carrier, hand control (not Likorall 200), charger, sling bar and parking panel. Likorall is available in different models e.g. as a Room-to-Room (R2R) solution. Likorall's ES-models are prepared for Transfer motor.\n\n", alignment: 'center', style: "textotabla", fillColor: '#dbdbdb', colSpan: 4},
        {},
        {},
        {},
    ]

    pSItems++

    var accesories2 = []
    pSItems = 0;

    accesories2[pSItems] =[
        {border: [true, true, false, true], text: '', style: 'textotabla'},
        {border: [false, true, true, true], text: 'Quick Reference Guide Likorall 200', style: 'textotablaboldblack', colSpan: 3},
        {},
        {},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/Likoral5.png", width: 40, height: 90, alignment: 'center', rowSpan: 6},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    accesories2[pSItems] =[
        {border: [true, true, false, true], text: '', style: 'textotabla'},
        {border: [false, true, true, true], text: 'Quick Reference Guide Likorall 242 / 250', style: 'textotablaboldblack', colSpan: 3},
        {},
        {},
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '3122100SVFI', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/Likoral6.png", width: 40, height: 90, alignment: 'center', rowSpan: 6},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral7.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    
    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral8.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral9.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral10.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral11.png", width: 30, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral12.png", width: 40, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral13.png", width: 80, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories3 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage (2p) with brake\n', style: 'textotablaboldblack'},
                {text: 'Does not fit the RailCurves', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral14.png", width: 80, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    
    accesories3[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage (2p) w/o brake LR\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral15.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, true, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, true, true, false], text: '2-Piece Carriage without Brake', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral16.png", width: 50, height: 55, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight & Curved Rails, Traverse Switch & Turntable (Prism Medical)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotabla'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral17.png", width: 80, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'HandControl LR S, ES, 2-button\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral18.png", width: 30, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories4 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, false], text: '', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Quick Release Carriage', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral19.png", width: 30, height: 30, alignment: 'center', rowSpan: 3},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '31260081', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight & Curved Rails, Traverse Switch & Turntable (Prism Medical)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Quick-release Adapter LR\n', style: 'textotabla'},
                {text: 'Fits Quick-release Carriage LR, Prod. No. 3126008,\n', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral20.png", width: 30, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    
    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage (2p) w/o brake LR\n', style: 'textotablaboldblack'},
                {text: '(for operating lifting motion)', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral21.png", width: 30, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, false], text: '', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Carriage without Brake for 90° Turning of Motor', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral22.png", width: 40, height: 40, alignment: 'center', rowSpan: 4},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '31260081', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight & Curved Rails, Traverse Switch & Turntable (Prism Medical)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage with Brake for Likorall R2R for 90° turning of motor', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral23.png", width: 40, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage LR 360° for R2R', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral24.png", width: 40, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage Adapter LR for Quick-release Hook\n', style: 'textotablaboldblack'},
                {text: 'Carriage Adapter LR for Quick-release Hook', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral25.png", width: 50, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage LR 360° for R2R', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral26.png", width: 40, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Carriage LR 360° for R2R\n', style: 'textotabla'},
                {text: 'Carriage LR 360° for R2R', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral27.png", width: 30, height: 30, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '31260081', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Carriage adjustable 300-500mm, (12-20 in), R2R', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/Likoral28.png", width: 30, height: 50, alignment: 'center', rowSpan: 3},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, false], text: '', style: 'textotabla'},
        {border: [true, true, true, false], text: 'In Rail Charging System', style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/Likoral29.png", width: 80, height: 120, alignment: 'center', rowSpan: 10},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '31260081', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight & Curved Rails, Traverse Switch & Turntable (Prism Medical)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Straight Rail (Beram)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'MultiStation\n', style: 'textotablaboldblack'},
                {text: 'Fits Quick-release Carriage LR, Prod. No. 3126008,\n', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral30.png", width: 80, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Extension Flex Multi 1300\n', style: 'textotablaboldblack'},
                {text: 'Fits Quick-release Carriage LR, Prod. No. 3126008,\n', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral31.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories4[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Extension Flex Multi 1300\n', style: 'textotablaboldblack'},
                {text: 'Fits Quick-release Carriage LR, Prod. No. 3126008,\n', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'},
                {text: 'and Likorall, all models,', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral32.png", width: 60, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories5 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3126101', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Battery Charger LR/MR, EU (24V/0,6 A)', style: 'textotabla'},
        {border: [true, false, true, true], image: "images/Likoral33.png", width: 50, height: 60, alignment: 'center', rowSpan: 6},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ''},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Fits all models of Likorall 242 and 250 \nexcept Likorall 250 S IRC', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: ''},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories5[pSItems] =[
        {border: [true, true, true, false], text: '3126101', style: 'textotabla'},
        {border: [true, true, true, false], text: 'Battery Charger Likorall 200, EU (24V/0,22 A)', style: 'textotabla'},
        {border: [true, true, true, true], image: "images/Likoral34.png", width: 60, height: 40, alignment: 'center', rowSpan: 4},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126011', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Extension Cable, 2,0 m (79 in.)\n', style: 'textotablaboldblack'},
                {text: 'Extra long charger cable for use with Sabina 200,\n', style: 'textotabla'},
                {text: 'Uno 200, Likorall 200 and Likorall 250 S IRC', style: 'textotabla'}
            ]},
        {border: [true, true, true, true], image: "images/Likoral35.png", width: 80, height: 20, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '31260081', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Parking Panel 600, LR/MR', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/Likoral36.png", width: 40, height: 70, alignment: 'center', rowSpan: 3},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '3121100SVFI', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Swedish / Finnish (pce)', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, false, true, false], text: '', style: 'textotabla'},
        {border: [true, false, true, false], text: 'Practical storage place for overhead lift accessories. \nComplement with appropriate quick reference guide, \nappropriate charger, if necessary Bracket for \nCharger (for Battery Charger LR/MR), Hook for SlingBar and Hook for Accessories', style: 'textotabla'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Bracket for charger \nFits Battery Charger LR/MR, Prod. No. 3126101-04. \nTo be mounted on the Parking Panel', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral37.png", width: 25, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Hook for SlingBar \nFits Universal SlingBar 350, 450 and 600. \nTo be mounted on the Parking Panel', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral38.png", width: 25, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Hook for Accessories\nFor use with accessories e.g. slings.\nTo be mounted on the Parking Panel', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral39.png", width: 25, height: 40, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Universal SlingBar 350 R2R \nMax 300 kg (660 Ibs)', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral40.png", width: 70, height: 25, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories5[pSItems] =[
        {border: [true, true, true, true], text: '3126034', style: 'textotabla'},
        {border: [true, true, true, true], text: [
                {text: 'Universal SlingBar 350 R2R \nMax 300 kg (660 Ibs)', style: 'textotabla'},
            ]},
        {border: [true, true, true, true], image: "images/Likoral41.png", width: 80, height: 25, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var overheadLifts = [
        { text: 'OVERHEAD LIFTS', style: 'header' },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'LIKORALL', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
        "\n",
        { text: 'ACCESORIES', style: 'subheader' },
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
                body: accesories3
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
                body: accesories4
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
                body: accesories5
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

    return overheadLifts;
}

module.exports = {
    getOverheadLifts : getOverheadLifts,
}