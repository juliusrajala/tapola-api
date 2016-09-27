function fetchData(requestKey){
  return({
    [requestKey]: 0,
    a: 1,
    b: 2,
    c: 3
  })
}

function getYahooData(){
  const first = fetchData('first');
  const second = fetchData('second');
  const third = fetchData('third');
  return {
    first,
    second,
    third
  }
}

module.exports = {
  getYahooData
};