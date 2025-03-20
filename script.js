/********** Menu **********/
((d)=>{
    const $btnMenu=d.querySelector(".menu-btn"),
    $menu=d.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    })

    d.addEventListener("click",e=>{
        if(!e.target.matches(".menu a")) return false;
        else if(e.target.matches(".menu .language")){
            e.preventDefault()
            let elements = d.querySelectorAll(".hidden");
            let elements2 = d.querySelectorAll(".not-hidden");
            for (const element of elements) {
                element.classList.toggle("hidden")
                element.classList.toggle("not-hidden")
            }
            for (const element of elements2) {
                element.classList.toggle("hidden")
                element.classList.toggle("not-hidden")
            }
        }

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");

    })
})(document);

/********** Carousel Movement **********/


// ((d)=>{
//     const $inputs=d.querySelectorAll(".slide-checks"), maxLength=$inputs.length;
//     let i=0;
//     let timeSlide;
//     function invocation(){
        
//         timeSlide= setInterval(()=>{

//             $inputs[i].checked=false   
//             if(i==maxLength-1){i=0}
//             else{i++}
//             $inputs[i].checked=true

        
//         },5000)
//     } 
    
//     d.addEventListener("click",e=>{
//         if(e.target.matches(".slide-checks")){
//             clearInterval(timeSlide)
//             $inputs[i].checked=false  
//             i=parseInt(e.target.dataset.number)
//             invocation()
//         }
//     })

//     invocation()
    
// })(document);

/********** Contact form **********/
((d)=>{
    const $form = d.querySelector(".form-eng"),
    $loader = d.querySelector(".loader-eng"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit",(e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://www.formsubmit.co/edward.ramirez.developer@gmail.com",{
            method:"POST",
            body: new FormData(e.target)
        })
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            location.hash="#gracias";
            $form.reset(); 
        })
        .catch(err=>{
            console.log(err)
            console.error("Error:", err.status, err.statusText);

            let message=err.statusText||"An error occurred, try again!"
            $response.querySelector(".not-hidden").innerHTML=`Error ${err.status}: ${message}`
            location.hash="#gracias";
        })
        .finally(() => {
            $loader.classList.add("none")
            setTimeout(()=>{
                location.hash ="#close"
            },3000)
            setTimeout(()=>{
                $response.querySelector(".not-hidden").innerHTML=`Thank you!<br> your comments were received.`
            },4000)
        })

    })
})(document);



((d)=>{
    const $form = d.querySelector(".form-esp"),
    $loader = d.querySelector(".loader-esp"),
    $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit",(e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://www.formsubmit.co/edward.ramirez.developer@gmail.com",{
            method:"POST",
            body: new FormData(e.target)
        })
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            location.hash="#gracias";
            $form.reset(); 
        })
        .catch(err=>{
            console.log(err)
            console.error("Error:", err.status, err.statusText);

            let message=err.statusText||"Ocurrió un error al enviar, intenta nuevamente"
            $response.querySelector(".not-hidden").innerHTML=`Error ${err.status}: ${message}`
            location.hash="#gracias";
        })
        .finally(() => {
            $loader.classList.add("none")
            setTimeout(()=>{
                location.hash ="#close"
            },3000)
            setTimeout(()=>{
                $response.querySelector(".not-hidden").innerHTML=`¡Muchas gracias!<br> por tus comentarios.`
            },4000)
        })

    })
})(document);


