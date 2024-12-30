
export function filterData(searchTxt, List) {
    const filterdata = List.filter( (item)=>item.name.toLowerCase().includes(searchTxt.toLowerCase()));
    return filterdata;
  }