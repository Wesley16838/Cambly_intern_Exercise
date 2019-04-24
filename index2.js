const fs = require("file-system")

fs.readFile('essay.txt', "utf-8",(err, data) => {//Read input data 

    if (err) throw err;// throw error if there is an error

    var tmpData = {}

    var data_next = data.replace(/(\r\n|\n|\r)/gm, " ");//remove line break from string

    var data_new = data_next.replace(/[&\/\\#,+()$~%.'":;*?<>{}]/g, "");//remove all special characters from string

    var data_newest = data_new.toLowerCase();//Convert string to lowercase letters

    var arr = data_newest.split(' ');//Create array

    var data = new Array(0);
   
    for (var i = 0; i<arr.length; i++){//Create obj to store data which has not sorted yet
       
        if(!(arr[i] in tmpData)){

            tmpData[arr[i]] = 1

        }else{

            tmpData[arr[i]] += 1

        }

    }

    for(var i in tmpData){

        data.push([i , tmpData[i]]);//Push two data into array(multiple array)
        
    }


    data.sort((a, b) => b[1] - a[1]); // sort arrmixed by compare the number of occurrences of each word
    
    console.log(data);

  });