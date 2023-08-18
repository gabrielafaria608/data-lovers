import {
  searchBar,
  alphabeticalOrder,
  releaseOrder,
  filter,
  scoreOrder,
  ageOrder,
} from "../src/data.js";

const castle = {
  title: "Castle in the Sky",
  director: "Hayao Miyazaki",
  release_date: 1986,
  people: [{ name: "Lusheeta Toel Ul Laputa", age: "13" }],
  rt_score: "97",
};

const fireflies = {
  title: "Grave of the Fireflies",
  director: "Isao Takahata",
  release_date: 1988,
  people: [{ name: "Seita Yokokawa", age: "15" }],
  rt_score: "92",
};

const marnie = {
  title: "When Marnie Was There",
  director: "Hiromasa Yonebayashi",
  release_date: 2014,
  people: [{ name: "Anna Sasaki", age: "9" }],
  rt_score: "92",
};

const movingCastle = {
  title: "Howl's moving castle",
  director: "Hiroyuki Morita",
  release_date: 2004,
  people: [{ name: "Howl Jenkins Pendragon", age: "27" }],
  rt_score: "99",
};
const testMovies = [fireflies, castle, marnie, movingCastle];
const people = [];
testMovies.forEach((movie) => {
  movie.people.forEach((person) => {
    people.push(person);
  });
});
describe("search by name", () => {
  it("should be a function", () => {
    expect(typeof searchBar).toBe("function");
  });

  it("should filter by search bar", () => {
    const title = "mar";
    expect(searchBar(testMovies, title, "films")).toStrictEqual([marnie]);
  });

  it("should filter by search bar", () => {
    const title = "fireflies";
    expect(searchBar(testMovies, title, "films")).toStrictEqual([fireflies]);
  });

  it("should filter by search bar", () => {
    const title = "castle in the sky";
    expect(searchBar(testMovies, title, "films")).toStrictEqual([castle]);
  });
});

describe("sort films by order", () => {
  it("should be a function", () => {
    expect(typeof alphabeticalOrder).toBe("function");
  });

  it("should sort by AZ", () => {
    const order = alphabeticalOrder(testMovies, "alphabeticalAsc", "films");
    expect(order[0].title).toEqual("Castle in the Sky");
  });

  it("should sort by ZA", () => {
    const order = alphabeticalOrder(testMovies, "alphabeticalDesc", "films");
    expect(order[0].title).toEqual("When Marnie Was There");
  });
});
describe("sort characters by order", () => {
  it("should be a function", () => {
    expect(typeof alphabeticalOrder).toBe("function");
  });

  it("should sort by AZ", () => {
    const order = alphabeticalOrder(people, "alphabeticalAsc", "other");
    expect(order[0].name).toEqual("Anna Sasaki");
  });

  it("should sort by ZA", () => {
    const order = alphabeticalOrder(people, "alphabeticalDesc", "other");
    expect(order[0].name).toEqual("Seita Yokokawa");
  });
});
describe("sort characters by age", () => {
  it("should be a function", () => {
    expect(typeof ageOrder).toBe("function");
  });

  it("should sort by older", () => {
    const order = ageOrder(people, "older");
    expect(order[0].name).toEqual("Howl Jenkins Pendragon");
  });

  it("should sort by younger", () => {
    const order = ageOrder(people, "younger");
    expect(order[0].name).toEqual("Anna Sasaki");
  });
});
describe("sort by release", () => {
  it("should be a function", () => {
    expect(typeof releaseOrder).toBe("function");
  });

  it("should sort by release date - first released", () => {
    const release = releaseOrder(testMovies, "firstReleased");
    expect(release[0].release_date).toEqual(castle.release_date);
  });

  it("should sort by release date - last released", () => {
    const release = releaseOrder(testMovies, "lastReleased");
    expect(release[0].release_date).toEqual(marnie.release_date);
  });
});

describe("sort by released", () => {
  it("should be a function", () => {
    expect(typeof releaseOrder).toBe("function");
  });

  it("should sort by release date - first released", () => {
    const release = releaseOrder(testMovies, "firstReleased");
    expect(release[0].release_date).toEqual(castle.release_date);
  });

  it("should sort by release date - last released", () => {
    const release = releaseOrder(testMovies, "lastReleased");
    expect(release[0].release_date).toEqual(marnie.release_date);
  });
});
describe("sort by score", () => {
  it("should be a function", () => {
    expect(typeof scoreOrder).toBe("function");
  });

  it("should sort by highest score", () => {
    const score = scoreOrder(testMovies);
    expect(score[0].score).toEqual(movingCastle.score);
  });
});

describe("filter", () => {
  it("should be a function", () => {
    expect(typeof filter).toBe("function");
  });

  it("should filter by director", () => {
    expect(filter(testMovies, "director", "Hayao Miyazaki")).toStrictEqual([
      castle,
    ]);
  });
});

describe("search by character", () => {
  it("should filter by character - only some letters", () => {
    const name = "lus";
    const result = searchBar(people, name, "characters");
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual(castle.people[0].name);
  });

  it("should filter by character - full name", () => {
    const name = "seita yokokawa";
    const result = searchBar(people, name, "characters");
    expect(result.length).toEqual(1);
    expect(result[0].name).toEqual(fireflies.people[0].name);
  });
});
