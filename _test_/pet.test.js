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
    describe('becomes hungry and unfit with age', () => {
        it('increases hunger and reduces fitness as the pet ages', () => {
            const pet = new Pet ('Fido');
            expect(pet.hunger).toEqual(0);
            expect(pet.fitness).toEqual(10);
            pet.growUp();
            expect(pet.hunger).toBe(5);
            expect(pet.fitness).toBe(7);
        });
    });

