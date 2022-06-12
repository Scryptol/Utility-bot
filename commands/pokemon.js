const Discord = require('discord.js');

const moves = [
    Pound = [
        Name = 'Pound',
        Type = 'Normal',
        Power = 40,
        Accuracy = 100
    ],
    KarateChop = [
        Name = 'Karate Chop',
        Type = 'Fighting',
        Power = 50,
        Accuracy = 100
    ],
    DoubleSlap = [
        Name = 'Double Slap',
        Type = 'Normal',
        Power = 15,
        Accuracy = 85
    ],
    CometPunch = [
        Name = 'Comet Punch',
        Type = 'Normal',
        Power = 18,
        Accuracy = 85
    ],
    MegaPunch = [
        Name = 'Mega Punch',
        Type = 'Normal',
        Power = 80,
        Accuracy = 85
    ],
    PayDay = [
        Name = 'Pay Day',
        Type = 'Normal',
        Power = 40,
        Accuracy = 100
    ],
    FirePunch = [
        Name = 'Fire Punch',
        Type = 'Fire',
        Power = 75,
        Accuracy = 100
    ],
    IcePunch = [
        Name = 'Ice Punch',
        Type = 'Ice',
        Power = 75,
        Accuracy = 100
    ],
    ThunderPunch = [
        Name = 'Thunder Punch',
        Type = 'Electric',
        Power = 75,
        Accuracy = 100
    ],
    Scratch = [
        Name = 'Scratch',
        Type = 'Normal',
        Power = 40,
        Accuracy = 100
    ],
    ViseGrip = [
        Name = 'Vise Grip',
        Type = 'Normal',
        Power = 55,
        Accuracy = 100
    ],
    Guillotine = [
        Name = 'Guillotine',
        Type = 'Normal',
        Power = 95,
        Accuracy = 30
    ],
    RazorWind = [
        Name = 'Razor Wind',
        Type = 'Normal',
        Power = 80,
        Accuracy = 100
    ],
    SwordsDance = [
        Name = 'Swords Dance',
        Type = 'Normal',
        Power = 75,
        Accuracy = 90
    ],
    Cut = [
        Name = 'Cut',
        Type = 'Normal',
        Power = 30,
        Accuracy = 80
    ],
]

