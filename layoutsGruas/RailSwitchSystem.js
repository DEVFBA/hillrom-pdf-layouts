const dbRailSystem = require('../controllers/railsystem')

async function getRailSwitchSystem()
{
    const res = await dbRailSystem.getRailSystem()
    const salida52 = res[51]
    const salida53 = res[52]
    const salida54 = res[53]
    const salida55 = res[54]
    const salida56 = res[55]
    const salida57 = res[56]
    const salida58 = res[57]
    const salida59 = res[58]
    const salida60 = res[59]
    const salida61 = res[60]
    const salida62 = res[61]
    const salida63 = res[62]
    const salida64 = res[63]
    const salida65 = res[64]
    const salida66 = res[65]
    const salida67 = res[66]

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida52.length; i++)
    {
        if(i === 0 && salida52.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida52[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida52[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida52.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida52[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida52[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida52[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch1.png", width: 60, height: 40, alignment: 'center', rowSpan: salida52.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida52[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida52.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida52[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida52[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida52[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida52[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida52[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida52[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida53.length; i++)
    {
        if(i === 0 && salida53.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida53[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida53[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida53.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida53[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida53[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida53[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch2.png", width: 60, height: 40, alignment: 'center', rowSpan: salida53.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida53[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida53.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida53[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida53[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida53[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida53[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida53[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida53[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida54.length; i++)
    {
        if(i === 0 && salida54.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida54[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida54[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida54.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida54[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida54[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida54[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch3.png", width: 60, height: 40, alignment: 'center', rowSpan: salida54.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida54[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida54.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida54[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida54[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida54[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida54[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida54[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida54[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida55.length; i++)
    {
        if(i === 0 && salida55.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida55[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida55[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch4.png", width: 40, height: 40, alignment: 'center', rowSpan: salida55.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida55[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida55[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida55[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch4.png", width: 40, height: 40, alignment: 'center', rowSpan: salida55.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida55[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida55.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida55[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida55[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida55[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida55[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida55[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida55[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

     /*ESTO VA EN UN CICLO*/
     for(var i=0; i<salida56.length; i++)
     {
         if(i === 0 && salida56.length === 1)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, true], text: salida56[i].Part, style: 'textotabla'},
                 {border: [true, true, true, true], text: salida56[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/RailSwitch5.png", width: 40, height: 20, alignment: 'center', rowSpan: salida56.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida56[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida56[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida56[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/RailSwitch5.png", width: 40, height: 20, alignment: 'center', rowSpan: salida56.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida56[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida56.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: salida56[i].Part, style: 'textotabla'},
                 {border: [true, false, true, true], text: salida56[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida56[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida56[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida56[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida56[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida57.length; i++)
    {
         if(i === 0 && salida57.length === 1)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, true], text: salida57[i].Part, style: 'textotabla'},
                 {border: [true, true, true, true], text: salida57[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/RailSwitch6.png", width: 60, height: 40, alignment: 'center', rowSpan: salida57.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida57[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida57[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida57[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, true, true, true], image: "images/RailSwitch6.png", width: 60, height: 40, alignment: 'center', rowSpan: salida57.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida57[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida57.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: salida57[i].Part, style: 'textotabla'},
                 {border: [true, false, true, true], text: salida57[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida57[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida57[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida57[i].Item_Long_Desc, style: 'textotablaboldblack'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida57[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         
    }

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida58.length; i++)
    {
        if(i === 0 && salida58.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida58[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida58[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch7.png", width: 60, height: 30, alignment: 'center', rowSpan: salida58.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida58[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida58[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida58[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch7.png", width: 60, height: 30, alignment: 'center', rowSpan: salida58.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida58[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida58.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida58[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida58[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida58[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida58[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida58[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida58[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/
    
    var accesories2 = []
    pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida59.length; i++)
    {
        if(i === 0 && salida59.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida59[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida59[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida59.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida59[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida59[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida59[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch8.png", width: 80, height: 30, alignment: 'center', rowSpan: salida59.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida59[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida59.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida59[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida59[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida59[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida59[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida59[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida59[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida60.length; i++)
    {
        if(i === 0 && salida60.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida60[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida60[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch9.png", width: 80, height: 30, alignment: 'center', rowSpan: salida60.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida60[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida60[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida60[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch9.png", width: 80, height: 30, alignment: 'center', rowSpan: salida60.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida60[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida60.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida60[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida60[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida60[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida60[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida60[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida60[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida61.length; i++)
    {
        if(i === 0 && salida61.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida61[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida61[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch10.png", width: 80, height: 30, alignment: 'center', rowSpan: salida61.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida61[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida61[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida61[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch10.png", width: 80, height: 30, alignment: 'center', rowSpan: salida61.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida61[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida61.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida61[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida61[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida61[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida61[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida61[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida61[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida62.length; i++)
    {
        if(i === 0 && salida62.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida62[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida62[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch11.png", width: 80, height: 30, alignment: 'center', rowSpan: salida62.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida62[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida62[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida62[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch11.png", width: 80, height: 30, alignment: 'center', rowSpan: salida62.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida62[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida62.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida62[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida62[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida62[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida62[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida62[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida62[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    var accesories3 = []
    pSItems = 0
    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida63.length; i++)
    {
        if(i === 0 && salida63.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida63[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida63[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch12.png", width: 60, height: 40, alignment: 'center', rowSpan: salida63.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida63[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida63[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida63[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch12.png", width: 60, height: 40, alignment: 'center', rowSpan: salida63.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida63[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida63.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida63[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida63[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida63[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida63[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida63[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida63[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida64.length; i++)
    {
        if(i === 0 && salida64.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida64[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida64[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch13.png", width: 60, height: 40, alignment: 'center', rowSpan: salida64.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida64[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida64[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida64[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch13.png", width: 60, height: 40, alignment: 'center', rowSpan: salida64.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida64[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida64.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida64[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida64[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida64[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida64[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida64[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida64[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida65.length; i++)
    {
        if(i === 0 && salida65.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida65[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida65[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch14.png", width: 60, height: 40, alignment: 'center', rowSpan: salida65.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida65[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida65[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida65[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch14.png", width: 60, height: 40, alignment: 'center', rowSpan: salida65.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida65[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida65.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida65[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida65[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida65[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida65[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida65[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida65[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida66.length; i++)
    {
        if(i === 0 && salida66.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida66[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida66[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch15.png", width: 60, height: 40, alignment: 'center', rowSpan: salida66.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida66[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida66[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida66[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch15.png", width: 60, height: 40, alignment: 'center', rowSpan: salida66.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida66[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida66.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida66[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida66[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida66[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida66[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida66[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida66[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida67.length; i++)
    {
        if(i === 0 && salida67.length === 1)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, true], text: salida67[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida67[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch16.png", width: 60, height: 30, alignment: 'center', rowSpan: salida67.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida67[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories3[pSItems] =[
                {border: [true, true, true, false], text: salida67[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida67[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, true, true, true], image: "images/RailSwitch16.png", width: 60, height: 30, alignment: 'center', rowSpan: salida67.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida67[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida67.length-1)
        {
            accesories3[pSItems] =[
                {border: [true, false, true, true], text: salida67[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida67[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida67[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories3[pSItems] =[
                {border: [true, false, true, false], text: salida67[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida67[i].Item_Long_Desc, style: 'textotablaboldblack'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida67[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
    }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var railSwitchSystem = [
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Rail Switch System', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', tocItem: "railswitchsystem"},
                    ],
                    [
                        {text: 'Traverse Switch (Prod. No. 3124604) and Side Rail Switch (Prod. No. 3124633 or 3124634) are operated via hand control and control box or via Likorall with MultiStation. NOTE! Products described below fit only Rail System H70.', style: 'textotabla', fillColor: '#dbdbdb', alignment: "center"},
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

        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: 'Traverse Rail Carrier - Likorall, Multirall', style: 'textotablaboldlarge', fillColor: '#dbdbdb', alignment: "left", tocItem: "traverserailcarrier"},
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
                widths: ["*"],
                body: [
                    [
                        {text: 'Traverse Carrier Multi - Likorall', style: 'textotablaboldlarge', fillColor: '#dbdbdb', alignment: "left", tocItem: "traversecarriermulti"},
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

    return railSwitchSystem;
}

module.exports = {
    getRailSwitchSystem : getRailSwitchSystem,
}