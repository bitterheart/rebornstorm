describe("simple test",function(){
    it("pass",function(){
        expect(true).toEqual(true);
    });
    it("fail",function(){
        expect(true).toEqual(false);
    });
});
