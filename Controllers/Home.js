const home = (req,res) =>{
    res.send([
        {
            header: "Jaisalmer, Rajasthan",
            description: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background: ("images/nature.jpg")
        },
        {
            header: "Mnagalore",
            description: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background: ("images/nature.jpg")
    
        },
        {
            header: "Mumbai",
            description: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background: ("images/nature.jpg")
        }
    ])
}

const homelatestarticles = (req,res) =>{
    res.send([
        {
            header2: "Catch waves with an adventure guide",
            description2: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background2: ('images/greatcanyon.jpg'),
        },
        {
            header2: "Catch waves with an adventure guide",
            description2: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background2: ('images/greatcanyon.jpg')
        },
        {
            header2: "Catch waves with an adventure guide",
            description2: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background2: ('images/greatcanyon.jpg')
        },
        {
            header2: "Catch waves with an adventure guide",
            description2: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination. It has a plathora of temples and palaces",
            background2: ('images/greatcanyon.jpg')
        }
    ])
}

const hometoppost = (req,res) =>{
    res.send([
        {
            header3: "Catch waves with an adventure guide",
            description3: "Travel/ September 20, 2022",
            background3: ("images/greatcanyon.jpg"),
            numbertp: "2"
        },
        {
            header3: "Catch waves with an adventure guide",
            description3: "Travel/ September 20, 2022",
            background3: ("images/greatcanyon.jpg"),
            numbertp: "3"
        },
        {
            header3: "Catch waves with an adventure guide",
            description3: "Travel/ September 20, 2022",
            background3: ("images/greatcanyon.jpg"),
            numbertp: "4"
        }
    ])
}

const homelateststories = (req,res) =>{
    res.send([
        {
            header4: "Catch waves with an adventure guide",
            description4: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.",
        },
        {
            header4: "Catch waves with an adventure guide",
            description4: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.",
        },
        {
            header4: "Catch waves with an adventure guide",
            description4: "Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.Gujarat is vastly underrated and its a mystery to us why the region isnt more well known as a tourist destination.",
        }
    ])
}


module.exports.home1 = home
module.exports.homelatestarticles = homelatestarticles
module.exports.hometoppost = hometoppost
module.exports.homelateststories = homelateststories