const pokemons = [
    [
        Name = 'Bulbasaur',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/bulbasaur.png', 'bulbasaur.png'),
        EvolveLevel = 18,
        Id = 0,
        EvolutionId = 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Ivysaur',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/ivysaur.png', 'ivysaur.png'),
        EvolveLevel = 30,
        Id = 1,
        EvolutionId = 2,
        EvolutionNum = 2,
    ],
    [
        Name = 'Venusaur',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/venusaur.png', 'venusaur.png'),
        EvolveLevel = 500,
        Id = 2,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Charmander',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/charmander.png', 'charmander.png'),
        EvolveLevel = 18,
        Id = 3,
        EvolutionId = 4,
        EvolutionNum = 1,
    ],
    [
        Name = 'Charmeleon',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/charmeleon.png', 'charmeleon.png'),
        EvolveLevel = 30,
        Id = 4,
        EvolutionId = 5,
        EvolutionNum = 2,
    ],
    [
        Name = 'Charizard',
        Type = 'Fire + Flying',
        Sprite = new Discord.MessageAttachment('./images/charizard.png', 'charizard.png'),
        EvolveLevel = 500,
        Id = 5,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Squirtle',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/squirtle.png', 'squirtle.png'),
        EvolveLevel = 15,
        Id = 6,
        EvolutionId = 7,
        EvolutionNum = 1,
    ],
    [
        Name = 'Wartortle',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/wartortle.png', 'wartortle.png'),
        EvolveLevel = 27,
        Id = 7,
        EvolutionId = 8,
        EvolutionNum = 2,
    ],
    [
        Name = 'Blastoise',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/blastoise.png', 'blastoise.png'),
        EvolveLevel = 16,
        Id = 8,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Caterpie',
        Type = 'Bug',
        Sprite = new Discord.MessageAttachment('./images/caterpie.png', 'caterpie.png'),
        EvolveLevel = 12,
        Id = 9,
        EvolutionId = 10,
        EvolutionNum = 1,
    ],
    [
        Name = 'Metapod',
        Type = 'Bug',
        Sprite = new Discord.MessageAttachment('./images/metapod.png', 'metapod.png'),
        EvolveLevel = 20,
        Id = 10,
        EvolutionId = 11,
        EvolutionNum = 2,
    ],
    [
        Name = 'Butterfree',
        Type = 'Bug + Flying',
        Sprite = new Discord.MessageAttachment('./images/butterfree.png', 'butterfree.png'),
        EvolveLevel = 500,
        Id = 11,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Weedle',
        Type = 'Bug + Poison',
        Sprite = new Discord.MessageAttachment('./images/weedle.png', 'weedle.png'),
        EvolveLevel = 7,
        Id = 12,
        EvolutionId = 13,
        EvolutionNum = 1,
    ],
    [
        Name = 'Kakuna',
        Type = 'Bug + Poison',
        Sprite = new Discord.MessageAttachment('./images/kakuna.png', 'kakuna.png'),
        EvolveLevel = 12,
        Id = 13,
        EvolutionId = 14,
        EvolutionNum = 2,
    ],
    [
        Name = 'Beedrill',
        Type = 'Bug + Poison',
        Sprite = new Discord.MessageAttachment('./images/beedrill.png', 'beedrill.png'),
        EvolveLevel = 500,
        Id = 14,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Pidgey',
        Type = 'Normal + Flying',
        Sprite = new Discord.MessageAttachment('./images/pidgey.png', 'pidgey.png'),
        EvolveLevel = 10,
        Id = 15,
        EvolutionId = 16,
        EvolutionNum = 1,
    ],
    [
        Name = 'Pidgeotto',
        Type = 'Normal + Flying',
        Sprite = new Discord.MessageAttachment('./images/pidgeotto.png', 'pidgeotto.png'),
        EvolveLevel = 17,
        Id = 16,
        EvolutionId = 17,
        EvolutionNum = 2,
    ],
    [
        Name = 'Pidgeot',
        Type = 'Normal + Flying',
        Sprite = new Discord.MessageAttachment('./images/pidgeot.png', 'pidgeot.png'),
        EvolveLevel = 500,
        Id = 17,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Rattata',
        Type = 'Normal',
        Sprite = new Discord.MessageAttachment('./images/rattata.png', 'rattata.png'),
        EvolveLevel = 15,
        Id = 18,
        EvolutionId = 19,
        EvolutionNum = 1,
    ],
    [
        Name = 'Raticate',
        Type = 'Normal',
        Sprite = new Discord.MessageAttachment('./images/raticate.png', 'raticate.png'),
        EvolveLevel = 500,
        Id = 19,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Spearow',
        Type = 'Normal + Flying',
        Sprite = new Discord.MessageAttachment('./images/spearow.png', 'spearow.png'),
        EvolveLevel = 500,
        Id = 20,
        EvolutionId = 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Ekans',
        Type = 'Poison',
        Sprite = new Discord.MessageAttachment('./images/ekans.png', 'ekans.png'),
        EvolveLevel = 20,
        Id = 21,
        EvolutionId = 22,
        EvolutionNum = 1,
    ],
    [
        Name = 'Arbok',
        Type = 'Poison',
        Sprite = new Discord.MessageAttachment('./images/arbok.png', 'arbok.png'),
        EvolveLevel = 500,
        Id = 22,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Pikachu',
        Type = 'Electric',
        Sprite = new Discord.MessageAttachment('./images/pikachu.png', 'pikachu.png'),
        EvolveLevel = 20,
        Id = 23,
        EvolutionId = 24,
        EvolutionNum = 1,
    ],
    [
        Name = 'Raichu',
        Type = 'Electric',
        Sprite = new Discord.MessageAttachment('./images/raichu.png', 'raichu.png'),
        EvolveLevel = 500,
        Id = 24,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Sandshrew',
        Type = 'Ground',
        Sprite = new Discord.MessageAttachment('./images/sandshrew.png', 'sandshrew.png'),
        EvolveLevel = 500,
        Id = 25,
        EvolutionId = 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Nidoran',
        Type = 'Poison',
        Sprite = new Discord.MessageAttachment('./images/nidoran.png', 'nidoran.png'),
        EvolveLevel = 9,
        Id = 26,
        EvolutionId = 27,
        EvolutionNum = 1,
    ],
    [
        Name = 'Nidorino',
        Type = 'Poison',
        Sprite = new Discord.MessageAttachment('./images/nidorino.png', 'nidorino.png'),
        EvolveLevel = 22,
        Id = 27,
        EvolutionId = 28,
        EvolutionNum = 2,
    ],
    [
        Name = 'Nidoking',
        Type = 'Poison + Ground',
        Sprite = new Discord.MessageAttachment('./images/nidoking.png', 'nidoking.png'),
        EvolveLevel = 500,
        Id = 28,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Clefairy',
        Type = 'Fairy',
        Sprite = new Discord.MessageAttachment('./images/clefairy.png', 'clefairy.png'),
        EvolveLevel = 20,
        Id = 29,
        EvolutionId = 30,
        EvolutionNum = 1,
    ],
    [
        Name = 'Clefable',
        Type = 'Fairy',
        Sprite = new Discord.MessageAttachment('./images/clefable.png', 'clefable.png'),
        EvolveLevel = 500,
        Id = 30,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Vulpix',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/vulpix.png', 'vulpix.png'),
        EvolveLevel = 15,
        Id = 31,
        EvolutionId = 32,
        EvolutionNum = 1,
    ],
    [
        Name = 'Ninetales',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/ninetales.png', 'ninetales.png'),
        EvolveLevel = 500,
        Id = 32,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Jigglypuff',
        Type = 'Normal + Fairy',
        Sprite = new Discord.MessageAttachment('./images/jigglypuff.png', 'jigglypuff.png'),
        EvolveLevel = 15,
        Id = 33,
        EvolutionId = 34,
        EvolutionNum = 1,
    ],
    [
        Name = 'Wigglytuff',
        Type = 'Normal + Fairy',
        Sprite = new Discord.MessageAttachment('./images/wigglytuff.png', 'wigglytuff.png'),
        EvolveLevel = 500,
        Id = 34,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Zubat',
        Type = 'Poison + Flying',
        Sprite = new Discord.MessageAttachment('./images/zubat.png', 'zubat.png'),
        EvolveLevel = 16,
        Id = 35,
        EvolutionId = 36,
        EvolutionNum = 1,
    ],
    [
        Name = 'Golbat',
        Type = 'Poison + Flying',
        Sprite = new Discord.MessageAttachment('./images/golbat.png', 'golbat.png'),
        EvolveLevel = 500,
        Id = 36,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Oddish',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/oddish.png', 'oddish.png'),
        EvolveLevel = 16,
        Id = 37,
        EvolutionId = 38,
        EvolutionNum = 1,
    ],
    [
        Name = 'Gloom',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/gloom.png', 'gloom.png'),
        EvolveLevel = 25,
        Id = 38,
        EvolutionId = 39,
        EvolutionNum = 2,
    ],
    [
        Name = 'Vileplume',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment('./images/vileplume.png', 'vileplume.png'),
        EvolveLevel = 500,
        Id = 39,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Paras',
        Type = 'Bug + Grass',
        Sprite = new Discord.MessageAttachment('./images/paras.png', 'paras.png'),
        EvolveLevel = 22,
        Id = 40,
        EvolutionId = 41,
        EvolutionNum = 1,
    ],
    [
        Name = 'Parasect',
        Type = 'Bug + Grass',
        Sprite = new Discord.MessageAttachment('./images/parasect.png', 'parasect.png'),
        EvolveLevel = 500,
        Id = 41,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Venonat',
        Type = 'Bug + Poison',
        Sprite = new Discord.MessageAttachment('./images/venonat.png', 'venonat.png'),
        EvolveLevel = 17,
        Id = 42,
        EvolutionId = 43,
        EvolutionNum = 1,
    ],
    [
        Name = 'Venomoth',
        Type = 'Bug + Poison',
        Sprite = new Discord.MessageAttachment('./images/venomoth.png', 'venomoth.png'),
        EvolveLevel = 500,
        Id = 43,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Diglett',
        Type = 'Ground',
        Sprite = new Discord.MessageAttachment('./images/diglett.png', 'diglett.png'),
        EvolveLevel = 21,
        Id = 44,
        EvolutionId = 45,
        EvolutionNum = 1,
    ],
    [
        Name = 'Dugtrio',
        Type = 'Ground',
        Sprite = new Discord.MessageAttachment('./images/dugtrio.png', 'dugtrio.png'),
        EvolveLevel = 500,
        Id = 45,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Meowth',
        Type = 'Normal',
        Sprite = new Discord.MessageAttachment('./images/meowth.png', 'meowth.png'),
        EvolveLevel = 18,
        Id = 46,
        EvolutionId = 47,
        EvolutionNum = 1,
    ],
    [
        Name = 'Persian',
        Type = 'Normal',
        Sprite = new Discord.MessageAttachment('./images/persian.png', 'persian.png'),
        EvolveLevel = 500,
        Id = 47,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Psyduck',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/psyduck.png', 'psyduck.png'),
        EvolveLevel = 26,
        Id = 48,
        EvolutionId = 49,
        EvolutionNum = 1,
    ],
    [
        Name = 'Golduck',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/golduck.png', 'golduck.png'),
        EvolveLevel = 500,
        Id = 49,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Mankey',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment('./images/mankey.png', 'mankey.png'),
        EvolveLevel = 23,
        Id = 50,
        EvolutionId = 51,
        EvolutionNum = 1,
    ],
    [
        Name = 'Primeape',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment('./images/primeape.png', 'primeape.png'),
        EvolveLevel = 500,
        Id = 51,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Growlithe',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/growlithe.png', 'growlithe.png'),
        EvolveLevel = 23,
        Id = 52,
        EvolutionId = 53,
        EvolutionNum = 1,
    ],
    [
        Name = 'Arcanine',
        Type = 'Fire',
        Sprite = new Discord.MessageAttachment('./images/arcanine.png', 'arcanine.png'),
        EvolveLevel = 500,
        Id = 53,
        EvolutionId = 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Poliwag',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/poliwag.png', 'poliwag.png'),
        EvolveLevel = 15,
        Id = 54,
        EvolutionId = 55,
        EvolutionNum = 1,
    ],
    [
        Name = 'Poliwhirl',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/poliwhirl.png', 'poliwhirl.png'),
        EvolveLevel = 27,
        Id = 55,
        EvolutionId = 56,
        EvolutionNum = 2,
    ],
    [
        Name = 'Poliwrath',
        Type = 'Water',
        Sprite = new Discord.MessageAttachment('./images/poliwrath.png', 'poliwrath.png'),
        EvolveLevel = 500,
        Id = 56,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Abra',
        Type = 'Psychic',
        Sprite = new Discord.MessageAttachment('./images/abra.png', 'abra.png'),
        EvolveLevel = 16,
        Id = 57,
        EvolutionId = 58,
        EvolutionNum = 1,
    ],
    [
        Name = 'Kadabra',
        Type = 'Psychic',
        Sprite = new Discord.MessageAttachment('./images/kadabra.png', 'kadabra.png'),
        EvolveLevel = 25,
        Id = 58,
        EvolutionId = 59,
        EvolutionNum = 2,
    ],
    [
        Name = 'Alakazam',
        Type = 'Psychic',
        Sprite = new Discord.MessageAttachment('./images/alakazam.png', 'alakazam.png'),
        EvolveLevel = 500,
        Id = 59,
        EvolutionId = 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Machop',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment('./images/machop.png', 'machop.png'),
        EvolveLevel = 25,
        Id = 60,
        EvolutionId = 61,
        EvolutionNum = 2,
    ],
    [
        Name = 'Machoke',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 36,
        Id = 61,
        EvolutionId = Id + 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Machamp',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 500,
        Id = 62,
        EvolutionId = Id + 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Bellsprout',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 14,
        Id = 63,
        EvolutionId = Id + 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Weepinbell',
        Type = 'Grass + Poison',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 25,
        Id = 64,
        EvolutionId = Id + 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Victreebell',
        Type = 'Fighting',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 500,
        Id = 65,
        EvolutionId = Id + 1,
        EvolutionNum = 3,
    ],
    [
        Name = 'Tentacool',
        Type = 'Water + Poison',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 17,
        Id = 66,
        EvolutionId = Id + 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Tentacruel',
        Type = 'Water + Poison',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 500,
        Id = 67,
        EvolutionId = Id + 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Geodude',
        Type = 'Rock + Ground',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 18,
        Id = 68,
        EvolutionId = Id + 1,
        EvolutionNum = 1,
    ],
    [
        Name = 'Graveler',
        Type = 'Rock + Ground',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 26,
        Id = 69,
        EvolutionId = Id + 1,
        EvolutionNum = 2,
    ],
    [
        Name = 'Golem',
        Type = 'Rock + Ground',
        Sprite = new Discord.MessageAttachment(`./images/${Name.toLowerCase()}.png`, `${Name.toLowerCase()}.png`),
        EvolveLevel = 500,
        Id = 70,
        EvolutionId = Id + 1,
        EvolutionNum = 3,
    ],
]

