export const searchBar = (data, searchedName, type) => {
  if (type === "films") {
    return data.filter((film) =>
      film.title.toLowerCase().includes(searchedName)
    );
  } else {
    return data.filter((character) =>
      character.name.toLowerCase().includes(searchedName)
    );
  }
};
export const releaseOrder = (data, order) => {
  if (order === "firstReleased") {
    data.sort((a, b) => {
      if (a.release_date < b.release_date) {
        return -1;
      }
    });
  } else {
    data.sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1;
      }
    });
  }
  return data;
};
export const alphabeticalOrder = (data, order, type) => {
  if (type === "films") {
    if (order === "alphabeticalAsc") {
      data.sort((a, b) => {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
      });
    } else {
      data.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
      });
    }
  }
  if (type === "other") {
    if (order === "alphabeticalAsc") {
      data.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
      });
    } else {
      data.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      });
    }
  }
  return data;
};
export const scoreOrder = (data) => {
  data.sort((a, b) => {
    if (Number(a.rt_score) > Number(b.rt_score)) {
      return -1;
    }
    if (Number(a.rt_score) < Number(b.rt_score)) {
      return 1;
    }
    return 0;
  });
  return data;
};
export const ageOrder = (data, order) => {
  if (order === "older") {
    data.sort((a, b) => {
      if (Number(a.age) > Number(b.age)) {
        return -1;
      }
    });
  } else if (order === "younger") {
    data.sort((a, b) => {
      if (Number(a.age) < Number(b.age)) {
        return -1;
      }
    });
  }

  return data;
};
export const filter = (data, paramater, condition) => {
  const filtered = data.filter((item) => item[paramater] === condition);
  return filtered;
};
