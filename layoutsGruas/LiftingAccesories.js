const dbLifting = require('../controllers/liftingaccesories')

async function getLiftingAccesories(pdfZone)
{
    const res = await dbLifting.getLifting(pdfZone)
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

    var accesories = [];
    var pSItems = 0;

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
                    {border: [true, true, true, true], image: "images/LiftingAccesories1.png", width: 70, height: 30, alignment: 'center', rowSpan: salida1.length*3},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories1.png", width: 70, height: 30, alignment: 'center', rowSpan: salida1.length*3},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida1[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories2.png", width: 70, height: 30, alignment: 'center', rowSpan: salida2.length*3},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories2.png", width: 70, height: 30, alignment: 'center', rowSpan: salida2.length*3},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories3.png", width: 70, height: 30, alignment: 'center', rowSpan: salida3.length*2},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories3.png", width: 70, height: 30, alignment: 'center', rowSpan: salida3.length*2},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida3[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories4.png", width: 70, height: 30, alignment: 'center', rowSpan: salida4.length*2},
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
                    {border: [true, true, true, true], image: "images/LiftingAccesories4.png", width: 70, height: 30, alignment: 'center', rowSpan: salida4.length*2},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida5.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida5.length; i++)
        {
            if(i === 0 && salida5.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories5.png", width: 70, height: 30, alignment: 'center', rowSpan: salida5.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories5.png", width: 70, height: 30, alignment: 'center', rowSpan: salida5.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida5.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida6.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida6.length; i++)
        {
            if(i === 0 && salida6.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories6.png", width: 70, height: 30, alignment: 'center', rowSpan: salida6.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories6.png", width: 70, height: 30, alignment: 'center', rowSpan: salida6.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida6.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories7.png", width: 70, height: 30, alignment: 'center', rowSpan: salida7.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories7.png", width: 70, height: 30, alignment: 'center', rowSpan: salida7.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida7.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida7[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida8.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida8.length; i++)
        {
            if(i === 0 && salida8.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories8.png", width: 70, height: 30, alignment: 'center', rowSpan: salida8.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories8.png", width: 70, height: 30, alignment: 'center', rowSpan: salida8.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida8.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida8[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida9.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida9.length; i++)
        {
            if(i === 0 && salida9.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories9.png", width: 70, height: 30, alignment: 'center', rowSpan: salida9.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories9.png", width: 70, height: 30, alignment: 'center', rowSpan: salida9.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida9.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida9[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida9[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida9[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida9[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida10.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida10.length; i++)
        {
            if(i === 0 && salida10.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories10.png", width: 70, height: 30, alignment: 'center', rowSpan: salida10.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories10.png", width: 70, height: 30, alignment: 'center', rowSpan: salida10.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida10.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida10[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida10[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida10[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida10[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida11.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida11.length; i++)
        {
            if(i === 0 && salida11.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories11.png", width: 70, height: 30, alignment: 'center', rowSpan: salida11.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories11.png", width: 70, height: 30, alignment: 'center', rowSpan: salida11.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida11.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida11[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida11[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida12.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida12.length; i++)
        {
            if(i === 0 && salida12.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories12.png", width: 70, height: 30, alignment: 'center', rowSpan: salida12.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories12.png", width: 70, height: 30, alignment: 'center', rowSpan: salida12.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida12.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida12[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
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
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories13.png", width: 70, height: 30, alignment: 'center', rowSpan: salida13.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories13.png", width: 70, height: 30, alignment: 'center', rowSpan: salida13.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida13.length-1)
            {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories[pSItems] =[
                    {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida13[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    var accesories2 = [];
    var pSItems = 0

    if(salida14.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida14.length; i++)
        {
            if(i === 0 && salida14.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories14.png", width: 50, height: 30, alignment: 'center', rowSpan: salida14.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories14.png", width: 50, height: 30, alignment: 'center', rowSpan: salida14.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida14.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida14[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida15.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida15.length; i++)
        {
            if(i === 0 && salida15.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories15.png", width: 70, height: 30, alignment: 'center', rowSpan: salida15.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories15.png", width: 70, height: 30, alignment: 'center', rowSpan: salida15.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida15.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida15[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories16.png", width: 70, height: 30, alignment: 'center', rowSpan: salida16.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories16.png", width: 70, height: 30, alignment: 'center', rowSpan: salida16.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida16.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida16[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories17.png", width: 50, height: 30, alignment: 'center', rowSpan: salida17.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories17.png", width: 50, height: 30, alignment: 'center', rowSpan: salida17.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida17.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida17[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida18.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida18.length; i++)
        {
            if(i === 0 && salida18.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories18.png", width: 50, height: 30, alignment: 'center', rowSpan: salida18.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories18.png", width: 50, height: 30, alignment: 'center', rowSpan: salida18.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida18.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida18[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida19.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida19.length; i++)
        {
            if(i === 0 && salida19.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories21.png", width: 20, height: 30, alignment: 'center', rowSpan: salida19.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories21.png", width: 20, height: 30, alignment: 'center', rowSpan: salida19.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida19.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida19[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories22.png", width: 50, height: 30, alignment: 'center', rowSpan: salida20.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories22.png", width: 50, height: 30, alignment: 'center', rowSpan: salida20.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida20.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida20[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida20[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida20[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories23.png", width: 40, height: 30, alignment: 'center', rowSpan: salida21.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories23.png", width: 50, height: 30, alignment: 'center', rowSpan: salida21.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida21.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida21[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida21[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida21[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida21[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories24.png", width: 50, height: 30, alignment: 'center', rowSpan: salida22.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories24.png", width: 50, height: 30, alignment: 'center', rowSpan: salida22.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida22.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida22[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida22[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida22[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida22[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida23.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida23.length; i++)
        {
            if(i === 0 && salida23.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories25.png", width: 50, height: 30, alignment: 'center', rowSpan: salida23.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories25.png", width: 50, height: 30, alignment: 'center', rowSpan: salida23.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida23.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida23[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida23[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida23[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida23[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida24.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida24.length; i++)
        {
            if(i === 0 && salida24.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories26.png", width: 30, height: 30, alignment: 'center', rowSpan: salida24.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories26.png", width: 30, height: 30, alignment: 'center', rowSpan: salida24.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida24.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida24[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida24[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida24[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida24[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida25.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida25.length; i++)
        {
            if(i === 0 && salida25.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories27.png", width: 50, height: 30, alignment: 'center', rowSpan: salida25.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories27.png", width: 50, height: 30, alignment: 'center', rowSpan: salida25.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida25.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida25[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida25[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida25[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida25[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    if(salida27.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida27.length; i++)
        {
            if(i === 0 && salida27.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories28.png", width: 30, height: 30, alignment: 'center', rowSpan: salida27.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories28.png", width: 30, height: 30, alignment: 'center', rowSpan: salida27.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida27.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida27[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida27[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida27[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida27[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    if(salida26.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida26.length; i++)
        {
            if(i === 0 && salida26.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories29.png", width: 30, height: 30, alignment: 'center', rowSpan: salida26.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LiftingAccesories29.png", width: 30, height: 30, alignment: 'center', rowSpan: salida26.length*2},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else if(i === salida26.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida26[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida26[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida26[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: salida26[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: ""},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }

    const fecha = new Date();
    fecha.toLocaleDateString();

    var table1 = [];

    if(salida1.length > 0 || salida2.length > 0 || salida3.length > 0 || salida4.length > 0 || salida5.length > 0
        || salida6.length > 0 || salida7.length > 0 || salida8.length > 0 || salida9.length > 0 || salida10.length > 0
        || salida11.length > 0 || salida12.length > 0 || salida13.length > 0)
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
    if(salida14.length > 0 || salida15.length > 0 || salida16.length > 0 || salida17.length > 0 || salida18.length > 0
        || salida19.length > 0 || salida20.length > 0 || salida21.length > 0 || salida22.length > 0 || salida23.length > 0
        || salida24.length > 0 || salida25.length > 0 || salida26.length > 0 || salida27.length > 0)
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

    var liftingAccesories = [
        "\n",
        "\n",
        "\n",
        { text: 'LIFTING ACCESSORIES', style: 'header' },
        "\n",
        {
            table: {
                widths: [190, "*", 130],
                body: [
                    [
                        {text: 'Lifting Accessories', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', colSpan: 3, tocItem: "liftingaccesories"},
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
        table1,
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
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
        table2,
        {text: '', pageBreak: 'after'  },
    ]

    return liftingAccesories;
}

module.exports = {
    getLiftingAccesories : getLiftingAccesories,
}