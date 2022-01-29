const dbAccesoriesSlings = require('../controllers/accesoriesforslings')

async function getAccesoriesForSlings()
{
    const res = await dbAccesoriesSlings.getAccesories()
    const salida1  = res[0]
    const salida2 = res[1]
    const salida3 = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]
    const salida8 = res[7]
    const salida9 = res[8]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida1.length; i++)
    {
        if(i === 0 && salida1.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida1.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida1.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida1.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida2.length; i++)
    {
        if(i === 0 && salida2.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings2.png", width: 80, height: 20, alignment: 'center', rowSpan: salida2.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings2.png", width: 80, height: 20, alignment: 'center', rowSpan: salida2.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida2.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    
    accesories[pSItems] =[
        {border: [true, true, true, false], text: salida3[0].Part, style: 'textotabla'},
        {border: [true, true, true, false], text: salida3[0].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, true, true, false], image: "images/AccesoriesForSlings3.png", width: 60, height: 40, alignment: 'center', rowSpan: 1},
        {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[0].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: salida3[1].Part, style: 'textotabla'},
        {border: [true, false, true, false], text: salida3[1].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[1].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: salida3[2].Part, style: 'textotabla'},
        {border: [true, false, true, false], text: salida3[2].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[2].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: salida3[3].Part, style: 'textotabla'},
        {border: [true, false, true, false], text: salida3[3].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, false, true, false], image: "images/AccesoriesForSlings4.png", width: 60, height: 40, alignment: 'center', rowSpan: 1},
        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[3].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, false], text: salida3[4].Part, style: 'textotabla'},
        {border: [true, false, true, false], text: salida3[4].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, false, true, false], text: ""},
        {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[4].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++

    accesories[pSItems] =[
        {border: [true, false, true, true], text: salida3[5].Part, style: 'textotabla'},
        {border: [true, false, true, true], text: salida3[5].Item_Long_Desc, style: 'textotablaboldblack'},
        {border: [true, false, true, true], text: ""},
        {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[5].Price), style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/

    

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings5.png", width: 60, height: 15, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings5.png", width: 60, height: 15, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida5.length; i++)
    {
        if(i === 0 && salida5.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings6.png", width: 80, height: 15, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings6.png", width: 80, height: 15, alignment: 'center', rowSpan: salida5.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida5.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida6.length; i++)
    {
        if(i === 0 && salida6.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings7.png", width: 80, height: 15, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings7.png", width: 80, height: 15, alignment: 'center', rowSpan: salida6.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida6.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<salida7.length; i++)
    {
        if(i === 0 && salida7.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida7.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<salida8.length; i++)
    {
        if(i === 0 && salida8.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings9.png", width: 30, height: 80, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings9.png", width: 30, height: 80, alignment: 'center', rowSpan: salida8.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida8.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }*/
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<salida9.length; i++)
    {
        if(i === 0 && salida9.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings10.png", width: 60, height: 30, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/AccesoriesForSlings10.png", width: 60, height: 30, alignment: 'center', rowSpan: salida9.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida9.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }*/
    /*TERMINA CICLO*/

    accesories[pSItems] =[
        {border: [true, true, true, false], text: 'All of Liko’s accessories and slings are approved for a maximum load of 200 kg (440 lbs) if nothing else is described.', style: 'textotabla', fillColor: '#dbdbdb', colSpan: 4, alignment: "center"},
        {border: [true, true, true, false], text: ""},
        {border: [true, true, true, false], text: ""},
        {border: [true, true, true, false], text: ''},
    ]

    pSItems++

    const fecha = new Date();
    fecha.toLocaleDateString()

    var accesoriesForSlings = [
        "\n",
        { text: 'ACCESORIES FOR SLINGS', style: 'header' },
        { text: 'Accesories For Slings', style: {fontSize: 0}, tocItem: "accesoriesforslings"},
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'ACCESORIES FOR SLINGS', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
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

    return accesoriesForSlings;
}

module.exports = {
    getAccesoriesForSlings : getAccesoriesForSlings,
}