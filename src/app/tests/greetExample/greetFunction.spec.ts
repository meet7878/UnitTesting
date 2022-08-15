import{greet} from "./greetFunction";
    describe('greet function',()=>{
        it('abcd',()=>{
            const expectedName = "Testing.ISM";
            const result = greet(expectedName);
            //greet will return hi Testing.ISM
            expect(result).toContain(expectedName);
        });
    });