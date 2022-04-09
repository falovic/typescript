/* aşağıda message değişkeni tanımlanırken değer ataması da yapıldı.
dolayısıyla string bir ifade olduğu tespit edilebilir ve 'message.' 
yazıldığında string metodları görüntülenir. */

let message = 'Hello World'; 

message.length;

/* aşağıda ise değer ataması sonradan yapıldığı için türü 'any' kabul
edilir. dolayısıyla 'message.' yazıldığında string metodları görüntülenmez.
bunun için tür dönüşümü yapılmalıdır. */

let message;

message = 'Hello World';

let length = (<string>message).length;
// veya
let length = (message as string).length;
