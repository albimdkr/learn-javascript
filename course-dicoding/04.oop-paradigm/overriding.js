// Overiding
/*
Konsep lain yang lekat dengan pewarisan adalah overriding. 
Overriding di dalam OOP merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya 
sendiri pada sebuah method yang sebenarnya sudah didefinisikan pada superclass-nya.
*/

// Constuctor Overriding
/*
Constructor merupakan method spesial pada class yang akan dipanggil pada saat 
pembuatan instance, lebih tepatnya ketika menggunakan keyword new diikuti dengan nama class.
*/
const mailService = new MailService(); // akan memanggil method constructor pada class MailService


class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    // ... method lain disembunyikan
  }
   
  const mailService1 = new MailService('someReceiver');
  console.log(mailService1);
   
  /* Output:
  MailService { sender: 'someReceiver' }
  */
/*
Ketika kita melakukan pewarisan, sering kali kita perlu menambahkan properti baru yang spesifik hanya pada 
subclass tertentu. Contoh, pada WhatsAppService yang merupakan subclass dari MailService, kita membutuhkan 
properti yang mengindikasikan akun bisnis atau bukan, sehingga kita perlu membuat properti baru bernama 
isBusiness hanya pada subclass tersebut. Agar bisa melakukan ini, kita perlu melakukan constructor overriding.
*/
  class MailService {
    constructor(sender) {
      this.sender = sender;
    }
  }
   
  class WhatsAppService extends MailService {
    // overriding constructor
    constructor(sender, isBusiness) {
      super(sender);
   
      this.isBusiness = isBusiness;
    }
  }

  // Note 
  // Syntak super() tidak boleh terlewatkan

// Method Overriding
/*
Cara override method pada subclass mirip seperti 
override constructor, tetapi kita tidak perlu memanggil method super di dalamnya.

Jika dibutuhkan, kita juga bisa memanggil method sendMessage() 
dari superclass melalui keyword super.sendMessage().
*/

class MailService {
    constructor(sender) {
      this.sender = sender;
    }
   
    sendMessage(message, receiver) {
      console.log(`${this.sender} sent ${message} to ${receiver}`);
    }
  
  }
  
  class WhatsAppService extends MailService {
    constructor(sender, isBusiness) {
      super(sender);
      this.isBusiness = isBusiness;
    }
    
   
    // Overriding method
    sendMessage(message, receiver) {
      // memanggil method sendMessage pada superclass
      super.sendMessage(message, receiver);
  
      console.log('message sent via WhatsApp');
    }
  }
  
  
  const mailService2 = new MailService('someSender');
  const whatsappService = new WhatsAppService('+6281234567890', true);
  
  mailService2.sendMessage('Hai, apa kabar?', 'someReceiver');
  whatsappService.sendMessage('Hai, apa kabar?', '+6289876543210');
  
  /**
  * Output:
  * someSender sent Hai, apa kabar? to someReceiver
  * +6281234567890 sent Hai, apa kabar? to +6289876543210
  * message sent via WhatsApp
  */

