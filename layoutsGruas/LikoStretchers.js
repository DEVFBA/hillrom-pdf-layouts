const dbLiko = require('../controllers/likostretchers')

async function getLikoStretchers(pdfZone)
{
    const res = await dbLiko.getLiko(pdfZone);
    const salida1  = res[0]
    const salida2 = res[1]
    const salida3 = res[2]
    const salida4 = res[3]
    const salida5 = res[4]
    const salida6 = res[5]
    const salida7 = res[6]
    const salida8 = res[7]

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
                    {border: [true, true, true, true], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers1.png", width: 80, height: 30, alignment: 'center', rowSpan: salida1.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida1[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers1.png", width: 80, height: 30, alignment: 'center', rowSpan: salida1.length},
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
                    {border: [true, true, true, true], image: "images/LikoStretchers2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida2.length},
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
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida2[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida2.length*2},
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

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida2[i].Specifications, style: 'textotabla'},
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
        for(var i=0; i<salida3.length; i++)
        {
            if(i === 0 && salida3.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, true], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida3.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida3[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, false], image: "images/LikoStretchers3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida3.length+1},
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
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida3[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
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
        for(var i=0; i<salida4.length; i++)
        {
            if(i === 0 && salida4.length === 1)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers4.png", width: 80, height: 30, alignment: 'center', rowSpan: salida4.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida4[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories[pSItems] =[
                    {border: [true, true, true, false], text: salida4[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers4.png", width: 80, height: 30, alignment: 'center', rowSpan: salida4.length+1},
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
    }
    
    var accesories2 = [];
    var pSItems = 0;

    if(salida5.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida5.length; i++)
        {
            if(i === 0 && salida5.length === 1)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers6.png", width: 80, height: 50, alignment: 'center', rowSpan: salida5.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida5[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers6.png", width: 80, height: 50, alignment: 'center', rowSpan: salida5.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida5.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida5[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotabla', alignment: 'center'},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers7.png", width: 80, height: 40, alignment: 'center', rowSpan: salida6.length+1},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++

                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: salida6[i].Specifications, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: ""},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers7.png", width: 80, height: 40, alignment: 'center', rowSpan: salida6.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida6.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida6[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablaboldblack'},
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
                    {border: [true, true, true, true], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers8.png", width: 80, height: 20, alignment: 'center', rowSpan: salida7.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers8.png", width: 80, height: 20, alignment: 'center', rowSpan: salida7.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida7.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida7[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotabla', alignment: 'center'},
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
                accesories2[pSItems] =[
                    {border: [true, true, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers9.png", width: 80, height: 20, alignment: 'center', rowSpan: salida8.length+1},
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
                    {border: [true, true, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, true, true, true], image: "images/LikoStretchers9.png", width: 80, height: 20, alignment: 'center', rowSpan: salida8.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida8.length-1)
            {
                accesories2[pSItems] =[
                    {border: [true, false, true, true], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories2[pSItems] =[
                    {border: [true, false, true, false], text: salida8[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida8[i].Item_Long_Desc, style: 'textotablaboldblack'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida8[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            
        }
        /*TERMINA CICLO*/
    }
    
    var s1 = []
    if(salida1.length>0 || salida2.length > 0 || salida3.length > 0 || salida4.length > 0)
    {
        s1 = [
            "\n",
            {
                table: {
                    widths: [190, "*"],
                    body: [
                        [
                            {text: [
                                {text: 'LIKO OCTOSTRETCH™', style: 'textotablacolorlarge'},
                                {text: "Liko Octostretch™", style: {fontSize: 0}, tocItem: "likooctostretch"}
                            ], fillColor: '#03857d',  alignment: 'center', colSpan: 2},
                            {},
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
                            {border: [true, false, true, false], text: 'PART #', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
                            {border: [true, false, true, false], text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#154898',  alignment: 'center'},
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
        ]
    }

    var s2 = []
    if(salida5.length > 0 || salida6.length > 0 || salida7.length > 0 || salida8.length > 0)
    {
        s2 = [
            {
                table: {
                    widths: [250, "*"],
                    body: [
                        [
                            {text: [
                                {text: 'LIKOSTRETCH MOD 600 IC™', style: 'textotablacolorlarge'},
                                {text: "Likostretch Mod 600 IC™", style: {fontSize: 0}, tocItem: "likostretch"}
                            ], fillColor: '#03857d',  alignment: 'center', colSpan: 2},
                            {}
                        ],
                        [
                            {border: [true, true, false, true], text: [
                                {text: 'Product specification for a complete product:\n', style: 'textotablaboldblack',  alignment: 'left'},
                                {text: '* LikoStretch Mod 600 IC\n', style: 'textotabla',  alignment: 'left'},
                                {text: '(Prod. No. 3156065 or 3156065B)\n', style: 'textotabla',  alignment: 'left'},
                                {text: '* SideRails 600 (Prod. No. 3166506)\n', style: 'textotabla',  alignment: 'left'},
                                {text: '* Straps Mod 600 IC (Prod. No. 3684001)\n', style: 'textotabla',  alignment: 'left'},
                                {text: '* Spatula Mod 600 IC (Prod. No. 3684002).', style: 'textotabla',  alignment: 'left'},
                            ]},
                            {border: [false, true, true, true], image: "images/LikoStretchers5.png", width: 80, height: 60, alignment: 'center'},
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
        ]
    }

    const fecha = new Date();
    fecha.toLocaleDateString()

    var likoStretchers = [
        "\n",
        "\n",
        "\n",
        { text: 'LIKO STRETCHERS', style: 'header' },
        s1,
        s2,
        {text: '', pageBreak: 'after'  },
    ]

    return likoStretchers;
}

module.exports = {
    getLikoStretchers : getLikoStretchers,
}