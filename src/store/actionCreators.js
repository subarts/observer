
export function bondsAdd(bonds) {
  return  { type: "ADDBONDS", payload:{ bonds: [...bonds]} } ;
}
export function searchBond(value) {
  return { type: "SEARCHBONDS",searchQuerys: value  }
};
export function selectedSort(value) {
  return { type: "SELECTEDSORT",selectSort: value  }
};
export function SwitcherNumbItems(value) {
  return { type: "SELECTNUMBITEMS",numberItems: value  }
}

