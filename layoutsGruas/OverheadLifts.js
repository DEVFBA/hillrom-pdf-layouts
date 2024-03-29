const dbOverheadLifts = require('../controllers/overheadlifts')

async function getOverheadLifts(pdfZone)
{
    const res = await dbOverheadLifts.getOverheadLifts(pdfZone)
    const salida1 = res[0]
    const salida2 = res[1]
    const salida3  = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]
    const salida8 = res[7]
    const salida9 = res[8]
    const salida10 = res[9]
    const salida11 = res[10]
    const salida12 = res[11]
    const salida13  = res[12]
    const salida14 = res[13]
    const salida15 = res[14]
    const salida16 = res[15]
    const salida17 = res[16]
    const salida18 = res[17]
    const salida19 = res[18]
    const salida20 = res[19]
    const salida21 = res[20]
    const salida22 = res[21]
    const salida23  = res[22]
    const salida24 = res[23]
    const salida25 = res[24]
    const salida26 = res[25]
    const salida27 = res[26]
    const salida28 = res[27]
    const salida29 = res[28]
    const salida30 = res[29]
    const salida31 = res[30]
    const salida32 = res[31]
    const salida33 = res[32]
    const salida34 = res[33]
    const salida35 = res[34]
    const salida36 = res[35]
    const salida37 = res[36]
    const salida38 = res[37]
    const salida39 = res[38]
    const salida40 = res[39]
    const salida41 = res[40]

    var accesories = []
    var pSItems = 0

    if(salida1.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida1.length; i++)
        {
            if(i === 0 && salida1.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida1.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida1.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida1.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
    }
    

    if(salida2.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida2.length; i++)
        {
            if(i === 0 && salida2.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral2.png", width: 55, height: 55, alignment: 'center', rowSpan: salida2.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral2.png", width: 55, height: 55, alignment: 'center', rowSpan: salida2.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida2.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
    }
    
    if(salida3.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida3.length; i++)
        {
            if(i === 0 && salida3.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral3.png", width: 55, height: 55, alignment: 'center', rowSpan: salida3.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida3[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral3.png", width: 55, height: 55, alignment: 'center', rowSpan: salida3.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida3.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida3[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida4.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida4.length; i++)
        {
            if(i === 0 && salida4.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Likoral4.png", width: 55, height: 55, alignment: 'center', rowSpan: salida4.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Likoral4.png", width: 55, height: 55, alignment: 'center', rowSpan: salida4.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida4.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
    }
    

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
        {border: [false, true, true, true], text: 'Quick Reference Guide Likorall 200', style: 'textotablaboldblacklarge', colSpan: 3},
        {},
        {},
    ]

    pSItems++

    if(salida5.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida5.length; i++)
        {
            if(i === 0 && salida5.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral5.png", width: 40, height: 90, alignment: 'center', rowSpan: salida5.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral5.png", width: 40, height: 90, alignment: 'center', rowSpan: salida5.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida5.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    accesories2[pSItems] =[
        {border: [true, true, false, true], text: '', style: 'textotabla'},
        {border: [false, true, true, true], text: 'Quick Reference Guide Likorall 242 / 250', style: 'textotablaboldblacklarge', colSpan: 3},
        {},
        {},
    ]

    pSItems++

    if(salida6.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida6.length; i++)
        {
            if(i === 0 && salida6.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral6.png", width: 40, height: 90, alignment: 'center', rowSpan: salida6.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral6.png", width: 40, height: 90, alignment: 'center', rowSpan: salida6.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida6.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida7.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida7.length; i++)
        {   

            if(i === 0 && salida7.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral7.png", width: 80, height: 20, alignment: 'center', rowSpan: salida7.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral7.png", width: 80, height: 20, alignment: 'center', rowSpan: salida7.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida7.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida8.length > 0)
    {
        for(var i=0; i<salida8.length; i++)
        {

            if(i === 0 && salida8.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral8.png", width: 80, height: 20, alignment: 'center', rowSpan: salida8.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral8.png", width: 80, height: 20, alignment: 'center', rowSpan: salida8.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida8.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida9.length > 0)
    {
        for(var i=0; i<salida9.length; i++)
        {
            if(i === 0 && salida9.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, true], image: "images/Likoral9.png", width: 80, height: 20, alignment: 'center', rowSpan: salida9.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, true], image: "images/Likoral9.png", width: 80, height: 20, alignment: 'center', rowSpan: salida9.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida9.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
    }
    

    var accesories3 = []
    pSItems = 0;

    if(salida10.length > 0)
    {
        for(var i=0; i<salida10.length; i++)
        {
            if(i === 0 && salida10.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral10.png", width: 80, height: 20, alignment: 'center', rowSpan: salida10.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false],text: [
                        {text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral10.png", width: 80, height: 20, alignment: 'center', rowSpan: salida10.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida10.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
    }

    if(salida11.length > 0)
    {
        for(var i=0; i<salida11.length; i++)
        {
            if(i === 0 && salida11.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral11.png", width: 30, height: 30, alignment: 'center', rowSpan: salida11.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral11.png", width: 30, height: 30, alignment: 'center', rowSpan: salida11.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida11.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }

    if(salida12.length > 0)
    {
        for(var i=0; i<salida12.length; i++)
        {
            if(i === 0 && salida12.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral12.png", width: 40, height: 30, alignment: 'center', rowSpan: salida12.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral12.png", width: 40, height: 30, alignment: 'center', rowSpan: salida12.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida12.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    if(salida13.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida13.length; i++)
        {
            if(i === 0 && salida13.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral13.png", width: 70, height: 40, alignment: 'center', rowSpan: salida13.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral13.png", width: 70, height: 40, alignment: 'center', rowSpan: salida13.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida13.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida14.length > 0)
    {
        for(var i=0; i<salida14.length; i++)
        {
            if(i === 0 && salida14.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral14.png", width: 80, height: 30, alignment: 'center', rowSpan: salida14.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral14.png", width: 80, height: 30, alignment: 'center', rowSpan: salida14.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida14.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida15.length > 0)
    {
        for(var i=0; i<salida15.length; i++)
        {
            var descripciones = []
            if(salida15[i].Item_Long_Desc.includes(","))
            {
                descripciones = salida15[i].Item_Long_Desc.split(",");
            }
            else{
                descripciones[0] = salida15[i].Item_Long_Desc;
                descripciones[1] = "";
            }

            if(i === 0 && salida15.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: descripciones[0] + "\n", style: 'textotablaboldblack'},
                        {text: descripciones[1], style: 'textotabla'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral15.png", width: 80, height: 20, alignment: 'center', rowSpan: salida15.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: descripciones[0] + "\n", style: 'textotablaboldblack'},
                        {text: descripciones[1], style: 'textotabla'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral15.png", width: 80, height: 20, alignment: 'center', rowSpan: salida15.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida15.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: descripciones[0] + "\n", style: 'textotablaboldblack'},
                        {text: descripciones[1], style: 'textotabla'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: descripciones[0] + "\n", style: 'textotablaboldblack'},
                        {text: descripciones[1], style: 'textotabla'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida16.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida16.length; i++)
        {
            if(i === 0 && salida16.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral16.png", width: 50, height: 55, alignment: 'center', rowSpan: salida16.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral16.png", width: 50, height: 55, alignment: 'center', rowSpan: salida16.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida16.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida17.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida17.length; i++)
        {
            if(i === 0 && salida17.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral18.png", width: 30, height: 30, alignment: 'center', rowSpan: salida17.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral18.png", width: 30, height: 30, alignment: 'center', rowSpan: salida17.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida17.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida18.length > 0)
    {
        for(var i=0; i<salida18.length; i++)
        {
            if(i === 0 && salida18.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral19.png", width: 30, height: 30, alignment: 'center', rowSpan: salida18.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Likoral19.png", width: 30, height: 30, alignment: 'center', rowSpan: salida18.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida18.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    var accesories4 = []
    pSItems = 0;

    if(salida19.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida19.length; i++)
        {
            if(i === 0 && salida19.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral20.png", width: 30, height: 30, alignment: 'center', rowSpan: salida19.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral20.png", width: 30, height: 30, alignment: 'center', rowSpan: salida19.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida19.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida20.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida20.length; i++)
        {
            if(i === 0 && salida20.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral21.png", width: 30, height: 30, alignment: 'center', rowSpan: salida20.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral21.png", width: 30, height: 30, alignment: 'center', rowSpan: salida20.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida20.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida21.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida21.length; i++)
        {
            if(i === 0 && salida21.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral22.png", width: 40, height: 40, alignment: 'center', rowSpan: salida21.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral22.png", width: 40, height: 40, alignment: 'center', rowSpan: salida21.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida21.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida22.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida22.length; i++)
        {
            if(i === 0 && salida22.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida22[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral23.png", width: 40, height: 40, alignment: 'center', rowSpan: salida22.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida22[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral23.png", width: 40, height: 40, alignment: 'center', rowSpan: salida22.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida22.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida22[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida22[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida23.length > 0)
    {
        for(var i=0; i<salida23.length; i++)
        {
            if(i === 0 && salida23.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida23[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral24.png", width: 30, height: 30, alignment: 'center', rowSpan: salida23.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida23[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral24.png", width: 30, height: 30, alignment: 'center', rowSpan: salida23.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida23.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida23[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida23[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida24.length > 0)
    {
        for(var i=0; i<salida24.length; i++)
        {
            if(i === 0 && salida24.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral25.png", width: 40, height: 30, alignment: 'center', rowSpan: salida24.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral25.png", width: 40, height: 30, alignment: 'center', rowSpan: salida24.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida24.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida39.length > 0)
    {
        for(var i=0; i<salida39.length; i++)
        {
            if(i === 0 && salida39.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida39[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral26.png", width: 30, height: 30, alignment: 'center', rowSpan: salida39.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida39[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida39[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral26.png", width: 30, height: 30, alignment: 'center', rowSpan: salida39.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida39.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida39[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida39[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida39[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida39[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida39[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida40.length > 0)
    {
        for(var i=0; i<salida40.length; i++)
        {
            if(i === 0 && salida40.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida40[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral27.png", width: 30, height: 30, alignment: 'center', rowSpan: salida40.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida40[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida40[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral26.png", width: 30, height: 30, alignment: 'center', rowSpan: salida39.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida40.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida40[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida40[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida40[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida40[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida40[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
        }
    }
    

    if(salida25.length > 0)
    {
        for(var i=0; i<salida25.length; i++)
        {
            if(i === 0 && salida25.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida25[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral28.png", width: 30, height: 50, alignment: 'center', rowSpan: salida25.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida25[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral28.png", width: 30, height: 50, alignment: 'center', rowSpan: salida25.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida25.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida25[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida25[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida26.length > 0)
    {
        for(var i=0; i<salida26.length; i++)
        {
            if(i === 0 && salida26.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral29.png", width: 40, height: 40, alignment: 'center', rowSpan: salida26.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral29.png", width: 80, height: 120, alignment: 'center', rowSpan: salida26.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida26.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    

    if(salida27.length > 0)
    {
        for(var i=0; i<salida27.length; i++)
        {
            if(i === 0 && salida27.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral30.png", width: 60, height: 30, alignment: 'center', rowSpan: salida27.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral30.png", width: 60, height: 30, alignment: 'center', rowSpan: salida27.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida27.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    if(salida28.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida28.length; i++)
        {
            if(i === 0 && salida28.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral31.png", width: 80, height: 20, alignment: 'center', rowSpan: salida28.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida28[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: [
                        {text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, true, true, false], image: "images/Likoral31.png", width: 80, height: 20, alignment: 'center', rowSpan: salida28.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida28[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida28.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida28[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida28[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: [
                        {text: salida28[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    ]},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida28[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida28[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida29.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida29.length; i++)
        {
            if(i === 0 && salida29.length === 1)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Likoral32.png", width: 60, height: 40, alignment: 'center', rowSpan: salida29.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida29[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories4[pSItems] =[
                    {border: [true, true, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/Likoral32.png", width: 60, height: 40, alignment: 'center', rowSpan: salida29.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida29[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida29.length-1)
            {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida29[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories4[pSItems] =[
                    {border: [true, false, true, false], text: salida29[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida29[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida29[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories4[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida29[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    /*ESTO VA EN UN CICLO*/
    /*for(var i=0; i<salida30.length; i++)
    {
        if(i === 0 && salida30.length === 1)
        {
            accesories4[pSItems] =[
                {border: [true, true, true, true], text: salida30[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/Likoral30.png", width: 80, height: 40, alignment: 'center', rowSpan: salida30.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories4[pSItems] =[
                {border: [true, true, true, false], text: salida30[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/Likoral30.png", width: 80, height: 40, alignment: 'center', rowSpan: salida30.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida30.length-1)
        {
            accesories4[pSItems] =[
                {border: [true, false, true, true], text: salida30[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories4[pSItems] =[
                {border: [true, false, true, false], text: salida30[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida30[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }*/
    /*TERMINA CICLO*/

    var accesories5 = []
    pSItems = 0;

    if(salida30.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida30.length; i++)
        {
            if(i === 0 && salida30.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida30[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral33.png", width: 50, height: 60, alignment: 'center', rowSpan: salida30.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida30[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida30[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral33.png", width: 50, height: 60, alignment: 'center', rowSpan: salida30.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida30.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida30[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida30[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida30[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida30[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida30[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    

    if(salida31.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida31.length; i++)
        {
            if(i === 0 && salida31.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, true], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida31[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/Likoral34.png", width: 60, height: 40, alignment: 'center', rowSpan: salida31.length+1},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida31[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida31[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral34.png", width: 60, height: 40, alignment: 'center', rowSpan: salida31.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida31.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida31[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida31[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida31[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida31[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida31[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    //ES ESTA
    if(salida32.length > 0)
    {   
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida32.length; i++)
        {
            if(i === 0 && salida32.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral35.png", width: 80, height: 20, alignment: 'center', rowSpan: salida32.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida32[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/Likoral34.png", width: 80, height: 20, alignment: 'center', rowSpan: salida32.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida32.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida32[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida32[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida32[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida32[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida33.length > 0)
    {
         /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida33.length; i++)
        {
            if(i === 0 && salida33.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida33[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral36.png", width: 40, height: 70, alignment: 'center', rowSpan: salida33.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida33[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida33[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral36.png", width: 40, height: 70, alignment: 'center', rowSpan: salida33.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida33.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida33[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida33[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida33[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida33[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida33[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
   

    if(salida34.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida34.length; i++)
        {
            if(i === 0 && salida34.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida34[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral37.png", width: 25, height: 40, alignment: 'center', rowSpan: salida34.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida34[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida34[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral37.png", width: 25, height: 40, alignment: 'center', rowSpan: salida34.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida34.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida34[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida34[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida34[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida34[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida34[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida35.length > 0)
    {
        for(var i=0; i<salida35.length; i++)
        {
            if(i === 0 && salida35.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida35[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral38.png", width: 25, height: 40, alignment: 'center', rowSpan: salida35.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida35[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida35[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral38.png", width: 25, height: 40, alignment: 'center', rowSpan: salida35.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida35.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida35[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida35[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida35[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida35[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida35[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida36.length > 0)
    {
        for(var i=0; i<salida36.length; i++)
        {
            if(i === 0 && salida36.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida36[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/Likoral39.png", width: 25, height: 40, alignment: 'center', rowSpan: salida36.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida36[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida36[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral39.png", width: 25, height: 40, alignment: 'center', rowSpan: salida36.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida36.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida36[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida36[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida36[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida36[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida36[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
    
    if(salida37.length > 0)
    {
        for(var i=0; i<salida37.length; i++)
        {
            if(i === 0 && salida37.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida37[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral40.png", width: 70, height: 25, alignment: 'center', rowSpan: salida37.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
    
                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida37[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida37[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, false], image: "images/Likoral40.png", width: 70, height: 25, alignment: 'center', rowSpan: salida37.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida37.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida37[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
    
                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida37[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida37[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida37[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida37[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
    }
   
    if(salida38.length > 0)
    {
        for(var i=0; i<salida38.length; i++)
        {
            if(i === 0 && salida38.length === 1)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida38[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/Likoral41.png", width: 80, height: 25, alignment: 'center', rowSpan: salida38.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida38[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories5[pSItems] =[
                    {border: [true, true, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida38[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/Likoral40.png", width: 80, height: 25, alignment: 'center', rowSpan: salida38.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida38.length-1)
            {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida38[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories5[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida38[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories5[pSItems] =[
                    {border: [true, false, true, false], text: salida38[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida38[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida38[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    if(salida41.length > 0)
    {
        
        accesories5[pSItems] =[
            {border: [true, true, true, false], text: salida41[0].Part, style: 'textotabla'},
            {border: [true, true, true, false], text: salida41[0].Item_Long_Desc, style: 'textotabla'},
            {border: [true, true, true, true], image: "images/LiftingAccesories1.png", width: 80, height: 28, alignment: 'center', rowSpan: 2},
            {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida41[0].Price), style: 'textotabla', alignment: 'center'},
        ]
    
        pSItems++

        accesories5[pSItems] =[
            {border: [true, false, true, true], text: ""},
            {border: [true, false, true, true], text: salida41[0].Specifications, style: 'textotabla'},
            {border: [true, false, true, true], text: ""},
            {border: [true, false, true, true], text: ""},
        ]
    
        pSItems++
    }

    var table1 = [];
    if(salida1.length > 0 || salida2.length > 0 || salida3.length > 0 || salida4.length > 0)
    {
        table1 = [
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
            }
        ]
    }

    var table2 = [];
    if(salida5.length > 0 || salida6.length > 0 || salida7.length > 0 || salida8.length > 0 || salida9.length > 0)
    {
        table2 = [
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
            }
        ]
    }

    var table3 = [];
    if(salida10.length > 0 || salida11.length > 0 || salida12.length > 0 || salida13.length > 0 || salida14.length > 0
        || salida15.length > 0 || salida16.length > 0 || salida17.length > 0 || salida18.length > 0)
    {
        table3 = [
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
            }
        ]
    }

    var table4 = []
    if(salida19.length > 0 || salida20.length > 0 || salida21.length > 0 || salida22.length > 0 || salida23.length > 0
        || salida24.length > 0 || salida25.length > 0 || salida26.length > 0 || salida27.length > 0 || salida28.length > 0
        || salida29.length > 0)
    {
        table4 = [
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
            }
        ]
    }

    var table5 = [];
    if(salida30.length > 0 || salida31.length > 0 || salida32.length > 0 || salida33.length > 0 || salida34.length > 0
        || salida35.length > 0 || salida36.length > 0 || salida37.length > 0 || salida38.length > 0 || salida39.length > 0
        || salida40.length > 0)
    {
        table5 = [
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
            }
        ]
    }
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var overheadLifts = [
        "\n",
        "\n",
        "\n",
        { text: 'OVERHEAD LIFTS', style: 'header' },
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: [
                            {text: 'LIKORALL', style: 'textotablacolorlarge'},
                            {text: 'Likorall', tocItem: "likoral", style: {fontSize: 0}},
                        ],  fillColor: '#03857d',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table1,
        "\n",
        { text: 'ACCESORIES', style: 'subheader' },
        {text: 'Accesories for Likorall', tocItem: "accesoriesforlikoral", style: {fontSize: 0}},
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table2,
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table3,
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table4,
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: [80, "*", 60],
                body: [
                    [
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                        {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        table5,
        {text: '', pageBreak: 'after'  },
    ]

    return overheadLifts;
}

module.exports = {
    getOverheadLifts : getOverheadLifts,
}