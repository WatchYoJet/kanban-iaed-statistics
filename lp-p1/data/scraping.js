copy([...temp1.getElementsByTagName("tr")].slice(1).reverse().filter(v=>v.innerText.trim()).map(v => {const [id, time, _1, student,_2, _3,result]= [...v.getElementsByTagName("td")].map(v2=>v2.innerText.trim()); return [id, time, student, result].join(",");}).join("\n"))