const Genders = [
    'Male ♂️',
    'Female ♀️'
]

module.exports.givePokemon = async(pokemonName, pokemonGender, pokemonLevel, model, authorId, starter) => {
    console.log(authorId)

    console.log("giving pokemon...")

    const pokemonArray = [
        Name = pokemonName,
        Gender = pokemonGender,
        Level = pokemonLevel,
        isStarter = starter,
        MaxHealth = Math.floor((100 * Level / (Level + 1)) * (1.2 + Level / (Level + 3))),
        Health = MaxHealth
    ]

    console.log(pokemonArray)

    const response = await model.findOneAndUpdate({
        userID: authorId,
    }, {
        $push: {
            pokemonsOwned: pokemonArray
        }
    })
}

module.exports.removePokemon = async(authorId, pokemonId, model, data) => {
    console.log(authorId)

    let deletedPokemon = data.pokemonsOwned.splice(pokemonId - 1, 1)

    const response = await model.findOneAndUpdate({
        userID: authorId,
    }, {
        $set: {
            pokemonsOwned: data.pokemonsOwned
        }
    })
}

module.exports.levelUpPokemon = async(authorId, pokemonToLevel, model, data) => {
    let i = 0
    let pokemonToLevelId

    data.pokemonsOwned.forEach(pokemon => {
        i++;

        if(pokemon[0] == pokemonToLevel[0]) {
            pokemonToLevelId = i - 1;
        }
    })

    data.pokemonsOwned[pokemonToLevelId][2] = data.pokemonsOwned[pokemonToLevelId][2] + 1;

    const response = await model.findOneAndUpdate({
        userID: authorId,
    }, 
    {
        $set: {
            pokemonsOwned: data.pokemonsOwned
        }
    })
}

