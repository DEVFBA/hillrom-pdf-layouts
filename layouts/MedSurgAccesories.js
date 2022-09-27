const dbMedSurgAccesories = require('../controllers/medsurgaccesories')

const fecha = new Date();
fecha.toLocaleDateString()

async function getMedSurgAccesories()
{
    const res = await dbMedSurgAccesories.getMedSurgAccesories()
    const bagHoldersData = res[0]
    const bottleHolderData = res[1]
    const controlsData = res[2]
    const supportsData = res[3]
    const tankHolderData = res[4]
    const liftPoleData = res[5]
    const ivPoleData = res[6]
    const optionUpgradeData = res[7]
    const sidelaicData = res[8]
    const traysData = res[9]
    const tractionData = res[10]
    const furnitureSupportsData = res[11]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'HR900', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900 Accella', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'Centuris Pro', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    options[pSItems] = [
        {text: "BAG HOLDERS", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(bagHoldersData.length > 0)
    {
        /*EMPIEZA CICLO*/
        var i=0;
        var bagHoldersFlag = false
        while(bagHoldersFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            while(j< bagHoldersData.length && countC<3)
            {
            precio= bagHoldersData[j].Price
            if(bagHoldersData[j].Item_Template === "HR900 X3")
            {
                    printCaracterHR900X3 = true; 
            }
            else if(bagHoldersData[j].Item_Template === "ACCELLA")
            {
                    printCaracterACCELLA = true;
            }
            else 
            {
                    printCaracterCENTURISX3 = true
            }
            j++
            countC++
            }
            var data = {
                Kit_Name: bagHoldersData[j-1].KitName,
                Part: bagHoldersData[j-1].Part,
                Item_Long_Desc: bagHoldersData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }

            var precio1;
            var precio2;
            var precio3;

            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }

            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }

            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            options[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= bagHoldersData.length)
            {
                bagHoldersFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }
    
    options[pSItems] = [
        {text: "BOTTLEHOLDER", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(bottleHolderData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var bottleHolderFlag = false
        while(bottleHolderFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            var parts = true
            while(j< bottleHolderData.length && countC<3)
            {
                //if(bottleHolderData[j].Part === bottleHolderData[j+1].Part)
                //{
                    precio= bottleHolderData[j].Price
                    if(bottleHolderData[j].Item_Template === "HR900 X3")
                    {
                            printCaracterHR900X3 = true; 
                    }
                    else if(bottleHolderData[j].Item_Template === "ACCELLA")
                    {
                            printCaracterACCELLA = true;
                    }
                    else 
                    {
                            printCaracterCENTURISX3 = true
                    }
                    j++
                    countC++
                /*}
                else {
                    parts = false
                }*/
            }
            var data = {
                Kit_Name: bottleHolderData[j-1].KitName,
                Part: bottleHolderData[j-1].Part,
                Item_Long_Desc: bottleHolderData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }

            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }

            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            options[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= bottleHolderData.length)
            {
                bottleHolderFlag = true
            }
            i++
        }   
        /*TERMINA CICLO*/
    }
    

    var controls = []
    pSItems = 0

    controls[pSItems] = [
        {text: "CONTROLS", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]
    pSItems++

    if(controlsData.length > 0)
    {
        /*EMPIEZA CICLO*/
        for(var i=0; i<controlsData.length-1; i++)
        {
            if(i === controlsData.length-2)
            {
                controls[pSItems] = [
                    {text: controlsData[i].KitName, style: 'textotabla'},
                    {text: controlsData[i].Part, style: 'textotabla'},
                    {text: controlsData[i].Item_Long_Desc, style: 'textotabla'},
                    {text: "●", style: 'textotabla', alignment: 'center'}, 
                    {text: "●", style: 'textotabla', alignment: 'center'}, 
                    {text: "-", style: 'textotabla', alignment: 'center'}, 
                    {text: "$" + Intl.NumberFormat("en-IN").format(controlsData[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
                pSItems++
            }
            else {
                controls[pSItems] = [
                    {text: controlsData[i].KitName, style: 'textotabla'},
                    {text: controlsData[i].Part, style: 'textotabla'},
                    {text: controlsData[i].Item_Long_Desc, style: 'textotabla'},
                    {text: "●", style: 'textotabla', alignment: 'center'}, 
                    {text: "-", style: 'textotabla', alignment: 'center'}, 
                    {text: "-", style: 'textotabla', alignment: 'center'}, 
                    {text: "$" + Intl.NumberFormat("en-IN").format(controlsData[i].Price), style: 'textotabla', alignment: 'center'}, 
                ]
                pSItems++
            }
        }
        /*TERMINA CICLO*/
    }


    var supports = []
    pSItems = 0

    if(supportsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        supports[pSItems] = [
            {text: supportsData[0].KitName, style: 'textotabla'},
            {text: supportsData[0].Part, style: 'textotabla'},
            {text: supportsData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(supportsData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++

        supports[pSItems] = [
            {text: supportsData[3].KitName, style: 'textotabla'},
            {text: supportsData[3].Part, style: 'textotabla'},
            {text: supportsData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(supportsData[3].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++

        supports[pSItems] = [
            {text: supportsData[6].KitName, style: 'textotabla'},
            {text: supportsData[6].Part, style: 'textotabla'},
            {text: supportsData[6].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(supportsData[6].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }
    

    var tankholder = []
    pSItems = 0

    if(tankHolderData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var tankHolderFlag = false
        while(tankHolderFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            var parts = true
            while(j< tankHolderData.length && countC<3)
            {
                //if(bottleHolderData[j].Part === bottleHolderData[j+1].Part)
                //{
                    precio= tankHolderData[j].Price
                    if(tankHolderData[j].Item_Template === "HR900 X3")
                    {
                            printCaracterHR900X3 = true; 
                    }
                    else if(tankHolderData[j].Item_Template === "ACCELLA")
                    {
                            printCaracterACCELLA = true;
                    }
                    else 
                    {
                            printCaracterCENTURISX3 = true
                    }
                    j++
                    countC++
                /*}
                else {
                    parts = false
                }*/
            }
            var data = {
                Kit_Name: tankHolderData[j-1].KitName,
                Part: tankHolderData[j-1].Part,
                Item_Long_Desc: tankHolderData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }

            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }

            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            tankholder[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= tankHolderData.length)
            {
                tankHolderFlag = true
            }
            i++
        } 
        /*TERMINA CICLO*/
    }

    var furnitureSupports = []
    pSItems = 0

    if(furnitureSupportsData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        furnitureSupports[pSItems] = [
            {text: furnitureSupportsData[0].KitName, style: 'textotabla'},
            {text: furnitureSupportsData[0].Part, style: 'textotabla'},
            {text: furnitureSupportsData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(furnitureSupportsData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++

        furnitureSupports[pSItems] = [
            {text: furnitureSupportsData[3].KitName, style: 'textotabla'},
            {text: furnitureSupportsData[3].Part, style: 'textotabla'},
            {text: furnitureSupportsData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(furnitureSupportsData[3].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }
    
    var liftpole = []
    pSItems = 0

    liftpole[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolorlarge', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'},
        {text: 'HR900', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900 Accella', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'Centuris Pro', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolorlarge', fillColor: '#546ce4', alignment: 'center'}, 
    ]
    pSItems++

    liftpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(liftPoleData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var liftPoleFlag = false
        while(liftPoleFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            var parts = true
            while(j< liftPoleData.length && countC<3)
            {
                //if(bottleHolderData[j].Part === bottleHolderData[j+1].Part)
                //{
                    precio= liftPoleData[j].Price
                    if(liftPoleData[j].Item_Template === "HR900 X3")
                    {
                            printCaracterHR900X3 = true; 
                    }
                    else if(liftPoleData[j].Item_Template === "ACCELLA")
                    {
                            printCaracterACCELLA = true;
                    }
                    else 
                    {
                            printCaracterCENTURISX3 = true
                    }
                    j++
                    countC++
                /*}
                else {
                    parts = false
                }*/
            }
            var data = {
                Kit_Name: liftPoleData[j-1].KitName,
                Part: liftPoleData[j-1].Part,
                Item_Long_Desc: liftPoleData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }

            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }

            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            liftpole[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= liftPoleData.length)
            {
                liftPoleFlag = true
            }
            i++
        } 
        /*TERMINA CICLO*/
    }

    var ivpole = []
    pSItems = 0

    ivpole[pSItems] = [
        {text: "IVPOLE", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(ivPoleData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var ivPoleFlag = false
        var i=0
        while(ivPoleFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            var parts = true
            while(j< ivPoleData.length && countC<3)
            {
                //if(bottleHolderData[j].Part === bottleHolderData[j+1].Part)
                //{
                    precio= ivPoleData[j].Price
                    if(ivPoleData[j].Item_Template === "HR900 X3")
                    {
                            printCaracterHR900X3 = true; 
                    }
                    else if(ivPoleData[j].Item_Template === "ACCELLA")
                    {
                            printCaracterACCELLA = true;
                    }
                    else 
                    {
                            printCaracterCENTURISX3 = true
                    }
                    j++
                    countC++
                /*}
                else {
                    parts = false
                }*/
            }
            var data = {
                Kit_Name: ivPoleData[j-1].KitName,
                Part: ivPoleData[j-1].Part,
                Item_Long_Desc: ivPoleData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }

            var precio1;
            var precio2;
            var precio3;
            var precio4;

            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }

            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }

            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            ivpole[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]

            pSItems++

            //console.log(data)

            if(j >= ivPoleData.length)
            {
                ivPoleFlag = true
            }
            i++
        } 
        /*TERMINA CICLO*/
    }

    var optionUpgrade = []
    pSItems = 0

    optionUpgrade[pSItems] = [
        {text: "OPTION UPGRADE", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(optionUpgradeData[0] !== undefined)
    {
        /*ESTO VA EN UN CICLO*/
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[0].KitName, style: 'textotabla'},
            {text: optionUpgradeData[0].Part, style: 'textotabla'},
            {text: optionUpgradeData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(optionUpgradeData[3] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[3].KitName, style: 'textotabla'},
            {text: optionUpgradeData[3].Part, style: 'textotabla'},
            {text: optionUpgradeData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[3].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(optionUpgradeData[5] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[5].KitName, style: 'textotabla'},
            {text: optionUpgradeData[5].Part, style: 'textotabla'},
            {text: optionUpgradeData[5].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[5].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(optionUpgradeData[7] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[7].KitName, style: 'textotabla'},
            {text: optionUpgradeData[7].Part, style: 'textotabla'},
            {text: optionUpgradeData[7].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[7].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }

    if(optionUpgradeData[9] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[9].KitName, style: 'textotabla'},
            {text: optionUpgradeData[9].Part, style: 'textotabla'},
            {text: optionUpgradeData[9].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[9].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }

    if(optionUpgradeData[11] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[11].KitName, style: 'textotabla'},
            {text: optionUpgradeData[11].Part, style: 'textotabla'},
            {text: optionUpgradeData[11].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[11].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }

    if(optionUpgradeData[12] !== undefined)
    {
        optionUpgrade[pSItems] = [
            {text: optionUpgradeData[12].KitName, style: 'textotabla'},
            {text: optionUpgradeData[12].Part, style: 'textotabla'},
            {text: optionUpgradeData[12].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(optionUpgradeData[12].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }
     
    var siderailAccesories = []
    pSItems = 0

    siderailAccesories[pSItems] = [
        {text: "SIDERAIL ACCESORIES", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(sidelaicData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        siderailAccesories[pSItems] = [
            {text: sidelaicData[0].KitName, style: 'textotabla'},
            {text: sidelaicData[0].Part, style: 'textotabla'},
            {text: sidelaicData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(sidelaicData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }

    var trays = []
    pSItems = 0

    trays[pSItems] = [
        {text: "TRAYS", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(traysData.length > 0)
    {
        /*ESTO VA EN UN CICLO*/
        var i=0;
        var traysFlag = false
        while(traysFlag === false)
        {
            var j;
            if(i===0)
            {
                j=0
            }
            else {
                j = i*3
            }
            var precio; 
            var countC=0
            var printCaracterHR900X3 = false;
            var printCaracterACCELLA = false;
            var printCaracterCENTURISX3 = false;
            var parts = true
            while(j< traysData.length && countC<3)
            {
                //if(bottleHolderData[j].Part === bottleHolderData[j+1].Part)
                //{
                    precio= traysData[j].Price
                    if(traysData[j].Item_Template === "HR900 X3")
                    {
                            printCaracterHR900X3 = true; 
                    }
                    else if(traysData[j].Item_Template === "ACCELLA")
                    {
                            printCaracterACCELLA = true;
                    }
                    else 
                    {
                            printCaracterCENTURISX3 = true
                    }
                    j++
                    countC++
                /*}
                else {
                    parts = false
                }*/
            }
            var data = {
                Kit_Name: traysData[j-1].KitName,
                Part: traysData[j-1].Part,
                Item_Long_Desc: traysData[j-1].Item_Long_Desc,
                Price: precio,
                Print_Character_HR900X3: printCaracterHR900X3,
                Print_Character_ACCELLA: printCaracterACCELLA,
                Print_Character_CENTURISX3 : printCaracterCENTURISX3
            }
    
            var precio1;
            var precio2;
            var precio3;
            var precio4;
    
            if(data.Print_Character_HR900X3 !== false)
            {
                precio1 = "●"
            }
            else {
                precio1 = "-"
            }
    
            if(data.Print_Character_ACCELLA !== false)
            {
                precio2 = "●"
            }
            else {
                precio2 = "-"
            }
    
            if(data.Print_Character_CENTURISX3 !== false)
            {
                precio3 = "●"
            }
            else {
                precio3 = "-"
            }
            
            trays[pSItems] = [
                {text: data.Kit_Name, style: 'textotabla'},
                {text: data.Part, style: 'textotabla'},
                {text: data.Item_Long_Desc, style: 'textotabla'},
                {text: precio1, style: 'textotabla', alignment: 'center'}, 
                {text: precio2, style: 'textotabla', alignment: 'center'}, 
                {text: precio3, style: 'textotabla', alignment: 'center'}, 
                {text: "$" + Intl.NumberFormat("en-IN").format(data.Price), style: 'textotabla', alignment: 'center'}, 
            ]
    
            pSItems++
    
            //console.log(data)
    
            if(j >= traysData.length)
            {
                traysFlag = true
            }
            i++
        } 
        /*TERMINA CICLO*/
    }

    var traction = []
    pSItems = 0

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    if(tractionData[0] !== undefined)
    {
        /*ESTO VA EN UN CICLO*/
        traction[pSItems] = [
            {text: tractionData[0].KitName, style: 'textotabla'},
            {text: tractionData[0].Part, style: 'textotabla'},
            {text: tractionData[0].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[0].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    /*if(tractionData[2] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[2].KitName, style: 'textotabla'},
            {text: tractionData[2].Part, style: 'textotabla'},
            {text: tractionData[2].Item_Long_Desc, style: 'textotabla'},
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[2].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }*/

    if(tractionData[3] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[3].KitName, style: 'textotabla'},
            {text: tractionData[3].Part, style: 'textotabla'},
            {text: tractionData[3].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[3].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[5] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[5].KitName, style: 'textotabla'},
            {text: tractionData[5].Part, style: 'textotabla'},
            {text: tractionData[5].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[5].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[7] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[7].KitName, style: 'textotabla'},
            {text: tractionData[7].Part, style: 'textotabla'},
            {text: tractionData[7].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[7].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[9] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[9].KitName, style: 'textotabla'},
            {text: tractionData[9].Part, style: 'textotabla'},
            {text: tractionData[9].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[9].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[11] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[11].KitName, style: 'textotabla'},
            {text: tractionData[11].Part, style: 'textotabla'},
            {text: tractionData[11].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[11].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[13] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[13].KitName, style: 'textotabla'},
            {text: tractionData[13].Part, style: 'textotabla'},
            {text: tractionData[13].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[13].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[15] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[15].KitName, style: 'textotabla'},
            {text: tractionData[15].Part, style: 'textotabla'},
            {text: tractionData[15].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[15].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[17] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[17].KitName, style: 'textotabla'},
            {text: tractionData[17].Part, style: 'textotabla'},
            {text: tractionData[17].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[17].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[19] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[19].KitName, style: 'textotabla'},
            {text: tractionData[19].Part, style: 'textotabla'},
            {text: tractionData[19].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[19].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[21] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[21].KitName, style: 'textotabla'},
            {text: tractionData[21].Part, style: 'textotabla'},
            {text: tractionData[21].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[21].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
    }

    if(tractionData[22] !== undefined)
    {
        traction[pSItems] = [
            {text: tractionData[22].KitName, style: 'textotabla'},
            {text: tractionData[22].Part, style: 'textotabla'},
            {text: tractionData[22].Item_Long_Desc, style: 'textotabla'},
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "●", style: 'textotabla', alignment: 'center'}, 
            {text: "-", style: 'textotabla', alignment: 'center'}, 
            {text: "$" + Intl.NumberFormat("en-IN").format(tractionData[22].Price), style: 'textotabla', alignment: 'center'}, 
        ]
        pSItems++
        /*TERMINA CICLO*/
    }

    var table1 = [];
    if(bagHoldersData.length > 0 || bottleHolderData.length > 0)
    {   
        table1 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
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
            }
        ]
    }

    var table2 = []
    if(controlsData.length > 0)
    {
        table2 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: controls
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

    var table3 = []
    if(supportsData.length > 0)
    {
        table3 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: supports
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
    if(tankHolderData.length > 0)
    {
        table4 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: tankholder
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

    var table11 = []
    if(furnitureSupportsData.length > 0)
    {
        table11 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: furnitureSupports
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

    var table5 = []
    if(liftPoleData.length > 0)
    {
        table5 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: liftpole
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

    var table6 = []
    if(ivPoleData.length > 0)
    {
        table6 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: ivpole
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

    var table7 = []
    if(optionUpgradeData.length > 0)
    {
        table7 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: optionUpgrade
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

    var table8 = []
    if(sidelaicData.length > 0)
    {
        table8 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: siderailAccesories
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

    var table9 = []
    if(traysData.length > 0)
    {
        table9 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: trays
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

    var table10 = []
    if(tractionData.length > 0)
    {
        table10 = [
            {
                table: {
                    widths: [70, 50, "*", 50, 50, 50, 50],
                    body: traction
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

    var medSurgAccesories = [
        "\n",
        "\n",
        "\n",
        { text: 'Med-Surg Accessories', style: 'header', tocItem: 'medSurgAccesories'},
        "\n",
        table1,
        { text: '\n', style: 'parrafo' },
        { text: 'AC962A : available for Hill-Rom 900 A-version with 150 mm castors only', style: ['quote', "small"] },
        { text: '\n', style: 'parrafo' },
        table2,
        "\n",
        { image: "images/MedSurgAccesories.png", width: 500, height: 110, alignment: 'center'},
        { text: '\n', style: 'parrafo' },
        { text: 'SUPPORTS ACCESORIES', style: 'textotablaboldlarge' },
        table3,
        { text: '\n', style: 'parrafo' },
        { text: 'TANKHOLDER', style: 'textotablaboldlarge' },
        table4,
        { text: 'The above tank holders are not available for the Hill-Rom 900 bed with 125 mm casters', style: ['quote', "small"] },
        { text: '\n', style: 'parrafo' },
        { text: 'FURNITURE & SUPPORT ACCESSORIES', style: 'textotablaboldlarge' },
        table11,
        {text: '', pageBreak: 'after'  },
        "\n",
        "\n",
        "\n",
        table5,
        table6,
        table7,
        table8,
        table9,
        table10,
        { text: '\n', style: 'parrafo' },
        { text: '● = standard = \t \t = - not available', style: 'parrafo' },
        { text: 'All accessories can be ordered as a spare part.', style: 'parrafoBold', alignment: 'center' },
        { text: '\n', style: 'parrafo' },
        { text: 'NOTE : A version refers to Hill-Rom 900 bed with a reference number beginning with CS900A \n B version refers to Hill-Rom 900 bed with split siderails or with a reference number beginning with CS900B', style: 'parrafoItalic', alignment: 'center' },
        { text: '\n', style: 'parrafo' },
        { image: "images/MedSurgAccesories2.png", width: 80, height: 40, alignment: 'center'},
        {text: '', pageBreak: 'after'  },
    ]

    return medSurgAccesories;
}

module.exports = {
    getMedSurgAccesories : getMedSurgAccesories,
}