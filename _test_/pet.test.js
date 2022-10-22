
const MAXIMUM_FITNESS = 10;
const HUNGRY = 5;
const UNFIT = 3;
const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('sets the age of the pet', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
    })
});
    describe('growUp', () => {
        it ('incriments the age by 1', () => {
        const pet = new Pet ('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
});
    describe('becomes hungry and unfit with aging', () => {
        it('increases hunger and reduces fitness as the pet ages', () => {
            const pet = new Pet ('Fido');
            expect(pet.hunger).toEqual(0);
            expect(pet.fitness).toEqual(MAXIMUM_FITNESS);
            pet.growUp();
            expect(pet.hunger).toBe(5);
            expect(pet.fitness).toBe(7);
        });
    })
    describe('walking to improve fitness', () => {
        it('walking increases the pets fitness', () => {
            const pet = new Pet ('Fido');
            pet.fitness = 4;
            pet.walk();
            expect(pet.fitness).toEqual(8);
        })
        it('tests if fitness can reach 11', () => {
            const pet = new Pet ('Fido');
            pet.fitness = 8;
            pet.walk();
            expect(pet.fitness).toBe(MAXIMUM_FITNESS);
        })
    })
    describe('pet getting hungry', () => {
        it('decreases hunger level', () => {
            const pet = new Pet('Fido');
            pet.hunger = 10;
            pet.feed()
            expect(pet.hunger).toBe(7);
        });
        it('checks hunger cant be less than 0', () => {
                const pet = new Pet('Fido');
                pet.hunger = 2;
                pet.feed()    
            expect(pet.hunger).toBe(0);
        });
        it('allows the pet to respond to you', () => {
            const pet = new Pet('Fido');
            pet.fitness = 3;
            pet.checkUp();
            expect(pet.checkUp()).toBe('I need a walk')
            pet.hunger = 5;
            pet.fitness = 4;
            expect(pet.checkUp()).toBe('I am hungry')
            pet.fitness = 3 
            pet.hunger = 5;
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
            pet.fitness = 4 
            pet.hunger = 4;
            expect(pet.checkUp()).toBe('I feel great!')
        })  
    });

