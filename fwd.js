
for (let i = 1; i <= 5; i++) {
    if (i == 3) continue; 
    console.log(i);
    if (i == 5) break; 
}

let i = 1;
while (i <= 5) {
    if (i == 2) {
        i++;
        continue; 
    }
    console.log(i);
    if (i == 4) break; 
    i++;
}

let j = 1;
do {
    if (j == 3) {
        j++;
        continue; 
    }
    console.log(j);
    if (j == 5) break; 
    j++;
} while (j <= 5);


