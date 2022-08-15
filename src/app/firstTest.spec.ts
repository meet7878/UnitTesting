beforeAll(()=>{
    console.log("This is before all");
});

afterAll(()=>{
    console.log("This is after all");
});

beforeEach(()=>{
    console.log("This is before each");
});

afterEach(()=>{
    console.log("This is after each");
});
xdescribe('First Test Suite',()=>{
    it("first test",()=>{
        console.log("This is First test");
        expect(1+1).toEqual(2);
    });
    it("second test", ()=>{
        console.log("This is second test");
        expect(1-1).toEqual(0);
    });
});