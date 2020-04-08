const heroesData = require('../data/heroes.json')


const heroesController = {

    index: function(req, res){
            res.send(heroesData);
        },

    detalle: function (req, res) {
        // siento que tengo que usar esto req.params.id pero no se dónde 
     
        let heroe = heroesData.filter(function (hero) {
            if (hero.id == req.params.id) {
                return hero
            }
        })
        if (heroe.length == 0) {
            res.send('No existe')
        } else {
            res.send('Hola, mi nombre es ' + heroe[0].nombre + " y soy " + heroe[0].profesion)
        }
    },

    
    detalleBio: function (req, res) {
        
        let heroe = heroesData.filter(function (hero) {
            if (hero.id == req.params.id) {
                return hero
            }
        });
            if (heroe.length == 0) {
                res.send('No encontramos al científico indicado para mostrar su biografía.')
            } else {
                if (req.params.ok != 'ok') {
                    res.send(heroe[0].nombre + '\n\n' + 'Lamento que no desee saber mas de mi')
                } else {
                    res.send(heroe[0].nombre + '\n\n' + heroe[0].resenia)
                }
            }
        
    }
}

module.exports = heroesController ;