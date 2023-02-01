const { Recipe, Diet, conn } = require('../../src/db.js');
const { expect } = require('chai');


describe('Recipe model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Recipe.sync({ force: true }));
    describe('title', () => {
      it('should throw an error if title is null', (done) => {
        Recipe.create({})
          .then(() => done(new Error('It requires a valid title')))
          .catch(() => done());
      });
      it('should work when its a valid title', () => {
        Recipe.create({ title: 'Milanesa a la napolitana', resume: 'Este es el resume' });
      });
    });
  });
});

describe('Model diets', ()=>{
  before(()=>conn.authenticate()
    .catch((err)=>{
      console.error('No se pudo conectar con la base de datos: ', err);
    })
  )});

describe('validaciones',()=>{
  beforeEach(()=>Diet.sync({force:true}));
  describe('name',()=>{
    it('Debe dar error si name es null', (done)=>{
      Diet.create({})
      .then(()=> done(new Error('Se requiere un name valido')))
      .catch(()=>done())
    });
    it('Deberia funcionar bien si name es valido', ()=>{
      Diet.create({name: 'Vegetariana'})
    })
  });
});