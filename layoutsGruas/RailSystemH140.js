const dbProgressa = require('../controllers/progressa')

async function getRailSystemH140()
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
        {border: [true, true, true, false], text: '31013428V', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: '2,8 m Straight Rail H140 (110 in), white', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, true, true, false], text: '$329', style: 'textotablacatoni', alignment: 'center'},
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


    accesories[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories2 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, true, true, false], text: '31013428N', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: '2,8 m Straight Rail H140 (110 in), natural', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH140.png", width: 80, height: 25, alignment: 'center', rowSpan: 5},
        {border: [true, true, true, false], text: '$312', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

     /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1402.png", width: 80, height: 25, alignment: 'center'},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
    accesories2[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1403.png", width: 80, height: 25, alignment: 'center'},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    var accesories3 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, true, true, false], text: '31013428N', style: 'textotablacatoni'},
        {border: [true, true, true, false], text: '2,8 m Straight Rail H140 (110 in), natural', style: 'textotablacatoni'},
        {border: [true, true, true, false], image: "images/RailSystemH1404.png", width: 20, height: 15, alignment: 'center'},
        {border: [true, true, true, false], text: '$312', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
     /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1405.png", width: 20, height: 15, alignment: 'center'},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
     /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1406.png", width: 15, height: 60, alignment: 'center', rowSpan: 6},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, false, true, false], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, false], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1407.png", width: 20, height: 20, alignment: 'center', rowSpan: 2},
        {border: [true, false, true, false], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++

    /*TERMINA CICLO*/   

     /*ESTO VA EN UN CICLO*/
    accesories3[pSItems] =[
        {border: [true, false, true, true], text: '2020100DEFR', style: 'textotablacatoni'},
        {border: [true, false, true, true], text: 'Quick Reference Guide DE-FR', style: 'textotablacatoni'},
        {border: [true, true, true, true], image: "images/RailSystemH1408.png", width: 50, height: 20, alignment: 'center'},
        {border: [true, false, true, true], text: '$963', style: 'textotablacatoni', alignment: 'center'},
    ]

    pSItems++
     /*TERMINA CICLO*/   

    var railSystemH140 = [
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H140', style: 'textotablacolorlargecatoni', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System H160-180', style: 'textotablacolorlargecatoni', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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

        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail System - End Covers', style: 'textotablacolorlargecatoni', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART??#', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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
    ]

    return railSystemH140;
}

module.exports = {
    getRailSystemH140 : getRailSystemH140,
}