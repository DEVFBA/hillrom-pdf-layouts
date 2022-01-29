const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemH70()
{
    const res = await dbRailSystem.getRailSystem()
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

    var accesories = []
    var pSItems = 0

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida1.length; i++)
    {
        if(i === 0 && salida1.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida1[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH701.png", width: 70, height: 25, alignment: 'center', rowSpan: salida1.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida1[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH701.png", width: 70, height: 25, alignment: 'center', rowSpan: salida1.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida1.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida1[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida1[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida1[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida1[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida1[i].Price), style: 'textotablacatoni', alignment: 'center'},
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
                {border: [true, true, true, true], text: salida2[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: ""},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida2[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida2.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida2[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida2[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida2[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida2[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida2[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida3.length; i++)
    {
        if(i === 0 && salida3.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida3[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH702.png", width: 80, height: 35, alignment: 'center', rowSpan: salida3.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida3[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH702.png", width: 80, height: 35, alignment: 'center', rowSpan: salida3.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida3.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida3[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida3[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida3[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida3[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida3[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida4.length; i++)
    {
        if(i === 0 && salida4.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida4[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH703.png", width: 80, height: 35, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida4[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH703.png", width: 80, height: 35, alignment: 'center', rowSpan: salida4.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida4.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida4[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida4[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida4[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida4[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida4[i].Price), style: 'textotablacatoni', alignment: 'center'},
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
                 {border: [true, true, true, true], text: salida5[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH704.png", width: 80, height: 20, alignment: 'center', rowSpan: salida5.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida5[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH704.png", width: 80, height: 20, alignment: 'center', rowSpan: salida5.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida5.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: salida5[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida5[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida5[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida5[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida5[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida6.length; i++)
     {
         if(i === 0 && salida6.length === 1)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, true], text: salida6[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH705.png", width: 40, height: 25, alignment: 'center', rowSpan: salida6.length},
                 {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === 0)
         {
             accesories[pSItems] =[
                 {border: [true, true, true, false], text: salida6[i].Part, style: 'textotablacatoni'},
                 {border: [true, true, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, true, true, true], image: "images/RailSystemH705.png", width: 40, height: 25, alignment: 'center', rowSpan: salida6.length},
                 {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else if(i === salida6.length-1)
         {
             accesories[pSItems] =[
                 {border: [true, false, true, true], text: salida6[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: salida6[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, true], text: ""},
                 {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         else {
             accesories[pSItems] =[
                 {border: [true, false, true, false], text: salida6[i].Part, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: salida6[i].Item_Long_Desc, style: 'textotablacatoni'},
                 {border: [true, false, true, false], text: ""},
                 {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida6[i].Price), style: 'textotablacatoni', alignment: 'center'},
             ]
         
             pSItems++
         }
         
     }
    /*TERMINA CICLO*/

    /*ESTO VA EN UN CICLO*/
    for(var i=0; i<salida7.length; i++)
    {
        if(i === 0 && salida7.length === 1)
        {
            accesories[pSItems] =[
                {border: [true, true, true, true], text: salida7[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH706.png", width: 40, height: 25, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === 0)
        {
            accesories[pSItems] =[
                {border: [true, true, true, false], text: salida7[i].Part, style: 'textotablacatoni'},
                {border: [true, true, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, true, true, true], image: "images/RailSystemH706.png", width: 40, height: 25, alignment: 'center', rowSpan: salida7.length},
                {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else if(i === salida7.length-1)
        {
            accesories[pSItems] =[
                {border: [true, false, true, true], text: salida7[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: salida7[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, true], text: ""},
                {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        else {
            accesories[pSItems] =[
                {border: [true, false, true, false], text: salida7[i].Part, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: salida7[i].Item_Long_Desc, style: 'textotablacatoni'},
                {border: [true, false, true, false], text: ""},
                {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida7[i].Price), style: 'textotablacatoni', alignment: 'center'},
            ]
        
            pSItems++
        }
        
    }
    /*TERMINA CICLO*/
    
    const fecha = new Date();
    fecha.toLocaleDateString()

    var railSystemH70 = [
        "\n",
        { text: 'RAIL SYSTEM', style: 'header' },
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: [
                            {text: 'Rail System H70', style: 'textotablacolorlarge', tocItem: "railsystemh70"}
                        ], fillColor: '#5bbccc',  alignment: 'center'},
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