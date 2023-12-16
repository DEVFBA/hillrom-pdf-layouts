const dbRailSystem = require('../controllers/railsystem')

async function getRailSystemEndCovers(pdfZone)
{
    const res = await dbRailSystem.getRailSystem(pdfZone)
    
    const salida16 = res[15]
    const salida17 = res[16]
    const salida18 = res[17]
    const salida19 = res[18]
    const salida20 = res[19]

    var accesories3 = []
    pSItems = 0;

    if(salida16.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        for(var i=0; i<salida16.length; i++)
        {
            if(i === 0 && salida16.length === 1)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida16[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1404.png", width: 20, height: 15, alignment: 'center', rowSpan: salida16.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
            accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida16[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1404.png", width: 20, height: 15, alignment: 'center', rowSpan: salida16.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida16.length-1)
            {
            accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida16[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida16[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
            accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida16[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida16[i].Item_Long_Desc, style: 'textotabla'},
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
                    {border: [true, true, true, true], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida17[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1405.png", width: 20, height: 15, alignment: 'center', rowSpan: salida17.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida17[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1405.png", width: 20, height: 15, alignment: 'center', rowSpan: salida17.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida17.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida17[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida17[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida17[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida17[i].Price), style: 'textotabla', alignment: 'center'},
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
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida18[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1406.png", width: 15, height: 60, alignment: 'center', rowSpan: salida18.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
            accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida18[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1406.png", width: 15, height: 60, alignment: 'center', rowSpan: salida18.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida18.length-1)
            {
            accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida18[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
            accesories3[pSItems] =[
                    {border: [true, false, true, false], text: salida18[i].Part, style: 'textotabla'},
                    {border: [true, false, true, false], text: salida18[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, false], text: ""},
                    {border: [true, false, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida18[i].Price), style: 'textotabla', alignment: 'center'},
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
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1407.png", width: 20, height: 20, alignment: 'center', rowSpan: salida19.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
            accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1407.png", width: 20, height: 20, alignment: 'center', rowSpan: salida19.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida19.length-1)
            {
            accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida19[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida19[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida19[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
            accesories3[pSItems] =[
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
                accesories3[pSItems] =[
                    {border: [true, true, true, true], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, true], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1408.png", width: 50, height: 20, alignment: 'center', rowSpan: salida20.length},
                    {border: [true, true, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === 0)
            {
                accesories3[pSItems] =[
                    {border: [true, true, true, false], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, true, true, false], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, true, true, true], image: "images/RailSystemH1408.png", width: 50, height: 20, alignment: 'center', rowSpan: salida20.length},
                    {border: [true, true, true, false], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else if(i === salida20.length-1)
            {
                accesories3[pSItems] =[
                    {border: [true, false, true, true], text: salida20[i].Part, style: 'textotabla'},
                    {border: [true, false, true, true], text: salida20[i].Item_Long_Desc, style: 'textotabla'},
                    {border: [true, false, true, true], text: ""},
                    {border: [true, false, true, true], text: "$" + Intl.NumberFormat("en-IN").format(salida20[i].Price), style: 'textotabla', alignment: 'center'},
                ]
            
                pSItems++
            }
            else {
                accesories3[pSItems] =[
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

    var table1 = []
    if(salida16.length > 0 || salida17.length > 0 || salida18.length > 0 || salida19.length > 0 || salida20.length > 0)
    {
        table1 = [
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

    const fecha = new Date();
    fecha.toLocaleDateString();

    var railSystemEndCovers = [
        "\n",
        "\n",
        "\n",
        {
            table: {
                widths: ["*"],
                body: [
                    [
                        {text: [
                            {text: 'Rail System - End Covers', style: 'textotablacolorlarge'},
                            {text: 'End Covers', style: {fontSize: 0}, tocItem: "endcovers"}
                        ], fillColor: '#03857d',  alignment: 'center'},
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
        {text: '', pageBreak: 'after'  },
    ]

    return railSystemEndCovers;
}

module.exports = {
    getRailSystemEndCovers : getRailSystemEndCovers,
}