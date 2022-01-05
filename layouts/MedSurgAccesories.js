const axios = require('axios');

async function getMedSurgAccesories()
{
    const res = await axios.get("http://localhost:8091/api/pdf-hillroom/progressa")
    const prices = res.data[0]
    const patientSiderail = res.data[1]
    const mobility  = res.data[2]
    const permanentPole = res.data[3]
    const transportShelf = res.data[4]

    var options =[]
    var pSItems = 0;
    options[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AVG1600', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'AVG1200', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900 Accella', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'Centuris Pro', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "BAGHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AD243A", style: 'textotabla'},
        {text: "Urine Bag Holder Epoxy Beige (A Version only)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'},
        {text: "●", style: 'textotabla', alignment: 'center'},
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'},
        {text: "$95", style: 'textotabla', alignment: 'center'},
    ]

    pSItems++
    /*TERMINA CICLO*/
    
    options[pSItems] = [
        {text: "BOTTLEHOLDER", style: 'textotablaboldlarge', border: [false, false, false, false], colSpan: 2},
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]}, 
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

    /*ESTO VA EN UN CICLO*/
    options[pSItems] = [
        {text: "BOTTLEHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AC908A", style: 'textotabla', alignment: 'left'},
        {text: "Double bottle holder", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$93", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BOTTLEHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AC932A", style: 'textotabla', alignment: 'left'},
        {text: "Bottle holder 1L", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$73", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    options[pSItems] = [
        {text: "BOTTLEHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AC962A", style: 'textotabla', alignment: 'left'},
        {text: "Pivoting Bottle Holder 3L", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$264", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]
    pSItems++

     /*ESTO VA EN UN CICLO*/
    controls[pSItems] = [
        {text: "CONTROLMODULES", style: 'textotabla', alignment: 'left'},
        {text: "AD280A", style: 'textotabla', alignment: 'left'},
        {text: "Control on flexible arm", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$534", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "CONTROLMODULES", style: 'textotabla', alignment: 'left'},
        {text: "AD280A", style: 'textotabla', alignment: 'left'},
        {text: "Control on flexible arm", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$534", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "CONTROLPENDANT", style: 'textotabla', alignment: 'left'},
        {text: "AD281B", style: 'textotabla', alignment: 'left'},
        {text: "Hand pendant", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$226", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "CONTROLPENDANT", style: 'textotabla', alignment: 'left'},
        {text: "AD282A", style: 'textotabla', alignment: 'left'},
        {text: "Hand pendant", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$226", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "CONTROLMODULES", style: 'textotabla', alignment: 'left'},
        {text: "AD283A", style: 'textotabla', alignment: 'left'},
        {text: "Control on flexible arm", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$534", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    controls[pSItems] = [
        {text: "CONTROLPENDANT", style: 'textotabla', alignment: 'left'},
        {text: "AD284A", style: 'textotabla', alignment: 'left'},
        {text: "Control pendant (HR900 ELIC BEA & ACCELLA)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$230", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
     /*TERMINA CICLO*/

    var supports = []
    pSItems = 0

    /*ESTO VA EN UN CICLO*/
    supports[pSItems] = [
        {text: "FURNACC", style: 'textotabla', alignment: 'left'},
        {text: "AC968A", style: 'textotabla', alignment: 'left'},
        {text: "Equipotential Cable Link", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$155", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    supports[pSItems] = [
        {text: "SUPPORTACC", style: 'textotabla', alignment: 'left'},
        {text: "AC953A", style: 'textotabla', alignment: 'left'},
        {text: "IV hooks on patient helper", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$88", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    supports[pSItems] = [
        {text: "SUPPORTACC", style: 'textotabla', alignment: 'left'},
        {text: "AD222A", style: 'textotabla', alignment: 'left'},
        {text: "V Line Manager (requires AD216A for AVG1600 & AVG1200)", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$108", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    supports[pSItems] = [
        {text: "SUPPORTACC", style: 'textotabla', alignment: 'left'},
        {text: "AD286A", style: 'textotabla', alignment: 'left'},
        {text: "Line manager and support", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$179", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    supports[pSItems] = [
        {text: "SUPPORTACC", style: 'textotabla', alignment: 'left'},
        {text: "AD325A", style: 'textotabla', alignment: 'left'},
        {text: "Label Holder", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$27", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var tankholder = []
    pSItems = 0

     /*ESTO VA EN UN CICLO*/
     tankholder[pSItems] = [
        {text: "TANKHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AC959A", style: 'textotabla', alignment: 'left'},
        {text: "Oxygen Tank Holder 140 mm Ø (model B5)", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$183", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    tankholder[pSItems] = [
        {text: "TANKHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AD101A", style: 'textotabla', alignment: 'left'},
        {text: "Oxygen Tank Holder 100 mm Ø (model D)", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$219", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    tankholder[pSItems] = [
        {text: "TANKHOLDER", style: 'textotabla', alignment: 'left'},
        {text: "AD102A", style: 'textotabla'},
        {text: "Oxygen Tank Holder 100 mm Ø (model E)", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$264", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

    var liftpole = []
    pSItems = 0

    liftpole[pSItems] = [
        {text: 'KITNAME', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'PART #', style: 'textotablacolor', fillColor: '#546ce4',  alignment: 'center'},
        {text: 'DESCRIPTION', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'},
        {text: 'AVG1600', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'AVG1200', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'HR900 Accella', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'Centuris Pro', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
        {text: 'LIST PRICE', style: 'textotablacolor', fillColor: '#546ce4', alignment: 'center'}, 
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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    liftpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD810A", style: 'textotabla'},
        {text: "Fixed lifting pole Light Grey", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$230", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    liftpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD811A", style: 'textotabla'},
        {text: "Angle Pivoting Lifting Pole Light Grey", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$324", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     ivpole[pSItems] = [
        {text: "IVPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD294A", style: 'textotabla'},
        {text: "Straight Fixed Height IV pole, 4 hooks", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$97", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    ivpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD297A", style: 'textotabla'},
        {text: "Telescopic IV Pole 4 Hooks", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$207", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    ivpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD298A", style: 'textotabla'},
        {text: "Adjustable IV pole, 4 hooks", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$171", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    ivpole[pSItems] = [
        {text: "LIFTPOLE", style: 'textotabla', alignment: 'center'},
        {text: "AD299A", style: 'textotabla'},
        {text: "One hand adjustable IV pole, 4 hooks", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$262", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD242A", style: 'textotabla'},
        {text: "42A In Bed Thoracic X-RAY (for split siderails bed models)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$631", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD277A", style: 'textotabla'},
        {text: "Wall Bumper (for HR900 with Mobile Head Section)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$96", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD315A", style: 'textotabla'},
        {text: "Wifi Accesory Module (For accella from serial # HRP004026834)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$847", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD276A R0", style: 'textotabla'},
        {text: "5th wheel for HR900 Integral", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$628", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD276A R1", style: 'textotabla'},
        {text: "5th wheel for HR900 Simple Band", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$628", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD276A R2", style: 'textotabla'},
        {text: "5th wheel for HR900 Double Band", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$628", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "P379G2D", style: 'textotabla'},
        {text: 'Communication cable - 37 pin to 1/4" HR900 with BEA + NC', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$113", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "P379W33C", style: 'textotabla'},
        {text: 'Communication cable - 37 pin to 3.5 mm HR900 with BEA only', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$113", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "P379W33C", style: 'textotabla'},
        {text: '5th wheel for HR900 Doulbe Band (Elic with BEA & ACCELLA)', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$628", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    optionUpgrade[pSItems] = [
        {text: "OPTIONUPGRADE", style: 'textotabla', alignment: 'center'},
        {text: "AD292A", style: 'textotabla'},
        {text: 'Electric cord holder', style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$29", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
     siderailAccesories[pSItems] = [
        {text: "SIDERAILACC", style: 'textotabla', alignment: 'center'},
        {text: "AD312A", style: 'textotabla'},
        {text: "Safety Nets", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$283", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    trays[pSItems] = [
        {text: "TRAYS", style: 'textotabla', alignment: 'center'},
        {text: "AC963A", style: 'textotabla'},
        {text: "Syringe Driver Tray", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$421", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    trays[pSItems] = [
        {text: "TRAYS", style: 'textotabla', alignment: 'center'},
        {text: "AD244B", style: 'textotabla'},
        {text: "Monitor tray Grey (B Version only)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "$574", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/

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
        {text: '', border: [false, false, false, false]},
        {text: '', border: [false, false, false, false]}, 
    ]

    pSItems++

     /*ESTO VA EN UN CICLO*/
    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "AD270B", style: 'textotabla'},
        {text: "Foot Section Support - Grey (B Version only)", style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$204", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST865A", style: 'textotabla'},
        {text: "Kinetec Kit 1A for traction/suspension of inferior limb", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,986", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST867A", style: 'textotabla'},
        {text: "Kinetec Kit 2 for traction/suspension of superior limb", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "1,293", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST868A", style: 'textotabla'},
        {text: "Kinetec Kit 3 for pelvic suspension", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$1,409", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST869A", style: 'textotabla'},
        {text: "Kinetec Kit 4 for cervical suspension", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$848", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST870A", style: 'textotabla'},
        {text: "Kinetec Tube T13", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$285", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST871A", style: 'textotabla'},
        {text: "Kinetec Tube T25", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$240", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST873A", style: 'textotabla'},
        {text: "Traction - Partial Assembly at foot-end", style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,249", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST874A", style: 'textotabla'},
        {text: 'Fixed clamp bar of 40cm (16")', style: 'textotabla', alignment: 'left'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$628", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST875A", style: 'textotabla'},
        {text: 'Traction frame T39 (HR900 with Stationary Head Section)', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$9,062", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST876A", style: 'textotabla'},
        {text: 'Head porch bar', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,156", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++

    traction[pSItems] = [
        {text: "TRACTION", style: 'textotabla', alignment: 'center'},
        {text: "ST877A", style: 'textotabla'},
        {text: 'Foot porch bar', style: 'textotabla', alignment: 'left'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "●", style: 'textotabla', alignment: 'center'}, 
        {text: "-", style: 'textotabla', alignment: 'center'}, 
        {text: "$2,678", style: 'textotabla', alignment: 'center'}, 
    ]

    pSItems++
    /*TERMINA CICLO*/


    var medSurgAccesories = [
        { text: 'Med-Surg Accessories', style: 'header', tocItem: 'medSurgAccesories'},
        "\n",
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        { text: 'AC908A : not available for Hill-Rom 900 B-version with 125 mm castors', style: ['quote', "small"] },
        { text: 'AC962A : available for Hill-Rom 900 A-version with 150 mm castors only', style: ['quote', "small"] },
        { text: '\n', style: 'parrafo' },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        "\n",
        { image: "images/MedSurgAccesories.png", width: 500, height: 110, alignment: 'center'},
        { text: '\n', style: 'parrafo' },
        { text: 'SUPPORTS ACCESORIES', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        { text: '\n', style: 'parrafo' },
        { text: 'TANKHOLDER', style: 'textotablaboldlarge' },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        { text: 'The above tank holders are not available for the Hill-Rom 900 bed with 125 mm casters', style: ['quote', "small"] },
        {text: '', pageBreak: 'after'  },
        '\n',
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
        {
            table: {
                widths: [70, 30, "*", 30, 30, 30, 30, 30, 30],
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
        },
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