const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemH160(pdfZone)
{
    const res = await dbRailSystem.getRailSystem(pdfZone)
    const salida12 = res[11]
    const salida13  = res[12]
    const salida14 = res[13]
    const salida15 = res[14]

    var accesories2 = []
    pSItems = 0;

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida12.length; i++)
    {
        if(i === 0 && salida12.length === 1)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, true], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida12[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH140.png", width: 80, height: 25, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida12[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, true], image: "images/RailSystemH140.png", width: 80, height: 25, alignment: 'center', rowSpan: salida12.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida12.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida12[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida12[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida12[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida12[i].Price), style: 'textotabla', alignment: 'center'},
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
                {border: [true, true, true, true], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, true, true, true], text: salida13[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, false],  text: ""},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories2[pSItems] =[
                {border: [true, true, true, false], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, true, true, false], text: salida13[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, true, true, false], text: ""},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida13.length-1)
        {
            accesories2[pSItems] =[
                {border: [true, false, true, true], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, false, true, true], text: salida13[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories2[pSItems] =[
                {border: [true, false, true, false], text: salida13[i].Part, style: 'textotabla'},
                {border: [true, false, true, false], text: salida13[i].Item_Long_Desc, style: 'textotabla'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida13[i].Price), style: 'textotabla', alignment: 'center'},
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
                 {border: [true, true, true, true], text: salida14[i].Part, style: 'textotabla'},
                 {border: [true, true, true, true], text: salida14[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, true, true, true], image: "images/RailSystemH1402.png", width: 80, height: 25, alignment: 'center', rowSpan: salida14.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, false], text: salida14[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida14[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, true, true, true], image: "images/RailSystemH1402.png", width: 80, height: 25, alignment: 'center', rowSpan: salida14.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida14.length-1)
         {
             accesories2[pSItems] =[
                 {border: [true, false, true, true], text: salida14[i].Part, style: 'textotabla'},
                 {border: [true, false, true, true], text: salida14[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories2[pSItems] =[
                 {border: [true, false, true, false], text: salida14[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida14[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida14[i].Price), style: 'textotabla', alignment: 'center'},
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
                 {border: [true, true, true, true], text: salida15[i].Part, style: 'textotabla'},
                 {border: [true, true, true, true], text: salida15[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, true, true, true], image: "images/RailSystemH1403.png", width: 80, height: 25, alignment: 'center', rowSpan: salida15.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories2[pSItems] =[
                 {border: [true, true, true, false], text: salida15[i].Part, style: 'textotabla'},
                 {border: [true, true, true, false], text: salida15[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, true, true, true], image: "images/RailSystemH1403.png", width: 80, height: 25, alignment: 'center', rowSpan: salida15.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida15.length-1)
         {
             accesories2[pSItems] =[
                 {border: [true, false, true, true], text: salida15[i].Part, style: 'textotabla'},
                 {border: [true, false, true, true], text: salida15[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories2[pSItems] =[
                 {border: [true, false, true, false], text: salida15[i].Part, style: 'textotabla'},
                 {border: [true, false, true, false], text: salida15[i].Item_Long_Desc, style: 'textotabla'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida15[i].Price), style: 'textotabla', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var rS160 = {}

    if(salida12.length > 0)
    {
        rS160 = [
            "\n",
            "\n",
            "\n",
            {
                table: {
                    widths: ["*"],
                    body: [
                        [
                            {text: 'Rail System H160-180', style: 'textotablacolorlarge', fillColor: '#5bbccc',  alignment: 'center', tocItem: "railsystemh160"},
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
            {text: '', pageBreak: 'after'  }
        ]
    }

    var railSystemH160 = [
        rS160
    ]

    return railSystemH160;
}

module.exports = {
    getRailSystemH160 : getRailSystemH160,
}