const dbProgressa = require('../controllers/progressa')

async function getRailSystemH70()
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
        {border: [true, true, true, false], text: '3122005', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: 'Likorall 242 ES, natural Max. 200Kg (440 lbs)', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH701.png", width: 80, height: 25, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122005', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: 'Likorall 242 ES, natural Max. 200Kg (440 lbs)', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: ""},
        {border: [true, true, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122007', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: '90° RailCurve H70, natural, 1m/1m (39 in/39 in)', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH702.png", width: 80, height: 35, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: '90° RailCurve H70, natural, 1m/1m (39 in/39 in)', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122007', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: '90° RailCurve H70, natural, 1m/1m (39 in/39 in)', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH703.png", width: 80, height: 35, alignment: 'center', rowSpan: 2},
        {border: [true, true, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: '90° RailCurve H70, natural, 1m/1m (39 in/39 in)', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122007', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH704.png", width: 80, height: 20, alignment: 'center', rowSpan: 6},
        {border: [true, true, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Embedded Straight Rail H70, 2.8m, white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, false], text: '3122007', style: 'textotabla'},
        {border: [true, true, true, false], text: '90° Embedded Rail Curve H70, white, 1m/1m', style: 'textotabla'},
        {border: [true, true, true, false], image: "images/RailSystemH705.png", width: 40, height: 25, alignment: 'center'},
        {border: [true, true, true, false], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories[pSItems] =[
        {border: [true, true, true, true], text: '3122007', style: 'textotabla'},
        {border: [true, true, true, true], text: '90° Embedded Rail Curve H70, white, 1m/1m', style: 'textotabla'},
        {border: [true, true, true, true], image: "images/RailSystemH706.png", width: 40, height: 25, alignment: 'center'},
        {border: [true, true, true, true], text: '$963', style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var railSystemH70 = [
        { text: 'RAIL SYSTEM', style: 'header' },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H70', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return railSystemH70;
}

module.exports = {
    getRailSystemH70 : getRailSystemH70,
}