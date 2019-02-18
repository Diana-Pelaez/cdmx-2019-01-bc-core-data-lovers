require('../src/data.js');
const dataFile = {
    "PER": {
      "indicators": [{
        "data": {
          "1960": "",
          "1961": "",
          "1962": "",
          "1963": "",
          "1964": "",
          "1965": "",
          "1966": "",
          "1967": "",
          "1968": "",
          "1969": "",
          "1970": "",
          "1971": "",
          "1972": "",
          "1973": "",
          "1974": "",
          "1975": "",
          "1976": "",
          "1977": "",
          "1978": "",
          "1979": "",
          "1980": "",
          "1981": "",
          "1982": "",
          "1983": "",
          "1984": "",
          "1985": "",
          "1986": "",
          "1987": "",
          "1988": "",
          "1989": "",
          "1990": "",
          "1991": "",
          "1992": "",
          "1993": "",
          "1994": "",
          "1995": "",
          "1996": "",
          "1997": "",
          "1998": "",
          "1999": "",
          "2000": "",
          "2001": "",
          "2002": 57.3788986206055,
          "2003": 59.2597007751465,
          "2004": 60.5155982971191,
          "2005": 58.567699432373,
          "2006": 59.5596008300781,
          "2007": 62.5275993347168,
          "2008": 61.5718002319336,
          "2009": 63.0060997009277,
          "2010": 64.4614028930664,
          "2011": 64.3878021240234,
          "2012": 63.0351982116699,
          "2013": 62.2015991210938,
          "2014": 61.209400177002,
          "2015": 62.2141990661621,
          "2016": 61.5542984008789,
          "2017": 61.4822998046875
        },
        "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
      } ]
    }
    }


    describe("WorldBank", () => {
      it("WorldBank is a object", () => {
        expect(typeof window.WorldBank).toBe("object");
      });
    });
describe("WorldBank", ()=>{
  it("WorldBank.dataCountries is a function", () => {
    expect(typeof window.WorldBank.dataCountries).toBe("function");
  });
it ("Filtra por país y por indicador",()=>{
  expect(window.WorldBank.dataCountries(dataFile,"PER","Fuerza laboral con educación intermedia (% del total)")[0]).toEqual(dataFile.PER.indicators[0]);

});
});
describe("WorldBank", ()=>{
  it("WorldBank.percentAndYear is a function", () => {
    expect(typeof window.WorldBank.percentAndYear).toBe("function");
  });
  it ("Muestra año y porcentaje del indicador que selecciona el ususario",()=>{
    expect(window.WorldBank.percentAndYear(dataFile,"PER","Fuerza laboral con educación intermedia (% del total)")[0]).toEqual(dataFile.PER.indicators[0].data);
  });   
  });
  
  describe("WorldBank", ()=>{
    it("WorldBank.sortPercentAndYear is a function", () => {
      expect(typeof window.WorldBank.sortPercentAndYear).toBe("function");
    });
    
  })


    //it('returns `example`', () => {
    //expect(example()).toBe('example');
    //});
    //});

    /*describe ("filter", ()=>{
    it ("is a function", () =>{
      expect (typeof example).toBe("function");
    });

    })*/
