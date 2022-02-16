const arr = ['Push-ups', 'Sit-ups', 'Bear Crawls', '1 mile run', '60 second plank', 'Burpees', 'Jumping Jacks', 'Squats', 'Weighted Squats', 'Inch Worms'];
const exer = nexer => {
   for(let i=0;i<nexer;i++) {
      console.log(arr[Math.floor(Math.random() * arr.length)]);
   }
}
exer(5);

function exer2 (nexer) {
   for(let i=0;i<nexer;i++) {
      console.log(arr[Math.floor(Math.random() * arr.length)]);
   }
}
exer2(7);

const genBuzz = num => {
   for(let i=1;i<=num;i++) {
      if(i%3===0 && i%5!==0) {
          console.log('Gen');
      }
      else if(i%5===0 && i%3!=0) {
         console.log('Buzz');
      }
      else if(i%5===0 && i%3===0) {
         console.log('GenBuzz');
      }
      else {
         console.log(i);         
      }     
   }
}
genBuzz(20); 


const itemlist = nameItem => {
   switch (nameItem) {
      case 'Shoes': console.log('$50'); break;
      case 'Jeans': console.log('$25'); break;  
      case 'Hat': console.log('$12'); break;
      case 'Socks': console.log('$2'); break;           
      default:  console.log('Invalid Item'); break; 
   }
}
itemlist('Shoes');