module.exports.execute = async(client, message, args, profileModel, profileData, authorId) => {
    console.log(authorId)

    let newEmbed = new Discord.MessageEmbed()

    if(args[0] == 'starter') {
        if(profileData.ownsStarter == 0) {
            const filter = message => {
                return message.content === 'bulbasaur' || message.content === 'charmander' || message.content === 'squirtle' || message.content === 'pikachu'
            }

            const profOakSprite = new Discord.MessageAttachment('./images/profOak.png', 'profOak.png')
            const squirtleSprite = new Discord.MessageAttachment('./images/squirtle.png', 'squirtle.png')
            const bulbasaurSprite = new Discord.MessageAttachment('./images/bulbasaur.png', 'bulbasaur.png')
            const pikachuSprite = new Discord.MessageAttachment('./images/pikachu.png', 'pikachu.png')
            const charmanderSprite = new Discord.MessageAttachment('./images/charmander.png', 'charmander.png')

            newEmbed = newEmbed.setTitle('Choose a starter!')
            .setDescription('Your possible choices for starters are: `bulbasaur, squirtle, charmander, pikachu.` \n Which one will you choose?')
            .setFooter('You can only choose this once, so make sure you choose wisely!')
            .setColor("GREEN")
            .setImage(`attachment://profOak.png`)

            const response = await profileModel.findOneAndUpdate({
                userID: authorId,
            }, {
                $inc: {
                    ownsStarter: 1 
                }
            })

            const gender = Genders[Math.floor(Math.random() * Genders.length)]

            message.channel.send({embeds: [newEmbed], files: [profOakSprite]}, {fetchReply: true})
            .then(() => {
                message.channel.awaitMessages({filter, max: 1, time: 30000, errors: ['time']})
                .then(collected => {
                    if(collected.first().author != message.author) return;

                    if(collected.first().content == 'bulbasaur') {
                        newEmbed = newEmbed.setTitle('Good choice!')
                        .setDescription(`You chose Bulbasaur, the Grass and Poison type Pokemon!`)
                        .setColor("GREEN")
                        .setFooter("Well done on obtaining your first pokemon! Keep this one by your side all the way through your journey!")
                        .setImage(`attachment://bulbasaur.png`)

                        this.givePokemon('Bulbasaur', gender, 5, profileModel, authorId, true)

                        message.channel.send({embeds: [newEmbed], files: [bulbasaurSprite]})
                    } else if(collected.first().content == 'squirtle') {
                        newEmbed = newEmbed.setTitle('Good choice!')
                        .setDescription(`You chose Squirtle, the Water type Pokemon!`)
                        .setColor("GREEN")
                        .setFooter("Well done on obtaining your first pokemon! Keep this one by your side all the way through your journey!")
                        .setImage(`attachment://squirtle.png`)

                        this.givePokemon('Squirtle', gender, 5, profileModel, authorId, true)

                        message.channel.send({embeds: [newEmbed], files: [squirtleSprite]})
                    } else if(collected.first().content == 'charmander') {
                        newEmbed = newEmbed.setTitle('Good choice!')
                        .setDescription(`You chose Charmander, the Fire type Pokemon!`)
                        .setColor("GREEN")
                        .setFooter("Well done on obtaining your first pokemon! Keep this one by your side all the way through your journey!")
                        .setImage(`attachment://charmander.png`)

                        this.givePokemon('Charmander', gender, 5, profileModel, authorId, true)

                        message.channel.send({embeds: [newEmbed], files: [charmanderSprite]})
                    }else if(collected.first().content == 'pikachu') {
                        newEmbed = newEmbed.setTitle('Good choice!')
                        .setDescription(`You chose Pikachu, the Electric type Pokemon!`)
                        .setColor("GREEN")
                        .setFooter("Well done on obtaining your first pokemon! Keep this one by your side all the way through your journey!")
                        .setImage(`attachment://pikachu.png`)

                        this.givePokemon('Pikachu', gender, 5, profileModel, authorId, true)

                        message.channel.send({embeds: [newEmbed], files: [pikachuSprite]})
                    }
                })
                .catch(collected => {
                    message.reply("Timed out! You didn't choose a starter!")
                })
            })
        } else {
            newEmbed = newEmbed.setTitle('You already own a starter!')
            .setDescription("You can't get two starters! That's greedy!")
            .setColor("DARK_RED")
            .setFooter(null)
            .setImage(null)

            return message.channel.send({embeds: [newEmbed]})
        }
    } else if(args[0] == 'find') {
        let newEmbed = new Discord.MessageEmbed()
        .setTitle("You're not ready yet!")
        .setDescription("You need a starter pokemon before you can search in the wild!")
        .setFooter('Use ".pokemon starter" to choose a starter pokemon!')
        .setColor("DARK_RED");

        if(profileData.ownsStarter == 0) {
            let embed = new Discord.MessageEmbed()
            .setTitle("You're not ready yet!")
            .setDescription("You need a starter pokemon before you can search in the wild!")
            .setFooter('Use ".pokemon starter" to choose a starter pokemon!')
            .setColor("DARK_RED");

            return message.channel.send({embeds: [embed]})
        }

        if(profileData.pokemonsOwned.length >= 6) {
            let embed = new Discord.MessageEmbed()
            .setTitle("You already have 6 pokemon!")
            .setDescription("You can only have 6 pokemon at one time!")
            .setFooter('Use ".pokemon release" to release one of your pokemon!')
            .setColor("DARK_RED");

            return message.channel.send({embeds: [embed]})
        }

        const filter = message => {
            return message.content.toLowerCase() === 'y' || message.content === 'n' || message.content == '.pokemon find'
        }

        let firstEvoPokemons = []

        pokemons.forEach(pokemonInArray => {
            if(pokemonInArray[6] == 1) {
                firstEvoPokemons.push(pokemonInArray);
            }
        })

        const level = Math.floor(Math.random() * 6 + 1)
        const pokemon = firstEvoPokemons[Math.floor(Math.random() * [firstEvoPokemons.length])]
        const gender = Genders[Math.floor(Math.random() * Genders.length)]

        newEmbed = newEmbed.setTitle(`You ran into a Pokemon! \n Level ${level} ${pokemon[0]}`)
        .addField("Type: ", pokemon[1])
        .addField("Gender: ", gender)
        .setImage(`attachment://${pokemon[0].toLowerCase()}.png`)
        .setFooter('Would you like to use a pokeball to try and catch this pokemon? Say "y" or "n"')
        .setColor("RANDOM")

        message.channel.send({embeds: [newEmbed], files: [pokemon[2]]}, {fetchReply: true})
        .then(() => {
            message.channel.awaitMessages({filter, max: 1, time: 30000, errors: ['time']})
            .then(collected => {
                if(collected.first().author != message.author) return;

                if(collected.first().content == 'n') {
                    let embed = new Discord.MessageEmbed()
                    .setTitle(`You fled the battle and didn't catch ${pokemon[0]}!`)
                    .setDescription('Your inventory remains the same.')
                    .setColor("DARK_RED")

                    return message.channel.send({embeds: [embed]})
                }

                const randomNumber = Math.floor(Math.random() * 5)
                let successful = false;

                if(randomNumber < 0) {
                    successful = false;
                } else {
                    successful = true;
                }

                const successfulTitles = [
                    'Gotcha! ',
                    "Let's go!",
                    'Success!',
                    `${pokemon[0]} was caught!`,
                    'Good job!'
                ]

                const unsuccessfulTitles = [
                    'Oh well!',
                    'So close!',
                    "That's unfortunate!",
                    `You failed to catch ${pokemon[0]}!`,
                    'Oh, man!',
                    'Maybe next time!'
                ]

                if(successful == true) {
                    console.log("test123debug")

                    newEmbed = newEmbed.setTitle(successfulTitles[Math.floor(Math.random() * successfulTitles.length)])
                    .setDescription(`Congratulations, ${message.author.tag}! You now own ${pokemon[0]}!`)
                    .setImage(`attachment://${pokemon[0].toLowerCase()}.png`)
                    .setFooter('Use ".pokemon inventory" to see what pokemon you own!')
                    .setColor("GREEN")

                    let embedNew = new Discord.MessageEmbed();

                    const pokemonToLevelUp = profileData.pokemonsOwned[Math.floor(Math.random() * profileData.pokemonsOwned.length)]

                    let ogPokemon = null;

                    pokemons.forEach(pokemonInPokemonsArray => {
                        if(pokemonInPokemonsArray[0] == pokemonToLevelUp[0]) {
                            ogPokemon = pokemonInPokemonsArray;
                        
                            console.log("test123debug")
                        }
                    })

                    const evolveLevelForPokemon = ogPokemon[3];
                    const evolvePokemonId = ogPokemon[5];

                    let i = 0;
                    let pokemonToLevelUpId = 0

                    profileData.pokemonsOwned.forEach(pokemonInPokemons => {
                        i = i + 1;

                        if(pokemonInPokemons[0] == pokemonToLevelUp[0]) {
                            pokemonToLevelUpId = i;
                        }
                    });

                    this.levelUpPokemon(authorId, pokemonToLevelUp, profileModel, profileData)

                    console.log(`${pokemonToLevelUp[0]}'s level is ${pokemonToLevelUp[2]}`)
                    console.log(pokemonToLevelUp)

                    embedNew = embedNew.setTitle(`${pokemonToLevelUp[0]} has leveled up!`)
                    .setDescription(`${pokemonToLevelUp[0]} has leveled up to level ${pokemonToLevelUp[2]}!`)
                    .setColor("GREEN")
                    .setFooter(`Keep leveling up this pokemon!`)

                    console.log(pokemonToLevelUp[2])
                    console.log(evolveLevelForPokemon)

                    this.givePokemon(pokemon[0], gender, level, profileModel, authorId, false)

                    if(pokemonToLevelUp[2] >= evolveLevelForPokemon) {
                        const pokemonToEvolveTo = pokemons[evolvePokemonId];

                        const pokemonToEvolve = pokemons[pokemonToLevelUpId]
                        const pokemonToGive = pokemonToEvolveTo
                        const pokemonToGiveName = pokemonToGive[0]

                        console.log(pokemonToLevelUpId)

                        embedNew = embedNew.setTitle(`${pokemonToLevelUp[0]} has evolved!`)
                        .setDescription(`${pokemonToLevelUp[0]} has evolved into ${pokemonToGive[0]}!`)
                        .setColor("GREEN")
                        .setFooter(`Congratulations!`)

                        console.log("exchanging pokemon....")

                        this.givePokemon(pokemonToGiveName, pokemonToLevelUp[1], pokemonToLevelUp[2], profileModel, authorId, profileData)

                        this.removePokemon(authorId, pokemonToLevelUpId - 1, profileModel, profileData)

                        console.log("removed pokemon...")

                        console.log(pokemonToGiveName)
                    }

                    message.channel.send({embeds: [embedNew]})
                } else if(successful == false) {
                    newEmbed = newEmbed.setTitle(unsuccessfulTitles[Math.floor(Math.random() * unsuccessfulTitles.length)])
                    .setDescription(`Unlucky! You failed to catch ${pokemon[0]}!`)
                    .setImage(`attachment://${pokemon[0].toLowerCase()}.png`)
                    .setFooter('Use ".pokemon inventory" to see what pokemon you own!')
                    .setColor("DARK_RED")
                }

                message.channel.send({embeds: [newEmbed], files: [pokemon[2]]})
            })
            .catch(collected => {
                message.reply('Timed out! You did not say "y" or "n"!')
            })
        })
    } else if(args[0] == 'inventory') {
        let newEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Pokemon`)

        profileData.pokemonsOwned.forEach(pokemon => {
            newEmbed = newEmbed.addField(pokemon[0], `Level: ${pokemon[2]}, Gender: ${pokemon[1]}`)
        });

        newEmbed = newEmbed.setFooter(`${message.author.tag} owns ${profileData.pokemonsOwned.length} pokemon!`)
        .setColor('GREEN')
        .setDescription('Catch your own pokemon by using ".pokemon find", or get a starter using ".pokemon starter"!')

        return message.channel.send({embeds: [newEmbed]})
    } else if(args[0] == 'release') {
        if(!args[1]) {
            let embed = new Discord.MessageEmbed()
            .setTitle("Which one?")
            .setDescription("Please enter the name of a valid pokemon that you own!")
            .setColor("DARK_RED")

            return message.channel.send({embeds: [embed]})
        }

        let correctPokemon = false;
        let pokemonToReleaseId = null;

        let i = 0;

        let pokemonItem1 = null;
        let isStarter = false;

        profileData.pokemonsOwned.forEach(pokemonItem => {
            i = i + 1;

            console.log(pokemonItem)

            if(pokemonItem[0].toLowerCase() == args[1].toLowerCase()) {
                pokemonItem1 = pokemonItem;

                if(pokemonItem[3] == true) {
                    isStarter = true;
                }
                console.log("correct pokemon")

                pokemonToReleaseId = i
                correctPokemon = true;
                
            } else {
                console.log("incorrect pokemon")
            }
        })

        if(isStarter) {
            let newEmbed = new Discord.MessageEmbed()
            .setTitle("You need to keep this one!")
            .setDescription("You can't release your starter pokemon back into the wild!")
            .setColor("DARK_RED")
            .setFooter('You can get another starter by doing ".pokemon buystarter"!')
    
            return message.channel.send({embeds: [newEmbed]})
        }

        if(correctPokemon) {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Successfully released ${pokemonItem1[0]} back into the wild!`)
            .setDescription(`You no longer own ${pokemonItem1[0]}`)
            .setColor("GREEN")

            this.removePokemon(authorId, pokemonToReleaseId, profileModel, profileData)

            message.channel.send({embeds: [embed]})
        } else {
            let embed = new Discord.MessageEmbed()
            .setTitle(`Come on now!`)
            .setDescription(`${args[1]} is not a valid pokemon that you own!`)
            .setColor("DARK_RED")
 
            message.channel.send({embeds: [embed]})
        }
    }
}

module.exports.config = {
    name: 'pokemon',
    description: 'Use pokemon commands! All commands are: starter, find',
    cooldown: 0,
    category: 'Fun'
}