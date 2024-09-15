const accountId = 123
let accountEmail = "hitesh@google.com"
var accountPassword = 12345
accountCity = "Jaipur"
let accountState;

// accountId = 5 Not allowed

accountEmail = "hc@hc.com"
accountPassword = 454545
accountCity = "Benguluru"

console.log(accountId);

/*
Prefer not to use VAR 
becouse of issue in Block scope and Functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


