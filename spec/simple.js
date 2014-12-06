describe("simple test",function(){
    it("pass",function(){
        expect(true).toEqual(true);
    });
    it("fail",function(){
        expect(true).toEqual(false);
    });
    it("fails touches index.html",function(){
        expect(element(by.css("h1")).getText()).toEqual("H2ello World");
    });
    it("passes touches index.html",function(){
        expect(element(by.css("h1")).getText()).toEqual("Hello World");
    });
});
