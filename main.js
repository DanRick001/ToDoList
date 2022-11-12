let list = ['TODO 1', 'TODO 2', 'TODO 3', 'TODO 4', 'TODO 5']

class Main{
    remove_task(current_task){
      if (list.indexOf(current_task) != -1){ //проверка, есть или нету нужного значения в списке
        //если есть, то
        list = list.filter((n) => {return n != current_task}); //удаляем все таски
        console.log(list);
      }

      else {
        //если нету, то сообщаем пользователю
        console.log('There is no such task');
      }
    }
}

console.log(list);
//пакет prompt-sync для взаимодействия с пользователем
const prompt = require("prompt-sync")();
const task = prompt("What task you want delete:");

new Main().remove_task(task) //вызов функции из класса
