const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemH140()
{
    const res = await dbRailSystem.getRailSystem()
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

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida11.length; i++)
    {
        if(i === 0 && salida11.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida11[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, false],  text: ""},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida11[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: ""},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida11.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida11[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida11[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida11[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida11[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida11[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    var accesories2 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida12.length; i++)
    {
        if(i === 0 && salida12.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida12[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH140.png", width: 80, height: 25, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida12[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH140.png", width: 80, height: 25, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida12.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida12[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida12[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida12[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida13.length; i++)
    {
        if(i === 0 && salida13.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida13[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, false],  text: ""},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida13[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: ""},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida13.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida13[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida13[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida13[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
     /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida14.length; i++)
     {
         if(i === 0 && salida14.length === 1)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, true], text: salida14[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida14[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1402.png", width: 80, height: 25, alignment: 'center', rowSpan: salida14.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, false], text: salida14[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1402.png", width: 80, height: 25, alignment: 'center', rowSpan: salida14.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida14.length-1)
         {
             accesories2[pSItems] =[
                 {border: [true, false, true, true], text: salida14[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida14[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories2[pSItems] =[
                 {border: [true, false, true, false], text: salida14[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida15.length; i++)
     {
         if(i === 0 && salida15.length === 1)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, true], text: salida15[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida15[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1403.png", width: 80, height: 25, alignment: 'center', rowSpan: salida15.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, false], text: salida15[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1403.png", width: 80, height: 25, alignment: 'center', rowSpan: salida15.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida15.length-1)
         {
             accesories2[pSItems] =[
                 {border: [true, false, true, true], text: salida15[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida15[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories2[pSItems] =[
                 {border: [true, false, true, false], text: salida15[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

    var accesories3 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida16.length; i++)
     {
         if(i === 0 && salida16.length === 1)
         {
             accesories3[pSItems] =[
                 {border: [true, true, true, true], text: salida16[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida16[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1404.png", width: 20, height: 15, alignment: 'center', rowSpan: salida16.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
            accesories3[pSItems] =[
                 {border: [true, true, true, false], text: salida16[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1404.png", width: 20, height: 15, alignment: 'center', rowSpan: salida16.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida16.length-1)
         {
            accesories3[pSItems] =[
                 {border: [true, false, true, true], text: salida16[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida16[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
            accesories3[pSItems] =[
                 {border: [true, false, true, false], text: salida16[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
     /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida17.length; i++)
     {
         if(i === 0 && salida17.length === 1)
         {
             accesories3[pSItems] =[
                 {border: [true, true, true, true], text: salida17[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida17[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1405.png", width: 20, height: 15, alignment: 'center', rowSpan: salida17.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
            accesories3[pSItems] =[
                 {border: [true, true, true, false], text: salida17[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1405.png", width: 20, height: 15, alignment: 'center', rowSpan: salida17.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida17.length-1)
         {
            accesories3[pSItems] =[
                 {border: [true, false, true, true], text: salida17[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida17[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
            accesories3[pSItems] =[
                 {border: [true, false, true, false], text: salida17[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
     /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida18.length; i++)
     {
         if(i === 0 && salida18.length === 1)
         {
             accesories3[pSItems] =[
                 {border: [true, true, true, true], text: salida18[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida18[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1406.png", width: 15, height: 60, alignment: 'center', rowSpan: salida18.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
            accesories3[pSItems] =[
                 {border: [true, true, true, false], text: salida18[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1406.png", width: 15, height: 60, alignment: 'center', rowSpan: salida18.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida18.length-1)
         {
            accesories3[pSItems] =[
                 {border: [true, false, true, true], text: salida18[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida18[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
            accesories3[pSItems] =[
                 {border: [true, false, true, false], text: salida18[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }

    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida19.length; i++)
     {
         if(i === 0 && salida19.length === 1)
         {
             accesories3[pSItems] =[
                 {border: [true, true, true, true], text: salida19[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida19[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1407.png", width: 20, height: 20, alignment: 'center', rowSpan: salida19.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
            accesories3[pSItems] =[
                 {border: [true, true, true, false], text: salida19[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1407.png", width: 20, height: 20, alignment: 'center', rowSpan: salida19.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida19.length-1)
         {
            accesories3[pSItems] =[
                 {border: [true, false, true, true], text: salida19[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida19[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
            accesories3[pSItems] =[
                 {border: [true, false, true, false], text: salida19[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida19[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/   

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida20.length; i++)
     {
         if(i === 0 && salida20.length === 1)
         {
             accesories3[pSItems] =[
                 {border: [true, true, true, true], text: salida20[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida20[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1408.png", width: 50, height: 20, alignment: 'center', rowSpan: salida20.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
            accesories3[pSItems] =[
                 {border: [true, true, true, false], text: salida20[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH1408.png", width: 50, height: 20, alignment: 'center', rowSpan: salida20.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida20.length-1)
         {
            accesories3[pSItems] =[
                 {border: [true, false, true, true], text: salida20[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida20[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
            accesories3[pSItems] =[
                 {border: [true, false, true, false], text: salida20[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida20[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
     /*TERMINA CICLO*/   

    const fecha = new Date();
    fecha.toLocaleDateString()

    var railSystemH140 = [
        {image: "images/BaxterEncabezado.png", width: 537, height: 30, alignment: "center"},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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
                        {border: [true, false, true, false], text: 'PART #', style: 'textotablacolorcatoni', fillColor: '#546ce4',  alignment: 'center'},
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