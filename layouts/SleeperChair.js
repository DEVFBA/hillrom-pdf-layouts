const dbSleeperChair= require('../controllers/sleeperchair')

async function getSleeperChair()
{
    const res = await dbSleeperChair.getDataSleeperChair()
    const mainTableData = res[0]
    const optionsData = res[1]

    var mainTable = []
    var pSItems = 0;

    mainTable[pSItems] = [
        {border: [false, false, false, false], text: ''},
        {text: 'SLEEPERCHAIR', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center', colSpan: 2},
        {},
    ],
    pSItems++

    mainTable[pSItems] = [
        {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
        {text: '35" Sleeper Chair', style: 'textotabla', alignment: 'center'},
        {text: '45" Sleeper Chair', style: 'textotabla', alignment: 'center'},
    ]
    pSItems++

    mainTable[pSItems] = [
        {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
        {text: 'P9135A', style: 'textotablaboldblack', alignment: 'center'},
        {text: 'P9145A', style: 'textotablaboldblack', alignment: 'center'},
    ]
    pSItems++

    mainTable[pSItems] = [
        {text: 'Weight Capacity', style: 'textotabla'},
        {text: '350 lbs', style: 'textotabla', alignment: 'center'},
        {text: '350 lbs', style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    mainTable[pSItems] = [
        {text: 'Overall weight', style: 'textotabla'},
        {text: '175 lbs', style: 'textotabla', alignment: 'center'},
        {text: '182 lbs', style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    /*ESTO VA EN UN CICLO*/
    var i=0;
    var mainTableFlag = false
    while(mainTableFlag === false)
    {
        var j;
        if(i===0)
        {
            j=0
        }
        else {
            j = i*2
        }
        var precios = []
        var preciosCount = 0
        var countC=0
        var printCaracter = []
        while(j< mainTableData.length && countC<2)
        {
           precios[preciosCount] = mainTableData[j].Price
           printCaracter[preciosCount] = mainTableData[j].Print_Character
           preciosCount++
           j++
           countC++
        }
        var data = {
            Id_Item: mainTableData[j-1].Id_Item,
            Item_Long_Desc: mainTableData[j-1].Item_Long_Desc,
            Prices: precios,
            Print_Character: printCaracter
        }

        var precio1;
        var precio2;

        if(data.Print_Character[0] !== null)
        {
            if(data.Print_Character[0] === "*")
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }
        }
        else {
            precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
        }

        if(data.Print_Character[1] !== null)
        {
            if(data.Print_Character[1] === "*")
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }
        }
        else {
            precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
        }
        
        mainTable[pSItems] = [
            {text: data.Item_Long_Desc, style: 'textotablacolornormal', fillColor: '#546ce4'},
            {text: precio1, style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
            {text: precio2, style: 'textotablacolor', alignment: 'center', fillColor: '#546ce4'}, 
        ]

        pSItems++

        //console.log(data)

        if(j >= mainTableData.length)
        {
            mainTableFlag = true
        }
        i++
    }   
    /*TERMINA CICLO*/

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'Options', style: 'textotablabold', border: [false, false, false, false]},
        {text: 'P9135A', style: 'textotablabold', alignment: 'center'},
        {text: 'P9145A', style: 'textotablabold', alignment: 'center'},
    ]
    pSItems++

    /*EMPIEZA CICLO*/
   /*EMPIEZA CICLO*/
   var i=0;
   var optionsFlag = false
   while(optionsFlag === false)
   {
       var j;
       if(i===0)
       {
           j=0
       }
       else {
           j = i*2
       }
       var precios = []
       var preciosCount = 0
       var countC=0
       var printCaracter = []
       while(j< optionsData.length && countC<2)
       {
          precios[preciosCount] = optionsData[j].Price
          printCaracter[preciosCount] = optionsData[j].Print_Character
          preciosCount++
          j++
          countC++
       }
       var data = {
           Id_Item: optionsData[j-1].Id_Item,
           Item_Long_Desc: optionsData[j-1].Item_Long_Desc,
           Prices: precios,
           Print_Character: printCaracter
       }

       var precio1;
       var precio2;

       if(data.Print_Character[0] !== null)
       {
           if(data.Print_Character[0] === "*")
           {
               precio1 = "●"
           }
           else {
               precio1 = "-"
           }
       }
       else {
           precio1 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[0])
       }

       if(data.Print_Character[1] !== null)
       {
           if(data.Print_Character[1] === "*")
           {
               precio2 = "●"
           }
           else {
               precio2 = "-"
           }
       }
       else {
           precio2 = "$" + Intl.NumberFormat("en-IN").format(data.Prices[1])
       }
       
       options[pSItems] = [
           {text: data.Item_Long_Desc, style: 'textotabla'},
           {text: precio1, style: 'textotabla', alignment: 'center'}, 
           {text: precio2, style: 'textotabla', alignment: 'center'}, 
       ]

       pSItems++

       //console.log(data)

       if(j >= optionsData.length)
       {
           optionsFlag = true
       }
       i++
    }   
    /*TERMINA CICLO*/

    const fecha = new Date();
    fecha.toLocaleDateString()

    var sleeperChair = [
        "\n",
        "\n",
        "\n",
        { text: 'SLEEPER CHAIR', style: 'header'},
        { text: 'Sleeper Chair', style: { fontSize: 0}, tocItem: 'sleeperChair'},
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        '\n',
        { text:'Features & Benefits\n', style: 'textotablaboldlarge'},
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Available in 76” or 86” width'},
                            { text: 'Easy fold down sleep pad'},
                            { text: 'Interior cubby for personal storage while sleeping (24”W x 6”H x 4.625”D)'},
                            { text: 'Moisture barrier on sleep surface'},
                            { text: 'Open bottom frame with 5 aluminum legs and non-marring glides'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Optional 5 casters with 2 front locking'},
                            { text: 'Optional 2 soft close drawers for storage of pillows & blankets (24" W x 6" H x 22" D)'},
                            { text: 'Optional swivel, solid surface tray table (right side sitting)'},
                        ]
                },
            ]
        },
        "\n",
        {
            columns: [
                {
                    width: 350,
                    table: {
                        widths: [140, 80, 80],
                        body: mainTable
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
                    width: "*",
                    text: [
                        {text: '\n\n\n\n\n\n\n\n', style: 'textotablaboldblack', fillColor: '#546ce4'},
                        {text: 'Arm Cap Color\n', style: 'textotablaboldblack', fillColor: '#546ce4'},
                        {text: 'Black\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'White\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Dark Grey\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Light Grey\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Toffee\n', style: 'textotabla', fillColor: '#546ce4'},
                        {text: 'Sand\n', style: 'textotabla', fillColor: '#546ce4'},
                    ]
                },
            ]
        },
        "\n",
        {
            table: {
                widths: [140, 80, 80],
                body: options
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
        { text: '\n', style: 'parrafo' },
        { text: '● = standard', style: 'parrafo' },
        { text: '= - not available', style: 'parrafo' },
        { image: "images/SleeperChair.png", width: 280, height: 190, alignment: 'center'},
        {
            columns: [
                {text: 'Solid Surface Color Options (Arm Caps & Tray Table)', style: 'textotablaboldlarge'},
                {text: 'Powder Coat Options', style: 'textotablaboldlarge'},
            ]
        },
        {
            columns: [
                { image: "images/SleeperChair2.png", width: 230, height: 130, alignment: 'center'},
                { image: "images/SleeperChair3.png", width: 290, height: 70, alignment: 'center'},
            ]
        },
        {text: '', pageBreak: 'after'  },
    ]

    return sleeperChair;
}

module.exports = {
    getSleeperChair : getSleeperChair,
}