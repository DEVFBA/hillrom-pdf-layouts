const dbSeatingFurniture = require('../controllers/seatingfurniture')

async function getSeatingFurniture()
{
    const res = await dbSeatingFurniture.getDataSeatingFurniture()
    const mainTableData = res[0]
    const optionsData = res[1]

    var mainTable = []
    var pSItems = 0;

    mainTable[pSItems] = [
        {border: [false, false, false, false], text: ''},
        {text: 'RECLINER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'BARIATRICRECLINER', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
    ]
    pSItems++

    mainTable[pSItems] = [
        {border: [false, false, false, false], text: 'PART #', style: 'textotablaboldblack'},
        {text: 'P9180A', style: 'textotablaboldblack', alignment: 'center'},
        {text: 'P9190A', style: 'textotablaboldblack', alignment: 'center'},
    ]
    pSItems++

    mainTable[pSItems] = [
        {text: 'Weight Capacity', style: 'textotabla'},
        {text: '500 lbs', style: 'textotabla', alignment: 'center'},
        {text: '880 lbs', style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    mainTable[pSItems] = [
        {text: 'Caster size', style: 'textotabla'},
        {text: '4"', style: 'textotabla', alignment: 'center'},
        {text: '4"', style: 'textotabla', alignment: 'center'}, 
    ]
    pSItems++

    mainTable[pSItems] = [
        {text: 'Overall weight', style: 'textotabla'},
        {text: '114 lbs', style: 'textotabla', alignment: 'center'},
        {text: '170 lbs', style: 'textotabla', alignment: 'center'}, 
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
    pSItems = 0;
    options[pSItems] = [
        {text: 'Options', style: 'textotablabold', border: [false, false, false, false]},
        {text: 'P9180A', style: 'textotablabold', alignment: 'center'},
        {text: 'P9190A', style: 'textotablabold', alignment: 'center'},
    ]
    pSItems++

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

    var seatingFurniture = [
        { image: "images/BaxterEncabezado.png", width: 570, height: 30, alignment: 'center'},
        {text:  "\n", style: "textotabla"},
        { text: 'Seating Furniture', style: 'header' },
        { text: 'Country of origin: USA\n', style: 'parrafo' },
        { text: 'RECLINERS\n', style: 'subheader'},
        { text: 'Recliners, Sleeper Sofa and Sleeper Chair', style: { fontSize: 0}, tocItem: 'seatingFurniture'},
        '\n',
        { text:'Features & Benefits\n', style: 'textotablaboldlarge'},
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                { text: 'Standard\n', style: 'textotablatitle'},
                { text: 'Bariatric\n', style: 'textotablatitle'},
            ]
        },
        { text: '\n', style: 'parrafo' },
        {
            columns: [
                {
                    style:'textolista',
                    ul: [
                            { text: 'Infinite position recline'},
                            { text: 'Independent back and ottoman recline'},
                            { text: 'Robust flip-up arms with locking in all positions up/down'},
                            { text: 'Side retractable accessory hook'},
                            { text: 'Caregiver ergonomic push bar on back with release button'},
                            { text: 'Front and rear lock casters with toe lock/release casters in front'},
                            { text: 'Compatible with Hillrom’s OBTs and patient lifts'},
                            { text: 'Structure composed of injection molded plastic and cast aluminum \nwith no exposed wood'},
                            { text: 'Molded foam cushions'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Available in non-porous fabrics with minimal sewing seams'}
                        ]
                },
                {
                    style:'textolista',
                    ul: [
                            { text: 'Infinite position recline up to 45°'},
                            { text: 'Independent back and ottoman recline'},
                            { text: 'Side retractable accessory hook'},
                            { text: 'Caregiver ergonomic push handles on back with release button'},
                            { text: 'Front and rear lock casters with toe lock/release'},
                            { text: 'Compatible with Hillrom’s OBTs and patient lifts'},
                            { text: 'Structure composed of steel and hardwood with no exposed wood'},
                            { text: 'Molded foam cushions'},
                            { text: 'Solid surface arm caps available in multiple colors'},
                            { text: 'Available in non-porous fabrics with minimal sewing seams'},
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
        { text: '\n', style: 'parrafo' },
        { image: "images/SeatingFurniture.png", width: 450, height: 190, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return seatingFurniture;
}

module.exports = {
    getSeatingFurniture : getSeatingFurniture,
}