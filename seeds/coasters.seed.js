require("dotenv").config();
const mongoose = require('mongoose')
const Coaster = require('./../models/Coasters.model')

const coasters = [
    {
      title: "Shambhala!",
      description: "3 trains with 8 cars per train. Riders are arranged 4 across in a single row for a total of 32 riders per train.",
      length: 1000,
      inversions: 0,
      imageUrl: "https://farm6.staticflickr.com/5626/21205099940_a5679b81b6_c.jpg"
    },
    {
      title: "Kingda Ka",
      description: "Riders are arranged 2 across in 2 rows for a total of 20 riders per train",
      length: 950,
      inversions: 0,
      imageUrl: "https://static.wixstatic.com/media/e353c8_454cb7aa28a64544ac6cd36b2721ff8b.jpg/v1/fill/w_705,h_457,al_c,q_80,usm_0.66_1.00_0.01/e353c8_454cb7aa28a64544ac6cd36b2721ff8b.webp"
    },
    {
      title: "Steel Dragon 2000",
      description: "China's top coaster, Riders are arranged 2 across in 2 rows for a total of 28 riders per train",
      length: 950,
      inversions: 0,
      imageUrl: "https://montanasrusas.webcindario.com/imagenes/asia1.jpg"
    },
    {
      title: "Smiler",
      description: "UK Coaster where The 4th/5th inversions are considered by some to be a single Batwing element. While similar in concept, the entrance/exit to this pair are tilted backwards beyond vertical creating a curve between them while this section is always vertical and straight on a traditional Batwing element.",
      length: 1100,
      inversions: 12,
      imageUrl: "https://coasterpedia.net/w/images/thumb/1/15/Smiler_%28Alton_Towers%29_2019_02.jpg/2000px-Smiler_%28Alton_Towers%29_2019_02.jpg"
    },
    {
      title: "Nemesis",
      description: "Alton Towers, Built below the treeline by creating ravines for the coaster to operate in.",
      length: 820,
      inversions: 7,
      imageUrl: "https://www.altontowers.com/media/cf4dwnhj/nemesis-kv.jpg"
    },
    {
      title: "Epsilon",
      description: "Tallest and built for Terra Mitica suspended coaster",
      length: 1300,
      inversions: 4,
      imageUrl: "https://www.terramiticapark.com/wp-content/uploads/2018/08/dia-monta%C3%B1as-rusas-terra-mitica-740x400.jpg"
    },
    {
      title: "Jocker The Ride",
      description: "DC Universe will feature Six Flags Discovery Kingdom’s most innovative roller coaster to date, Batman: The Ride – Northern California’s first 4D free fly roller coaster, with six free fly inversions.",
      length: 520,
      inversions: 12,
      imageUrl: "https://d302e0npexowb4.cloudfront.net/wp-content/uploads/2019/04/05134106/dc-universe-six-flags-batman-small.jpeg"
    },
    {
      title: "Firebird",
      description: "DC Universe will feature Six Flags Discovery Kingdom’s most innovative roller coaster to date, Batman: The Ride – Northern California’s first 4D free fly roller coaster, with six free fly inversions.",
      length: 1300,
      inversions: 12,
      imageUrl: "https://s19499.pcdn.co/wp-content/uploads/2019/07/firebird_burst_of_flames_six_flags_america_0.jpg"
    },
    {
      title: "El tobogán de Estepona",
      description: "Se te saltan los empastes. Siempre en nuestros corazones.",
      inversions: 7,
      imageUrl: "https://as.com/epik/imagenes/2019/05/10/portada/1557498741_051599_1557499508_noticia_normal.jpg",
      length: 45
    },
    {
      title: "Tarántula",
      description: "Montaña de eje rotatorio en el parque de atracciones de Madrid, construída en el año 2004 y con capacidad para 490 pasajeros por hora.",
      inversions: 0,
      length: 876,
      imageUrl: "https://1.bp.blogspot.com/_kDqnBRurzKg/TA_xClvJ38I/AAAAAAAAACg/bw73vVaXmMo/s1600/La+Tarantula.jpg"
    },
    {
      title: "Dragon Khan",
      description: "Multiloop en Port Aventura",
      inversions: 6,
      length: 1723,
      imageUrl: "https://mundoxdescubrir.com/wp-content/uploads/2015/09/port-aventura-dragon-khan-monta%C3%B1a-rusa-1.jpg"
    },
    {
      title: "Tornado",
      description: "Tornado es una montaña rusa invertida con una longitud de 800 metros y una altura de 29,9 m.2​ Es inusual entre las montañas rusas hechas por Intamin en utilizar un elevación mediante cadena en vez de una lanzadera magnética.3​ Presenta 3 inversiones: 2 ''loopings'', un sacacorchos, y una caída de casi 30 m a 80 km/h.",
      inversions: 6,
      length: 1250,
      imageUrl: "https://thumbnail.pa-community.com/72/51/27aeaba174ee44f43ae6d32c69a4/669a3023a36c6e2266de9706c7a372ad.JPG"
    },
    {
      title: "Red Force",
      description: "Red Force es un gigacoaster launched ubicada en el parque temático Ferrari Land. Se localiza en Salou, Tarragona, Cataluña, en España, construida por Intamin Amusement Rides, y recrea la sensación de conducir un Fórmula 1. Fue inaugurada el 6 de abril de 2017, aunque la fecha oficial de apertura de Ferrari Land fue el 7 de abril de 2017.1​",
      inversions: 0,
      length: 1200,
      imageUrl: "https://www.mibauldeblogs.com/wp-content/uploads/2017/04/DSC09139.jpg"
    },
    {
      title: "Batman the Ride",
      description: "Batman: The Ride es una montaña rusa invertida disponible en los parques temáticos Six Flags.1​ Esta cadena de parques es la sexta que más visitantes recibe en todo el mundo y está presente en toda Norteamérica.2​ Construida por la empresa de consultoría de ingeniería Bolliger & Mabillard y Vekoma (en el caso de Six Flags México), alcanza una altura de entre 30,5 m y 32,0 m y una velocidad máxima de 80,5 km/h.3​ La montaña rusa original que se encuentra en Six Flags Great America concebida en parte por Jim Wintrode, el director general del parque.3​4​",
      length: 800,
      inversions: 0,
      imageUrl: "https://static.wikia.nocookie.net/sixflags/images/b/b3/BatmanSFFT.jpg"
    },
    {
      title: "Hulk",
      description: "Not to be confused with the real world Incredible Hulk Coaster at Universal's Islands of Adventure",
      length: 2300,
      inversions: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/The_Hulk_Coaster_%285143123646%29.jpg/2560px-The_Hulk_Coaster_%285143123646%29.jpg"
    },
    {
      title: "Scape from Gotham",
      description: "Parque Warner Madrid abrirá en 2023 una montaña rusa de Batman que será la envidia de los adictos a la adrenalina de todo el mundo, Gotham City Escape. La construcción de la vía ya está terminada... y además de intensa, será fotogénica.",
      length: 3400,
      inversions: 3,
      imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_1440x810/public/media/image/2022/11/batman-parque-warner-montana-rusa-2859693.jpg?itok=fVSXH-oi"
    }
];

const MONGO_URI = process.env.MONGODB_URI

mongoose
    .set('strictQuery', false)
    .connect(MONGO_URI)
    .then(() => {
        return Coaster.collection.drop()                               // vaciar colección
    })
    .then(() => {
        return Coaster.insertMany(coasters)                               // transacción
    })
    .then( data => {
        console.log('Se han creado', data.length, 'coasters')
    })
    .finally(() => {
        mongoose.connection.close()                                 // cierre
    })
    .catch(err => console.log(err))