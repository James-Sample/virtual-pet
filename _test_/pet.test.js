
const MAXIMUM_FITNESS = 10;
const HUNGRY = 5;
const UNFIT = 3;
const MAX_AGE = 30;
const Pet = require('../src/pet');
const pet = new Pet('Fido');
const FITNESS = pet.fitness;
const HUNGER = pet.hunger;
const AGE = pet.age;


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        pet;
        expect(pet.name).toEqual('Fido');
    });
    it('sets the age of the pet', () => {
        pet;
        expect(AGE).toBe(0);
    })
});
describe('All methods are below', () => {
        it ('incriments the age by 1', () => {
        pet;
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
        it('increases hunger and reduces fitness as the pet ages', () => {
            const pet = new Pet ('Fido');
            expect(HUNGER).toEqual(0);
            expect(FITNESS).toEqual(MAXIMUM_FITNESS);
            pet.growUp();
            expect(pet.hunger).toBe(5);
            expect(pet.fitness).toBe(7);
        });
        it('walking increases the pets fitness', () => {
           pet;
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
        })
        it('tests if fitness can reach 11', () => {
            pet;
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toBe(MAXIMUM_FITNESS);
        })
        it('decreases hunger level', () => {
            pet;
            pet.hunger = 9;
            pet.feed()
            expect(pet.hunger).toBe(6);
        });
        it('checks hunger cant be less than 0', () => {
            pet;
            pet.hunger = 2;
            pet.feed()    
            expect(pet.hunger).toBe(0);
        });
        it('allows the pet to respond to you', () => {
            pet;
            pet.fitness = UNFIT;
            pet.checkUp();
            expect(pet.checkUp()).toBe('I need a walk')
            pet.hunger = HUNGRY;
            pet.fitness = 4;
            expect(pet.checkUp()).toBe('I am hungry')
            pet.fitness = UNFIT 
            pet.hunger = HUNGRY;
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
            pet.fitness = 4 
            pet.hunger = 4;
            expect(pet.checkUp()).toBe('I feel great!')
        })
        it('checks if the pet is still alive', () => {
            pet;
            expect(pet.isAlive).toBeTruthy;
            pet.fitness = 0;
            expect(pet.isAlive).toBeFalsy;
            pet.hunger = 10;
            expect(pet.isAlive).toBeFalsy
            pet.age = MAX_AGE;
            expect(pet.isAlive).toBeFalsy;
        })
        it('throws an error if the pet is dead', () => {
            pet;
            pet.age = MAX_AGE;
            expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
            expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
            expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
            expect(pet.checkUp()).toBe('Your pet is no longer alive :(');
        }); 
    });

