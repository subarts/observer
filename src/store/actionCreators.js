
//name file is wrong!!!

export function bondsAdd(bonds) {
  return  { type: "ADDBONDS", payload:{ bonds: [...bonds]} } ;
}
export function searchBond(value) {
  return { type: "SEARCHBONDS",searchQuerys: value  }
};

