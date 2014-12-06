describe("simple test",function(){
    beforeEach(function(){
        browser.get("client/index.html");
    });
    it("pass",function(){
        expect(true).toEqual(true);
    });
    it("fail",function(){
        expect(true).toEqual(false);
    });
    it("touches index.html",function(){
        expect(element(by.css("h1")).getText()).toEqual("Hello World");
    });
});
