describe('Boolean Check', () => {
    it('should return truthy', () => {
        const flag = true;
        expect(flag).toBeTruthy();
    }),
    it('should return falsy', () => {
        const flag = false;
        expect(flag).toBeFalsy();
    });
});