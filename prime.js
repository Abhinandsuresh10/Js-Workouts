function prime(n){
    let flag=0;
    for(i=2;i<=n/2;i++){
        if(n%i==0){
            flag=1;
            break
        }
    }
    if(flag==0){
        console.log(`${n} is a prime number.`);
    }
    else{
        console.log(`${n} is not prime number.`);
    }
    
}

prime(29)
prime(4)