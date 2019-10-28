function log(timestamp, username, action){
  return `"INFO-{${timestamp}}" \n {${username}}:{${action}}`;
}

console.log(log(444, 'xiaoxing', 'dododo'));